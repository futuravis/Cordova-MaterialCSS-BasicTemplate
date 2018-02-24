function displaysettings(){
    hideSidePanal();
    $('.page_roll').hide();
    $('#settings').show();
    slide_page('front','settings');
    
    
    var Html= '';
    Html+= backHeader('Settings','home');
    Html+= '<ul class="collection with-header" style=" margin-top: 50px">'
    Html+= '<li class="collection-item"><div onclick="DisplayLanguage();" >Language<a  class="secondary-content"><i class="material-icons">keyboard_arrow_right</i></a></div></li>'
    
    Html+= '<li class="collection-item"><div onclick="AboutApp();" >About App<a onclick="" class="secondary-content"><i class="material-icons">keyboard_arrow_right</i></a></div></li>'
    
    Html+= '<li class="collection-item"><div>Terms And Condition<a onclick="" class="secondary-content"><i class="material-icons">keyboard_arrow_right</i></a></div></li>'
    Html+= '</ul>'

    
    window.setTimeout(function(){
                      $('#settings').html(Html)
                      }, 200);
}

function DisplayLanguage(){
    $('.page_roll').hide();
    $('#language').show();
    slide_page('front','language');

    var Html= '';
    Html+= backHeader('Language','home');
    
Html+= '<div style=" margin-top: 60px">'
    Html+= '<ul class="collection with-header" style=" margin-top: 50px">'
    Html+= '<li class="collection-item"><div><span style=" float: left ; padding-right:10px"><img src="img/united-kingdom.png"/></span>English<div style=" float: right"><input onclick="changeLang(this.id);" class="with-gap" name="group1" type="radio" id="eng" /><label for="eng"></label></div></div></li>'
    Html+= '<li class="collection-item"><div><span style=" float: left ; padding-right:10px"><img src="img/turkey.png"/></span>Turkish<div style=" float: right"><input onclick="changeLang(this.id);" class="with-gap" name="group1" type="radio" id="tur" /><label for="tur"></label></div></div></li>'
    Html+= '<li class="collection-item"><div><span style=" float: left ; padding-right:10px"><img src="img/iran.png"/></span>Persian<div style=" float: right"><input onclick="changeLang(this.id);" class="with-gap" name="group1" type="radio" id="per" /><label for="per"></label></div></div></li>'

    Html+= '</ul>'

Html+= '</div>'
    
    
    
    window.setTimeout(function(){
                      $('#language').html(Html)
                      }, 200);

    
}

function changeLang(id){
    if(id=='eng'){
        localStorage.setItem("selLangulage","en");
    }else if(id=='tur'){
        localStorage.setItem("selLangulage","tr");
    }else if(id=='per'){
        localStorage.setItem("selLangulage","fa");
    }
    
}










function AboutApp(){
    $('.page_roll').hide();
    $('#aboutapp').show();
    slide_page('front','aboutapp');
    
    var Html= '';
    Html+= backHeader('About App','home');
    
    Html+= '<div style=" margin-top: 60px">'

    
    
    Html+= '<div class="row">'
    Html+= '<div class="col s12 m5">'
    Html+= '<div class="card-panel center-align" style=" height: 600px; ">'
    Html+= '<span class="white-text">'
    Html += '<img class="" src="img/logo2.png" style=" ">'
    Html+= '</span>'
    
    Html+= '<div class="card-content" style=" padding-top: 100px;">'
    Html+= '<p>version:1.1GA</p>'
    Html+= '</div>'

    
    Html+= '</div>'
    Html+= '</div>'
    Html+= '</div>'

    
    
    Html+= '</div>'
    
    
    
    window.setTimeout(function(){
                      $('#aboutapp').html(Html)
                      }, 200);

}

