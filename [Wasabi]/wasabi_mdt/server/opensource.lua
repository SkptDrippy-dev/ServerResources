-----------------For support, scripts, and more----------------
--------------- https://discord.gg/wasabiscripts  -------------
---------------------------------------------------------------
Config.DiscordWebhook = ''
local esx = 'es_extended'
local qbcore = 'qb-core'
ESX, QBCore = nil, nil

local function convertDateToUS(dateStr)
    if not dateStr or dateStr == 'Unknown' or dateStr == '' then
        return 'Unknown'
    end

    -- Try DD/MM/YYYY format
    local day, month, year = dateStr:match("(%d+)/(%d+)/(%d+)")
    if day and month and year then
        return string.format("%02d/%02d/%04d", tonumber(month), tonumber(day), tonumber(year))
    end

    -- Try YYYY-MM-DD format
    local year2, month2, day2 = dateStr:match("(%d+)-(%d+)-(%d+)")
    if year2 and month2 and day2 then
        return string.format("%02d/%02d/%04d", tonumber(month2), tonumber(day2), tonumber(year2))
    end

    -- Try MM-DD-YYYY format
    local month3, day3, year3 = dateStr:match("(%d+)-(%d+)-(%d+)")
    if month3 and day3 and year3 and tonumber(year3) > 1900 then
        return string.format("%02d/%02d/%04d", tonumber(month3), tonumber(day3), tonumber(year3))
    end

    return dateStr
end

--[[
    API KEY (https://fivemanage.com/)
    DO NOT SHARE THIS WITH ANYONE, EVER!

    REQUIRES: screenshot-basic (https://github.com/citizenfx/screenshot-basic)
--]]
Config.FIVEMANAGE_API_KEY = 'APqxdd1ux419EEcYKyIWxjU7pp0XONZB'

function IsStaff(src)
    for i = 1, #Config.StaffGroups do
        if wsb.hasPermission(src, Config.StaffGroups[i]) then
            return true
        end
    end

    if IsPlayerAceAllowed(src, 'mdt.staff') then return true end

    return false
end

function IsPhotoServiceAvailable()
    -- Check if API key is configured
    if not Config.FIVEMANAGE_API_KEY or Config.FIVEMANAGE_API_KEY == '' then
        return false, 'FiveManage API key not configured'
    end

    -- Check if screenshot-basic is available
    if not SCREENBASIC then
        return false, 'screenshot-basic resource not started'
    end

    return true, nil
end

function TakeScreenshot(src)
    local success, err = IsPhotoServiceAvailable()
    if not success then
        Error(err)
        return false
    end

    local url = promise.new()

    if Config.FIVEMANAGE_API_KEY then
        local headers = {
            ['User-Agent'] = 'wasabi_mdt',
            ['Authorization'] = Config.FIVEMANAGE_API_KEY
        }

        PerformHttpRequest('https://api.fivemanage.com/api/presigned-url?fileType=image',
            function(statusCode, resultData, resultHeaders, errorData)
                if statusCode ~= 200 then
                    Error('Failed to get presigned URL from Fivemanage')
                    return url:resolve(false)
                end

                resultData = json.decode(resultData)
                if not resultData or not resultData.presignedUrl then
                    Error('Failed to get presigned URL from Fivemanage')
                    return url:resolve(false)
                end

                local res = wsb.awaitClientCallback('wasabi_mdt:takeScreenshot', src, resultData.presignedUrl)

                if res then
                    url:resolve(res)
                else
                    url:resolve(false)
                end
            end, 'GET', nil, headers)
    end

    return Citizen.Await(url)
end

function DeleteImageFromCloud(imageId)
    local success, err = IsPhotoServiceAvailable()
    if not success then
        Error(err)
        return false
    end

    local deleted = promise.new()

    if Config.FIVEMANAGE_API_KEY then
        local headers = {
            ['Authorization'] = Config.FIVEMANAGE_API_KEY,
        }

        PerformHttpRequest('https://fmapi.net/api/image/delete/' .. imageId,
            function(statusCode, resultData, resultHeaders, errorData)
                if statusCode == 200 then
                    deleted:resolve(true)
                else
                    Error('Failed to delete image from FiveManage. Status: ' .. statusCode)
                    if errorData then
                        Error('Error: ' .. tostring(errorData))
                    end
                    deleted:resolve(false)
                end
            end,
            'DELETE',
            '',
            headers
        )
    end

    return Citizen.Await(deleted)
end

function GetPlayersFromDatabase(query)
    local results = {}
    query = query:lower()

    if GetResourceState('es_extended') == "started" then
        local players = MySQL.query.await([[
            SELECT identifier, firstname, lastname, dateofbirth, phone_number, sex, job, job_grade
            FROM users
            WHERE LOWER(CONCAT(firstname, ' ', lastname)) LIKE ?
            LIMIT 10
        ]], { '%' .. query .. '%' })

        if players then
            for _, player in ipairs(players) do
                results[#results + 1] = {
                    identifier = player.identifier,
                    firstname = player.firstname,
                    lastname = player.lastname,
                    dob = convertDateToUS(player.dateofbirth),
                    phone = player.phone_number or 'Unknown',
                    job = player.job,
                    job_grade = player.job_grade or 0,
                    gender = player.sex == 'm' and 'male' or player.sex == 'f' and 'female' or 'other',
                    isRegistered = MDTCitizen.get(player.identifier) ~= nil
                }
            end
        end
    elseif GetResourceState('qb-core') == "started" then
        local players = MySQL.query.await([[
            SELECT citizenid, JSON_EXTRACT(charinfo, '$.firstname') as firstname,
                   JSON_EXTRACT(charinfo, '$.lastname') as lastname,
                   JSON_EXTRACT(charinfo, '$.birthdate') as birthdate,
                   JSON_EXTRACT(charinfo, '$.phone') as phone,
                   JSON_EXTRACT(charinfo, '$.gender') as gender,
                   JSON_EXTRACT(charinfo, '$.job') as job,
                   JSON_EXTRACT(charinfo, '$.job_grade') as job_grade
            FROM players
            WHERE LOWER(CONCAT(JSON_EXTRACT(charinfo, '$.firstname'), ' ', JSON_EXTRACT(charinfo, '$.lastname'))) LIKE ?
            LIMIT 10
        ]], { '%' .. query .. '%' })

        if players then
            for _, player in ipairs(players) do
                local firstname = player.firstname and player.firstname:gsub('"', '') or 'Unknown'
                local lastname = player.lastname and player.lastname:gsub('"', '') or 'Unknown'
                local gender = player.gender and player.gender:gsub('"', '') or 'other'
                local birthdate = player.birthdate and player.birthdate:gsub('"', '') or 'Unknown'

                results[#results + 1] = {
                    identifier = player.citizenid,
                    name = firstname .. ' ' .. lastname,
                    firstname = firstname,
                    lastname = lastname,
                    dob = convertDateToUS(birthdate),
                    phone = player.phone or 'Unknown',
                    gender = gender == '0' and 'male' or gender == '1' and 'female' or 'other',
                    job = player.job_name and player.job_name:gsub('"', '') or nil,
                    job_grade = tonumber(player.job_grade) or 0,
                    isRegistered = MDTCitizen.get(player.citizenid) ~= nil
                }
            end
        end
    end

    return results
end


function GetVehiclesFromDatabase(query)
    local results = {}
    local normalizedQuery = query:gsub("%s+", ""):upper()

    if GetResourceState('es_extended') == "started" then
        local vehicles = MySQL.query.await([[
            SELECT plate, vehicle
            FROM owned_vehicles
            WHERE UPPER(REPLACE(plate, ' ', '')) LIKE ?
            LIMIT 10
        ]], { '%' .. normalizedQuery .. '%' })

        if vehicles then
            for _, vehicle in ipairs(vehicles) do
                local vehicleData = json.decode(vehicle.vehicle)
                local modelHash = vehicleData and vehicleData.model

                results[#results + 1] = {
                    plate = vehicle.plate, -- Keep original plate format
                    model = modelHash or 'Unknown',
                    isRegistered = MDTVehicle.getByPlate(vehicle.plate) ~= nil
                }
            end
        end
    elseif GetResourceState('qb-core') == "started" then
        local vehicles = MySQL.query.await([[
            SELECT plate, vehicle, mods
            FROM player_vehicles
            WHERE UPPER(REPLACE(plate, ' ', '')) LIKE ?
            LIMIT 10
        ]], { '%' .. normalizedQuery .. '%' })

        if vehicles then
            for _, vehicle in ipairs(vehicles) do
                local vehicleData = vehicle.mods and json.decode(vehicle.mods) or {}
                local modelName = vehicle.vehicle

                results[#results + 1] = {
                    plate = vehicle.plate, -- Keep original plate format
                    model = modelName or vehicleData.model or 'Unknown',
                    isRegistered = MDTVehicle.getByPlate(vehicle.plate) ~= nil
                }
            end
        end
    end

    return results
end

function GetJobsAndGrades()
    local jobs = {}

    -- For ESX
    if GetResourceState('es_extended') == "started" then
        if not ESX then
            ESX = exports['es_extended']:getSharedObject()
        end

        for jobName, jobData in pairs(ESX.GetJobs()) do
            if not table.contains(Config.IgnoredJobs, jobName) then
                local grades = {}
                for gradeNum, gradeData in pairs(jobData.grades) do
                    table.insert(grades, {
                        label = gradeData.label,
                        value = tonumber(gradeNum)
                    })
                end
                -- Sort grades by value
                table.sort(grades, function(a, b) return a.value < b.value end)

                jobs[jobName] = {
                    label = jobData.label,
                    name = jobName,
                    grades = grades
                }
            end
        end
        -- For QBCore
    elseif GetResourceState('qb-core') == "started" then
        if not QBCore then
            QBCore = exports['qb-core']:GetCoreObject()
        end
        for jobName, jobData in pairs(QBCore.Shared.Jobs) do
            if not table.contains(Config.IgnoredJobs, jobName) then
                local grades = {}
                for gradeNum, gradeData in pairs(jobData.grades) do
                    table.insert(grades, {
                        label = gradeData.name,
                        value = tonumber(gradeNum)
                    })
                end
                -- Sort grades by value
                table.sort(grades, function(a, b) return a.value < b.value end)

                jobs[jobName] = {
                    label = jobData.label,
                    name = jobName,
                    grades = grades
                }
            end
        end
    end

    Debug('server/opensource.lua:GetJobsAndGrades: %s', json.encode(jobs, { indent = true }))

    return jobs
end

function GetJobLabel(jobName)
    if not jobName then return nil end

    if GetResourceState('es_extended') == "started" then
        if not ESX then
            ESX = exports['es_extended']:getSharedObject()
        end

        local job = ESX.GetJobs()[jobName]
        return job and job.label or jobName
    elseif GetResourceState('qb-core') == "started" then
        if not QBCore then
            QBCore = exports['qb-core']:GetCoreObject()
        end

        local job = QBCore.Shared.Jobs[jobName]
        return job and job.label or jobName
    end

    return jobName
end

function GetJobGradeLabel(jobName, gradeNumber)
    if not jobName or not gradeNumber then return nil end

    -- For ESX
    if GetResourceState('es_extended') == "started" then
        if not ESX then
            ESX = exports['es_extended']:getSharedObject()
        end

        local job = ESX.GetJobs()[jobName]
        if job and job.grades and job.grades[tostring(gradeNumber)] then
            return job.grades[tostring(gradeNumber)].label
        end

    -- For QBCore
    elseif GetResourceState('qb-core') == "started" then
        if not QBCore then
            QBCore = exports['qb-core']:GetCoreObject()
        end

        local job = QBCore.Shared.Jobs[jobName]
        if job and job.grades and job.grades[tostring(gradeNumber)] then
            return job.grades[tostring(gradeNumber)].name
        end
    end

    return "Grade " .. tostring(gradeNumber)
end