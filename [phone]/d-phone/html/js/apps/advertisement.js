advertisement = {
  footer: new Footer('advertisement', 'null'),
  home: {},
  new: {
    attachments: [],
  },
  price: 100,
};

setTimeout(() => {
  advertisement.footer.open('home');
}, 500);

$(function () {
  window.addEventListener('message', function (event) {
    var v = event.data;

    if (v.app == 'advertisement' && v.task == 'setPrice') {
      advertisement.price = v.price;
    }

    if (v.app == 'advertisement' && v.task == 'home:load') {
      advertisement.home.load(v.html);
    } else if (v.app == 'advertisement' && v.task == 'home:add') {
      advertisement.home.add(v.html);
    }

    if (v.app == 'advertisement' && v.task == 'ad:load') {
      advertisement.ad.load(v.tweetHtml, v.commentsHtml);
    }

    if (v.app == 'advertisement' && v.task == 'new:takephoto') {
      advertisement.new.addattachment(v.url);
    }
  });
});

setTimeout(() => {
  var advertisementNewMessage = document.getElementById(
    'advertisement-new-message'
  );
  var advertisementNewPrice = document.getElementById(
    'advertisement-new-price'
  );

  advertisementNewMessage.addEventListener('input', function () {
    var numCharacters = advertisementNewMessage.innerText.length;
    var price = numCharacters * advertisement.price;
    advertisementNewPrice.innerText = price + '€';
  });
}, 1000);

advertisement.show = function () {
  ShowHomebar();
  SetTheme('advertisement');
  $('#advertisement').css({
    'z-index': '2',
  });
  $('#advertisement').animate(
    {
      left: '0%',
    },
    appOpenspeed
  );

  Main.openapp = 'advertisement';
};

// Footer
$(document).on('click', '.advertisementfooter', function () {
  if (advertisement.footer.footerprogress) return;
  let newtab = $(this).data('new');
  advertisement.footer.open(newtab);
});

// Home
$(document).on('click', '.advertisement-ad-image', function () {
  gallery.camera.open($(this).attr('src'));
});

advertisement.home.load = function (html) {
  var e = $('#advertisement-home-elements');
  e.html(html);
};

advertisement.home.add = function (html) {
  var e = $('#advertisement-home-elements');
  e.prepend(html);
};

$(document).on('click', '.ad-container-new-call', function () {
  var number = $(this).parent().parent().data('number');
  call.new(number, number, false, true);
});

$(document).on('click', '.ad-container-new-message', function () {
  var number = $(this).parent().parent().data('number');
  sendData('loadmessage', {
    number: number,
  });
  selectednumber = number;
});

// New
$(document).on('click', '#advertisement-new-attachment', function () {
  Inputarea.message.show(appOpenspeed);
  $('.censorlayer').fadeIn(appOpenspeed);
  messages.plusmenu.openapp = 'advertisement';
  inputarea.open = 'advertisement';
  $('#messages-chat-sendgps').hide(0);
  $('#business-chat-delete').hide(0);
});

$(document).on('click', '.advertisement-new-attachments-delete', function () {
  var image = $(this).parent().parent().data('img');
  var arr = advertisement.new.attachments;
  var pos = arr.indexOf(image);
  arr.splice(pos, 1);

  $(this).parent().parent().remove();
});

// Attachments
advertisement.new.addattachment = function (imageurl) {
  var html =
    '<div class="phone-app-pictureelement-select"><div class="imagecontainer" data-img="' +
    imageurl +
    '"> <img src="' +
    imageurl +
    '" alt="" class="image"></div><div class="select"><i class="fa-solid fa-xmark advertisement-new-attachments-delete"></i></div></div>';

  $('#advertisement-new-attachments').append(html);

  var arr = advertisement.new.attachments;
  arr.push(imageurl);
};

advertisement.new.clear = function () {
  $('#advertisement-new-name').val('');
  $('#advertisement-new-message').html('');
  advertisement.new.attachments = [];
  $('#advertisement-new-attachments').html('');
  $('#advertisement-new-price').html('0€');
};

$(document).on('click', '#advertisement-action-send', function () {
  advertisement.sendad();
});

advertisement.sendad = function () {
  var name = $('#advertisement-new-name').val();
  var message = $('#advertisement-new-message').html();
  var arr = advertisement.new.attachments;

  sendData('advertisement:newad', {
    name: name,
    message: message,
    attachments: arr,
  });
  advertisement.new.clear();
};
