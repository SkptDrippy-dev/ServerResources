services = {
  footer: new Footer('service', 'null'),
  home: {},
  overview: {},
  chat: {
    firstMessage: false,
  },
  selected: {
    name: null,
    label: null,
    number: null,
  },
  loaded: false,
};

$(document).keyup(function (data) {
  if (data.which == 13) {
    if (services.footer.opentab == 'chat' && Main.openapp == 'services') {
      messages.SendMessage();
    }
  }
});

$(function () {
  window.addEventListener('message', function (event) {
    var v = event.data;

    if (v.app == 'services') {
      if (v.task == 'load') {
        services.Load(v.html);
      }
    }

    if (v.app == 'services' && v.task == 'overview:load') {
      services.overview.Load(v.html);

      let unreadhtml = v.unread;

      if (v.unread > 99) {
        unreadhtml = '99+';
      }

      if (v.unread > 0) {
        $('#services-alerts').show(0);
      } else {
        $('#services-alerts').hide(0);
      }

      $('#services-alerts').html(unreadhtml);

      setlocale()
    }

    if (v.app == 'services' && v.task == 'chat:load') {
      services.chat.Load(v.html, v.number);
      services.chat.firstMessage = v.firstMessage;
    } else if (v.app == 'services' && v.task == 'chat:addmessage') {
      services.chat.AddMessage(v.html, v.me);
    } else if (v.app == 'services' && v.task == 'chat:kickfromchat') {
      services.chat.KickFromChat();
    }
  });
});

setTimeout(() => {
  // services.show();
  services.footer.open('home');
}, 1000);

services.show = function (instant = false) {
  var time = instant ? 0 : 400;

  $('#phone-homebar').show(0);
  $('#service').animate(
    {
      left: '0%',
    },
    time
  );
  Main.openapp = 'services';
};

$(document).on('click', '.servicefooter', function () {
  let newtab = $(this).data('new');
  services.footer.open(newtab);
});

services.Load = function (html) {
  $('#service-elements').html(html);

  services.loaded = true;
};

$(document).on('click', '.phone-service-element', function () {
  var name = $(this).data('name');
  var number = $(this).data('number');
  var label = $(this).data('label');
  var load = $(this).data('load');

  ButtonAnimation(this);

  if (load != null || load == '1') {
    sendData('services:hardload');
  } else {
    contact.loadcontact(number);
  }
});

// Overview
services.overview.Load = function (html) {
  $('#services-overview-container').html('');
  $('#services-overview-container').append(html);
  services.loaded = true;
  var $wrapper = $('#services-overview-container');

  $wrapper
    .find('.services-overview-element')
    .sort(function (a, b) {
      return -a.getAttribute('data-place') + +b.getAttribute('data-place');
    })
    .appendTo($wrapper);

  var skr = ['services-overview-searchbar'];
  DontWalk(skr);
};

services.loadchat = (number) => {
  sendData('services:loadchat', {
    number: number,
  });
};

$(document).on('click', '.services-overview-element', function () {
  var number = $(this).data('number');
  services.footer.open('chat');

  sendData('services:loadchat', {
    number: number,
  });
});

// Chat
$(document).on('click', '#service-chat-return', function () {
  services.footer.open('overview');
  SetTheme('');
  sendData('services:resetopenchat');
});

$(document).on('click', '#service-chat-sendmessage', function () {
  services.chat.SendMessage();
});

services.chat.Load = function (html, number) {
  $('#services-chat-content').html('');
  $('#services-chat-content').append(html);

  SetTheme(number);

  var $wrapper = $('#services-chat-content');
  $wrapper
    .find('.services-overview-element')
    .sort(function (a, b) {
      return -a.getAttribute('data-place') + +b.getAttribute('data-place');
    })
    .appendTo($wrapper);

  services.newMessageHeader = new NewMessageHeader('services');

  Main.openapp = 'services';
  services.show(true);
  services.footer.open('chat');
  setTimeout(() => {
    ScrolltoBottom('services');
  }, 400);
};

services.chat.AddMessage = function (html, me) {
  const chatContent = $('#services-chat-content');
  chatContent.append(html);

  if (me == 'business-message-me') {
    ScrolltoBottom('services');
  } else {
    services.newMessageHeader.show();
  }
};

services.chat.KickFromChat = function () {
  services.footer.open('overview');
  SetTheme('');
};

setTimeout(() => {
  services.newMessageHeader = new NewMessageHeader('services');
}, 1500);

class NewMessageHeader {
  constructor(app) {
    this.app = app;
    const self = this;
    $('#' + self.app + '-chat-content').scroll(function () {
      if (
        $(this).scrollTop() + $(this).innerHeight() >=
        $(this)[0].scrollHeight - 5
      ) {
        $('#' + self.app + '-new-message-header').fadeOut(500);
      }
    });

    var div = `<div class="new-message-header" id="${self.app}-new-message-header">
    <i class="fa-solid fa-arrow-down"></i>
    <font> new message </font>
</div>`;
    $('#' + self.app + '-chat-content').prepend(div);
    $(`#${self.app}-new-message-header`).fadeOut(0);

    $(document).on('click', `#${self.app}-new-message-header`, function () {
      ScrolltoBottom(self.app, 'slow');
    });
  }

  show() {
    if (
      $('#' + this.app + '-chat-content').scrollTop() +
      $('#' + this.app + '-chat-content').innerHeight() >=
      $('#' + this.app + '-chat-content')[0].scrollHeight - 2
    ) {
    } else {
      $(`#${this.app}-new-message-header`).fadeIn(500);
    }
  }

  hide() {
    $(`#${this.app}-new-message-header`).fadeOut(500);
  }
}

ScrolltoBottom = (app, speed) => {
  const chatContent = $('#' + app + '-chat-content');
  const targetScroll = chatContent[0].scrollHeight - chatContent.innerHeight();

  if (speed != null && speed != 'instant') {
    chatContent.animate({ scrollTop: targetScroll }, speed);
  } else {
    chatContent.scrollTop(targetScroll);
  }
};
