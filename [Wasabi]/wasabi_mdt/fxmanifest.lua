-----------------For support, scripts, and more----------------
--------------- https://discord.gg/wasabiscripts  -------------
---------------------------------------------------------------

fx_version 'cerulean'
games { 'gta5' }
lua54 'yes'

author 'wasabiscripts.com'
description 'Police MDT & Dispatch'
version '1.0.0'

ui_page 'web/dist/index.html'

files {
  'web/images/**/*.*',
  'web/images/*.*',
  'web/dist/index.html',
  'web/dist/assets/*.*',
}

shared_scripts {
  '@wasabi_bridge/import.lua',
  'config/config.lua',
  'config/departments/*.lua',
  'init.lua',
  'locales/*.lua',
}

client_scripts {
  'client/utils.lua',
  'client/functions.lua',
  'client/opensource.lua',
  'client/dispatch.lua',
  'client/cameras.lua',
  'client/main.lua',
}
server_scripts {
  '@oxmysql/lib/MySQL.lua',
  'server/utils.lua',
  'server/functions.lua',
  'server/classes/*.lua',
  'server/opensource.lua',
  'server/dispatch.lua',
  'server/main.lua',
  'server/updater.lua',
}

dependencies { 'oxmysql', 'wasabi_bridge', 'object_gizmo' }

escrow_ignore {
  'locales/*.lua',
  'server/opensource.lua',
  'client/opensource.lua',
  'config/config.lua',
  'config/departments/*.lua'
}

dependency '/assetpacks'