ESX = nil



RegisterServerEvent('D-Phone:server:reload')
AddEventHandler('D-Phone:server:reload', function(source)
    local _source = source
    local xPlayer = GetPlayer(_source)

    if xPlayer ~= nil then
        local Data = GetUserData(xPlayer.identifier)
        Wait(200)
        Business.SetOffline(Data.job, _source)
        UserData[_source] = nil
        Wait(50)
        TriggerEvent("D-Phone:loaduserdata", _source)

        local time = (Config.FirstTimeSQL + Config.MysqlWaitingTime + Config.UserDataWaitingTime + 1000)

        TriggerClientEvent("D-Phone:client:reload", _source, time)
    end
end)

RegisterServerEvent('D-Phone:server:fire')
AddEventHandler('D-Phone:server:fire', function(source, id, unemployed2)
    local _source = source

    local zPlayer = GetFrameworkPlayer(id)
    local grade = 0
    if zPlayer then
        Wait(100)
        setJob(id, "unemployed", 0)
        TriggerClientEvent("d-notification", _source, _U("successfired"), 5000, "success")
        TriggerClientEvent("d-notification", id, _U("gotfired"), 5000, "warning")
    else
        TriggerClientEvent("d-notification", _source, _U("personoffline"), 5000, "error")
    end
end)


RegisterServerEvent('D-Phone:server:uprank')
AddEventHandler('D-Phone:server:uprank', function(source, id, oldgrade)
    if source then
        local _source = source
        local xPlayer = GetFrameworkPlayer(_source)
        local maxgrade = xPlayer.job.grade
        local job = xPlayer.job.name
        local zPlayer = GetFrameworkPlayer(id)
        local grade2 = tonumber(oldgrade) + 1
        local grade = tonumber(grade2)

        if zPlayer then
            if maxgrade > grade then
                setJob(id, job, grade)
                TriggerClientEvent("d-notification", _source, _U("sucessuprank", tostring(grade)), 5000, "success")
                TriggerClientEvent("d-notification", id, _U("gotuprank", tostring(grade)), 5000, "success")
            else
                TriggerClientEvent("d-notification", _source, _U("ranktohigh"), 5000, "error")
            end
        else
            TriggerClientEvent("d-notification", _source, _U("personoffline"), 5000, "error")
        end
    end
end)

RegisterServerEvent('D-Phone:server:derank')
AddEventHandler('D-Phone:server:derank', function(source, id, oldgrade)
    if source then
        local _source = source
        local xPlayer = GetFrameworkPlayer(_source)
        local job = xPlayer.job.name
        local zPlayer = GetFrameworkPlayer(id)
        local grade2 = tonumber(oldgrade) - 1
        local grade = tonumber(grade2)

        if zPlayer then
            if grade >= 0 then
                setJob(id, job, grade)
                TriggerClientEvent("d-notification", _source, _U("successderank", tostring(grade)), 5000, "success")
                TriggerClientEvent("d-notification", id, _U("gotderank", tostring(grade)), 5000, "warning")
            else
                TriggerClientEvent("d-notification", _source, _U("alreadylow"), 5000, "error")
            end
        else
            TriggerClientEvent("d-notification", _source, _U("personoffline"), 5000, "error")
        end
    end
end)


RegisterServerEvent('D-Phone:server:recruit')
AddEventHandler('D-Phone:server:recruit', function(source, id, grade2)
    if source then
        local _source = source
        local xPlayer = GetFrameworkPlayer(_source)
        local job = xPlayer.job.name
        local joblabel = xPlayer.job.label
        local maxgrade = xPlayer.job.grade
        local zPlayer = GetFrameworkPlayer(id)
        local grade = tonumber(grade2)

        if zPlayer then
            if maxgrade > grade then
                setJob(id, job, grade)
                TriggerClientEvent("d-notification", _source, _U("recruit", tostring(grade)), 5000, "success")
                TriggerClientEvent("d-notification", id, _U("gotrecruit", joblabel, tostring(grade)), 5000,
                    "success")
            else
                TriggerClientEvent("d-notification", _source, _U("ranktohigh"), 5000, "error")
            end
        else
            TriggerClientEvent("d-notification", _source, _U("personoffline"), 5000, "error")
        end
    end
end)




-- ESX 1.2
--[[

  ]]
function getRandomCardNumber(_source)
    local source = _source
    local numBase0 = math.random(1000000000000000, 9999999999999999)
    local num = string.format(numBase0)


    if Config.okokbanking == true then
        local xPlayer = ESX.GetPlayerFromId(source)

        MySQL.Async.fetchAll('SELECT iban FROM users WHERE identifier = @identifier', {
            ['@identifier'] = xPlayer.identifier
        }, function(result)
            local db = result[1]
            local iban = db.iban
            if iban ~= nil then
                num = iban
            end
        end)
    end
    Wait(50)

    return num
end

--   Advertisement

-- Events for messages etc
AddEventHandler('D-Phone:server:sendmessage', function(source, clientsource, message, number2)
end)

AddEventHandler('D-Phone:server:sendgps', function(source, clientsource, number2, pos)
end)

AddEventHandler('D-Phone:server:sendbusinessmessage', function(source, message, number2, job)
end)

AddEventHandler('D-Phone:server:sendbusinessgps', function(source, number2, pos, job, position)
end)

AddEventHandler('D-Phone:server:sendservicemessage',
    function(source, clientsource, rawmessage, job, sendnumber, gps, position, isDead)
    end)

AddEventHandler('D-Phone:server:twitter:writetweet', function(source, clientsource, message, twitteraccount, image)
end)

RegisterServerEvent('D-Phone:server:checkphone')
AddEventHandler('D-Phone:server:checkphone', function(source)
    if source then
        local _source = source

        if Config.Debug == true then
            dprint("CheckPhone1 | Working")
        end
        local hasPhone = hasPhone(_source)
        if Config.Debug == true then
            dprint("CheckPhone2 | Working")
        end

        if hasPhone == true then
            if Config.Debug == true then
                dprint("CheckPhone3 | Working")
            end
            TriggerClientEvent("D-Phone:client:hasphone", _source)
        else
            if Config.Debug == true then
                dprint("CheckPhone3 | Working")
            end
            TriggerClientEvent("D-Phone:client:hasnophone", _source)
        end
    end
end)


math.randomseed(os.time())

function GeneratePhoneNumber()
    local numBase0 = math.random(CallConfig.LowerPrefix, CallConfig.HigherPrefix)
    local numBase1 = math.random(CallConfig.LowerNumber, CallConfig.HigherNumber)
    local number = string.format("%03d-%04d", numBase0, numBase1)

    if CallConfig.Prefix == true then
        number = string.format("%s%s%s", numBase0, CallConfig.numBaseSpace, numBase1)
    else
        number = string.format("%s%s", numBase0, numBase1)
    end
    return number
end

-- Banking
RegisterServerEvent('D-Phone:server:withdrawmoney')
AddEventHandler('D-Phone:server:withdrawmoney', function(source, amount)

end)

RegisterServerEvent('D-Phone:server:depositmoney')
AddEventHandler('D-Phone:server:depositmoney', function(source, amount)

end)




RegisterServerEvent('sendmessage')
AddEventHandler('sendmessage', function(source, message, receiver, image, gps)
    local Data = UserData[source]
    Messages.SendMessage(Data.source, message, Data.phone_number, receiver, image, gps)
end)

-- This event is triggert when an user sends a dispatch
RegisterServerEvent('business:dispatch:receivemessage')
AddEventHandler('business:dispatch:receivemessage', function(source, message, sender, receiver, image, gps)
    local Data = UserData[source]

    if gps ~= nil then
        gps = json.decode(gps)

        -- exports["ls-dispatch"]:CustomAlert({
        --     coords = vector3(gps.x, gps.y, gps.z),
        --     message = message,
        --     dispatchCode = "10-4 Rubber Ducky",
        --     description = "Dispatch",
        --     radius = 0,
        --     sprite = 64,
        --     color = 2,
        --     scale = 1.0,
        --     length = 3,
        -- })
    end
end)

Citizen.CreateThread(
    function()
        Wait(1000)
        Messages.sendMessageToEveryone = function(source, message, sender_number, image, gps, data)
            Messages.print("Messages.sendMessageToEveryone")
            -- for _, player in ipairs(ESX.GetPlayers()) do
            --     dprint(player)
            --     local Data = UserData[player]
            --     Messages.print("Messages.sendMessageToEveryone | send to Player 1")
            --     dprint(Data)
            --     if Data then
            --         Messages.print("Messages.sendMessageToEveryone | send to Player 2")
            --         dprint(source)
            --         dprint(message)
            --         dprint(sender_number)
            --         dprint(Data.phone_number)
            --         Messages.sendMessageToNumber(source, message, sender_number, Data.phone_number, image, gps, data)
            --     end
            -- end

            if ESX.GetExtendedPlayers() then
                dprint("Messages.sendMessageToEveryone | send to Player 0")
                local xPlayers = ESX.GetExtendedPlayers() -- Returns all xPlayers
                for i = 1, #(xPlayers) do
                    local xPlayer = xPlayers[i]

                    local Data = UserData[xPlayer.source]
                    Messages.print("Messages.sendMessageToEveryone | send to Player 1")
                    dprint(Data)
                    if Data then
                        Messages.print("Messages.sendMessageToEveryone | send to Player 2")
                        dprint(source)
                        dprint(message)
                        dprint(sender_number)
                        dprint(Data.phone_number)
                        Messages.sendMessageToNumber(source, message, sender_number, Data.phone_number, image, gps, data)
                    end
                end
            end
        end
    end
)
Log = {}
Log.debug = function(msg)
    if Config.Debug == true then
        print("DEBUG: " .. msg)
    end
end

Log.trace = function(msg)
    if Config.Debug == true then
        print("TRACE: " .. msg)
    end
end

Log.info = function(msg)
    if Config.Debug == true then
        print("INFO: " .. msg)
    end
end

Log.warn = function(msg)
    if Config.Debug == true then
        print("WARN: " .. msg)
    end
end

Log.error = function(msg)
    if Config.Debug == true then
        print("ERROR: " .. msg)
    end
end

Log.fatal = function(msg)
    if Config.Debug == true then
        print("FATAL: " .. msg)
    end
end
