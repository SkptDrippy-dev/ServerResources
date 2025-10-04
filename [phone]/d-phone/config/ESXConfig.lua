ESXConfig = {}

-- ESX Version Settings
ESXConfig.Newerthen12 = true             -- Set to true if using ESX 1.2 or higher
ESXConfig.GetSharedObjectfunction = true -- Set to true if using ESX 1.75 or newer

-- Ambulance Job Settings
ESXConfig.AmbulanceJobexport = false                  -- Set to true if using the ambulance job
ESXConfig.AmbulanceJobFolderName = 'esx_ambulancejob' -- The folder name for the ambulance job (if using)

-- ESX Events Settings
ESXConfig.getSharedObjectevent = 'esx:getSharedObject' -- The shared object event name
ESXConfig.prefix = "esx:"                              -- The prefix used for ESX events
ESXConfig.prefix2 = "esx_"                             -- The prefix used for ESX events (alternate)

ESXConfig.ESXFolderName = "es_extended"

-- ESX Society Settings
ESXConfig.society = {
    getMoney = 'esx_society:getSocietyMoney', -- The event name to get society money
    withdraw = "esx_society:withdrawMoney",   -- The event name to withdraw society money
    deposit = "esx_society:depositMoney"      -- The event name to deposit society money
}
