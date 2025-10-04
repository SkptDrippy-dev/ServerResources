SelectionArea = {
  div: '#general-selectionarea',
  e: $(this.div),
  task: 'null',
};

setTimeout(() => {
  SelectionArea.e.hide(0);
}, 1000);

SelectionArea.show = function (task) {
  var e = SelectionArea.e;

  SelectionArea.task = task;

  e.show(0);
  BottomSlideUp(SelectionArea.div, 300, 5);

  $('.general-selectionarea-element').each(function (index, element) {
    $(this).hide(0);

    if (
      task == 'services-chat-firstmessage' ||
      task == 'services-chat-firstmessage-gps'
    ) {
      if ($(this).data('action') == 'Service_anonymous') {
        $(this).show(0);
      } else if ($(this).data('action') == 'Service_name') {
        $(this).show(0);
      }
    }
  });
};

SelectionArea.hide = () => {
  BottomSlideDown(SelectionArea.div, 500, -70);
  setTimeout(() => {
    SelectionArea.e.hide(0);
  }, 500);
};

$(document).on('click', '#general-selectionarea-cancel', function () {
  SelectionArea.hide();
});

//
$(document).on('click', '.general-selectionarea-element', function () {
  var action = $(this).data('action');
  // console.log(action);

  if (action == 'Service_anonymous' || action == 'Service_name') {
    var anonymous = false;
    if (action == 'Service_anonymous') anonymous = true;

    sendData('services:chat:firstmessage', { state: anonymous });
    if (SelectionArea.task == 'services-chat-firstmessage-gps') {
      messages.SendGPS(true);
    } else {
      messages.SendMessage(true);
    }
  }

  SelectionArea.hide();
});
