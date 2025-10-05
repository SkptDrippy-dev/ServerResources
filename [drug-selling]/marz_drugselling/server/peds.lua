-- ===================================================================
-- PED MANAGEMENT & SPECIALIZED SELLING
-- ===================================================================

-- Determine ped type based on model
function GetPedType(pedModel)
    if not Config.SpecializedSelling or not Config.SpecializedSelling.enabled then
        return 'regular'
    end
    
    -- Check fat peds
    for _, model in pairs(Config.SpecializedSelling.fatPedModels or {}) do
        if pedModel == model then
            return 'fat'
        end
    end
    
    -- Check female peds
    for _, model in pairs(Config.SpecializedSelling.femalePedModels or {}) do
        if pedModel == model then
            return 'female'
        end
    end
    
    -- Check muscle peds
    for _, model in pairs(Config.SpecializedSelling.musclePedModels or {}) do
        if pedModel == model then
            return 'muscle'
        end
    end
    
    return 'regular'
end

-- Get required ped type for drug
function GetRequiredPedTypeForDrug(drugName)
    if not Config.SpecializedSelling or not Config.SpecializedSelling.enabled then
        return 'regular'
    end
    
    if Config.SpecializedSelling.fatPedDrugs and Config.SpecializedSelling.fatPedDrugs[drugName] then
        return 'fat'
    end
    
    if Config.SpecializedSelling.femalePedDrugs and Config.SpecializedSelling.femalePedDrugs[drugName] then
        return 'female'
    end
    
    if Config.SpecializedSelling.musclePedDrugs and Config.SpecializedSelling.musclePedDrugs[drugName] then
        return 'muscle'
    end
    
    return 'regular'
end

-- Select appropriate ped model
function SelectPedModelForType(requiredPedType)
    if not Config.SpecializedSelling or not Config.SpecializedSelling.enabled or requiredPedType == 'regular' then
        return Config.ClientPeds[math.random(#Config.ClientPeds)]
    end
    
    if requiredPedType == 'fat' and Config.SpecializedSelling.fatPedModels then
        return Config.SpecializedSelling.fatPedModels[math.random(#Config.SpecializedSelling.fatPedModels)]
    elseif requiredPedType == 'female' and Config.SpecializedSelling.femalePedModels then
        return Config.SpecializedSelling.femalePedModels[math.random(#Config.SpecializedSelling.femalePedModels)]
    elseif requiredPedType == 'muscle' and Config.SpecializedSelling.musclePedModels then
        return Config.SpecializedSelling.musclePedModels[math.random(#Config.SpecializedSelling.musclePedModels)]
    end
    
    return Config.ClientPeds[math.random(#Config.ClientPeds)]
end

-- Client movement tracking
function IsClientStuck()
    local state = GetSellingState()
    local tracking = GetClientTracking()
    
    if not state.currentClient or not DoesEntityExist(state.currentClient) then
        return false
    end
    
    local currentPos = GetEntityCoords(state.currentClient)
    local playerPos = GetEntityCoords(PlayerPedId())
    local distanceToPlayer = #(currentPos - playerPos)
    
    if distanceToPlayer <= Config.Selling.SellDistance + 2.0 then
        return false
    end
    
    if not tracking.lastPos then
        SetClientTracking(currentPos, GetGameTimer())
        return false
    end
    
    local distance = #(currentPos - tracking.lastPos)
    
    if distance < 0.5 then
        if GetGameTimer() - tracking.stuckTime > 8000 then
            return true
        end
    else
        SetClientTracking(currentPos, GetGameTimer())
    end
    
    return false
end

-- Teleport client to safe position
function TeleportClientToSafePosition()
    local state = GetSellingState()
    
    if not state.currentClient or not DoesEntityExist(state.currentClient) then
        return
    end
    
    local playerCoords = GetEntityCoords(PlayerPedId())
    local safePos = FindSafePosition(playerCoords)
    
    ClearPedTasks(state.currentClient)
    SetEntityCoords(state.currentClient, safePos.x, safePos.y, safePos.z, false, false, false, true)
    
    SetTimeout(1000, function()
        local currentState = GetSellingState()
        if currentState.currentClient and DoesEntityExist(currentState.currentClient) then
            local playerPed = PlayerPedId()
            TaskGoToEntity(currentState.currentClient, playerPed, -1, 1.0, 2.0, 0, 0)
        end
    end)
    
    SetClientTracking(nil, 0)
end