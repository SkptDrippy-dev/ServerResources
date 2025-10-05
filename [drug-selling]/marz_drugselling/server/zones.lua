-- ===================================================================
-- ZONE MANAGEMENT FUNCTIONS
-- ===================================================================

-- FIXED: Zone enforcement function
function IsInSellingZone()
    -- If zone enforcement is disabled, allow selling anywhere
    if not Config.ZoneSettings or Config.ZoneSettings.enforceZones == false then
        return true, nil
    end
    
    -- If enforcement is enabled but no zones are configured, deny selling everywhere
    if not Config.SellingZones or #Config.SellingZones == 0 then
        return false, nil
    end
    
    local playerCoords = GetEntityCoords(PlayerPedId())
    
    -- Check if player is in any of the selling zones
    for i = 1, #Config.SellingZones do
        local zone = Config.SellingZones[i]
        local distance = #(playerCoords - zone.coords)
        
        if distance <= zone.radius then
            return true, zone.name
        end
    end
    
    -- Player is not in any selling zone
    return false, nil
end

-- Create zone blips
function CreateSellingZoneBlips()
    if not Config.ZoneSettings or not Config.ZoneSettings.showZoneBlips then
        return
    end
    
    if not Config.SellingZones or #Config.SellingZones == 0 then
        return
    end
    
    local zoneBlips = GetZoneBlips()
    
    for i, zone in pairs(Config.SellingZones) do
        local blip = AddBlipForRadius(zone.coords.x, zone.coords.y, zone.coords.z, zone.radius)
        SetBlipHighDetail(blip, true)
        SetBlipColour(blip, Config.ZoneSettings.blipColor or 1)
        SetBlipAlpha(blip, 80)
        SetBlipAsShortRange(blip, true)
        
        local centerBlip = AddBlipForCoord(zone.coords.x, zone.coords.y, zone.coords.z)
        SetBlipSprite(centerBlip, Config.ZoneSettings.blipSprite or 378)
        SetBlipScale(centerBlip, Config.ZoneSettings.blipScale or 0.8)
        SetBlipColour(centerBlip, Config.ZoneSettings.blipColor or 1)
        SetBlipAsShortRange(centerBlip, true)
        BeginTextCommandSetBlipName("STRING")
        AddTextComponentString(zone.name or 'Drug Zone')
        EndTextCommandSetBlipName(centerBlip)
        
        table.insert(zoneBlips, {radius = blip, center = centerBlip})
    end
    
    SetZoneBlips(zoneBlips)
end

-- Clean up zone blips
function CleanupSellingZoneBlips()
    local zoneBlips = GetZoneBlips()
    
    for _, blipData in pairs(zoneBlips) do
        if DoesBlipExist(blipData.radius) then
            RemoveBlip(blipData.radius)
        end
        if DoesBlipExist(blipData.center) then
            RemoveBlip(blipData.center)
        end
    end
    
    SetZoneBlips({})
end