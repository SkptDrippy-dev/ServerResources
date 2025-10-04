-- ===================================================================
-- MONEY WASHING SYSTEM
-- ===================================================================

-- Get player cash for money washing
RegisterServerEvent('marz_drugselling:server:getPlayerCash')
AddEventHandler('marz_drugselling:server:getPlayerCash', function()
    local src = source
    print(string.format('[MarzDrugSelling] SERVER: getPlayerCash event received from player %s', src))
    
    local Player = GetPlayer(src)
    if not Player then 
        print('[MarzDrugSelling] ERROR: Could not get player object')
        return 
    end
    
    local playerCash = 0
    local onCooldown = false
    
    -- Check cooldown
    if Config.MoneyWash and Config.MoneyWash.Cooldown and Config.MoneyWash.Cooldown > 0 then
        local identifier = GetPlayerIdentifier(src)
        if identifier then
            local cooldownTime = Config.MoneyWash.Cooldown * 60
            onCooldown = IsPlayerOnCooldown(identifier, 'money_wash', cooldownTime)
        end
    end
    
    -- Get player money amount
    if Config.MoneyWash then
        print(string.format('[MarzDrugSelling] DEBUG: Framework: %s, Currency: %s', 
            GetQBCore() and 'QBCore' or GetESX() and 'ESX' or 'Unknown', Config.MoneyWash.Currency))
        
        playerCash = GetPlayerMoney(src, Config.MoneyWash.Currency)
        
        print(string.format('[MarzDrugSelling] DEBUG: Player %s has $%s %s (Min required: $%s)', 
            GetPlayerName(src), playerCash, Config.MoneyWash.Currency, Config.MoneyWash.MinWash))
    end
    
    TriggerClientEvent('marz_drugselling:client:showMoneyWashDialog', src, playerCash, onCooldown)
end)

-- Start money washing process
RegisterServerEvent('marz_drugselling:server:startWashingMoney')
AddEventHandler('marz_drugselling:server:startWashingMoney', function(amount)
    local src = source
    print(string.format('[MarzDrugSelling] SERVER: startWashingMoney event received from player %s for $%s', src, amount))
    
    local Player = GetPlayer(src)
    if not Player then return end
    
    -- Validate amount
    if not amount or not Config.MoneyWash or amount < Config.MoneyWash.MinWash or amount > Config.MoneyWash.MaxWash then
        TriggerClientEvent('marz_drugselling:client:notify', src, 'Invalid amount', 'error')
        return
    end
    
    -- Check if player has enough money
    local playerCash = GetPlayerMoney(src, Config.MoneyWash.Currency)
    if playerCash < amount then
        TriggerClientEvent('marz_drugselling:client:notify', src, 'Not enough money', 'error')
        return
    end
    
    -- Check cooldown
    local identifier = GetPlayerIdentifier(src)
    if Config.MoneyWash.Cooldown and Config.MoneyWash.Cooldown > 0 and identifier then
        local cooldownTime = Config.MoneyWash.Cooldown * 60
        if IsPlayerOnCooldown(identifier, 'money_wash', cooldownTime) then
            TriggerClientEvent('marz_drugselling:client:notify', src, 'You are on cooldown', 'error')
            return
        end
    end
    
    -- Start progress bar
    local success = lib.callback.await('marz_drugselling:startWashingProgressBar', src)
    
    if success then
        -- Remove dirty money
        local removed = RemoveMoney(src, Config.MoneyWash.Currency, amount, 'money-wash')
        
        if not removed then
            TriggerClientEvent('marz_drugselling:client:notify', src, 'Failed to remove money', 'error')
            return
        end
        
        -- Calculate clean amount after tax
        local taxRate = Config.MoneyWash.TaxRate
        local cleanAmount = math.ceil(amount - (amount * taxRate / 100))
        
        -- Add clean money
        local moneyAdded = AddMoney(src, 'cash', cleanAmount, 'money-wash')
        
        if moneyAdded then
            -- Set cooldown
            if Config.MoneyWash.Cooldown and Config.MoneyWash.Cooldown > 0 and identifier then
                SetPlayerCooldown(identifier, 'money_wash')
            end
            
            -- Police alert chance
            if Config.MoneyWash.PoliceAlertChance and math.random(100) <= Config.MoneyWash.PoliceAlertChance then
                local playerCoords = GetEntityCoords(GetPlayerPed(src))
                if Config.MoneyWash.PoliceDispatch then
                    PoliceAlert(playerCoords, Config.MoneyWash.PoliceDispatch)
                end
            end
            
            -- Success notification
            if Config.Notifications and Config.Notifications.washSuccess then
                TriggerClientEvent('marz_drugselling:client:notify', src, 
                    string.format(Config.Notifications.washSuccess, cleanAmount, taxRate), 'success')
            end
            
            print(string.format('[MarzDrugSelling] Player %s washed $%s, received $%s (Tax: %s%%)', 
                GetPlayerName(src), amount, cleanAmount, taxRate))
        else
            -- Return money if clean money addition failed
            AddMoney(src, Config.MoneyWash.Currency, amount, 'money-wash-refund')
            TriggerClientEvent('marz_drugselling:client:notify', src, 'Money washing failed - refunded', 'error')
        end
    else
        if Config.Notifications and Config.Notifications.washCancelled then
            TriggerClientEvent('marz_drugselling:client:notify', src, Config.Notifications.washCancelled, 'error')
        end
    end
end)