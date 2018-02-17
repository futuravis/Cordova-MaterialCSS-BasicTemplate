function displayHomePage()
{
    $('.page_roll').hide();
    
    var Html = '';
    Html += '<form>';
    Html += displayHeader();
    Html += '<div id="homeList"></div>'
    Html += displayFooter();
    Html += '</form>';
    
    CallhomeAPI();
    
    var filter_model_html = "";
    filter_model_html = displayfiltermodel();

    window.setTimeout(function() {
                      $('#Refinemodel').html(filter_model_html);
                      $('.modal').modal({
                                        dismissible: true, // Modal can be dismissed by clicking outside of the modal
                                        opacity: .5, // Opacity of modal background
                                        inDuration: 300, // Transition in duration
                                        outDuration: 200, // Transition out duration
                                        startingTop: '4%', // Starting top style attribute
                                        endingTop: '100%', // Ending top style attribute
                                        ready: function(modal, trigger)
                                        {
                                        //alert("Ready");
                                        },
                                        complete: function()
                                        {
                                        //alert('Closed');
                                        }
                                        }
                                        );
                      $('.collapsible').collapsible();
                      $('ul.tabs').tabs();
                      


                      
                      
                      
                      $('#home').empty();
                      $('#home').append(Html).trigger('create');
                      $('#home').css("display","block");
                      window.location.href = '#home';
                      $(".button-collapse").sideNav();
                      }, 200);
}


function CallhomeAPI(){
    
    $.ajax({
           type : "POST",
           crossDomain: true,
           url : "https://tlgrmapp.com/apps/dev/classified/index.php/api/ads/list",
           beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '1741B791EB86DF69C5A4338444AF5');},
           data: { "cat_id" : "0", "area_id" : "1"},
           dataType: "json",
           success : function(result) {
           //alert(JSON.stringify(result))
           //set your variable to the result
           displayContent(result)
           },
           error : function(result) {
           console.log("call Failed");
           //handle the error
           }
           });
    
}

function displayHeader()
{
    $('#myaccount').hide();
    $('#login').hide();
    var html = "";
    

    
    html += '<div class="header home_header sticky_header" id="myHeader">'
    html += '<div class="row fixed_header_row">'

    //Create the add
    html += '<div class="col s3 center-align fixed_header_col">'
    html += '<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons"><img style=" width: 50px" src="img/menu_bar.png"/></i></a>'
    html += '<img class="header_log_img" src="img/logo.png">'

    html += '</div>'

    html += '<div class="col s6 fixed_header_col">'
    html += '</div>'

    html += '<div class="col s3 fixed_header_col">'
    
    html += '<div class="row fixed_header_row">'
//    html += '<div class="col s8 fixed_header_col header_add_text center-align">'+header_home_icons.jsonFormat[1].name+'</div>'
    html += '<div class="col s12 fixed_header_col position_relative">'
    html += '<img class="header_add_img button-collapse" src="'+header_home_icons.jsonFormat[1].symbol+'">'
    html += '</div>'
    html += '</div>'
    
    html += '</div>'

    html += '</div>'
    html += '<div class="row allcat_text"><span>All categories</span>'
    
    //html += '<div class="col s10 right-align fixed_sub_header_col header_add_text" style=" color: #000000; font-weight: normal; font-size: 18px;">Filter'
    //html += '</div>'
    
    
   // html += '<div class="col s2 right-align fixed_sub_header_col position_relative">'
    //html += '<a class="waves-effect modal-trigger" href="#Refinemodel"><img class="header_filter_img" src="'+header_home_icons.jsonFormat[2].symbol+'"></a>'
    //html += '</div>'
    
    
    html += '</div>'
    html += '</div>'
    
    
    return html;
}



function displayFooter()
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
    var width = 100/Footter_home_icons.jsonFormat.length;
    for(var j=0;j<Footter_home_icons.jsonFormat.length;j++){
        html += '<div style="width:'+Math.round(width)+'%" class="col s3 fixed_footer_col waves-effect waves-light" onclick="'+Footter_home_icons.jsonFormat[j].method+'">'
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



function displayContent(Content_json)
{
    $('#home').show();
    var Html = "";
    Html += '<div class="content content_div">'
    
    
    Html += '<div><img src="img/home_blur.jpg" style=" height: 200px; width: 100%"/></div>'
    
    
    for(var j=0;j<Content_json.result.length;j++){
        Html += '<div class="col s12">'
        Html += '<div class="card horizontal z-depth-4">'
        Html += '<div class="card-image">'
        Html += '<img style=" padding: 4px; margin-top: 2px" src="'+Content_json.result[j].image_url+'">'
        Html += '</div>'
        Html += '<div class="card-stacked">'
        Html += '<div class="card-content">'
        Html += '<p>'+Content_json.result[j].title+'</p>'
        Html += '</div>'
        Html += '<div class="card-action">'
        Html += '<div>Price: &#x20ba; '+Content_json.result[j].price+'</div>'
        Html += '</div>'
        Html += '</div>'
        Html += '</div>'
        Html += '</div>'
        Html += '</div>'
    }
    Html += '<div style="height:60px;"></div>'
    Html += '</div>'
    $('#homeList').html(Html);
    
    
    //return Html;
}


function displayfiltermodel()
{
    var Html = "";
    
    //Header model
    Html += '<div class="modal-footer ">'
    Html += '<a href="#!" class="modal-action modal-close waves-effect font_size_16 App_text_color Bold_text btn-flat ">Apply</a>'
    Html += '</div>'
    
    
    Html += '<div class="modal-content filter_modle_content">'
    Html += '<ul class="collapsible" data-collapsible="accordion">'
    
    Html +=  displayToggleOption('Sort By','sort_by');
    
    Html += '</ul>'
    Html += '</div>'
    
    return Html;
}



function displayToggleOption(header_name,header_id)
{
    var Html = "";
    Html += '<li>'
    Html += '<div class="collapsible-header " onclick="selecttoggle()" >'+header_name+'</div>'
    Html += '<div class="collapsible-body">'
    
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    Html += '<ul class="tabs refine_'+header_id+'">'
    
    var number_of_divs = 12/(filter_json_sort_by.jsonFormat.length);
//onclick="setItemlocalStorage(\''+header_id+'\',\''+filter_json_sort_by.jsonFormat[j].id+'\')"
    
    for(var j=0;j<filter_json_sort_by.jsonFormat.length;j++){
        Html += '<li   class="tab col s'+number_of_divs+'"><a id="'+filter_json_sort_by.jsonFormat[j].id+'"  >'+filter_json_sort_by.jsonFormat[j].name+'</a></li>'
    }

    Html += '</ul>'
    Html += '</div>'
    Html += '</div>'

    Html += '</div>'
    Html += '</li>'
    return Html;

}





function applyfilter(header_name,header_id)
{

    
    
}








































function displayRadioOption()
{
    var Html = "";
    Html += '<li>'
    Html += '<div class="collapsible-header " onclick="" >radio options</div>'
    Html += '<div class="collapsible-body">'
    
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    
    Html += '<p>'
    Html += '<input class="with-gap" name="group1" type="radio" id="test1" />'
    Html += '<label for="test1">Red</label>'
    Html += '</p>'
    
    Html += '<p>'
    Html += '<input class="with-gap" name="group1" type="radio" id="test2" />'
    Html += '<label for="test2">Yellow</label>'
    Html += '</p>'
    
    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</li>'
    return Html;
    
}




function displayCheckboxOption()
{
    var Html = "";
    Html += '<li>'
    Html += '<div class="collapsible-header " onclick="" >checkbox options</div>'
    Html += '<div class="collapsible-body">'
    
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    
    Html += '<p>'
    Html += '<input type="checkbox" class="filled-in" id="filled-in-box-1"/>'
    Html += '<label for="filled-in-box-1">Filled in</label>'
    Html += '</p>'
    Html += '<p>'
    Html += '<input type="checkbox" class="filled-in" id="filled-in-box-2" />'
    Html += '<label for="filled-in-box-2">Filled in</label>'
    Html += '</p>'

    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</li>'
    return Html;
    
}


function displaySwitchOption()
{
    var Html = "";
    Html += '<li>'
    Html += '<div class="collapsible-header " onclick="" >switch options</div>'
    Html += '<div class="collapsible-body">'
    
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    
    Html += '<div class="switch">'
    Html += '<label>'
//    Html += 'Off'
    Html += '<input type="checkbox">'
    Html += '<span class="lever"></span>'
//    Html += 'On'
    Html += '</label>'
    Html += '</div>'

    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</li>'
    return Html;
    
}



function displaysliderOption()
{
    var Html = "";
    Html += '<li>'
    Html += '<div class="collapsible-header " onclick="noUiSlider()" >price slider</div>'
    Html += '<div class="collapsible-body">'
    
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    
    Html += '<div id="test-slider"></div>'

    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</li>'
    return Html;
    
}

//    Html +=  displayToggleOption();
//    Html +=  displayRadioOption();
//    Html +=  displayCheckboxOption();
//    Html +=  displaySwitchOption();
//    Html +=  displaysliderOption();

