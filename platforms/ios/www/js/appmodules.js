function slide_page(dir,page,noslide) {
    
    window.setTimeout(function(){
                      $('.page').addClass('hide');
                      $('#'+page).removeClass('hide')
                      },100);
    
    var slide = ""
    if(dir == 'front'){
        slide = 'left'
    }else if(dir == 'flip'){
        slide = 'up'
    }else{
        slide = 'right'
    }
    //window.location.href = '#'+page;
    // return;
    //alert('#'+page)
    // not passing in options makes the plugin fall back to the defaults defined in the JS API
    
    var sli_page = '#'+page
    if(noslide == 'true'){
        sli_page = page;
    }
    var theOptions = {
        "href" : sli_page,
        "direction"        : slide, // 'left|right|up|down', default 'left' (which is like 'next')
        "duration"         :  500, // in milliseconds (ms), default 400
        "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay"         :  200, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay"     :  150, // same as above but for Android, default 70
        "winphonedelay"    :  250, // same as above but for Windows Phone, default 200,
        "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
        "fixedPixelsBottom":   0  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
    };
    
    window.plugins.nativepagetransitions.slide(
                                               theOptions,
                                               function () {
                                               //alert(14)
                                               },
                                               function (msg) {
                                               alert('error: ' + msg);
                                               });
}


function backHeader(text,prevpage){
    var html = "";
    html += '<div class="header home_header sticky_header" id="myHeader">'
    html += '<div onclick="goBack(\''+prevpage+'\')" style=" text-align: left !important; margin-top: 15px; margin-left: 10px"><img src="img/back_arrow.png" width="30"/><span class="header_text">'+text+'</span></div>'
    
    if(text == "My Account")
    {
        html += '<div class="row fixed_header_row">'
        html += '<div class="profile_logout" onclick="doLogout();"><img src="img/logout.png" width="30"/></div>'
        html += '</div>'
    }

    html += '</div>'
    return html;
}

function goBack(page,id){

    if(page == "home")
    {
        slide_page('slide',page);
        displayHomePage(id);
    }
    else if(page == "myaccount")
    {
        //displayMyaccount();
        $('.page_roll').hide();
        $('#myaccount').show();
        slide_page('left','myaccount')
        callProfileApi()
    }

    
    
}

function doLogout(){
    clearpage();
    localStorage.removeItem("userid");
    slide_page('front','login')
    displayLoginPage()
    $('#login').show();
    
}

function clearpage(){
    $('#login').hide();
    $('#register').hide();
    $('#home').hide();
    $('#myaccount').hide();
}


function getItemlocalStorage(param){
    var value = localStorage.getItem(param)
    return value;
}
function setItemlocalStorage(param,value){
    var value = localStorage.setItem(param,value)
}

function hideSidePanal()
{
    $('.button-collapse').sideNav('hide');
}








function selecttoggle()
{
    window.setTimeout(function() {
                      if(localStorage.getItem("sort_by") == "newest" || localStorage.getItem("sort_by") == null){
                      $( "#newest" ).click();
                      }
                      else if(localStorage.getItem("sort_by") == "Price_Ascending"){
                      $( "#Price_Ascending" ).click();
                      }
                      else if(localStorage.getItem("sort_by") == "Price_Descending"){
                      $( "#Price_Descending" ).click();
                      }
                      
                      }, 200);
    
    
    
}



function noUiSlider()
{
                      var slider = $("#test-slider");

                      noUiSlider.create(slider, {
                                        start: [20, 80],
                                        connect: true,
                                        step: 1,
                                        orientation: 'horizontal', // 'horizontal' or 'vertical'
                                        range: {
                                        'min': 0,
                                        'max': 100
                                        },
                                        format: wNumb({
                                                      decimals: 0
                                                      })
                                        });
}




function showloader(){
    $('.preLoader').show();
}

function hideloader(){
    $('.preLoader').hide();
}


