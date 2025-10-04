IconConfig = {}

IconConfig.usedIcons = 'image' -- Pick 'image' or 'icon' to change how pictures look.
-- If you pick 'image' but want an icon, just remove the image line at the specific app.
IconConfig.icons = {
    {
        app = "call",

        image = "/html/images/icons/home/call.png",
        icon =
        [[<i class="ApplicationIcon fas fa-phone" style="background: linear-gradient(to bottom, #5dcc62 0%, #30b937 100%); "></i>]]
    },
    {
        app = "contacts",
        image = "/html/images/icons/home/contacts.png",
        icon = [[<i class="ApplicationIcon fa-solid fa-address-book"
        style="background: linear-gradient(to bottom, #fa5306 0%, #e46e37 100%);"></i>]]
    },
    {
        app = "messages",
        image = "/html/images/icons/home/messages.png",
        icon = [[ <i class="ApplicationIcon fas fa-comment-alt"
        style="background: linear-gradient(to bottom, #3696d6 0%, #2991d6 100%)"></i>]]
    },
    {
        app = "settings",
        image = "/html/images/icons/home/settings.png",
        icon = [[<i class="ApplicationIcon fas fa-cogs"
        style="background: linear-gradient(to bottom, #2c2c2c 0%, #2b2b2b 100%);"></i>]]
    },
    {
        app = "services",
        icon =
        [[<i class="ApplicationIcon fas fa-circle-info" style="background: linear-gradient(to bottom, #2664eb 0%, #2d12c7 100%);"></i>]],
    },
    {
        app = "business",
        icon =
        [[<i class="ApplicationIcon fas fa-briefcase" style="background: linear-gradient(to bottom, #8c47fc 0%, #6612c7 100%);"></i>]],
    },
    {
        app = "gallery",
        image = "/html/images/icons/home/gallery.png",
        icon = [[<i class="ApplicationIcon fa-solid fa-images galleryicon"
        style="background: linear-gradient(to bottom, #f5f5f5 0%, #f5f5f5 100%);"></i>]]
    },
    {
        app = "camera",
        image = "/html/images/icons/home/camera.png",
        icon = [[<i class="ApplicationIcon fas fa-camera"
        style="background: linear-gradient(to bottom, #d6d6d6 0%, #b4b4b4 100%); color: rgb(24, 24, 24);"></i>]]
    },
    {
        app = "radio",
        icon =
        [[<i class="ApplicationIcon fas fa-microphone-alt" style="background: linear-gradient(to bottom, #1cddff 0%, #11a5a5 100%); font-size: 2.6rem;"></i>]],
    },
    {
        app = "twitter",
        image = "/html/images/icons/home/twitter.png",
        icon = [[<i class="ApplicationIcon fab fa-twitter"
        style="background: linear-gradient(to bottom, #319ffa 0%, #006eff 100%);"></i>]]
    },
    {
        app = "advertisement",
        image = "/html/images/icons/home/lifeinvader.png",
        icon = [[<i class="ApplicationIcon fas fa-ad"
        style="background: linear-gradient(to bottom, #e64d4d 0%, #db2020 100%);"></i>]]
    },
    {
        app = "calculator",
        image = "/html/images/icons/home/calculator.png",
        icon = [[<i class="ApplicationIcon fas fa-calculator"
        style="background: linear-gradient(to bottom, rgba(25,25,25,0.95) 0%, rgba(25,25,25,0.95) 100%);"></i>]]
    },
}
