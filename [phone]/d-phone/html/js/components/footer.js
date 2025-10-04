class Footer {
  constructor(app, open) {
    this.app = app;
    this.lasttabopen = open;
    this.opentab = open;
    this.footerprogress = false;
  }

  open(newopen) {
    if (this.footerprogress) return;
    if (newopen == this.opentab) return;
    this.footerprogress = true;

    var opentab = `#${this.app}-${this.opentab}`;
    var newtab = `#${this.app}-${newopen}`;
    setTimeout(function () {
      // $(opentab).animate(
      //   {
      //     'margin-left': '100%',
      //   },
      //   300
      // );
      var animation = anime({
        targets: opentab,
        'margin-left': '100%',
        duration: appOpenspeed,
        easing: 'easeInOutQuad',
        elasticity: 400,
      });
      $(opentab).css({
        'z-index': 0,
      });
      $(newtab).css({
        'margin-left': '0%',
        'margin-right': '100%',
        'z-index': 1,
      });
      setTimeout(function () {
        // $(newtab).animate(
        //   {
        //     'margin-right': '0%',
        //   },
        //   300
        // );
        let callpage = document.getElementById(`${this.app}-${newopen}`);

        // // Define the animation properties
        var animation = anime({
          targets: newtab,
          'margin-right': '-2%',
          duration: appOpenspeed,
          easing: 'easeInOutQuad',
          elasticity: 400,
          complete: function () {
            // Add a bounce effect at the end of the animation
            anime({
              targets: newtab,
              'margin-right': '0%',
              duration: 500,
              easing: 'easeOutElastic(1, .8)',
              elasticity: 400,
            });
          },
        });
      }, 10);
    }, 10);

    setTimeout(() => {
      this.footerprogress = false;
      this.lasttabopen = this.opentab;
      this.opentab = newopen;
    }, appOpenspeed);

    $(`.${this.app}footer`).each(function (index, element) {
      var e = $(element);
      if (e.data('new') == newopen) {
        $(this).addClass('purplecolor');
      } else {
        $(this).removeClass('purplecolor');
      }
    });
  }

  reset(tab) {
    var opentab = `#${this.app}-${tab}`;
    $(opentab).css({
      'margin-left': '100%',
      'z-index': 0,
    });
  }
}

$(document).on('click', '.footeritem', function () {
  ButtonAnimation(this);
});
