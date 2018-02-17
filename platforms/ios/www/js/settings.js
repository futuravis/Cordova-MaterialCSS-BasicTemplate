function displaysettings(){
    hideSidePanal();
    $('.page_roll').hide();
    $('#settings').show();
    slide_page('front','settings');
    
    
    var Html= '';
    Html+= backHeader('Settings','home');
    Html+= '<ul class="collection with-header">'
    Html+= '<li class="collection-item"><div>Currency<a onclick="" class="secondary-content"><i class="material-icons">send</i></a></div></li>'
    Html+= '<li class="collection-item"><div>Language<a onclick="" class="secondary-content"><i class="material-icons">send</i></a></div></li>'
    Html+= '<li class="collection-item"><div>About App<a onclick="" class="secondary-content"><i class="material-icons">send</i></a></div></li>'
    Html+= '<li class="collection-item"><div>Terms And Condition<a onclick="" class="secondary-content"><i class="material-icons">send</i></a></div></li>'
    Html+= '</ul>'

    
    window.setTimeout(function(){
                      $('#settings').html(Html)
                      }, 200);
}

