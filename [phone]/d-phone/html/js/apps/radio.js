radio = {
  hidden: false,
  joined: false,
};

$(function () {
  window.addEventListener('message', function (event) {
    $('#phone-constant-radio').hide(0);
    var v = event.data;
    var item = event.data;

    if (v.app == 'radio' && v.task == 'showicon') {
      $('#radioicon').show(0);
      // $('#taxiicon').show(0);
      // $('#taxijobicon').show(0);
    } else if (item.enablesalty) {
      $('#phone-constant-radio').show();
    } else if (item.radioicon) {
      radio.showIcon(item.state);
    }
  });
});

radio.showIcon = function (state) {
  if (state == true) $('#radioicon').show(0);
  if (state == false) $('#radioicon').hide(0);
};

radio.show = function () {
  ShowHomebar();
  $('#radio').css({
    'z-index': '2',
  });
  $('#radio').animate(
    {
      left: '0%',
    },
    appOpenspeed
  );

  Main.openapp = 'radio';
};

$(document).on('click', '#radio-home-join', function () {
  var input = $('#radio-home-freq').val();

  sendData('setRadio', { freq: input, freqhidden: radio.hidden });
});

$(document).on('click', '#radio-home-leave', function () {
  var input = $('#radio-home-freq').val();

  sendData('leaveRadio', { freq: input });
});

$(document).on('click', '#radio-home-toggle', function () {
  if (document.getElementById('radio-home-freq').type == 'password') {
    document.getElementById('radio-home-freq').type = 'number';
    radio.hidden = false;
    $('#radio-home-toggle').html(getLocal('hide'));
  } else {
    document.getElementById('radio-home-freq').type = 'password';
    radio.hidden = true;
    $('#radio-home-toggle').html(getLocal('show'));
  }
});

let constantradio = false;
$(document).on('click', '#phone-constant-radio', function () {
  if (constantradio == false) {
    constantradio = true;
    $('#phone-constant-radio').addClass('disphone-constant-radio');
    if (locale == 'de') {
      $('#phone-constant-radio').html(localede.disableconstant);
    } else {
      $('#phone-constant-radio').html(locale.disableconstant);
    }

    sendData('constantradio', { state: constantradio });
  } else {
    constantradio = false;
    $('#phone-constant-radio').removeClass('disphone-constant-radio');
    if (locale == 'de') {
      $('#phone-constant-radio').html(localede.enableconstant);
    } else {
      $('#phone-constant-radio').html(locale.enableconstant);
    }
    sendData('constantradio', { state: constantradio });
  }
});
