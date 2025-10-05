-- ===================================================================
-- GANG SYSTEM & PRICING CALCULATIONS
-- ===================================================================

-- Get player gang affiliation
function GetPlayerGang(source)
    local Player = GetPlayer(source)
    if not Player then return nil end
    
    local gang = nil
    
    if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
        if Config.GangSystem and Config.GangSystem.enabled and 
           Config.GangSystem.detection and Config.GangSystem.detection.qbcore and 
           Config.GangSystem.detection.qbcore.useGangData then
            
            local gangData = Player.PlayerData.gang
            if gangData and gangData.name and gangData.name ~= 'none' then
                gang = gangData.name
            end
        end
        
        if not gang and Config.GangSystem and Config.GangSystem.detection and 
           Config.GangSystem.detection.qbcore and Config.GangSystem.detection.qbcore.useJobAsGang then
            
            local job = Player.PlayerData.job.name
            if Config.GangSystem.detection.esx and Config.GangSystem.detection.esx.gangJobs then
                for _, gangJob in pairs(Config.GangSystem.detection.esx.gangJobs) do
                    if job == gangJob then
                        gang = job
                        break
                    end
                end
            end
        end
        
    elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
        if Config.GangSystem and Config.GangSystem.detection and 
           Config.GangSystem.detection.esx and Config.GangSystem.detection.esx.useJobAsGang then
            
            local job = Player.job.name
            if job and Config.GangSystem.detection.esx.gangJobs then
                for _, gangJob in pairs(Config.GangSystem.detection.esx.gangJobs) do
                    if job == gangJob then
                        gang = job
                        break
                    end
                end
            end
        end
        
        if not gang and Config.GangSystem and Config.GangSystem.detection and 
           Config.GangSystem.detection.esx and Config.GangSystem.detection.esx.useMetadata then
            
            if Player.getMeta then
                local gangMeta = Player.getMeta('gang')
                if gangMeta and gangMeta ~= 'none' then
                    gang = gangMeta
                end
            end
        end
    end
    
    return gang
end

-- Calculate gang-based pricing
function CalculateGangPricing(basePrice, gang)
    if not Config.GangSystem or not Config.GangSystem.enabled then
        return basePrice, 0
    end
    
    local finalPrice = basePrice
    local modifier = 0
    
    if gang and gang ~= 'none' then
        finalPrice = basePrice
    else
        modifier = -Config.GangSystem.nonGangPriceReduction
        finalPrice = math.ceil(basePrice - (basePrice * Config.GangSystem.nonGangPriceReduction / 100))
    end
    
    return finalPrice, modifier
end

-- Calculate police bonus system
function CalculatePoliceBonus(basePrice, policeCount)
    if not Config.PoliceBonus or not Config.PoliceBonus.enabled then
        return basePrice, 0, nil
    end
    
    local bestTier = nil
    
    for _, tier in pairs(Config.PoliceBonus.tiers) do
        if policeCount >= tier.minPolice then
            if not bestTier or tier.minPolice > bestTier.minPolice then
                bestTier = tier
            end
        end
    end
    
    if bestTier then
        local bonusAmount = math.ceil(basePrice * bestTier.bonusPercent / 100)
        local finalPrice = basePrice + bonusAmount
        return finalPrice, bestTier.bonusPercent, bestTier
    end
    
    return basePrice, 0, nil
end