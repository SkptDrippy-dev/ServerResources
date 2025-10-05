-- ===================================================================
-- CLIENT VARIABLES & STATE MANAGEMENT
-- ===================================================================

-- Player data
local PlayerData = {}

-- Drug selling state
local isSelling = false
local currentClient = nil
local clientBlip = nil
local dealData = nil
local saleInProgress = false
local clientReachedPlayer = false
local clientWaitStartTime = 0
local currentClientPedType = nil

-- Client movement tracking
local clientLastPos = nil
local clientStuckTime = 0

-- Money wash variables
local moneyWashBlip = nil
local moneyWashPed = nil
local moneyWashEntities = {}
local moneyWashPoint = nil

-- Zone blips
local zoneBlips = {}

-- ===================================================================
-- GETTERS & SETTERS
-- ===================================================================

function GetPlayerData()
    return PlayerData
end

function SetPlayerData(data)
    PlayerData = data
end

function GetSellingState()
    return {
        isSelling = isSelling,
        currentClient = currentClient,
        clientBlip = clientBlip,
        dealData = dealData,
        saleInProgress = saleInProgress,
        clientReachedPlayer = clientReachedPlayer,
        clientWaitStartTime = clientWaitStartTime,
        currentClientPedType = currentClientPedType
    }
end

function SetSellingState(state)
    isSelling = state.isSelling or false
    currentClient = state.currentClient
    clientBlip = state.clientBlip
    dealData = state.dealData
    saleInProgress = state.saleInProgress or false
    clientReachedPlayer = state.clientReachedPlayer or false
    clientWaitStartTime = state.clientWaitStartTime or 0
    currentClientPedType = state.currentClientPedType
end

function GetClientTracking()
    return {
        lastPos = clientLastPos,
        stuckTime = clientStuckTime
    }
end

function SetClientTracking(lastPos, stuckTime)
    clientLastPos = lastPos
    clientStuckTime = stuckTime
end

function GetMoneyWashData()
    return {
        blip = moneyWashBlip,
        ped = moneyWashPed,
        entities = moneyWashEntities,
        point = moneyWashPoint
    }
end

function SetMoneyWashData(data)
    moneyWashBlip = data.blip
    moneyWashPed = data.ped
    moneyWashEntities = data.entities or {}
    moneyWashPoint = data.point
end

function GetZoneBlips()
    return zoneBlips
end

function SetZoneBlips(blips)
    zoneBlips = blips or {}
end