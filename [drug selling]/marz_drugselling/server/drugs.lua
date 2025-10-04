-- ===================================================================
-- DRUG SYSTEM & AVAILABLE DRUGS
-- ===================================================================

-- Get available drugs for player
function GetAvailableDrugs(source)
    local availableDrugs = {}
    
    if not Config.Drugs then
        print('[MarzDrugSelling] ERROR: Config.Drugs is nil!')
        return availableDrugs
    end
    
    -- Check regular drugs
    for drugName, drugData in pairs(Config.Drugs) do
        if HasItem(source, drugName, 1) then
            table.insert(availableDrugs, {
                item = drugName,
                itemName = drugName,
                label = drugData.label,
                priceRange = drugData.price,
                amountRange = drugData.amount,
                pedType = 'regular'
            })
        end
    end
    
    -- Check specialized drugs if enabled
    if Config.SpecializedSelling and Config.SpecializedSelling.enabled then
        -- Fat ped drugs
        if Config.SpecializedSelling.fatPedDrugs then
            for drugName, drugData in pairs(Config.SpecializedSelling.fatPedDrugs) do
                if HasItem(source, drugName, 1) then
                    table.insert(availableDrugs, {
                        item = drugName,
                        itemName = drugName,
                        label = drugData.label,
                        priceRange = drugData.price,
                        amountRange = drugData.amount,
                        pedType = 'fat'
                    })
                end
            end
        end
        
        -- Female ped drugs
        if Config.SpecializedSelling.femalePedDrugs then
            for drugName, drugData in pairs(Config.SpecializedSelling.femalePedDrugs) do
                if HasItem(source, drugName, 1) then
                    table.insert(availableDrugs, {
                        item = drugName,
                        itemName = drugName,
                        label = drugData.label,
                        priceRange = drugData.price,
                        amountRange = drugData.amount,
                        pedType = 'female'
                    })
                end
            end
        end
        
        -- Muscle ped drugs
        if Config.SpecializedSelling.musclePedDrugs then
            for drugName, drugData in pairs(Config.SpecializedSelling.musclePedDrugs) do
                if HasItem(source, drugName, 1) then
                    table.insert(availableDrugs, {
                        item = drugName,
                        itemName = drugName,
                        label = drugData.label,
                        priceRange = drugData.price,
                        amountRange = drugData.amount,
                        pedType = 'muscle'
                    })
                end
            end
        end
    end
    
    return availableDrugs
end

-- Create deal data for selected drug
function CreateDealData(selectedDrug, source)
    local dealData = {
        item = selectedDrug.item,
        itemName = selectedDrug.itemName,
        label = selectedDrug.label,
        amount = math.random(selectedDrug.amountRange.min, selectedDrug.amountRange.max),
        price = math.random(selectedDrug.priceRange.min, selectedDrug.priceRange.max),
        pedType = selectedDrug.pedType
    }
    
    -- Ensure player has enough drugs
    if not HasItem(source, dealData.item, dealData.amount) then
        local Player = GetPlayer(source)
        local maxAmount = 0
        
        if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
            local item = Player.Functions.GetItemByName(dealData.item)
            maxAmount = item and item.amount or 0
        elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
            local item = Player.getInventoryItem(dealData.item)
            maxAmount = item and item.count or 0
        end
        
        if maxAmount > 0 then
            dealData.amount = math.min(dealData.amount, maxAmount)
        else
            return nil -- No drugs available
        end
    end
    
    -- Calculate final price
    dealData.price = dealData.price * dealData.amount
    
    return dealData
end