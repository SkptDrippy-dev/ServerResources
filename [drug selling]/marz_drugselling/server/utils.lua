-- ===================================================================
-- SERVER UTILITY FUNCTIONS
-- ===================================================================

-- Get player object (framework agnostic)
function GetPlayer(source)
    if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
        local QBCore = GetQBCore()
        return QBCore and QBCore.Functions.GetPlayer(source)
    elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
        local ESX = GetESX()
        return ESX and ESX.GetPlayerFromId(source)
    end
    return nil
end

-- Get player identifier (framework agnostic)
function GetPlayerIdentifier(source)
    if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
        local Player = GetPlayer(source)
        return Player and Player.PlayerData.citizenid or nil
    elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
        local Player = GetPlayer(source)
        return Player and Player.identifier or nil
    end
    return nil
end

-- Check if player has item
function HasItem(source, item, amount)
    local Player = GetPlayer(source)
    if not Player then return false end
    
    amount = amount or 1
    
    if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
        local itemData = Player.Functions.GetItemByName(item)
        return itemData and itemData.amount >= amount
    elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
        local itemData = Player.getInventoryItem(item)
        return itemData and itemData.count >= amount
    end
    
    return false
end

-- Remove item from player
function RemoveItem(source, item, amount)
    local Player = GetPlayer(source)
    if not Player then return false end
    
    amount = amount or 1
    
    if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
        return Player.Functions.RemoveItem(item, amount)
    elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
        Player.removeInventoryItem(item, amount)
        return true
    end
    
    return false
end

-- Get player money amount
function GetPlayerMoney(source, moneyType)
    local Player = GetPlayer(source)
    if not Player then 
        print(string.format('[MarzDrugSelling] ERROR: Could not get player object for source: %s', source))
        return 0 
    end
    
    -- Try ox_inventory first
    if GetResourceState('ox_inventory') == 'started' then
        local success, count = pcall(function()
            return exports.ox_inventory:GetItemCount(source, moneyType)
        end)
        
        if success and count and count > 0 then
            return count
        end
    end
    
    -- Try qb-inventory
    if GetResourceState('qb-inventory') == 'started' then
        local success, result = pcall(function()
            return exports['qb-inventory']:GetItemsByName(source, moneyType)
        end)
        
        if success and result and result[1] then
            return result[1].amount or 0
        end
    end
    
    -- Framework specific methods
    if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
        local itemData = Player.Functions.GetItemByName(moneyType)
        if itemData and itemData.amount then
            return itemData.amount
        end
        
        local PlayerData = Player.PlayerData
        if PlayerData and PlayerData.money then
            if moneyType == 'black_money' then
                return PlayerData.money['black_money'] or 0
            elseif moneyType == 'cash' then
                return PlayerData.money['cash'] or 0
            end
        end
        
    elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
        local itemData = Player.getInventoryItem(moneyType)
        if itemData and itemData.count then
            return itemData.count
        end
        
        if moneyType == 'black_money' then
            if Player.getAccount then
                local account = Player.getAccount('black_money')
                if account then
                    return account.money or 0
                end
            end
        elseif moneyType == 'cash' then
            if Player.getMoney then
                return Player.getMoney()
            end
        end
    end
    
    return 0
end

-- Add money to player
function AddMoney(source, moneyType, amount, reason)
    local Player = GetPlayer(source)
    if not Player then 
        print('[MarzDrugSelling] ERROR: Could not get player object for AddMoney')
        return false 
    end
    
    reason = reason or 'drug-sale'
    
    -- Try ox_inventory first
    if GetResourceState('ox_inventory') == 'started' then
        local success, result = pcall(function()
            return exports.ox_inventory:AddItem(source, moneyType, amount)
        end)
        if success and result then
            return true
        end
    end
    
    -- Try qb-inventory
    if GetResourceState('qb-inventory') == 'started' then
        local success, result = pcall(function()
            return exports['qb-inventory']:AddItem(source, moneyType, amount, false, false, reason)
        end)
        if success and result then
            return true
        end
    end
    
    -- Framework specific methods
    if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
        if moneyType == 'black_money' then
            return Player.Functions.AddMoney('black_money', amount, reason)
        else
            return Player.Functions.AddMoney('cash', amount, reason)
        end
    elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
        local success = pcall(function()
            if moneyType == 'black_money' then
                Player.addAccountMoney('black_money', amount)
            else
                Player.addMoney(amount)
            end
        end)
        return success
    end
    
    return false
end

-- Remove money from player
function RemoveMoney(source, moneyType, amount, reason)
    local Player = GetPlayer(source)
    if not Player then return false end
    
    reason = reason or 'drug-purchase'
    
    -- Try ox_inventory first
    if GetResourceState('ox_inventory') == 'started' then
        local success, result = pcall(function()
            return exports.ox_inventory:RemoveItem(source, moneyType, amount)
        end)
        
        if success and result then
            return true
        end
    end
    
    -- Try qb-inventory
    if GetResourceState('qb-inventory') == 'started' then
        local success, result = pcall(function()
            return exports['qb-inventory']:RemoveItem(source, moneyType, amount, false, reason)
        end)
        
        if success and result then
            return true
        end
    end
    
    -- Framework specific methods
    if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
        if moneyType == 'black_money' then
            return Player.Functions.RemoveMoney('black_money', amount, reason)
        else
            return Player.Functions.RemoveMoney('cash', amount, reason)
        end
    elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
        if moneyType == 'black_money' then
            Player.removeAccountMoney('black_money', amount)
        else
            Player.removeMoney(amount)
        end
        return true
    end
    
    return false
end

-- Get police count
function GetPoliceCount()
    local count = 0
    local players = GetPlayers()
    
    for _, playerId in pairs(players) do
        local Player = GetPlayer(tonumber(playerId))
        if Player then
            local job = nil
            if Config.Framework == 'qbcore' or (Config.Framework == 'auto' and GetQBCore()) then
                job = Player.PlayerData.job.name
            elseif Config.Framework == 'esx' or (Config.Framework == 'auto' and GetESX()) then
                job = Player.job.name
            end
            
            if job and Config.PoliceJobs then
                for _, policeJob in pairs(Config.PoliceJobs) do
                    if job == policeJob then
                        count = count + 1
                        break
                    end
                end
            end
        end
    end
    
    return count
end