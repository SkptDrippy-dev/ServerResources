Config = {}

-- Framework Detection (auto-detects QBCore or ESX)
Config.Framework = 'esx' -- 'auto', 'qbcore', 'esx'

-- Notification System
-- 'auto' - Automatically detects and uses: ox_lib > okok > framework > native
-- 'ox_lib' - Forces ox_lib notifications 
-- 'okok' - Forces okokNotify notifications
-- 'esx' - Forces ESX notifications
-- 'qbcore' - Forces QBCore notifications  
-- 'native' - Forces native GTA notifications
Config.NotificationSystem = 'okok'

-- Dispatch System for Police Alerts
-- 'auto' - Automatically detects: cd-dispatch > ps-dispatch > framework notifications
-- 'cd-dispatch' - Forces cd-dispatch 
-- 'ps-dispatch' - Forces ps-dispatch
-- 'framework' - Uses framework notifications only
-- 'none' - Disables police alerts
Config.DispatchSystem = 'cd-dispatch'

-- Dispatch Configuration
Config.Dispatch = {
    Code = '10-14',
    Title = 'Drug Dealing',
    Message = 'A person is dealing drugs!'
}

-- ==========================================
-- COMMAND SYSTEM CONFIGURATION
-- ==========================================
Config.Commands = {
    enabled = true, -- Set to false to disable command-based selling (phone only)
    sellCommand = 'dealer' -- Command to start selling drugs (only works if enabled = true)
}

-- Legacy support (will be removed in future versions)
Config.SellCommand = Config.Commands.sellCommand -- Keep for backward compatibility

-- ==========================================
-- SELLING ZONES CONFIGURATION - ENFORCED
-- ==========================================
-- IMPORTANT: If you want to ENFORCE zone selling only, make sure this table is NOT empty
-- If this table is empty {}, players can sell anywhere
-- If this table has zones, players can ONLY sell in these zones
Config.SellingZones = {
    {coords = vector3(-1146.80, -1559.46, 4.67), radius = 100.0, name = "Beach Area"},
    {coords = vector3(351.67, -2054.93, 21.71), radius = 50.0, name = "Davis"},
    {coords = vector3(-32.49, -1517.85, 35.10), radius = 50.0, name = "Chamberlain Hills"},
    {coords = vector3(-254.20, -1638.75, 31.85), radius = 50.0, name = "Strawberry"},
    {coords = vector3(71.10, -1911.08, 21.62), radius = 50.0, name = "Rancho"},
    {coords = vector3(1247.49, -1675.48, 43.43), radius = 50.0, name = "El Burro Heights"}
}

Config.ZoneSettings = {
    enforceZones = true, -- Set to false to allow selling anywhere, true to enforce zones
    showZoneBlips = true, -- Show blips for selling zones on the map
    blipSprite = 378, -- Blip sprite for selling zones
    blipColor = 1, -- Blip color for selling zones
    blipScale = 0.8, -- Blip scale for selling zones
}

-- Requirements
Config.RequireBurnerPhone = true -- Set to false to disable burner phone requirement
Config.BurnerPhoneItem = 'burner_phone' -- Item name for burner phone
Config.MinPolice = 0 -- Minimum police required to sell drugs

-- Rewards
Config.RewardType = 'black_money' -- 'cash' or 'black_money'

-- ==========================================
-- POLICE BONUS SYSTEM 
-- ==========================================
Config.PoliceBonus = {
    enabled = true, -- Enable/disable police bonus system
    
    -- Bonus tiers based on police count
    -- The script will use the highest tier the player qualifies for
    tiers = {
        {
            minPolice = 5, -- Minimum police required for this tier
            bonusPercent = 5, -- Bonus percentage (50% = +50% money) 
            description = "High heat bonus"
        }
    },
    
    -- Notifications
    showBonusNotification = false, -- Show notification about police bonus
    bonusNotificationMessage = "Police activity bonus: +%s%% (%s)" -- %s will be replaced with bonus percent and description
}

-- Police Alert
Config.PoliceAlertChance = 0 -- Percentage chance to alert police after successful sale

-- Selling Configuration
Config.Selling = {
    SearchTime = {min = 3000, max = 8000}, -- Time to search for client (ms)
    ClientWalkDistance = 15.0, -- Distance client walks to player
    SellDistance = 2.5, -- Distance to interact with client
    ClientTimeout = 60000, -- Time before client leaves (ms)
    RejectChance = 50, -- Percentage chance client rejects the deal
    
    -- ENHANCED: Client Spawn Configuration
    SpawnDistance = {
        min = 20.0, -- Minimum distance to spawn client from player
        max = 50.0, -- Maximum distance to spawn client from player
        method = 'forward_direction' -- 'random_radius', 'forward_direction', 'random_direction'
    },
    
    -- Advanced spawn options
    SpawnOptions = {
        preferSafeSpawns = true, -- Try to spawn on valid ground/safe areas
        maxSpawnAttempts = 10, -- How many times to try finding a good spawn spot
        avoidWater = true, -- Avoid spawning peds in water
        avoidRoads = false, -- Set to true to avoid spawning on roads
        groundCheckHeight = 10.0 -- How high above to check for ground
    }
}

-- ==========================================
-- MONEY WASHING CONFIGURATION
-- ==========================================
Config.MoneyWash = {
    Enabled = false, -- Enable/disable money washing feature
    
    -- Interaction Type Configuration
    UsePed = true, -- true: Use a ped at the location, false: Use third eye on invisible zone
    
    Blip = {
        Enabled = false,                         -- Blip visibility (true: enabled, false: disabled)
        Sprite = 500,                           -- Blip sprite (https://docs.fivem.net/docs/game-references/blips/)
        Scale = 0.8,                            -- Blip scale (0.0 - 1.0)
        Color = 1,                              -- Blip color
        Label = 'Money Wash',                   -- Blip label
    },
    
    Location = vector3(-1146.65, 4940.24, 221.27), -- Money wash location
    PedModel = 'a_m_m_og_boss_01',              -- Ped model (only used if UsePed = true)
    PedHeading = 184.0,                         -- Ped heading (only used if UsePed = true)
    
    Currency = 'black_money',                   -- Currency item (supports items)
    TaxRate = 15,                               -- Tax rate percentage (0 - 100) - Change this to adjust the fee
    WashTime = 30,                              -- Wash time (seconds)
    MinWash = 100,                              -- Minimum amount of money that can be washed
    MaxWash = 100000,                           -- Maximum amount of money that can be washed
    Cooldown = 10,                              -- Player cooldown time (minutes, false: disabled)
    
    -- Police Alert for Money Washing
    PoliceAlertChance = 20,                     -- Percentage chance to alert police during money wash
    PoliceDispatch = {
        Code = '10-31',
        Title = 'Money Laundering',
        Message = 'Suspicious financial activity detected!'
    }
}

-- ==========================================
-- GANG PRICING SYSTEM
-- ==========================================
Config.GangSystem = {
    enabled = false, -- Enable/disable gang-based pricing
    
    -- Pricing modifiers
    nonGangPriceReduction = 25, -- Percentage reduction for non-gang members (25% less)
    
    -- Detection methods
    detection = {
        qbcore = {
            useGangData = true,     -- Use Player.PlayerData.gang
            useJobAsGang = false,   -- Use job as gang fallback
        },
        esx = {
            useJobAsGang = true,    -- Use job.name as gang
            useMetadata = false,    -- Use metadata for gang detection
            gangJobs = {            -- ESX jobs that count as gangs
                'ballas',
                'families', 
                'vagos',
                'marabunta',
                'bloods',
                'crips',
                'cartel',
                'triads'
            }
        }
    },
    
    -- Notifications
    notifications = {
        noGangPenalty = 'No gang affiliation: -%s%% penalty',
        gangMember = 'Gang member - full price active'
    }
}

-- Drug Configuration
Config.Drugs = {
    ['meth_bag'] = {
        label = 'Meth',
        price = {min = 6000, max = 12000},
        amount = {min = 5, max = 10}
    },
    ['coke_bag'] = {
        label = 'Coke',
        price = {min = 6000, max = 12000},
        amount = {min = 5, max = 10}
    },
    ['weed_bag'] = {
        label = 'Weed',
        price = {min = 6000, max = 12000},
        amount = {min = 5, max = 10}
    }
}

-- ==========================================
-- SPECIALIZED DRUG SELLING
-- ==========================================
Config.SpecializedSelling = {
    enabled = false, -- Set to false to disable this feature
    
    -- Drugs that can only be sold to fat peds
    fatPedDrugs = {
        ['ozempic'] = {
            label = 'Ozempic',
            price = {min = 850, max = 850},
            amount = {min = 1, max = 4}
        }
    },
    
    -- Drugs that can only be sold to female peds
    femalePedDrugs = {
        ['bbl_shot'] = {
            label = 'BBL Shot',
            price = {min = 750, max = 750},
            amount = {min = 1, max = 5}
        }
    },
    
    -- Drugs that can only be sold to muscle/fit peds
    musclePedDrugs = {
        ['gear'] = {
            label = 'Gear',
            price = {min = 650, max = 650},
            amount = {min = 1, max = 5}
        }
    },
    
    -- Fat ped models (overweight characters)
    fatPedModels = {
        'a_m_m_fatlatin_01',
        'a_m_m_genfat_01',
        'a_m_m_genfat_02',
        'a_m_m_afriamer_01',
        'a_m_y_downtown_01',
        'a_f_m_fatcult_01',
        'a_f_m_fatwhite_01',
        'a_f_m_tramp_01',
        'a_f_m_downtown_01',
        'a_f_m_soucent_02'
    },
    
    -- Female ped models
    femalePedModels = {
        'a_f_y_soucent_01',
        'a_f_y_clubcust_02',
        'a_f_m_soucentmc_01',
        'a_f_m_ktown_02',
        'a_f_m_soucent_01',
        'a_f_y_beach_01',
        'a_f_y_indian_01',
        'a_f_y_soucent_02',
        'a_f_y_topless_01'
    },
    
    -- Muscle/fit ped models (athletic/muscular characters)
    musclePedModels = {
        'a_m_y_musclbeac_01',
        'a_m_y_musclbeac_02',
        'a_m_y_beach_01',
        'a_m_y_beach_02',
        'a_m_y_beach_03',
        'a_m_y_fitness_01',
        'a_m_y_fitness_02',
        'a_f_m_bodybuild_01'
    },
    
    -- Error messages for specialized selling
    notifications = {
        wrongPedType = 'This client is not interested in this type of product',
        noSpecializedDrugs = 'You don\'t have any suitable products for this client'
    }
}

-- Client Ped Models
Config.ClientPeds = {
    'player_two',
    'ig_wade',
    'ig_lamardavis',
    'a_m_m_skater_01',
    'a_m_y_hipster_01',
    'ig_lestercrest_2',
    'a_m_y_hipster_02',
    'a_m_y_hipster_03',
    'a_f_y_hipster_01',
    'a_f_y_hipster_02',
    'a_f_y_hipster_03',
    'a_m_y_downtown_01',
    'a_f_y_business_01',
    'a_m_y_business_01',
    'a_m_m_business_01',
    'a_f_m_business_02',
    'a_m_y_eastsa_01',
    'a_f_y_eastsa_01',
    'a_m_y_eastsa_02',
    'a_f_y_eastsa_02'
}

-- Notifications
Config.Notifications = {
    noBurnerPhone = 'You need a burner phone to sell drugs',
    noDrugs = 'You don\'t have any drugs to sell',
    notEnoughPolice = 'Not enough police online',
    searching = 'Searching for a client...',
    clientFound = 'Client found! Approach them',
    clientReject = 'Client rejected your offer and called the police!',
    saleSuccess = 'Sold %sx %s for $%s',
    alreadySelling = 'You are already in a deal',
    clientLeft = 'Client got impatient and left',
    notInSellingZone = 'You cant sell drugs in this area',
    commandDisabled = 'Command selling is disabled. Use your burner phone instead.',
    
    -- Money Wash Notifications
    notEnoughMoney = 'You need at least $%s to wash money',
    onCooldown = 'You must wait before washing money again',
    washSuccess = 'Successfully washed $%s (Fee: %s%%)',
    washCancelled = 'Money washing cancelled',
    enteringMoneyWash = 'Entering money wash...',
    countingMoney = 'Counting money...',
    washMoney = 'Wash Money'
}

-- Police Job Names (for both QBCore and ESX)
Config.PoliceJobs = {
    'police',
    'sheriff',
    'statetroopers'
}