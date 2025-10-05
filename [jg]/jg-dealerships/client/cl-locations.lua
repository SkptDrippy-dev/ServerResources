local blips, points = {}, {}

---@param name string
---@param coords vector3
---@param blipId integer
---@param blipColour integer
---@param blipScale number
local function createBlip(name, coords, blipId, blipColour, blipScale)
  local blip = AddBlipForCoord(coords.x, coords.y, coords.z)
  SetBlipSprite(blip, blipId)
  SetBlipColour(blip, blipColour)
  SetBlipScale(blip, blipScale)
  SetBlipAsShortRange(blip, true)
  BeginTextCommandSetBlipName("STRING")
  AddTextComponentString(name)
  EndTextCommandSetBlipName(blip)
  return blip
end

---@param coords vector3
---@param marker table
local function drawMarkerOnFrame(coords, marker)
  ---@diagnostic disable-next-line: missing-parameter
  DrawMarker(marker.id, coords.x, coords.y, coords.z, 0, 0, 0, 0, 0, 0, marker.size.x,  marker.size.y, marker.size.z, marker.color.r, marker.color.g, marker.color.b, marker.color.a, marker.bobUpAndDown, marker.faceCamera, 0, marker.rotate, marker.drawOnEnts)
end

---@param coords vector3
---@param dist number
---@param marker table | false | nil
---@param onEnter function
---@param onExit function
---@param nearby function | nil
local function createLocation(coords, dist, marker, onEnter, onExit, nearby)
  local point = lib.points.new({
    coords = coords,
    distance = dist,
  })

  function point:onEnter() onEnter(self) end
  function point:onExit() onExit(self) end
  if nearby then function point:nearby() nearby(self) end end
  points[#points+1] = point
  
  if not marker then return end

  local markerPoint = lib.points.new({
    coords = coords,
    distance = dist * 4,
  })

  function markerPoint:nearby() drawMarkerOnFrame(coords, marker) end
  points[#points+1] = markerPoint
end


-- New code

local function createDealershipZonesAndBlips()
    for _, point in ipairs(points) do point:remove() end
    for _, blip in ipairs(blips) do RemoveBlip(blip) end

    local playerPed = PlayerPedId()
    local dealerships = lib.callback.await("jg-dealerships:server:get-locations-data", false)

    local activeZones = {}

    local function createZone(dealer, zoneType, coords, radius, label, icon, event)
        local zoneName = dealer.name .. "_" .. zoneType

        if activeZones[zoneName] then return end -- already created

        if Config.UseTarget and Config.TargetSystem == "ox_target" then
            exports.ox_target:addSphereZone({
                name = zoneName,
                coords = coords,
                radius = radius,
                debug = true,
                options = {
                    {
                        label = label,
                        icon = icon,
                        onSelect = function()
                            TriggerEvent(event, dealer.name)
                        end
                    }
                }
            })
        elseif Config.UseTarget and Config.TargetSystem == "qb-target" then
            exports['qb-target']:AddCircleZone(zoneName, coords, radius, {
                name = zoneName,
                debugPoly = false,
            }, {
                options = {
                    {
                        type = "client",
                        event = event,
                        icon = icon,
                        label = label,
                    }
                },
                distance = 2.5,
            })
        else
            createLocation(
                coords,
                radius,
                not dealer.config.hideMarkers and dealer.config.markers or false,
                function() Framework.Client.ShowTextUI(label) end,
                function() Framework.Client.HideTextUI() end,
                function()
                    if IsControlJustPressed(0, Config.OpenShowroomKeyBind) then
                        TriggerEvent(event, dealer.name)
                    end
                end
            )
        end

        activeZones[zoneName] = true
    end

    local function removeZone(zoneName)
        if Config.UseTarget and Config.TargetSystem == "ox_target" then
            exports.ox_target:removeZone(zoneName)
        elseif Config.UseTarget and Config.TargetSystem == "qb-target" then
            exports['qb-target']:RemoveZone(zoneName)
        end
        activeZones[zoneName] = nil
    end

    -- Blip creation + distance-based zone loop
    CreateThread(function()
        while true do
            local pedCoords = GetEntityCoords(PlayerPedId())

            for _, dealer in ipairs(dealerships) do
                if dealer and dealer.config then
                    if IsShowroomAccessAllowed(dealer.name) or (dealer.type == "owned" and dealer.managementAccess) then
                        -- Showroom
                        local showroomData = dealer.config.openShowroom
                        local showroomCoords = showroomData?.coords or showroomData
                        local showroomRadius = type(showroomData) == "table" and showroomData.size or 5
                        local showroomZoneName = dealer.name .. "_showroom"

                        if #(pedCoords - showroomCoords) <= showroomRadius + 5.0 then
                            createZone(dealer, "showroom", showroomCoords, showroomRadius, Config.OpenShowroomPrompt, "fas fa-store", "jg-dealerships:client:open-showroom")
                        else
                            if activeZones[showroomZoneName] then
                                removeZone(showroomZoneName)
                            end
                        end

                        -- Sell
                        if dealer.config.enableSellVehicle then
                            local sellData = dealer.config.sellVehicle
                            local sellCoords = sellData?.coords or sellData
                            local sellRadius = type(sellData) == "table" and sellData.size or 5
                            local sellZoneName = dealer.name .. "_sell"

                            if #(pedCoords - sellCoords) <= sellRadius + 5.0 then
                                createZone(dealer, "sell", sellCoords, sellRadius, Config.SellVehiclePrompt, "fas fa-car", "jg-dealerships:client:sell-vehicle")
                            else
                                if activeZones[sellZoneName] then
                                    removeZone(sellZoneName)
                                end
                            end
                        end

                        -- Blip
                        if not dealer.config.hideBlip and not dealer._blipCreated then
                            local blipName = Locale.dealership .. ": " .. dealer.label
                            local blip = createBlip(
                                blipName,
                                showroomCoords,
                                dealer.config.blip.id,
                                dealer.config.blip.color,
                                dealer.config.blip.scale
                            )
                            blips[#blips + 1] = blip
                            dealer._blipCreated = true
                        end
                    end

                    -- Management
                    if dealer.type == "owned" and dealer.managementAccess then
                        local mgmtData = dealer.config.openManagement
                        local mgmtCoords = mgmtData?.coords or mgmtData
                        local mgmtRadius = type(mgmtData) == "table" and mgmtData.size or 5
                        local mgmtZoneName = dealer.name .. "_management"

                        if #(pedCoords - mgmtCoords) <= mgmtRadius + 5.0 then
                            createZone(dealer, "management", mgmtCoords, mgmtRadius, Config.OpenManagementPrompt, "fas fa-briefcase", "jg-dealerships:client:open-management")
                        else
                            if activeZones[mgmtZoneName] then
                                removeZone(mgmtZoneName)
                            end
                        end
                    end
                end
            end

            Wait(1500) -- Check every 1.5 seconds
        end
    end)
end



RegisterNetEvent("jg-dealerships:client:update-blips-text-uis", function()
  Wait(1000)
  createDealershipZonesAndBlips()
  SpawnAllDealershipDisplayVehicles()
end)

CreateThread(function()
  Wait(1000)
  createDealershipZonesAndBlips()
  SpawnAllDealershipDisplayVehicles()
end)