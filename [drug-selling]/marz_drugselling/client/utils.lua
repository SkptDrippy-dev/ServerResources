-- ===================================================================
-- CLIENT UTILITY FUNCTIONS
-- ===================================================================

-- Unified notification system
function Notify(message, type)
    if Config.NotificationSystem == 'auto' then
        if GetResourceState('ox_lib') == 'started' and lib and lib.notify then
            pcall(function()
                lib.notify({
                    title = 'Drug Dealer',
                    description = message,
                    type = type or 'info',
                    position = 'top'
                })
            end)
        elseif GetResourceState('okokNotify') == 'started' then
            local okokType = type == 'success' and 'success' or type == 'error' and 'error' or 'info'
            exports['okokNotify']:Alert('Drug Dealer', message, 5000, okokType)
        else
            local QBCore = GetQBCore()
            local ESX = GetESX()
            if QBCore and QBCore.Functions and QBCore.Functions.Notify then
                QBCore.Functions.Notify(message, type or 'primary')
            elseif ESX and ESX.ShowNotification then
                ESX.ShowNotification(message)
            else
                BeginTextCommandThefeedPost("STRING")
                AddTextComponentSubstringPlayerName('[Drug Dealer] ' .. message)
                EndTextCommandThefeedPostTicker(true, true)
            end
        end
    elseif Config.NotificationSystem == 'ox_lib' and GetResourceState('ox_lib') == 'started' and lib and lib.notify then
        pcall(function()
            lib.notify({
                title = 'Drug Dealer',
                description = message,
                type = type or 'info',
                position = 'top'
            })
        end)
    elseif Config.NotificationSystem == 'okok' and GetResourceState('okokNotify') == 'started' then
        local okokType = type == 'success' and 'success' or type == 'error' and 'error' or 'info'
        exports['okokNotify']:Alert('Drug Dealer', message, 5000, okokType)
    elseif Config.NotificationSystem == 'esx' then
        local ESX = GetESX()
        if ESX and ESX.ShowNotification then
            ESX.ShowNotification(message)
        end
    elseif Config.NotificationSystem == 'qbcore' then
        local QBCore = GetQBCore()
        if QBCore and QBCore.Functions and QBCore.Functions.Notify then
            QBCore.Functions.Notify(message, type or 'primary')
        end
    else
        BeginTextCommandThefeedPost("STRING")
        AddTextComponentSubstringPlayerName('[Drug Dealer] ' .. message)
        EndTextCommandThefeedPostTicker(true, true)
    end
end

-- 3D text rendering
function DrawText3D(coords, text)
    local onScreen, _x, _y = World3dToScreen2d(coords.x, coords.y, coords.z + 1.0)
    if onScreen then
        local camCoords = GetFinalRenderedCamCoord()
        local distance = #(coords - camCoords)
        local scale = (1 / distance) * 2
        local fov = (1 / GetGameplayCamFov()) * 100
        scale = scale * fov * 0.7
        
        SetTextScale(0.0, scale)
        SetTextFont(0)
        SetTextProportional(1)
        SetTextColour(255, 255, 255, 215)
        SetTextDropshadow(0, 0, 0, 0, 255)
        SetTextEdge(2, 0, 0, 0, 150)
        SetTextDropShadow()
        SetTextOutline()
        SetTextEntry("STRING")
        SetTextCentre(true)
        AddTextComponentString(text)
        DrawText(_x, _y)
    end
end

-- Animation helper
function PlayAnimation(ped, dict, anim, duration)
    RequestAnimDict(dict)
    while not HasAnimDictLoaded(dict) do
        Wait(10)
    end
    TaskPlayAnim(ped, dict, anim, 8.0, -8.0, duration or -1, 1, 0, false, false, false)
end

-- Player state checks
function IsPlayerDead()
    local playerPed = PlayerPedId()
    return IsEntityDead(playerPed) or IsPedDeadOrDying(playerPed, true) or GetEntityHealth(playerPed) <= 100
end

function IsClientDead()
    local state = GetSellingState()
    if not state.currentClient or not DoesEntityExist(state.currentClient) then
        return true
    end
    return IsEntityDead(state.currentClient) or IsPedDeadOrDying(state.currentClient, true) or GetEntityHealth(state.currentClient) <= 100
end

-- Entity heading calculation
function GetHeadingTowardsEntity(entity1, entity2)
    local pos1 = GetEntityCoords(entity1)
    local pos2 = GetEntityCoords(entity2)
    local dx = pos2.x - pos1.x
    local dy = pos2.y - pos1.y
    local heading = math.atan2(-dx, dy) * 180.0 / math.pi
    if heading < 0 then
        heading = heading + 360.0
    end
    return heading
end

-- Safe position finding
function FindSafePosition(coords)
    local safeCoords = nil
    local attempts = 0
    
    while not safeCoords and attempts < 20 do
        local angle = math.random() * 2 * math.pi
        local distance = math.random(5, 15)
        
        local testX = coords.x + math.cos(angle) * distance
        local testY = coords.y + math.sin(angle) * distance
        
        local groundFound, groundZ = GetGroundZFor_3dCoord(testX, testY, coords.z + 10.0, false)
        
        if groundFound then
            safeCoords = vector3(testX, testY, groundZ)
        end
        
        attempts = attempts + 1
    end
    
    return safeCoords or coords
end