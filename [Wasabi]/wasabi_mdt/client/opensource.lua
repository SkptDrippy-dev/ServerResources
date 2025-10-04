-----------------For support, scripts, and more----------------
--------------- https://discord.gg/wasabiscripts  -------------
---------------------------------------------------------------

wsb.registerCallback('wasabi_mdt:takeScreenshot', function(presignedUrl)
    local p = promise.new()

    SCREENBASIC:requestScreenshotUpload(presignedUrl, 'file', function(data)
        local resp = json.decode(data)
        if resp then
            p:resolve(resp)
        else
            p:resolve(false)
        end
    end)

    return Citizen.Await(p)
end)

function DisablePlayerMovement(ped, disable)
    -- Integrate things like open inventory to disable them when player is using camera
    -- and other that you might want to disable when player is using things
    FreezeEntityPosition(ped, disable)
end

-- Test command for dispatch system (tests the exports)
-- RegisterCommand('testexportdispatches', function()
--     local delay = 2000 -- 2 seconds between each dispatch
--     local currentDelay = 0

--     -- Test all premade dispatches
--     for dispatchType, _ in pairs(Config.PremadeDispatches) do
--         SetTimeout(currentDelay, function()
--             Debug('[MDT TEST] Sending premade dispatch: ' .. dispatchType .. '^0')
--             exports['wasabi_mdt']:SendPremadeDispatch(dispatchType)
--         end)
--         currentDelay = currentDelay + delay
--     end

--     -- Test premade dispatches with overrides
--     SetTimeout(currentDelay, function()
--         Debug('[MDT TEST] Sending store_robbery with custom location^0')
--         exports['wasabi_mdt']:SendPremadeDispatch('store_robbery', {
--             location = '24/7 Store - Vinewood Boulevard',
--             coords = {x = 373.8, y = 325.8, z = 103.5}
--         })
--     end)
--     currentDelay = currentDelay + delay

--     SetTimeout(currentDelay, function()
--         Debug('[MDT TEST] Sending bank_robbery with custom description^0')
--         exports['wasabi_mdt']:SendPremadeDispatch('bank_robbery', {
--             description = 'Silent alarm triggered, 3 masked suspects inside Fleeca Bank',
--             location = 'Fleeca Bank - Great Ocean Highway'
--         })
--     end)
--     currentDelay = currentDelay + delay

--     -- Test custom dispatches using CreateDispatch export
--     SetTimeout(currentDelay, function()
--         Debug('[MDT TEST] Sending custom dispatch: Explosion^0')
--         local coords = GetEntityCoords(PlayerPedId())
--         exports['wasabi_mdt']:CreateDispatch({
--             type = 'shooting',
--             title = 'Large Explosion Reported',
--             description = 'Multiple explosions heard, possible terrorist activity',
--             location = 'Industrial Area',
--             coords = {x = coords.x + 100, y = coords.y + 100, z = coords.z},
--             priority = 5
--         })
--     end)
--     currentDelay = currentDelay + delay

--     SetTimeout(currentDelay, function()
--         Debug('[MDT TEST] Sending custom dispatch: Kidnapping^0')
--         exports['wasabi_mdt']:CreateDispatch({
--             type = 'assault',
--             title = 'Kidnapping in Progress',
--             description = 'Witness reports person being forced into vehicle',
--             location = 'Parking Garage',
--             coords = {x = 215.5, y = -810.0, z = 30.7},
--             priority = 4
--         })
--     end)
--     currentDelay = currentDelay + delay

--     SetTimeout(currentDelay, function()
--         Debug('[MDT TEST] Sending custom dispatch: Gang Activity^0')
--         local coords = GetEntityCoords(PlayerPedId())
--         exports['wasabi_mdt']:CreateDispatch({
--             type = 'disturbance',
--             title = 'Gang Activity Reported',
--             description = 'Large group gathering, possible gang meeting',
--             location = GetStreetName(),
--             coords = {x = coords.x, y = coords.y, z = coords.z},
--             priority = 3
--         })
--     end)
--     currentDelay = currentDelay + delay

--     SetTimeout(currentDelay, function()
--         Debug('[MDT TEST] Sending custom dispatch: Hit and Run^0')
--         exports['wasabi_mdt']:CreateDispatch({
--             type = 'traffic_stop',
--             title = 'Hit and Run Accident',
--             description = 'Vehicle fled scene after hitting pedestrian, heading northbound',
--             location = 'Downtown Los Santos',
--             coords = {x = 195.2, y = -933.8, z = 30.6},
--             priority = 3
--         })
--     end)
--     currentDelay = currentDelay + delay

--     Debug('[MDT TEST] All test dispatches queued. Total time: ' .. (currentDelay/1000) .. ' seconds^0')
-- end, false)

-- TriggerEvent('chat:addSuggestion', '/testexportdispatches', 'Test all MDT dispatch exports (premade and custom)')