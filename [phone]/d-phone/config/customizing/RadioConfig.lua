RadioConfig = {}

-- This key is used to activate the radio. Caps Lock is the default.
RadioConfig.Broadcastkey = 137

-- If true, the player will perform an animation while using the radio.
RadioConfig.RadioAnimation = true

-- If set to a specific item, the player can only set a radio channel if they have that item.
RadioConfig.Item = nil


-- These settings control hotkeys for quickly changing the radio channel.
RadioConfig.Settings = {
    increaseamount = 1,      -- Amount to increase channel by.
    decreaseamount = -1,     -- Amount to decrease channel by.
    secondkey = "LEFTSHIFT", -- Modifier key for hotkeys.
    increasehotkey = "G",    -- Hotkey to increase channel.
    decreasehotkey = "H"     -- Hotkey to decrease channel.
}

-- Customize which channels are available for which jobs.
-- You can also make a channel available for multiple jobs by adding another entry with the same frequency.
RadioConfig.ChannelAccess = {
    {
        frequenz = 1,     -- Channel frequency.
        job = "police",   -- Job with access to this channel.
        joblabel = "LSPD" -- Label for job.
    },
    {
        frequenz = 1,
        job = "ambulance",
        joblabel = "Ambulance"
    },
    {
        frequenz = 2,
        job = "police",
        joblabel = "LSPD"
    },
    {
        frequenz = 3,
        job = "police",
        joblabel = "LSPD"
    },
    {
        frequenz = 4,
        job = "ambulance",
        joblabel = "Ambulance"
    },
    {
        frequenz = 5,
        job = "ambulance",
        joblabel = "Ambulance"
    },
}

-- If you have our custom SaltyChat installed, this enables constant radio.
RadioConfig.ConstantRadio = false
