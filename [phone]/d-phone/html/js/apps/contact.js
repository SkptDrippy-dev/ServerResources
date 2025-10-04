contact = {
  home: {},
  current: {},
  management: {
    mode: 'edit',
  },
};

$(function () {
  window.addEventListener('message', function (event) {
    var v = event.data;

    if (v.app == 'contact' && v.task == 'home:load') {
      contact.home.load(v.html);
    }

    if (v.app == 'contact' && v.task == 'load') {
      contact.open(
        'contact',
        v.name,
        v.number,
        v.callhtml,
        v.isContact,
        v.isBlocked,
        v.isAnonym,
        v.isFavourit,
        v.isCallable,
        v.callNumber,
        v.isService
      );
    }
  });
});

contact.show = function () {
  ShowHomebar();

  call.footer.open('contact');

  $('#call').css({
    'z-index': '1',
  });
  $('#call').animate(
    {
      left: '0%',
    },
    400
  );

  Main.openapp = 'call';
};

// Home
contact.home.load = (html) => {
  $('#contact-home-elements').html(html);
};

$(document).on('click', '.contact-element', function () {
  contact.loadcontact($(this).data('number'));
});

$(document).on('click', '#contacts-home-add', function () {
  contact.management.add();
});

// Show Contact
contact.loadcontact = function (number) {
  sendData('contact:LoadData', {
    number: number,
  });
};

// Open the Add Contact SlideUpPage
contact.open = (
  mode = 'contact',
  name = 'none',
  number = 'none',
  callhtml = 'none',
  isContact = true,
  isBlocked = false,
  isAnonym = false,
  isFavourit = false,
  isCallable = true,
  callNumber = null,
  isService = false
) => {
  // isContact
  if (callNumber == null || callNumber == '') {
    $('#contactpage-number').html(number);
  } else {
    $('#contactpage-number').html(callNumber);
  }

  if (isContact) {
    $('#contactpage-addcontact').hide(0);
    $('#contactpage-favourit').show(0);
    $('#contactpage-edit').show(0);
    $('#contactpage-share').show(0);
    $('#contactpage-delete').show(0);
    if (isFavourit) {
      $('#contactpage-favourit').hide(0);
      $('#contactpage-unfavourit').show(0);
    } else {
      $('#contactpage-favourit').show(0);
      $('#contactpage-unfavourit').hide(0);
    }
  }
  if (!isContact) {
    $('#contactpage-addcontact').show(0);
    $('#contactpage-favourit').hide(0);
    $('#contactpage-edit').hide(0);
    $('#contactpage-share').hide(0);
    $('#contactpage-delete').hide(0);
    $('#contactpage-favourit').hide(0);
    $('#contactpage-unfavourit').hide(0);

    $('#contactpage-recentcallhistory').hide(0);
  }

  if (isCallable) {
    $('#contactpage-call').show();
  } else {
    $('#contactpage-call').hide();
  }

  // isBlocked
  if (isBlocked) $('#contactpage-block').hide(0);
  if (!isBlocked) $('#contactpage-block').show(0);

  if (isBlocked) $('#contactpage-unblock').show(0);
  if (!isBlocked) $('#contactpage-unblock').hide(0);

  // Falls mode recent-calls ist, werden noch die letzten Interaktionen angezeigt

  $('#contactpage-recentcallhistory').show(0);
  $('#contactpage-recentcallhistory-elements').html(callhtml);

  contact.current.name = name;
  contact.current.number = number;
  contact.current.isService = isService;
  $('#contactpage-name').html(name);

  if (isAnonym) {
    $('#contactpage-block').hide(0);
    $('#contactpage-unblock').hide(0);
    $('#contactpage-addcontact').hide(0);
    $('#contactpage-call').hide(0);
    $('#contactpage-message').hide(0);
  }

  SlideUpPage.show('contactpage');
};

// Add Contact
$(document).on('click', '#contactpage-addcontact', function () {
  contact.management.add('', contact.current.number);
});

// Favourit
$(document).on('click', '#contactpage-favourit', function () {
  SlideUpPage.hide();
  var number = contact.current.number;
  var name = contact.current.name;
  sendData('contact:favourite', {
    name: name,
    number: number,
  });
});

$(document).on('click', '#contactpage-unfavourit', function () {
  SlideUpPage.hide();
  var number = contact.current.number;
  var name = contact.current.name;
  sendData('contact:favourite', {
    name: name,
    number: number,
  });
});

// Delete
$(document).on('click', '#contactpage-delete', function () {
  SlideUpPage.hide();
  var number = contact.current.number;
  var name = contact.current.name;
  sendData('contact:delete', {
    name: name,
    number: number,
  });
});

// Edit
$(document).on('click', '#contactpage-edit', function () {
  contact.management.edit();
});

// Call
$(document).on('click', '#contactpage-call', function () {
  SlideUpPage.hide();
  var number = contact.current.number;
  var name = contact.current.name;
  call.new(number, name, false, true);
});

// Message
$(document).on('click', '#contactpage-message', function () {
  SlideUpPage.hide();

  contact.current.isService
    ? services.loadchat(contact.current.number)
    : messages.loadchat(contact.current.number);
});

// Send GPS
$(document).on('click', '#contactpage-gps', function () {
  SlideUpPage.hide();
  var number = contact.current.number;

  if (contact.current.isService == false) {
    sendData('sendgps', {
      number: number,
    });
    messages.loadchat(number);
  } else {
    services.loadchat(number);
    setTimeout(() => {
      messages.SendGPS();
    }, 500);
  }
});

// Share
$(document).on('click', '#contactpage-share', function () {
  var number = contact.current.number;
  var name = contact.current.name;

  sendData('sharecontact', {
    name: name,
    number: number,
  });
});

// Block
$(document).on('click', '#contactpage-block', function () {
  var number = contact.current.number;

  sendData('call:block', {
    number: number,
    state: true,
  });

  SlideUpPage.hide();
});

// Unblock
$(document).on('click', '#contactpage-unblock', function () {
  var number = contact.current.number;
  var name = contact.current.name;

  sendData('call:block', {
    number: number,
    state: false,
  });

  SlideUpPage.hide();
});

// Edit
contact.management.add = (name = '', number = '') => {
  $('#addcontactpage-nameinput').val(name);
  $('#addcontactpage-number').val(number);
  contact.management.mode = 'add';
  SlideUpPage.show('addcontactpage');
  useLocal($('#addcontactpage-name'), 'AddContact');
};

contact.management.edit = () => {
  $('#addcontactpage-nameinput').val(contact.current.name);
  $('#addcontactpage-lastname').val('');
  $('#addcontactpage-number').val(contact.current.number);
  contact.management.mode = 'edit';
  SlideUpPage.show('addcontactpage');
  useLocal($('#addcontactpage-name'), 'EditContact');
};

$(document).on('click', '#addcontactpage-submit', function () {
  var name = $('#addcontactpage-nameinput').val();
  var lastname = $('#addcontactpage-lastname').val();
  var number = $('#addcontactpage-number').val();
  if (contact.management.mode == 'add') {
    sendData('contact:add', {
      name: name,
      lastname: lastname,
      number: number,
    });
  } else {
    sendData('contact:edit', {
      name: name,
      lastname: lastname,
      number: number,
      old_name: contact.current.name,
      old_number: contact.current.number,
    });
  }

  $('#addcontactpage-nameinput').val('');
  $('#addcontactpage-lastname').val('');
  $('#addcontactpage-number').val('');
  SlideUpPage.hide();
});

// Search bars
setTimeout(() => {
  var contactssearchbar =
    document.forms['contacts-home-searchbar'].querySelector('input');
  contactssearchbar.addEventListener('keyup', function (e) {
    const term = e.target.value.toLocaleLowerCase();
    var notAvailable = document.getElementById('notAvailable');
    //   $("#titleMain").toggle($('input').val().length == 0);
    var hasResults = false;

    $('.contact-element2').each(function () {
      if (
        $(this)
          .data('name')
          .toString()
          .toLowerCase()
          .includes(term.toString()) ||
        $(this)
          .data('number')
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
}, 1000);
