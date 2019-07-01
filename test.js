        var arrayprice = $.ajax({
            url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur"
        });
        var euro = arrayprice["responseJSON"]["bitcoin"]["eur"];
