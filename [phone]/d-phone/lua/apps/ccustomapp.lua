CustomApps = {
    firsttime = false,
}

RegisterNetEvent("phone:api:open")
AddEventHandler("phone:api:open", function()
    dprint("open phone")
    CustomApps.load()
end)


CustomApps.load = function()
    dprint("CustomApps | 1")
    if CustomApps.firsttime == true then
        return
    end
    dprint("CustomApps | 2")
    CustomApps.firsttime = true
    local html = ''
    for name, v in pairs(Config.CustomApps) do
        html = html ..
            string.format(
                '<div class="phone-application" data-toggle="tooltip" data-placement="bottom" data-appslot="9" title="%s" data-app="%s"><img src="%s"alt="" srcset=""><p> %s </p></div>'
                , v.label, name, v.icon, v.label)
    end
    dprint("CustomApps | 3")

    SendNUIMessage({
        app = "customapps",
        task = "load",
        html = html,
    })
end

RegisterNUICallback("customapp:open", function(data, cb)
    local name = data.name
    dprint("CustomApps | 4")
    CustomApps.trigger(name)
end)

CustomApps.trigger = function(app)
    local table = Config.CustomApps[app]
    dprint("CustomApps | 5")
    if table then
        dprint("CustomApps | 6")
        if table.clientevent ~= nil then
            dprint("CustomApps | client")
            TriggerEvent(table.clientevent)
        end

        if table.serverevent ~= nil then
            dprint("CustomApps | server")
            TriggerServerEvent(table.serverevent, Source)
        end
        TriggerEvent("D-Phone:client:close")
    end
end
