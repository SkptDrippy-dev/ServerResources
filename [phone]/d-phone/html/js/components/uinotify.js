uinotify = {
  div: function (app, icon, title, text) {
    return `<div style="margin-top: -5vh" data-app="${app}" class="uinotify_element"><div class="uinotifyclose"><i class="fas fa-xmark"></i></div>${icon}<div class="text uinotifyclickable"><div class="headline">${title}</div><div class="message">${text}</div></div></div>`;
  },
  donotdistrub: false,
};

$(function () {
  window.addEventListener('message', function (event) {
    var v = event.data;

    if (v.app == 'uinotify' && v.task == 'show') {
      uinotify.show(
        v.senderapp,
        v.title,
        v.text,
        v.time,
        v.ignore,
        v.PhoneisOpen
      );
    } else if (v.app == 'uinotify' && v.task == 'donotdistrub') {
      uinotify.donotdistrub = v.state;
    }
  });
});

uinotify.geticon = function (app) {
  let classlist = '';
  let bg = '';


  $('.phone-application').each(function (index, element) {
    let e = $(this);

    if (e.data('app') == app) {
      let children = e.children();
      let icon;
      $.each(children, function (indexInArray, valueOfElement) {
        if ($(this).hasClass('ApplicationIcon')) {
          icon = valueOfElement;
          for (x of icon.classList) {
            if (x != 'ApplicationIcon') {
              classlist = classlist + ' ' + x;
              bg = $(icon).css('background');
            }
          }
        }
      });
    }
  });

  let iconhtml = `<div class="icon uinotifyclickable"  style="background: ${bg}">
  <i class="${classlist}"></i>
</div>`;
  return iconhtml;
};

uinotify.show = function (
  app,
  title,
  text,
  time = 3000,
  ignore = false,
  phoneopen = false
) {
  uinotify.sound(app);

  var icon = uinotify.geticon(app);
  var div = uinotify.div(app, icon, title, text);

  if (phoneopen == false) {
    homescreen.show(true);
    if (isPhoneShowed == false) {
      otherAction = false;
      isPhoneShowed = true;
      $('.container').css({
        bottom: '-70vh',
      });
      $('.container').show();
      $('.container').animate(
        {
          bottom: '-20vh',
        },
        500
      );
    }

    setTimeout(() => {
      uinotify.display(div, time);
    }, 250);

    setTimeout(() => {
      if (otherAction == false) {
        $('.container').animate({
          bottom: '-70vh',
        });
        isPhoneShowed = false;
        setTimeout(() => {
          homescreen.hide();
        }, 500);
      }
    }, 5000);
  } else {
    uinotify.display(div, time);
  }
};

uinotify.display = (div, time) => {
  if (homescreen.activ == false && uinotify.donotdistrub == false) {
    var t = $(div).prependTo('.uinotify');

    $(t).animate(
      {
        'margin-top': '0vh',
      },
      500
    );

    setTimeout(() => {
      uinotify.remove(t);
    }, time);
  }
  var e = $(div).prependTo('#homescreen-uinotify');

  $(e).animate(
    {
      'margin-top': '0vh',
    },
    500
  );

  uinotify.showclearbutton();
};

uinotify.sound = (app) => {
  if (mutes == true) return;

  if (app == 'business') {
    PlayBMessageSound();
  } else {
    PlayMessageSound();
  }
};

uinotify.showclearbutton = () => {
  let exist = false;
  $('.uinotify_element').each(function (index, element) {
    exist = true;
  });

  $('#homescreen-uinotify-clear').show(0);
  if (exist == false) $('#homescreen-uinotify-clear').fadeOut(0);
};

uinotify.remove = function (e) {
  let timeout = 300;
  $(e).animate(
    {
      position: 'absolute',
      right: '100vh',
    },
    timeout
  );
  setTimeout(() => {
    e.remove();
    uinotify.showclearbutton();
  }, timeout);
};

$(document).on('click', '.uinotifyclickable', function () {
  if (homescreen.locked == true) return;
  homescreen.hide();
  openapp($(this).parent().data('app'));
  uinotify.remove($(this).parent());
});

$(document).on('click', '.uinotifyclose', function (e) {
  // if (homescreen.locked == true) return;
  uinotify.remove($(this).parent());
});

setTimeout(() => {
  // uinotify.show('call', 'test', 'test', 3000, false);
  // uinotify.show('contacts', 'test', 'test', 3000, false);
  // uinotify.show('messages', 'Peter', 'Where are you?', 3000, false);
  // uinotify.show('messages', 'Peter', 'Where are you?', 3000, false);
  // uinotify.show('messages', 'Peter', 'Where are you?', 3000, false);
}, 1000);
