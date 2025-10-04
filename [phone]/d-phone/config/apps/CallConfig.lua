CallConfig = {}

-- By default, the phone will be displayed while you're on a call.
CallConfig.EnableCallDisplay = true

-- Set this to true if you always want the phone to be displayed, even when not on a call.
CallConfig.EnableAlwaysDisplay = false

-- The Hotkeys table holds key bindings for accepting and ending calls.
-- See https://docs.fivem.net/docs/game-references/controls/ for a list of key codes.
CallConfig.Hotkeys = {
    AcceptCall = 20,
    EndCall = 73,
    -- Set this to nil if you don't want to use a second key.
    SecondKey = 21
}

-- The Prefix setting determines whether phone numbers will have a prefix.
CallConfig.Prefix = true

-- Set this to a space character if you want a space between the prefix and number in phone numbers.
CallConfig.numBaseSpace = ""

-- The LowerPrefix and HigherPrefix settings determine the range of the prefix in phone numbers.
CallConfig.LowerPrefix = 100
CallConfig.HigherPrefix = 999

-- The LowerNumber and HigherNumber settings determine the range of the number in phone numbers.
CallConfig.LowerNumber = 1000
CallConfig.HigherNumber = 9999
