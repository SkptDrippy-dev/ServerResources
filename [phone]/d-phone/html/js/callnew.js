let callnumber;
var outgoingsound = null;
var messagesound = null;
var bmessagesound = null;
var incomingsound = null;
var mutes = false;

call = {
  activ: {
    type: 'none',
    state: false,
    number: '',
    label: '',
    timer: null,
  },
  footer: new Footer('call', 'null'),
  call: {
    state: 'none',
    header: {},
    small: {},
    big: {
      incomming: {},
      outgoing: {},
      ongoing: {
        state: 'none',
      },
    },
  },
  history: {
    load: (html) => {
      $('#call-recent-elements').html(html);
    },
    add: (html) => {
      $('#call-recent-elements').prepend(html);
    },
    number: (html) => {
      $('#addcontactpage-recentcallhistory-elements').html(html);
    },
  },
  block: {
    load: (html) => {
      $('#call-block-elements').html(html);
    },
    add: (html) => {
      $('#call-block-elements').prepend(html);
    },
  },
  sound: {
    volume: 0.2,
    incomming: {
      audio: null,
    },
    outgoing: {
      audio: null,
    },
  },
  groupcall: {},
};

$(function () {
  call.sound.set(
    'incomming',
    'https://github.com/DeunService/dphoneAssets/blob/main/Ring.ogg?raw=true'
  );

  call.sound.set(
    'outgoing',
    'https://github.com/DeunService/dphoneAssets/blob/main/Phonecall.ogg?raw=true'
  );

  window.addEventListener('message', function (event) {
    var v = event.data;

    if (v.app == 'call' && v.task == 'history:load') {
      call.history.load(v.html);
    } else if (v.app == 'call' && v.task == 'history:add') {
      call.history.add(v.html);
    } else if (v.app == 'call' && v.task == 'history:number') {
      call.history.number(v.html);
    }

    if (v.app == 'call' && v.task == 'block:load') {
      call.block.load(v.html);
    }

    if (v.app == 'call' && v.task == 'incomming') {
      call.new(v.number, v.label, true, v.isphoneopen);
    } else if (v.app == 'call' && v.task == 'start') {
      call.new(v.number, v.label, true, v.isphoneopen);
    } else if (v.app == 'call' && v.task == 'stopcall') {
      call.end();
    } else if (v.app == 'call' && v.task == 'accept') {
      call.accept();
    }

    if (v.app == 'call' && v.task == 'call:hideactions') {
      call.call.hideactions(v.data);
    }

    if (v.app == 'groupcall' && v.task == 'call:hideactions') {
      call.call.hideactions(v.data);
    }
  });
});

call.show = function () {
  ShowHomebar();

  var callpage = document.getElementById('call');

  var animation = anime({
    targets: callpage,
    left: '0%',
    duration: appOpenspeed,
    easing: 'easeInOutQuad',
    elasticity: 400,
    begin: function () {
      callpage.style.zIndex = '1';
    },
  });
  call.footer.open('home');

  Main.openapp = 'call';
};

call.hide = function () {
  $('#phone-homebar').hide(appOpenspeed);
};

setTimeout(() => {
  call.footer.open('home');
  call.footer.lasttabopen = 'home';
  call.footer.opentab = 'home';
}, appOpenspeed);

$(document).on('click', '.callfooter', function () {
  if (call.footer.footerprogress) return;
  let newtab = $(this).data('new');
  call.footer.open(newtab);
  call.footer.lasttabopen = call.footer.opentab;
  call.footer.opentab = newtab;
});

// Home
$(document).on('click', '.call-input', function () {
  let number = $(this).data('num');
  if (number == null) return;
  var element = document.getElementById('call-home-number');
  element.innerHTML = element.innerHTML + number;

  $('#call-delete').fadeIn(250);
  $('.call-addtocontact').fadeIn(250);
});

$(document).on('click', '#call-delete', function () {
  let number = $(this).data('id');

  $('#call-home-number').html($('#call-home-number').text().replace(/.$/g, ''));

  if ($('#call-home-number').text().trim() === '') {
    $('#call-delete').fadeOut(250);
    $('.call-addtocontact').fadeOut(250);
  }
});

$(document).on('click', '#call-callicon', function () {
  var element = document.getElementById('call-home-number');
  var number = $('#call-home-number').text().trim();
  call.new(number, number, false);

  element.innerHTML = '';
  $('#call-home-number').html($('#call-home-number').text().replace(/.$/g, ''));

  if ($('#call-home-number').text().trim() === '') {
    $('#call-delete').fadeOut(250);
    $('.call-addtocontact').fadeOut(250);
  }
});

$(document).on('click', '.call-addtocontact', function () {
  var number = $('#call-home-number').text().trim();
  contact.management.add('', number);
});

// Recent

$(document).on('click', '.recent-calls-element', function () {
  var name = $(this).data('name');
  var number = $(this).data('number');
  var iscontact = $(this).data('iscontact');
  var isblocked = $(this).data('isblocked');
  var isanonym = $(this).data('isanonym');
  if (!isanonym) {
    sendData('call:history:loadnumber', {
      number: number,
    });
  }

  contact.loadcontact(number);
});

$(document).on('click', '.call-block-element', function () {
  var name = $(this).data('name');
  var number = $(this).data('number');
  var iscontact = $(this).data('iscontact');
  contact.loadcontact(number);
});

// call
call.new = function (
  number,
  label,
  incomming = false,
  phoneopen = false,
  type = 'call',
  participants = []
) {
  if (call.activ.state == true) {
    return;
  }

  call.call.state = 'big';
  call.activ.state = true;
  call.activ.number = number;
  call.activ.label = label;

  if (incomming) {
    call.activ.type = 'incomming';
    if (phoneopen) {
      call.call.small.show();
    } else {
      call.call.big.show();
    }
    call.sound.play('incomming');

    if (type == 'groupcall') {
      for (x of participants) {
        call.groupcall.add(x.number, x.name);
      }
    }
  } else {
    call.activ.type = 'outgoing';
    if (phoneopen) {
      call.call.small.show();
    } else {
      call.call.big.show();
    }
    call.sound.play('outgoing');
    sendData('call:start', {
      number: number,
    });
  }
};

call.end = function () {
  if (call.call.state == 'small') {
    call.call.small.hide();
  } else {
    Main.openapp = '';
    call.call.big.hide();
  }

  call.activ.type = 'none';
  call.activ.state = 'none';
  call.activ.number = '';
  call.activ.label = '';

  call.sound.stop('incomming');
  call.sound.stop('outgoing');

  clearInterval(call.activ.timer);
};

call.accept = () => {
  call.activ.type = 'ongoing';
  if (call.call.state == 'small') {
    call.call.small.show();
  } else {
    call.call.big.show();
  }

  call.sound.stop('incomming');
  call.sound.stop('outgoing');

  call.timer();
};

call.timer = () => {
  $('#call-type-home-time').html('00:00');
  $('#call-small-time').html('00:00')
  var minutes = 0;
  var seconds = 0;
  call.activ.timer = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    var displaym = minutes;
    var displays = seconds;
    if (minutes < 10) displaym = '0' + minutes;
    if (seconds < 10) displays = '0' + seconds;
    var display = `${displaym}:${displays}`;
    $('#call-type-home-time').html(display);
    $('#call-small-time').html(display)
  }, 1000);
};

// big
call.call.big.show = function () {
  var type = call.activ.type;
  var label = call.activ.label;

  $('#call-type-home-decline').removeClass('pulseanimation');
  $('#call-type-home-accept').removeClass('pulseanimation');

  $('#call-type-home-accept').hide(0);
  $('#call-type-home-decline').hide(0);

  if (type == 'incomming' || type == 'outgoing') {
    $('#call-type-home-time').hide(0);
    $('#call-type-actions').hide(0);
    $('#call-type-home-decline').addClass('pulseanimation');
    $('#call-type-home-accept').addClass('pulseanimation');

    if (type == 'incomming') {
      $('#call-type-home-accept').show(0);
      $('#call-type-home-decline').show(0);
    }
    if (type == 'outgoing') $('#call-type-home-decline').show(0);
  } else {
    $('#call-type-home-time').show(0);
    $('#call-type-actions').show(0);
    $('#call-type-home-decline').show(0);
  }

  $('#call-type-home-name').html(label);

  $('#call-type').css({
    'z-index': '2',
  });
  $('#call-type').animate(
    {
      left: '0%',
    },
    appOpenspeed
  );

  Main.openapp = 'call-type';
  ShowHomebar();
};

call.call.big.hide = function () {
  Home();
};

// small
call.call.small.show = function () {
  var label = call.activ.label;
  $('#call-small-label').html(label);

  $('#call-small-decline').show();
  $('#call-small-accept').show();
  $('#call-small-close').show();

  if (call.activ.type == 'incomming') {
    $('#call-small-close').hide();
    $('#call-small-time').hide(0);
  } else {
    $('#call-small-accept').hide();
    if (call.activ.type == 'outgoing') $('#call-small-time').hide(0);
  }

  $('.call-small-incomming').fadeIn(appOpenspeed);
  $('.call-small-incomming').css('display', 'flex');
  call.call.state = 'small';
};

call.call.small.hide = function () {
  $('.call-small-incomming').fadeOut(appOpenspeed);
  call.call.state = 'none';
};

$(document).on('click', '.call-decline', function () {
  sendData('call:stop');
});

$(document).on('click', '.call-accept', function () {
  sendData('call:accept');
});

$(document).on('click', '#call-small-makebig', function () {
  call.call.small.hide();
  call.call.big.show();
});

$(document).on('click', '#call-small-close', function () {
  call.call.header.show();
});

// header
$(document).on('click', '.call-header-ongoing', function () {
  call.call.header.hide();
  call.call.small.show();
});

call.call.header.show = function () {
  call.call.small.hide();
  $('.call-header-ongoing').fadeIn(appOpenspeed);
  $('.call-header-ongoing').css('display', 'flex');
  call.call.state = 'header';
};

call.call.header.hide = function () {
  $('.call-header-ongoing').fadeOut(appOpenspeed);
  call.call.state = 'none';
};

// Sound
call.sound.set = function (type, url) {
  if (type == 'incomming') {
    call.sound.incomming.sound = new Audio(url);
  } else {
    call.sound.outgoing.sound = new Audio(url);
  }
};

call.sound.play = function (type) {
  var sound = call.sound.incomming.sound;

  if (type == 'outgoing') {
    sound = call.sound.outgoing.sound;
  }

  sound.loop = true;
  sound.currentTime = 0;
  sound.volume = call.sound.volume;
  sound.play();
};

call.sound.stop = function (type) {
  var sound = call.sound.incomming.sound;

  if (type == 'outgoing') {
    sound = call.sound.outgoing.sound;
  }
  if (sound != null) {
    sound.pause();
  }
};

call.sound.setvolume = function (vol) {
  if (vol == null) return;
  var num;
  if (vol < 1 && vol >= 0) {
    call.sound.volume = vol;
    num = vol * 100;
    sendData('changeringtonevolume', {
      vol: num,
    });
  } else if (vol >= 1 && vol <= 99) {
    num = vol;
    call.sound.volume = vol * 0.01;
    sendData('changeringtonevolume', {
      vol: num,
    });
  } else {
    sendData('notify', {
      locale: 'invalidnumber',
      type: 'error',
    });
  }
};

// Inputarea.show(
//   'ringtonevolume',
//   'fa-solid fa-volume-high',
//   'setringtonevolume',
//   'number',
//   false
// );

// incall actions
call.call.hideactions = (data) => {
  var array = data;
  for (let i = 0; i < array.length; i++) {
    const x = array[i];

    $('.call-type-action').each(function (index, element) {
      var e = $(this);
      var action = $(this).data('action');

      if (x.action == action) {
        if (x.show) $(this).show(0);
        if (!x.show) $(this).hide(0);
      }
    });
  }
};

$(document).on('click', '.call-type-action', function () {
  var e = $(this);
  var action = $(this).data('action');

  if (action == 'mute') {
    if (e.hasClass('redcolor')) return;
    if (e.hasClass('accent-colorf')) {
      e.removeClass('accent-colorf');
    } else {
      e.addClass('accent-colorf');
    }
  } else if (action == 'volumeup' || action == 'volumedown') {
    if (e.hasClass('redcolor')) return;
    $('.call-type-action').each(function (index, element) {
      var e = $(this);
      var action = $(this).data('action');

      if ('mute' == action) {
        e.removeClass('accent-colorf');
      }
    });
  } else if (action == 'adduser') {
    SlideUpPage.show('share-messages');
    SlideUpPageContact = 'Call';

    sendData('slideuppage:contact:LoadData', {
      app: 'Call',
    });
  } else if (action == 'speaker') {
    var state = true;
    if (e.hasClass('accent-colorf')) {
      e.removeClass('accent-colorf');
      $('.call-type-action').each(function (index, element) {
        var t = $(this);
        if (t.data('action') != 'speaker' && t.data('action') != 'adduser') {
          t.removeClass('accent-colorf');
          t.addClass('redcolor');
        }
      });
    } else {
      state = false;
      e.addClass('accent-colorf');
      $('.call-type-action').each(function (index, element) {
        var t = $(this);
        if (t.data('action') != 'speaker' && t.data('action') != 'adduser')
          t.removeClass('redcolor');
      });
    }
  }

  sendData('call:action', {
    action: action,
    state: state,
  });
});

call.groupcall.add = function (number, name) {
  var groupcall =
    'Groupcall <i class="fa-solid fa-circle-info" id="call-groupcall-info" style="font-size: 0.7em"></i>';

  var newitem = `<div class="phone-app-icon-element groupcall-participant" data-number=${number}>
  <i class="fa-solid fa-plus"></i>
  <font>${name}</font>
</div>`;

  $('#call-type-home-name').html(groupcall);
  $('#groupcall-member-elements').append(newitem);
};

call.groupcall.remove = function (number) {
  $('.groupcall-participant').each(function (index, element) {
    let e = $(this);
    if (e.data('number') == number) {
      e.remove();
    }
  });
};

$(document).on('click', '#call-groupcall-info', function () {
  SlideUpPage.show('groupcall-member');
});
