<IMPORTANT>
Join my Discord and read the messages in the #verify-your-payment channel
You received your transactionid in the email of tebex.

Discord Link > https://discord.gg/tngc5yN6mf

<INSTALLATION>
https://deun-services.gitbook.io/deun/

<Support>
If there are any bugs then report these on my Discord > https://discord.gg/tngc5yN6mf

 <RIGHTS>
 You are not allowed to sell this script.
 CREATOR: deun.xyz

 <DOCS>

  <ShowPhone Event>

Client

```lua
  TriggerEvent("D-Phone:openphone")
```

Server

```lua
  TriggerClientEvent("D-Phone:openphone", source)
```

  <ClosePhone Event>

Client

```lua
  TriggerEvent("D-Phone:client:close")
```

Server

```lua
  TriggerClientEvent("D-Phone:client:close", source)
```

 <LoadUserData Event>

Client

```lua
  TriggerServerEvent("D-Phone:server:loaduserdata", GetPlayerServerId(PlayerId()))
```

Server

```lua
  TriggerEvent("D-Phone:server:loaduserdata", source)
```

 <Notification Event>

Client

```lua
  TriggerEvent("d-notification", stringtext, intlength, stringtheme)
```

Server

```lua
  TriggerClientEvent("d-notification", source, stringtext, intlength, stringtheme)
```

<ChangeNumber Event>

Client

```lua
  TriggerEvent("D-Phone:client:changenumber", stringnumber)
```

Server

```lua
  TriggerClientEvent("D-Phone:client:changenumber", source, stringnumber)
```

  <AddContact Event>

Client

```lua
  TriggerEvent("D-Phone:client:addcontact", stringname, stringnumber)
```

Server

```lua
  TriggerClientEvent("D-Phone:client:addcontact", source, stringname, stringnumber)
```

   <Dispatch Event>

Client

```lua
      local playerPed = PlayerPedId()
  local coords    = GetEntityCoords(playerPed)
  local position = {x = coords.x, y = coords.y, z = coords.z}

TriggerEvent("d-phone:client:message:senddispatch",,message, numberorjoblabel, 0, 1, position, "1")
```

Server

```lua
  TriggerClientEvent("d-phone:client:message:senddispatch", source,message, numberorjoblabel, 0, 1, position, "1")
```

  <SendMessageToEveryone>

Client

```lua
      local playerPed = PlayerPedId()
  local coords    = GetEntityCoords(playerPed)
  local position = {x = coords.x, y = coords.y, z = coords.z}
  local source = 0 -- can be either 0 or the right source
  TriggerServerEvent("messages:sendMessageToEveryone", source, message, sender_number, image, gps, data)
```

Server

```lua
  local playerPed = PlayerPedId()
  local coords    = GetEntityCoords(playerPed)
  local position = {x = coords.x, y = coords.y, z = coords.z}
  local source = 0 -- can be either 0 or the right source

  TriggerEvent("messages:sendMessageToEveryone", source, message, sender_number, image, gps, data)
```

   <AnonymDispatch Event>

Client

```lua
      local playerPed = PlayerPedId()
  local coords    = GetEntityCoords(playerPed)
  local position = {x = coords.x, y = coords.y, z = coords.z}

  TriggerServerEvent("D-Phone:server:sendanonymservicemessage", source, message, receiver, 1, position, 0)
```

Server

```lua
  local position = {x = 100, y = 100, z = 100}

  TriggerEvent("D-Phone:server:sendanonymservicemessage", source, message, receiver, 1, position, 0)
```

  <SetJobNumber Event>

Client

```lua
  local source = GetPlayerServerId(PlayerId())
  TriggerServerEvent("business:setjobnumber", source, jobname)
```

Server

```lua

  TriggerEvent("business:setjobnumber", source, jobname)
```

<ChangeBattery Event>
Client
```lua
  TriggerServerEvent("D-Phone:battery:setamount", source, amount)
```

Server
Client

```lua
TriggerEvent("D-Phone:battery:setamount", source, amount)
```
