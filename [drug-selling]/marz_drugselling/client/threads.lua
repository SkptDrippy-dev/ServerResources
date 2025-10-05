-- ===================================================================
-- CLIENT THREADS & MAIN LOOPS
-- ===================================================================

-- Death monitoring thread
CreateThread(function()
    while true do
        Wait(1000)
        
        local state = GetSellingState()
        if state.isSelling or state.currentClient then
            local playerDead = IsPlayerDead()
            local clientDead = IsClientDead()
            
            if playerDead and (state.isSelling or state.currentClient) then
                Notify('Drug deal cancelled - you died!', 'error')
                CleanupDeal()
            end
            
            if clientDead and state.currentClient then
                Notify('Drug deal cancelled - client was killed!', 'error')
                CleanupDeal()
            end
        end
    end
end)

-- Money wash interaction thread
CreateThread(function()
    while true do
        local sleep = 1000
        
        if Config.MoneyWash and Config.MoneyWash.Enabled and Config.MoneyWash.UsePed then
            local washData = GetMoneyWashData()
            
            if washData.ped and DoesEntityExist(washData.ped) and 
               GetResourceState('ox_target') ~= 'started' and 
               GetResourceState('qb-target') ~= 'started' then
                
                local playerCoords = GetEntityCoords(PlayerPedId())
                local pedCoords = GetEntityCoords(washData.ped)
                local distance = #(playerCoords - pedCoords)
                
                if distance <= 2.0 then
                    sleep = 0
                    DrawText3D(pedCoords, '[E] ' .. (Config.Notifications.washMoney or 'Wash Money'))
                    
                    if IsControlJustReleased(0, 38) then
                        OpenMoneyWashInput()
                    end
                end
            end
        end
        
        Wait(sleep)
    end
end)

-- Main drug selling interaction thread
CreateThread(function()
    while true do
        local sleep = 1000
        
        local state = GetSellingState()
        
        -- Client tracking and timeout handling
        if state.currentClient and DoesEntityExist(state.currentClient) and not state.saleInProgress then
            local playerPed = PlayerPedId()
            local playerCoords = GetEntityCoords(playerPed)
            local clientCoords = GetEntityCoords(state.currentClient)
            local distance = #(playerCoords - clientCoords)
            
            if distance <= Config.Selling.SellDistance + 1.0 and not state.clientReachedPlayer then
                state.clientReachedPlayer = true
                state.clientWaitStartTime = GetGameTimer()
                SetSellingState(state)
            end
            
            if state.clientReachedPlayer then
                local waitTime = GetGameTimer() - state.clientWaitStartTime
                if waitTime > Config.Selling.ClientTimeout then
                    Notify(Config.Notifications.clientLeft or 'Client left - they got tired of waiting!', 'error')
                    CleanupDeal()
                end
            end
            
            if not state.clientReachedPlayer and IsClientStuck() then
                TeleportClientToSafePosition()
            end
        end
        
        -- Drug selling interaction
        if state.currentClient and DoesEntityExist(state.currentClient) and 
           state.dealData and not state.saleInProgress then
            
            local playerPed = PlayerPedId()
            local playerCoords = GetEntityCoords(playerPed)
            local clientCoords = GetEntityCoords(state.currentClient)
            local distance = #(playerCoords - clientCoords)
            
            if distance <= Config.Selling.SellDistance then
                sleep = 0
                
                DrawText3D(clientCoords, string.format('[E] Sell %dx %s - $%d', 
                    state.dealData.amount, state.dealData.label, state.dealData.price))
                
                if IsControlJustReleased(0, 38) then
                    state.saleInProgress = true
                    SetSellingState(state)
                    
                    -- Clear tasks and position entities
                    ClearPedTasks(playerPed)
                    ClearPedTasks(state.currentClient)
                    
                    SetEntityCollision(playerPed, true, true)
                    SetEntityCollision(state.currentClient, true, true)
                    
                    -- Perform deal animation
                    PerformDealAnimation(state.currentClient, state.dealData)
                end
            end
        end
        
        Wait(sleep)
    end
end)

-- Money wash point management (for non-target servers)
if Config.MoneyWash and Config.MoneyWash.Enabled and Config.MoneyWash.UsePed and 
   GetResourceState('ox_target') ~= 'started' and GetResourceState('qb-target') ~= 'started' then
    
    local washPoint = lib.points.new({
        coords = Config.MoneyWash.Location,
        distance = 30
    })

    function washPoint:onEnter()
        CreateMoneyWashPed()
    end

    function washPoint:onExit()
        local washData = GetMoneyWashData()
        
        if washData.ped and DoesEntityExist(washData.ped) then
            DeleteEntity(washData.ped)
            washData.ped = nil
        end
        
        for _, entity in pairs(washData.entities) do
            if entity and DoesEntityExist(entity) then
                DeleteEntity(entity)
            end
        end
        washData.entities = {}
        
        SetMoneyWashData(washData)
    end
end