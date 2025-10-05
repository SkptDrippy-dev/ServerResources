-- ===================================================================
-- MONEY WASHING SYSTEM
-- ===================================================================

-- Create money wash blip
function CreateMoneyWashBlip()
    if not Config.MoneyWash.Enabled or not Config.MoneyWash.Blip.Enabled then return end
    
    local washData = GetMoneyWashData()
    
    local blip = AddBlipForCoord(Config.MoneyWash.Location.x, Config.MoneyWash.Location.y, Config.MoneyWash.Location.z)
    SetBlipSprite(blip, Config.MoneyWash.Blip.Sprite)
    SetBlipScale(blip, Config.MoneyWash.Blip.Scale)
    SetBlipColour(blip, Config.MoneyWash.Blip.Color)
    SetBlipAsShortRange(blip, true)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(Config.MoneyWash.Blip.Label)
    EndTextCommandSetBlipName(blip)
    
    washData.blip = blip
    SetMoneyWashData(washData)
end

-- Create money wash ped
function CreateMoneyWashPed()
    if not Config.MoneyWash.Enabled or not Config.MoneyWash.UsePed then return end
    
    local washData = GetMoneyWashData()
    
    local hash = GetHashKey(Config.MoneyWash.PedModel)
    RequestModel(hash)
    while not HasModelLoaded(hash) do
        Wait(10)
    end
    
    local ped = CreatePed(4, hash, Config.MoneyWash.Location.x, Config.MoneyWash.Location.y, Config.MoneyWash.Location.z, Config.MoneyWash.PedHeading, false, false)
    SetEntityAsMissionEntity(ped, true, true)
    SetPedKeepTask(ped, true)
    SetBlockingOfNonTemporaryEvents(ped, true)
    FreezeEntityPosition(ped, true)
    SetEntityInvincible(ped, true)
    
    TaskStartScenarioInPlace(ped, 'WORLD_HUMAN_CLIPBOARD', 0, true)
    
    washData.ped = ped
    SetMoneyWashData(washData)
    
    -- Add target interaction
    if GetResourceState('ox_target') == 'started' then
        exports.ox_target:addLocalEntity(ped, {
            {
                name = 'money_wash_ped',
                icon = 'fa-solid fa-money-bill-wave',
                label = Config.Notifications.washMoney,
                onSelect = function()
                    OpenMoneyWashInput()
                end,
                distance = 2.0
            }
        })
    elseif GetResourceState('qb-target') == 'started' then
        exports['qb-target']:AddTargetEntity(ped, {
            options = {
                {
                    type = "client",
                    event = "marz_drugselling:client:openMoneyWash",
                    icon = "fa-solid fa-money-bill-wave",
                    label = Config.Notifications.washMoney,
                }
            },
            distance = 2.0
        })
    end
end

-- Create money wash zone (when not using ped)
function CreateMoneyWashZone()
    if not Config.MoneyWash.Enabled or Config.MoneyWash.UsePed then return end
    
    if GetResourceState('ox_target') == 'started' then
        exports.ox_target:addBoxZone({
            coords = Config.MoneyWash.Location,
            size = vector3(2.0, 2.0, 2.0),
            rotation = 0,
            debug = false,
            options = {
                {
                    name = 'money_wash_zone',
                    icon = 'fa-solid fa-money-bill-wave',
                    label = Config.Notifications.washMoney,
                    onSelect = function()
                        OpenMoneyWashInput()
                    end,
                    distance = 2.0
                }
            }
        })
    elseif GetResourceState('qb-target') == 'started' then
        exports['qb-target']:AddBoxZone("money_wash_zone", Config.MoneyWash.Location, 2.0, 2.0, {
            name = "money_wash_zone",
            heading = 0,
            debugPoly = false,
            minZ = Config.MoneyWash.Location.z - 1,
            maxZ = Config.MoneyWash.Location.z + 2,
        }, {
            options = {
                {
                    type = "client",
                    event = "marz_drugselling:client:openMoneyWash",
                    icon = "fa-solid fa-money-bill-wave",
                    label = Config.Notifications.washMoney,
                }
            },
            distance = 2.0
        })
    end
end

-- Open money wash input
function OpenMoneyWashInput()
    TriggerServerEvent('marz_drugselling:server:getPlayerCash')
end

-- Money wash animations
function TaskNpcGiveEnvelope()
    local washData = GetMoneyWashData()
    
    if washData.ped and DoesEntityExist(washData.ped) then
        PlayAnimation(washData.ped, 'mp_common', 'givetake1_a', 1000)
    end
    PlayAnimation(PlayerPedId(), 'mp_common', 'givetake1_a', 1000)
    
    SetTimeout(1000, function()
        if washData.entities.envelope then
            AttachEntityToEntity(washData.entities.envelope, PlayerPedId(), GetPedBoneIndex(PlayerPedId(), 57005), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, true, true, false, true, 2, true)
            PlayAnimation(PlayerPedId(), 'melee@holster', 'holster', 1000)
            
            SetTimeout(750, function()
                if washData.entities.envelope then
                    DeleteEntity(washData.entities.envelope)
                    washData.entities.envelope = nil
                    SetMoneyWashData(washData)
                end
                
                if washData.ped and DoesEntityExist(washData.ped) then
                    PlayAmbientSpeech1(washData.ped, "GENERIC_THANKS", "SPEECH_PARAMS_FORCE")
                end
            end)
        end
    end)
end

function TaskGiveNpcMoney(amount)
    local washData = GetMoneyWashData()
    local cashProp = 'prop_anim_cash_pile_02'
    local hash = GetHashKey(cashProp)
    
    RequestModel(hash)
    while not HasModelLoaded(hash) do
        Wait(10)
    end
    
    washData.entities.cash = CreateObject(hash, Config.MoneyWash.Location.x, Config.MoneyWash.Location.y, Config.MoneyWash.Location.z, false, false, false)
    AttachEntityToEntity(washData.entities.cash, PlayerPedId(), 90, 0.003, 0.008, 0.015, 44.108, 29.315, 20.733, true, true, false, true, 2, true)
    
    PlayAnimation(PlayerPedId(), 'mp_common', 'givetake1_a', 1000)
    if washData.ped and DoesEntityExist(washData.ped) then
        PlayAnimation(washData.ped, 'mp_common', 'givetake1_a', 1000)
    end
    
    SetMoneyWashData(washData)
    TriggerServerEvent('marz_drugselling:server:startWashingMoney', amount)
    
    SetTimeout(750, function()
        local currentWashData = GetMoneyWashData()
        if currentWashData.entities.cash then
            if currentWashData.ped and DoesEntityExist(currentWashData.ped) then
                AttachEntityToEntity(currentWashData.entities.cash, currentWashData.ped, GetPedBoneIndex(currentWashData.ped, 28422), 0, 0, 0, 168.93, -83.80, 76.29, true, true, false, true, 2, true)
            else
                SetTimeout(2000, function()
                    local finalWashData = GetMoneyWashData()
                    if finalWashData.entities.cash then
                        DeleteEntity(finalWashData.entities.cash)
                        finalWashData.entities.cash = nil
                        SetMoneyWashData(finalWashData)
                    end
                end)
            end
        end
    end)
end

function GiveExchangeOffer(amount)
    local taxRate = Config.MoneyWash.TaxRate
    local offer = math.ceil(amount - (amount * taxRate / 100))
    
    local washData = GetMoneyWashData()
    
    local alert = lib.alertDialog({
        header = Config.Notifications.washMoney,
        content = string.format('Exchange Rate: %s%% fee\nYou will receive: $%s', taxRate, offer),
        centered = true,
        cancel = true
    })
    
    if alert == 'cancel' then 
        if washData.ped and DoesEntityExist(washData.ped) then
            PlayAmbientSpeech1(washData.ped, "GENERIC_INSULT_MED", "SPEECH_PARAMS_FORCE")
        end
        return 
    end
    
    TaskGiveNpcMoney(amount)
end

-- Money wash progress bar callback
lib.callback.register('marz_drugselling:startWashingProgressBar', function()
    local washData = GetMoneyWashData()
    
    SetTimeout(750, function()
        if washData.ped and DoesEntityExist(washData.ped) then
            PlayAnimation(washData.ped, 'anim@amb@casino@peds@', 'amb_world_human_leaning_male_wall_back_texting_idle_a', -1)
        end
    end)
    
    if lib.progressCircle({
        duration = Config.MoneyWash.WashTime * 1000,
        label = Config.Notifications.countingMoney,
        position = 'bottom',
        canCancel = false,
        disable = { move = true, combat = true }
    }) then
        local currentWashData = GetMoneyWashData()
        
        if currentWashData.ped and DoesEntityExist(currentWashData.ped) then
            PlayAnimation(currentWashData.ped, 'melee@holster', 'holster', 750)
        end
        
        SetTimeout(500, function()
            local envelopeProp = 'prop_cash_envelope_01'
            local hash = GetHashKey(envelopeProp)
            
            RequestModel(hash)
            while not HasModelLoaded(hash) do
                Wait(10)
            end
            
            local finalWashData = GetMoneyWashData()
            finalWashData.entities.envelope = CreateObject(hash, Config.MoneyWash.Location.x, Config.MoneyWash.Location.y, Config.MoneyWash.Location.z, false, false, false)
            
            if finalWashData.ped and DoesEntityExist(finalWashData.ped) then
                AttachEntityToEntity(finalWashData.entities.envelope, finalWashData.ped, GetPedBoneIndex(finalWashData.ped, 28422), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, true, true, false, true, 2, true)
            else
                AttachEntityToEntity(finalWashData.entities.envelope, PlayerPedId(), GetPedBoneIndex(PlayerPedId(), 57005), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, true, true, false, true, 2, true)
            end
            
            if finalWashData.entities.cash then
                DeleteEntity(finalWashData.entities.cash)
                finalWashData.entities.cash = nil
            end
            
            SetMoneyWashData(finalWashData)
            TaskNpcGiveEnvelope()
        end)
        
        return true
    else
        return false
    end
end)