function displayHomePage()
{
    var symbolJSon = [
                      {"symbol":"img/Profile.png"},
                      {"symbol":"img/Settings.png"},
                      {"symbol":"img/Highlyrated.png"},
                      {"symbol":"img/MostPopular.png"},
                      {"symbol":"img/MyLearning.png"},
                      {"symbol":"img/Catalog.png"},
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
    
    var footerHtml = displayFooter(Footter_home_icons);
    window.setTimeout(function() {
                      $('#login').empty();
                      $('#login').append(footerHtml).trigger('create');
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
    html += '<form>';
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
    html +='</form>';
    
    return html;
}






























