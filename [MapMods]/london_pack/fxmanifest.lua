fx_version 'cerulean'
game 'gta5'

author 'BABANI STORE'
version '2.0.0'

lua54 'yes'
this_is_a_map 'yes'


escrow_ignore {
    'scripts/config.lua'
}


dependency '/assetpacks'


data_file 'INTERIOR_PROXY_ORDER_FILE' 'interiorproxies.meta'
replace_level_meta 'gta5'

files {
    'gta5.meta'
}


shared_script 'scripts/config.lua' 


ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js'
}


client_scripts {
    'scripts/Client/elevator_system.lua',
    'scripts/Client/npc_spawner.lua',
    'scripts/Client/client.lua',    
    'scripts/Client/start.lua',
    'scripts/Client/start1.lua'
}


server_scripts {
    'scripts/Server/server.lua',
    'scripts/Server/elevator_server.lua'
}

dependency '/assetpacks'