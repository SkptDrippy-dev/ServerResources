NotificationConfig = {}

-- Set to true if you want to use custom notification settings
NotificationConfig.Custom = false

-- Set the position of notifications on the screen
-- Available Options: Left, Center, Right
NotificationConfig.Position = "center"

-- If this is enabled, in-game phone notifications will be shown on the phone itself
NotificationConfig.UINotify = true

-- Notification Settings
NotificationConfig.Settings = {
    ["info"] = {
        icon = "fa-solid fa-circle-info",
        label = _U("Information"),
        class = "information",
        enabled = true,
        inphonenotification = false,
    },
    ["error"] = {
        icon = "fa-solid fa-circle-xmark",
        label = _U("Error"),
        class = "error",
        enabled = true,
        inphonenotification = false,
    },
    ["warning"] = {
        icon = "fa-solid fa-triangle-exclamation",
        label = _U("Warning"),
        class = "warning",
        enabled = true,
        inphonenotification = false,
    },
    ["success"] = {
        icon = "fa-solid fa-circle-check",
        label = _U("Success"),
        class = "success",
        enabled = true,
        inphonenotification = false,
    },
    ["frqradio"] = {
        icon = "fa-solid fa-microphone-lines",
        label = _U("Radio"),
        class = "frqradio",
        enabled = true,
        inphonenotification = false,
    },
    ["messages"] = {
        icon = "fa-solid fa-message",
        label = _U("Messages"),
        class = "frqradio",
        enabled = true,
        inphonenotification = true,
    },
    ["business"] = {
        icon = "fa-solid fa-briefcase",
        label = _U("Business"),
        class = "frqradio",
        enabled = true,
        inphonenotification = true,
    },
    ["photo"] = {
        icon = "fa-solid fa-camera",
        label = _U("Camera"),
        class = "information",
        enabled = true,
        inphonenotification = false,
    },
    ["battery"] = {
        icon = "fa-solid fa-battery-full",
        label = _U("Battery"),
        class = "success",
        enabled = true,
        inphonenotification = false,
    },
    ["broker"] = {
        icon = "fa-solid fa-arrow-trend-up",
        label = _U("Broker"),
        class = "broker",
        enabled = true,
        inphonenotification = false,
    },
    ["groupchat"] = {
        icon = "fa solid fa-user-group",
        label = _U("Groupchat"),
        class = "groupchat",
        enabled = true,
        inphonenotification = true,
    },
    ["ddrop"] = {
        icon = "fa-solid fa-clone",
        label = _U("ddrop"),
        class = "ddropcolor",
        enabled = true,
        inphonenotification = true,
    },
    ["twitter"] = {
        icon = "fa-brands fa-twitter",
        label = _U("twitter"),
        class = "twitter",
        enabled = true,
        inphonenotification = true,
    },
    ["services"] = {
        icon = "fas fa-circle-info",
        label = _U("services"),
        class = "services",
        enabled = true,
        inphonenotification = true,
    },
}
