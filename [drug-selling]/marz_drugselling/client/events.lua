-- ===================================================================
-- CLIENT EVENT HANDLERS
-- ===================================================================

-- Burner phone export setup
CreateThread(function()
    Wait(2000)
    local itemName = Config.BurnerPhoneItem or 'burner_phone'
    exports(itemName, function(data, slot)
        TriggerServerEvent('marz_drugselling:server:useBurnerPhone')
        return true
    end)
end)

-- Zone check for burner phone
RegisterNetEvent('marz_drugselling:client:checkZoneForBurnerPhone')
AddEventHandler('marz_drugselling:client:checkZoneForBurnerPhone', function()
    local inZone, zoneName = IsInSellingZone()
    TriggerServerEvent('marz_drugselling:server:burnerPhoneZoneResult', inZone, zoneName)
end)

-- Start selling event
RegisterNetEvent('marz_drugselling:client:startSelling')
AddEventHandler('marz_drugselling:client:startSelling', function(drugData, availableDrugs)
    local state = GetSellingState()
    if state.isSelling then return end
    
    state.isSelling = true
    state.dealData = drugData
    state.saleInProgress = false
    SetSellingState(state)
    
    Notify(Config.Notifications.searching or 'Searching for a client...', 'info')
    
    local playerPed = PlayerPedId()
    PlayAnimation(playerPed, 'cellphone@', 'cellphone_call_listen_base', 5000)
    
    local searchTime = math.random(Config.Selling.SearchTime.min, Config.Selling.SearchTime.max)
    SetTimeout(searchTime, function()
        ClearPedTasks(playerPed)
        
        if math.random(100) <= Config.Selling.RejectChance then
            local currentState = GetSellingState()
            currentState.isSelling = false
            SetSellingState(currentState)
            Notify('Client rejected your offer and called the police!', 'error')
            TriggerServerEvent('marz_drugselling:server:policeAlert')
            return
        end
        
        SpawnClient(drugData)
        Notify(Config.Notifications.clientFound or 'Client found! They are coming to you.', 'success')
    end)
end)

-- Notification event
RegisterNetEvent('marz_drugselling:client:notify')
AddEventHandler('marz_drugselling:client:notify', function(message, type)
    Notify(message, type)
end)

-- Police blip event
RegisterNetEvent('marz_drugselling:client:addPoliceBlip')
AddEventHandler('marz_drugselling:client:addPoliceBlip', function(coords)
    local blip = AddBlipForCoord(coords.x, coords.y, coords.z)
    SetBlipSprite(blip, 161)
    SetBlipScale(blip, 1.0)
    SetBlipColour(blip, 1)
    SetBlipAlpha(blip, 200)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString("Drug Activity")
    EndTextCommandSetBlipName(blip)
    
    SetTimeout(120000, function()
        if DoesBlipExist(blip) then
            RemoveBlip(blip)
        end
    end)
end)

-- Money wash dialog event
RegisterNetEvent('marz_drugselling:client:showMoneyWashDialog')
AddEventHandler('marz_drugselling:client:showMoneyWashDialog', function(playerCash, onCooldown)
    if onCooldown then 
        return Notify(Config.Notifications.onCooldown or 'You are on cooldown!', 'info') 
    end
    
    if playerCash < Config.MoneyWash.MinWash then 
        return Notify(string.format(Config.Notifications.notEnoughMoney or 'You need at least $%s to wash money!', Config.MoneyWash.MinWash), 'error') 
    end
    
    local maxAmount = playerCash
    if playerCash > Config.MoneyWash.MaxWash then 
        maxAmount = Config.MoneyWash.MaxWash 
    end
    
    local washData = GetMoneyWashData()
    if washData.ped and DoesEntityExist(washData.ped) then
        PlayAmbientSpeech1(washData.ped, "GENERIC_HOWS_IT_GOING", "SPEECH_PARAMS_FORCE")
    end
    
    local input = lib.inputDialog('Wash Money', {
        { 
            type = 'number', 
            label = string.format('Amount to Wash (You have: $%s)', playerCash),
            icon = 'dollar-sign', 
            required = true, 
            min = Config.MoneyWash.MinWash, 
            max = maxAmount 
        },
    })
    
    if not input then return end
    
    GiveExchangeOffer(tonumber(input[1]))
end)

-- Money wash open event
RegisterNetEvent('marz_drugselling:client:openMoneyWash')
AddEventHandler('marz_drugselling:client:openMoneyWash', function()
    OpenMoneyWashInput()
end)

-- Commands - Only register if enabled in config
CreateThread(function()
    Wait(1000) -- Wait for config to load
    
    -- Only register commands if they are enabled
    if Config.Commands and Config.Commands.enabled then
        RegisterCommand(Config.Commands.sellCommand or 'dealer', function()
            StartDeal()
        end, false)
        
        -- Legacy support for old config format
        if Config.SellCommand and Config.SellCommand ~= Config.Commands.sellCommand then
            RegisterCommand(Config.SellCommand, function()
                StartDeal()
            end, false)
        end
        
        print(string.format('[MarzDrugSelling] Commands enabled: /%s', Config.Commands.sellCommand or 'dealer'))
    else
        print('[MarzDrugSelling] Commands disabled - Phone only mode active')
    end
end)

-- Framework-specific player loaded events
if GetQBCore then
    RegisterNetEvent('QBCore:Client:OnPlayerLoaded')
    AddEventHandler('QBCore:Client:OnPlayerLoaded', function()
        local QBCore = GetQBCore()
        if QBCore then
            SetPlayerData(QBCore.Functions.GetPlayerData())
        end
        
        if Config.MoneyWash and Config.MoneyWash.Enabled then
            CreateMoneyWashBlip()
            if Config.MoneyWash.UsePed then
                CreateMoneyWashPed()
            else
                CreateMoneyWashZone()
            end
        end
        
        CreateSellingZoneBlips()
    end)
    
    RegisterNetEvent('QBCore:Client:OnJobUpdate')
    AddEventHandler('QBCore:Client:OnJobUpdate', function(JobInfo)
        local playerData = GetPlayerData()
        playerData.job = JobInfo
        SetPlayerData(playerData)
    end)
elseif GetESX then
    RegisterNetEvent('esx:playerLoaded')
    AddEventHandler('esx:playerLoaded', function(xPlayer)
        SetPlayerData(xPlayer)
        
        if Config.MoneyWash and Config.MoneyWash.Enabled then
            CreateMoneyWashBlip()
            if Config.MoneyWash.UsePed then
                CreateMoneyWashPed()
            else
                CreateMoneyWashZone()
            end
        end
        
        CreateSellingZoneBlips()
    end)
    
    RegisterNetEvent('esx:setJob')
    AddEventHandler('esx:setJob', function(job)
        local playerData = GetPlayerData()
        playerData.job = job
        SetPlayerData(playerData)
    end)
end

-- Resource start/stop events
AddEventHandler('onResourceStart', function(resourceName)
    if GetCurrentResourceName() == resourceName then
        if Config.MoneyWash and Config.MoneyWash.Enabled then
            CreateMoneyWashBlip()
            if Config.MoneyWash.UsePed then
                CreateMoneyWashPed()
            else
                CreateMoneyWashZone()
            end
        end
        
        CreateSellingZoneBlips()
    end
end)

AddEventHandler('onResourceStop', function(resourceName)
    if GetCurrentResourceName() == resourceName then
        local washData = GetMoneyWashData()
        
        if washData.blip and DoesBlipExist(washData.blip) then
            RemoveBlip(washData.blip)
        end
        
        if washData.ped and DoesEntityExist(washData.ped) then
            DeleteEntity(washData.ped)
        end
        
        for _, entity in pairs(washData.entities) do
            if entity and DoesEntityExist(entity) then
                DeleteEntity(entity)
            end
        end
        
        CleanupSellingZoneBlips()
        
        if GetResourceState('ox_target') == 'started' then
            if washData.ped then
                exports.ox_target:removeLocalEntity(washData.ped, 'money_wash_ped')
            end
        elseif GetResourceState('qb-target') == 'started' then
            if washData.ped then
                exports['qb-target']:RemoveTargetEntity(washData.ped)
            end
            exports['qb-target']:RemoveZone("money_wash_zone")
        end
    end
end)