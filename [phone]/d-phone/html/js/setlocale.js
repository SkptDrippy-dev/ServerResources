var usedlocale = 'en';
$(function () {
  window.addEventListener('message', function (event) {
    var v = event.data;

    if (v.setlocale == true) {

      var locale2 = v.locale;
      usedlocale = locale2;

      if (locale2 == 'en') {
        $('.phone-call-incoming-title ').html(locale.callincomingtitle);
        $('.phone-call-outgoing-title ').html(locale.calloutgoingtitle);
        $('.phone-call-ongoing-title ').html(locale.callongoingtitle);
        $('#phone-contact-headline ').html(locale.phonecontactheadline);
        $('#pciheadoverview ').html(locale.pciheadoverview);
        $('#pcinumbertext ').html(locale.pcinumber);
        $('#pcicall2 ').html(locale.pcicall);
        $('#pcimessage2 ').html(locale.pcimessage);
        $('#pcifavourit2 ').html(locale.pcifavorit);
        $('#pcigps ').html(locale.pcigps);
        $('#pcishare ').html(locale.pcishare);
        $('#pcidelete ').html(locale.pcidelete);
        $('#pciheadadd ').html(locale.pciheadadd);
        $('#pciinputsubmit ').html(locale.pciinputsubmit);
        $('#pciheadedit ').html(locale.pciheadedit);
        $('#pcieditsubmit ').html(locale.pcieditsubmit);
        $('#phoneheadlinemessage ').html(locale.phoneheadlinemessage);
        $('#phoneheadlinechat ').html(locale.phoneheadlinechat);
        $('#phoneheadlinephone ').html(locale.phoneheadlinephone);
        $('#phoneheadlinesettings ').html(locale.phoneheadlinesettings);
        $('.headerbacksettings').html(locale.phoneheadlinesettings);
        $('#phonesettingsselectionflightmode ').html(
          '<i class="fas fa-plane"></i> &nbsp' +
          locale.phonesettingsselectionflightmode
        );
        $('#phonesettingsselectionmute ').html(
          '<i class="fas fa-volume-mute"></i> &nbsp' +
          locale.phonesettingsselectionmute
        );
        $('#phonesettingsselectiondarkmode ').html(
          '<i class="fas fa-adjust"></i> &nbsp' +
          locale.phonesettingsselectiondarkmode
        );
        $('#phonesettingsselectionanonymous ').html(
          '<i class="fa-solid fa-user-ninja"></i> &nbsp' +
          locale.phonesettingsselectionanonymous
        );
        $('#phonesettingsselectionwallpaper ').html(
          '<i class="fas fa-image"></i> &nbsp' +
          locale.phonesettingsselectionwallpaper
        );
        $('#phone-settings-selection-changecase ').html(
          '<i class="fas fa-mobile"></i> &nbsp' +
          locale.phonesettingsselectioncase
        );
        $('#phonesettingsselectionringtone').html(
          '<i class="fas fa-bell"></i> &nbsp' +
          locale.phonesettingsselectionringtone
        );
        $('#pswh ').html(locale.pswh);
        $('#pswsubmitbutton ').html(locale.pswsubmitbutton);
        $('#phservice ').html(locale.phservice);
        $('#psmn ').html(locale.psmn);
        $('#pss ').html(locale.pss);
        $('#pssposition ').html(locale.pssposition);
        $('#phone-service-button ').html(locale.phoneservicebutton);
        $('#phbusiness ').html(locale.phbusiness);
        $('#motdchange ').html(locale.motdchange);
        $('#pbbacceptfont ').html(locale.pbbacceptfont);
        $('#pbbacceptfont2 ').html(locale.pbbacceptfont2);
        $('#pbsjobnumber ').html(locale.jobnumber);
        $('#pbsmfont ').html(locale.motdchange);
        $('#pbsmfont2 ').html(locale.pbsmfont2);
        $('#pbsmfont3 ').html(locale.pbsmfont3);
        $('#pbsjobmoney ').html(locale.pbsjobmoney);
        $('#phfunk ').html(locale.phfunk);
        $('#phone-frequenz-join-button ').html(locale.pfjb);
        $('#phone-frequenz-leave-button ').html(locale.pflb);
        $('#phonesettingsnumbertext ').html(
          "<i class='fas fa-phone-alt'></i> &nbsp" + locale.phonenumber
        );
        $('.ptw-submit ').each(function () {
          $(this).html(locale.ptwtweetsubmit);
        });
        $('.twitter-firsttime-button ').html(locale.ptwtweetsubmit);
        $('.ptw-pbsubmit ').each(function () {
          $(this).html(locale.ptwtweetsubmit);
        });
        $('#phoneheadlinetwitter ').html(locale.phoneheadlinetwitter);
        $('#ptw-tweetheader-font ').html(locale.ptwtweetheaderfont);
        $('#ptw-header-font ').html(locale.ptwheaderfont);
        $('#ptw-header-font2 ').html(locale.ptwheaderfont2);
        $('#ptw-header-font3 ').html(locale.ptwheaderfont3);
        $('#ptw-header-font4 ').html(locale.ptwheaderfont4);
        $('#ptw-header-font5 ').html(locale.ptwheaderfont5);
        $('#ptw-header-font6 ').html(locale.ptwheaderfont3);
        $('#ptw-header-font7 ').html(locale.ptwheaderfont7);
        $('#phonetwitternotification ').html(locale.tweetnotificaton);

        // 0.60
        // Banking app
        $('#bankapp-headline').html(locale.bankappheadline);
        $('.phone-bankapp-cards-headline').html(
          locale.phonebankappcardsheadline
        );
        $('.phone-card-cardholder').html(locale.cardcardholder);
        $('.phone-card-expires').html(locale.cardexpires);
        $('.phone-bankapp-cards-headline').html(
          locale.phonebankappcardsheadline
        );
        $('.bankapp-transfer-headline').html(locale.bankapptransferheadline);
        $('.bankapp-transfer-cardnumber').html(
          locale.bankapptransfercardnumber
        );
        $('.bankapp-transfer-amount').html(locale.bankapptransferamount);
        $('.bankapp-transfer-button').html(locale.bankapptransferbutton);

        // 0.61
        // Businessapp
        $('#pbrs-headlineheadline').html(locale.magnagment);
        $('#pbrs-nameheadline').html(locale.pbrsnameheadline);
        $('#pbrs-gradeheadline').html(locale.pbrsgradeheadline);
        $('#pbrs-rankheadline').html(locale.pbrsrankheadline);
        $('#pbrs-uprank').html(locale.pbrsuprank);
        $('#pbrs-derank').html(locale.pbrsderank);
        $('#pbrs-updaterank').html(locale.pbrsupdaterank);
        $('#pbrs-fire').html(locale.pbrsfire);
        $('#pbrs-recruitheadline').html(locale.pbrsrecruitheadline);
        $('#pbrs-recruit').html(locale.pbrsrecruit);
        $('#pbms-headlineheadline').html(locale.pbmsheadlineheadline);
        $('#pbms-nameheadline').html(locale.pbmsnameheadline);
        $('#pmbs-deposit').html(locale.pmbsdeposit);
        $('#pmbs-withdraw').html(locale.pmbswithdraw);

        // 0.7
        $('#prmsheadline').html(locale.prmsheadline);
        $('#prmsdelete').html(locale.prmsdelete);

        // 0.73
        $('#phone-app-contact-page-add').html(locale.add);
        $('#phone-app-contact-page-edit').html(locale.edit);
        $('#phone-app-contact-headline').html(locale.phonecontactheadline);
        $('.phone-app-contact-page-contact').each(function () {
          $(this).html(locale.contact);
        });
        $('.firstname').each(function () {
          $(this).html(locale.firstname);
        });
        $('.lastname').each(function () {
          $(this).html(locale.lastname);
        });
        $('.phonenumber').each(function () {
          $(this).html(locale.phonenumber);
        });
        $('.numbertext').each(function () {
          $(this).html(locale.number);
        });
        $('.timetext').each(function () {
          $(this).html(locale.time);
        });


        $('#phone-app-contact-edit-delete').html(locale.delete);
        $('#phone-app-edit-newcontact').html(locale.pciheadedit);
        $('#phone-recent-message-edit').html(locale.edit);
        $('#phone-app-contact-new-editbutton').html(locale.save2);
        $('#phone-app-contact-new-savebutton').html(locale.save2);
        $('.phone-app-contact-page-sendlocatoin').html(locale.sendlocation);
        $('#phone-app-contact-page-sharecontact').html(locale.sharecontact);
        $('#phone-app-contact-page-delete').html(locale.deletecontact);

        // Placeholder
        $('#pbms-amount').attr('placeholder', locale.pbmsamount);
        $('#inputcardnumber').attr('placeholder', locale.placeholdercardnumber);
        $('#inputtransferamoutn').attr('placeholder', locale.placeholderamount);
        $('#pciinputname').attr('placeholder', locale.name);
        $('#pciinputname2').attr('placeholder', locale.name);
        $('#pciinputnumber').attr('placeholder', locale.number);
        $('#pciinputnumber2').attr('placeholder', locale.number);
        $('#phone-chat-input-message').attr('placeholder', locale.message);
        $('#psw').attr('placeholder', locale.png);
        $('.phone-service-message-input').attr(
          'placeholder',
          locale.description
        );
        $('#phone-business-input-message').attr('placeholder', locale.message);
        $('#motd').attr('placeholder', locale.message);
        $('#ptw-tweetinput').attr('placeholder', locale.message);
        $('#phone-radio-frequenz-input').attr('placeholder', locale.frequency);
        $('#ptw-imageurl').attr('placeholder', locale.url);
        $('#ptw-pbinput').attr('placeholder', locale.url);
        $('#ptw-username').attr('placeholder', locale.name);
        $('#ptw-ftavatarurl').attr('placeholder', locale.url);
        $('#ptw-ftusername').attr('placeholder', locale.name);
        $('#ptw-ftid').attr('placeholder', locale.name);

        // Lifeinvader
        $('#advertisement-headline').html(locale.advertisementheadline);
        $('#abtext').html(locale.abtext);
        $('#yourname').html(locale.yourname);
        $('#abmessage').html(locale.abmessage);
        $('#advertisement-sendnewmessage').html(
          locale.advertisementsendnewmessage
        );

        // Market
        $('#dmarketheadline').html(locale.dmarketheadline);
        $('#price').html(locale.price);
        $('#stock').html(locale.stock);

        // 0.72
        $('#phone-constant-radio').html(locale.enableconstant);

        // 0.73
        $('.phone-app-call-historyheadline').html(locale.callhistoryheadline);

        // 0.74
        $('.locale_enterimage').each(function () {
          $(this).html(locale.enterimage);
        });
        $('.locale_cancel').each(function () {
          $(this).html(locale.cancelh);
        });

        $('.locale_submit').each(function () {
          $(this).html(locale.submith);
        });

        $('.locale_sendphoto').each(function () {
          $(this).html(locale.sendphotoh);
        });

        $('.locale_sendlocation').each(function () {
          $(this).html(locale.sendlocation);
        });

        $('.locale_dispatches').each(function () {
          $(this).html(locale.dispatches);
        });

        $('.locale_accept').each(function () {
          $(this).html(locale.accept);
        });

        $('.locale_decline').each(function () {
          $(this).html(locale.decline);
        });

        $('.locale_delete').each(function () {
          $(this).html(locale.delete);
        });

        $('.locale_entermessage').each(function () {
          $(this).html(locale.entermessage);
        });

        $('.locale_settings').each(function () {
          $(this).html(locale.settings);
        });

        $('.locale_setmotd').each(function () {
          $(this).html(locale.setmotd);
        });

        $('.locale_moneymanagement').each(function () {
          $(this).html(locale.moneymanagement);
        });

        $('.locale_setjobnumber').each(function () {
          $(this).html(locale.setjobnumber);
        });

        $('.locale_accountsaldo').each(function () {
          $(this).html(locale.accountsaldo);
        });

        $('.locale_amount').each(function () {
          $(this).html(locale.amount);
        });

        $('#business-mm-amount').attr('placeholder', locale.amount);

        $('.locale_withdraw').each(function () {
          $(this).html(locale.withdraw);
        });

        $('.locale_deposit').each(function () {
          $(this).html(locale.deposit);
        });

        $('.locale_messages').each(function () {
          $(this).html(locale.messages);
        });

        $('.locale_back').each(function () {
          $(this).html(locale.back);
        });

        $('.locale_deletechat').each(function () {
          $(this).html(locale.deletechat);
        });

        $('.locale_services').each(function () {
          $(this).html(locale.services);
        });

        $('.locale_enterid').each(function () {
          $(this).html(locale.locale_enterid);
        });

        $('.locale_enterrank').each(function () {
          $(this).html(locale.locale_enterrank);
        });

        $('.locale_actions').each(function () {
          $(this).html(locale.locale_actions);
        });

        $('.locale_setwaypointtruck').each(function () {
          $(this).html(locale.locale_setwaypointtruck);
        });

        $('.locale_setwaypointtogoal').each(function () {
          $(this).html(locale.locale_setwaypointtogoal);
        });

        $('.locale_abortdelivery').each(function () {
          $(this).html(locale.locale_abortdelivery);
        });

        $('.locale_home').each(function () {
          $(this).html(locale.locale_home);
        });

        $('.locale_selectroute').each(function () {
          $(this).html(locale.locale_selectroute);
        });

        $('.locale_short').each(function () {
          $(this).html(locale.locale_short);
        });

        $('.locale_mid').each(function () {
          $(this).html(locale.locale_mid);
        });

        $('.locale_long').each(function () {
          $(this).html(locale.locale_long);
        });

        $('.locale_selecttruck').each(function () {
          $(this).html(locale.locale_selecttruck);
        });

        $('.locale_delivery').each(function () {
          $(this).html(locale.locale_delivery);
        });

        $('.locale_welcome').each(function () {
          $(this).html(locale.locale_welcome);
        });

        $('.locale_startnewjob').each(function () {
          $(this).html(locale.locale_startnewjob);
        });

        $('.locale_viewallvehicles').each(function () {
          $(this).html(locale.locale_viewallvehicles);
        });

        $('.locale_history').each(function () {
          $(this).html(locale.locale_history);
        });

        $('.locale_alltrucks').each(function () {
          $(this).html(locale.locale_alltrucks);
        });

        $('.locale_broker').each(function () {
          $(this).html(locale.broker);
        });

        $('.locale_investments').each(function () {
          $(this).html(locale.investment);
        });

        $('.locale_stockmarket').each(function () {
          $(this).html(locale.stockmarket);
        });

        $('.locale_price').each(function () {
          $(this).html(locale.price);
        });

        $('.locale_buyh').each(function () {
          $(this).html(locale.buyh);
        });

        $('.locale_worth').each(function () {
          $(this).html(locale.worth);
        });

        $('.locale_buyin').each(function () {
          $(this).html(locale.buyin);
        });

        $('.locale_performance').each(function () {
          $(this).html(locale.performance);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(locale.enteramount);
        });

        $('.locale_enterid').each(function () {
          $(this).html(locale.enteramount);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(locale.enteramount);
        });

        $('.locale_exchange').each(function () {
          $(this).html(locale.exchange);
        });

        $('.locale_user').each(function () {
          $(this).html(locale.user);
        });

        $('.locale_stats').each(function () {
          $(this).html(locale.stats);
        });

        $('.locale_bought').each(function () {
          $(this).html(locale.bought);
        });

        $('.locale_sold').each(function () {
          $(this).html(locale.sold);
        });

        $('.locale_profit').each(function () {
          $(this).html(locale.profit);
        });

        $('.locale_groupchat').each(function () {
          $(this).html(locale.groupchat);
        });

        $('.locale_overview').each(function () {
          $(this).html(locale.overview);
        });

        $('.locale_next').each(function () {
          $(this).html(locale.next);
        });

        $('.locale_name').each(function () {
          $(this).html(locale.name);
        });

        $('.locale_image').each(function () {
          $(this).html(locale.image);
        });

        $('.locale_testimage').each(function () {
          $(this).html(locale.testimage);
        });

        $('.locale_actions').each(function () {
          $(this).html(locale.actions);
        });

        $('.locale_changephoto').each(function () {
          $(this).html(locale.changeimage);
        });

        $('.locale_changename').each(function () {
          $(this).html(locale.changename);
        });

        $('.locale_addmember').each(function () {
          $(this).html(locale.addmember);
        });

        $('.locale_leave').each(function () {
          $(this).html(locale.leave);
        });

        $('.locale_participants').each(function () {
          $(this).html(locale.participants);
        });

        $('.locale_chat').each(function () {
          $(this).html(locale.chat);
        });

        $('.locale_settings').each(function () {
          $(this).html(locale.settings);
        });

        $('.locale_save').each(function () {
          $(this).html(locale.save3);
        });

        $('.locale_rank').each(function () {
          $(this).html(locale.rank);
        });

        $('.locale_addcontact').each(function () {
          $(this).html(locale.addcontact);
        });

        $('.locale_makeadmin').each(function () {
          $(this).html(locale.makeadmin);
        });

        $('.locale_removeasadmin').each(function () {
          $(this).html(locale.removeasadmin);
        });

        $('.locale_kick').each(function () {
          $(this).html(locale.kick);
        });

        $('.locale_takephoto').each(function () {
          $(this).html(locale.takephoto);
        });

        // 0.75 beta 4
        $('.locale_djump').each(function () {
          $(this).html(locale.djump);
        });

        $('.locale_playh').each(function () {
          $(this).html(locale.playh);
        });

        $('.locale_gameover').each(function () {
          $(this).html(locale.gameover);
        });

        $('.locale_score').each(function () {
          $(this).html(locale.yourescore);
        });

        $('.locale_highscore').each(function () {
          $(this).html(locale.highscore);
        });

        $('.locale_home').each(function () {
          $(this).html(locale.home);
        });

        $('.locale_rankingh').each(function () {
          $(this).html(locale.rankingh);
        });

        $('.locale_settingsh').each(function () {
          $(this).html(locale.settingsh);
        });

        $('.locale_sound').each(function () {
          $(this).html(locale.sound);
        });

        // 0.76

        $('.locale_share').each(function () {
          $(this).html(locale.share);
        });

        $('.locale_camera').each(function () {
          $(this).html(locale.camera);
        });

        $('.locale_copylink').each(function () {
          $(this).html(locale.copylink);
        });

        $('.locale_fullscreen').each(function () {
          $(this).html(locale.fullscreen);
        });

        $('.locale_save2').each(function () {
          $(this).html(locale.save3);
        });

        $('.locale_setwallpaper').each(function () {
          $(this).html(locale.setwallpaper);
        });

        $('.locale_shareondiscord').each(function () {
          $(this).html(locale.shareondiscord);
        });

        $('.locale_ddrop').each(function () {
          $(this).html(locale.ddrop);
        });

        $('.locale_sendinmessages').each(function () {
          $(this).html(locale.sendinmessages);
        });

        $('.locale_gallery').each(function () {
          $(this).html(locale.gallery);
        });

        $('.locale_select').each(function () {
          $(this).html(locale.select);
        });

        $('.locale_image').each(function () {
          $(this).html(locale.image);
        });

        $('.locale_information').each(function () {
          $(this).html(locale.information);
        });

        $('.locale_addedon').each(function () {
          $(this).html(locale.addedon);
        });

        $('.locale_selectitems').each(function () {
          $(this).html(locale.selectitems);
        });

        $('.locale_mail').each(function () {
          $(this).html(locale.mail);
        });

        $('.locale_sent').each(function () {
          $(this).html(locale.sent);
        });

        $('.locale_newmail').each(function () {
          $(this).html(locale.newmail);
        });

        $('.locale_receivers').each(function () {
          $(this).html(locale.receivers);
        });

        $('.locale_subject').each(function () {
          $(this).html(locale.subject);
        });

        $('.locale_message').each(function () {
          $(this).html(locale.message);
        });

        $('.locale_business').each(function () {
          $(this).html(locale.business);
        });

        $('.locale_radio').each(function () {
          $(this).html(locale.radio);
        });

        $('.locale_twitter').each(function () {
          $(this).html(locale.twitter);
        });

        $('.locale_bank').each(function () {
          $(this).html(locale.bank);
        });

        $('.locale_ad').each(function () {
          $(this).html(locale.ad);
        });

        $('.locale_market').each(function () {
          $(this).html(locale.market);
        });

        $('.locale_calculator').each(function () {
          $(this).html(locale.calculator);
        });

        $('.locale_bitcoin').each(function () {
          $(this).html(locale.bitcoin);
        });

        $('.locale_trucker').each(function () {
          $(this).html(locale.trucker);
        });

        $('.locale_attachments').each(function () {
          $(this).html(locale.attachments);
        });

        $('.locale_pbfmember').each(function () {
          $(this).html(locale.pbfmember);
        });

        $('#phonesettingsselectionapptext ').html(
          '<i class="fa-solid fa-underline"></i>&nbsp' + locale.showapptext
        );

        $('.locale').each(function () {
          var locl = $(this).data('locale');
          $(this).html(locale[locl]);
        });

        $('.plocale').each(function () {
          var locl = $(this).data('locale');
          $(this).attr('placeholder', locale[locl]);
        });
      }

      if (locale2 == 'de') {
        $('.phone-call-incoming-title ').html(localede.callincomingtitle);
        $('.phone-call-outgoing-title ').html(localede.calloutgoingtitle);
        $('.phone-call-ongoing-title ').html(localede.callongoingtitle);
        $('#phone-contact-headline ').html(localede.phonecontactheadline);
        $('#pciheadoverview ').html(localede.pciheadoverview);
        $('#pcinumbertext ').html(localede.pcinumber);
        $('#pcicall2 ').html(localede.pcicall);
        $('#pcimessage2 ').html(localede.pcimessage);
        $('#pcifavourit2 ').html(localede.pcifavorit);
        $('#pcigps ').html(localede.pcigps);
        $('#pcishare ').html(localede.pcishare);
        $('#pcidelete ').html(localede.pcidelete);
        $('#pciheadadd ').html(localede.pciheadadd);
        $('#pciinputsubmit ').html(localede.pciinputsubmit);
        $('#pciheadedit ').html(localede.pciheadedit);
        $('#pcieditsubmit ').html(localede.pcieditsubmit);
        $('#phoneheadlinemessage ').html(localede.phoneheadlinemessage);
        $('#phoneheadlinechat ').html(localede.phoneheadlinechat);
        $('#phoneheadlinephone ').html(localede.phoneheadlinephone);
        $('#phoneheadlinesettings ').html(localede.phoneheadlinesettings);
        $('.headerbacksettings').html(localede.phoneheadlinesettings);
        $('#phonesettingsselectionflightmode ').html(
          '<i class="fas fa-plane"></i> &nbsp' +
          localede.phonesettingsselectionflightmode
        );
        $('#phonesettingsselectionmute ').html(
          '<i class="fas fa-volume-mute"></i> &nbsp' +
          localede.phonesettingsselectionmute
        );
        $('#phonesettingsselectiondarkmode ').html(
          '<i class="fas fa-adjust"></i> &nbsp' +
          localede.phonesettingsselectiondarkmode
        );
        $('#phonesettingsselectionanonymous ').html(
          '<i class="fa-solid fa-user-ninja"></i> &nbsp' +
          localede.phonesettingsselectionanonymous
        );
        $('#phonesettingsselectionwallpaper ').html(
          '<i class="fas fa-image"></i> &nbsp' +
          localede.phonesettingsselectionwallpaper
        );
        $('#phone-settings-selection-changecase ').html(
          '<i class="fas fa-mobile"></i> &nbsp' +
          localede.phonesettingsselectioncase
        );
        $('#phonesettingsselectionringtone ').html(
          '<i class="fas fa-bell"></i> &nbsp' +
          localede.phonesettingsselectionringtone
        );
        $('#pswh ').html(localede.pswh);
        $('#pswsubmitbutton ').html(localede.pswsubmitbutton);
        $('#phservice ').html(localede.phservice);
        $('#psmn ').html(localede.psmn);
        $('#pss ').html(localede.pss);
        $('#pssposition ').html(localede.pssposition);
        $('#phone-service-button ').html(localede.phoneservicebutton);
        $('#phbusiness ').html(localede.phbusiness);
        $('#motdchange ').html(localede.motdchange);
        $('#pbbacceptfont ').html(localede.pbbacceptfont);
        $('#pbbacceptfont2 ').html(localede.pbbacceptfont2);
        $('#pbsjobnumber ').html(localede.jobnumber);
        $('#pbsmfont ').html(localede.motdchange);
        $('#pbsmfont2 ').html(localede.pbsmfont2);
        $('#pbsmfont3 ').html(localede.pbsmfont3);
        $('#pbsjobmoney ').html(localede.pbsjobmoney);
        $('#phfunk ').html(localede.phfunk);
        $('#phone-frequenz-join-button ').html(localede.pfjb);
        $('#phone-frequenz-leave-button ').html(localede.pflb);
        $('#phonesettingsnumbertext ').html(
          "<i class='fas fa-phone-alt'></i> &nbsp" + localede.phonenumber
        );
        $('.ptw-submit ').each(function () {
          $(this).html(localede.ptwtweetsubmit);
        });
        $('.twitter-firsttime-button ').html(localede.ptwtweetsubmit);
        $('.ptw-pbsubmit ').each(function () {
          $(this).html(localede.ptwtweetsubmit);
        });
        $('#phoneheadlinetwitter ').html(localede.phoneheadlinetwitter);
        $('#ptw-tweetheader-font ').html(localede.ptwtweetheaderfont);
        $('#ptw-header-font ').html(localede.ptwheaderfont);
        $('#ptw-header-font2 ').html(localede.ptwheaderfont2);
        $('#ptw-header-font3 ').html(localede.ptwheaderfont3);
        $('#ptw-header-font4 ').html(localede.ptwheaderfont4);
        $('#ptw-header-font5 ').html(localede.ptwheaderfont5);
        $('#ptw-header-font6 ').html(localede.ptwheaderfont3);
        $('#ptw-header-font7 ').html(localede.ptwheaderfont7);
        $('#phonetwitternotification ').html(localede.tweetnotificaton);

        // 0.60
        // Banking app
        $('#bankapp-headline').html(localede.bankappheadline);
        $('.phone-bankapp-cards-headline').html(
          localede.phonebankappcardsheadline
        );
        $('.phone-card-cardholder').html(localede.cardcardholder);
        $('.phone-card-expires').html(localede.cardexpires);
        $('.phone-bankapp-cards-headline').html(
          localede.phonebankappcardsheadline
        );
        $('.bankapp-transfer-headline').html(localede.bankapptransferheadline);
        $('.bankapp-transfer-cardnumber').html(
          localede.bankapptransfercardnumber
        );
        $('.bankapp-transfer-amount').html(localede.bankapptransferamount);
        $('.bankapp-transfer-button').html(localede.bankapptransferbutton);

        // 0.61
        // Businessapp
        $('#pbrs-headlineheadline').html(localede.magnagment);
        $('#pbrs-nameheadline').html(localede.pbrsnameheadline);
        $('#pbrs-gradeheadline').html(localede.pbrsgradeheadline);
        $('#pbrs-rankheadline').html(localede.pbrsrankheadline);
        $('#pbrs-uprank').html(localede.pbrsuprank);
        $('#pbrs-derank').html(localede.pbrsderank);
        $('#pbrs-updaterank').html(localede.pbrsupdaterank);
        $('#pbrs-fire').html(localede.pbrsfire);
        $('#pbrs-recruitheadline').html(localede.pbrsrecruitheadline);
        $('#pbrs-recruit').html(localede.pbrsrecruit);
        $('#pbms-headlineheadline').html(localede.pbmsheadlineheadline);
        $('#pbms-nameheadline').html(localede.pbmsnameheadline);
        $('#pmbs-deposit').html(localede.pmbsdeposit);
        $('#pmbs-withdraw').html(localede.pmbswithdraw);

        // 0.7
        $('#prmsheadline').html(localede.prmsheadline);
        $('#prmsdelete').html(localede.prmsdelete);

        // 0.73
        $('#phone-app-contact-page-add').html(localede.add);
        $('#phone-app-contact-page-edit').html(localede.edit);
        $('#phone-app-contact-headline').html(localede.phonecontactheadline);
        $('.phone-app-contact-page-contact').each(function () {
          $(this).html(localede.contact);
        });
        $('.firstname').each(function () {
          $(this).html(localede.firstname);
        });
        $('.lastname').each(function () {
          $(this).html(localede.lastname);
        });
        $('.phonenumber').each(function () {
          $(this).html(localede.phonenumber);
        });
        $('.numbertext').each(function () {
          $(this).html(localede.number);
        });
        $('.timetext').each(function () {
          $(this).html(localede.time);
        });
        $('#phone-app-contact-edit-delete').html(localede.delete);
        $('#phone-app-edit-newcontact').html(localede.pciheadedit);
        $('#phone-recent-message-edit').html(localede.edit);
        $('#phone-app-contact-new-editbutton').html(localede.save2);
        $('#phone-app-contact-new-savebutton').html(localede.save2);
        $('.phone-app-contact-page-sendlocatoin').html(localede.sendlocation);
        $('#phone-app-contact-page-sharecontact').html(localede.sharecontact);
        $('#phone-app-contact-page-delete').html(localede.deletecontact);

        // Placeholder
        $('#pbms-amount').attr('placeholder', localede.pbmsamount);
        $('#inputcardnumber').attr(
          'placeholder',
          localede.placeholdercardnumber
        );
        $('#inputtransferamoutn').attr(
          'placeholder',
          localede.placeholderamount
        );
        $('#pciinputname').attr('placeholder', localede.name);
        $('#pciinputname2').attr('placeholder', localede.name);
        $('#pciinputnumber').attr('placeholder', localede.number);
        $('#pciinputnumber2').attr('placeholder', localede.number);
        $('#phone-chat-input-message').attr('placeholder', localede.message);
        $('#psw').attr('placeholder', localede.png);
        $('.phone-service-message-input').attr(
          'placeholder',
          localede.description
        );
        $('#phone-business-input-message').attr(
          'placeholder',
          localede.message
        );
        $('#motd').attr('placeholder', localede.message);
        $('#ptw-tweetinput').attr('placeholder', localede.message);
        $('#phone-radio-frequenz-input').attr(
          'placeholder',
          localede.frequency
        );
        $('#ptw-imageurl').attr('placeholder', localede.url);
        $('#ptw-pbinput').attr('placeholder', localede.url);
        $('#ptw-username').attr('placeholder', localede.name);
        $('#ptw-ftavatarurl').attr('placeholder', localede.url);
        $('#ptw-ftusername').attr('placeholder', localede.name);
        $('#ptw-ftid').attr('placeholder', localede.name);

        // Lifeinvader
        $('#advertisement-headline').html(localede.advertisementheadline);
        $('#abtext').html(localede.abtext);
        $('#yourname').html(localede.yourname);
        $('#abmessage').html(localede.abmessage);
        $('#advertisement-sendnewmessage').html(
          localede.advertisementsendnewmessage
        );

        // Market
        $('#dmarketheadline').html(localede.dmarketheadline);
        $('#price').html(localede.price);
        $('#stock').html(localede.stock);

        // 0.72
        $('#phone-constant-radio').html(localede.enableconstant);

        // 0.73
        $('.phone-app-call-historyheadline').html(localede.callhistoryheadline);

        // 0.74
        $('.locale_enterimage').each(function () {
          $(this).html(localede.enterimage);
        });
        $('.locale_cancel').each(function () {
          $(this).html(localede.cancelh);
        });

        $('.locale_submit').each(function () {
          $(this).html(localede.submith);
        });

        $('.locale_sendphoto').each(function () {
          $(this).html(localede.sendphotoh);
        });

        $('.locale_sendlocation').each(function () {
          $(this).html(localede.sendlocation);
        });

        $('.locale_dispatches').each(function () {
          $(this).html(localede.dispatches);
        });

        $('.locale_accept').each(function () {
          $(this).html(localede.accept);
        });

        $('.locale_decline').each(function () {
          $(this).html(localede.decline);
        });

        $('.locale_delete').each(function () {
          $(this).html(localede.delete);
        });

        $('.locale_entermessage').each(function () {
          $(this).html(localede.entermessage);
        });

        $('.locale_settings').each(function () {
          $(this).html(localede.settings);
        });

        $('.locale_setmotd').each(function () {
          $(this).html(localede.setmotd);
        });

        $('.locale_moneymanagement').each(function () {
          $(this).html(localede.moneymanagement);
        });

        $('.locale_setjobnumber').each(function () {
          $(this).html(localede.setjobnumber);
        });

        $('.locale_accountsaldo').each(function () {
          $(this).html(localede.accountsaldo);
        });

        $('.locale_amount').each(function () {
          $(this).html(localede.amount);
        });

        $('#business-mm-amount').attr('placeholder', localede.amount);

        $('.locale_withdraw').each(function () {
          $(this).html(localede.withdraw);
        });

        $('.locale_deposit').each(function () {
          $(this).html(localede.deposit);
        });

        $('.locale_messages').each(function () {
          $(this).html(localede.messages);
        });

        $('.locale_back').each(function () {
          $(this).html(localede.back);
        });

        $('.locale_deletechat').each(function () {
          $(this).html(localede.deletechat);
        });

        $('.locale_services').each(function () {
          $(this).html(localede.services);
        });

        $('.locale_enterid').each(function () {
          $(this).html(localede.locale_enterid);
        });

        $('.locale_enterrank').each(function () {
          $(this).html(localede.locale_enterrank);
        });

        $('.locale_actions').each(function () {
          $(this).html(localede.locale_actions);
        });

        $('.locale_setwaypointtruck').each(function () {
          $(this).html(localede.locale_setwaypointtruck);
        });

        $('.locale_setwaypointtogoal').each(function () {
          $(this).html(localede.locale_setwaypointtogoal);
        });

        $('.locale_abortdelivery').each(function () {
          $(this).html(localede.locale_abortdelivery);
        });

        $('.locale_home').each(function () {
          $(this).html(localede.locale_home);
        });

        $('.locale_selectroute').each(function () {
          $(this).html(localede.locale_selectroute);
        });

        $('.locale_short').each(function () {
          $(this).html(localede.locale_short);
        });

        $('.locale_mid').each(function () {
          $(this).html(localede.locale_mid);
        });

        $('.locale_long').each(function () {
          $(this).html(localede.locale_long);
        });

        $('.locale_selecttruck').each(function () {
          $(this).html(localede.locale_selecttruck);
        });

        $('.locale_delivery').each(function () {
          $(this).html(localede.locale_delivery);
        });

        $('.locale_welcome').each(function () {
          $(this).html(localede.locale_welcome);
        });

        $('.locale_startnewjob').each(function () {
          $(this).html(localede.locale_startnewjob);
        });

        $('.locale_viewallvehicles').each(function () {
          $(this).html(localede.locale_viewallvehicles);
        });

        $('.locale_history').each(function () {
          $(this).html(localede.locale_history);
        });

        $('.locale_alltrucks').each(function () {
          $(this).html(localede.locale_alltrucks);
        });

        $('.locale_broker').each(function () {
          $(this).html(localede.broker);
        });

        $('.locale_investments').each(function () {
          $(this).html(localede.investment);
        });

        $('.locale_stockmarket').each(function () {
          $(this).html(localede.stockmarket);
        });

        $('.locale_price').each(function () {
          $(this).html(localede.price);
        });

        $('.locale_buyh').each(function () {
          $(this).html(localede.buyh);
        });

        $('.locale_worth').each(function () {
          $(this).html(localede.worth);
        });

        $('.locale_buyin').each(function () {
          $(this).html(localede.buyin);
        });

        $('.locale_performance').each(function () {
          $(this).html(localede.performance);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(localede.enteramount);
        });

        $('.locale_enterid').each(function () {
          $(this).html(localede.enteramount);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(localede.enteramount);
        });

        $('.locale_exchange').each(function () {
          $(this).html(localede.exchange);
        });

        $('.locale_user').each(function () {
          $(this).html(localede.user);
        });

        $('.locale_stats').each(function () {
          $(this).html(localede.stats);
        });

        $('.locale_bought').each(function () {
          $(this).html(localede.bought);
        });

        $('.locale_sold').each(function () {
          $(this).html(localede.sold);
        });

        $('.locale_profit').each(function () {
          $(this).html(localede.profit);
        });

        $('.locale_groupchat').each(function () {
          $(this).html(localede.groupchat);
        });

        $('.locale_overview').each(function () {
          $(this).html(localede.overview);
        });

        $('.locale_next').each(function () {
          $(this).html(localede.next);
        });

        $('.locale_name').each(function () {
          $(this).html(localede.name);
        });

        $('.locale_image').each(function () {
          $(this).html(localede.image);
        });

        $('.locale_testimage').each(function () {
          $(this).html(localede.testimage);
        });

        $('.locale_actions').each(function () {
          $(this).html(localede.actions);
        });

        $('.locale_changephoto').each(function () {
          $(this).html(localede.changeimage);
        });

        $('.locale_changename').each(function () {
          $(this).html(localede.changename);
        });

        $('.locale_addmember').each(function () {
          $(this).html(localede.addmember);
        });

        $('.locale_leave').each(function () {
          $(this).html(localede.leave);
        });

        $('.locale_participants').each(function () {
          $(this).html(localede.participants);
        });

        $('.locale_chat').each(function () {
          $(this).html(localede.chat);
        });

        $('.locale_settings').each(function () {
          $(this).html(localede.settings);
        });

        $('.locale_save').each(function () {
          $(this).html(localede.save);
        });

        $('.locale_rank').each(function () {
          $(this).html(localede.rank);
        });

        $('.locale_addcontact').each(function () {
          $(this).html(localede.addcontact);
        });

        $('.locale_makeadmin').each(function () {
          $(this).html(localede.makeadmin);
        });

        $('.locale_removeasadmin').each(function () {
          $(this).html(localede.removeasadmin);
        });

        $('.locale_kick').each(function () {
          $(this).html(localede.kick);
        });

        $('.locale_takephoto').each(function () {
          $(this).html(localede.takephoto);
        });

        // 0.75 beta 4
        $('.locale_djump').each(function () {
          $(this).html(localede.djump);
        });

        $('.locale_playh').each(function () {
          $(this).html(localede.playh);
        });

        $('.locale_gameover').each(function () {
          $(this).html(localede.gameover);
        });

        $('.locale_score').each(function () {
          $(this).html(localede.yourescore);
        });

        $('.locale_highscore').each(function () {
          $(this).html(localede.highscore);
        });

        $('.locale_home').each(function () {
          $(this).html(localede.home);
        });

        $('.locale_rankingh').each(function () {
          $(this).html(localede.rankingh);
        });

        $('.locale_settingsh').each(function () {
          $(this).html(localede.settingsh);
        });

        $('.locale_sound').each(function () {
          $(this).html(localede.sound);
        });

        // 0.76

        $('.locale_share').each(function () {
          $(this).html(localede.share);
        });

        $('.locale_camera').each(function () {
          $(this).html(localede.camera);
        });

        $('.locale_copylink').each(function () {
          $(this).html(localede.copylink);
        });

        $('.locale_fullscreen').each(function () {
          $(this).html(localede.fullscreen);
        });

        $('.locale_save2').each(function () {
          $(this).html(localede.save3);
        });

        $('.locale_setwallpaper').each(function () {
          $(this).html(localede.setwallpaper);
        });

        $('.locale_shareondiscord').each(function () {
          $(this).html(localede.shareondiscord);
        });

        $('.locale_ddrop').each(function () {
          $(this).html(localede.ddrop);
        });

        $('.locale_sendinmessages').each(function () {
          $(this).html(localede.sendinmessages);
        });

        $('.locale_gallery').each(function () {
          $(this).html(localede.gallery);
        });

        $('.locale_select').each(function () {
          $(this).html(localede.select);
        });

        $('.locale_image').each(function () {
          $(this).html(localede.image);
        });

        $('.locale_information').each(function () {
          $(this).html(localede.information);
        });

        $('.locale_addedon').each(function () {
          $(this).html(localede.addedon);
        });

        $('.locale_selectitems').each(function () {
          $(this).html(localede.selectitems);
        });

        $('.locale_mail').each(function () {
          $(this).html(localede.mail);
        });

        $('.locale_sent').each(function () {
          $(this).html(localede.sent);
        });

        $('.locale_newmail').each(function () {
          $(this).html(localede.newmail);
        });

        $('.locale_receivers').each(function () {
          $(this).html(localede.receivers);
        });

        $('.locale_subject').each(function () {
          $(this).html(localede.subject);
        });

        $('.locale_message').each(function () {
          $(this).html(localede.message);
        });

        $('.locale_business').each(function () {
          $(this).html(localede.business);
        });

        $('.locale_radio').each(function () {
          $(this).html(localede.radio);
        });

        $('.locale_twitter').each(function () {
          $(this).html(localede.twitter);
        });

        $('.locale_bank').each(function () {
          $(this).html(localede.bank);
        });

        $('.locale_ad').each(function () {
          $(this).html(localede.ad);
        });

        $('.locale_market').each(function () {
          $(this).html(localede.market);
        });

        $('.locale_calculator').each(function () {
          $(this).html(localede.calculator);
        });

        $('.locale_bitcoin').each(function () {
          $(this).html(localede.bitcoin);
        });

        $('.locale_trucker').each(function () {
          $(this).html(localede.trucker);
        });

        $('.locale_attachments').each(function () {
          $(this).html(localede.attachments);
        });

        $('.locale_pbfmember').each(function () {
          $(this).html(localede.pbfmember);
        });

        $('#phonesettingsselectionapptext ').html(
          '<i class="fa-solid fa-underline"></i>&nbsp' + localede.showapptext
        );

        $('.locale').each(function () {
          var locl = $(this).data('locale');
          $(this).html(localede[locl]);
        });

        $('.plocale').each(function () {
          var locl = $(this).data('locale');
          $(this).attr('placeholder', localede[locl]);
        });
      }

      if (locale2 == 'fr') {
        $('.phone-call-incoming-title ').html(localefr.callincomingtitle);
        $('.phone-call-outgoing-title ').html(localefr.calloutgoingtitle);
        $('.phone-call-ongoing-title ').html(localefr.callongoingtitle);
        $('#phone-contact-headline ').html(localefr.phonecontactheadline);
        $('#pciheadoverview ').html(localefr.pciheadoverview);
        $('#pcinumbertext ').html(localefr.pcinumber);
        $('#pcicall2 ').html(localefr.pcicall);
        $('#pcimessage2 ').html(localefr.pcimessage);
        $('#pcifavourit2 ').html(localefr.pcifavorit);
        $('#pcigps ').html(localefr.pcigps);
        $('#pcishare ').html(localefr.pcishare);
        $('#pcidelete ').html(localefr.pcidelete);
        $('#pciheadadd ').html(localefr.pciheadadd);
        $('#pciinputsubmit ').html(localefr.pciinputsubmit);
        $('#pciheadedit ').html(localefr.pciheadedit);
        $('#pcieditsubmit ').html(localefr.pcieditsubmit);
        $('#phoneheadlinemessage ').html(localefr.phoneheadlinemessage);
        $('#phoneheadlinechat ').html(localefr.phoneheadlinechat);
        $('#phoneheadlinephone ').html(localefr.phoneheadlinephone);
        $('#phoneheadlinesettings ').html(localefr.phoneheadlinesettings);
        $('.headerbacksettings').html(localefr.phoneheadlinesettings);
        $('#phonesettingsselectionflightmode ').html(
          '<i class="fas fa-plane"></i> &nbsp' +
          localefr.phonesettingsselectionflightmode
        );
        $('#phonesettingsselectionmute ').html(
          '<i class="fas fa-volume-mute"></i> &nbsp' +
          localefr.phonesettingsselectionmute
        );
        $('#phonesettingsselectiondarkmode ').html(
          '<i class="fas fa-adjust"></i> &nbsp' +
          localefr.phonesettingsselectiondarkmode
        );
        $('#phonesettingsselectionanonymous ').html(
          '<i class="fa-solid fa-user-ninja"></i> &nbsp' +
          localefr.phonesettingsselectionanonymous
        );
        $('#phonesettingsselectionwallpaper ').html(
          '<i class="fas fa-image"></i> &nbsp' +
          localefr.phonesettingsselectionwallpaper
        );
        $('#phone-settings-selection-changecase ').html(
          '<i class="fas fa-mobile"></i> &nbsp' +
          localefr.phonesettingsselectioncase
        );
        $('#phonesettingsselectionringtone ').html(
          '<i class="fas fa-bell"></i> &nbsp' +
          localefr.phonesettingsselectionringtone
        );
        $('#pswh ').html(localefr.pswh);
        $('#pswsubmitbutton ').html(localefr.pswsubmitbutton);
        $('#phservice ').html(localefr.phservice);
        $('#psmn ').html(localefr.psmn);
        $('#pss ').html(localefr.pss);
        $('#pssposition ').html(localefr.pssposition);
        $('#phone-service-button ').html(localefr.phoneservicebutton);
        $('#phbusiness ').html(localefr.phbusiness);
        $('#motdchange ').html(localefr.motdchange);
        $('#pbbacceptfont ').html(localefr.pbbacceptfont);
        $('#pbbacceptfont2 ').html(localefr.pbbacceptfont2);
        $('#pbsjobnumber ').html(localefr.jobnumber);
        $('#pbsmfont ').html(localefr.motdchange);
        $('#pbsmfont2 ').html(localefr.pbsmfont2);
        $('#pbsmfont3 ').html(localefr.pbsmfont3);
        $('#pbsjobmoney ').html(localefr.pbsjobmoney);
        $('#phfunk ').html(localefr.phfunk);
        $('#phone-frequenz-join-button ').html(localefr.pfjb);
        $('#phone-frequenz-leave-button ').html(localefr.pflb);
        $('#phonesettingsnumbertext ').html(
          "<i class='fas fa-phone-alt'></i> &nbsp" + localefr.phonenumber
        );
        $('.ptw-submit ').each(function () {
          $(this).html(localefr.ptwtweetsubmit);
        });
        $('.twitter-firsttime-button ').html(localefr.ptwtweetsubmit);
        $('.ptw-pbsubmit ').each(function () {
          $(this).html(localefr.ptwtweetsubmit);
        });
        $('#phoneheadlinetwitter ').html(localefr.phoneheadlinetwitter);
        $('#ptw-tweetheader-font ').html(localefr.ptwtweetheaderfont);
        $('#ptw-header-font ').html(localefr.ptwheaderfont);
        $('#ptw-header-font2 ').html(localefr.ptwheaderfont2);
        $('#ptw-header-font3 ').html(localefr.ptwheaderfont3);
        $('#ptw-header-font4 ').html(localefr.ptwheaderfont4);
        $('#ptw-header-font5 ').html(localefr.ptwheaderfont5);
        $('#ptw-header-font6 ').html(localefr.ptwheaderfont3);
        $('#ptw-header-font7 ').html(localefr.ptwheaderfont7);
        $('#phonetwitternotification ').html(localefr.tweetnotificaton);

        // 0.60
        // Banking app
        $('#bankapp-headline').html(localefr.bankappheadline);
        $('.phone-bankapp-cards-headline').html(
          localefr.phonebankappcardsheadline
        );
        $('.phone-card-cardholder').html(localefr.cardcardholder);
        $('.phone-card-expires').html(localefr.cardexpires);
        $('.phone-bankapp-cards-headline').html(
          localefr.phonebankappcardsheadline
        );
        $('.bankapp-transfer-headline').html(localefr.bankapptransferheadline);
        $('.bankapp-transfer-cardnumber').html(
          localefr.bankapptransfercardnumber
        );
        $('.bankapp-transfer-amount').html(localefr.bankapptransferamount);
        $('.bankapp-transfer-button').html(localefr.bankapptransferbutton);

        // 0.61
        // Businessapp
        $('#pbrs-headlineheadline').html(localefr.magnagment);
        $('#pbrs-nameheadline').html(localefr.pbrsnameheadline);
        $('#pbrs-gradeheadline').html(localefr.pbrsgradeheadline);
        $('#pbrs-rankheadline').html(localefr.pbrsrankheadline);
        $('#pbrs-uprank').html(localefr.pbrsuprank);
        $('#pbrs-derank').html(localefr.pbrsderank);
        $('#pbrs-updaterank').html(localefr.pbrsupdaterank);
        $('#pbrs-fire').html(localefr.pbrsfire);
        $('#pbrs-recruitheadline').html(localefr.pbrsrecruitheadline);
        $('#pbrs-recruit').html(localefr.pbrsrecruit);
        $('#pbms-headlineheadline').html(localefr.pbmsheadlineheadline);
        $('#pbms-nameheadline').html(localefr.pbmsnameheadline);
        $('#pmbs-deposit').html(localefr.pmbsdeposit);
        $('#pmbs-withdraw').html(localefr.pmbswithdraw);

        // 0.7
        $('#prmsheadline').html(localefr.prmsheadline);
        $('#prmsdelete').html(localefr.prmsdelete);

        // 0.73
        $('#phone-app-contact-page-add').html(localefr.add);
        $('#phone-app-contact-page-edit').html(localefr.edit);
        $('#phone-app-contact-headline').html(localefr.phonecontactheadline);
        $('.phone-app-contact-page-contact').each(function () {
          $(this).html(localefr.contact);
        });
        $('.firstname').each(function () {
          $(this).html(localefr.firstname);
        });
        $('.lastname').each(function () {
          $(this).html(localefr.lastname);
        });
        $('.phonenumber').each(function () {
          $(this).html(localefr.phonenumber);
        });
        $('.numbertext').each(function () {
          $(this).html(localefr.number);
        });
        $('.timetext').each(function () {
          $(this).html(localefr.time);
        });
        $('#phone-app-contact-edit-delete').html(localefr.delete);
        $('#phone-app-edit-newcontact').html(localefr.pciheadedit);
        $('#phone-recent-message-edit').html(localefr.edit);
        $('#phone-app-contact-new-editbutton').html(localefr.save2);
        $('#phone-app-contact-new-savebutton').html(localefr.save2);
        $('.phone-app-contact-page-sendlocatoin').html(localefr.sendlocation);
        $('#phone-app-contact-page-sharecontact').html(localefr.sharecontact);
        $('#phone-app-contact-page-delete').html(localefr.deletecontact);

        // Placeholder
        $('#pbms-amount').attr('placeholder', localefr.pbmsamount);
        $('#inputcardnumber').attr(
          'placeholder',
          localefr.placeholdercardnumber
        );
        $('#inputtransferamoutn').attr(
          'placeholder',
          localefr.placeholderamount
        );
        $('#pciinputname').attr('placeholder', localefr.name);
        $('#pciinputname2').attr('placeholder', localefr.name);
        $('#pciinputnumber').attr('placeholder', localefr.number);
        $('#pciinputnumber2').attr('placeholder', localefr.number);
        $('#phone-chat-input-message').attr('placeholder', localefr.message);
        $('#psw').attr('placeholder', localefr.png);
        $('.phone-service-message-input').attr(
          'placeholder',
          localefr.description
        );
        $('#phone-business-input-message').attr(
          'placeholder',
          localefr.message
        );
        $('#motd').attr('placeholder', localefr.message);
        $('#ptw-tweetinput').attr('placeholder', localefr.message);
        $('#phone-radio-frequenz-input').attr(
          'placeholder',
          localefr.frequency
        );
        $('#ptw-imageurl').attr('placeholder', localefr.url);
        $('#ptw-pbinput').attr('placeholder', localefr.url);
        $('#ptw-username').attr('placeholder', localefr.name);
        $('#ptw-ftavatarurl').attr('placeholder', localefr.url);
        $('#ptw-ftusername').attr('placeholder', localefr.name);
        $('#ptw-ftid').attr('placeholder', localefr.name);

        // Lifeinvader
        $('#advertisement-headline').html(localefr.advertisementheadline);
        $('#abtext').html(localefr.abtext);
        $('#yourname').html(localefr.yourname);
        $('#abmessage').html(localefr.abmessage);
        $('#advertisement-sendnewmessage').html(
          localefr.advertisementsendnewmessage
        );

        // Market
        $('#dmarketheadline').html(localefr.dmarketheadline);
        $('#price').html(localefr.price);
        $('#stock').html(localefr.stock);

        // 0.72
        $('#phone-constant-radio').html(localefr.enableconstant);

        // 0.73
        $('.phone-app-call-historyheadline').html(localefr.callhistoryheadline);

        // 0.74
        $('.locale_enterimage').each(function () {
          $(this).html(localefr.enterimage);
        });
        $('.locale_cancel').each(function () {
          $(this).html(localefr.cancelh);
        });

        $('.locale_submit').each(function () {
          $(this).html(localefr.submith);
        });

        $('.locale_sendphoto').each(function () {
          $(this).html(localefr.sendphotoh);
        });

        $('.locale_sendlocation').each(function () {
          $(this).html(localefr.sendlocation);
        });

        $('.locale_dispatches').each(function () {
          $(this).html(localefr.dispatches);
        });

        $('.locale_accept').each(function () {
          $(this).html(localefr.accept);
        });

        $('.locale_decline').each(function () {
          $(this).html(localefr.decline);
        });

        $('.locale_delete').each(function () {
          $(this).html(localefr.delete);
        });

        $('.locale_entermessage').each(function () {
          $(this).html(localefr.entermessage);
        });

        $('.locale_settings').each(function () {
          $(this).html(localefr.settings);
        });

        $('.locale_setmotd').each(function () {
          $(this).html(localefr.setmotd);
        });

        $('.locale_moneymanagement').each(function () {
          $(this).html(localefr.moneymanagement);
        });

        $('.locale_setjobnumber').each(function () {
          $(this).html(localefr.setjobnumber);
        });

        $('.locale_accountsaldo').each(function () {
          $(this).html(localefr.accountsaldo);
        });

        $('.locale_amount').each(function () {
          $(this).html(localefr.amount);
        });

        $('#business-mm-amount').attr('placeholder', localefr.amount);

        $('.locale_withdraw').each(function () {
          $(this).html(localefr.withdraw);
        });

        $('.locale_deposit').each(function () {
          $(this).html(localefr.deposit);
        });

        $('.locale_messages').each(function () {
          $(this).html(localefr.messages);
        });

        $('.locale_back').each(function () {
          $(this).html(localefr.back);
        });

        $('.locale_deletechat').each(function () {
          $(this).html(localefr.deletechat);
        });

        $('.locale_services').each(function () {
          $(this).html(localefr.services);
        });

        $('.locale_enterid').each(function () {
          $(this).html(localefr.locale_enterid);
        });

        $('.locale_enterrank').each(function () {
          $(this).html(localefr.locale_enterrank);
        });

        $('.locale_actions').each(function () {
          $(this).html(localefr.locale_actions);
        });

        $('.locale_setwaypointtruck').each(function () {
          $(this).html(localefr.locale_setwaypointtruck);
        });

        $('.locale_setwaypointtogoal').each(function () {
          $(this).html(localefr.locale_setwaypointtogoal);
        });

        $('.locale_abortdelivery').each(function () {
          $(this).html(localefr.locale_abortdelivery);
        });

        $('.locale_home').each(function () {
          $(this).html(localefr.locale_home);
        });

        $('.locale_selectroute').each(function () {
          $(this).html(localefr.locale_selectroute);
        });

        $('.locale_short').each(function () {
          $(this).html(localefr.locale_short);
        });

        $('.locale_mid').each(function () {
          $(this).html(localefr.locale_mid);
        });

        $('.locale_long').each(function () {
          $(this).html(localefr.locale_long);
        });

        $('.locale_selecttruck').each(function () {
          $(this).html(localefr.locale_selecttruck);
        });

        $('.locale_delivery').each(function () {
          $(this).html(localefr.locale_delivery);
        });

        $('.locale_welcome').each(function () {
          $(this).html(localefr.locale_welcome);
        });

        $('.locale_startnewjob').each(function () {
          $(this).html(localefr.locale_startnewjob);
        });

        $('.locale_viewallvehicles').each(function () {
          $(this).html(localefr.locale_viewallvehicles);
        });

        $('.locale_history').each(function () {
          $(this).html(localefr.locale_history);
        });

        $('.locale_alltrucks').each(function () {
          $(this).html(localefr.locale_alltrucks);
        });

        $('.locale_broker').each(function () {
          $(this).html(localefr.broker);
        });

        $('.locale_investments').each(function () {
          $(this).html(localefr.investment);
        });

        $('.locale_stockmarket').each(function () {
          $(this).html(localefr.stockmarket);
        });

        $('.locale_price').each(function () {
          $(this).html(localefr.price);
        });

        $('.locale_buyh').each(function () {
          $(this).html(localefr.buyh);
        });

        $('.locale_worth').each(function () {
          $(this).html(localefr.worth);
        });

        $('.locale_buyin').each(function () {
          $(this).html(localefr.buyin);
        });

        $('.locale_performance').each(function () {
          $(this).html(localefr.performance);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(localefr.enteramount);
        });

        $('.locale_enterid').each(function () {
          $(this).html(localefr.enteramount);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(localefr.enteramount);
        });

        $('.locale_exchange').each(function () {
          $(this).html(localefr.exchange);
        });

        $('.locale_user').each(function () {
          $(this).html(localefr.user);
        });

        $('.locale_stats').each(function () {
          $(this).html(localefr.stats);
        });

        $('.locale_bought').each(function () {
          $(this).html(localefr.bought);
        });

        $('.locale_sold').each(function () {
          $(this).html(localefr.sold);
        });

        $('.locale_profit').each(function () {
          $(this).html(localefr.profit);
        });

        $('.locale_groupchat').each(function () {
          $(this).html(localefr.groupchat);
        });

        $('.locale_overview').each(function () {
          $(this).html(localefr.overview);
        });

        $('.locale_next').each(function () {
          $(this).html(localefr.next);
        });

        $('.locale_name').each(function () {
          $(this).html(localefr.name);
        });

        $('.locale_image').each(function () {
          $(this).html(localefr.image);
        });

        $('.locale_testimage').each(function () {
          $(this).html(localefr.testimage);
        });

        $('.locale_actions').each(function () {
          $(this).html(localefr.actions);
        });

        $('.locale_changephoto').each(function () {
          $(this).html(localefr.changeimage);
        });

        $('.locale_changename').each(function () {
          $(this).html(localefr.changename);
        });

        $('.locale_addmember').each(function () {
          $(this).html(localefr.addmember);
        });

        $('.locale_leave').each(function () {
          $(this).html(localefr.leave);
        });

        $('.locale_participants').each(function () {
          $(this).html(localefr.participants);
        });

        $('.locale_chat').each(function () {
          $(this).html(localefr.chat);
        });

        $('.locale_settings').each(function () {
          $(this).html(localefr.settings);
        });

        $('.locale_save').each(function () {
          $(this).html(localefr.save);
        });

        $('.locale_rank').each(function () {
          $(this).html(localefr.rank);
        });

        $('.locale_addcontact').each(function () {
          $(this).html(localefr.addcontact);
        });

        $('.locale_makeadmin').each(function () {
          $(this).html(localefr.makeadmin);
        });

        $('.locale_removeasadmin').each(function () {
          $(this).html(localefr.removeasadmin);
        });

        $('.locale_kick').each(function () {
          $(this).html(localefr.kick);
        });

        $('.locale_takephoto').each(function () {
          $(this).html(localefr.takephoto);
        });

        // 0.75 beta 4
        $('.locale_djump').each(function () {
          $(this).html(localefr.djump);
        });

        $('.locale_playh').each(function () {
          $(this).html(localefr.playh);
        });

        $('.locale_gameover').each(function () {
          $(this).html(localefr.gameover);
        });

        $('.locale_score').each(function () {
          $(this).html(localefr.yourescore);
        });

        $('.locale_highscore').each(function () {
          $(this).html(localefr.highscore);
        });

        $('.locale_home').each(function () {
          $(this).html(localefr.home);
        });

        $('.locale_rankingh').each(function () {
          $(this).html(localefr.rankingh);
        });

        $('.locale_settingsh').each(function () {
          $(this).html(localefr.settingsh);
        });

        $('.locale_sound').each(function () {
          $(this).html(localefr.sound);
        });

        // 0.76

        $('.locale_share').each(function () {
          $(this).html(localefr.share);
        });

        $('.locale_camera').each(function () {
          $(this).html(localefr.camera);
        });

        $('.locale_copylink').each(function () {
          $(this).html(localefr.copylink);
        });

        $('.locale_fullscreen').each(function () {
          $(this).html(localefr.fullscreen);
        });

        $('.locale_save2').each(function () {
          $(this).html(localefr.save3);
        });

        $('.locale_setwallpaper').each(function () {
          $(this).html(localefr.setwallpaper);
        });

        $('.locale_shareondiscord').each(function () {
          $(this).html(localefr.shareondiscord);
        });

        $('.locale_ddrop').each(function () {
          $(this).html(localefr.ddrop);
        });

        $('.locale_sendinmessages').each(function () {
          $(this).html(localefr.sendinmessages);
        });

        $('.locale_gallery').each(function () {
          $(this).html(localefr.gallery);
        });

        $('.locale_select').each(function () {
          $(this).html(localefr.select);
        });

        $('.locale_image').each(function () {
          $(this).html(localefr.image);
        });

        $('.locale_information').each(function () {
          $(this).html(localefr.information);
        });

        $('.locale_addedon').each(function () {
          $(this).html(localefr.addedon);
        });

        $('.locale_selectitems').each(function () {
          $(this).html(localefr.selectitems);
        });

        $('.locale_mail').each(function () {
          $(this).html(localefr.mail);
        });

        $('.locale_sent').each(function () {
          $(this).html(localefr.sent);
        });

        $('.locale_newmail').each(function () {
          $(this).html(localefr.newmail);
        });

        $('.locale_receivers').each(function () {
          $(this).html(localefr.receivers);
        });

        $('.locale_subject').each(function () {
          $(this).html(localefr.subject);
        });

        $('.locale_message').each(function () {
          $(this).html(localefr.message);
        });

        $('.locale_business').each(function () {
          $(this).html(localefr.business);
        });

        $('.locale_radio').each(function () {
          $(this).html(localefr.radio);
        });

        $('.locale_twitter').each(function () {
          $(this).html(localefr.twitter);
        });

        $('.locale_bank').each(function () {
          $(this).html(localefr.bank);
        });

        $('.locale_ad').each(function () {
          $(this).html(localefr.ad);
        });

        $('.locale_market').each(function () {
          $(this).html(localefr.market);
        });

        $('.locale_calculator').each(function () {
          $(this).html(localefr.calculator);
        });

        $('.locale_bitcoin').each(function () {
          $(this).html(localefr.bitcoin);
        });

        $('.locale_trucker').each(function () {
          $(this).html(localefr.trucker);
        });

        $('.locale_attachments').each(function () {
          $(this).html(localefr.attachments);
        });

        $('.locale_pbfmember').each(function () {
          $(this).html(localefr.pbfmember);
        });

        $('#phonesettingsselectionapptext ').html(
          '<i class="fa-solid fa-underline"></i>&nbsp' + localefr.showapptext
        );

        $('.locale').each(function () {
          var locl = $(this).data('locale');
          $(this).html(localefr[locl]);
        });

        $('.plocale').each(function () {
          var locl = $(this).data('locale');
          $(this).attr('placeholder', localefr[locl]);
        });
      }

      if (locale2 == 'pl') {
        $('.phone-call-incoming-title ').html(localepl.callincomingtitle);
        $('.phone-call-outgoing-title ').html(localepl.calloutgoingtitle);
        $('.phone-call-ongoing-title ').html(localepl.callongoingtitle);
        $('#phone-contact-headline ').html(localepl.phonecontactheadline);
        $('#pciheadoverview ').html(localepl.pciheadoverview);
        $('#pcinumbertext ').html(localepl.pcinumber);
        $('#pcicall2 ').html(localepl.pcicall);
        $('#pcimessage2 ').html(localepl.pcimessage);
        $('#pcifavourit2 ').html(localepl.pcifavorit);
        $('#pcigps ').html(localepl.pcigps);
        $('#pcishare ').html(localepl.pcishare);
        $('#pcidelete ').html(localepl.pcidelete);
        $('#pciheadadd ').html(localepl.pciheadadd);
        $('#pciinputsubmit ').html(localepl.pciinputsubmit);
        $('#pciheadedit ').html(localepl.pciheadedit);
        $('#pcieditsubmit ').html(localepl.pcieditsubmit);
        $('#phoneheadlinemessage ').html(localepl.phoneheadlinemessage);
        $('#phoneheadlinechat ').html(localepl.phoneheadlinechat);
        $('#phoneheadlinephone ').html(localepl.phoneheadlinephone);
        $('#phoneheadlinesettings ').html(localepl.phoneheadlinesettings);
        $('.headerbacksettings').html(localepl.phoneheadlinesettings);
        $('#phonesettingsselectionflightmode ').html(
          '<i class="fas fa-plane"></i> &nbsp' +
          localepl.phonesettingsselectionflightmode
        );
        $('#phonesettingsselectionmute ').html(
          '<i class="fas fa-volume-mute"></i> &nbsp' +
          localepl.phonesettingsselectionmute
        );
        $('#phonesettingsselectiondarkmode ').html(
          '<i class="fas fa-adjust"></i> &nbsp' +
          localepl.phonesettingsselectiondarkmode
        );
        $('#phonesettingsselectionanonymous ').html(
          '<i class="fa-solid fa-user-ninja"></i> &nbsp' +
          localepl.phonesettingsselectionanonymous
        );
        $('#phonesettingsselectionwallpaper ').html(
          '<i class="fas fa-image"></i> &nbsp' +
          localepl.phonesettingsselectionwallpaper
        );
        $('#phone-settings-selection-changecase ').html(
          '<i class="fas fa-mobile"></i> &nbsp' +
          localepl.phonesettingsselectioncase
        );
        $('#phonesettingsselectionringtone ').html(
          '<i class="fas fa-bell"></i> &nbsp' +
          localepl.phonesettingsselectionringtone
        );
        $('#pswh ').html(localepl.pswh);
        $('#pswsubmitbutton ').html(localepl.pswsubmitbutton);
        $('#phservice ').html(localepl.phservice);
        $('#psmn ').html(localepl.psmn);
        $('#pss ').html(localepl.pss);
        $('#pssposition ').html(localepl.pssposition);
        $('#phone-service-button ').html(localepl.phoneservicebutton);
        $('#phbusiness ').html(localepl.phbusiness);
        $('#motdchange ').html(localepl.motdchange);
        $('#pbbacceptfont ').html(localepl.pbbacceptfont);
        $('#pbbacceptfont2 ').html(localepl.pbbacceptfont2);
        $('#pbsjobnumber ').html(localepl.jobnumber);
        $('#pbsmfont ').html(localepl.motdchange);
        $('#pbsmfont2 ').html(localepl.pbsmfont2);
        $('#pbsmfont3 ').html(localepl.pbsmfont3);
        $('#pbsjobmoney ').html(localepl.pbsjobmoney);
        $('#phfunk ').html(localepl.phfunk);
        $('#phone-frequenz-join-button ').html(localepl.pfjb);
        $('#phone-frequenz-leave-button ').html(localepl.pflb);
        $('#phonesettingsnumbertext ').html(
          "<i class='fas fa-phone-alt'></i> &nbsp" + localepl.phonenumber
        );
        $('.ptw-submit ').each(function () {
          $(this).html(localepl.ptwtweetsubmit);
        });
        $('.twitter-firsttime-button ').html(localepl.ptwtweetsubmit);
        $('.ptw-pbsubmit ').each(function () {
          $(this).html(localepl.ptwtweetsubmit);
        });
        $('#phoneheadlinetwitter ').html(localepl.phoneheadlinetwitter);
        $('#ptw-tweetheader-font ').html(localepl.ptwtweetheaderfont);
        $('#ptw-header-font ').html(localepl.ptwheaderfont);
        $('#ptw-header-font2 ').html(localepl.ptwheaderfont2);
        $('#ptw-header-font3 ').html(localepl.ptwheaderfont3);
        $('#ptw-header-font4 ').html(localepl.ptwheaderfont4);
        $('#ptw-header-font5 ').html(localepl.ptwheaderfont5);
        $('#ptw-header-font6 ').html(localepl.ptwheaderfont3);
        $('#ptw-header-font7 ').html(localepl.ptwheaderfont7);
        $('#phonetwitternotification ').html(localepl.tweetnotificaton);

        // 0.60
        // Banking app
        $('#bankapp-headline').html(localepl.bankappheadline);
        $('.phone-bankapp-cards-headline').html(
          localepl.phonebankappcardsheadline
        );
        $('.phone-card-cardholder').html(localepl.cardcardholder);
        $('.phone-card-expires').html(localepl.cardexpires);
        $('.phone-bankapp-cards-headline').html(
          localepl.phonebankappcardsheadline
        );
        $('.bankapp-transfer-headline').html(localepl.bankapptransferheadline);
        $('.bankapp-transfer-cardnumber').html(
          localepl.bankapptransfercardnumber
        );
        $('.bankapp-transfer-amount').html(localepl.bankapptransferamount);
        $('.bankapp-transfer-button').html(localepl.bankapptransferbutton);

        // 0.61
        // Businessapp
        $('#pbrs-headlineheadline').html(localepl.magnagment);
        $('#pbrs-nameheadline').html(localepl.pbrsnameheadline);
        $('#pbrs-gradeheadline').html(localepl.pbrsgradeheadline);
        $('#pbrs-rankheadline').html(localepl.pbrsrankheadline);
        $('#pbrs-uprank').html(localepl.pbrsuprank);
        $('#pbrs-derank').html(localepl.pbrsderank);
        $('#pbrs-updaterank').html(localepl.pbrsupdaterank);
        $('#pbrs-fire').html(localepl.pbrsfire);
        $('#pbrs-recruitheadline').html(localepl.pbrsrecruitheadline);
        $('#pbrs-recruit').html(localepl.pbrsrecruit);
        $('#pbms-headlineheadline').html(localepl.pbmsheadlineheadline);
        $('#pbms-nameheadline').html(localepl.pbmsnameheadline);
        $('#pmbs-deposit').html(localepl.pmbsdeposit);
        $('#pmbs-withdraw').html(localepl.pmbswithdraw);

        // 0.7
        $('#prmsheadline').html(localepl.prmsheadline);
        $('#prmsdelete').html(localepl.prmsdelete);

        // 0.73
        $('#phone-app-contact-page-add').html(localepl.add);
        $('#phone-app-contact-page-edit').html(localepl.edit);
        $('#phone-app-contact-headline').html(localepl.phonecontactheadline);
        $('.phone-app-contact-page-contact').each(function () {
          $(this).html(localepl.contact);
        });
        $('.firstname').each(function () {
          $(this).html(localepl.firstname);
        });
        $('.lastname').each(function () {
          $(this).html(localepl.lastname);
        });
        $('.phonenumber').each(function () {
          $(this).html(localepl.phonenumber);
        });
        $('.numbertext').each(function () {
          $(this).html(localepl.number);
        });
        $('.timetext').each(function () {
          $(this).html(localepl.time);
        });
        $('#phone-app-contact-edit-delete').html(localepl.delete);
        $('#phone-app-edit-newcontact').html(localepl.pciheadedit);
        $('#phone-recent-message-edit').html(localepl.edit);
        $('#phone-app-contact-new-editbutton').html(localepl.save2);
        $('#phone-app-contact-new-savebutton').html(localepl.save2);
        $('.phone-app-contact-page-sendlocatoin').html(localepl.sendlocation);
        $('#phone-app-contact-page-sharecontact').html(localepl.sharecontact);
        $('#phone-app-contact-page-delete').html(localepl.deletecontact);

        // Placeholder
        $('#pbms-amount').attr('placeholder', localepl.pbmsamount);
        $('#inputcardnumber').attr(
          'placeholder',
          localepl.placeholdercardnumber
        );
        $('#inputtransferamoutn').attr(
          'placeholder',
          localepl.placeholderamount
        );
        $('#pciinputname').attr('placeholder', localepl.name);
        $('#pciinputname2').attr('placeholder', localepl.name);
        $('#pciinputnumber').attr('placeholder', localepl.number);
        $('#pciinputnumber2').attr('placeholder', localepl.number);
        $('#phone-chat-input-message').attr('placeholder', localepl.message);
        $('#psw').attr('placeholder', localepl.png);
        $('.phone-service-message-input').attr(
          'placeholder',
          localepl.description
        );
        $('#phone-business-input-message').attr(
          'placeholder',
          localepl.message
        );
        $('#motd').attr('placeholder', localepl.message);
        $('#ptw-tweetinput').attr('placeholder', localepl.message);
        $('#phone-radio-frequenz-input').attr(
          'placeholder',
          localepl.frequency
        );
        $('#ptw-imageurl').attr('placeholder', localepl.url);
        $('#ptw-pbinput').attr('placeholder', localepl.url);
        $('#ptw-username').attr('placeholder', localepl.name);
        $('#ptw-ftavatarurl').attr('placeholder', localepl.url);
        $('#ptw-ftusername').attr('placeholder', localepl.name);
        $('#ptw-ftid').attr('placeholder', localepl.name);

        // Lifeinvader
        $('#advertisement-headline').html(localepl.advertisementheadline);
        $('#abtext').html(localepl.abtext);
        $('#yourname').html(localepl.yourname);
        $('#abmessage').html(localepl.abmessage);
        $('#advertisement-sendnewmessage').html(
          localepl.advertisementsendnewmessage
        );

        // Market
        $('#dmarketheadline').html(localepl.dmarketheadline);
        $('#price').html(localepl.price);
        $('#stock').html(localepl.stock);

        // 0.72
        $('#phone-constant-radio').html(localepl.enableconstant);

        // 0.73
        $('.phone-app-call-historyheadline').html(localepl.callhistoryheadline);

        // 0.74
        $('.locale_enterimage').each(function () {
          $(this).html(localepl.enterimage);
        });
        $('.locale_cancel').each(function () {
          $(this).html(localepl.cancelh);
        });

        $('.locale_submit').each(function () {
          $(this).html(localepl.submith);
        });

        $('.locale_sendphoto').each(function () {
          $(this).html(localepl.sendphotoh);
        });

        $('.locale_sendlocation').each(function () {
          $(this).html(localepl.sendlocation);
        });

        $('.locale_dispatches').each(function () {
          $(this).html(localepl.dispatches);
        });

        $('.locale_accept').each(function () {
          $(this).html(localepl.accept);
        });

        $('.locale_decline').each(function () {
          $(this).html(localepl.decline);
        });

        $('.locale_delete').each(function () {
          $(this).html(localepl.delete);
        });

        $('.locale_entermessage').each(function () {
          $(this).html(localepl.entermessage);
        });

        $('.locale_settings').each(function () {
          $(this).html(localepl.settings);
        });

        $('.locale_setmotd').each(function () {
          $(this).html(localepl.setmotd);
        });

        $('.locale_moneymanagement').each(function () {
          $(this).html(localepl.moneymanagement);
        });

        $('.locale_setjobnumber').each(function () {
          $(this).html(localepl.setjobnumber);
        });

        $('.locale_accountsaldo').each(function () {
          $(this).html(localepl.accountsaldo);
        });

        $('.locale_amount').each(function () {
          $(this).html(localepl.amount);
        });

        $('#business-mm-amount').attr('placeholder', localepl.amount);

        $('.locale_withdraw').each(function () {
          $(this).html(localepl.withdraw);
        });

        $('.locale_deposit').each(function () {
          $(this).html(localepl.deposit);
        });

        $('.locale_messages').each(function () {
          $(this).html(localepl.messages);
        });

        $('.locale_back').each(function () {
          $(this).html(localepl.back);
        });

        $('.locale_deletechat').each(function () {
          $(this).html(localepl.deletechat);
        });

        $('.locale_services').each(function () {
          $(this).html(localepl.services);
        });

        $('.locale_enterid').each(function () {
          $(this).html(localepl.locale_enterid);
        });

        $('.locale_enterrank').each(function () {
          $(this).html(localepl.locale_enterrank);
        });

        $('.locale_actions').each(function () {
          $(this).html(localepl.locale_actions);
        });

        $('.locale_setwaypointtruck').each(function () {
          $(this).html(localepl.locale_setwaypointtruck);
        });

        $('.locale_setwaypointtogoal').each(function () {
          $(this).html(localepl.locale_setwaypointtogoal);
        });

        $('.locale_abortdelivery').each(function () {
          $(this).html(localepl.locale_abortdelivery);
        });

        $('.locale_home').each(function () {
          $(this).html(localepl.locale_home);
        });

        $('.locale_selectroute').each(function () {
          $(this).html(localepl.locale_selectroute);
        });

        $('.locale_short').each(function () {
          $(this).html(localepl.locale_short);
        });

        $('.locale_mid').each(function () {
          $(this).html(localepl.locale_mid);
        });

        $('.locale_long').each(function () {
          $(this).html(localepl.locale_long);
        });

        $('.locale_selecttruck').each(function () {
          $(this).html(localepl.locale_selecttruck);
        });

        $('.locale_delivery').each(function () {
          $(this).html(localepl.locale_delivery);
        });

        $('.locale_welcome').each(function () {
          $(this).html(localepl.locale_welcome);
        });

        $('.locale_startnewjob').each(function () {
          $(this).html(localepl.locale_startnewjob);
        });

        $('.locale_viewallvehicles').each(function () {
          $(this).html(localepl.locale_viewallvehicles);
        });

        $('.locale_history').each(function () {
          $(this).html(localepl.locale_history);
        });

        $('.locale_alltrucks').each(function () {
          $(this).html(localepl.locale_alltrucks);
        });

        $('.locale_broker').each(function () {
          $(this).html(localepl.broker);
        });

        $('.locale_investments').each(function () {
          $(this).html(localepl.investment);
        });

        $('.locale_stockmarket').each(function () {
          $(this).html(localepl.stockmarket);
        });

        $('.locale_price').each(function () {
          $(this).html(localepl.price);
        });

        $('.locale_buyh').each(function () {
          $(this).html(localepl.buyh);
        });

        $('.locale_worth').each(function () {
          $(this).html(localepl.worth);
        });

        $('.locale_buyin').each(function () {
          $(this).html(localepl.buyin);
        });

        $('.locale_performance').each(function () {
          $(this).html(localepl.performance);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(localepl.enteramount);
        });

        $('.locale_enterid').each(function () {
          $(this).html(localepl.enteramount);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(localepl.enteramount);
        });

        $('.locale_exchange').each(function () {
          $(this).html(localepl.exchange);
        });

        $('.locale_user').each(function () {
          $(this).html(localepl.user);
        });

        $('.locale_stats').each(function () {
          $(this).html(localepl.stats);
        });

        $('.locale_bought').each(function () {
          $(this).html(localepl.bought);
        });

        $('.locale_sold').each(function () {
          $(this).html(localepl.sold);
        });

        $('.locale_profit').each(function () {
          $(this).html(localepl.profit);
        });

        $('.locale_groupchat').each(function () {
          $(this).html(localepl.groupchat);
        });

        $('.locale_overview').each(function () {
          $(this).html(localepl.overview);
        });

        $('.locale_next').each(function () {
          $(this).html(localepl.next);
        });

        $('.locale_name').each(function () {
          $(this).html(localepl.name);
        });

        $('.locale_image').each(function () {
          $(this).html(localepl.image);
        });

        $('.locale_testimage').each(function () {
          $(this).html(localepl.testimage);
        });

        $('.locale_actions').each(function () {
          $(this).html(localepl.actions);
        });

        $('.locale_changephoto').each(function () {
          $(this).html(localepl.changeimage);
        });

        $('.locale_changename').each(function () {
          $(this).html(localepl.changename);
        });

        $('.locale_addmember').each(function () {
          $(this).html(localepl.addmember);
        });

        $('.locale_leave').each(function () {
          $(this).html(localepl.leave);
        });

        $('.locale_participants').each(function () {
          $(this).html(localepl.participants);
        });

        $('.locale_chat').each(function () {
          $(this).html(localepl.chat);
        });

        $('.locale_settings').each(function () {
          $(this).html(localepl.settings);
        });

        $('.locale_save').each(function () {
          $(this).html(localepl.save);
        });

        $('.locale_rank').each(function () {
          $(this).html(localepl.rank);
        });

        $('.locale_addcontact').each(function () {
          $(this).html(localepl.addcontact);
        });

        $('.locale_makeadmin').each(function () {
          $(this).html(localepl.makeadmin);
        });

        $('.locale_removeasadmin').each(function () {
          $(this).html(localepl.removeasadmin);
        });

        $('.locale_kick').each(function () {
          $(this).html(localepl.kick);
        });

        $('.locale_takephoto').each(function () {
          $(this).html(localepl.takephoto);
        });

        // 0.75 beta 4
        $('.locale_djump').each(function () {
          $(this).html(localepl.djump);
        });

        $('.locale_playh').each(function () {
          $(this).html(localepl.playh);
        });

        $('.locale_gameover').each(function () {
          $(this).html(localepl.gameover);
        });

        $('.locale_score').each(function () {
          $(this).html(localepl.yourescore);
        });

        $('.locale_highscore').each(function () {
          $(this).html(localepl.highscore);
        });

        $('.locale_home').each(function () {
          $(this).html(localepl.home);
        });

        $('.locale_rankingh').each(function () {
          $(this).html(localepl.rankingh);
        });

        $('.locale_settingsh').each(function () {
          $(this).html(localepl.settingsh);
        });

        $('.locale_sound').each(function () {
          $(this).html(localepl.sound);
        });

        // 0.76

        $('.locale_share').each(function () {
          $(this).html(localepl.share);
        });

        $('.locale_camera').each(function () {
          $(this).html(localepl.camera);
        });

        $('.locale_copylink').each(function () {
          $(this).html(localepl.copylink);
        });

        $('.locale_fullscreen').each(function () {
          $(this).html(localepl.fullscreen);
        });

        $('.locale_save2').each(function () {
          $(this).html(localepl.save3);
        });

        $('.locale_setwallpaper').each(function () {
          $(this).html(localepl.setwallpaper);
        });

        $('.locale_shareondiscord').each(function () {
          $(this).html(localepl.shareondiscord);
        });

        $('.locale_ddrop').each(function () {
          $(this).html(localepl.ddrop);
        });

        $('.locale_sendinmessages').each(function () {
          $(this).html(localepl.sendinmessages);
        });

        $('.locale_gallery').each(function () {
          $(this).html(localepl.gallery);
        });

        $('.locale_select').each(function () {
          $(this).html(localepl.select);
        });

        $('.locale_image').each(function () {
          $(this).html(localepl.image);
        });

        $('.locale_information').each(function () {
          $(this).html(localepl.information);
        });

        $('.locale_addedon').each(function () {
          $(this).html(localepl.addedon);
        });

        $('.locale_selectitems').each(function () {
          $(this).html(localepl.selectitems);
        });

        $('.locale_mail').each(function () {
          $(this).html(localepl.mail);
        });

        $('.locale_sent').each(function () {
          $(this).html(localepl.sent);
        });

        $('.locale_newmail').each(function () {
          $(this).html(localepl.newmail);
        });

        $('.locale_receivers').each(function () {
          $(this).html(localepl.receivers);
        });

        $('.locale_subject').each(function () {
          $(this).html(localepl.subject);
        });

        $('.locale_message').each(function () {
          $(this).html(localepl.message);
        });

        $('.locale_business').each(function () {
          $(this).html(localepl.business);
        });

        $('.locale_radio').each(function () {
          $(this).html(localepl.radio);
        });

        $('.locale_twitter').each(function () {
          $(this).html(localepl.twitter);
        });

        $('.locale_bank').each(function () {
          $(this).html(localepl.bank);
        });

        $('.locale_ad').each(function () {
          $(this).html(localepl.ad);
        });


        $('.locale_calculator').each(function () {
          $(this).html(localepl.calculator);
        });



        $('#phonesettingsselectionapptext ').html(
          '<i class="fa-solid fa-underline"></i>&nbsp' + localepl.showapptext
        );

        $('.locale_pbfmember').each(function () {
          $(this).html(localepl.pbfmember);
        });

        $('.locale').each(function () {
          var locl = $(this).data('locale');
          $(this).html(localepl[locl]);
        });

        $('.plocale').each(function () {
          var locl = $(this).data('locale');
          $(this).attr('placeholder', localepl[locl]);
        });
      }

      if (locale2 == 'th') {
        $('.phone-call-incoming-title ').html(localeth.callincomingtitle);
        $('.phone-call-outgoing-title ').html(localeth.calloutgoingtitle);
        $('.phone-call-ongoing-title ').html(localeth.callongoingtitle);
        $('#phone-contact-headline ').html(localeth.phonecontactheadline);
        $('#pciheadoverview ').html(localeth.pciheadoverview);
        $('#pcinumbertext ').html(localeth.pcinumber);
        $('#pcicall2 ').html(localeth.pcicall);
        $('#pcimessage2 ').html(localeth.pcimessage);
        $('#pcifavourit2 ').html(localeth.pcifavorit);
        $('#pcigps ').html(localeth.pcigps);
        $('#pcishare ').html(localeth.pcishare);
        $('#pcidelete ').html(localeth.pcidelete);
        $('#pciheadadd ').html(localeth.pciheadadd);
        $('#pciinputsubmit ').html(localeth.pciinputsubmit);
        $('#pciheadedit ').html(localeth.pciheadedit);
        $('#pcieditsubmit ').html(localeth.pcieditsubmit);
        $('#phoneheadlinemessage ').html(localeth.phoneheadlinemessage);
        $('#phoneheadlinechat ').html(localeth.phoneheadlinechat);
        $('#phoneheadlinephone ').html(localeth.phoneheadlinephone);
        $('#phoneheadlinesettings ').html(localeth.phoneheadlinesettings);
        $('.headerbacksettings').html(localeth.phoneheadlinesettings);
        $('#phonesettingsselectionflightmode ').html(
          '<i class="fas fa-plane"></i> &nbsp' +
          localeth.phonesettingsselectionflightmode
        );
        $('#phonesettingsselectionmute ').html(
          '<i class="fas fa-volume-mute"></i> &nbsp' +
          localeth.phonesettingsselectionmute
        );
        $('#phonesettingsselectiondarkmode ').html(
          '<i class="fas fa-adjust"></i> &nbsp' +
          localeth.phonesettingsselectiondarkmode
        );
        $('#phonesettingsselectionanonymous ').html(
          '<i class="fa-solid fa-user-ninja"></i> &nbsp' +
          localeth.phonesettingsselectionanonymous
        );
        $('#phonesettingsselectionwallpaper ').html(
          '<i class="fas fa-image"></i> &nbsp' +
          localeth.phonesettingsselectionwallpaper
        );
        $('#phone-settings-selection-changecase ').html(
          '<i class="fas fa-mobile"></i> &nbsp' +
          localeth.phonesettingsselectioncase
        );
        $('#phonesettingsselectionringtone ').html(
          '<i class="fas fa-bell"></i> &nbsp' +
          localeth.phonesettingsselectionringtone
        );
        $('#pswh ').html(localeth.pswh);
        $('#pswsubmitbutton ').html(localeth.pswsubmitbutton);
        $('#phservice ').html(localeth.phservice);
        $('#psmn ').html(localeth.psmn);
        $('#pss ').html(localeth.pss);
        $('#pssposition ').html(localeth.pssposition);
        $('#phone-service-button ').html(localeth.phoneservicebutton);
        $('#phbusiness ').html(localeth.phbusiness);
        $('#motdchange ').html(localeth.motdchange);
        $('#pbbacceptfont ').html(localeth.pbbacceptfont);
        $('#pbbacceptfont2 ').html(localeth.pbbacceptfont2);
        $('#pbsjobnumber ').html(localeth.jobnumber);
        $('#pbsmfont ').html(localeth.motdchange);
        $('#pbsmfont2 ').html(localeth.pbsmfont2);
        $('#pbsmfont3 ').html(localeth.pbsmfont3);
        $('#pbsjobmoney ').html(localeth.pbsjobmoney);
        $('#phfunk ').html(localeth.phfunk);
        $('#phone-frequenz-join-button ').html(localeth.pfjb);
        $('#phone-frequenz-leave-button ').html(localeth.pflb);
        $('#phonesettingsnumbertext ').html(
          "<i class='fas fa-phone-alt'></i> &nbsp" + localeth.phonenumber
        );
        $('.ptw-submit ').each(function () {
          $(this).html(localeth.ptwtweetsubmit);
        });
        $('.twitter-firsttime-button ').html(localeth.ptwtweetsubmit);
        $('.ptw-pbsubmit ').each(function () {
          $(this).html(localeth.ptwtweetsubmit);
        });
        $('#phoneheadlinetwitter ').html(localeth.phoneheadlinetwitter);
        $('#ptw-tweetheader-font ').html(localeth.ptwtweetheaderfont);
        $('#ptw-header-font ').html(localeth.ptwheaderfont);
        $('#ptw-header-font2 ').html(localeth.ptwheaderfont2);
        $('#ptw-header-font3 ').html(localeth.ptwheaderfont3);
        $('#ptw-header-font4 ').html(localeth.ptwheaderfont4);
        $('#ptw-header-font5 ').html(localeth.ptwheaderfont5);
        $('#ptw-header-font6 ').html(localeth.ptwheaderfont3);
        $('#ptw-header-font7 ').html(localeth.ptwheaderfont7);
        $('#phonetwitternotification ').html(localeth.tweetnotificaton);

        // 0.60
        // Banking app
        $('#bankapp-headline').html(localeth.bankappheadline);
        $('.phone-bankapp-cards-headline').html(
          localeth.phonebankappcardsheadline
        );
        $('.phone-card-cardholder').html(localeth.cardcardholder);
        $('.phone-card-expires').html(localeth.cardexpires);
        $('.phone-bankapp-cards-headline').html(
          localeth.phonebankappcardsheadline
        );
        $('.bankapp-transfer-headline').html(localeth.bankapptransferheadline);
        $('.bankapp-transfer-cardnumber').html(
          localeth.bankapptransfercardnumber
        );
        $('.bankapp-transfer-amount').html(localeth.bankapptransferamount);
        $('.bankapp-transfer-button').html(localeth.bankapptransferbutton);

        // 0.61
        // Businessapp
        $('#pbrs-headlineheadline').html(localeth.magnagment);
        $('#pbrs-nameheadline').html(localeth.pbrsnameheadline);
        $('#pbrs-gradeheadline').html(localeth.pbrsgradeheadline);
        $('#pbrs-rankheadline').html(localeth.pbrsrankheadline);
        $('#pbrs-uprank').html(localeth.pbrsuprank);
        $('#pbrs-derank').html(localeth.pbrsderank);
        $('#pbrs-updaterank').html(localeth.pbrsupdaterank);
        $('#pbrs-fire').html(localeth.pbrsfire);
        $('#pbrs-recruitheadline').html(localeth.pbrsrecruitheadline);
        $('#pbrs-recruit').html(localeth.pbrsrecruit);
        $('#pbms-headlineheadline').html(localeth.pbmsheadlineheadline);
        $('#pbms-nameheadline').html(localeth.pbmsnameheadline);
        $('#pmbs-deposit').html(localeth.pmbsdeposit);
        $('#pmbs-withdraw').html(localeth.pmbswithdraw);

        // 0.7
        $('#prmsheadline').html(localeth.prmsheadline);
        $('#prmsdelete').html(localeth.prmsdelete);

        // 0.73
        $('#phone-app-contact-page-add').html(localeth.add);
        $('#phone-app-contact-page-edit').html(localeth.edit);
        $('#phone-app-contact-headline').html(localeth.phonecontactheadline);
        $('.phone-app-contact-page-contact').each(function () {
          $(this).html(localeth.contact);
        });
        $('.firstname').each(function () {
          $(this).html(localeth.firstname);
        });
        $('.lastname').each(function () {
          $(this).html(localeth.lastname);
        });
        $('.phonenumber').each(function () {
          $(this).html(localeth.phonenumber);
        });
        $('.numbertext').each(function () {
          $(this).html(localeth.number);
        });
        $('.timetext').each(function () {
          $(this).html(localeth.time);
        });
        $('#phone-app-contact-edit-delete').html(localeth.delete);
        $('#phone-app-edit-newcontact').html(localeth.pciheadedit);
        $('#phone-recent-message-edit').html(localeth.edit);
        $('#phone-app-contact-new-editbutton').html(localeth.save2);
        $('#phone-app-contact-new-savebutton').html(localeth.save2);
        $('.phone-app-contact-page-sendlocatoin').html(localeth.sendlocation);
        $('#phone-app-contact-page-sharecontact').html(localeth.sharecontact);
        $('#phone-app-contact-page-delete').html(localeth.deletecontact);

        // Placeholder
        $('#pbms-amount').attr('placeholder', localeth.pbmsamount);
        $('#inputcardnumber').attr(
          'placeholder',
          localeth.placeholdercardnumber
        );
        $('#inputtransferamoutn').attr(
          'placeholder',
          localeth.placeholderamount
        );
        $('#pciinputname').attr('placeholder', localeth.name);
        $('#pciinputname2').attr('placeholder', localeth.name);
        $('#pciinputnumber').attr('placeholder', localeth.number);
        $('#pciinputnumber2').attr('placeholder', localeth.number);
        $('#phone-chat-input-message').attr('placeholder', localeth.message);
        $('#psw').attr('placeholder', localeth.png);
        $('.phone-service-message-input').attr(
          'placeholder',
          localeth.description
        );
        $('#phone-business-input-message').attr(
          'placeholder',
          localeth.message
        );
        $('#motd').attr('placeholder', localeth.message);
        $('#ptw-tweetinput').attr('placeholder', localeth.message);
        $('#phone-radio-frequenz-input').attr(
          'placeholder',
          localeth.frequency
        );
        $('#ptw-imageurl').attr('placeholder', localeth.url);
        $('#ptw-pbinput').attr('placeholder', localeth.url);
        $('#ptw-username').attr('placeholder', localeth.name);
        $('#ptw-ftavatarurl').attr('placeholder', localeth.url);
        $('#ptw-ftusername').attr('placeholder', localeth.name);
        $('#ptw-ftid').attr('placeholder', localeth.name);

        // Lifeinvader
        $('#advertisement-headline').html(localeth.advertisementheadline);
        $('#abtext').html(localeth.abtext);
        $('#yourname').html(localeth.yourname);
        $('#abmessage').html(localeth.abmessage);
        $('#advertisement-sendnewmessage').html(
          localeth.advertisementsendnewmessage
        );

        // Market
        $('#dmarketheadline').html(localeth.dmarketheadline);
        $('#price').html(localeth.price);
        $('#stock').html(localeth.stock);

        // 0.72
        $('#phone-constant-radio').html(localeth.enableconstant);

        // 0.73
        $('.phone-app-call-historyheadline').html(localeth.callhistoryheadline);

        // 0.74
        $('.locale_enterimage').each(function () {
          $(this).html(localeth.enterimage);
        });
        $('.locale_cancel').each(function () {
          $(this).html(localeth.cancelh);
        });

        $('.locale_submit').each(function () {
          $(this).html(localeth.submith);
        });

        $('.locale_sendphoto').each(function () {
          $(this).html(localeth.sendphotoh);
        });

        $('.locale_sendlocation').each(function () {
          $(this).html(localeth.sendlocation);
        });

        $('.locale_dispatches').each(function () {
          $(this).html(localeth.dispatches);
        });

        $('.locale_accept').each(function () {
          $(this).html(localeth.accept);
        });

        $('.locale_decline').each(function () {
          $(this).html(localeth.decline);
        });

        $('.locale_delete').each(function () {
          $(this).html(localeth.delete);
        });

        $('.locale_entermessage').each(function () {
          $(this).html(localeth.entermessage);
        });

        $('.locale_settings').each(function () {
          $(this).html(localeth.settings);
        });

        $('.locale_setmotd').each(function () {
          $(this).html(localeth.setmotd);
        });

        $('.locale_moneymanagement').each(function () {
          $(this).html(localeth.moneymanagement);
        });

        $('.locale_setjobnumber').each(function () {
          $(this).html(localeth.setjobnumber);
        });

        $('.locale_accountsaldo').each(function () {
          $(this).html(localeth.accountsaldo);
        });

        $('.locale_amount').each(function () {
          $(this).html(localeth.amount);
        });

        $('#business-mm-amount').attr('placeholder', localeth.amount);

        $('.locale_withdraw').each(function () {
          $(this).html(localeth.withdraw);
        });

        $('.locale_deposit').each(function () {
          $(this).html(localeth.deposit);
        });

        $('.locale_messages').each(function () {
          $(this).html(localeth.messages);
        });

        $('.locale_back').each(function () {
          $(this).html(localeth.back);
        });

        $('.locale_deletechat').each(function () {
          $(this).html(localeth.deletechat);
        });

        $('.locale_services').each(function () {
          $(this).html(localeth.services);
        });

        $('.locale_enterid').each(function () {
          $(this).html(localeth.locale_enterid);
        });

        $('.locale_enterrank').each(function () {
          $(this).html(localeth.locale_enterrank);
        });

        $('.locale_actions').each(function () {
          $(this).html(localeth.locale_actions);
        });

        $('.locale_setwaypointtruck').each(function () {
          $(this).html(localeth.locale_setwaypointtruck);
        });

        $('.locale_setwaypointtogoal').each(function () {
          $(this).html(localeth.locale_setwaypointtogoal);
        });

        $('.locale_abortdelivery').each(function () {
          $(this).html(localeth.locale_abortdelivery);
        });

        $('.locale_home').each(function () {
          $(this).html(localeth.locale_home);
        });

        $('.locale_selectroute').each(function () {
          $(this).html(localeth.locale_selectroute);
        });

        $('.locale_short').each(function () {
          $(this).html(localeth.locale_short);
        });

        $('.locale_mid').each(function () {
          $(this).html(localeth.locale_mid);
        });

        $('.locale_long').each(function () {
          $(this).html(localeth.locale_long);
        });

        $('.locale_selecttruck').each(function () {
          $(this).html(localeth.locale_selecttruck);
        });

        $('.locale_delivery').each(function () {
          $(this).html(localeth.locale_delivery);
        });

        $('.locale_welcome').each(function () {
          $(this).html(localeth.locale_welcome);
        });

        $('.locale_startnewjob').each(function () {
          $(this).html(localeth.locale_startnewjob);
        });

        $('.locale_viewallvehicles').each(function () {
          $(this).html(localeth.locale_viewallvehicles);
        });

        $('.locale_history').each(function () {
          $(this).html(localeth.locale_history);
        });

        $('.locale_alltrucks').each(function () {
          $(this).html(localeth.locale_alltrucks);
        });

        $('.locale_broker').each(function () {
          $(this).html(localeth.broker);
        });

        $('.locale_investments').each(function () {
          $(this).html(localeth.investment);
        });

        $('.locale_stockmarket').each(function () {
          $(this).html(localeth.stockmarket);
        });

        $('.locale_price').each(function () {
          $(this).html(localeth.price);
        });

        $('.locale_buyh').each(function () {
          $(this).html(localeth.buyh);
        });

        $('.locale_worth').each(function () {
          $(this).html(localeth.worth);
        });

        $('.locale_buyin').each(function () {
          $(this).html(localeth.buyin);
        });

        $('.locale_performance').each(function () {
          $(this).html(localeth.performance);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(localeth.enteramount);
        });

        $('.locale_enterid').each(function () {
          $(this).html(localeth.enteramount);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(localeth.enteramount);
        });

        $('.locale_exchange').each(function () {
          $(this).html(localeth.exchange);
        });

        $('.locale_user').each(function () {
          $(this).html(localeth.user);
        });

        $('.locale_stats').each(function () {
          $(this).html(localeth.stats);
        });

        $('.locale_bought').each(function () {
          $(this).html(localeth.bought);
        });

        $('.locale_sold').each(function () {
          $(this).html(localeth.sold);
        });

        $('.locale_profit').each(function () {
          $(this).html(localeth.profit);
        });

        $('.locale_groupchat').each(function () {
          $(this).html(localeth.groupchat);
        });

        $('.locale_overview').each(function () {
          $(this).html(localeth.overview);
        });

        $('.locale_next').each(function () {
          $(this).html(localeth.next);
        });

        $('.locale_name').each(function () {
          $(this).html(localeth.name);
        });

        $('.locale_image').each(function () {
          $(this).html(localeth.image);
        });

        $('.locale_testimage').each(function () {
          $(this).html(localeth.testimage);
        });

        $('.locale_actions').each(function () {
          $(this).html(localeth.actions);
        });

        $('.locale_changephoto').each(function () {
          $(this).html(localeth.changeimage);
        });

        $('.locale_changename').each(function () {
          $(this).html(localeth.changename);
        });

        $('.locale_addmember').each(function () {
          $(this).html(localeth.addmember);
        });

        $('.locale_leave').each(function () {
          $(this).html(localeth.leave);
        });

        $('.locale_participants').each(function () {
          $(this).html(localeth.participants);
        });

        $('.locale_chat').each(function () {
          $(this).html(localeth.chat);
        });

        $('.locale_settings').each(function () {
          $(this).html(localeth.settings);
        });

        $('.locale_save').each(function () {
          $(this).html(localeth.save);
        });

        $('.locale_rank').each(function () {
          $(this).html(localeth.rank);
        });

        $('.locale_addcontact').each(function () {
          $(this).html(localeth.addcontact);
        });

        $('.locale_makeadmin').each(function () {
          $(this).html(localeth.makeadmin);
        });

        $('.locale_removeasadmin').each(function () {
          $(this).html(localeth.removeasadmin);
        });

        $('.locale_kick').each(function () {
          $(this).html(localeth.kick);
        });

        $('.locale_takephoto').each(function () {
          $(this).html(localeth.takephoto);
        });

        // 0.75 beta 4
        $('.locale_djump').each(function () {
          $(this).html(localeth.djump);
        });

        $('.locale_playh').each(function () {
          $(this).html(localeth.playh);
        });

        $('.locale_gameover').each(function () {
          $(this).html(localeth.gameover);
        });

        $('.locale_score').each(function () {
          $(this).html(localeth.yourescore);
        });

        $('.locale_highscore').each(function () {
          $(this).html(localeth.highscore);
        });

        $('.locale_home').each(function () {
          $(this).html(localeth.home);
        });

        $('.locale_rankingh').each(function () {
          $(this).html(localeth.rankingh);
        });

        $('.locale_settingsh').each(function () {
          $(this).html(localeth.settingsh);
        });

        $('.locale_sound').each(function () {
          $(this).html(localeth.sound);
        });

        // 0.76

        $('.locale_share').each(function () {
          $(this).html(localeth.share);
        });

        $('.locale_camera').each(function () {
          $(this).html(localeth.camera);
        });

        $('.locale_copylink').each(function () {
          $(this).html(localeth.copylink);
        });

        $('.locale_fullscreen').each(function () {
          $(this).html(localeth.fullscreen);
        });

        $('.locale_save2').each(function () {
          $(this).html(localeth.save3);
        });

        $('.locale_setwallpaper').each(function () {
          $(this).html(localeth.setwallpaper);
        });

        $('.locale_shareondiscord').each(function () {
          $(this).html(localeth.shareondiscord);
        });

        $('.locale_ddrop').each(function () {
          $(this).html(localeth.ddrop);
        });

        $('.locale_sendinmessages').each(function () {
          $(this).html(localeth.sendinmessages);
        });

        $('.locale_gallery').each(function () {
          $(this).html(localeth.gallery);
        });

        $('.locale_select').each(function () {
          $(this).html(localeth.select);
        });

        $('.locale_image').each(function () {
          $(this).html(localeth.image);
        });

        $('.locale_information').each(function () {
          $(this).html(localeth.information);
        });

        $('.locale_addedon').each(function () {
          $(this).html(localeth.addedon);
        });

        $('.locale_selectitems').each(function () {
          $(this).html(localeth.selectitems);
        });

        $('.locale_mail').each(function () {
          $(this).html(localeth.mail);
        });

        $('.locale_sent').each(function () {
          $(this).html(localeth.sent);
        });

        $('.locale_newmail').each(function () {
          $(this).html(localeth.newmail);
        });

        $('.locale_receivers').each(function () {
          $(this).html(localeth.receivers);
        });

        $('.locale_subject').each(function () {
          $(this).html(localeth.subject);
        });

        $('.locale_message').each(function () {
          $(this).html(localeth.message);
        });

        $('.locale_business').each(function () {
          $(this).html(localeth.business);
        });

        $('.locale_radio').each(function () {
          $(this).html(localeth.radio);
        });

        $('.locale_twitter').each(function () {
          $(this).html(localeth.twitter);
        });

        $('.locale_bank').each(function () {
          $(this).html(localeth.bank);
        });

        $('.locale_ad').each(function () {
          $(this).html(localeth.ad);
        });


        $('.locale_calculator').each(function () {
          $(this).html(localeth.calculator);
        });



        $('#phonesettingsselectionapptext ').html(
          '<i class="fa-solid fa-underline"></i>&nbsp' + localeth.showapptext
        );

        $('.locale_pbfmember').each(function () {
          $(this).html(localeth.pbfmember);
        });

        $('.locale').each(function () {
          var locl = $(this).data('locale');
          $(this).html(localeth[locl]);
        });

        $('.plocale').each(function () {
          var locl = $(this).data('locale');
          $(this).attr('placeholder', localeth[locl]);
        });
      }

      if (locale2 == 'pt') {
        $('.phone-call-incoming-title ').html(localept.callincomingtitle);
        $('.phone-call-outgoing-title ').html(localept.calloutgoingtitle);
        $('.phone-call-ongoing-title ').html(localept.callongoingtitle);
        $('#phone-contact-headline ').html(localept.phonecontactheadline);
        $('#pciheadoverview ').html(localept.pciheadoverview);
        $('#pcinumbertext ').html(localept.pcinumber);
        $('#pcicall2 ').html(localept.pcicall);
        $('#pcimessage2 ').html(localept.pcimessage);
        $('#pcifavourit2 ').html(localept.pcifavorit);
        $('#pcigps ').html(localept.pcigps);
        $('#pcishare ').html(localept.pcishare);
        $('#pcidelete ').html(localept.pcidelete);
        $('#pciheadadd ').html(localept.pciheadadd);
        $('#pciinputsubmit ').html(localept.pciinputsubmit);
        $('#pciheadedit ').html(localept.pciheadedit);
        $('#pcieditsubmit ').html(localept.pcieditsubmit);
        $('#phoneheadlinemessage ').html(localept.phoneheadlinemessage);
        $('#phoneheadlinechat ').html(localept.phoneheadlinechat);
        $('#phoneheadlinephone ').html(localept.phoneheadlinephone);
        $('#phoneheadlinesettings ').html(localept.phoneheadlinesettings);
        $('.headerbacksettings').html(localept.phoneheadlinesettings);
        $('#phonesettingsselectionflightmode ').html(
          '<i class="fas fa-plane"></i> &nbsp' +
          localept.phonesettingsselectionflightmode
        );
        $('#phonesettingsselectionmute ').html(
          '<i class="fas fa-volume-mute"></i> &nbsp' +
          localept.phonesettingsselectionmute
        );
        $('#phonesettingsselectiondarkmode ').html(
          '<i class="fas fa-adjust"></i> &nbsp' +
          localept.phonesettingsselectiondarkmode
        );
        $('#phonesettingsselectionanonymous ').html(
          '<i class="fa-solid fa-user-ninja"></i> &nbsp' +
          localept.phonesettingsselectionanonymous
        );
        $('#phonesettingsselectionwallpaper ').html(
          '<i class="fas fa-image"></i> &nbsp' +
          localept.phonesettingsselectionwallpaper
        );
        $('#phone-settings-selection-changecase ').html(
          '<i class="fas fa-mobile"></i> &nbsp' +
          localept.phonesettingsselectioncase
        );
        $('#phonesettingsselectionringtone ').html(
          '<i class="fas fa-bell"></i> &nbsp' +
          localept.phonesettingsselectionringtone
        );
        $('#pswh ').html(localept.pswh);
        $('#pswsubmitbutton ').html(localept.pswsubmitbutton);
        $('#phservice ').html(localept.phservice);
        $('#psmn ').html(localept.psmn);
        $('#pss ').html(localept.pss);
        $('#pssposition ').html(localept.pssposition);
        $('#phone-service-button ').html(localept.phoneservicebutton);
        $('#phbusiness ').html(localept.phbusiness);
        $('#motdchange ').html(localept.motdchange);
        $('#pbbacceptfont ').html(localept.pbbacceptfont);
        $('#pbbacceptfont2 ').html(localept.pbbacceptfont2);
        $('#pbsjobnumber ').html(localept.jobnumber);
        $('#pbsmfont ').html(localept.motdchange);
        $('#pbsmfont2 ').html(localept.pbsmfont2);
        $('#pbsmfont3 ').html(localept.pbsmfont3);
        $('#pbsjobmoney ').html(localept.pbsjobmoney);
        $('#phfunk ').html(localept.phfunk);
        $('#phone-frequenz-join-button ').html(localept.pfjb);
        $('#phone-frequenz-leave-button ').html(localept.pflb);
        $('#phonesettingsnumbertext ').html(
          "<i class='fas fa-phone-alt'></i> &nbsp" + localept.phonenumber
        );
        $('.ptw-submit ').each(function () {
          $(this).html(localept.ptwtweetsubmit);
        });
        $('.twitter-firsttime-button ').html(localept.ptwtweetsubmit);
        $('.ptw-pbsubmit ').each(function () {
          $(this).html(localept.ptwtweetsubmit);
        });
        $('#phoneheadlinetwitter ').html(localept.phoneheadlinetwitter);
        $('#ptw-tweetheader-font ').html(localept.ptwtweetheaderfont);
        $('#ptw-header-font ').html(localept.ptwheaderfont);
        $('#ptw-header-font2 ').html(localept.ptwheaderfont2);
        $('#ptw-header-font3 ').html(localept.ptwheaderfont3);
        $('#ptw-header-font4 ').html(localept.ptwheaderfont4);
        $('#ptw-header-font5 ').html(localept.ptwheaderfont5);
        $('#ptw-header-font6 ').html(localept.ptwheaderfont3);
        $('#ptw-header-font7 ').html(localept.ptwheaderfont7);
        $('#phonetwitternotification ').html(localept.tweetnotificaton);

        // 0.60
        // Banking app
        $('#bankapp-headline').html(localept.bankappheadline);
        $('.phone-bankapp-cards-headline').html(
          localept.phonebankappcardsheadline
        );
        $('.phone-card-cardholder').html(localept.cardcardholder);
        $('.phone-card-expires').html(localept.cardexpires);
        $('.phone-bankapp-cards-headline').html(
          localept.phonebankappcardsheadline
        );
        $('.bankapp-transfer-headline').html(localept.bankapptransferheadline);
        $('.bankapp-transfer-cardnumber').html(
          localept.bankapptransfercardnumber
        );
        $('.bankapp-transfer-amount').html(localept.bankapptransferamount);
        $('.bankapp-transfer-button').html(localept.bankapptransferbutton);

        // 0.61
        // Businessapp
        $('#pbrs-headlineheadline').html(localept.magnagment);
        $('#pbrs-nameheadline').html(localept.pbrsnameheadline);
        $('#pbrs-gradeheadline').html(localept.pbrsgradeheadline);
        $('#pbrs-rankheadline').html(localept.pbrsrankheadline);
        $('#pbrs-uprank').html(localept.pbrsuprank);
        $('#pbrs-derank').html(localept.pbrsderank);
        $('#pbrs-updaterank').html(localept.pbrsupdaterank);
        $('#pbrs-fire').html(localept.pbrsfire);
        $('#pbrs-recruitheadline').html(localept.pbrsrecruitheadline);
        $('#pbrs-recruit').html(localept.pbrsrecruit);
        $('#pbms-headlineheadline').html(localept.pbmsheadlineheadline);
        $('#pbms-nameheadline').html(localept.pbmsnameheadline);
        $('#pmbs-deposit').html(localept.pmbsdeposit);
        $('#pmbs-withdraw').html(localept.pmbswithdraw);

        // 0.7
        $('#prmsheadline').html(localept.prmsheadline);
        $('#prmsdelete').html(localept.prmsdelete);

        // 0.73
        $('#phone-app-contact-page-add').html(localept.add);
        $('#phone-app-contact-page-edit').html(localept.edit);
        $('#phone-app-contact-headline').html(localept.phonecontactheadline);
        $('.phone-app-contact-page-contact').each(function () {
          $(this).html(localept.contact);
        });
        $('.firstname').each(function () {
          $(this).html(localept.firstname);
        });
        $('.lastname').each(function () {
          $(this).html(localept.lastname);
        });
        $('.phonenumber').each(function () {
          $(this).html(localept.phonenumber);
        });
        $('.numbertext').each(function () {
          $(this).html(localept.number);
        });
        $('.timetext').each(function () {
          $(this).html(localept.time);
        });
        $('#phone-app-contact-edit-delete').html(localept.delete);
        $('#phone-app-edit-newcontact').html(localept.pciheadedit);
        $('#phone-recent-message-edit').html(localept.edit);
        $('#phone-app-contact-new-editbutton').html(localept.save2);
        $('#phone-app-contact-new-savebutton').html(localept.save2);
        $('.phone-app-contact-page-sendlocatoin').html(localept.sendlocation);
        $('#phone-app-contact-page-sharecontact').html(localept.sharecontact);
        $('#phone-app-contact-page-delete').html(localept.deletecontact);

        // Placeholder
        $('#pbms-amount').attr('placeholder', localept.pbmsamount);
        $('#inputcardnumber').attr(
          'placeholder',
          localept.placeholdercardnumber
        );
        $('#inputtransferamoutn').attr(
          'placeholder',
          localept.placeholderamount
        );
        $('#pciinputname').attr('placeholder', localept.name);
        $('#pciinputname2').attr('placeholder', localept.name);
        $('#pciinputnumber').attr('placeholder', localept.number);
        $('#pciinputnumber2').attr('placeholder', localept.number);
        $('#phone-chat-input-message').attr('placeholder', localept.message);
        $('#psw').attr('placeholder', localept.png);
        $('.phone-service-message-input').attr(
          'placeholder',
          localept.description
        );
        $('#phone-business-input-message').attr(
          'placeholder',
          localept.message
        );
        $('#motd').attr('placeholder', localept.message);
        $('#ptw-tweetinput').attr('placeholder', localept.message);
        $('#phone-radio-frequenz-input').attr(
          'placeholder',
          localept.frequency
        );
        $('#ptw-imageurl').attr('placeholder', localept.url);
        $('#ptw-pbinput').attr('placeholder', localept.url);
        $('#ptw-username').attr('placeholder', localept.name);
        $('#ptw-ftavatarurl').attr('placeholder', localept.url);
        $('#ptw-ftusername').attr('placeholder', localept.name);
        $('#ptw-ftid').attr('placeholder', localept.name);

        // Lifeinvader
        $('#advertisement-headline').html(localept.advertisementheadline);
        $('#abtext').html(localept.abtext);
        $('#yourname').html(localept.yourname);
        $('#abmessage').html(localept.abmessage);
        $('#advertisement-sendnewmessage').html(
          localept.advertisementsendnewmessage
        );

        // Market
        $('#dmarketheadline').html(localept.dmarketheadline);
        $('#price').html(localept.price);
        $('#stock').html(localept.stock);

        // 0.72
        $('#phone-constant-radio').html(localept.enableconstant);

        // 0.73
        $('.phone-app-call-historyheadline').html(localept.callhistoryheadline);

        // 0.74
        $('.locale_enterimage').each(function () {
          $(this).html(localept.enterimage);
        });
        $('.locale_cancel').each(function () {
          $(this).html(localept.cancelh);
        });

        $('.locale_submit').each(function () {
          $(this).html(localept.submith);
        });

        $('.locale_sendphoto').each(function () {
          $(this).html(localept.sendphotoh);
        });

        $('.locale_sendlocation').each(function () {
          $(this).html(localept.sendlocation);
        });

        $('.locale_dispatches').each(function () {
          $(this).html(localept.dispatches);
        });

        $('.locale_accept').each(function () {
          $(this).html(localept.accept);
        });

        $('.locale_decline').each(function () {
          $(this).html(localept.decline);
        });

        $('.locale_delete').each(function () {
          $(this).html(localept.delete);
        });

        $('.locale_entermessage').each(function () {
          $(this).html(localept.entermessage);
        });

        $('.locale_settings').each(function () {
          $(this).html(localept.settings);
        });

        $('.locale_setmotd').each(function () {
          $(this).html(localept.setmotd);
        });

        $('.locale_moneymanagement').each(function () {
          $(this).html(localept.moneymanagement);
        });

        $('.locale_setjobnumber').each(function () {
          $(this).html(localept.setjobnumber);
        });

        $('.locale_accountsaldo').each(function () {
          $(this).html(localept.accountsaldo);
        });

        $('.locale_amount').each(function () {
          $(this).html(localept.amount);
        });

        $('#business-mm-amount').attr('placeholder', localept.amount);

        $('.locale_withdraw').each(function () {
          $(this).html(localept.withdraw);
        });

        $('.locale_deposit').each(function () {
          $(this).html(localept.deposit);
        });

        $('.locale_messages').each(function () {
          $(this).html(localept.messages);
        });

        $('.locale_back').each(function () {
          $(this).html(localept.back);
        });

        $('.locale_deletechat').each(function () {
          $(this).html(localept.deletechat);
        });

        $('.locale_services').each(function () {
          $(this).html(localept.services);
        });

        $('.locale_enterid').each(function () {
          $(this).html(localept.locale_enterid);
        });

        $('.locale_enterrank').each(function () {
          $(this).html(localept.locale_enterrank);
        });

        $('.locale_actions').each(function () {
          $(this).html(localept.locale_actions);
        });

        $('.locale_setwaypointtruck').each(function () {
          $(this).html(localept.locale_setwaypointtruck);
        });

        $('.locale_setwaypointtogoal').each(function () {
          $(this).html(localept.locale_setwaypointtogoal);
        });

        $('.locale_abortdelivery').each(function () {
          $(this).html(localept.locale_abortdelivery);
        });

        $('.locale_home').each(function () {
          $(this).html(localept.locale_home);
        });

        $('.locale_selectroute').each(function () {
          $(this).html(localept.locale_selectroute);
        });

        $('.locale_short').each(function () {
          $(this).html(localept.locale_short);
        });

        $('.locale_mid').each(function () {
          $(this).html(localept.locale_mid);
        });

        $('.locale_long').each(function () {
          $(this).html(localept.locale_long);
        });

        $('.locale_selecttruck').each(function () {
          $(this).html(localept.locale_selecttruck);
        });

        $('.locale_delivery').each(function () {
          $(this).html(localept.locale_delivery);
        });

        $('.locale_welcome').each(function () {
          $(this).html(localept.locale_welcome);
        });

        $('.locale_startnewjob').each(function () {
          $(this).html(localept.locale_startnewjob);
        });

        $('.locale_viewallvehicles').each(function () {
          $(this).html(localept.locale_viewallvehicles);
        });

        $('.locale_history').each(function () {
          $(this).html(localept.locale_history);
        });

        $('.locale_alltrucks').each(function () {
          $(this).html(localept.locale_alltrucks);
        });

        $('.locale_broker').each(function () {
          $(this).html(localept.broker);
        });

        $('.locale_investments').each(function () {
          $(this).html(localept.investment);
        });

        $('.locale_stockmarket').each(function () {
          $(this).html(localept.stockmarket);
        });

        $('.locale_price').each(function () {
          $(this).html(localept.price);
        });

        $('.locale_buyh').each(function () {
          $(this).html(localept.buyh);
        });

        $('.locale_worth').each(function () {
          $(this).html(localept.worth);
        });

        $('.locale_buyin').each(function () {
          $(this).html(localept.buyin);
        });

        $('.locale_performance').each(function () {
          $(this).html(localept.performance);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(localept.enteramount);
        });

        $('.locale_enterid').each(function () {
          $(this).html(localept.enteramount);
        });

        $('.locale_enteramount').each(function () {
          $(this).html(localept.enteramount);
        });

        $('.locale_exchange').each(function () {
          $(this).html(localept.exchange);
        });

        $('.locale_user').each(function () {
          $(this).html(localept.user);
        });

        $('.locale_stats').each(function () {
          $(this).html(localept.stats);
        });

        $('.locale_bought').each(function () {
          $(this).html(localept.bought);
        });

        $('.locale_sold').each(function () {
          $(this).html(localept.sold);
        });

        $('.locale_profit').each(function () {
          $(this).html(localept.profit);
        });

        $('.locale_groupchat').each(function () {
          $(this).html(localept.groupchat);
        });

        $('.locale_overview').each(function () {
          $(this).html(localept.overview);
        });

        $('.locale_next').each(function () {
          $(this).html(localept.next);
        });

        $('.locale_name').each(function () {
          $(this).html(localept.name);
        });

        $('.locale_image').each(function () {
          $(this).html(localept.image);
        });

        $('.locale_testimage').each(function () {
          $(this).html(localept.testimage);
        });

        $('.locale_actions').each(function () {
          $(this).html(localept.actions);
        });

        $('.locale_changephoto').each(function () {
          $(this).html(localept.changeimage);
        });

        $('.locale_changename').each(function () {
          $(this).html(localept.changename);
        });

        $('.locale_addmember').each(function () {
          $(this).html(localept.addmember);
        });

        $('.locale_leave').each(function () {
          $(this).html(localept.leave);
        });

        $('.locale_participants').each(function () {
          $(this).html(localept.participants);
        });

        $('.locale_chat').each(function () {
          $(this).html(localept.chat);
        });

        $('.locale_settings').each(function () {
          $(this).html(localept.settings);
        });

        $('.locale_save').each(function () {
          $(this).html(localept.save);
        });

        $('.locale_rank').each(function () {
          $(this).html(localept.rank);
        });

        $('.locale_addcontact').each(function () {
          $(this).html(localept.addcontact);
        });

        $('.locale_makeadmin').each(function () {
          $(this).html(localept.makeadmin);
        });

        $('.locale_removeasadmin').each(function () {
          $(this).html(localept.removeasadmin);
        });

        $('.locale_kick').each(function () {
          $(this).html(localept.kick);
        });

        $('.locale_takephoto').each(function () {
          $(this).html(localept.takephoto);
        });

        // 0.75 beta 4
        $('.locale_djump').each(function () {
          $(this).html(localept.djump);
        });

        $('.locale_playh').each(function () {
          $(this).html(localept.playh);
        });

        $('.locale_gameover').each(function () {
          $(this).html(localept.gameover);
        });

        $('.locale_score').each(function () {
          $(this).html(localept.yourescore);
        });

        $('.locale_highscore').each(function () {
          $(this).html(localept.highscore);
        });

        $('.locale_home').each(function () {
          $(this).html(localept.home);
        });

        $('.locale_rankingh').each(function () {
          $(this).html(localept.rankingh);
        });

        $('.locale_settingsh').each(function () {
          $(this).html(localept.settingsh);
        });

        $('.locale_sound').each(function () {
          $(this).html(localept.sound);
        });

        // 0.76

        $('.locale_share').each(function () {
          $(this).html(localept.share);
        });

        $('.locale_camera').each(function () {
          $(this).html(localept.camera);
        });

        $('.locale_copylink').each(function () {
          $(this).html(localept.copylink);
        });

        $('.locale_fullscreen').each(function () {
          $(this).html(localept.fullscreen);
        });

        $('.locale_save2').each(function () {
          $(this).html(localept.save3);
        });

        $('.locale_setwallpaper').each(function () {
          $(this).html(localept.setwallpaper);
        });

        $('.locale_shareondiscord').each(function () {
          $(this).html(localept.shareondiscord);
        });

        $('.locale_ddrop').each(function () {
          $(this).html(localept.ddrop);
        });

        $('.locale_sendinmessages').each(function () {
          $(this).html(localept.sendinmessages);
        });

        $('.locale_gallery').each(function () {
          $(this).html(localept.gallery);
        });

        $('.locale_select').each(function () {
          $(this).html(localept.select);
        });

        $('.locale_image').each(function () {
          $(this).html(localept.image);
        });

        $('.locale_information').each(function () {
          $(this).html(localept.information);
        });

        $('.locale_addedon').each(function () {
          $(this).html(localept.addedon);
        });

        $('.locale_selectitems').each(function () {
          $(this).html(localept.selectitems);
        });

        $('.locale_mail').each(function () {
          $(this).html(localept.mail);
        });

        $('.locale_sent').each(function () {
          $(this).html(localept.sent);
        });

        $('.locale_newmail').each(function () {
          $(this).html(localept.newmail);
        });

        $('.locale_receivers').each(function () {
          $(this).html(localept.receivers);
        });

        $('.locale_subject').each(function () {
          $(this).html(localept.subject);
        });

        $('.locale_message').each(function () {
          $(this).html(localept.message);
        });

        $('.locale_business').each(function () {
          $(this).html(localept.business);
        });

        $('.locale_radio').each(function () {
          $(this).html(localept.radio);
        });

        $('.locale_twitter').each(function () {
          $(this).html(localept.twitter);
        });

        $('.locale_bank').each(function () {
          $(this).html(localept.bank);
        });

        $('.locale_ad').each(function () {
          $(this).html(localept.ad);
        });


        $('.locale_calculator').each(function () {
          $(this).html(localept.calculator);
        });



        $('#phonesettingsselectionapptext ').html(
          '<i class="fa-solid fa-underline"></i>&nbsp' + localept.showapptext
        );

        $('.locale_pbfmember').each(function () {
          $(this).html(localept.pbfmember);
        });

        $('.locale').each(function () {
          var locl = $(this).data('locale');
          $(this).html(localept[locl]);
        });

        $('.plocale').each(function () {
          var locl = $(this).data('locale');
          $(this).attr('placeholder', localept[locl]);
        });
      }

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

        $('.locale_pbfmember').each(function () {
          $(this).html(localesp.pbfmember);
        });

        $('.locale').each(function () {
          var locl = $(this).data('locale');
          $(this).html(localesp[locl]);
        });

        $('.plocale').each(function () {
          var locl = $(this).data('locale');
          $(this).attr('placeholder', localesp[locl]);
        });
      }
    }


  });
});

function setlocale() {
  $('.locale').each(function () {
    var locl = $(this).data('locale');
    var text = locale[locl];
    if (usedlocale == 'de') text = localede[locl];
    if (usedlocale == 'fr') text = localefr[locl];
    if (usedlocale == 'pl') text = localepl[locl];
    if (usedlocale == 'th') text = localeth[locl];
    if (usedlocale == 'pt') text = localept[locl];
    if (usedlocale == 'sp') text = localesp[locl];

    $(this).html(text);
  });

  $('.plocale').each(function () {
    var locl = $(this).data('locale');
    var text = locale[locl];
    if (usedlocale == 'de') text = localede[locl];
    if (usedlocale == 'fr') text = localefr[locl];
    if (usedlocale == 'pl') text = localepl[locl];
    if (usedlocale == 'th') text = localeth[locl];
    if (usedlocale == 'pt') text = localept[locl];
    if (usedlocale == 'sp') text = localesp[locl];

    $(this).attr('placeholder', text);
  });
}

function useLocal(element, locl) {
  var text = locale[locl];
  if (usedlocale == 'de') text = localede[locl];
  if (usedlocale == 'fr') text = localefr[locl];
  if (usedlocale == 'pl') text = localepl[locl];
  if (usedlocale == 'th') text = localeth[locl];
  if (usedlocale == 'pt') text = localept[locl];
  if (usedlocale == 'sp') text = localesp[locl];

  element.html(text);
}

getLocal = (locl) => {
  var text = locale[locl];
  if (usedlocale == 'de') text = localede[locl];
  if (usedlocale == 'fr') text = localefr[locl];
  if (usedlocale == 'pl') text = localepl[locl];
  if (usedlocale == 'th') text = localeth[locl];
  if (usedlocale == 'pt') text = localept[locl];
  if (usedlocale == 'sp') text = localesp[locl];

  return text;
};


setTimeout(() => {
  setlocale();
}, 1000);