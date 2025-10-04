ButtonAnimation = (obj) => {
  var animation = anime({
    targets: obj,
    translateY: ['0', '-30px', '0'], // Animate up and down
    duration: 300,
    easing: 'easeInOutQuad',
    elasticity: 400,
  });
};

var buttons = [
  'phone-app-icon-element',
  'business-home-element',
  'phone-business-select-element',
  'phone-app-element-flex',
  'phone-app-element',
];

for (let button of buttons) {
  $(document).on('click', `.${button}`, function () {
    ButtonAnimation(this);
  });
}
