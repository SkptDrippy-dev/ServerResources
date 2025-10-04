const form35 = document.getElementById('advertisement-nameval');

form35.addEventListener(
  'mousedown',
  (event) => {
    sendData('SetNuiFocusKeepInputFalse');
  },
  true
);

form35.addEventListener(
  'focus',
  (event) => {
    sendData('SetNuiFocusKeepInputFalse');
  },
  true
);

form35.addEventListener(
  'blur',
  (event) => {
    sendData('SetNuiFocusKeepInputTrue');
  },
  true
);

const form38 = document.getElementById('advertisement-messageval');

form38.addEventListener(
  'mousedown',
  (event) => {
    sendData('SetNuiFocusKeepInputFalse');
  },
  true
);

form38.addEventListener(
  'focus',
  (event) => {
    sendData('SetNuiFocusKeepInputFalse');
  },
  true
);

form38.addEventListener(
  'blur',
  (event) => {
    sendData('SetNuiFocusKeepInputTrue');
  },
  true
);

var DontWalkArray = [
  'business-settings-input-area-input',
  'business-mm-amount',
  'business-member-managerank-area-input',
  'business-teamchat-input',
  'business-dispatch-inputimageurl-input',
  'business-dispatch-input',
  'messages-urlinput',
  // 'twitter-register-username',
  // 'twitter-register-tagname',
  // 'twitter-register-password',
  // 'twitter-login-tagname',
  // 'twitter-login-password',
  // 'twitter-tweet-comment',
  // 'twitter-new-message',
  'general-inputarea-input',
  // AddContact
  'addcontactpage-nameinput',
  'addcontactpage-lastname',
  'addcontactpage-number',
  // 'contacts-home-searchbar-input',
  // Radio
  // 'radio-home-freq',
  // Advertisement
  // 'advertisement-new-name',
  // 'advertisement-new-message',
  // 'bank-sendmoney-input-cardnumber',
  // 'bank-sendmoney-input-amount',
  // 'bank-sendmoney-input-notes',
  // 'services-chat-input',
  // 'icon-input-menu-input'
  // Music
  'music-searchbar-input',
  'music-session-input-code'
];

setTimeout(() => {
  DontWalkArray.forEach(function (item, index, array) {
    var dontwalk = document.getElementById(item);
    if (dontwalk == null) {
      console.log(
        'ERROR : ' + item + ' not found in dontwalk.js')
    } else {
      dontwalk.addEventListener(
        'mousedown',
        (event) => {
          sendData('SetNuiFocusKeepInputFalse');
        },
        true
      );

      dontwalk.addEventListener(
        'focus',
        (event) => {
          sendData('SetNuiFocusKeepInputFalse');
        },
        true
      );

      dontwalk.addEventListener(
        'blur',
        (event) => {
          sendData('SetNuiFocusKeepInputTrue');
        },
        true
      );
    }
  });
}, 2000);
