messagesNew = {
  images: [],
  addImage: function (image) {
    messagesNew.images.push(image);
  },
  getImageHtml: function (position, url) {
    return `<div class="message-chat-image-area-element" data-position=${position}>
    <img src="${url}" alt="Avatar">
    <i class="fa-solid fa-circle-xmark messages-deleteimage" ></i>
</div>`;
  },
};

// 
$(document).on('click', '#messages-header', function () {
  let number = messages.chat.number;
  contact.loadcontact(number);
});


$(document).on('click', '.messages-deleteimage', function () {
  var position = $(this).parent().data('position');

  messages.RemoveImageNew(position);
});

// 
$(document).on('click', '#message-action-menu-photo', function () {

  sendData('messages:chat:takephoto');
});

// 
$(document).on('click', '.message-gps-button', function () {
  var x = $(this).data('x');
  var y = $(this).data('y');
  var z = $(this).data('z');
  sendData('setgps', {
    x: x,
    y: y,
    z: z,
  });
});