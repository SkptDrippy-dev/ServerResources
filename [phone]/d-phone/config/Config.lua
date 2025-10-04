Config = {}

-- General Settings
Config.Framework = "esx"             -- Available: esx, qb
Config.Locale = 'en'                 -- The default language of the phone
Config.Currency = "$"                -- The currency symbol used in the phone
Config.DefaultTheme = "dark"         -- The default theme for the phone (available options: dark or white)
Config.Multichar = false             -- Set to true if youre using an multichar system
Config.Debug = false                 -- Set to true to enable debug mode
Config.OpenPhonekey = "f1"           -- The control key used to open the phone e.g. "m"
Config.AutomaticPhoneStart = true    -- Set to true to automatically start the phone when the player joins the server
Config.AutomaticStartingTime = 30000 -- The amount of time (in milliseconds) before the phone automatically starts (if AutomaticPhoneStart is set to true)
Config.LoadingScreen = true          -- Set to true to enable the loading screen when the phone is starting up
Config.NeedItem = true               -- Set to true to require an item in the player's inventory to use the phone
Config.actioncooldown = 1000         -- The cooldown time (in milliseconds) between actions on the phone
Config.enableWebImages = true        -- Disable this if you dont want to have that users can send or save images from the web
-- Animation Settings
Config.DoubleHandAnimation = true    -- Set to true to enable the animation where the player holds the phone with both hands
Config.Walking = true                -- Set to true to allow the player to walk while using the phone

-- Other Scripts Settings
Config.Dmarket = false     -- Set to true if you're using the Dmarket  (https://store.deun.xyz/package/4912924)
Config.Bitcoin = false     -- Set to true if you're using D-Bitcoin
Config.OxInventory = false -- Enable this, if youre using oxinventory

-- Phone Command Settings
Config.Command = true        -- Set to true to enable the phone command
Config.CommandText = "phone" -- The text used to activate the phone command

-- In-Game Time Display Settings
Config.DisplayInGameTime = false -- Set to true to display the in-game time on the phone

-- Export Settings
Config.MumbleVoipFolderName = "mumble-voip" -- The name of the MumbleVoip folder (if using MumbleVoip)
Config.PMAVOICEFolderName = "pma-voice"     -- The name of the PMAVOICE folder (if using PMAVOICE)
Config.SaltychatFolderName = 'saltychat'    -- The name of the Saltychat folder (if using Saltychat)

-- Voice Chat Settings
Config.TokoVoip = false     -- Set to true if using TokoVoip
Config.PMAVoice = false     -- Set to true if using PMAVOICE (requires OneSync enabled and at least the $15 Patreon subscription)
Config.MumbleVoip = false   -- Set to true if using MumbleVoip
Config.SaltyChat = false    -- Set to true if using Saltychat (newer version)
Config.SaltyChatOld = false -- Set to true if using Saltychat (older version)

-- Battery Settings
Config.Battery = {
    Enable = false,                             -- Set to true to enable battery usage
    BatteryLooseMinutes = math.random(1, 3),    -- The amount of time (in minutes) between each battery loss
    BatteryLooseAmount = math.random(1, 3),     -- The amount of battery lost each time (between 1-3%)
    PowerBankChargingTime = math.random(5, 10), -- The amount of time (in minutes) it takes to charge the phone with a powerbank
    PowerBankMinutes = math.random(1, 2),       -- The amount of battery gained each time the phone is charged with a powerbank (between 1-2%)
    PowerBankAmount = math.random(8, 13),       -- The total amount of battery gained from a powerbank (between 8-13%)
}

-- Messages Settings
Config.Messages = {
    DeleteMessages = false, -- Set to true to enable auto-deletion of old messages
    MessageLimit = 200      -- The maximum number of messages that can be stored in the phone
}

-- Waiting Times
Config.FirstTimeSQL = 500               -- The waiting time (in milliseconds) for the initial SQL connection
Config.MysqlWaitingTime = 500           -- The waiting time (in milliseconds) for MySQL queries
Config.UserDataWaitingTime = 500        -- The waiting time (in milliseconds) for user data queries
Config.RecentMessagesWait = 100         -- The waiting time (in milliseconds) for recent messages queries
Config.RecentBusinessMessagesWait = 100 -- The waiting time (in milliseconds) for recent business messages queries
Config.BusinessAppWaitingTime = 1000    -- The waiting time (in milliseconds) for the business app to load
Config.setjobwaitingtime = 5000         -- The waiting time (in milliseconds) for the set job function to complete

Config.Antispam = 6000                  -- The anti-spam interval (in milliseconds)

-- Time Settings
Config.hourplus = 0
Config.hourplusnew = 0

-- Database Settings
Config.oxmysql = false                 -- Set to true if using oxmysql
Config.JobsTable = "jobs"              -- The name of the jobs table in the database
Config.UsersTable = "users"            -- The name of the users table in the database

Config.identifierColumn = "identifier" -- The name of the identifier column in the database

-- Okok Banking Settings
Config.okokbanking = false -- Set to true to use the IBAN of the D-phone banking system (old IBANs will be deleted)

-- QBCore settings
Citizen.CreateThread(function()
    if Config.Framework == "qb" then
        Config.JobsTable = "phone_business"
        Config.UsersTable = "players"
        Config.identifierColumn = "citizenid"
    end
end)
