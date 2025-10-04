const homescreen_div = document.getElementById('homescreen');
const handle_div = document.getElementById('handle');
let homescreenHeight = homescreen_div.offsetHeight;

let homescreenTopPercentage = 100;
let topPercentage = -100;

homescreen = {
  enable: true,
  activ: true,
  locked: false,
};

homescreen.firstStart = () => {
  if (homescreen.enabled == false) return;
  homescreen.enable();
  homescreen.show();
  homescreen.lock();
};

setTimeout(() => {
  homescreen.firstStart();
}, 500);

window.addEventListener('message', (event) => {
  const { app, task, html } = event.data;

  if (app === 'homescreen') {
    if (task === 'disable') {
      homescreen.disable();
    } else if (task === 'enable') {
      homescreen.enable();
    } else if (task === 'set_date') {
      $('#homescreen-date').html(html);
    } else if (task === 'set_config') {
      homescreen.enabled = event.data.enabled;
      if (event.data.requireUnlock == false) {
        homescreen.unlock();
      }

      if (event.data.showOnStart == false || homescreen.enabled == false) {
        homescreen.hide();
      }
    }

    if (task === 'loadIcons') {
      homescreen.loadIcons(event.data.icons);
    }
  }
});

homescreen.disable = () => {
  $('#homescreen').hide();
  $('#handle').hide();
};

homescreen.enable = () => {
  $('#homescreen').show();
  $('#handle').show();
};

homescreen.show = (instant = false) => {
  if (homescreen.enabled == false) return;
  var time = 400;
  if (instant == true) {
    time = 0;
  }
  $('#homescreen').show();
  $('#homescreen').animate(
    {
      top: '0px',
    },
    time
  );

  homescreenTopPercentage = 0;
  topPercentage = 0;
  homescreen.activ = true;
};

homescreen.hide = () => {
  $('#homescreen').animate(
    {
      top: '-100%',
    },
    200
  );

  homescreenTopPercentage = -100;
  topPercentage = -100;
  homescreen.activ = false;
  setTimeout(() => {
    // $('#homescreen').hide();
  }, 200);
};

$(document).on('click', '#homescreen-uinotify-clear', function (e) {
  $('.uinotify_element').each(function (index, element) {
    uinotify.remove($(this));
  });
  var e = $('#homescreen-uinotify-clear');
  setTimeout(() => {
    e.fadeOut(0);
  }, 300);
});

$(document).on('click', '#homescreen-homebar', function (e) {
  if (homescreen.locked == true) return;
  homescreen.hide();
});

// Make the Homescreen draggable
let isDragging = false;
let startPosition = 0;
let currentY = 0;
let deltaY = 0;

handle_div.addEventListener('mousedown', startDragging);
handle_div.addEventListener('touchstart', startDragging);

homescreen_div.addEventListener('mousedown', startDragging);
homescreen_div.addEventListener('touchstart', startDragging);

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

document.addEventListener('mouseup', stopDragging);
document.addEventListener('touchend', stopDragging);

function startDragging(event) {
  if (homescreen.locked) return;
  if (!homescreen.enabled) return;
  startPosition =
    event.type === 'mousedown' ? event.clientY : event.touches[0].clientY;
  isDragging = true;
}

function drag(event) {
  if (!isDragging) return;
  if (homescreen.locked == true) return;
  if (!homescreen.enabled) return;
  event.preventDefault();

  if (event.type === 'mousemove') {
    currentY = event.clientY;
  } else {
    currentY = event.touches[0].clientY;
  }
  deltaY = currentY - startPosition;

  if (homescreenTopPercentage == 0 && deltaY > 0) return;
  topPercentage = Math.max(
    homescreenTopPercentage + (deltaY / homescreenHeight) * 100,
    -100
  );

  // console.log(homescreenTopPercentage);

  homescreen_div.style.top = `${topPercentage}%`;
}

function stopDragging(event) {
  if (!isDragging) return;
  isDragging = false;
  let moved = false;

  if (deltaY < -100) {
    homescreen_div.style.top = `${topPercentage}%`;
    moved = true;
    homescreen.hide();
  }

  if (deltaY > 100) {
    homescreen_div.style.top = `${topPercentage}%`;
    moved = true;
    homescreen.show();
  }

  if (moved == false) {
    homescreen_div.style.top = `${homescreenTopPercentage}%`;
  }
}

// Lock
setTimeout(() => {
  const lockIcon = document.querySelector('.lockicon');
  lockIcon.addEventListener('click', () => {
    homescreen.unlock();
  });
}, 1000);

homescreen.unlock = () => {
  $('.lockIcon').addClass('unlock-icon');
  setTimeout(() => {
    $('#homescreen-lockicon').removeClass('fa-lock');
    $('#homescreen-lockicon').addClass('fa-unlock');
    homescreen.locked = false;
    $('#homescreen-homebar').fadeIn(400);
    $('.lockIcon').removeClass('unlock-icon');

    $('.uinotify_element').each(function (index, element) {
      var e = $(this);
      e.show();
      e.children('div.text.uinotifyclickable')
        .children('div.message')
        .fadeIn(400);
    });
  }, 500);
  setTimeout(() => {
    $('.lockicon').fadeOut(500);
    $('#homescreen-fingerprint').fadeOut(500);
    homescreen.hide()
  }, 1000);
};

homescreen.lock = () => {
  $('.lockicon').fadeIn(500);
  $('.lockIcon').removeClass('unlock-icon');
  $('#homescreen-fingerprint').fadeIn(500);
  homescreen.locked = true;

  $('#homescreen-lockicon').addClass('fa-lock');
  $('#homescreen-lockicon').removeClass('fa-unlock');
  // $('#homescreen-homebar').hide();

  var amount = 0;
  $('.uinotify_element').each(function (index, element) {
    var e = $(this);
    amount++;
    if (amount > 3) e.hide();
    e.children('div.text.uinotifyclickable').children('div.message').hide();
  });
};

// Fingerprint
$(document).on('click', '#homescreen-fingerprint', function (e) {
  $(this).addClass('fingerprint-unlock');
  homescreen.unlock();
  setTimeout(() => {
    $(this).fadeOut(500);
    setTimeout(() => {
      $(this).removeClass('fingerprint-unlock');
    }, 1000);
  }, 1000);
});

// Icons
homescreen.loadIcons = (icons) => {
  const tbl = icons.icons
  const usedIcons = icons.usedIcons
  tbl.forEach((icon) => {
    let show = icon.image;

    $('.phone-application').each(function (index, element) {
      // element == this
      let app = $(this).data('app')
      if (app == icon.app) {

        let imgElement = $(this).children('img');

        if (usedIcons == 'image' || icon.icon == undefined) {
          let tempImage = new Image();
          tempImage.onload = function () {
            imgElement.attr('src', show);
          };
          tempImage.onerror = function () {
            // console.error(`Your ${icon.app} icon is not found!`)
            imgElement.replaceWith(icon.icon);
          };
          tempImage.src = show;
        } else {

          imgElement.replaceWith(icon.icon);
        }
      }
    });
  });
};