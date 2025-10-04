Citizen.CreateThread(function()
    Wait(2000)
    Twitter.sendToDiscord = function(source, sender_name, sender_id, message, attachments)
        dprint("Twitter.sendToDiscord")
        local source = source
        local DiscordWebHook = Discord.Twitter.Webhook

        local name = sender_name
        local message = message
        local embeds = {
            {
                ["title"] = "New Tweet",
                ["type"] = "rich",
                ["color"] = Discord.Twitter.Color,
                ["fields"] = {
                    {
                        name = _U("Name"),
                        value = sender_name
                    },
                    {
                        name = _U("Tag"),
                        value = sender_id
                    },
                    {
                        name = _U("Message"),
                        value = message
                    }
                },
                ["footer"] = {
                    ["text"] = "Twitter",
                },
                ["image"] = {} -- Add an empty image field to store attachments
            }
        }

        -- Iterate over the attachments and add image fields to the embeds table
        for i, attachment in pairs(attachments) do
            local data = {
                ["color"] = Discord.Twitter.Color,

                ["image"] = {
                    ["url"] = attachment
                },
                ["footer"] = {
                    ["text"] = "Twitter",
                },
            }
            table.insert(embeds, data)
        end


        if message == nil or message == '' then return FALSE end

        PerformHttpRequest(DiscordWebHook, function(err, text, headers)
            end, 'POST',
            json.encode({ username = Discord.Twitter.Name, avatar_url = Discord.Twitter.AvatarURL, embeds = embeds }),
            { ['Content-Type'] = 'application/json' })
    end

    Advertisement.sendToDiscord = function(source, sender_name, sender_number, message)
        local source = source
        local DiscordWebHook = Discord.Advertisement.Webhook

        local name = sender_name
        local message = message
        local embeds = {
            {
                ["title"] = "New Ad",
                ["type"] = "rich",
                ["color"] = Discord.Advertisement.Color,
                ["fields"] = {
                    {
                        name = _U("Sender"),
                        value = name
                    },
                    {
                        name = _U("Message"),
                        value = message
                    }, {
                    name = _U("Number"),
                    value = sender_number
                },
                },
                ["footer"] = {
                    ["text"] = "Advertisement",
                },
            }
        }

        if message == nil or message == '' then return FALSE end

        PerformHttpRequest(DiscordWebHook, function(err, text, headers)

            end, 'POST',
            json.encode({
                username = Discord.Advertisement.Name,
                avatar_url = Discord.Advertisement.AvatarURL,
                embeds = embeds
            }),
            { ['Content-Type'] = 'application/json' })
    end
end)
