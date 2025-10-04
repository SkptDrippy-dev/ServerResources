if (locale2 == 'sp') {
    $('.phone-call-incoming-title ').html(localesp.callincomingtitle);
    $('.phone-call-outgoing-title ').html(localesp.calloutgoingtitle);
    $('.phone-call-ongoing-title ').html(localesp.callongoingtitle);
    $('#phone-contact-headline ').html(localesp.phonecontactheadline);
    $('#pciheadoverview ').html(localesp.pciheadoverview);
    $('#pcinumbertext ').html(localesp.pcinumber);
    $('#pcicall2 ').html(localesp.pcicall);
    $('#pcimessage2 ').html(localesp.pcimessage);
    $('#pcifavourit2 ').html(localesp.pcifavorit);
    $('#pcigps ').html(localesp.pcigps);
    $('#pcishare ').html(localesp.pcishare);
    $('#pcidelete ').html(localesp.pcidelete);
    $('#pciheadadd ').html(localesp.pciheadadd);
    $('#pciinputsubmit ').html(localesp.pciinputsubmit);
    $('#pciheadedit ').html(localesp.pciheadedit);
    $('#pcieditsubmit ').html(localesp.pcieditsubmit);
    $('#phoneheadlinemessage ').html(localesp.phoneheadlinemessage);
    $('#phoneheadlinechat ').html(localesp.phoneheadlinechat);
    $('#phoneheadlinephone ').html(localesp.phoneheadlinephone);
    $('#phoneheadlinesettings ').html(localesp.phoneheadlinesettings);
    $('.headerbacksettings').html(localesp.phoneheadlinesettings);
    $('#phonesettingsselectionflightmode ').html(
        '<i class="fas fa-plane"></i> &nbsp' +
        localesp.phonesettingsselectionflightmode
    );
    $('#phonesettingsselectionmute ').html(
        '<i class="fas fa-volume-mute"></i> &nbsp' +
        localesp.phonesettingsselectionmute
    );
    $('#phonesettingsselectiondarkmode ').html(
        '<i class="fas fa-adjust"></i> &nbsp' +
        localesp.phonesettingsselectiondarkmode
    );
    $('#phonesettingsselectionanonymous ').html(
        '<i class="fa-solid fa-user-ninja"></i> &nbsp' +
        localesp.phonesettingsselectionanonymous
    );
    $('#phonesettingsselectionwallpaper ').html(
        '<i class="fas fa-image"></i> &nbsp' +
        localesp.phonesettingsselectionwallpaper
    );
    $('#phone-settings-selection-changecase ').html(
        '<i class="fas fa-mobile"></i> &nbsp' +
        localesp.phonesettingsselectioncase
    );
    $('#phonesettingsselectionringtone ').html(
        '<i class="fas fa-bell"></i> &nbsp' +
        localesp.phonesettingsselectionringtone
    );
    $('#pswh ').html(localesp.pswh);
    $('#pswsubmitbutton ').html(localesp.pswsubmitbutton);
    $('#phservice ').html(localesp.phservice);
    $('#psmn ').html(localesp.psmn);
    $('#pss ').html(localesp.pss);
    $('#pssposition ').html(localesp.pssposition);
    $('#phone-service-button ').html(localesp.phoneservicebutton);
    $('#phbusiness ').html(localesp.phbusiness);
    $('#motdchange ').html(localesp.motdchange);
    $('#pbbacceptfont ').html(localesp.pbbacceptfont);
    $('#pbbacceptfont2 ').html(localesp.pbbacceptfont2);
    $('#pbsjobnumber ').html(localesp.jobnumber);
    $('#pbsmfont ').html(localesp.motdchange);
    $('#pbsmfont2 ').html(localesp.pbsmfont2);
    $('#pbsmfont3 ').html(localesp.pbsmfont3);
    $('#pbsjobmoney ').html(localesp.pbsjobmoney);
    $('#phfunk ').html(localesp.phfunk);
    $('#phone-frequenz-join-button ').html(localesp.pfjb);
    $('#phone-frequenz-leave-button ').html(localesp.pflb);
    $('#phonesettingsnumbertext ').html(
        "<i class='fas fa-phone-alt'></i> &nbsp" + localesp.phonenumber
    );
    $('.ptw-submit ').each(function () {
        $(this).html(localesp.ptwtweetsubmit);
    });
    $('.twitter-firsttime-button ').html(localesp.ptwtweetsubmit);
    $('.ptw-pbsubmit ').each(function () {
        $(this).html(localesp.ptwtweetsubmit);
    });
    $('#phoneheadlinetwitter ').html(localesp.phoneheadlinetwitter);
    $('#ptw-tweetheader-font ').html(localesp.ptwtweetheaderfont);
    $('#ptw-header-font ').html(localesp.ptwheaderfont);
    $('#ptw-header-font2 ').html(localesp.ptwheaderfont2);
    $('#ptw-header-font3 ').html(localesp.ptwheaderfont3);
    $('#ptw-header-font4 ').html(localesp.ptwheaderfont4);
    $('#ptw-header-font5 ').html(localesp.ptwheaderfont5);
    $('#ptw-header-font6 ').html(localesp.ptwheaderfont3);
    $('#ptw-header-font7 ').html(localesp.ptwheaderfont7);
    $('#phonetwitternotification ').html(localesp.tweetnotificaton);

    // 0.60
    // Banking app
    $('#bankapp-headline').html(localesp.bankappheadline);
    $('.phone-bankapp-cards-headline').html(
        localesp.phonebankappcardsheadline
    );
    $('.phone-card-cardholder').html(localesp.cardcardholder);
    $('.phone-card-expires').html(localesp.cardexpires);
    $('.phone-bankapp-cards-headline').html(
        localesp.phonebankappcardsheadline
    );
    $('.bankapp-transfer-headline').html(localesp.bankapptransferheadline);
    $('.bankapp-transfer-cardnumber').html(
        localesp.bankapptransfercardnumber
    );
    $('.bankapp-transfer-amount').html(localesp.bankapptransferamount);
    $('.bankapp-transfer-button').html(localesp.bankapptransferbutton);

    // 0.61
    // Businessapp
    $('#pbrs-headlineheadline').html(localesp.magnagment);
    $('#pbrs-nameheadline').html(localesp.pbrsnameheadline);
    $('#pbrs-gradeheadline').html(localesp.pbrsgradeheadline);
    $('#pbrs-rankheadline').html(localesp.pbrsrankheadline);
    $('#pbrs-uprank').html(localesp.pbrsuprank);
    $('#pbrs-derank').html(localesp.pbrsderank);
    $('#pbrs-updaterank').html(localesp.pbrsupdaterank);
    $('#pbrs-fire').html(localesp.pbrsfire);
    $('#pbrs-recruitheadline').html(localesp.pbrsrecruitheadline);
    $('#pbrs-recruit').html(localesp.pbrsrecruit);
    $('#pbms-headlineheadline').html(localesp.pbmsheadlineheadline);
    $('#pbms-nameheadline').html(localesp.pbmsnameheadline);
    $('#pmbs-deposit').html(localesp.pmbsdeposit);
    $('#pmbs-withdraw').html(localesp.pmbswithdraw);

    // 0.7
    $('#prmsheadline').html(localesp.prmsheadline);
    $('#prmsdelete').html(localesp.prmsdelete);

    // 0.73
    $('#phone-app-contact-page-add').html(localesp.add);
    $('#phone-app-contact-page-edit').html(localesp.edit);
    $('#phone-app-contact-headline').html(localesp.phonecontactheadline);
    $('.phone-app-contact-page-contact').each(function () {
        $(this).html(localesp.contact);
    });
    $('.firstname').each(function () {
        $(this).html(localesp.firstname);
    });
    $('.lastname').each(function () {
        $(this).html(localesp.lastname);
    });
    $('.phonenumber').each(function () {
        $(this).html(localesp.phonenumber);
    });
    $('.numbertext').each(function () {
        $(this).html(localesp.number);
    });
    $('.timetext').each(function () {
        $(this).html(localesp.time);
    });
    $('#phone-app-contact-edit-delete').html(localesp.delete);
    $('#phone-app-edit-newcontact').html(localesp.pciheadedit);
    $('#phone-recent-message-edit').html(localesp.edit);
    $('#phone-app-contact-new-editbutton').html(localesp.save2);
    $('#phone-app-contact-new-savebutton').html(localesp.save2);
    $('.phone-app-contact-page-sendlocatoin').html(localesp.sendlocation);
    $('#phone-app-contact-page-sharecontact').html(localesp.sharecontact);
    $('#phone-app-contact-page-delete').html(localesp.deletecontact);

    // Placeholder
    $('#pbms-amount').attr('placeholder', localesp.pbmsamount);
    $('#inputcardnumber').attr(
        'placeholder',
        localesp.placeholdercardnumber
    );
    $('#inputtransferamoutn').attr(
        'placeholder',
        localesp.placeholderamount
    );
    $('#pciinputname').attr('placeholder', localesp.name);
    $('#pciinputname2').attr('placeholder', localesp.name);
    $('#pciinputnumber').attr('placeholder', localesp.number);
    $('#pciinputnumber2').attr('placeholder', localesp.number);
    $('#phone-chat-input-message').attr('placeholder', localesp.message);
    $('#psw').attr('placeholder', localesp.png);
    $('.phone-service-message-input').attr(
        'placeholder',
        localesp.description
    );
    $('#phone-business-input-message').attr(
        'placeholder',
        localesp.message
    );
    $('#motd').attr('placeholder', localesp.message);
    $('#ptw-tweetinput').attr('placeholder', localesp.message);
    $('#phone-radio-frequenz-input').attr(
        'placeholder',
        localesp.frequency
    );
    $('#ptw-imageurl').attr('placeholder', localesp.url);
    $('#ptw-pbinput').attr('placeholder', localesp.url);
    $('#ptw-username').attr('placeholder', localesp.name);
    $('#ptw-ftavatarurl').attr('placeholder', localesp.url);
    $('#ptw-ftusername').attr('placeholder', localesp.name);
    $('#ptw-ftid').attr('placeholder', localesp.name);

    // Lifeinvader
    $('#advertisement-headline').html(localesp.advertisementheadline);
    $('#abtext').html(localesp.abtext);
    $('#yourname').html(localesp.yourname);
    $('#abmessage').html(localesp.abmessage);
    $('#advertisement-sendnewmessage').html(
        localesp.advertisementsendnewmessage
    );

    // Market
    $('#dmarketheadline').html(localesp.dmarketheadline);
    $('#price').html(localesp.price);
    $('#stock').html(localesp.stock);

    // 0.72
    $('#phone-constant-radio').html(localesp.enableconstant);

    // 0.73
    $('.phone-app-call-historyheadline').html(localesp.callhistoryheadline);

    // 0.74
    $('.locale_enterimage').each(function () {
        $(this).html(localesp.enterimage);
    });
    $('.locale_cancel').each(function () {
        $(this).html(localesp.cancelh);
    });

    $('.locale_submit').each(function () {
        $(this).html(localesp.submith);
    });

    $('.locale_sendphoto').each(function () {
        $(this).html(localesp.sendphotoh);
    });

    $('.locale_sendlocation').each(function () {
        $(this).html(localesp.sendlocation);
    });

    $('.locale_dispatches').each(function () {
        $(this).html(localesp.dispatches);
    });

    $('.locale_accept').each(function () {
        $(this).html(localesp.accept);
    });

    $('.locale_decline').each(function () {
        $(this).html(localesp.decline);
    });

    $('.locale_delete').each(function () {
        $(this).html(localesp.delete);
    });

    $('.locale_entermessage').each(function () {
        $(this).html(localesp.entermessage);
    });

    $('.locale_settings').each(function () {
        $(this).html(localesp.settings);
    });

    $('.locale_setmotd').each(function () {
        $(this).html(localesp.setmotd);
    });

    $('.locale_moneymanagement').each(function () {
        $(this).html(localesp.moneymanagement);
    });

    $('.locale_setjobnumber').each(function () {
        $(this).html(localesp.setjobnumber);
    });

    $('.locale_accountsaldo').each(function () {
        $(this).html(localesp.accountsaldo);
    });

    $('.locale_amount').each(function () {
        $(this).html(localesp.amount);
    });

    $('#business-mm-amount').attr('placeholder', localesp.amount);

    $('.locale_withdraw').each(function () {
        $(this).html(localesp.withdraw);
    });

    $('.locale_deposit').each(function () {
        $(this).html(localesp.deposit);
    });

    $('.locale_messages').each(function () {
        $(this).html(localesp.messages);
    });

    $('.locale_back').each(function () {
        $(this).html(localesp.back);
    });

    $('.locale_deletechat').each(function () {
        $(this).html(localesp.deletechat);
    });

    $('.locale_services').each(function () {
        $(this).html(localesp.services);
    });

    $('.locale_enterid').each(function () {
        $(this).html(localesp.locale_enterid);
    });

    $('.locale_enterrank').each(function () {
        $(this).html(localesp.locale_enterrank);
    });

    $('.locale_actions').each(function () {
        $(this).html(localesp.locale_actions);
    });

    $('.locale_setwaypointtruck').each(function () {
        $(this).html(localesp.locale_setwaypointtruck);
    });

    $('.locale_setwaypointtogoal').each(function () {
        $(this).html(localesp.locale_setwaypointtogoal);
    });

    $('.locale_abortdelivery').each(function () {
        $(this).html(localesp.locale_abortdelivery);
    });

    $('.locale_home').each(function () {
        $(this).html(localesp.locale_home);
    });

    $('.locale_selectroute').each(function () {
        $(this).html(localesp.locale_selectroute);
    });

    $('.locale_short').each(function () {
        $(this).html(localesp.locale_short);
    });

    $('.locale_mid').each(function () {
        $(this).html(localesp.locale_mid);
    });

    $('.locale_long').each(function () {
        $(this).html(localesp.locale_long);
    });

    $('.locale_selecttruck').each(function () {
        $(this).html(localesp.locale_selecttruck);
    });

    $('.locale_delivery').each(function () {
        $(this).html(localesp.locale_delivery);
    });

    $('.locale_welcome').each(function () {
        $(this).html(localesp.locale_welcome);
    });

    $('.locale_startnewjob').each(function () {
        $(this).html(localesp.locale_startnewjob);
    });

    $('.locale_viewallvehicles').each(function () {
        $(this).html(localesp.locale_viewallvehicles);
    });

    $('.locale_history').each(function () {
        $(this).html(localesp.locale_history);
    });

    $('.locale_alltrucks').each(function () {
        $(this).html(localesp.locale_alltrucks);
    });

    $('.locale_broker').each(function () {
        $(this).html(localesp.broker);
    });

    $('.locale_investments').each(function () {
        $(this).html(localesp.investment);
    });

    $('.locale_stockmarket').each(function () {
        $(this).html(localesp.stockmarket);
    });

    $('.locale_price').each(function () {
        $(this).html(localesp.price);
    });

    $('.locale_buyh').each(function () {
        $(this).html(localesp.buyh);
    });

    $('.locale_worth').each(function () {
        $(this).html(localesp.worth);
    });

    $('.locale_buyin').each(function () {
        $(this).html(localesp.buyin);
    });

    $('.locale_performance').each(function () {
        $(this).html(localesp.performance);
    });

    $('.locale_enteramount').each(function () {
        $(this).html(localesp.enteramount);
    });

    $('.locale_enterid').each(function () {
        $(this).html(localesp.enteramount);
    });

    $('.locale_enteramount').each(function () {
        $(this).html(localesp.enteramount);
    });

    $('.locale_exchange').each(function () {
        $(this).html(localesp.exchange);
    });

    $('.locale_user').each(function () {
        $(this).html(localesp.user);
    });

    $('.locale_stats').each(function () {
        $(this).html(localesp.stats);
    });

    $('.locale_bought').each(function () {
        $(this).html(localesp.bought);
    });

    $('.locale_sold').each(function () {
        $(this).html(localesp.sold);
    });

    $('.locale_profit').each(function () {
        $(this).html(localesp.profit);
    });

    $('.locale_groupchat').each(function () {
        $(this).html(localesp.groupchat);
    });

    $('.locale_overview').each(function () {
        $(this).html(localesp.overview);
    });

    $('.locale_next').each(function () {
        $(this).html(localesp.next);
    });

    $('.locale_name').each(function () {
        $(this).html(localesp.name);
    });

    $('.locale_image').each(function () {
        $(this).html(localesp.image);
    });

    $('.locale_testimage').each(function () {
        $(this).html(localesp.testimage);
    });

    $('.locale_actions').each(function () {
        $(this).html(localesp.actions);
    });

    $('.locale_changephoto').each(function () {
        $(this).html(localesp.changeimage);
    });

    $('.locale_changename').each(function () {
        $(this).html(localesp.changename);
    });

    $('.locale_addmember').each(function () {
        $(this).html(localesp.addmember);
    });

    $('.locale_leave').each(function () {
        $(this).html(localesp.leave);
    });

    $('.locale_participants').each(function () {
        $(this).html(localesp.participants);
    });

    $('.locale_chat').each(function () {
        $(this).html(localesp.chat);
    });

    $('.locale_settings').each(function () {
        $(this).html(localesp.settings);
    });

    $('.locale_save').each(function () {
        $(this).html(localesp.save);
    });

    $('.locale_rank').each(function () {
        $(this).html(localesp.rank);
    });

    $('.locale_addcontact').each(function () {
        $(this).html(localesp.addcontact);
    });

    $('.locale_makeadmin').each(function () {
        $(this).html(localesp.makeadmin);
    });

    $('.locale_removeasadmin').each(function () {
        $(this).html(localesp.removeasadmin);
    });

    $('.locale_kick').each(function () {
        $(this).html(localesp.kick);
    });

    $('.locale_takephoto').each(function () {
        $(this).html(localesp.takephoto);
    });

    // 0.75 beta 4
    $('.locale_djump').each(function () {
        $(this).html(localesp.djump);
    });

    $('.locale_playh').each(function () {
        $(this).html(localesp.playh);
    });

    $('.locale_gameover').each(function () {
        $(this).html(localesp.gameover);
    });

    $('.locale_score').each(function () {
        $(this).html(localesp.yourescore);
    });

    $('.locale_highscore').each(function () {
        $(this).html(localesp.highscore);
    });

    $('.locale_home').each(function () {
        $(this).html(localesp.home);
    });

    $('.locale_rankingh').each(function () {
        $(this).html(localesp.rankingh);
    });

    $('.locale_settingsh').each(function () {
        $(this).html(localesp.settingsh);
    });

    $('.locale_sound').each(function () {
        $(this).html(localesp.sound);
    });

    // 0.76

    $('.locale_share').each(function () {
        $(this).html(localesp.share);
    });

    $('.locale_camera').each(function () {
        $(this).html(localesp.camera);
    });

    $('.locale_copylink').each(function () {
        $(this).html(localesp.copylink);
    });

    $('.locale_fullscreen').each(function () {
        $(this).html(localesp.fullscreen);
    });

    $('.locale_save2').each(function () {
        $(this).html(localesp.save3);
    });

    $('.locale_setwallpaper').each(function () {
        $(this).html(localesp.setwallpaper);
    });

    $('.locale_shareondiscord').each(function () {
        $(this).html(localesp.shareondiscord);
    });

    $('.locale_ddrop').each(function () {
        $(this).html(localesp.ddrop);
    });

    $('.locale_sendinmessages').each(function () {
        $(this).html(localesp.sendinmessages);
    });

    $('.locale_gallery').each(function () {
        $(this).html(localesp.gallery);
    });

    $('.locale_select').each(function () {
        $(this).html(localesp.select);
    });

    $('.locale_image').each(function () {
        $(this).html(localesp.image);
    });

    $('.locale_information').each(function () {
        $(this).html(localesp.information);
    });

    $('.locale_addedon').each(function () {
        $(this).html(localesp.addedon);
    });

    $('.locale_selectitems').each(function () {
        $(this).html(localesp.selectitems);
    });

    $('.locale_mail').each(function () {
        $(this).html(localesp.mail);
    });

    $('.locale_sent').each(function () {
        $(this).html(localesp.sent);
    });

    $('.locale_newmail').each(function () {
        $(this).html(localesp.newmail);
    });

    $('.locale_receivers').each(function () {
        $(this).html(localesp.receivers);
    });

    $('.locale_subject').each(function () {
        $(this).html(localesp.subject);
    });

    $('.locale_message').each(function () {
        $(this).html(localesp.message);
    });

    $('.locale_business').each(function () {
        $(this).html(localesp.business);
    });

    $('.locale_radio').each(function () {
        $(this).html(localesp.radio);
    });

    $('.locale_twitter').each(function () {
        $(this).html(localesp.twitter);
    });

    $('.locale_bank').each(function () {
        $(this).html(localesp.bank);
    });

    $('.locale_ad').each(function () {
        $(this).html(localesp.ad);
    });


    $('.locale_calculator').each(function () {
        $(this).html(localesp.calculator);
    });



    $('#phonesettingsselectionapptext ').html(
        '<i class="fa-solid fa-underline"></i>&nbsp' + localesp.showapptext
    );

    $('.locale').each(function () {
        var locl = $(this).data('locale');
        $(this).html(localesp[locl]);
    });

    $('.plocale').each(function () {
        var locl = $(this).data('locale');
        $(this).attr('placeholder', localesp[locl]);
    });
}