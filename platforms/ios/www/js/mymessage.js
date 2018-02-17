function displayMyMessage(){
    hideSidePanal();
    $('.page_roll').hide();
    $('#mymessage').show();
    slide_page('front','mymessage')
    var Html= '';
    Html+= backHeader('My Message','home');
    
    window.setTimeout(function(){
                      $('#mymessage').html(Html)
                      }, 200);
}
