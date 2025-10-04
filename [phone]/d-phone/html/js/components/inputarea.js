Inputarea = {
  e: $('#general-inputarea'),
  task: 'null',
  message: {},
};

Inputarea.show = function (task, icon, locl, placeholder, showback) {
  var e = Inputarea.e;
  var icone = $('#general-inputarea-title-i');
  var title = $('#general-inputarea-title');
  var input = $('#general-inputarea-input');
  icone.attr('class', icon);
  title.html(locale[locl]);
  input.attr('placeholder', locale[placeholder]);
  input.val('');

  if (showback) $('#general-inputarea-back').show();
  if (!showback) $('#general-inputarea-back').hide();

  Inputarea.task = task;

  $(".backgroundlayer").fadeIn(500)
  BottomSlideUp('#general-inputarea', 300, 5);
};

$.fn.setClass = function (classes) {
  this.attr('class', classes);
  return this;
};

Inputarea.hide = () => {
  $(".backgroundlayer").fadeOut(500)
  BottomSlideDown('#general-inputarea', 500, -70);
};

$(document).on('click', '#general-inputarea-submit', function () {
  Inputarea.submit();
});

$(document).on('click', '#general-inputarea-cancel', function () {
  Inputarea.hide();
});

Inputarea.submit = () => {
  var val = $('#general-inputarea-input').val();
  if (Inputarea.task === 'twitter:changeName') {
    twitter.settings.setName(val);
  } else if (Inputarea.task === 'ringtonevolume') {
    call.sound.setvolume(val);
  } else {
  }

  Inputarea.hide();
};

Inputarea.message.show = (speed = 300, task = '') => {
  BottomSlideUp('#messages-inputarea', appOpenspeed, 5);

  $('#business-chat-dispatch-unaccept').hide(0);
  $('#business-chat-dispatch-close').hide(0);
  $('#business-dispatch-accept').hide(0);
  // $('business-chat-delete').show(0);

  if (task == 'dispatch') {
    $('#business-chat-delete').hide(0);
    if (business.dispatch.accepted == 1) {
      $('#business-chat-dispatch-unaccept').show(0);
    } else {
      $('#business-dispatch-accept').show(0);
    }
    $('#business-chat-dispatch-close').show(0);
  } else {
    $('#business-chat-delete').show(0);
  }
  $(".backgroundlayer").fadeIn(500)
};

Inputarea.message.hide = (speed = 300, task = '') => {
  BottomSlideDown('#messages-inputarea', appOpenspeed, -70);
  $(".backgroundlayer").fadeOut(500)
};

$(document).on('click', '#messages-inputarea', function () {
  Inputarea.message.hide(appOpenspeed);
  $('.censorlayer').fadeOut(appOpenspeed);
});

$(document).on('click', '#messages-inputarea-image', function () {
  BottomSlideUp('#messages-inputimageurl-area', appOpenspeed, 5);
  Inputarea.message.hide(0);
});

$(document).on('click', '#messages-inputarea-photo', function () {
  // BottomSlideUp('#messages-inputimageurl-area', appOpenspeed, 5);
  // $("#messages-inputarea").fadeOut(appOpenspeed)

  sendData('messages:chat:takephoto');
});

$(document).on('click', '#messages-inputarea-gallery', function () {
  // BottomSlideUp('#messages-inputimageurl-area', appOpenspeed, 5);
  // $("#messages-inputarea").fadeOut(appOpenspeed)

  sendData("gallery:slideuppage", {
    type: "insta",
  })
});