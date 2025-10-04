var themes = {
  available: ['darkchat', 'police', 'ambulance', 'mechanic', 'twitter'],
};
var subtheme = {
  available: ['darkmusic']
};
var activTheme = '';

function SetTheme(theme) {
  var exists = false;
  var subThemeExists = false;
  themes.available.forEach((element) => {
    if (element == theme) exists = true;
  });
  if (theme == '') exists = true;

  subtheme.available.forEach((element) => {
    if (element == theme) subThemeExists = true;
  });



  if (subThemeExists == false) {
    if (exists == false) {
      theme = '';
    }

    activTheme = theme;
    var name = 'white' + theme;
    if (darkmode == true) name = 'dark' + theme;

    document.documentElement.setAttribute('data-theme', name);

    document.documentElement.style.setProperty(
      '--accent-color',
      themesDefaultValues[name].accentcolor
    );
    document.documentElement.style.setProperty(
      '--accent-colorh',
      themesDefaultValues[name].accentcolorh
    );
    $('#settings-changecolor-input').val(themesDefaultValues[name].accentcolor);
    $('#settings-changecolor-hover-input').val(
      themesDefaultValues[name].accentcolorh
    );

    if (
      (themesDefaultValues.usingCustom == true && name == 'white') ||
      (themesDefaultValues.usingCustom == true && name == 'dark')
    ) {
      document.documentElement.style.setProperty(
        '--accent-color',
        themesDefaultValues['custom'].accentcolor
      );
      document.documentElement.style.setProperty(
        '--accent-colorh',
        themesDefaultValues['custom'].accentcolorh
      );
      $('#settings-changecolor-input').val(
        themesDefaultValues['custom'].accentcolor
      );
      $('#settings-changecolor-hover-input').val(
        themesDefaultValues['custom'].accentcolorh
      );
    }
  }
  if (subThemeExists == true) {
    console.log("subtheme")
    if (
      (theme == 'darkmusic')
    ) {
      console.log("darkmusic")
      document.documentElement.style.setProperty(
        '--accent-color',
        themesDefaultValues['darkmusic'].accentcolor
      );
      document.documentElement.style.setProperty(
        '--accent-colorh',
        themesDefaultValues['darkmusic'].accentcolorh
      );
      $('#settings-changecolor-input').val(
        themesDefaultValues['darkmusic'].accentcolor
      );
      $('#settings-changecolor-hover-input').val(
        themesDefaultValues['darkmusic'].accentcolorh
      );
    }
  }

}

themesDefaultValues = {
  usingCustom: false,
  white: {
    accentcolor: '#4A4CF6',
    accentcolorh: '#4042d8',
  },
  dark: {
    accentcolor: '#9799f5',
    accentcolorh: '#9596e7',
  },
  whiteambulance: {
    accentcolor: '#a93131',
    accentcolorh: '#992b2b',
  },
  darkambulance: {
    accentcolor: '#c18e8e',
    accentcolorh: '#b48484',
  },
  whitedarkchat: {
    accentcolor: '#cae9ca',
    accentcolorh: '#b1d5b1',
  },
  darkdarkchat: {
    accentcolor: '#cae9ca',
    accentcolorh: '#b1d5b1',
  },
  whitemechanic: {
    accentcolor: '#0f2b86',
    accentcolorh: '#12339f',
  },
  darkmechanic: {
    accentcolor: '#5f84ff',
    accentcolorh: '#5a7ced',
  },
  whitepolice: {
    accentcolor: '#206d9e',
    accentcolorh: '#1c618c',
  },
  darkpolice: {
    accentcolor: '#9abae4',
    accentcolorh: '#89a6cb',
  },
  whitetwitter: {
    accentcolor: '#89b8da',
    accentcolorh: '#79a5c4',
  },
  darktwitter: {
    accentcolor: '#7cabce',
    accentcolorh: '#6e97b7',
  },
  custom: {
    accentcolor: '#4A4CF6',
    accentcolorh: '#4042d8',
  },
  whitemusic: {
    accentcolor: '#c2d6c1',
    accentcolorh: '#a7b8a6',
  },
  darkmusic: {
    accentcolor: '#88b276',
    accentcolorh: '#6e915f',
  },
};

themes.set = (data) => {
  if (data != null) {
    themesDefaultValues.usingCustom = true;
    themesDefaultValues['custom'].accentcolor = data.accentcolor;
    themesDefaultValues['custom'].accentcolorh = data.accentcolorh;

    SetTheme('');
  } else {
    themesDefaultValues.usingCustom = false;
  }
};
