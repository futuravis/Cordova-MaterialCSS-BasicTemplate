function displayMyFavorite(){
    hideSidePanal();
    $('.page_roll').hide();
    $('#myfavorite').show();
    slide_page('front','myfavorite')
    var Html= '';
    Html+= backHeader('My Favorite','home');
    
    window.setTimeout(function(){
                      $('#myfavorite').html(Html)
                      }, 200);
}

