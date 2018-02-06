
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
