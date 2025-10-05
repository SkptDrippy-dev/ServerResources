-- ===================================================================
-- DRUG SELLING CORE FUNCTIONS
-- ===================================================================

-- Clean up deal
function CleanupDeal()
    local state = GetSellingState()
    
    if state.currentClient and DoesEntityExist(state.currentClient) then
        DeleteEntity(state.currentClient)
    end
    if state.clientBlip then
        RemoveBlip(state.clientBlip)
    end
    
    -- Reset all selling state
    SetSellingState({})
    SetClientTracking(nil, 0)
end

-- Start deal function with FIXED zone checking
function StartDeal()
    local state = GetSellingState()
    
    if state.isSelling then
        Notify(Config.Notifications.alreadySelling or 'You are already looking for a client!', 'error')
        return
    end
    
    -- CRITICAL: Check zone FIRST before doing anything else
    local inZone, zoneName = IsInSellingZone()
    if not inZone then
        Notify(Config.Notifications.notInSellingZone or 'You cannot sell drugs in this area!', 'error')
        return
    end
    
    -- Only proceed if in valid zone
    TriggerServerEvent('marz_drugselling:server:checkRequirements')
end

-- Animation sequences for drug deals
function PerformDealAnimation(currentClient, dealData)
    local playerPed = PlayerPedId()
    
    -- Position entities correctly
    local playerCoords = GetEntityCoords(playerPed)
    local clientCoords = GetEntityCoords(currentClient)
    local targetDistance = 1.1
    
    local dx = clientCoords.x - playerCoords.x
    local dy = clientCoords.y - playerCoords.y
    local currentDistance = math.sqrt(dx*dx + dy*dy)
    
    if currentDistance > 0 then
        dx = dx / currentDistance
        dy = dy / currentDistance
        
        local clientFinalX = playerCoords.x + dx * targetDistance
        local clientFinalY = playerCoords.y + dy * targetDistance
        
        local clientGroundFound, clientGroundZ = GetGroundZFor_3dCoord(clientFinalX, clientFinalY, clientCoords.z + 5.0, false)
        local finalClientZ = clientGroundFound and clientGroundZ or clientCoords.z
        
        SetEntityCoords(currentClient, clientFinalX, clientFinalY, finalClientZ, false, false, false, true)
        
        FreezeEntityPosition(playerPed, true)
        FreezeEntityPosition(currentClient, true)
        
        SetTimeout(300, function()
            local playerHeading = GetHeadingTowardsEntity(playerPed, currentClient)
            local clientHeading = GetHeadingTowardsEntity(currentClient, playerPed)
            
            SetEntityHeading(playerPed, playerHeading)
            SetEntityHeading(currentClient, clientHeading)
            
            SetTimeout(400, function()
                local animationType = math.random(1, 3)
                local animationDuration = 4000
                
                -- Create props for animation
                local obj = CreateObject(GetHashKey('prop_weed_bottle'), 0, 0, 0, true, true, true)
                local obj2 = CreateObject(GetHashKey('hei_prop_heist_cash_pile'), 0, 0, 0, true, true, true)
                
                -- Perform different animation types
                if animationType == 1 then
                    RequestAnimDict("mp_ped_interaction")
                    while not HasAnimDictLoaded("mp_ped_interaction") do
                        Wait(10)
                    end
                    
                    AttachEntityToEntity(obj, playerPed, GetPedBoneIndex(playerPed, 57005), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                    AttachEntityToEntity(obj2, currentClient, GetPedBoneIndex(currentClient, 57005), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                    
                    TaskPlayAnim(playerPed, "mp_ped_interaction", "hugs_guy_a", 8.0, -8.0, animationDuration, 0, 0, false, false, false)
                    TaskPlayAnim(currentClient, "mp_ped_interaction", "hugs_guy_b", 8.0, -8.0, animationDuration, 0, 0, false, false, false)
                    
                    SetTimeout(2000, function()
                        if DoesEntityExist(obj) and DoesEntityExist(obj2) then
                            AttachEntityToEntity(obj2, playerPed, GetPedBoneIndex(playerPed, 57005), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                            AttachEntityToEntity(obj, currentClient, GetPedBoneIndex(currentClient, 57005), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                        end
                    end)
                    
                elseif animationType == 2 then
                    RequestAnimDict("mp_ped_interaction")
                    while not HasAnimDictLoaded("mp_ped_interaction") do
                        Wait(10)
                    end
                    
                    AttachEntityToEntity(obj, playerPed, GetPedBoneIndex(playerPed, 18905), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                    AttachEntityToEntity(obj2, currentClient, GetPedBoneIndex(currentClient, 18905), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                    
                    TaskPlayAnim(playerPed, "mp_ped_interaction", "handshake_guy_a", 8.0, -8.0, animationDuration, 0, 0, false, false, false)
                    TaskPlayAnim(currentClient, "mp_ped_interaction", "handshake_guy_b", 8.0, -8.0, animationDuration, 0, 0, false, false, false)
                    
                    SetTimeout(2000, function()
                        if DoesEntityExist(obj) and DoesEntityExist(obj2) then
                            AttachEntityToEntity(obj2, playerPed, GetPedBoneIndex(playerPed, 18905), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                            AttachEntityToEntity(obj, currentClient, GetPedBoneIndex(currentClient, 18905), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                        end
                    end)
                    
                else
                    RequestAnimDict("mp_common")
                    while not HasAnimDictLoaded("mp_common") do
                        Wait(10)
                    end
                    
                    AttachEntityToEntity(obj, playerPed, GetPedBoneIndex(playerPed, 57005), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                    AttachEntityToEntity(obj2, currentClient, GetPedBoneIndex(currentClient, 57005), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                    
                    TaskPlayAnim(playerPed, "mp_common", "givetake1_a", 8.0, -8.0, animationDuration, 0, 0, false, false, false)
                    TaskPlayAnim(currentClient, "mp_common", "givetake1_a", 8.0, -8.0, animationDuration, 0, 0, false, false, false)
                    
                    SetTimeout(2000, function()
                        if DoesEntityExist(obj) and DoesEntityExist(obj2) then
                            AttachEntityToEntity(obj2, playerPed, GetPedBoneIndex(playerPed, 57005), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                            AttachEntityToEntity(obj, currentClient, GetPedBoneIndex(currentClient, 57005), 0.13, 0.02, 0.0, -90.0, 0, 0, true, true, false, true, 1, true)
                        end
                    end)
                end
                
                -- Clean up props after animation
                SetTimeout(animationDuration, function()
                    if DoesEntityExist(obj) then
                        DeleteEntity(obj)
                    end
                    if DoesEntityExist(obj2) then
                        DeleteEntity(obj2)
                    end
                end)
                
                -- Complete the sale
                TriggerServerEvent('marz_drugselling:server:completeSale', dealData)
                
                -- Reset selling state
                local currentState = GetSellingState()
                currentState.dealData = nil
                currentState.isSelling = false
                
                local oldClient = currentState.currentClient
                local oldBlip = currentState.clientBlip
                
                currentState.currentClient = nil
                currentState.clientBlip = nil
                currentState.saleInProgress = false
                currentState.currentClientPedType = nil
                SetSellingState(currentState)
                
                -- Unfreeze player after delay
                SetTimeout(2000, function()
                    FreezeEntityPosition(playerPed, false)
                end)
                
                -- Handle client cleanup after animation
                SetTimeout(animationDuration, function()
                    if oldClient and DoesEntityExist(oldClient) then
                        FreezeEntityPosition(oldClient, false)
                        ClearPedTasks(oldClient)
                        
                        local clientCoords = GetEntityCoords(oldClient)
                        local angle = math.random() * 2 * math.pi
                        local walkDistance = math.random(50, 100)
                        
                        local walkX = clientCoords.x + math.cos(angle) * walkDistance
                        local walkY = clientCoords.y + math.sin(angle) * walkDistance
                        
                        local groundFound, groundZ = GetGroundZFor_3dCoord(walkX, walkY, clientCoords.z + 10.0, false)
                        local walkZ = groundFound and groundZ or clientCoords.z
                        
                        TaskGoToCoordAnyMeans(oldClient, walkX, walkY, walkZ, 1.0, 0, 0, 786603, 0xbf800000)
                        
                        -- Final cleanup
                        SetTimeout(15000, function()
                            if oldClient and DoesEntityExist(oldClient) then
                                DeleteEntity(oldClient)
                            end
                            if oldBlip and DoesBlipExist(oldBlip) then
                                RemoveBlip(oldBlip)
                            end
                        end)
                    end
                end)
            end)
        end)
    end
end