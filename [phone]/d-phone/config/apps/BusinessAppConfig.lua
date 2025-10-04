BusinessAppConfig = {}
-- If you enable this, players with the permission ( see below ) can e.g. recruit user, change their rank and more
BusinessAppConfig.PlayerManagement = true

-- These numbers can be added to the contact of an player via the contact menu, if the number isnt added the will come the
-- Notification "this number does not exist"
BusinessAppConfig.Whitelistnumbers = {
    "911",
    "912"
}

BusinessAppConfig.Dispatch = {
    DeleteAfterRestart = false
}

BusinessAppConfig.AppIcons = {
    ["police"] = {
        icon = {
            fontawesome = 'fa-solid fa-building-shield',
            backgroundColor = "#4376c1",
            color = "white"
        },
    },
    ["ambulance"] = {
        icon = {
            fontawesome = 'fa-solid fa-building-shield',
            backgroundColor = "#ec7171",
            color = "white"
        },
    },
    -- Dont delete this
    ["standard"] = {
        icon = {
            fontawesome = 'fas fa-briefcase',
            backgroundColor = "linear-gradient(to bottom, #8c47fc 0%, #6612c7 100%)",
            color = "white"
        },
    },
}

-- Here you can configure which job and which rank has access to which featuers
-- Down delete "standard"
BusinessAppConfig.Permissions = {
    ["police"] = {
        ["boss"] = {
            ["recruit"] = true,
            ["changerank"] = true,
            ["fire"] = true,
            ["moneymanagement"] = true,
            ["depositmoney"] = true,
            ["withdrawmoney"] = true,
            ["setmotd"] = true,
            ["setjobnumber"] = true,
        },
        ["officer"] = {
            ["recruit"] = false,
            ["changerank"] = false,
            ["fire"] = false,
            ["moneymanagement"] = false,
            ["depositmoney"] = false,
            ["withdrawmoney"] = false,
            ["setmotd"] = false,
            ["setjobnumber"] = true,
        },
    },
    ["ambulance"] = {
        ["boss"] = {
            ["recruit"] = true,
            ["changerank"] = true,
            ["fire"] = true,
            ["moneymanagement"] = true,
            ["depositmoney"] = true,
            ["withdrawmoney"] = true,
            ["setmotd"] = true,
            ["setjobnumber"] = true,
        },
    },
    -- Dont delete his
    -- If you add an job you can take this as an template but this sets the permission for every job which has no custom config.
    ["standard"] = {
        ["standard"] = {
            ["recruit"] = false,
            ["changerank"] = false,
            ["fire"] = false,
            ["moneymanagement"] = false,
            ["depositmoney"] = false,
            ["withdrawmoney"] = false,
            ["setmotd"] = false,
            ["setjobnumber"] = true,
        },
    },
}
