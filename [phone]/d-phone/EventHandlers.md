# EventHandlers

# Server Side

## Contact

### Add Contact

```lua
RegisterServerEvent('D-Phone:server:addcontact')
AddEventHandler('D-Phone:server:addcontact', function(source, clientsource, name, number)

end)
```

### Edit Contact

```lua
RegisterServerEvent('D-Phone:server:editcontact')
AddEventHandler('D-Phone:server:editcontact', function(source, clientsource, newname, newnumber, oldname, oldnumber)
end)
```

## Messages

### Send message

```lua
RegisterServerEvent('messages:chat:sendmessage')
AddEventHandler('messages:chat:sendmessage', function(source, message, sender, receiver, image, gps)

end)
```

## Business

### Teamchat message

```lua
RegisterServerEvent('business:teamchat:sendmessage')
AddEventHandler('business:teamchat:sendmessage', function(source, message, receiver, image, gps)

end)
```

### Dispatch message

```lua
RegisterServerEvent('business:dispatch:sendmessage')
AddEventHandler('business:dispatch:sendmessage', function(source, message, sender, receiver, image, gps, rpname)

end)
```

## Groupchat

### message

```lua
RegisterServerEvent('groupchat:chat:sendmessage')
AddEventHandler('groupchat:chat:sendmessage', function(source, group, message, image, gps)

end)
```

### settings:change

```lua
RegisterServerEvent('groupchat:settings:change')
AddEventHandler('groupchat:settings:change', function(source, group, type, name)

end)
```

### addmember

```lua
RegisterServerEvent('groupchat:settings:addmember')
AddEventHandler('groupchat:settings:addmember', function(source, group, member)

end)
```

### remove member

```lua
RegisterServerEvent('groupchat:settings:removeplayer')
AddEventHandler('groupchat:settings:removeplayer', function(source, number, group)

end)

```

## Call

### Start call

```lua
RegisterServerEvent('D-Phone:call:start')
AddEventHandler('D-Phone:call:start', function(source, number, anonym)

end)
```

# Client side
