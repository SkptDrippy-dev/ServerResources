debugMode = true;
BrowserMode = false;

let currentjob = 'null';
let businessicon = true;
let backgroundurl = null;
let darkbackgroundurl = null;
let lastservicenumber = null;
let darkmode = false;
let alwayson = false;
let lastwindow = null;
let privatmessage = null;
lasthomebarwindow = null;
let firsttime = false;
var soundvolume = 0.2;
var ringtone;
var isPhoneShowed = false;
var otherAction = false;

const appOpenspeed = 300;

var Messagesoundfile = new Audio('./sound/Google_Event.ogg');
var BMessagesoundfile = new Audio('./sound/message_tone.ogg');
var outgoingsoundfile = new Audio('./sound/Phonecall.ogg');
var incomingsoundfile = null;

Main = {
  openapp: null,
};

var firstTimeTheme = false;

$(function () {
  $('.input-url-area').each(function (index, element) {
    $(this).hide(0);
  });

  var r = document.querySelector(':root');
  r.style.setProperty('--header-color', 'white');
  var documentWidth = document.documentElement.clientWidth;
  var documentHeight = document.documentElement.clientHeight;
  var container = $('.container');

  window.addEventListener('message', function (event) {
    var item = event.data;

    if (item.showPhone) {
      showPhone(false);
      setlocale()
      ChangeWallpaper(item.wallpaper);

      if (firstTimeTheme == false) {
        homescreen.show(true);
        $("#phone-homebar").hide(0)
        if (item.darkmode == 1) {
          Darkmode();
          darkmode = true;
          $('#darkmodecb').addClass('checked');
        } else {
          Whitemode();
        }
        firstTimeTheme = true;
      }


      SetTheme(activTheme);


      alwayson = item.alwayson;
      $('.phone-message').hide();

      if (item.unemployed) {
        if (businessicon == true) {
          // $('#businessicon').hide();
        }
        businessicon = false;
      }


      $('.phone-startscreen').fadeOut(appOpenspeed);

      // Test.Call();

    } else if (item.hidePhone) {
      isPhoneShowed = false;
      if (alwayson == false) {
        BottomSlideDown('.container', 200, -70);
      } else {
        $('.container').animate({
          bottom: '-62vh',
        });
      }

      $('.image-preview').fadeOut(appOpenspeed);

      // $(".container").animate({
      //     "bottom": "-62vh",
      // })
    } else if (item.hidePhoneInCall) {
      isPhoneShowed = false;
      $('.container').animate({
        bottom: '-40vh',
      });
    } else if (item.OpenincomingCall) {
      $('.container').css({
        bottom: '-70vh',
      });
      $('.container').show();
      $('.container').animate({
        bottom: '-50vh',
      });
    } else if (item.CloseincomingCall) {
      $('.container').animate({
        bottom: '-70vh',
      });
    } else if (item.loadBusiness) {
      loadBusiness(item.business);
    } else if (item.removeBusiness) {
      removeBusiness();
    } else if (item.showContacts) {
      loadcontacts(item.html);
    } else if (item.showNotification) {
      ShowNotif(item);
    } else if (item.showMessages) {
      loadmessages(item.html, item.contactname);
    } else if (item.showRecentMessages) {
      if (item.recentmessagesopen == true) {
        reloadrecentmessages(item.html);
      } else {
        loadrecentmessages(item.html);
      }
    } else if (item.changeWallpaper) {
      ChangeWallpaper(item.url);
    } else if (item.acceptCall) {
      AcceptCall(item.number, item.contact);
    } else if (item.incomingCall) {
      IncomingCall(item.number, item.contact);
    } else if (item.endcall) {
      EndCall();
    } else if (item.declinecall) {
      DeclineCall();
    } else if (item.stopcall) {
      StopCall(item);
    } else if (item.loadrecentcalls) {
      loadrecentcalls(item.recentcalls);
    } else if (item.playmessagesound) {
      // PlayMessageSound();
    } else if (item.playbusinessmessagesound) {
      // PlayBMessageSound();
    } else if (item.updatetime) {
      UpdateTime(item.showinGameTime, item.ingametime);
    } else if (item.setvalues) {
      backgroundurl = item.backgroundurl;
      darkbackgroundurl = item.darkbackgroundurl;
      cas = item.cas;
      model = item.model;
      Casepreview(cas, model);
      call.sound.set('incomming', item.ringtone);

      apptext(item.apptext);
    } else if (item.syncbpbabutton) {
      syncbpbabutton(item.number);
    } else if (item.updatenumber) {
      $('#phonesettingsnumber').html(item.number);
    } else if (item.updatejobmoney) {
      businessmoney = item.businessmoney;
      $('#pbms-money').html(item.businessmoney + '$');
    } else if (item.isboss) {
      // if (locale == "de") {
      //     sendData("notification", { text: localede.pbsjobmoney, length: 5000 })
      // } else {
      //     sendData("notification", { text: locale.pbsjobmoney, length: 5000 })
      // }
      $('#pbsboss').each(function () {
        $(this).show();
      });
    } else if (item.isntboss) {
      $('#pbsboss').each(function () {
        $(this).hide();
      });
    } else if (item.autodecline) {
      Autodecline();
    } else if (item.refreshmessages) {
      if (privatmessage == item.number) {
        refreshmessages(item.html, item.contactname);
      }
    } else if (item.refreshbusinessmessages) {
      reloadbusinessmessages(item.html, item.div);
    } else if (item.openSettings) {
      openSettings(item.html, item.casehtml);
    } else if (item.LoadRingtones) {
      LoadRingtones(item.html);
    } else if (item.startloadingscreen) {
      BottomSlideUp('.container', 300, 0);
      Startloadingscreen(item.time);
    } else if (item.hidestartscreen) {
      if ($('.phone-startscreen').is(':visible')) {
        CloseAll();
        $('.phone-startscreen').hide(0);
        if (callrequest == false) $('.phone-applications').show(0);
      }
    } else if (item.hideapp) {
      AppIcon(item.app, false);
    } else if (item.setcurrency) {
      currency = item.currency;
    } else if (item.reload) {
      Home();
      // BottomSlideUp('.container', 300, 0);
      Startloadingscreen(item.time);
      $('.phone-homebar').hide(0);
    } else if (item.closeall) {
      CloseAll();
      $('.phone-homebar').hide(0);
    } else if (item.setnotifiaction) {
      SetNotificationPosition(item.option);
    } else if (item.disableWebImages) {
      DisableWebImages()
    }

    let v = item;
    if (v.app == 'customapps' && v.task == 'load') {
      customapps.load(v.html);
    }
  });

  $(document).keyup(function (data) {
    // Change closing Phone http://gcctech.org/csc/javascript/javascript_keycodes.htm
    // ESC
    if (data.which == 27) {
      sendData('close');
    }
    // F1
    if (data.which == 112) {
      sendData('close');
    }
    if (data.which == 9) {
      data.preventDefault();
    }
  });
});

function sendData(name, data) {
  $.post('http://d-phone/' + name, JSON.stringify(data), function (datab) {
    // console.log(datab);
  });
}

function print(text) {
  sendData('print', { message: text });
}

function playSound(sound) {
  sendData('playsound', { name: sound });
}

function hide() {
  $('#menuoption1').hide();
}

BottomSlideUp = function (Object, Timeout, Percentage) {
  // if (Object == '#messages-inputarea') {
  $(Object).show(0);
  // }
  $(Object)
    .css({ display: 'block' })
    .animate(
      {
        bottom: Percentage + '%',
      },
      Timeout
    );
};

BottomSlideDown = function (Object, Timeout, Percentage) {
  $(Object)
    .css({ display: 'block' })
    .animate(
      {
        bottom: Percentage + '%',
      },
      Timeout,
      function () {
        $(Object).css({ display: 'none' });
        if (Object == '#messages-inputarea') {
          $(Object).hide(0);
        }
      }
    );
};

TopSlideDown = function (Object, Timeout, Percentage) {
  $(Object)
    .css({ display: 'block' })
    .animate(
      {
        top: Percentage + '%',
      },
      Timeout
    );
};

TopSlideUp = function (Object, Timeout, Percentage, cb) {
  $(Object)
    .css({ display: 'block' })
    .animate(
      {
        top: Percentage + '%',
      },
      Timeout,
      function () {
        $(Object).css({ display: 'none' });
      }
    );
};

var cooldown = false;
$(document).on('click', '.phone-application', function (e) {
  e.preventDefault();

  if (cooldown == true) return;
  if (footer.cooldown == true) return;

  cooldown = true;
  if (prepage != null) {
    currentpage = lastpage;
    lastpage = prepage;
  }
  var r = document.querySelector(':root');
  r.style.setProperty('--header-color', 'var(--font-color');

  var PressedApplication = $(this).data('app');
  var AppObject = $('.' + PressedApplication + '-app');
  openapp(PressedApplication);
  setTimeout(() => {
    cooldown = false;
  }, 1000);
});

function openapp(PressedApplication) {
  CloseAll();
  if (PressedApplication == 'settings') {
    // $("#phone-app-settings").show(500)
    settings.show();
    sendData('LoadSettings');
    sendData('LoadRingtones');
  } else if (PressedApplication == 'contacts') {
    contact.show();
  } else if (PressedApplication == 'call') {
    call.show();
  } else if (PressedApplication == 'messages') {
    messages.show();
    Main.openapp = 'messages';
  } else if (PressedApplication == 'services') {
    services.show();
  } else if (PressedApplication == 'business') {
    business.show();
  } else if (PressedApplication == 'radio') {
    radio.show();
  } else if (PressedApplication == 'camera') {
    sendData('openCamera');
    $('.phone-applications').show();
    Main.openapp = 'camera';
  } else if (PressedApplication == 'twitter') {
    twitter.show();
  } else if (PressedApplication == 'advertisement') {
    advertisement.show();
  } else if (PressedApplication == 'calculator') {
    $('.phone-applications').hide();
    $('#phone-homebar').show(appOpenspeed);
    $('.phone-calculator').show(appOpenspeed);
  } else if (PressedApplication == 'gallery') {
    gallery.show();
  } else if (PressedApplication == 'music') {
    music.show();
  } else {
    sendData('customapp:open', {
      name: PressedApplication,
    });
    Home();
  }
}

$(document).on('click', '#changewallpaper', function () {
  $('.phone-settings-wallpaper ').show(appOpenspeed);
});

$(document).on('click', '#backwallaper', function () {
  $('.phone-settings-wallpaper ').fadeOut(250);
});

$(document).on('click', '#pswsubmitbutton', function () {
  var avatar = $('#psw').val();
  var message1 = $('#psw').val().toLowerCase();

  if (
    message1.indexOf('script') > -1 ||
    message1.includes('<audio') == true ||
    message1.includes('</audio') == true ||
    message1.includes('html') == true ||
    message1.includes('iframe') == true ||
    message1.includes('src') == true ||
    message1.includes('div') == true ||
    message1.includes('div') == true ||
    message1.includes('mp4') == true ||
    message1.includes('<') == true ||
    message1.includes('>') == true
  ) {
    sendData('notification', { text: 'Nice try d:^)', length: 5000 });
  } else {
    if (
      avatar.includes('png') == true ||
      avatar.includes('jpeg') == true ||
      avatar.includes('jpg') == true ||
      avatar.includes('gif') == true
    ) {
      sendData('changewallpaper', {
        url: avatar,
      });

      $('.phone-settings-wallpaper ').fadeOut(250);
    } else {
      if (locale == 'de') {
        sendData('notification', { text: localede.avatarerror, length: 5000 });
      } else {
        sendData('notification', { text: locale.avatarerror, length: 5000 });
      }
    }
  }
});

function ChangeWallpaper(url) {
  if (url == '') {
    $('.phone-background').css(
      'background-image',
      'url(' + backgroundurl + ')'
    );
  } else {
    $('.phone-background').css('background-image', 'url("' + url + '")');
    $('.phone-background').css('background-size', 'cover');
  }
}

/*  Notification  */
function SetNotificationPosition(option) {
  // console.log('notification position');
  var css = 'center';
  if (option == 'left') {
    css = 'flex-start';
  } else if (option == 'right') {
    css = 'flex-end';
  }
  // console.log(css);
  $('.notifybody').css({
    'justify-content': css,
  });
}

function ShowNotif(data) {
  $('.notification').prepend(data.html);
  var $notification = $('#' + data.id);
  $notification.fadeIn();
  setTimeout(
    function () {
      $.when($notification.fadeOut()).done(function () {
        $notification.remove();
      });
    },
    data.length != null ? data.length : 2500
  );
}

let selectedservice = 'null';
let serviceopen = 'null';

$(document).on('click', '#phone-service-return', function () {
  if (serviceopen == 'null') {
    $('.phone-services').hide();
    $('.phone-applications').show(500);
  } else if (serviceopen == 'sendmessage') {
    $('.phone-services-message').hide();
    $('.phone-services-sector').show(500);

    serviceopen = 'null';
  }
});

$(document).on('click', '.phone-service', function () {
  $('.phone-services-sector').hide();
  $('.phone-services-message').show(500);

  serviceopen = 'sendmessage';
  selectedservice = $(this).data('service');
});

$(document).on('click', '#phone-service-button', function () {
  $('.phone-services-sector').show();
  $('.phone-services-message').hide();
  $('.phone-services').hide();
  $('.phone-applications').show(500);
  serviceopen = 'null';

  let sendnumber = 0;
  let sendgps = 0;
  selectednumber = selectedservice;
  let message = $('.phone-service-message-input').val();
  if (document.getElementById('sendnumber').checked) {
    sendnumber = 1;
  }
  if (document.getElementById('sendgps').checked) {
    sendgps = 1;
  }
  let message1 = $('.phone-service-message-input').val().toLowerCase();
  if (
    message1.indexOf('script') > -1 ||
    message1.indexOf('http') > -1 ||
    message1.indexOf('www') > -1 ||
    message1.includes('<audio') == true ||
    message1.includes('</audio') == true
  ) {
    sendData('notification', { text: 'Nice try d:^)', length: 5000 });
  } else {
    if (message.length > 0) {
      sendData('sendservice', {
        service: selectedservice,
        message: message,
        sendnumber: sendnumber,
        job: currentjob,
        sendgps: sendgps,
      });
    } else {
      if (locale == 'de') {
        sendData('notification', { text: localede.notempty, length: 5000 });
      } else {
        sendData('notification', { text: locale.notempty, length: 5000 });
      }
    }
  }
});

let businessapp = null;
let openbusinesswindow = null;

function loadBusiness(item) {
  businessapp = item;

  $('#businessicon').html(item);
  var businessBgColor = $('#businessicon i').css('background');

}

function removeBusiness() {
  $('#businessicon').hide();
  $('#jobmailiicon').hide();
}



/* Sound */
function PlayMessageSound() {
  if (mutes == false) {
    if (messagesound != null) {
      messagesound.pause();
    }

    messagesound = Messagesoundfile;
    messagesound.volume = soundvolume;
    messagesound.currentTime = 0;
    messagesound.play();

    setTimeout(function () {
      messagesound.pause();
      messagesound.currentTime = 0;
      messagesound.volume = soundvolume;
    }, 1300);
  }
}

function PlayBMessageSound() {
  if (mutes == false) {
    if (bmessagesound != null) {
      bmessagesound.pause();
    }

    bmessagesound = BMessagesoundfile;
    bmessagesound.volume = soundvolume;

    bmessagesound.currentTime = 0;
    bmessagesound.play();

    setTimeout(function () {
      bmessagesound.pause();
      bmessagesound.currentTime = 0;
      bmessagesound.volume = soundvolume;
    }, 1300);
  }
}

/* Update Time */
function UpdateTime(showinGameTime, ingametime) {
  if (showinGameTime == false) {
    var NewDate = new Date();
    var NewHour = NewDate.getHours();
    var NewMinute = NewDate.getMinutes();
    var Minutessss = NewMinute;
    var Hourssssss = NewHour;
    if (NewHour < 10) {
      Hourssssss = '0' + Hourssssss;
    }
    if (NewMinute < 10) {
      Minutessss = '0' + NewMinute;
    }
    var MessageTime = Hourssssss + ':' + Minutessss;

    $('#phone-time').html(MessageTime);
    $('#homescreen-time').html(MessageTime);
  } else {
    $('#phone-time').html(ingametime);
    $('#homescreen-time').html(ingametime);
  }
}

function CloseAll() {
  SetTheme('');
  Main.openapp = 'null';
  $(lastpage).css(
    {
      'margin-left': '0vh',
    },
    0
  );

  // currentpage = null
  // lastpage = null

  $('.phone-applications').hide();
  $('.phone-app').hide();
  $('.phone-recent-message').hide();
  $('.phone-message').hide();
  $('#phone-app-settings').hide();
  $('.phone-services').hide();
  $('.phone-businessapp').hide();
  $('.phone-businessapp-rank-sector').hide();
  $('.phone-businessapp-newrank-sector').hide();
  $('.phone-businessapp-money-sector').hide(0);
  $('.phone-applications').hide();
  $('#phone-app-settings-bgchange').hide();
  $('#pcb-transfer').removeClass('activeposition');
  $('#pcb-home').removeClass('activeposition');
  $('#phone-app-settings').hide();
  $('.phone-app').each(function () {
    $(this).hide();
  });
  $('#phone-app-contact').hide();
  $('#phone-app-contact-page').hide();
  $('#phone-app-contact-edit').hide();
  $('#phone-app-contact-new').hide();
  $('.phone-advertisement').fadeOut(0);
  $('.phone-dmarket').fadeOut(0);

  $('#phone-app-settings-bgchange').hide(0);
  $('#phone-app-settings-casechange').hide(0);
  $('.phone-calculator').fadeOut(0);

  $('#business-teamchat').css(
    {
      left: '-100%',
    },
    200
  );

  $('.phone-app-new').each(function (index) {
    $(this).css({
      left: '-100%',
      'z-index': '1',
    });
  });

  $('.underapp-new222').each(function (index) {
    $(this).css({
      'margin-left': '100%',
      'z-index': '1',
    });
  });

  SlideUpPage.hideall();

  setTimeout(() => {
    footer.tabopen = '';
    footer.lasttabopen = '';
  }, 0);

  $('#phone-homebar').removeClass('black');

  // DoodleEndGame()

  messages.ClearImages();

  business.message.addedimage = null;

  if (PlaySound == 'true') {
    lastsound.removeClass('fa-bell-slash');
    lastsound.addClass('fa-bell');
    soundtest.pause();
    PlaySound = 'null';
  }
}

function Home() {
  CloseAll();
  homescreen.hide();
  $('#phone-homebar').hide(0);
  $('.phone-applications').fadeIn(300);
  var r = document.querySelector(':root');
  r.style.setProperty('--header-color', 'white');
}

function Darkmode() {
  darkmode = true;
  SetTheme('');

  $('.phone-footer-applications').addClass('darkphone-footer-applications');
  $('.phone-header').addClass('darkphone-header');
  // $('.phone-homebar').addClass('darkphone-homebar');

  // general
  $('.phone-input').each(function () {
    $(this).addClass('darkphone-input');
  });


  //  calculator
  $('.phone-calculator').addClass('darkmode');
  document.getElementById('output').style.color = 'white';
  $('.calculator-grid > button').each(function () {
    $(this).addClass('darkcalculator-grid > button');
  });
  $('.calculator-grid > button:hover').each(function () {
    $(this).addClass('darkcalculator-grid > button');
  });
}

function Whitemode() {
  darkmode = false;
  SetTheme('');
  $('.phone-footer-applications').removeClass('darkphone-footer-applications');
  $('.phone-header').removeClass('darkphone-header');
  // $('.phone-homebar').removeClass('darkphone-homebar');

  /* Phone App */
  $('.phone-enter').each(function () {
    $(this).removeClass('darkphone-enter');
  });
  $('.phone-enterinvisibleicon').removeClass('darkphone-enterinvisibleicon');
  $('.phone-call-footer-item').removeClass('darkphone-call-footer-item');
  $('.phone-returnicon').each(function () {
    $(this).removeClass('darkphone-returnicon');
  });

  // advertisement
  $('.phone-advertisement').removeClass('darkmode');
  $('.life-message').each(function () {
    $(this).removeClass('darklife-message');
  });
  $('.advertisement-textarea').each(function () {
    $(this).removeClass('darkadvertisement-textarea');
  });


  // general
  $('.phone-input').each(function () {
    $(this).removeClass('darkphone-input');
  });

  // calculator
  $('.phone-calculator').removeClass('darkmode');
  document.getElementById('output').style.color = 'black';
  $('.calculator-grid > button').each(function () {
    $(this).removeClass('darkcalculator-grid > button');
  });
  $('.calculator-grid > button:hover').each(function () {
    $(this).removeClass('darkcalculator-grid > button');
  });
}

var pressed = false;
$(document).on('click', '#phone-homebar', function () {
  if (pressed) return;
  pressed = true;

  if (lastwindow == 'wallpaper') {
    $('.phone-settings-sector').show(appOpenspeed);
    $('.phone-settings-inner').hide(appOpenspeed);
    $('#headerback').hide(appOpenspeed);
    lastwindow = null;
  }

  if (Main.openapp == 'call-type') {
    call.call.small.show();
  }
  Home();
  if (lasthomebarwindow == 'chat') {
    sendData('loadrecentmessage', {});
    $('#phone-homebar').fadeIn(250);
    lasthomebarwindow = null;
    lastwindow = null;
  } else {
    sendData('activeappnone', {});
    $('.phone-applications').fadeIn(250);
    $('#phone-homebar').fadeOut(0);
  }
  setTimeout(() => {
    pressed = false;
  }, 1000);
});

$(document).on('click', '#headerback', function () {
  if (lastwindow == 'wallpaper') {
    $('.phone-settings-sector').show(appOpenspeed);
    $('.phone-settings-inner').hide(appOpenspeed);
    $('#headerback').hide(appOpenspeed);
    $('.phone-homebar').show(appOpenspeed);
    lastwindow = 'settings';
  } else if (lastwindow == 'case') {
    // Casepreview(oldcase, oldmodel)
    $('.phone-settings-sector').show(appOpenspeed);
    $('.phone-settings-inner').hide(appOpenspeed);
    $('#headerback').hide(appOpenspeed);
    $('.phone-homebar').show(appOpenspeed);
    lastwindow = 'settings';
  } else {
    // sendData("activeappnone", {})
    // $(".phone-applications").fadeIn(250);
    // $("#phone-homebar").fadeOut(0);
  }
});

function Startloadingscreen(time) {
  $('.phone-blackscreen').hide(0);
  $('.phone-startscreen').show(0);
  $('.phone-startscreen-loadingbar-inner').css({
    width: '0%',
  });
  $('.phone-startscreen-loadingbar-inner').animate(
    {
      width: '100%',
    },
    time
  );
}

function Notify(string, type) {
  sendData('notify', {
    locale: string,
    type: type,
  });
}

function ShowHomebar() {
  $('#phone-homebar').css({
    display: 'block',
    'margin-left': '-30vh',
  });
  $('#phone-homebar').animate(
    {
      'margin-left': '0vh',
    },
    300
  );
}

function AppIcon(app, state) {
  $('.phone-application').each(function () {
    if ($(this).data('app') == app && $(this).data('app') != 'business') {
      if (state == true) $(this).show();
      if (state == false) $(this).hide();
    }
  });
}

function CheckImage(avatar) {
  if (
    avatar.includes('png') == true ||
    avatar.includes('jpeg') == true ||
    avatar.includes('jpg') == true ||
    avatar.includes('gif') == true
  ) {
    return true;
  } else {
    Notify('hastobepng', 'error');
  }

  return false;
}

function IsImageOk(img) {
  // During the onload event, IE correctly identifies any images that
  // weren’t downloaded as not complete. Others should too. Gecko-based
  // browsers act like NS4 in that they report this incorrectly.
  if (!img.complete) {
    return false;
  }

  // However, they do have two very useful properties: naturalWidth and
  // naturalHeight. These give the true size of the image. If it failed
  // to load, either of these should be zero.
  if (img.naturalWidth === 0) {
    return false;
  }

  // No other way of checking: assume it’s ok.
  return true;
}

apptext = function (state) {
  if (state == false) {
    $('.phone-application').css({
      height: '4.6vh',
      'grid-template-rows': '4.6vh 0vh',
    });

    $('.phone-application > p').css({
      display: 'none',
    });
    $('#appnamecb').removeClass('checked');
  } else {
    $('.phone-application').css({
      height: '6.6vh',
      'grid-template-rows': '4.6vh 2vh',
    });

    $('.phone-application > p').css({
      display: 'block',
    });
    $('#appnamecb').addClass('checked');
  }
};

footer = {
  tabopen: '',
  lasttabopen: '',
  cooldown: false,
};

footer.open = function (newopen) {
  if (footer.cooldown == true) return;

  if (newopen == footer.tabopen) return;
  footer.cooldown = true;

  setTimeout(function () {
    $(footer.tabopen).animate({
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
      footer.lasttabopen = footer.tabopen;
      footer.tabopen = newopen;
      footer.cooldown = false;
    }, 10);
  }, 10);
};

$(document).on('click', '#view-return', function () {
  footer.open(footer.lasttabopen);
});

customapps = {
  firsttime: false,
};
customapps.load = function (html) {
  if (firsttime == true) return;

  $('.phone-home-applications').append(html);
};

function DisableWebImages() {

  $("#gallery-settings-webimage").remove()
  $('#messages-inputarea-image').remove()
  $('#messages-action-menu-webimage').remove()
}

showPhone = function (param) {
  otherAction = true;
  BottomSlideUp('.container', 300, 0);
  isPhoneShowed = true;
  if (param == true) $('.phone-startscreen').fadeOut(appOpenspeed);
  homescreenHeight = homescreen_div.offsetHeight;
  homescreenTopPercentage = (homescreen_div.offsetTop / homescreenHeight) * 100;
};

test = function (param) {
  showPhone(true);
};