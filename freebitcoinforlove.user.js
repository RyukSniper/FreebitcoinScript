// ==UserScript==
// @name         Freebitco Auto Faucet 4 love
// @description  Auto Faucet Script by RyukSniper
// @author       RyukSniper
// @match        https://freebitco.in/*
// @grant        unsafeWindow
// @version 1.1
// @downloadURL https://raw.githubusercontent.com/RyukSniper/FreebitcoinScript/master/freebitcoinforlove.user.js
// @updateURL https://raw.githubusercontent.com/RyukSniper/FreebitcoinScript/master/freebitcoinforlove.user.js
// ==/UserScript==
const TELEGRAM = {
    TOKEN: "",
    GROUP:
}

const sendMessage = (text) => {
    const msg = encodeURIComponent(text)
    fetch(`https://api.telegram.org/bot${TELEGRAM.TOKEN}/sendMessage?chat_id=${TELEGRAM.GROUP}&text=${msg}`)
}

(function() {
    'use strict';

    var reward = {};
    var timeremaning = {}
    timeremaning.time = parseInt($("#time_remaining").text());
    reward.select = function() {
        reward.points = parseInt($('.user_reward_points').text().replace(',', ""));
        console.log("Hai " + reward.points + " punti");
        reward.captcha = parseInt($('.play_without_captcha_description .bold span').text());
        if (isNaN(reward.captcha)) {
            console.log("Timer attivo")
        } else {
            console.log("Il costo senza captcha è " + reward.captcha);
        }
        var myDate = new Date();
        var dataore = (myDate.getHours());
        var datagiorno = (myDate.getDay());
        var dataminuti = (myDate.getMinutes());
        console.log("Sono le " + dataore + ":" + dataminuti);
        console.log("Oggi è il " + datagiorno + "°" + "giorno");
//modifica qua l'orario
        if (dataore <= 1 || dataore >= 11) {
            console.log("orario di clicking");
            if (isNaN(timeremaning.time)) {
                sendMessage("Bisogna cliccare!");
                setTimeout(function() {
                    location.reload();
                }, 60000);
            } else {
                console.log("Ancora deve cliccare");
                if (timeremaning.time < 5) {
                    console.log("mancano " + timeremaning.time + " Minuti");
                    console.log("mancano 5 minuti o meno");
                    sendMessage("mancano " + timeremaning.time + " Minuti per cliccare");
                    setTimeout(function() {
                        location.reload();
                    }, 60000);
                } else {
                    console.log("mancano " + timeremaning.time + " Minuti");
                    sendMessage("Funziona anche in background");
                    setTimeout(function() {
                        location.reload();
                    }, 60000);
                }
            }
        }
        else if(dataore >= 2 && dataore <= 11){
            console.log("orario di clicking automatico");
            if (isNaN(timeremaning.time)) {
                if (reward.points > 1200) {
                    console.log("waiting for points 600");
                    RedeemRPProduct('free_points_100');;
                };
                console.log("sta per cliccare");
                $("#play_without_captchas_button").click();
                $("#free_play_form_button").click();
                sendMessage("Ha cliccato con un costo di autoclick di" + reward.captcha + "reward");
                setTimeout(function() {
                    location.reload();
                }, 60000);
            } else {
                console.log("Ancora deve cliccare");
                if (timeremaning.time < 5) {
                    console.log("mancano " + timeremaning.time + " Minuti");
                    console.log("mancano 5 minuti o meno");
                    sendMessage("mancano " + timeremaning.time + " Minuti per cliccare in automatico");
                    setTimeout(function() {
                        location.reload();
                    }, 60000);
                } else {
                    console.log("mancano " + timeremaning.time + " Minuti");
                    setTimeout(function() {
                        location.reload();
                    }, 60000);
                }
            }
        }
    };

    setTimeout(reward.select, 500);
})();
