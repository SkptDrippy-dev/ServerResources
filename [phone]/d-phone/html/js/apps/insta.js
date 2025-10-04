insta = {
    footer: new Footer('insta', 'null'),
    home: {},
    search: {},
    user: {},
    post: {},
    new: {
        attachments: [],
    },
    settings: {
        cache: { name: null, avatar: null, job: null, description: null },
    },
    isSearchbarShown: false,
}

$(document).keyup(function (data) {
    if (data.which == 13) {
        if (Main.openapp == 'insta') {
            if (insta.footer.opentab == 'login') {
                insta.login();
            } else if (insta.footer.opentab == 'register') {
                insta.register();
            } else if (insta.footer.opentab == 'post') {
                insta.sendcomment();
            }
        }
    }
});

setTimeout(() => {
    // SetTheme('insta');
    // insta.show();
    insta.footer.open('login');
    insta.new.clear()
    // insta.footer.opentab = 'login';
}, 500);

$(function () {
    window.addEventListener('message', function (event) {
        var v = event.data;

        if (v.app == 'insta' && v.task == 'home:login') {
            insta.registerImage = null;
            insta.footer.open('home');
            // insta.footer.opentab = 'home';
            $('#insta-login-tagname').val('');
            $('#insta-login-password').val('');
            $('#insta-register-tagname').val('');
            $('#insta-register-username').val('');
            $('#insta-register-password').val('');
            $('#insta-register-avatar').val('');
        } else if (v.app == 'insta' && v.task == 'home:load') {
            insta.home.load(v.html);
        } else if (v.app == 'insta' && v.task == 'home:add') {
            insta.home.add(v.html);
        }

        if (v.app == 'insta' && v.task == 'search:load') {
            insta.search.load(v.html);
        } else if (v.app == 'insta' && v.task == 'search:add') {
            insta.search.add(v.html);
        }

        if (v.app == 'insta' && v.task == 'post:load') {
            insta.post.load(v.postHtml, v.commentsHtml);
        }

        if (v.app == 'insta' && v.task == 'user:load') {
            insta.user.load(
                v.name,
                v.tag,
                v.avatar,
                v.job,
                v.description,
                v.posts,
                v.follower,
                v.follows,
                v.postshtml
            );
        }

        if (v.app == 'insta' && v.task == 'loadProfile') {
            insta.loadProfile(
                v.name,
                v.tag,
                v.avatar,
                v.posts,
                v.follower,
                v.follows,
                v.postshtml,
                v.isFollowing
            );
        } else if (v.app == 'insta' && v.task == 'loadFollows') {
            insta.loadFollows(v.html);
        }

        if (v.app == 'insta' && v.task == 'new:takephoto') {
            insta.new.addattachment(v.url);
        }

        if (v.app == 'insta' && v.task == 'settings:takephoto') {
            // Inputarea.message.show(appOpenspeed);
            insta.new.addattachment(v.url);
        } else if (v.app == 'insta' && v.task == 'settings:load') {
            insta.settings.load(v.data);
        }

        if (v.app == 'insta' && v.task == 'loadPost') {
            insta.loadPost(v.tagname, v.html);
        } else if (v.app == 'insta' && v.task == 'loadComments') {
            insta.loadComments(v.html)
        } else if (v.app == 'insta' && v.task == "loadUserSearch") {
            insta.loadUserSearch(v.html)
        }
    });
});

insta.show = function () {
    ShowHomebar();
    SetTheme('insta');
    $('#insta').css({
        'z-index': '2',
    });
    $('#insta').animate(
        {
            left: '0%',
        },
        appOpenspeed
    );

    Main.openapp = 'insta';
};

$(document).on('click', '.instafooter', function () {
    if (insta.footer.footerprogress) return;
    let newtab = $(this).data('new');
    insta.footer.open(newtab);
});

// 
$(document).on('click', '.insta-new-picture', function () {
    Inputarea.message.show(appOpenspeed);
    $('.censorlayer').fadeIn(appOpenspeed);
    messages.plusmenu.openapp = 'insta';
    inputarea.open = 'insta:new';
    $('#messages-chat-sendgps').hide(0);
    $('#business-chat-delete').hide(0);
});

// Login
$(document).on('click', '#insta-login-confirm', function () {
    insta.login();
});

insta.login = function () {
    var tagname = $('#insta-login-tagname').val();
    var password = $('#insta-login-password').val();
    var staylogin = IsCheckboxChecked($('#insta-login-save'));

    sendData('insta:login', {
        tagname: tagname,
        password: password,
        staylogin: staylogin,
    });
};

$(document).on('click', '#insta-login-register', function () {
    var tagname = $('#insta-login-tagname').val();
    var password = $('#insta-login-password').val();

    $('#insta-register-tagname').val(tagname);
    $('#insta-register-password').val(password);

    insta.footer.open('register');
    // twitter.footer.lasttabopen = 'login';
    // twitter.footer.opentab = 'register';
});

// Register
$(document).on('click', '#insta-register-return', function () {
    insta.footer.open(insta.footer.lasttabopen);
    // twitter.footer.opentab = twitter.footer.lasttabopen;
});

$(document).on('click', '#insta-register-customize-avatar', function () {
    Inputarea.message.show(appOpenspeed);
    $('.censorlayer').fadeIn(appOpenspeed);
    messages.plusmenu.openapp = 'insta';
    inputarea.open = 'insta:register';
    $('#messages-chat-sendgps').hide(0);
    $('#business-chat-delete').hide(0);
});

insta.setRegisterImage = function (url) {
    var success = SetImage($('#insta-register-pb'), url);
    if (success == true) {
        $('#insta-register').animate({ scrollTop: 0 }, 'fast');
        insta.registerImage = url;
    }
};

$(document).on('click', '#insta-register-confirm', function () {
    insta.register();

    // insta.footer.open('home');
    // insta.footer.lasttabopen = 'home';
    // insta.footer.opentab = 'home';
});

insta.register = function () {
    var username = $('#insta-register-username').val();
    var tagname = $('#insta-register-tagname').val();
    var avatar = insta.registerImage;
    var password = $('#insta-register-password').val();
    var job = $('#insta-register-job').val();
    var description = $('#insta-register-description').val();
    var staylogin = IsCheckboxChecked($('#insta-register-save'));
    var success = true;
    if (avatar != null) {
        success = SetImage($('#insta-register-pb'), avatar);
    }

    if (success == true) {
        sendData('insta:register', {
            username: username,
            tagname: tagname,
            avatar: avatar,
            password: password,
            staylogin: staylogin,
            job: job,
            description: description,
        });
    }
};

// Logout
$(document).on('click', '#insta-settings-logout', function () {
    insta.footer.open('login');
    insta.footer.opentab = 'login';
    sendData('insta:logout');
});

// Home
$(document).on('click', '.insta-post-comment', function () {
    console.log("post-comment")
    var id = $(this).parent().parent().data('id');

    sendData('insta:loadComments', {
        id: id,
    });
});


$(document).on('click', '.insta-post-home', function () {
    var icon = $(this);
    console.log("post-like")

    var hasLiked = false;
    if (icon.hasClass('accentcolor')) {
        icon.removeClass('accentcolor');
        icon.removeClass('fa-solid');
        icon.addClass('fa-regular');
    } else {
        icon.addClass('accentcolor');
        icon.removeClass('fa-regular');
        icon.addClass('fa-solid');
    }

    var id = $(this).parent().parent().data('id');

    sendData('insta:likePost', {
        id: id,
    });
});

insta.home.load = function (html) {
    var e = $('#insta-home-elements');
    e.html(html);
};

insta.home.add = function (html) {
    var e = $('#insta-home-elements');
    e.prepend(html);
};

// Search
insta.search.load = function (html) {
    var e = $('#insta-search-elements');
    e.html(html);
};

insta.search.add = function (html) {
    var e = $('#insta-search-elements');
    e.prepend(html);
};

// insta-post-col
$(document).on('click', '.insta-post-col', function () {
    const id = $(this).data('id');
    // insta.footer.open('post');

    sendData('insta:loadPost', { id: id });
});

// Post
$(document).on('click', '#insta-post-return', function () {
    let lastopen = insta.footer.lasttabopen;
    if (lastopen == 'post' || lastopen == "user-profil") {
        lastopen = 'home';
    }
    insta.footer.open(lastopen);
    sendData('insta:Comment:clear');
});

insta.post.load = function (posthtml, commentshtml) {
    $('#insta-post-head-container').html(posthtml);
    $('#insta-post-comments-container').html(commentshtml);
    insta.footer.open('post');
    insta.footer.lasttabopen = 'home';
    insta.footer.opentab = 'post';
};

$(document).on('click', '#insta-action-comment', function () {
    insta.sendcomment();
});

insta.loadPost = function (tagname, html) {
    $("#insta-post-tagname").html(tagname);
    $("#insta-post-content").html(html);
    insta.footer.open('post');
}

insta.loadComments = function (html) {
    $("#insta-comments-elements").html(html)
    SlideUpPage.show('insta-comments')
}

insta.sendcomment = function () {
    var text = $('#insta-post-comment').val();

    sendData('insta:newComment', {
        text: text,
    });

    $('#insta-post-comment').val('');
};

$(document).on('click', '.insta-post-image', function () {
    gallery.camera.open($(this).attr('src'));
});

// New
$(document).on('click', '#insta-new-attachment', function () {
    Inputarea.message.show(appOpenspeed);
    $('.censorlayer').fadeIn(appOpenspeed);
    messages.plusmenu.openapp = 'insta';
    inputarea.open = 'insta-new';
    $('#messages-chat-sendgps').hide(0);
    $('#business-chat-delete').hide(0);
});

$(document).on('click', '.insta-new-attachments-delete', function () {
    var image = $(this).parent().parent().data('img');
    var arr = insta.new.attachments;
    var pos = arr.indexOf(image);
    arr.splice(pos, 1);

    $(this).parent().parent().remove();
});

// Attachments
insta.new.addattachment = function (imageurl) {
    var html =
        '<div class="phone-app-pictureelement-select"><div class="imagecontainer" data-img="' +
        imageurl +
        '"> <img src="' +
        imageurl +
        '" alt="" class="image"></div><div class="select"><i class="fa-solid fa-xmark insta-new-attachments-delete"></i></div></div>';

    $('#insta-new-attachments').append(html);

    var arr = insta.new.attachments;
    arr.push(imageurl);
};

insta.new.clear = function () {
    $("#insta-new-picture-icon").show()
    $("#insta-new-picture-img").hide()
    insta.new.attachments = [];
    $('#insta-new-message').html('');
};

$(document).on('click', '#insta-action-send', function () {
    insta.sendpost();
});

insta.sendpost = function () {
    var message = $('#insta-new-message').html();
    var arr = insta.new.attachments;

    sendData('insta:newpost', {
        message: message,
        attachments: arr,
    });
    insta.new.clear();
};
// User
$(document).on('click', '.insta-open-settings', function () {
    insta.footer.open('settings');
    insta.footer.lasttabopen = 'user';
    insta.footer.opentab = 'settings';
});

$(document).on('click', '.insta-open-userprofil', function () {
    var id = $(this).parent().data('id');
    sendData('insta:loadProfile', {
        id: id,
    });
    // insta.footer.lasttabopen = insta.footer.opentab;
    // insta.footer.open('user-profil');
    // insta.footer.opentab = 'user-profil';
});

$(document).on('click', '.insta-user', function () {
    var id = $(this).data('id');
    sendData('insta:loadProfilebyuserid', {
        id: id,
    });
    // insta.footer.lasttabopen = insta.footer.opentab;
    // insta.footer.open('user-profil');
    // insta.footer.opentab = 'user-profil';
});

$(document).on('click', '.insta-lookup-account', function () {
    var id = $(this).data('id');
    sendData('insta:loadProfilebyuserid', {
        id: id,
    });

    if (insta.footer.opentab == 'follows') {
        setTimeout(() => {
            insta.footer.lasttabopen = 'user';
        }, appOpenspeed);
    }
    // insta.footer.lasttabopen = insta.footer.opentab;
    // insta.footer.open('user-profil');
    // insta.footer.opentab = 'user-profil';
});

insta.user.load = function (
    name,
    tag,
    avatar,
    job,
    description,
    posts,
    follower,
    follows,
    postshtml
) {
    $('#insta-user-name').html(name);
    $('#insta-settings-input-name').val(name)

    $('#insta-user-tag').html(tag);
    $('#insta-settings-input-tagname').val(tag)


    $('#insta-user-avatar').attr('src', avatar);
    $('#insta-user-job').html(job);
    $('#insta-settings-input-job').val(job)
    $('#insta-user-job').show()
    if (job == '' || description == undefined) {
        $('#insta-user-job').hide()
        $('#insta-settings-input-job').val('')
    }
    $('#insta-user-description').html(description);
    $('#insta-user-description').show()
    $('#insta-settings-input-description').val(description)
    if (description == '' || description == undefined) {
        $('#insta-user-description').hide()
        $('#insta-settings-input-description').val('')
    }
    $('#insta-user-stats-posts').html(posts);
    $('#insta-user-stats-follower').html(follower);
    $('#insta-user-stats-follows').html(follows);
    $('#insta-user-elements').html(postshtml);

    $('#insta-settings-name').html(name);
    $('#insta-settings-tag').html(tag);
    $('#insta-settings-pb').attr('src', avatar);
};

// User profile
$(document).on('click', '#insta-user-return', function () {
    if (
        insta.footer.lasttabopen == 'follows' ||
        insta.footer.lasttabopen == 'follower'
    ) {
        insta.footer.open('user');
    } else {
        insta.footer.open(insta.footer.lasttabopen);
    }
    sendData('insta:userProfile:clear');
});

$(document).on('click', '#insta-follows-return', function () {
    insta.footer.open(insta.footer.lasttabopen);
});

insta.loadProfile = function (
    name,
    tag,
    avatar,
    posts,
    follower,
    follows,
    postshtml,
    isFollowing
) {
    $('#insta-userprofil-name').html(name);
    $('#insta-userprofil-tag').html(tag);
    $('#insta-userprofil-avatar').attr('src', avatar);
    $('#insta-userprofil-stats-posts').html(posts);
    $('#insta-userprofil-stats-follower').html(follower);
    $('#insta-userprofil-stats-follows').html(follows);

    $('#insta-userprofil-elements').html(postshtml);

    if (isFollowing == true) {
        $('#insta-userprofil-follow-font').hide(0);
        $('#insta-userprofil-unfollow-font').show(0);
        $('#insta-userprofil-follow').addClass('red');
    } else {
        $('#insta-userprofil-unfollow-font').hide(0);
        $('#insta-userprofil-follow-font').show(0);
        $('#insta-userprofil-follow').removeClass('red');
    }

    if (insta.footer.opentab != 'user-profil') {
        insta.footer.lasttabopen = insta.footer.opentab;
        insta.footer.open('user-profil');
    }
};

$(document).on('click', '#insta-userprofil-follow', function () {
    sendData('insta:follow');
});

insta.user.getnumber = function (number) {
    var follower = number;

    if (number > 10000) {
        follower = Math.floor(number / 1000) + 'k';
    }

    return follower;
};

$(document).on('click', '#insta-user-stats-follower', function () {
    insta.footer.open('follows')
    sendData('insta:user:loadFollower');

});

$(document).on('click', '#insta-user-stats-follows', function () {
    sendData('insta:user:loadFollows');
});

insta.loadFollows = function (html) {
    $('#insta-follows-elements').html(html);

    insta.footer.lasttabopen = insta.footer.opentab;
    insta.footer.open('follows');
};

// User settings
insta.settings.load = function (data) {
    $.each(data, function (i, v) {
        var e = $('#insta-settings-' + i);
        if (v == true) {
            e.addClass('checked');
        } else {
            e.removeClass('checked');
        }
    });
};

$(document).on('click', '#insta-settings-return', function () {
    insta.footer.open('user');
    sendData('insta:settings:clear');
});


$(document).on('click', '#insta-settings-customize-avatar', function () {
    Inputarea.message.show(appOpenspeed);
    $('.censorlayer').fadeIn(appOpenspeed);
    messages.plusmenu.openapp = 'insta';
    inputarea.open = 'insta:settings';
    $('#messages-chat-sendgps').hide(0);
    $('#business-chat-delete').hide(0);
});

setTimeout(() => {
    $("#insta-settings-input-name").on("input", function () {
        insta.settings.setName($(this).val());
    });

    $("#insta-settings-input-job").on("input", function () {
        insta.settings.setJob($(this).val());
    });

    $("#insta-settings-input-description").on("input", function () {

        insta.settings.setDescription($(this).val());
    });
}, 1000);


insta.settings.setName = function (name) {
    insta.settings.cache.name = name;
};

insta.settings.setJob = function (job) {
    insta.settings.cache.job = job;
};

insta.settings.setDescription = function (description) {
    insta.settings.cache.description = description;
};

insta.settings.setImage = function (url) {
    insta.settings.cache.avatar = url;
    $('#insta-settings-pb').attr('src', url);
};

$(document).on('click', '#insta-settings-save', function () {
    insta.footer.open(insta.footer.lasttabopen);
    sendData('insta:changeName', { input: insta.settings.cache.name });
    sendData('insta:changeAvatar', { url: insta.settings.cache.avatar });
    sendData('insta:changeJob', { input: insta.settings.cache.job });
    sendData('insta:changeDescription', { input: insta.settings.cache.description });

    var newPosts = IsCheckboxChecked($('#insta-settings-all'));
    var follows = IsCheckboxChecked($('#insta-settings-follows'));
    var comment = IsCheckboxChecked($('#insta-settings-comment'));
    var like = IsCheckboxChecked($('#insta-settings-like'));
    var data = {
        all: newPosts,
        follows: follows,
        comment: comment,
        like: like,
    };
    sendData('insta:settings:notify:update', { data: data });
});

// insta-searchbar
setTimeout(() => {
    $('.insta-searchbar-stop').hide(0);
    $("#insta-search-user-elements").hide(0);

    $("#insta-searchbar-input").on("input", function () {
        var searchText = $(this).val().toLowerCase();
        $(".insta-user").each(function () {
            var tagname = $(this).find(".tagname").text().toLowerCase();
            var username = $(this).find(".username").text().toLowerCase();
            if (tagname.includes(searchText) || username.includes(searchText)) {
                $(this).show(300);
            } else {
                $(this).hide(300);
            }
        });
    });

}, 1000);

$(document).on('click', '.insta-searchbar', function () {
    if (insta.isSearchbarShown == false) {
        insta.isSearchbarShown = true;
        $('.insta-searchbar').css({
            'width': '65%'
        }, 500)
        $('.insta-searchbar-stop').show(700);
        $('#insta-search-user-elements').show(500)
        $('#insta-search-elements').hide(0)
        $('#insta-search-user-elements').show(500)
    }
});

// 
$(document).on('click', '.insta-searchbar-stop', function () {
    $('.insta-searchbar-stop').hide(500);
    $('.insta-searchbar').css({
        'width': '100%'
    }, 500)
    $('#insta-search-user-elements').hide(0)
    $('#insta-search-elements').show(500)
    $("#insta-searchbar-input").val('');
    setTimeout(() => {
        insta.isSearchbarShown = false;
    }, 500);
});

insta.loadUserSearch = function (html) {
    $("#insta-search-user-elements").html(html)
};