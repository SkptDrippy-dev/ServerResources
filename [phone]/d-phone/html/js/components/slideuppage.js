SlideUpPage = {
  AnimationTime: 300,
  Currentopen: null,
  Lastopen: [],
  Contact: {
    open: 'Gallery',
  },
};

$(function () {
  window.addEventListener('message', function (event) {
    var v = event.data;

    if (v.app == 'slideuppage' && v.task == 'contact:LoadData') {
      SlideUpPage.Contact.load(v.html, v.taskapp);
    }
  });
});

SlideUpPage.show = function (id, bottom) {
  if (SlideUpPage.Lastopen.length > 0) {
    var array = SlideUpPage.Lastopen;
    array.forEach(function (item, index, array) {
      $('#' + item).css({
        'z-index': '3',
      });
    });
    $('#' + id).css({
      'z-index': '4',
    });
  }

  $('#' + id)
    .children('div.elements')
    .animate({ scrollTop: 0 }, 'fast');
  if (bottom == null) {
    $('#' + id).animate(
      {
        bottom: '0',
      },
      SlideUpPage.AnimationTime
    );
  } else {
    $('#' + id).animate(
      {
        bottom: bottom,
      },
      SlideUpPage.AnimationTime
    );
  }

  SlideUpPage.Currentopen = id;
  SlideUpPage.Lastopen.push(SlideUpPage.Currentopen);
};

$(document).on('click', '.slideuppageclose', function () {
  SlideUpPage.hide();
});

SlideUpPage.hide = function () {
  let open = SlideUpPage.Currentopen;
  let lastopenarr = SlideUpPage.Lastopen;
  let lastopen = lastopenarr[lastopenarr.length - 1];
  $('#' + open).animate(
    {
      bottom: '-95%',
    },
    SlideUpPage.AnimationTime
  );

  setTimeout(function () {
    $('#' + open).css({
      'z-index': '3',
    });
  }, SlideUpPage.AnimationTime);

  gallery.closeslidedown(open);

  if (SlideUpPage.Currentopen == 'contactpage') {
    sendData('contact:resetOpen');
  }
  SlideUpPage.Currentopen = lastopen;
  SlideUpPage.Lastopen.pop();
};

SlideUpPage.hideall = function () {
  let open = SlideUpPage.Currentopen;
  let lastopenarr = SlideUpPage.Lastopen;

  lastopenarr.forEach((element) => {
    $('#' + element).animate(
      {
        bottom: '-95%',
      },
      SlideUpPage.AnimationTime
    );

    setTimeout(function () {
      $('#' + element).css({
        'z-index': '3',
      });
    }, SlideUpPage.AnimationTime);
  });

  gallery.closeslidedown(open);

  SlideUpPage.Currentopen = null;
  SlideUpPage.Lastopen = [];
};

// SlideUpPage contact
SlideUpPage.Contact.load = function (html, app) {
  $('#share-messages-elements').html('');
  $('#share-messages-elements').html(html);
  SlideUpPage.Contact.open = app;
  SlideUpPage.show('share-messages');
};

$(document).on('click', '.checkbox', function () {
  if ($(this).hasClass('checked')) {
    $(this).removeClass('checked');
  } else {
    $(this).addClass('checked');
  }
});

function IsCheckboxChecked(element) {
  if (element.hasClass('checked')) return true;
  return false;
}

$(document).on('click', '#share-messages-submit', function () {
  var receivers = [];

  $('.sharemessageelement').each(function (i, e) {
    if ($(this).children('div').hasClass('checked')) {
      let number = $(this).data('number');
      let name = $(this).data('name');
      receivers.push({
        number: number,
        name: name,
      });
    }
  });
  if (receivers.length == 0) return;
  if (SlideUpPage.Contact.open == 'Gallery') {
    let images = gallery.footer.select.selected;
    sendData('gallery:share:chat', {
      receivers: receivers,
      images: images,
    });
    gallery.footer.select.selected = [];
    SlideUpPage.hide();
  } else if (SlideUpPage.Contact.open == 'Call') {
    sendData('groupcall:add', {
      receivers: receivers,
    });
    $.each(receivers, function (indexInArray, v) {
      call.groupcall.add(v.number, v.name);
    });
    SlideUpPage.hide();
  } else {
    SlideUpPage.hide();
  }
});

$(document).on('click', '#share-messages-close', function () {
  gallery.footer.select.selected = [];
});

$(document).on(
  'mousedown touchstart',
  '.phone-app-slideuppage',
  function (event) {
    var slideuppage = $(this);
    var startY, currentY;
    let y = 0;
    slideuppage.css('cursor', 'grab');

    function handleMove(y) {
      slideuppage.css('cursor', 'grab');
      if (y - startY > 50) {
        y = y;
        SlideUpPage.hide();
      }
    }

    if (event.type === 'mousedown') {
      slideuppage.css('cursor', 'grab');
      startY = event.clientY;
      $(document).on('mousemove', function (event) {
        slideuppage.css('cursor', 'grab');
        currentY = event.clientY;
        handleMove(currentY);
      });
    }

    $(document).on('mouseup touchend', function (event) {
      // slideuppage.removeClass('grab');
      if (event.type === 'touchend') {
        slideuppage.off('touchmove');
      } else if (event.type === 'mouseup') {
        $(document).off('mousemove');
        slideuppage.css('cursor', 'none');
      }

      // Only close slide-up page if mouse button is released while over the page
      var slideuppageTop = slideuppage.offset().top;
      var slideuppageHeight = slideuppage.outerHeight();
      var slideuppageBottom = slideuppageTop + slideuppageHeight;
      var mousePosY = event.pageY || event.originalEvent.touches[0].pageY;
      if (
        slideuppage.is(':visible') &&
        mousePosY >= slideuppageTop &&
        mousePosY <= slideuppageBottom &&
        y - startY > 50
      ) {
        SlideUpPage.hide();
      }
    });
  }
);
