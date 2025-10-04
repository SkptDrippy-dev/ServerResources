fx_version 'adamant'
game 'gta5'
description 'D-Phone from Deun Services'
version '0.9 Free Edition'
ui_page 'html/main.html'

lua54 'yes'

server_script {
  "@mysql-async/lib/MySQL.lua",
  'locale.lua',
  'locales/*.lua',

  "config/Config.lua",
  "config/ESXConfig.lua",
  "config/DiscordWebhooks.lua",
  "config/apps/*.lua",
  "config/customizing/*.lua",

  -- Shared
  "shared/*.lua",
  "shared/apps/*.lua",

  "lua/framework/esx/sesx.lua",
  "lua/framework/qb/sqb.lua",
  "lua/server/*.lua",
  "lua/server/classes/*.lua",

  -- Apps
  "lua/apps/advertisement/sadvertisement.lua",
  "lua/apps/battery/sbattery.lua",
  "lua/apps/business/sbusiness.lua",
  "lua/apps/call/scall.lua",
  "lua/apps/call/sccall.lua",
  "lua/apps/contact/scontact.lua",
  "lua/apps/gallery/sgallery.lua",
  "lua/apps/message/smessage.lua",
  "lua/apps/photo/sphoto.lua",
  "lua/apps/service/sservice.lua",
  "lua/apps/settings/ssettings.lua",
  "lua/apps/twitter/stwitter.lua",
  "lua/apps/twitter/sctwitter.lua",
  "lua/apps/music/smusic.lua",


  -- Compontents
  "lua/components/ddrop/sddrop.lua",
}

client_script {
  'locale.lua',
  'locales/*.lua',

  "config/Config.lua",
  "config/ESXConfig.lua",
  "config/apps/*.lua",
  "config/customizing/*.lua",

  -- Shared
  "shared/functions.lua",
  "shared/apps/*.lua",

  "lua/framework/esx/cesx.lua",
  "lua/framework/qb/cqb.lua",
  "lua/client/*.lua",
  "lua/client/classes/*.lua",

  -- Apps
  "lua/apps/advertisement/cadvertisement.lua",
  "lua/apps/battery/cbattery.lua",
  "lua/apps/business/cbusiness.lua",
  "lua/apps/call/ccall.lua",
  "lua/apps/contact/ccontact.lua",
  "lua/apps/gallery/cgallery.lua",
  "lua/apps/message/cmessage.lua",
  "lua/apps/photo/cphoto.lua",
  "lua/apps/service/cservice.lua",
  "lua/apps/settings/csettings.lua",
  "lua/apps/twitter/ctwitter.lua",
  "lua/apps/music/cmusic.lua",


  -- Compontents
  "lua/components/ddrop/cddrop.lua",
  "lua/components/homescreen/chomescreen.lua",
  "lua/components/slideuppage/cslideuppage.lua",
  "lua/components/uinotify/cuinotify.lua",
}


files {
  'html/main.html',
  'html/js/*.js',
  'html/js/apps/*.js',
  'html/js/apps/music/*.js',
  'html/js/components/*.js',
  'html/js/locales/*.js',
  'html/js/test/*.js',
  'html/html/*.html',
  'html/html/apps/*.html',
  'html/css/*.css',
  'html/css/apps/*.css',
  'html/css/components/*.css',
  'html/css/themes/*.css',
  'html/img/*.png',
  'html/images/icons/*.png',
  'html/images/icons/home/*.png',
  'html/sound/*.ogg',
  'html/fonts/*.woff',
  'html/fonts/*.ttf',
  'html/fonts/Roboto/*.ttf',
  'html/fonts/Snake/*.ttf',
  'html/css/icons/*.css',
}

escrow_ignore {
  "config/*.lua",
  "config/apps/*.lua",
  "config/customizing/*.lua",
  "lua/server/suser.lua",
  "lua/server/serverconfig.lua",
  "lua/server/apps/sphoto.lua",
  "lua/client/cuser.lua",
  "lua/client/animation.lua",
  "lua/client/photo.lua",
  "lua/apps/ccustomapp.lua",
  'locales/*.lua',
  "lua/server/discordWebhooks.lua",
}



export {
  "openPhone"
}

dependency '/assetpacks'