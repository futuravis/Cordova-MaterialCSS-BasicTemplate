function displayHomePage()
{
    
    var symbolJSon = [
                      {"symbol":"img/Profile.png"},
                      {"symbol":"img/Settings.png"},
                      {"symbol":"img/Highlyrated.png"},
                      {"symbol":"img/MostPopular.png"},
                      {"symbol":"img/newlogo.png"},
                      {"symbol":"img/registergreyn.png"},
                      {"symbol":"img/Analytics.png"},
                      {"symbol":"img/Myclasses.png"},
                      {"symbol":"img/My-Team.png"},
                      {"symbol":"img/mic_white.png"},
                      {"symbol":"img/my_dashboard.png"}
                      ];
    
    var json_Profile= {
        "name": "My Profile",
        "symbol": symbolJSon[0].symbol,
        "method": "",
        "id":"footer_My_Profile_icon",
    }
    var json_Settings= {
        "name": "Settings",
        "symbol": symbolJSon[1].symbol,
        "method": "",
        "id":"footer_Settings_icon",
    }
    var json_Highly_Rated= {
        "name": "Highly Rated",
        "symbol": symbolJSon[2].symbol,
        "method": "",
        "id":"footer_Highly_Rated_icon",
    }
    var json_Popular= {
        "name": "Popular",
        "symbol": symbolJSon[3].symbol,
        "method": "",
        "id":"footer_Popular_icon",
    }

    var Footter_home_icons = {
        "jsonFormat": [
                       json_Profile,
                       json_Settings,
                       json_Highly_Rated,
                       json_Popular,
                       ]
    }
    
    var json_Logo = {
        "name": "Logo",
        "symbol": symbolJSon[4].symbol,
        "method": "",
        "id":"footer_Popular_icon",
    }
    var json_Create = {
        "name": "Create",
        "symbol": symbolJSon[5].symbol,
        "method": "",
        "id":"footer_Popular_icon",
    }

    var header_home_icons = {
        "jsonFormat": [
                       json_Logo,
                       json_Create,
                       ]
    }

    
    
    var Html = '<form>';
    Html += displayHeader(header_home_icons);

    Html += '<div class="content">'
    Html += '<h3>On Scroll Sticky Header</h3>'
    Html += '<p>The header will stick to the top when you reach its scroll position.</p>'
    Html += '<p>Scroll back up to remove the sticky effect.</p>'
    Html += '<p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>'
    Html += '<p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>'
    Html += '<p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>'
    Html += '<p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>'
    Html += '<p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>'
    Html += '<p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>'
    Html += '<p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>'
    Html += '<p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>'
    Html += '</div>'

    Html += displayFooter(Footter_home_icons);
    Html +='</form>';
    
    
    window.setTimeout(function() {
                      $('#login').empty();
                      $('#login').append(Html).trigger('create');
                      $('#login').css("display","block");
                      window.location.href = '#login';
                      }, 200);
}



function displayFooter(Footter_home_icons)
{
//    alert(Footter_home_icons);
//    alert(JSON.stringify(Footter_home_icons));
//    alert(Footter_home_icons.jsonFormat[0])
//    alert(JSON.stringify(Footter_home_icons.jsonFormat[0].name))
//    alert(JSON.stringify(Footter_home_icons.jsonFormat[0]))

    var html = "";
    html += '<div>';
    html += '<footer>'
    html += '<div class="row fixed_footer_row">'
    for(var j=0;j<Footter_home_icons.jsonFormat.length;j++){
    html += '<div class="col s3 waves-effect waves-light" onclick="'+Footter_home_icons.jsonFormat[j].method+'">'
    html += '<div class="row fixed_footer_icon_row">'
    html += '<img class="fixed_footer_image" src="'+Footter_home_icons.jsonFormat[j].symbol+'">'
    html += '</div>'
    html += '<div class="row white-text">'+Footter_home_icons.jsonFormat[j].name+'</div>'
    html += '</div>'
    }
    html += '</footer>'
    html += '</div>';
    return html;
}


function displayHeader(header_home_icons)
{
    //alert(header_home_icons.jsonFormat[1].name)
    var html = "";
    html += '<div>'
    html += '<div class="header home_header sticky_header" id="myHeader">'
    html += '<div class="row">'
    
    //Create the add
    html += '<div class="col s4">'
    html += '<div class="row">'
    
    html += '<div class="col s8">'+header_home_icons.jsonFormat[1].name+'</div>'
    html += '<div class="col s4">'
    html += '<img class="fixed_footer_image" src="'+header_home_icons.jsonFormat[1].symbol+'">'
    html += '</div>'
    
    html += '</div>'
    html += '</div>'

    
    
    html += '<div class="col s6">2</div>'
    html += '<div class="col s2">3</div>'

    
    html += '</div>'
    html += '</div>'
    html += '</div>'
    return html;
}




























