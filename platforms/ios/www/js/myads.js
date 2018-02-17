function displayMyAds(){
    hideSidePanal();
    $('.page_roll').hide();
    $('#myads').show();
    slide_page('front','myads')
    var Html= '';
    Html+= backHeader('My Ads','home');
    
    window.setTimeout(function(){
                      $('#myads').html(Html)
                      }, 200);
}

