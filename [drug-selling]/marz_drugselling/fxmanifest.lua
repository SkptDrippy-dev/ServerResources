fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'Marz Scripts'
description 'Universal Drug Selling Script - QBCore & ESX Compatible with Money Washing & Gang System (OPTIMIZED & MODULAR)'
version '2.1.0'

shared_scripts {
    '@ox_lib/init.lua',
    'config.lua'
}

client_scripts {
    'client/config.lua',
    'client/variables.lua',
    'client/utils.lua',
    'client/zones.lua',
    'client/peds.lua',
    'client/spawning.lua',
    'client/selling.lua',
    'client/money_wash.lua',
    'client/events.lua',
    'client/threads.lua'
}

server_scripts {
    'server/config.lua',
    'server/variables.lua',
    'server/utils.lua',
    'server/gangs.lua',
    'server/drugs.lua',
    'server/dispatch.lua',
    'server/events.lua',
    'server/money_wash.lua',
    'server/commands.lua',
    'server/startup.lua'
}

dependencies {
    'ox_lib'
}

exports {
    'burner_phone'
}

escrow_ignore {
    'config.lua',
    'client/*.lua',
    'server/*.lua'
}
dependency '/assetpacks'