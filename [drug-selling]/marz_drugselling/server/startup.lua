-- ===================================================================
-- SERVER STARTUP & RESOURCE MANAGEMENT
-- ===================================================================

-- Resource start event
AddEventHandler('onResourceStart', function(resourceName)
    if GetCurrentResourceName() == resourceName then
        print(string.format('[MarzDrugSelling] SERVER: Resource started - %s', resourceName))
        print('[MarzDrugSelling] Server script loaded successfully')
        print(string.format('[MarzDrugSelling] Framework: %s', GetQBCore() and 'QBCore' or GetESX() and 'ESX' or 'Standalone'))
        
        if Config.MoneyWash then
            print(string.format('[MarzDrugSelling] Money Wash: %s', Config.MoneyWash.Enabled and 'Enabled' or 'Disabled'))
        end
        if Config.GangSystem then
            print(string.format('[MarzDrugSelling] Gang System: %s', Config.GangSystem.enabled and 'Enabled' or 'Disabled'))
        end
        if Config.PoliceBonus then
            print(string.format('[MarzDrugSelling] Police Bonus System: %s', Config.PoliceBonus.enabled and 'Enabled' or 'Disabled'))
        end
        if Config.ZoneSettings then
            print(string.format('[MarzDrugSelling] Zone Enforcement: %s', Config.ZoneSettings.enforceZones and 'Enabled' or 'Disabled'))
        end
        
        print(string.format('[MarzDrugSelling] ox_inventory detected: %s', GetResourceState('ox_inventory') == 'started' and 'YES' or 'NO'))
        print(string.format('[MarzDrugSelling] qb-inventory detected: %s', GetResourceState('qb-inventory') == 'started' and 'YES' or 'NO'))
        
        if Config then
            print('[MarzDrugSelling] Config loaded successfully')
            if Config.BurnerPhoneItem then
                print(string.format('[MarzDrugSelling] Burner phone item: %s', Config.BurnerPhoneItem))
            else
                print('[MarzDrugSelling] WARNING: Config.BurnerPhoneItem is not set!')
            end
            
            if Config.SellingZones then
                print(string.format('[MarzDrugSelling] Selling zones configured: %s', #Config.SellingZones))
                for i, zone in pairs(Config.SellingZones) do
                    print(string.format('  Zone %d: %s (Radius: %.1f)', i, zone.name, zone.radius))
                end
            end
            
            if Config.PoliceBonus and Config.PoliceBonus.enabled then
                print(string.format('[MarzDrugSelling] Police bonus tiers configured: %s', #Config.PoliceBonus.tiers))
                for i, tier in pairs(Config.PoliceBonus.tiers) do
                    print(string.format('  Tier %d: %d+ police = +%d%% (%s)', i, tier.minPolice, tier.bonusPercent, tier.description))
                end
            end
        else
            print('[MarzDrugSelling] ERROR: Config is nil!')
        end
        
        print('[MarzDrugSelling] ===== IMPORTANT ZONE ENFORCEMENT INFO =====')
        print('[MarzDrugSelling] Zone enforcement is now PROPERLY FIXED!')
        print('[MarzDrugSelling] Both /dealer command AND burner phone check zones!')
        print('[MarzDrugSelling] Current enforcement status:', Config.ZoneSettings and Config.ZoneSettings.enforceZones and 'ENABLED' or 'DISABLED')
        print('[MarzDrugSelling] ==========================================')
    end
end)

print('[MarzDrugSelling] Server script initialized successfully')