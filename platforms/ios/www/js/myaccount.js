function displayMyaccount(){
    $('#home').hide();
    $('#myaccount').show();
    
    slide_page('front','myaccount')
    
    var html= '';
    html+= backHeader('My Account','home');
    
    html += '<div class="profile_div">'
    html += '<div class="profile_img"><img src="img/man.png" width="140" style=" margin:3px 3px 2px 3px"/></div>'
    html += '<div class="profile_name">Ashu</div>'
    html +='</div>'
    
    html += '<div class="row" style="margin-top:15px;">'
    html += '<div class="col s12">'
    html += '<div class="card horizontal z-depth-4">'
    html += '<div class="card-stacked">'
    html += '<div class="card-action">'
    html += '<div style=" font-size: 16px; color: #70EE35">Email Address</div>'
    html += '<div>john@gmail.com</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    
    html += '<div class="row">'
    html += '<div class="col s12">'
    html += '<div class="card horizontal z-depth-4">'
    html += '<div class="card-stacked">'
    html += '<div class="card-action">'
    html += '<div style=" font-size: 16px; color: #70EE35">Full Name</div>'
    html += '<div>Ashutosh Mishra</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    
    html += '<div class="row">'
    html += '<div class="col s12">'
    html += '<div class="card horizontal z-depth-4">'
    html += '<div class="card-stacked">'
    html += '<div class="card-action">'
    html += '<div style=" font-size: 16px; color: #70EE35">Contact Number</div>'
    html += '<div>5566445567</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    
    window.setTimeout(function() {
                      $('#myaccount').html(html)
                      }, 200);
    
    
    
    
    
}










