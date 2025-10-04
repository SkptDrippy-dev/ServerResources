-- ===================================================================
-- SERVER EVENT HANDLERS
-- ===================================================================

-- FIXED: Burner phone usage with zone checking
RegisterNetEvent('marz_drugselling:server:useBurnerPhone')
AddEventHandler('marz_drugselling:server:useBurnerPhone', function()
    local src = source
    print(string.format('[MarzDrugSelling] SERVER: BURNER PHONE EVENT RECEIVED FROM PLAYER %s', src))
    
    local Player = GetPlayer(src)
    if not Player then
        print('[MarzDrugSelling] SERVER: ERROR - Could not get player data for burner phone usage')
        TriggerClientEvent('marz_drugselling:client:notify', src, 'Error: Could not get player data', 'error')
        return
    end
    
    -- CRITICAL: Check zone first before allowing burner phone usage
    TriggerClientEvent('marz_drugselling:client:checkZoneForBurnerPhone', src)
end)

-- Zone check result from burner phone
RegisterNetEvent('marz_drugselling:server:burnerPhoneZoneResult')
AddEventHandler('marz_drugselling:server:burnerPhoneZoneResult', function(inZone, zoneName)
    local src = source
    
    -- If not in zone, deny the burner phone usage
    if not inZone then
        TriggerClientEvent('marz_drugselling:client:notify', src, 
            Config.Notifications.notInSellingZone or 'You cannot sell drugs in this area!', 'error')
        return
    end
    
    -- Now proceed with original burner phone logic
    local Player = GetPlayer(src)
    if not Player then
        return
    end
    
    -- Check burner phone requirement
    local hasBurnerPhone = HasItem(src, Config.BurnerPhoneItem, 1)
    if Config.RequireBurnerPhone and not hasBurnerPhone then
        local message = Config.Notifications.noBurnerPhone or 'You need a burner phone to sell drugs'
        TriggerClientEvent('marz_drugselling:client:notify', src, message, 'error')
        return
    end
    
    -- Check police requirement
    local policeCount = GetPoliceCount()
    if Config.MinPolice and policeCount < Config.MinPolice then
        local message = Config.Notifications.notEnoughPolice or 'Not enough police online'
        TriggerClientEvent('marz_drugselling:client:notify', src, message, 'error')
        return
    end
    
    -- Check available drugs
    local availableDrugs = GetAvailableDrugs(src)
    if #availableDrugs == 0 then
        local message = Config.Notifications.noDrugs or 'You have no drugs to sell'
        TriggerClientEvent('marz_drugselling:client:notify', src, message, 'error')
        return
    end
    
    -- Create deal
    local selectedDrug = availableDrugs[math.random(#availableDrugs)]
    local dealData = CreateDealData(selectedDrug, src)
    
    if not dealData then
        local message = Config.Notifications.noDrugs or 'You have no drugs to sell'
        TriggerClientEvent('marz_drugselling:client:notify', src, message, 'error')
        return
    end
    
    print(string.format('[MarzDrugSelling] SERVER: Starting burner phone deal for player %s: %sx %s for $%s', 
        GetPlayerName(src), dealData.amount, dealData.label, dealData.price))
    
    TriggerClientEvent('marz_drugselling:client:startSelling', src, dealData, availableDrugs)
end)

-- Check requirements event (for /dealer command)
RegisterServerEvent('marz_drugselling:server:checkRequirements')
AddEventHandler('marz_drugselling:server:checkRequirements', function()
    local src = source
    print(string.format('[MarzDrugSelling] SERVER: checkRequirements event received from player %s', src))
    
    -- NEW: Check if commands are enabled
    if not Config.Commands or not Config.Commands.enabled then
        local message = Config.Notifications.commandDisabled or 'Command selling is disabled. Use your burner phone instead.'
        TriggerClientEvent('marz_drugselling:client:notify', src, message, 'error')
        return
    end
    
    local Player = GetPlayer(src)
    if not Player then 
        print('[MarzDrugSelling] SERVER: Could not get player for checkRequirements')
        return 
    end
    
    -- Check burner phone requirement
    if Config.RequireBurnerPhone and not HasItem(src, Config.BurnerPhoneItem, 1) then
        local message = Config.Notifications.noBurnerPhone or 'You need a burner phone to sell drugs'
        TriggerClientEvent('marz_drugselling:client:notify', src, message, 'error')
        return
    end
    
    -- Check police requirement
    local policeCount = GetPoliceCount()
    if Config.MinPolice and policeCount < Config.MinPolice then
        local message = Config.Notifications.notEnoughPolice or 'Not enough police online'
        TriggerClientEvent('marz_drugselling:client:notify', src, message, 'error')
        return
    end
    
    -- Check available drugs
    local availableDrugs = GetAvailableDrugs(src)
    if #availableDrugs == 0 then
        local message = Config.Notifications.noDrugs or 'You have no drugs to sell'
        TriggerClientEvent('marz_drugselling:client:notify', src, message, 'error')
        return
    end
    
    -- Create deal
    local selectedDrug = availableDrugs[math.random(#availableDrugs)]
    local dealData = CreateDealData(selectedDrug, src)
    
    if not dealData then
        local message = Config.Notifications.noDrugs or 'You have no drugs to sell'
        TriggerClientEvent('marz_drugselling:client:notify', src, message, 'error')
        return
    end
    
    print(string.format('[MarzDrugSelling] SERVER: Starting command deal for player %s: %sx %s for $%s', 
        GetPlayerName(src), dealData.amount, dealData.label, dealData.price))
    
    TriggerClientEvent('marz_drugselling:client:startSelling', src, dealData, availableDrugs)
end)

-- Complete sale event
RegisterServerEvent('marz_drugselling:server:completeSale')
AddEventHandler('marz_drugselling:server:completeSale', function(dealData)
    local src = source
    print(string.format('[MarzDrugSelling] SERVER: completeSale event received from player %s', src))
    
    local Player = GetPlayer(src)
    if not Player then return end
    
    -- Get player gang and calculate pricing
    local playerGang = GetPlayerGang(src)
    local originalPrice = dealData.price
    
    local policeCount = GetPoliceCount()
    local priceAfterGang, gangModifier = CalculateGangPricing(originalPrice, playerGang)
    local finalPrice, policeBonus, policeTier = CalculatePoliceBonus(priceAfterGang, policeCount)
    
    print(string.format('[MarzDrugSelling] Processing sale for player %s: %sx %s | Original: $%s | After Gang: $%s | Final: $%s (Police Bonus: %s%%, Gang: %s)', 
        GetPlayerName(src), dealData.amount, dealData.label, originalPrice, priceAfterGang, finalPrice, policeBonus or 0, playerGang or 'none'))
    
    -- Verify player still has drugs
    if not HasItem(src, dealData.item, dealData.amount) then
        print('[MarzDrugSelling] ERROR: Player no longer has required drugs')
        TriggerClientEvent('marz_drugselling:client:notify', src, 'You no longer have the required drugs', 'error')
        return
    end
    
    -- Remove drugs from inventory
    local drugRemoved = RemoveItem(src, dealData.item, dealData.amount)
    if not drugRemoved then
        print('[MarzDrugSelling] ERROR: Failed to remove drugs from inventory')
        TriggerClientEvent('marz_drugselling:client:notify', src, 'Failed to remove drugs from inventory', 'error')
        return
    end
    
    -- Add money to player
    local moneyAdded = false
    if Config.RewardType == 'black_money' then
        moneyAdded = AddMoney(src, 'black_money', finalPrice, 'drug-sale')
    else
        moneyAdded = AddMoney(src, 'cash', finalPrice, 'drug-sale')
    end
    
    if moneyAdded then
        -- Send success notifications
        local rewardTypeText = Config.RewardType == 'black_money' and 'dirty money' or 'cash'
        local message = string.format('Sold %sx %s for $%s %s', dealData.amount, dealData.label, finalPrice, rewardTypeText)
        
        -- Gang system notifications
        if Config.GangSystem and Config.GangSystem.enabled then
            if playerGang and playerGang ~= 'none' then
                if Config.GangSystem.notifications and Config.GangSystem.notifications.gangMember then
                    TriggerClientEvent('marz_drugselling:client:notify', src, 
                        Config.GangSystem.notifications.gangMember, 'info')
                end
            else
                if Config.GangSystem.notifications and Config.GangSystem.notifications.noGangPenalty then
                    TriggerClientEvent('marz_drugselling:client:notify', src, 
                        string.format(Config.GangSystem.notifications.noGangPenalty, Config.GangSystem.nonGangPriceReduction), 'info')
                end
            end
        end
        
        -- Police bonus notification
        if Config.PoliceBonus and Config.PoliceBonus.enabled and policeTier and Config.PoliceBonus.showBonusNotification then
            local bonusMessage = string.format(Config.PoliceBonus.bonusNotificationMessage, policeBonus, policeTier.description)
            TriggerClientEvent('marz_drugselling:client:notify', src, bonusMessage, 'success')
        end
        
        TriggerClientEvent('marz_drugselling:client:notify', src, message, 'success')
        
        -- Police alert chance
        if Config.PoliceAlertChance and math.random(100) <= Config.PoliceAlertChance then
            local playerCoords = GetEntityCoords(GetPlayerPed(src))
            PoliceAlert(playerCoords, Config.Dispatch)
        end
        
        print(string.format('[MarzDrugSelling] SUCCESS: Completed drug sale for player %s: %sx %s for $%s (Police: %s, Gang: %s, Bonus: %s%%)', 
            GetPlayerName(src), dealData.amount, dealData.label, finalPrice, policeCount, playerGang or 'none', policeBonus or 0))
    else
        -- Return drugs if money addition failed
        print('[MarzDrugSelling] ERROR: Failed to add money, returning drugs')
        if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
            Player.Functions.AddItem(dealData.item, dealData.amount)
        elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
            Player.addInventoryItem(dealData.item, dealData.amount)
        end
        TriggerClientEvent('marz_drugselling:client:notify', src, 'Failed to complete transaction - money system error', 'error')
    end
end)

-- Police alert event
RegisterServerEvent('marz_drugselling:server:policeAlert')
AddEventHandler('marz_drugselling:server:policeAlert', function()
    local src = source
    print(string.format('[MarzDrugSelling] SERVER: policeAlert event received from player %s', src))
    
    local playerCoords = GetEntityCoords(GetPlayerPed(src))
    PoliceAlert(playerCoords, Config.Dispatch)
    print(string.format('[MarzDrugSelling] Police alert triggered by player %s', GetPlayerName(src)))
end)