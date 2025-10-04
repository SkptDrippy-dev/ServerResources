twitter = {
  footer: new Footer('twitter', 'null'),
  registerImage: null,
  home: {},
  explore: {},
  user: {},
  tweet: {},
  new: {
    attachments: [],
  },
  settings: {
    cache: { name: null, avatar: null },
  },
};

$(document).keyup(function (data) {
  if (data.which == 13) {
    if (Main.openapp == 'twitter') {
      if (twitter.footer.opentab == 'login') {
        twitter.login();
      } else if (twitter.footer.opentab == 'register') {
        twitter.register();
      } else if (twitter.footer.opentab == 'tweet') {
        twitter.sendcomment();
      }
    }
  }
});

setTimeout(() => {
  // SetTheme('twitter');
  // console.log('test');
  // twitter.show();
  twitter.footer.open('login');
  // twitter.footer.opentab = 'login';
}, 500);

$(function () {
  window.addEventListener('message', function (event) {
    var v = event.data;

    if (v.app == 'twitter' && v.task == 'home:login') {
      twitter.registerImage = null;
      twitter.footer.open('home');
      // twitter.footer.opentab = 'home';
      $('#twitter-login-tagname').val('');
      $('#twitter-login-password').val('');
      $('#twitter-register-tagname').val('');
      $('#twitter-register-username').val('');
      $('#twitter-register-password').val('');
      $('#twitter-register-avatar').val('');
    } else if (v.app == 'twitter' && v.task == 'home:load') {
      twitter.home.load(v.html);
    } else if (v.app == 'twitter' && v.task == 'home:add') {
      twitter.home.add(v.html);
    }

    if (v.app == 'twitter' && v.task == 'explore:load') {
      twitter.explore.load(v.html);
    } else if (v.app == 'twitter' && v.task == 'explore:add') {
      twitter.explore.add(v.html);
    }

    if (v.app == 'twitter' && v.task == 'tweet:load') {
      twitter.tweet.load(v.tweetHtml, v.commentsHtml);
    }

    if (v.app == 'twitter' && v.task == 'user:load') {
      twitter.user.load(
        v.name,
        v.tag,
        v.avatar,
        v.posts,
        v.follower,
        v.follows,
        v.tweetshtml
      );
    }

    if (v.app == 'twitter' && v.task == 'loadProfile') {
      twitter.loadProfile(
        v.name,
        v.tag,
        v.avatar,
        v.posts,
        v.follower,
        v.follows,
        v.tweetshtml,
        v.isFollowing
      );
    } else if (v.app == 'twitter' && v.task == 'loadFollows') {
      twitter.loadFollows(v.html);
    }

    if (v.app == 'twitter' && v.task == 'new:takephoto') {
      twitter.new.addattachment(v.url);
    }

    if (v.app == 'twitter' && v.task == 'settings:takephoto') {
      // Inputarea.message.show(appOpenspeed);
      twitter.new.addattachment(v.url);
    } else if (v.app == 'twitter' && v.task == 'settings:load') {
      twitter.settings.load(v.data);
    }
  });
});

twitter.show = function () {
  ShowHomebar();
  SetTheme('twitter');
  $('#twitter').css({
    'z-index': '2',
  });
  $('#twitter').animate(
    {
      left: '0%',
    },
    appOpenspeed
  );

  Main.openapp = 'twitter';
};

// Footer
$(document).on('click', '.twitterfooter', function () {
  if (twitter.footer.footerprogress) return;
  let newtab = $(this).data('new');
  twitter.footer.open(newtab);
  // twitter.footer.lasttabopen = twitter.footer.opentab;
  // twitter.footer.opentab = newtab;
});

// Login
$(document).on('click', '#twitter-login-confirm', function () {
  twitter.login();
});

twitter.login = function () {
  var tagname = $('#twitter-login-tagname').val();
  var password = $('#twitter-login-password').val();
  var staylogin = IsCheckboxChecked($('#twitter-login-save'));

  sendData('twitter:login', {
    tagname: tagname,
    password: password,
    staylogin: staylogin,
  });
};

$(document).on('click', '#twitter-login-register', function () {
  var tagname = $('#twitter-login-tagname').val();
  var password = $('#twitter-login-password').val();

  $('#twitter-register-tagname').val(tagname);
  $('#twitter-register-password').val(password);

  twitter.footer.open('register');
  // twitter.footer.lasttabopen = 'login';
  // twitter.footer.opentab = 'register';
});

// Register
$(document).on('click', '#twitter-register-return', function () {
  twitter.footer.open(twitter.footer.lasttabopen);
  // twitter.footer.opentab = twitter.footer.lasttabopen;
});

$(document).on('click', '#twitter-register-customize-avatar', function () {
  Inputarea.message.show(appOpenspeed);
  $('.censorlayer').fadeIn(appOpenspeed);
  messages.plusmenu.openapp = 'twitter';
  inputarea.open = 'twitter:register';
  $('#messages-chat-sendgps').hide(0);
  $('#business-chat-delete').hide(0);
});

twitter.setRegisterImage = function (url) {
  var success = SetImage($('#twitter-register-pb'), url);
  if (success == true) {
    $('#twitter-register').animate({ scrollTop: 0 }, 'fast');
    twitter.registerImage = url;
  }
};

SetImage = function (element, url) {

  var img = $('<img />')
    .attr('src', url)
    .on('load', function () {
      var width = this.width;
      var height = this.height;
      var validTypes = ['png', 'jpeg', 'jpg', 'gif', 'bmp'];
      var extension = url.split('.').pop().toLowerCase().split('?')[0];
      if (!validTypes.includes(extension)) {
        Notify('hastobepng', 'error');
        return false;
      } else {
        element.attr('src', url);
        return true;
      }
    })
    .on('error', function () {
      Notify('hastobepng', 'error');
      return false;
    });
  return true;
};

$(document).on('click', '#twitter-register-confirm', function () {
  twitter.register();

  // twitter.footer.open('home');
  // twitter.footer.lasttabopen = 'home';
  // twitter.footer.opentab = 'home';
});

twitter.register = function () {
  var username = $('#twitter-register-username').val();
  var tagname = $('#twitter-register-tagname').val();
  var avatar = twitter.registerImage;
  var password = $('#twitter-register-password').val();
  var staylogin = IsCheckboxChecked($('#twitter-register-save'));
  var success = true;
  if (avatar != null) {
    success = SetImage($('#twitter-register-pb'), avatar);
  }

  if (success == true) {
    sendData('twitter:register', {
      username: username,
      tagname: tagname,
      avatar: avatar,
      password: password,
      staylogin: staylogin,
    });
  }
};

// Logout
$(document).on('click', '#twitter-settings-logout', function () {
  twitter.footer.open('login');
  twitter.footer.opentab = 'login';
  sendData('twitter:logout');
});
// Home
$(document).on('click', '.tweet-comment', function () {
  var id = $(this).parent().parent().parent().data('id');

  sendData('twitter:loadComments', {
    id: id,
  });
  // twitter.footer.open('tweet');
  // twitter.footer.lasttabopen = 'home';
  // twitter.footer.opentab = 'tweet';
});

$(document).on('click', '.twitter-tweet-like', function () {
  var e = $(this);

  var icon = e.children('i');
  var hasLiked = false;
  if (icon.hasClass('accentcolor')) {
    icon.removeClass('accentcolor');
  } else {
    icon.addClass('accentcolor');
  }

  var id = $(this).parent().parent().parent().data('id');

  sendData('twitter:likeTweet', {
    id: id,
  });
});

twitter.home.load = function (html) {
  var e = $('#twitter-home-elements');
  e.html(html);
};

twitter.home.add = function (html) {
  var e = $('#twitter-home-elements');
  e.prepend(html);
};

// Explore
twitter.explore.load = function (html) {
  var e = $('#twitter-explore-elements');
  e.html(html);
};

twitter.explore.add = function (html) {
  var e = $('#twitter-explore-elements');
  e.prepend(html);
};

// Tweet
$(document).on('click', '#twitter-tweet-return', function () {
  twitter.footer.open('home');
  twitter.footer.opentab = 'home';
  sendData('twitter:Comment:clear');
});

twitter.tweet.load = function (tweethtml, commentshtml) {
  $('#twitter-tweet-head-container').html(tweethtml);
  $('#twitter-tweet-comments-container').html(commentshtml);
  twitter.footer.open('tweet');
  twitter.footer.lasttabopen = 'home';
  twitter.footer.opentab = 'tweet';
};

$(document).on('click', '#twitter-action-comment', function () {
  twitter.sendcomment();
});

twitter.sendcomment = function () {
  var text = $('#twitter-tweet-comment').val();

  sendData('twitter:newComment', {
    text: text,
  });

  $('#twitter-tweet-comment').val('');
};

$(document).on('click', '.twitter-tweet-image', function () {
  gallery.camera.open($(this).attr('src'));
});

// New
$(document).on('click', '#twitter-new-attachment', function () {
  Inputarea.message.show(appOpenspeed);
  $('.censorlayer').fadeIn(appOpenspeed);
  messages.plusmenu.openapp = 'twitter';
  inputarea.open = 'twitter-new';
  $('#messages-chat-sendgps').hide(0);
  $('#business-chat-delete').hide(0);
});

$(document).on('click', '.twitter-new-attachments-delete', function () {
  var image = $(this).parent().parent().data('img');
  var arr = twitter.new.attachments;
  var pos = arr.indexOf(image);
  arr.splice(pos, 1);

  $(this).parent().parent().remove();
});

// Attachments
twitter.new.addattachment = function (imageurl) {
  var html =
    '<div class="phone-app-pictureelement-select"><div class="imagecontainer" data-img="' +
    imageurl +
    '"> <img src="' +
    imageurl +
    '" alt="" class="image"></div><div class="select"><i class="fa-solid fa-xmark twitter-new-attachments-delete"></i></div></div>';

  $('#twitter-new-attachments').append(html);

  var arr = twitter.new.attachments;
  arr.push(imageurl);
};

twitter.new.clear = function () {
  $('#twitter-new-message').html('');
  twitter.new.attachments = [];
  $('#twitter-new-attachments').html('');
};

$(document).on('click', '#twitter-action-send', function () {
  twitter.sendtweet();
});

twitter.sendtweet = function () {
  var message = $('#twitter-new-message').html();
  var arr = twitter.new.attachments;

  sendData('twitter:newtweet', {
    message: message,
    attachments: arr,
  });
  twitter.new.clear();
};
// User
$(document).on('click', '.twitter-open-settings', function () {
  twitter.footer.open('settings');
  twitter.footer.lasttabopen = 'user';
  twitter.footer.opentab = 'settings';
});

$(document).on('click', '.twitter-open-userprofil', function () {
  var id = $(this).parent().data('id');
  sendData('twitter:loadProfile', {
    id: id,
  });
  // twitter.footer.lasttabopen = twitter.footer.opentab;
  // twitter.footer.open('user-profil');
  // twitter.footer.opentab = 'user-profil';
});

$(document).on('click', '.twitter-lookup-account', function () {
  var id = $(this).data('id');
  sendData('twitter:loadProfilebyuserid', {
    id: id,
  });

  if (twitter.footer.opentab == 'follows') {
    setTimeout(() => {
      twitter.footer.lasttabopen = 'user';
    }, appOpenspeed);
  }
  // twitter.footer.lasttabopen = twitter.footer.opentab;
  // twitter.footer.open('user-profil');
  // twitter.footer.opentab = 'user-profil';
});

twitter.user.load = function (
  name,
  tag,
  avatar,
  posts,
  follower,
  follows,
  tweetshtml
) {
  $('#twitter-user-name').html(name);
  $('#twitter-user-tag').html(tag);
  $('#twitter-user-avatar').attr('src', avatar);
  $('#twitter-user-stats-posts').html(posts);
  $('#twitter-user-stats-follower').html(follower);
  $('#twitter-user-stats-follows').html(follows);
  $('#twitter-user-elements').html(tweetshtml);

  $('#twitter-settings-name').html(name);
  $('#twitter-settings-tag').html(tag);
  $('#twitter-settings-pb').attr('src', avatar);
};

// User profile
$(document).on('click', '#twitter-user-return', function () {
  if (
    twitter.footer.lasttabopen == 'follows' ||
    twitter.footer.lasttabopen == 'follower'
  ) {
    twitter.footer.open('user');
  } else {
    twitter.footer.open(twitter.footer.lasttabopen);
  }
  sendData('twitter:userProfile:clear');
});

$(document).on('click', '#twitter-follows-return', function () {
  twitter.footer.open(twitter.footer.lasttabopen);
});

twitter.loadProfile = function (
  name,
  tag,
  avatar,
  posts,
  follower,
  follows,
  tweetshtml,
  isFollowing
) {
  $('#twitter-userprofil-name').html(name);
  $('#twitter-userprofil-tag').html(tag);
  $('#twitter-userprofil-avatar').attr('src', avatar);
  $('#twitter-userprofil-stats-posts').html(posts);
  $('#twitter-userprofil-stats-follower').html(follower);
  $('#twitter-userprofil-stats-follows').html(follows);
  $('#twitter-userprofil-elements').html(tweetshtml);

  if (isFollowing == true) {
    $('#twitter-userprofil-follow-font').hide(0);
    $('#twitter-userprofil-unfollow-font').show(0);
    $('#twitter-userprofil-follow').addClass('red');
  } else {
    $('#twitter-userprofil-unfollow-font').hide(0);
    $('#twitter-userprofil-follow-font').show(0);
    $('#twitter-userprofil-follow').removeClass('red');
  }

  if (twitter.footer.opentab != 'user-profil') {
    twitter.footer.lasttabopen = twitter.footer.opentab;
    twitter.footer.open('user-profil');
  }
};

$(document).on('click', '#twitter-userprofil-follow', function () {
  sendData('twitter:follow');
});

twitter.user.getnumber = function (number) {
  var follower = number;

  if (number > 10000) {
    follower = Math.floor(number / 1000) + 'k';
  }

  return follower;
};

$(document).on('click', '#twitter-user-stats-follower-button', function () {
  sendData('twitter:user:loadFollower');
});

$(document).on('click', '#twitter-user-stats-follows-button', function () {
  sendData('twitter:user:loadFollows');
});

twitter.loadFollows = function (html) {
  $('#twitter-follows-elements').html(html);

  twitter.footer.lasttabopen = twitter.footer.opentab;
  twitter.footer.open('follows');
};

// User settings
twitter.settings.load = function (data) {
  $.each(data, function (i, v) {
    var e = $('#twitter-settings-' + i);
    if (v == true) {
      e.addClass('checked');
    } else {
      e.removeClass('checked');
    }
  });
};

$(document).on('click', '#twitter-settings-return', function () {
  twitter.footer.open('user');
  sendData('twitter:settings:clear');
});

$(document).on('click', '#twitter-settings-customize-name', function () {
  Inputarea.show(
    'twitter:changeName',
    'fa-solid fa-tag',
    'changename',
    'Name',
    false
  );
});

$(document).on('click', '#twitter-settings-customize-avatar', function () {
  Inputarea.message.show(appOpenspeed);
  $('.censorlayer').fadeIn(appOpenspeed);
  messages.plusmenu.openapp = 'twitter';
  inputarea.open = 'twitter:settings';
  $('#messages-chat-sendgps').hide(0);
  $('#business-chat-delete').hide(0);
});

twitter.settings.setName = function (name) {
  $('#twitter-settings-name').html(name);
  twitter.settings.cache.name = name;
};

twitter.settings.setImage = function (url) {
  twitter.settings.cache.avatar = url;
  $('#twitter-settings-pb').attr('src', url);
};

$(document).on('click', '#twitter-settings-save', function () {
  twitter.footer.open(twitter.footer.lasttabopen);
  sendData('twitter:changeName', { input: twitter.settings.cache.name });
  sendData('twitter:changeAvatar', { url: twitter.settings.cache.avatar });

  var newTweets = IsCheckboxChecked($('#twitter-settings-all'));
  var follows = IsCheckboxChecked($('#twitter-settings-follows'));
  var comment = IsCheckboxChecked($('#twitter-settings-comment'));
  var like = IsCheckboxChecked($('#twitter-settings-like'));
  var data = {
    all: newTweets,
    follows: follows,
    comment: comment,
    like: like,
  };
  sendData('twitter:settings:notify:update', { data: data });
});
