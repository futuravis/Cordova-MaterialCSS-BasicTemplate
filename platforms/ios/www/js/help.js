function displayHelp(){
    hideSidePanal();
    $('.page_roll').hide();
    $('#help').show();
    slide_page('front','help')
    var Html= '';
    Html+= backHeader('Help','home');
    
    
    
    
    
    window.setTimeout(function(){
                      $('#help').html(Html)
                      }, 200);
}
