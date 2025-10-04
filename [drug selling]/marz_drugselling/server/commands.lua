-- ===================================================================
-- SERVER COMMANDS & DEBUG FUNCTIONS
-- ===================================================================

-- Debug command
RegisterCommand('drugsdebug', function(source, args, rawCommand)
    local src = source
    if src == 0 then
        -- Console debug
        print('[MarzDrugSelling] Debug Info:')
        print(string.format('Police Count: %s', GetPoliceCount()))
        print(string.format('Framework: %s', GetQBCore() and 'QBCore' or GetESX() and 'ESX' or 'None'))
        if Config.MoneyWash then
            print(string.format('Money Wash Enabled: %s', tostring(Config.MoneyWash.Enabled)))
        end
        if Config.GangSystem then
            print(string.format('Gang System Enabled: %s', tostring(Config.GangSystem.enabled)))
        end
        if Config.PoliceBonus then
            print(string.format('Police Bonus Enabled: %s', tostring(Config.PoliceBonus.enabled)))
        end
        if Config.ZoneSettings then
            print(string.format('Zone Enforcement: %s', tostring(Config.ZoneSettings.enforceZones)))
        end
        if Config.SellingZones then
            print(string.format('Selling Zones: %s', #Config.SellingZones))
        end
        return
    end
    
    local Player = GetPlayer(src)
    if not Player then return end
    
    TriggerClientEvent('marz_drugselling:client:notify', src, 'Check console for debug info', 'info')
    print(string.format('[MarzDrugSelling] Debug Info for %s:', GetPlayerName(src)))
    print(string.format('Police Count: %s', GetPoliceCount()))
    if Config.BurnerPhoneItem then
        print(string.format('Has Burner Phone: %s', tostring(HasItem(src, Config.BurnerPhoneItem, 1))))
    end
    
    local gang = GetPlayerGang(src)
    print(string.format('Gang: %s', gang or 'none'))
    
    local availableDrugs = GetAvailableDrugs(src)
    print(string.format('Available Drugs: %s', #availableDrugs))
    for i, drug in pairs(availableDrugs) do
        print(string.format('  %d. %s (%s)', i, drug.label, drug.item))
    end
    
    if Config.PoliceBonus and Config.PoliceBonus.enabled then
        local policeCount = GetPoliceCount()
        local _, policeBonus, policeTier = CalculatePoliceBonus(1000, policeCount)
        if policeTier then
            print(string.format('Police Bonus: %s%% (%s)', policeBonus, policeTier.description))
        else
            print('Police Bonus: 0% (No qualifying tier)')
        end
    end
    
    if Config.ZoneSettings then
        print(string.format('Zone Enforcement: %s', tostring(Config.ZoneSettings.enforceZones)))
        print(string.format('Show Zone Blips: %s', tostring(Config.ZoneSettings.showZoneBlips)))
    end
    
    if Config.SellingZones then
        print(string.format('Configured Selling Zones: %s', #Config.SellingZones))
        for i, zone in pairs(Config.SellingZones) do
            print(string.format('  Zone %d: %s (Radius: %.1f)', i, zone.name, zone.radius))
        end
    end
end, false)

-- Test burner phone command
RegisterCommand('testburner', function(source, args, rawCommand)
    local src = source
    if src == 0 then return end
    
    print(string.format('[MarzDrugSelling] SERVER: Manual burner phone test triggered for player %s', src))
    TriggerEvent('marz_drugselling:server:useBurnerPhone', src)
end, false)

-- Give burner phone command
RegisterCommand('giveburnphone', function(source, args, rawCommand)
    local src = source
    if src == 0 then return end
    
    local Player = GetPlayer(src)
    if not Player then return end
    
    if not Config.BurnerPhoneItem then
        print('[MarzDrugSelling] ERROR: Config.BurnerPhoneItem is not set')
        return
    end
    
    if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
        Player.Functions.AddItem(Config.BurnerPhoneItem, 1)
    elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
        Player.addInventoryItem(Config.BurnerPhoneItem, 1)
    end
    
    TriggerClientEvent('marz_drugselling:client:notify', src, 'Burner phone given', 'success')
    print(string.format('[MarzDrugSelling] SERVER: Gave burner phone to player %s', src))
end, false)

-- Test config command
RegisterCommand('testconfig', function(source, args, rawCommand)
    local src = source
    if src == 0 then return end
    
    print(string.format('[MarzDrugSelling] SERVER: Config test for player %s', src))
    print(string.format('Config exists: %s', Config ~= nil))
    if Config then
        print(string.format('Config.BurnerPhoneItem: %s', Config.BurnerPhoneItem or 'nil'))
        print(string.format('Config.RequireBurnerPhone: %s', Config.RequireBurnerPhone or 'nil'))
        print(string.format('Config.MinPolice: %s', Config.MinPolice or 'nil'))
        print(string.format('Config.Drugs exists: %s', Config.Drugs ~= nil))
        if Config.Drugs then
            local count = 0
            for _ in pairs(Config.Drugs) do count = count + 1 end
            print(string.format('Config.Drugs count: %s', count))
        end
        print(string.format('Zone Enforcement: %s', Config.ZoneSettings and Config.ZoneSettings.enforceZones or 'false'))
        print(string.format('Police Bonus Enabled: %s', Config.PoliceBonus and Config.PoliceBonus.enabled or 'false'))
    end
    
    TriggerClientEvent('marz_drugselling:client:notify', src, 'Check console for config info', 'info')
end, false)

-- Give drug command (for testing)
RegisterCommand('givedrug', function(source, args, rawCommand)
    local src = source
    if src == 0 then return end
    
    local Player = GetPlayer(src)
    if not Player then return end
    
    local drugName = args[1] or 'xanax_bag'
    local amount = tonumber(args[2]) or 10
    
    if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
        Player.Functions.AddItem(drugName, amount)
    elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
        Player.addInventoryItem(drugName, amount)
    end
    
    TriggerClientEvent('marz_drugselling:client:notify', src, string.format('Given %sx %s', amount, drugName), 'success')
    print(string.format('[MarzDrugSelling] SERVER: Gave %sx %s to player %s', amount, drugName, src))
end, false)

-- Clear cooldown command
RegisterCommand('clearcooldown', function(source, args, rawCommand)
    local src = source
    if src == 0 then return end
    
    local identifier = GetPlayerIdentifier(src)
    if identifier then
        local cooldowns = GetCooldowns()
        if cooldowns[identifier] then
            cooldowns[identifier] = {}
        end
        TriggerClientEvent('marz_drugselling:client:notify', src, 'All cooldowns cleared', 'success')
        print(string.format('[MarzDrugSelling] SERVER: Cleared cooldowns for player %s', src))
    end
end, false)