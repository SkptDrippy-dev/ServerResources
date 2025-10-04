-- ===================================================================
-- CLIENT SPAWNING SYSTEM
-- ===================================================================

-- Enhanced SpawnClient function
function SpawnClient(drugData)
    local playerPed = PlayerPedId()
    local playerCoords = GetEntityCoords(playerPed)
    
    -- Calculate spawn position using config values
    local spawnCoords = nil
    local attempts = 0
    local maxAttempts = Config.Selling.SpawnOptions.maxSpawnAttempts or 10
    
    while not spawnCoords and attempts < maxAttempts do
        attempts = attempts + 1
        
        if Config.Selling.SpawnDistance.method == 'forward_direction' then
            -- Spawn in front of player at random distance
            local forward = GetEntityForwardVector(playerPed)
            local distance = math.random(Config.Selling.SpawnDistance.min * 10, Config.Selling.SpawnDistance.max * 10) / 10
            local testCoords = playerCoords + forward * distance
            
            if Config.Selling.SpawnOptions.preferSafeSpawns then
                local groundFound, groundZ = GetGroundZFor_3dCoord(testCoords.x, testCoords.y, testCoords.z + Config.Selling.SpawnOptions.groundCheckHeight, false)
                if groundFound then
                    spawnCoords = vector3(testCoords.x, testCoords.y, groundZ)
                    
                    -- Check if it's water if avoidWater is enabled
                    if Config.Selling.SpawnOptions.avoidWater and GetWaterHeight(testCoords.x, testCoords.y, testCoords.z) then
                        spawnCoords = nil -- Try again
                    end
                end
            else
                spawnCoords = testCoords
            end
            
        elseif Config.Selling.SpawnDistance.method == 'random_direction' then
            -- Spawn at random angle around player
            local angle = math.random() * 2 * math.pi
            local distance = math.random(Config.Selling.SpawnDistance.min * 10, Config.Selling.SpawnDistance.max * 10) / 10
            
            local testX = playerCoords.x + math.cos(angle) * distance
            local testY = playerCoords.y + math.sin(angle) * distance
            
            if Config.Selling.SpawnOptions.preferSafeSpawns then
                local groundFound, groundZ = GetGroundZFor_3dCoord(testX, testY, playerCoords.z + Config.Selling.SpawnOptions.groundCheckHeight, false)
                if groundFound then
                    spawnCoords = vector3(testX, testY, groundZ)
                    
                    -- Check if it's water if avoidWater is enabled
                    if Config.Selling.SpawnOptions.avoidWater and GetWaterHeight(testX, testY, groundZ) then
                        spawnCoords = nil -- Try again
                    end
                end
            else
                spawnCoords = vector3(testX, testY, playerCoords.z)
            end
            
        else -- Default: 'random_radius'
            -- Original method with configurable distance
            local angle = math.random() * 2 * math.pi
            local distance = math.random(Config.Selling.SpawnDistance.min * 10, Config.Selling.SpawnDistance.max * 10) / 10
            
            local testX = playerCoords.x + math.cos(angle) * distance
            local testY = playerCoords.y + math.sin(angle) * distance
            
            if Config.Selling.SpawnOptions.preferSafeSpawns then
                local groundFound, groundZ = GetGroundZFor_3dCoord(testX, testY, playerCoords.z + Config.Selling.SpawnOptions.groundCheckHeight, false)
                if groundFound then
                    spawnCoords = vector3(testX, testY, groundZ)
                    
                    -- Check if it's water if avoidWater is enabled
                    if Config.Selling.SpawnOptions.avoidWater and GetWaterHeight(testX, testY, groundZ) then
                        spawnCoords = nil -- Try again
                    end
                end
            else
                spawnCoords = vector3(testX, testY, playerCoords.z)
            end
        end
    end
    
    -- Fallback if no good spawn found
    if not spawnCoords then
        local forward = GetEntityForwardVector(playerPed)
        spawnCoords = playerCoords + forward * Config.Selling.SpawnDistance.max
        local groundFound, groundZ = GetGroundZFor_3dCoord(spawnCoords.x, spawnCoords.y, spawnCoords.z + 10.0, false)
        if groundFound then
            spawnCoords = vector3(spawnCoords.x, spawnCoords.y, groundZ)
        end
    end
    
    -- Determine what type of ped is required for this drug
    local requiredPedType = GetRequiredPedTypeForDrug(drugData.itemName or drugData.item)
    
    -- Select appropriate ped model based on required type
    local pedModel = SelectPedModelForType(requiredPedType)
    local hash = GetHashKey(pedModel)
    
    RequestModel(hash)
    while not HasModelLoaded(hash) do
        Wait(10)
    end
    
    -- Create ped
    local ped = CreatePed(4, hash, spawnCoords.x, spawnCoords.y, spawnCoords.z, 0.0, true, false)
    SetEntityAsMissionEntity(ped, true, true)
    SetPedKeepTask(ped, true)
    SetBlockingOfNonTemporaryEvents(ped, true)
    
    -- Make ped walk to player
    TaskGoToEntity(ped, playerPed, -1, 1.0, 2.0, 0, 0)
    
    -- Create blip
    local blip = AddBlipForEntity(ped)
    SetBlipSprite(blip, 280)
    SetBlipColour(blip, 59)
    SetBlipScale(blip, 0.8)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString("Drug Client")
    EndTextCommandSetBlipName(blip)
    
    -- Update state
    local state = GetSellingState()
    state.currentClient = ped
    state.clientBlip = blip
    state.clientReachedPlayer = false
    state.clientWaitStartTime = 0
    state.currentClientPedType = GetPedType(pedModel)
    SetSellingState(state)
    
    return ped
end