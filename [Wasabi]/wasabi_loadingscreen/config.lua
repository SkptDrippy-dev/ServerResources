-----------------For support, scripts, and more----------------
--------------- https://discord.gg/wasabiscripts  -------------
---------------------------------------------------------------

Config = {}

Config.CheckForUpdates = true -- Check for updates? Recommended

Config.BackgroundType =
'video'                      -- image, video or slideshow (for image, just add the background.jpg to the assets/images folder & for slideshow add multiple images to the assets/images folder like background1.jpg, background2.jpg, etc)

Config.UseLocalVideo = true -- If above you set video and you want to use a local video add it to the assets folder named 'background.webm', otherwise set the youtube URL below

Config.Platform = 'youtube'  -- youtube or streamable (only used if UseLocalVideo is set to false)

Config.VideoID = 'At8v_Yc044Y' -- Only used if UseLocalVideo is set to false (if you are using a youtube video get the video code from the URL after the v= & if you are using streamable get the video code from the URL after the /)

Config.AddBlurToBackground = false               -- Add blur to the background image/video

Config.MainColor = '#3bf5c8'                    -- Main color used for the whole UI

Config.DelayOnStaffSlides = 5                   -- Delay on staff slides in seconds

Config.TebexLink = 'https://wasabiscripts.com/' -- Link to your Tebex store

Config.RandomizeMusics = true                   -- Randomize the music playlist order

Config.DefaultVolume = 0.5                      -- Default music volume

Config.SlideshowUpdateInterval = 5              -- Slideshow update interval in seconds

Config.AddBackgroundEffect = 'Rain'             -- Add a background effect to the background (snow & rain or none)

Config.KeyboardLayout = 'QWERTY'                -- QWERTY or AZERTY

Config.Translations = {                         -- You can change the UI text to your own language
    servername = 'LondonCrimewave',
    serverdesc = 'London Crimewave|Semi-Serious|Free Gangs|Housing|Starter Packs|Custom Drugs|Active Staff|Hiring PD/EMS',
    updates = 'Updates',
    team = 'Team',
    rules = 'Rules',
    keyboard = 'Keyboard',
    tebexlink = 'wasabiscripts.com',
    loading = 'The city is now loading...',
}

Config.HiddenOptions = {
    -- possible values: "updates", "team", "rules", "keyboard"
    -- 'updates',
    -- 'team',
    -- 'rules',
    -- 'keyboard'
}

Config.Updates = {
    [1] = {
        title = "Patch Note #1",
        date = "27 Dec, 2024",
        name = "New Vehicles Added",
        description =
        "New vehicles have been added to our fleet, providing a more diverse and exciting driving experience. Among the new models are high-performance sports cars, SUVs, and normal vehicles."
    },
    [2] = {
        title = "Patch Note #2",
        date = "03 Jan, 2025",
        name = "Performance Improvements",
        description =
        "We have made significant performance improvements to enhance the overall user experience. These updates include faster load times, reduced lag, and optimized resource usage."
    },
    [3] = {
        title = "Patch Note #3",
        date = "11 Jan, 2025",
        name = "Bug Fixes and Stability",
        description =
        "We have addressed several bugs and stability issues reported by the community. These fixes include resolving crashes, improving server stability, and fixing various gameplay glitches."
    },
    [4] = {
        title = "Patch Note #4",
        date = "21 Jan, 2025",
        name = "New Missions Added",
        description =
        "We have added new missions to the game, providing more challenges and opportunities for players to explore and engage with the city."
    }
}

Config.Rules = {
    [1] = {
        title = "Respect Staff",
        description =
        "Always show respect to the server staff. They are here to help and ensure a smooth gaming experience for everyone."
    },
    [2] = {
        title = "No Harassment",
        description =
        "Harassment of any kind, including bullying, discrimination, or hate speech, will not be tolerated and will result in a ban."
    },
    [3] = {
        title = "Ask for Help",
        description =
        "If you need assistance or have any questions, do not hesitate to ask the staff. We are here to support you."
    },
    [4] = {
        title = "Follow Instructions",
        description =
        "Follow the instructions given by the staff. They are in place to ensure the server runs smoothly and fairly for all players."
    },
    [5] = {
        title = "Report Issues",
        description =
        "If you encounter any issues or witness rule-breaking, report it to the staff immediately. Your cooperation helps maintain a positive environment."
    },
    [6] = {
        title = "Stay Informed",
        description =
        "Keep yourself updated with the server rules and announcements. Ignorance of the rules is not an excuse for breaking them."
    }
}

Config.Team = {
    [1] = {
        name = "SkptDrippy",
        title = "Project Manager",
        image = "user.png"
    }
}

Config.Songs = {
     [1] = {
        name = "678",
        artist = "MAZZA L20",
        file = "678.mp3"
    }
    
}

Config.Links = {
    tiktok = {
        url = "https://wasabiscripts.com/",
        icon = "fa-brands fa-tiktok",
    },
    youtube = {
        url = "https://www.youtube.com/@wasabiscripts",
        icon = "fa-brands fa-youtube",
    },
    discord = {
        url = "https://discord.gg/wasabiscripts",
        icon = "fa-brands fa-discord",
    },
}

Config.KeyboardKeys = {
    f1 = "Open Help Menu",
    f2 = "Open Settings",
    f3 = "Toggle HUD",
    e = "Interact",
    h = "Horn",
    j = "Toggle Siren",
    k = "Toggle Door Lock",
    m = "Open Map",
    n = "Toggle Voice Chat",
    q = "Quick Inventory",
    r = "Reload Weapon",
    v = "Change View",
    y = "Open Phone",
    i = "Open Inventory",
    o = "Open Objectives",
    home = "Open Admin Menu",
}
