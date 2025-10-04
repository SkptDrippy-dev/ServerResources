-- ===================================================================
-- SERVER CONFIG & FRAMEWORK DETECTION
-- ===================================================================

local QBCore = nil
local ESX = nil

print('[MarzDrugSelling] SERVER: Starting initialization...')

CreateThread(function()
    print('[MarzDrugSelling] SERVER: Framework detection starting...')
    
    -- Try QBCore first
    if GetResourceState('qb-core') == 'started' then
        local success, core = pcall(function()
            return exports['qb-core']:GetCoreObject()
        end)
        if success and core then
            QBCore = core
            print('[MarzDrugSelling] QBCore detected via exports')
        end
    end
    
    -- Fallback QBCore method
    if not QBCore and GetResourceState('qb-core') == 'started' then
        local success = pcall(function()
            while QBCore == nil do
                TriggerEvent('QBCore:GetObject', function(obj) QBCore = obj end)
                Wait(200)
            end
        end)
        if success and QBCore then
            print('[MarzDrugSelling] QBCore detected via TriggerEvent')
        end
    end
    
    -- Try ESX
    if GetResourceState('es_extended') == 'started' then
        local success, esx = pcall(function()
            return exports['es_extended']:getSharedObject()
        end)
        if success and esx then
            ESX = esx
            print('[MarzDrugSelling] ESX detected via exports')
        end
    end
    
    -- Fallback ESX method
    if not ESX and GetResourceState('es_extended') == 'started' then
        local success = pcall(function()
            while ESX == nil do
                TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
                Wait(200)
            end
        end)
        if success and ESX then
            print('[MarzDrugSelling] ESX detected via TriggerEvent')
        end
    end
    
    print('[MarzDrugSelling] Final framework detection:')
    print('  QBCore:', QBCore and 'DETECTED' or 'NOT FOUND')
    print('  ESX:', ESX and 'DETECTED' or 'NOT FOUND')
end)

-- Export framework objects for other files
function GetQBCore()
    return QBCore
end

function GetESX()
    return ESX
end