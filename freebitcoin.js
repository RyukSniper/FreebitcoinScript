// ==UserScript==
// @name         Freebitco Auto Faucet
// @description  Auto Faucet Script by RyukSniper
// @author       RyukSniper
// @match        https://freebitco.in/*
// @grant        unsafeWindow
// @version 1.1
// @downloadURL https://raw.githubusercontent.com/RyukSniper/FreebitcoinScript/master/freebitcoin.js
// @updateURL https://raw.githubusercontent.com/RyukSniper/FreebitcoinScript/master/freebitcoin.js
// ==/UserScript==
// ciaone
(function() {
    'use strict';

    var reward = {};
    var timeremaning = {}
    timeremaning.time = parseInt($("#time_remaining").text());
    reward.select = function() {
        reward.points = parseInt($('.user_reward_points').text().replace(',', ""));
        console.log("Hai " + reward.points + " punti");
        reward.captcha = parseInt($('.play_without_captcha_description .bold span').text());
        console.log("Il costo senza captcha è " + reward.captcha);
        var myDate = new Date();
        var dataore = (myDate.getHours());
        var datagiorno = (myDate.getDay());
        var dataminuti = (myDate.getMinutes());
        console.log("Sono le " + dataore + ":" + dataminuti);
        console.log("Oggi è il " + datagiorno + "°" + "giorno");
        if ((datagiorno > 5) && (datagiorno < 7)) {
            console.log("WEEK");
            if (reward.captcha < 24) {
                console.log("sta per cliccare");
                $("#play_without_captchas_button").click();
                $("#free_play_form_button").click();
            } else {
                console.log("Ancora deve cliccare");
                console.log("mancano " + timeremaning.time + " Minuti");
                $("#play_without_captchas_button").click();
                $("#test_sound").click();
                $("#play_with_captcha_button").click();
                $("#test_sound").click();
            }
        } else {
            if ((dataore >= 23) && (dataore <= 9)) {
                console.log("orario di clicking");
                if (reward.captcha < 12) {
                    console.log("sta per cliccare");
                    $("#play_without_captchas_button").click();
                    $("#free_play_form_button").click();
                } else {
                    console.log("Ancora deve cliccare");
                    console.log("mancano " + timeremaning.time + " Minuti");
                    $("#play_without_captchas_button").click();
                    $("#test_sound").click();
                    $("#play_with_captcha_button").click();
                    $("#test_sound").click();
                }
            } else {
                if ((dataore >= 13) && (dataore <= 14)) {
                    console.log("Orario di pranzo a lavoro");
                    if (reward.captcha < 12) {
                        console.log("sta per cliccare");
                        $("#play_without_captchas_button").click();
                        $("#free_play_form_button").click();
                    }
                } else {
                    console.log("orario di lavoro");
                    if (timeremaning.time < 5) {
                        console.log("mancano " + timeremaning.time + " Minuti");
                        console.log("mancano 5 minuti o meno");
                        setTimeout(function() {
                            location.reload();
                        }, 60000);
                    } else {
                        console.log("mancano " + timeremaning.time + " Minuti");
                        setTimeout(function() {
                            location.reload();
                        }, 150000);
                    }
                }

            }
        }

    };

    setTimeout(reward.select, 500);
})();
