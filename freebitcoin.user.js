// ==UserScript==
// @name         Freebitco Auto Faucet
// @description  Auto Faucet Script by RyukSniper
// @author       RyukSniper
// @match        https://freebitco.in/*
// @grant        unsafeWindow
// @version 1.9.4.8
// @downloadURL https://raw.githubusercontent.com/RyukSniper/FreebitcoinScript/master/freebitcoin.user.js
// @updateURL https://raw.githubusercontent.com/RyukSniper/FreebitcoinScript/master/freebitcoin.user.js
// @require          https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant       GM_xmlhttpRequest
// ==/UserScript==
// this is test for auto-update
(function() {
    'use strict';
    var reward = {};
    var timeremaning = {}
    var balance = $("#balance").text();
    var bonus = {};
    bonus.btc = parseInt($("#bonus_container_fp_bonus .free_play_bonus_box_span_large").text());
    bonus.reward = parseInt($("#bonus_container_free_points .free_play_bonus_box_span_large").text());
    timeremaning.time = parseInt($("#time_remaining").text());
    reward.reedemfpbonus = $('#fp_bonus_rewards .large-3 .reward_link_redeem_button_style:eq(1) ').attr("onclick");
    reward.reedemrewardpoints = $('#free_points_rewards .large-3 .reward_link_redeem_button_style:eq(1) ').attr("onclick")
    reward.select = function() {
        reward.points = parseInt($('.user_reward_points').text().replace(',', ""));
        console.log("Hai " + balance + " BTC");
        if (isNaN(bonus.btc)) {
            console.log("Nessun Bonus BTC attivo");
        } else {
            console.log("Hai un Bonus BTC attivo del " + bonus.btc);
        }
        if (isNaN(bonus.reward)) {
            console.log("Non hai nessun Bonus Reward attivo");
        } else {
            console.log("Hai un Bonus Reward attivo e guadagni " + bonus.reward);
        }
        console.log("Hai " + reward.points + " punti");
        reward.captcha = parseInt($('.play_without_captcha_description .bold span').text());
        if (isNaN(reward.captcha)) {
            console.log("Timer attivo o Bonus Captcha attivo");
        } else {
            console.log("Il costo senza captcha è " + reward.captcha);
        }
        if (isNaN(reward.captcha) && isNaN(timeremaning.time)) {
            if (reward.points >= 5000) {
                console.log("I punti reward sono superiori a 5000 prendo i bonus");
                $('#free_points_rewards .large-3 .reward_link_redeem_button_style:eq(1) ').click();
                $('#fp_bonus_rewards .large-3 .reward_link_redeem_button_style:eq(1) ').click();
            } else {
                console.log("I reward sono inferiori a 5000 prendo solo il bonus 100 Reward");
                $('#free_points_rewards .large-3 .reward_link_redeem_button_style:eq(1) ').click();
            }
        } else {
            console.log("Non prendo nessun Bonus perchè il Timer non è scaduto o non hai il Bonus NoCaptcha");
        }
        var myDate = new Date();
        var dataore = (myDate.getHours());
        var datagiorno = (myDate.getDay());
        var dataminuti = (myDate.getMinutes());
        console.log("Sono le " + dataore + ":" + dataminuti);
        console.log("Oggi è il " + datagiorno + "°" + "giorno");
        if (datagiorno > 5 && datagiorno < 7) {
            console.log("WEEK");
            if (isNaN(reward.captcha) && isNaN(timeremaning.time)) {
                console.log("Bonus Captcha attivo");
                $("#free_play_form_button").click();
                setTimeout(function() {
                    location.reload();
                }, 120000);
            } else {
                if (reward.captcha <= 24) {
                    console.log("sta per cliccare");
                    $("#play_without_captchas_button").click();
                    $("#free_play_form_button").click();
                    setTimeout(function() {
                        location.reload();
                    }, 120000);
                } else {
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
                        }, 120000);
                    }
                }
            }
        } else {
            if (dataore <= 23 && dataore >= 9) {
                if (dataore >= 13 && dataore < 14) {
                    console.log("Orario di pranzo a lavoro");
                    if (isNaN(reward.captcha) && isNaN(timeremaning.time)) {
                        console.log("Bonus Captcha attivo");
                        $("#free_play_form_button").click();
                        setTimeout(function() {
                            location.reload();
                        }, 120000);
                    } else {
                        if (reward.captcha < 12) {
                            console.log("sta per cliccare");
                            $("#play_without_captchas_button").click();
                            $("#free_play_form_button").click();
                            setTimeout(function() {
                                location.reload();
                            }, 120000);
                        } else {
                            console.log("mancano " + timeremaning.time + " Minuti");
                            setTimeout(function() {
                                location.reload();
                            }, 120000);
                        }
                    }
                } else {
                    console.log("orario di lavoro");
                    if (isNaN(reward.captcha) && isNaN(timeremaning.time)) {
                        console.log("Bonus Captcha attivo");
                        $("#free_play_form_button").click();
                        setTimeout(function() {
                            location.reload();
                        }, 120000);
                    } else {
                        if (timeremaning.time < 5) {
                            if (isNaN(timeremaning.time)) {
                                console.log("Clicccare");
                                setTimeout(function() {
                                    location.reload();
                                }, 120000);
                            } else {
                                console.log("mancano " + timeremaning.time + " Minuti");
                                console.log("mancano 5 minuti o meno");
                                setTimeout(function() {
                                    location.reload();
                                }, 60000);
                            }
                        } else {
                            console.log("mancano " + timeremaning.time + " Minuti");
                            setTimeout(function() {
                                location.reload();
                            }, 120000);
                        }
                    }
                }
            } else {
                console.log("orario di clicking");
                if (isNaN(reward.captcha) && isNaN(timeremaning.time)) {
                    console.log("Bonus Captcha attivo");
                    $("#free_play_form_button").click();
                    setTimeout(function() {
                        location.reload();
                    }, 120000);
                } else {
                    if (reward.captcha < 12) {
                        console.log("sta per cliccare");
                        $("#play_without_captchas_button").click();
                        $("#free_play_form_button").click();
                        setTimeout(function() {
                            location.reload();
                        }, 120000);
                    } else {
                        console.log("Ancora deve cliccare");
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
                            }, 120000);
                        }
                    }
                }
            }
        }

    };

    setTimeout(reward.select, 500);
})();
