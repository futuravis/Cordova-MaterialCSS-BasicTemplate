function displayHomePage()
{
    
    var symbolJSon = [
                      {"symbol":"img/user.png"},
                      {"symbol":"img/search.png"},
                      {"symbol":"img/Categories.png"},
                      {"symbol":"img/home.png"},
                      {"symbol":"img/logo.png"},
                      {"symbol":"img/add.png"},
                      {"symbol":"img/filter.png"},
                      ];
    var json_My_Account= {
        "name": "My Account",
        "symbol": symbolJSon[0].symbol,
        "method": "",
        "id":"footer_My_Account",
    }
    var json_Search= {
        "name": "Search",
        "symbol": symbolJSon[1].symbol,
        "method": "",
        "id":"footer_Search",
    }
    var json_Categories= {
        "name": "Categories",
        "symbol": symbolJSon[2].symbol,
        "method": "",
        "id":"footer_Categories",
    }
    var json_Home= {
        "name": "Home",
        "symbol": symbolJSon[3].symbol,
        "method": "",
        "id":"footer_Home",
    }

    var json_Logo = {
        "name": "Logo",
        "symbol": symbolJSon[4].symbol,
        "method": "",
        "id":"footer_Logo",
    }
    var json_Add = {
        "name": "Add",
        "symbol": symbolJSon[5].symbol,
        "method": "",
        "id":"footer_Add",
    }
    
    
    var Footter_home_icons = {
        "jsonFormat": [
                       json_Home,
                       json_Categories,
                       json_Search,
                       json_My_Account,
                       ]
    }

    var header_home_icons = {
        "jsonFormat": [
                       json_Logo,
                       json_Add,
                       ]
    }

    
    var Html = '';
    Html += '<form>';
    Html += displayHeader(header_home_icons);
    Html += '<div class="content">'
    Html += '</div>'
    Html += displayFooter(Footter_home_icons);
    Html +='</form>';
    
    
    window.setTimeout(function() {
                      $('#home').empty();
                      $('#home').append(Html).trigger('create');
                      $('#home').css("display","block");
                      window.location.href = '#home';
                      }, 200);
}

function displayHeader(header_home_icons)
{
    var html = "";
    html += '<div>'
    html += '<div class="header home_header sticky_header" id="myHeader">'
    html += '<div class="row fixed_header_row">'
    
    //Create the add
    html += '<div class="col s3 center-align fixed_header_col">'
    html += '<img class="header_log_img" src="'+header_home_icons.jsonFormat[0].symbol+'">'
    html += '</div>'
    
    html += '<div class="col s6 fixed_header_col">'
        html += '</div>'

    html += '<div class="col s3 fixed_header_col">'
    html += '<div class="row fixed_header_row">'
    html += '<div class="col s8 fixed_header_col header_add_text center-align">'+header_home_icons.jsonFormat[1].name+'</div>'
    html += '<div class="col s4 fixed_header_col position_relative">'
    html += '<img class="header_add_img" src="'+header_home_icons.jsonFormat[1].symbol+'">'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    
    
    html += '</div>'
    html += '</div>'
    html += '</div>'
    return html;
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
    html += '<div class="col s3 fixed_footer_col waves-effect waves-light" onclick="'+Footter_home_icons.jsonFormat[j].method+'">'
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





























