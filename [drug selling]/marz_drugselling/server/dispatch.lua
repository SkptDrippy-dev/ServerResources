-- ===================================================================
-- POLICE DISPATCH & ALERT SYSTEM
-- ===================================================================

-- Send police alert
function PoliceAlert(coords, dispatch)
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
                        SendDispatchAlert(tonumber(playerId), coords, dispatch)
                        break
                    end
                end
            end
        end
    end
end

-- Send dispatch alert to specific player
function SendDispatchAlert(playerId, coords, dispatch)
    if Config.DispatchSystem == 'auto' then
        if GetResourceState('cd_dispatch') == 'started' then
            TriggerEvent('cd_dispatch:AddNotification', {
                job_table = Config.PoliceJobs,
                coords = coords,
                title = dispatch.Title or Config.Dispatch.Title,
                message = dispatch.Message or Config.Dispatch.Message,
                flash = 0,
                unique_id = math.random(0000000, 9999999),
                blip = {
                    sprite = 161,
                    scale = 1.0,
                    colour = 1,
                    flashes = false,
                    text = dispatch.Title or Config.Dispatch.Title,
                    time = (5 * 60 * 1000),
                    sound = 1,
                }
            })
        elseif GetResourceState('ps-dispatch') == 'started' then
            exports['ps-dispatch']:CustomAlert({
                coords = coords,
                message = dispatch.Message or Config.Dispatch.Message,
                dispatchCode = dispatch.Code or Config.Dispatch.Code,
                description = dispatch.Title or Config.Dispatch.Title,
                radius = 0,
                sprite = 161,
                color = 1,
                scale = 1.0,
                length = 3,
            })
        else
            TriggerClientEvent('marz_drugselling:client:addPoliceBlip', playerId, coords)
            TriggerClientEvent('marz_drugselling:client:notify', playerId, 
                string.format('[%s] %s', dispatch.Code or Config.Dispatch.Code, dispatch.Message or Config.Dispatch.Message), 'error')
        end
    elseif Config.DispatchSystem == 'cd-dispatch' and GetResourceState('cd_dispatch') == 'started' then
        TriggerEvent('cd_dispatch:AddNotification', {
            job_table = Config.PoliceJobs,
            coords = coords,
            title = dispatch.Title or Config.Dispatch.Title,
            message = dispatch.Message or Config.Dispatch.Message,
            flash = 0,
            unique_id = math.random(0000000, 9999999),
            blip = {
                sprite = 161,
                scale = 1.0,
                colour = 1,
                flashes = false,
                text = dispatch.Title or Config.Dispatch.Title,
                time = (5 * 60 * 1000),
                sound = 1,
            }
        })
    elseif Config.DispatchSystem == 'ps-dispatch' and GetResourceState('ps-dispatch') == 'started' then
        exports['ps-dispatch']:CustomAlert({
            coords = coords,
            message = dispatch.Message or Config.Dispatch.Message,
            dispatchCode = dispatch.Code or Config.Dispatch.Code,
            description = dispatch.Title or Config.Dispatch.Title,
            radius = 0,
            sprite = 161,
            color = 1,
            scale = 1.0,
            length = 3,
        })
    elseif Config.DispatchSystem == 'framework' or Config.DispatchSystem == 'none' then
        if Config.DispatchSystem ~= 'none' then
            TriggerClientEvent('marz_drugselling:client:addPoliceBlip', playerId, coords)
            TriggerClientEvent('marz_drugselling:client:notify', playerId, 
                string.format('[%s] %s', dispatch.Code or Config.Dispatch.Code, dispatch.Message or Config.Dispatch.Message), 'error')
        end
    end
end