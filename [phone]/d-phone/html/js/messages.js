var messages = {
  firsttime: false,
  openchat: null,
  loaded: false,
  overview: {
    firsttime: false,
  },
  chat: {
    number: null,
    firsttime: false,
    addedimage: null,
    addedimages: [],
  },
  tabopen: '#messages-overview',
  plusmenu: {
    openapp: 'messages',
  },
};

inputarea = {
  open: null,
};

setTimeout(() => {
  $('.input-url-area').each(function (index, element) {
    // element == this
    $(this).hide(0);
  });

  $('.input-selection-area').each(function (index, element) {
    // element == this
    $(this).hide(0);
  });
  $('#messages-action-menu').hide();
  $('.icon-input-menu').hide();
}, 1000);

$(document).keyup(function (data) {
  if (data.which == 13) {
    if (messages.tabopen == '#messages-chat' && Main.openapp == 'messages') {
      messages.SendMessage();
    }
  }
});

$(function () {
  $('#messages-alerts').hide(0);
  window.addEventListener('message', function (event) {
    var v = event.data;

    if (v.app == 'messages' && v.task == 'overview:load') {
      messages.overview.Load(v.html);

      let unreadhtml = v.unread;

      if (v.unread > 99) {
        unreadhtml = '99+';
      }

      if (v.unread > 0) {
        $('#messages-alerts').show(0);
      } else {
        $('#messages-alerts').hide(0);
      }

      $('#messages-alerts').html(unreadhtml);
    }

    if (v.app == 'messages' && v.task == 'chat:load') {
      messages.chat.Load(v.number, v.contactName, v.html);
    } else if (v.app == 'messages' && v.task == 'chat:addmessage') {
      messages.chat.AddMessage(v.html, v.me);
    } else if (v.app == 'messages' && v.task == 'chat:kickfromchat') {
      messages.chat.KickFromChat();
    } else if (v.app == 'messages' && v.task == 'chat:takephoto') {
      // Inputarea.message.show(appOpenspeed);
      console.log("chat:takephoto")
      var imageurl = v.url;
      if (inputarea.open == null) {
        if (Main.openapp == 'music') {
          music.changePlaylistPicture(imageurl);
        } else {
          messages.AddImageNew(imageurl);

        }
      } else if (inputarea.open == 'mail-new') {
        var html =
          '<div class="phone-app-pictureelement-select"><div class="imagecontainer" data-img="' +
          imageurl +
          '"> <img src="' +
          imageurl +
          '" alt="" class="image"></div><div class="select"><i class="fa-solid fa-xmark mail-new-attachments-delete"></i></div></div>';

        $('#mail-new-attachments').append(html);

        var arr = mail.new.attachments;
        arr.push(imageurl);
      } else if (inputarea.open == 'twitter-new') {
        SetTheme('twitter');
        twitter.new.addattachment(imageurl);
      } else if (inputarea.open == 'twitter:settings') {
        SetTheme('twitter');
        twitter.settings.setImage(imageurl);
      } else if (inputarea.open == 'twitter:register') {
        SetTheme('twitter');
        twitter.setRegisterImage(imageurl);
      } else if (inputarea.open == 'insta:settings') {
        SetTheme('insta');
        insta.settings.setImage(imageurl);
      } else if (inputarea.open == 'insta:register') {
        SetTheme('insta');
        insta.setRegisterImage(imageurl);
      } else if (inputarea.open == 'insta:new') {
        $("#insta-new-picture-icon").hide()
        $("#insta-new-picture-img").show()
        $("#insta-new-picture-img").attr("src", imageurl)

        insta.new.attachments = []
        insta.new.addattachment(imageurl)
      } else if (inputarea.open == 'advertisement') {
        advertisement.new.addattachment(imageurl);
      } else {

      }
    }

    // Search bar
    if (messages.loaded == true) {
      var messaveoverviewsearchBar = document.forms[
        'messages-searchbar'
      ].querySelector('input');
      messaveoverviewsearchBar.addEventListener('keyup', function (e) {
        const term = e.target.value.toLocaleLowerCase();
        var notAvailable = document.getElementById('notAvailable');
        //   $("#titleMain").toggle($('input').val().length == 0);
        var hasResults = false;

        $('.messages-overview-element').each(function () {
          if (
            $(this)
              .data('number')
              .toString()
              .toLowerCase()
              .includes(term.toString()) ||
            $(this)
              .data('label')
              .toString()
              .toLowerCase()
              .includes(term.toString())
          ) {
            $(this).show(0);
          } else {
            $(this).hide(0);
          }
        });
      });
    }
  });
});

// General
messages.show = function () {
  if (Main.openapp != "messages") CloseAll();
  ShowHomebar();
  $('#messages').css({
    'z-index': '2',
  });

  if (Main.openapp != "messages") {
    $('#messages').animate(
      {
        left: '0%',
      },
      appOpenspeed
    );
  }
  Main.openapp = 'messages';

  if (messages.loaded == false) {
    sendData('messages:load');
  }
};

messages.hide = function () {
  $('#phone-homebar').hide(appOpenspeed);
};

messages.open = function (newopen) {
  if (newopen == messages.tabopen) return;

  setTimeout(function () {
    $(messages.tabopen).animate({
      'margin-left': '100%',
    });
    $(newopen).css({
      'margin-left': '0%',
      'margin-right': '100%',
    });
    setTimeout(function () {
      $(newopen).animate(
        {
          'margin-right': '0%',
        },
        appOpenspeed
      );
    }, 10);
    messages.lasttabopen = messages.tabopen;
    messages.tabopen = newopen;
  }, 10);
};

// Overview
messages.overview.Load = function (html) {
  // $("#messages-chat-content").detach();
  $('#messages-overview-container').html('');
  $('#messages-overview-container').append(html);
  messages.loaded = true;
  var $wrapper = $('#messages-favourites');

  $wrapper
    .find('.messages-overview-element')
    .sort(function (a, b) {
      return -a.getAttribute('data-place') + +b.getAttribute('data-place');
    })
    .appendTo($wrapper);

  $wrapper = $('#messages-rest');
  $wrapper
    .find('.messages-overview-element')
    .sort(function (a, b) {
      return -a.getAttribute('data-place') + +b.getAttribute('data-place');
    })
    .appendTo($wrapper);

  var skr = ['messages-overview-searchbar'];
  DontWalk(skr);
};

messages.loadchat = (number) => {
  sendData('messages:loadchat', {
    number: number,
  });
};

$(document).on('click', '.messages-overview-element', function () {
  // $("#business").fadeOut(1000)
  var number = $(this).data('number');

  sendData('messages:loadchat', {
    number: number,
  });
});

// Chat
$(document).on('click', '#message-chat-return', function () {
  // $("#business-dispatch").animate({
  //     "margin-left": "-100%"
  // })
  document.getElementById('messages').style.zIndex = '1';
  messages.open('#messages-overview');
  sendData('messages:resetopenchat');
});

$(document).on('click', '#messages-chat-sendmessage', function () {
  messages.SendMessage();
});

messages.SendMessage = function (ignore = false) {
  if (ignore == false) {
    if (Main.openapp == 'services') {
      if (services.chat.firstMessage == true) {
        SelectionArea.show('services-chat-firstmessage');
        return;
      }
    }
  }

  if (Main.openapp == 'services') {
    services.chat.firstMessage = false;
  }

  var message = $('#' + Main.openapp + '-chat-input').val();

  var okay = CheckStringLength(message);

  if (okay == false) return;

  var image = messages.chat.addedimages;

  sendData(Main.openapp + ':chat:sendmessage', {
    message: message,
    image: image,
  });
  $('#' + Main.openapp + '-chat-input').val('');

  messages.ClearImages();
};

$(document).on('click', '#messages-chat-sendgps', function () {
  messages.SendGPS();
});

messages.SendGPS = function (ignore = false) {
  if (ignore == false) {
    if (Main.openapp == 'services') {
      if (services.chat.firstMessage == true) {
        SelectionArea.show('services-chat-firstmessage-gps');
        return;
      }
    }
  }

  if (Main.openapp == 'services') {
    services.chat.firstMessage = false;
  }

  if (Main.openapp == 'business-teamchat') {
    sendData('business:teamchat:sendgps', {});
  } else if (Main.openapp == 'business-dispatch') {
    sendData('business:dispatch:sendgps', {});
  } else {
    sendData(Main.openapp + ':chat:sendgps');
  }

  Inputarea.message.hide(appOpenspeed);
};

messages.chat.getContactImage = function (contactName) {

  if (!isNaN(contactName) || contactName == null || contactName == undefined) {
    return `<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar">`;
  }
  const splitNames = contactName.split(' ');
  const initials = splitNames.map(name => name.charAt(0).toUpperCase()).join('');

  return initials;
};


messages.chat.Load = function (number, contactName, html) {

  $('#messages-chat-content').html('');
  $('#messages-chat-content').append(html);
  setlocale()
  $("#messsages-header-name").html(`${contactName} <i class="fa-solid fa-chevron-right"></i>`)
  $('#messages-header-imgContainer').html(messages.chat.getContactImage(contactName));
  messages.show();
  messages.open('#messages-chat');
  var mydiv = $('#messages-chat-content');
  mydiv.scrollTop(10000000000);
  var $wrapper = $('#messages-chat-content');
  messages.chat.number = number;
  $wrapper
    .find('.messages-overview-element')
    .sort(function (a, b) {
      return -a.getAttribute('data-place') + +b.getAttribute('data-place');
    })
    .appendTo($wrapper);

  var skr = ['messages-chat-input', 'messages-urlinput'];
  DontWalk(skr);
  Main.openapp = 'messages';

  messages.newMessageHeader = new NewMessageHeader('messages');

  setTimeout(() => {
    mydiv = $('#messages-chat-content');
    mydiv.scrollTop(10000000000);
  }, appOpenspeed);
};

messages.chat.AddMessage = function (html, me) {
  $('#messages-chat-content').append(html);
  if (me == 'from-me') {
    var mydiv = $('#messages-chat-content');
    mydiv.animate({ scrollTop: 99999999 });
  } else {
    messages.newMessageHeader.show();
  }
};

messages.chat.KickFromChat = function () {
  messages.open('#messages-overview');
};

// Menu
$(document).on('click', '#messages-chat-add', function () {
  Inputarea.message.show(appOpenspeed);
  $('.censorlayer').fadeIn(appOpenspeed);
  $('#business-chat-delete').show(0);
});

$(document).on('click', '#business-chat-delete', function () {
  Inputarea.message.hide(appOpenspeed);
  $('.censorlayer').fadeOut(appOpenspeed);
  if (Main.openapp == 'messages') {
    sendData('messages:deletechat');
  } else if (Main.openapp == 'services') {
    sendData('services:deletechat');
  } else {
    sendData('business:deletedispatch', {});
    businessfooteropen('#business-dispatch-overview');
  }
});

$(document).on('click', '#business-chat-dispatch-close', function () {
  Inputarea.message.hide(appOpenspeed);
  $('.censorlayer').fadeOut(appOpenspeed);
  if (Main.openapp == 'messages') {
    sendData('messages:deletechat');
  } else if (Main.openapp == 'services') {
    sendData('services:deletechat');
  } else {
    sendData('business:deletedispatch', {});
    businessfooteropen('#business-dispatch-overview');
  }
});

$(document).on('click', '#business-chat-dispatch-unaccept', function () {
  Inputarea.message.hide(appOpenspeed);
  $('.censorlayer').fadeOut(appOpenspeed);
  sendData('business:dispatch:unaccept', {});
  // businessfooteropen('#business-dispatch-overview');
});



$(document).on('click', '#messages-urlinput-cancel', function () {
  messages.chat.addedimage = null;
  messages.RemoveImageNew();
  messages.RemovePhotoNew();
  BottomSlideDown('#messages-inputimageurl-area', appOpenspeed, -70);
  Inputarea.message.show(0);
  inputarea.open = null;
});

$(document).on('click', '#messages-urlinput-back', function () {
  BottomSlideDown('#messages-inputimageurl-area', appOpenspeed, -70);
  Inputarea.message.show(0);
  inputarea.open = null;
});

$(document).on('click', '#messages-urlinput-submit', function () {
  var imageurl = $('#messages-urlinput').val();

  var okay = CheckStringLength(imageurl);

  if (okay == false) return;

  var pngcheck = CheckIfPng(imageurl);

  if (pngcheck == false) return;

  if (inputarea.open == null) {
    messages.AddImageNew(imageurl);
  } else if (inputarea.open == 'mail-new') {
    var html =
      '<div class="phone-app-pictureelement-select"><div class="imagecontainer" data-img="' +
      imageurl +
      '"> <img src="' +
      imageurl +
      '" alt="" class="image"></div><div class="select"><i class="fa-solid fa-xmark mail-new-attachments-delete"></i></div></div>';

    $('#mail-new-attachments').append(html);

    var arr = mail.new.attachments;
    arr.push(imageurl);
  } else if (inputarea.open == 'twitter-new') {
    twitter.new.addattachment(imageurl);
  } else if (inputarea.open == 'twitter:settings') {
    twitter.settings.setImage(imageurl);
  } else if (inputarea.open == 'twitter:register') {
    twitter.setRegisterImage(imageurl);
  } else if (inputarea.open == 'insta:register') {
    insta.setRegisterImage(imageurl);
  } else if (inputarea.open == 'insta:new') {
    $("#insta-new-picture-icon").hide()
    $("#insta-new-picture-img").show()
    $("#insta-new-picture-img").attr("src", imageurl)

    insta.new.attachments = []
    insta.new.addattachment(imageurl)
  } else if (inputarea.open == 'insta:settings') {

    insta.settings.setImage(imageurl);
  } else if (inputarea.open == 'advertisement') {
    advertisement.new.addattachment(imageurl);
  }

  // $("#messages-urlinput").val(" ")
  BottomSlideDown('#messages-inputimageurl-area', appOpenspeed, -70);
  $('.censorlayer').fadeOut(appOpenspeed);
  $('#messages-urlinput').val('');
  inputarea.open = null;
  // $("#business-teamchat-selection-inputarea").fadeIn(0
});

function CheckIfPng(url) {
  if (
    url.includes('png') == true ||
    url.includes('jpeg') == true ||
    url.includes('jpg') == true ||
    url.includes('gif') == true
  ) {
    return true;
  } else {
    Notify('hastobepng', 'error');
    return false;
  }
}

messages.AddPhotoNew = function () {
  if ($('#messages-inputarea-image').hasClass('new')) {
    $('#messages-inputarea-image').removeClass('new');
  }
  if ($('#messages-inputarea-photo').hasClass('new') == false) {
    $('#messages-inputarea-photo').addClass('new');
  }
};

messages.RemovePhotoNew = function () {
  if ($('#messages-inputarea-photo').hasClass('new')) {
    $('#messages-inputarea-photo').removeClass('new');
  }
};

messages.AddImageNew = function (url) {
  // messages.chat.addedimage = url
  // print(Main.openapp)

  var height = 40;
  if (Main.openapp == 'groupchat') height = 40.5;
  if (Main.openapp == 'darkchat') height = 40.5;

  if (messages.chat.addedimages.length == 0) {
    let minus = 7;
    let imageContainerUrl = 7;
    if (Main.openapp == 'messages') minus = 10;
    if (Main.openapp == 'messages') imageContainerUrl = 8.5;

    height -= minus;
    $('#' + Main.openapp + '-chat-content').animate({
      height: height + 'vh',
    });
    $('#' + Main.openapp + '-chat-imagearea').animate({
      height: imageContainerUrl + 'vh',
    });
  } else if (messages.chat.addedimages.length >= 2) {
    let minus = 8;
    let imageContainerUrl = 8;
    if (Main.openapp == 'messages') minus = 10;
    if (Main.openapp == 'messages') imageContainerUrl = 8.5;
    height -= minus;
    $('#' + Main.openapp + '-chat-content').animate({
      height: height + 'vh',
    });
    $('#' + Main.openapp + '-chat-imagearea').animate({
      height: imageContainerUrl + 'vh',
    });
  }

  messages.chat.addedimages.push(url);
  var ImageHtml =
    '   <div class="message-chat-image-area-element" data-position="' +
    (messages.chat.addedimages.length - 1) +
    '"><div class="delete-element" id="message-chat-image-area-element-delete"><i class="fa-solid fa-xmark"></i></div><img class="image" src="' +
    url +
    '"></div>';

  if (Main.openapp == 'messages') {
    ImageHtml = messagesNew.getImageHtml(
      messages.chat.addedimages.length - 1,
      url
    );
  }

  $('#' + Main.openapp + '-chat-imagearea').append(ImageHtml);

  var position2 = 0;
  $('.message-chat-image-area-element').each(function () {
    $(this).data('position', position2);
    position2 += 1;
  });
};

$(document).on('click', '#message-chat-image-area-element-delete', function () {
  var position = $(this).parent().data('position');

  messages.RemoveImageNew(position);
});

messages.RemoveImageNew = function (position) {
  messages.chat.addedimages.splice(position, 1);
  $('.message-chat-image-area-element').each(function () {
    if ($(this).data('position') == position) {
      $(this).fadeOut(appOpenspeed);
      setTimeout(() => {
        $(this).remove();
      }, appOpenspeed);
    }
  });

  var position2 = 0;
  $('.message-chat-image-area-element').each(function () {
    $(this).data('position', position2);
    position2 += 1;
  });

  // var height = 44.5;
  var height = 40;
  if (Main.openapp == 'groupchat') height = 40.5;
  if (Main.openapp == 'darkchat') height = 40.5;

  if (messages.chat.addedimages.length == 0) {
    $('#' + Main.openapp + '-chat-content').animate({
      height: height + 'vh',
    });
    $('#' + Main.openapp + '-chat-imagearea').animate({
      height: '0vh',
    });
  } else if (
    messages.chat.addedimages.length < 3 &&
    messages.chat.addedimages.length > 0
  ) {
    let minus = 7;
    let imageContainerUrl = 7;
    if (Main.openapp == 'messages') minus = 10;
    if (Main.openapp == 'messages') imageContainerUrl = 8.5;
    height -= minus;
    $('#' + Main.openapp + '-chat-content').animate({
      height: height + 'vh',
    });
    $('#' + Main.openapp + '-chat-imagearea').animate({
      height: imageContainerUrl + 'vh',
    });
  }
};

messages.ClearImages = function () {
  messages.chat.addedimages = [];
  $('.message-chat-image-area-element').each(function () {
    $(this).remove();
  });
  $('#' + Main.openapp + '-chat-imagearea').animate({
    height: '0vh',
  });

  var height = 44.5;
  if (Main.openapp == 'groupchat') height = 40.5;
  if (Main.openapp == 'darkchat') height = 40.5;
  if (Main.openapp == 'messages') height = 40;

  $('#' + Main.openapp + '-chat-content').animate({
    height: height + 'vh',
  });

  $('#' + Main.openapp + '-chat-content').scrollTop(9999999);
};

// Image
$(document).on('click', '.business-message-image', function () {
  var image = $(this).attr('src');
  gallery.camera.open(image);
  // $(".image-preview").fadeIn(appOpenspeed)

  // document.getElementById("image-preview-image").src=image;
});

$(document).on('click', '#image-preview-close', function () {
  $('.image-preview').fadeOut(appOpenspeed);
});

DontWalk = function (skr) {
  skr.forEach(function (item, index, array) {
    var dontwalk = document.getElementById(item);

    dontwalk.addEventListener(
      'mousedown',
      (event) => {
        sendData('SetNuiFocusKeepInputFalse');
      },
      true
    );

    dontwalk.addEventListener(
      'focus',
      (event) => {
        sendData('SetNuiFocusKeepInputFalse');
      },
      true
    );

    dontwalk.addEventListener(
      'blur',
      (event) => {
        sendData('SetNuiFocusKeepInputTrue');
      },
      true
    );
  });
};


iconActionMenu = {
  open: function (id = '#messages-action-menu') {
    $(id).css({
      display: 'flex',
      bottom: '-100%',
    });

    $(id).animate(
      {
        bottom: '-0%',
      },
      300
    );
  },
  close: function (id = '#messages-action-menu') {
    $(id).animate(
      {
        display: 'flex',
        bottom: '-100%',
      },
      300
    );

    setTimeout(function () {
      $('#messages-action-menu').css({
        display: 'none',
        bottom: '-100%',
      });
    }, 300);
  },
  input: false,
  preAction: 'messages',
}

iconInputMenu = {
  isOpen: false,
  action: "",
  open: function (action, html, type = "text", placeholder = ".png/jpeg/gif") {
    $('.icon-input-menu').css({
      display: 'flex',
      bottom: '-100%',
    });

    $('.icon-input-menu').animate(
      {
        bottom: '-0%',
      },
      300
    );
    this.isOpen = true;
    $("#icon-input-menu-input").val("")
    $("#icon-input-menu-input").attr('type', type)
    $("#icon-input-menu-input").attr('placeholder', placeholder)

    this.action = action;
    $('#icon-input-menu-header').html(html);
  },
  close: function () {
    $('.icon-input-menu').animate(
      {
        display: 'flex',
        bottom: '-100%',
      },
      300
    );

    setTimeout(function () {
      $('.icon-input-menu').css({
        display: 'none',
        bottom: '-100%',
      });
    }, 300);
    this.isOpen = false;
  },
}

setTimeout(() => {
  $(document).on('click', '.icon-action-menu-action', function () {
    const action = $(this).data('action');
    let close = true;
    console.log("action: " + action)

    if (action == 'back') {
      if (iconInputMenu.isOpen == true) {
        close = false;
        iconInputMenu.close();

      }
    } else if (action == 'musicBack') {
      iconActionMenu.close("#music-action-menu");
      iconActionMenu.close("#music-playlist-action-menu");
    } else if (action == 'musicPlaylistBack') {
      iconActionMenu.close("#music-playlist-add-menu");
    } else if (action == "gps") {
      sendData(Main.openapp + ':chat:sendgps');
    } else if (action == "webImage") {
      iconInputMenu.open(action, $(this).html());
      close = false;
    } else if (action == "money") {

      iconInputMenu.open(action, $(this).html(), "number", getLocal("Amount"));
      close = false;
    } else if (action == "gallery") {

      sendData("gallery:slideuppage", {
        type: "insta",
      })
    } else if (action == "inputSubmit") {
      let input = $('#icon-input-menu-input').val();

      if (iconInputMenu.action == "webImage") {
        var okay = CheckStringLength(input);

        if (okay == false) return;

        var pngcheck = CheckIfPng(input);

        if (pngcheck == false) return;

        // Main.openapp = "messages";
        if (iconActionMenu.preAction == "messages") {
          messages.AddImageNew(input);
        } else if (iconActionMenu.preAction == "musicPlaylist") {
          music.changePlaylistPicture(input)
        }
      } else if (iconInputMenu.action == "money") {
        let receivers = []
        receivers.push({ number: messages.chat.number })
        sendData('bank:requestMoney', {
          receivers: receivers,
          amount: input
        });
      } else if (iconInputMenu.action == "createNewPlaylist") {
        music.createNewPlaylist(input)
      } else if (iconInputMenu.action == "renamePlaylist") {
        music.renamePlaylist(input)

      } else if (iconInputMenu.action == "changePlaylistDescription") {
        music.changePlaylistDescription(input)
      }
    } else if (action == 'togglePlay') {
      music.player.togglePlay();
    } else if (action == 'addToQueue') {
      music.addToQueue();
    } else if (action == 'removeFromQueue') {
      music.removeFromQueue();
    } else if (action == 'addToLikedTracks') {
      music.addToLikedTracks();
    } else if (action == 'removeFromLikedTracks') {
      music.removeFromLikedTracks();
    } else if (action == 'addToPlaylist') {
      music.addToPlaylist();
    } else if (action == 'removeFromPlaylist') {
      music.removeFromPlaylist();
    } else if (action == 'addToSelectedPlaylists') {
      music.addToSelectedPlaylists();
    } else if (action == "createNewPlaylist") {
      iconInputMenu.open(action, $(this).html(), "text", getLocal("Name"));
      close = false;
    } else if (action == "renamePlaylist") {
      iconInputMenu.open(action, $(this).html(), "text", getLocal("Name"));
      close = false;
    } else if (action == "changePlaylistPicture") {
      $("#messages-action-menu-gps").hide()
      $("#messages-action-menu-money").hide()
      iconActionMenu.open();
      iconActionMenu.preAction = "musicPlaylist"
      close = false;
    } else if (action == "changePlaylistDescription") {
      iconInputMenu.open(action, $(this).html(), "text", getLocal("Description"));
      close = false;
    } else if (action == "sharePlaylist") {
      music.sharePlaylist();
    }




    if (close) {
      $('#icon-input-menu-input').val('')
      iconActionMenu.close()
      iconInputMenu.close();
    }
  });


}, 1000);



$(document).on('click', '#messages-toolbar-up', function () {
  iconActionMenu.open();
});
