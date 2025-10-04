RegisterNetEvent("d-customnotification")
AddEventHandler("d-customnotification", function(text, length, color)
	local color = color
	local length = length
	if color ~= nil then
		color = "black"
	end
	if length ~= nil then
		length = 4000
	end

	-- THIS IS AN EXAMPLE IF YOU WANT TO USE THE NORMAL ESX NOTIFIICATION
	FrameworkNotify(text)

	-- TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = text, length = length, style = { ['background-color'] = color, ['color'] = '#fff' } })
end)

DisabledKeys = {
	["ESC"] = 322,
	["F1"] = 288,
	["F2"] = 289,
	["F3"] = 170,
	["F5"] = 166,
	["F6"] = 167,
	["F7"] = 168,
	["F8"] = 169,
	["F9"] = 56,
	["F10"] = 57,
	["~"] = 243,
	["1"] = 157,
	["2"] = 158,
	["3"] = 160,
	["4"] = 164,
	["5"] = 165,
	["6"] = 159,
	["7"] = 161,
	["8"] = 162,
	["9"] = 163,
	["-"] = 84,
	["="] = 83,
	["BACKSPACE"] = 177,
	["TAB"] = 37,
	["Q"] = 44,
	["E"] = 38,
	["R"] = 45,
	["T"] = 245,
	["Y"] = 246,
	["U"] = 303,
	["P"] = 199,
	["["] = 39,
	["]"] = 40,
	["ENTER"] = 18,
	["G"] = 47,
	["H"] = 74,
	["K"] = 311,
	["L"] = 182,
	["Z"] = 20,
	["X"] = 73,
	["V"] = 0,
	["B"] = 29,
	["M"] = 244,
	[","] = 82,
	["."] = 81,
	["LEFTCTRL"] = 36,
	["LEFTALT"] = 19,
	["SPACE"] = 22,
	["RIGHTCTRL"] = 70,
	["HOME"] = 213,
	["PAGEUP"] = 10,
	["PAGEDOWN"] = 11,
	["DELETE"] = 178,
	["LEFT"] = 174,
	["RIGHT"] = 175,
	["TOP"] = 27,
	["DOWN"] = 173,
	["NENTER"] = 201,
	["N4"] = 108,
	["N5"] = 60,
	["N6"] = 107,
	["N+"] = 96,
	["N-"] = 97,
	["N7"] = 117,
	["N8"] = 61,
	["N9"] = 118
}


Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)
		local playerPed = PlayerPedId()
		local car = GetVehiclePedIsIn(playerPed, false)
		if Phoneopen == true then
			for _, v in pairs(DisabledKeys) do
				DisableControlAction(0, v, true)
			end
			DisableControlAction(0, 1, true) -- Disable pan
			DisableControlAction(0, 2, true) -- Disable tilt
			DisableControlAction(0, 24, true) -- Attack
			DisableControlAction(0, 257, true) -- Attack 2
			DisableControlAction(0, 25, true) -- Aim
			DisableControlAction(0, 263, true) -- Melee Attack 1
			DisableControlAction(0, 322, true) -- Melee Attack 1

			DisableControlAction(0, 45, true) -- Reload
			DisableControlAction(0, 22, true) -- Jump
			DisableControlAction(0, 44, true) -- Cover
			DisableControlAction(0, 37, true) -- Select Weapon
			-- DisableControlAction(0, 23, true) -- Also 'enter'?

			DisableControlAction(0, 288, true) -- Disable phone
			DisableControlAction(0, 289, true) -- Inventory
			DisableControlAction(0, 170, true) -- Animations
			DisableControlAction(0, 167, true) -- Job

			-- DisableControlAction(0, 72, true) -- Disable reversing in vehicle

			DisableControlAction(2, 36, true) -- Disable going stealth

			DisableControlAction(0, 47, true) -- Disable weapon
			DisableControlAction(0, 264, true) -- Disable melee
			DisableControlAction(0, 257, true) -- Disable melee
			DisableControlAction(0, 140, true) -- Disable melee
			DisableControlAction(0, 141, true) -- Disable melee
			DisableControlAction(0, 142, true) -- Disable melee
			DisableControlAction(0, 143, true) -- Disable melee


			SetPauseMenuActive(false)

			if car then
				if GetPedInVehicleSeat(car, -1) == playerPed then
					SetPlayerCanDoDriveBy(PlayerId(), false)
				elseif passengerDriveBy then
					SetPlayerCanDoDriveBy(PlayerId(), true)
				else
					SetPlayerCanDoDriveBy(PlayerId(), false)
				end
			end
		else
			if car then
				if GetPedInVehicleSeat(car, -1) == playerPed then
					SetPlayerCanDoDriveBy(PlayerId(), true)
				elseif passengerDriveBy then
					SetPlayerCanDoDriveBy(PlayerId(), true)
				else
					SetPlayerCanDoDriveBy(PlayerId(), true)
				end
			end
			Citizen.Wait(500)
		end
	end
end)

-- Business App
RegisterNUICallback("business:mm:withdraw", function(data, cb)
	local PlayerData = UserData
	TriggerServerEvent("D-Phone:server:withdrawmoney", GetPlayerServerId(PlayerId()), data.amount)
	TriggerServerEvent("business:refreshjobmoney", GetPlayerServerId(PlayerId()))
	WithdrawSocietyMoney(PlayerData.job, data.amount)
end)

RegisterNUICallback("business:mm:deposit", function(data, cb)
	local PlayerData = UserData
	TriggerServerEvent("D-Phone:server:depositmoney", GetPlayerServerId(PlayerId()), data.amount)
	TriggerServerEvent("business:refreshjobmoney", GetPlayerServerId(PlayerId()))
	DepositSocietyMoney(PlayerData.job, data.amount)
end)

-- Radio
AddEventHandler("D-Phone:client:setradio2", function(freq)
	TriggerEvent("D-Phone:client:setradio", freq)
end)

RegisterNetEvent("D-Phone:receiveDispatch")
AddEventHandler("D-Phone:receiveDispatch", function(coords, sendersource, sendernumber, receivernumber)
	-- cords: with for example coords.x you will get the x position of the dispatch
	-- source of the dispatch sender
	-- number of dispatch sender
	-- receivernumber: for example police, ambulance or mechanic.
	-- print("D-Phone:receiveDispatch")
	-- print(json.encode(coords))
	-- print(sendersource)
	-- print(sendernumber)
	-- print(receivernumber)
end)

-- If you want to use an custom speaker function
CustomSpeakerFunction = function(state)
	-- state can be true or false
end

RegisterKeyMapping('+openphone', 'Open Phone', 'keyboard', Config.OpenPhonekey)

RegisterCommand('+openphone', function()
	TriggerEvent("D-Phone:openphone")
end, false)

RegisterCommand('-openphone', function()
	-- openPhone = false
end, false)

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
