-- ===================================================================
-- CLIENT CONFIG & FRAMEWORK DETECTION
-- ===================================================================

local QBCore = nil
local ESX = nil

-- Framework detection
CreateThread(function()
    while GetResourceState('ox_lib') ~= 'started' do
        Wait(100)
    end
    
    if Config.Framework == 'auto' then
        if GetResourceState('qb-core') == 'started' then
            QBCore = exports['qb-core']:GetCoreObject()
        elseif GetResourceState('es_extended') == 'started' then
            ESX = exports['es_extended']:getSharedObject()
        end
    elseif Config.Framework == 'qbcore' then
        QBCore = exports['qb-core']:GetCoreObject()
    elseif Config.Framework == 'esx' then
        ESX = exports['es_extended']:getSharedObject()
    end
end)

-- Export framework objects for other files
function GetQBCore()
    return QBCore
end

function GetESX()
    return ESX
end