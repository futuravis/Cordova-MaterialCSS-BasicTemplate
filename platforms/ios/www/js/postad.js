

function displayPosdAD(){
    hideSidePanal();
    $('.page_roll').hide();
    $('#postad').show();
    slide_page('front','postad')
    var Html= '';
    Html+= backHeader('Post AD','home');
    
    window.setTimeout(function(){
                      $('#postad').html(Html)
                      }, 200);
}
