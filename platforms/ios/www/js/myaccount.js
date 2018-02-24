function displayMyaccount(){
    $('#home').hide();
    $('.button-collapse').sideNav('hide');
    
    $('#myaccount').show();
    slide_page('front','myaccount')
    callProfileApi()
}

function callProfileApi(){
 showloader()
    var userId = localStorage.getItem("userid");
    
    $.ajax({
           type : "GET",
           crossDomain: true,
           url : "https://tlgrmapp.com/apps/dev/classified/index.php/api/users/info/id/"+userId+"",
           beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '1741B791EB86DF69C5A4338444AF5');},
           //data: { "username" : email, "password" : password},
           dataType: "json",
           success : function(result) {
           //$('.profile_name').html(result.username)
           hideloader();
           displayMyaccounset(result)
           //set your variable to the result
           //displayContent(result)
           },
           error : function(result) {
           console.log("call Failed");
           //handle the error
           }
           });
}

function displayMyaccounset(result){
    
    var html= '';
    html+= backHeader('My Account','home');
    
    html += '<div class="profile_div">'
    html += '<div class="profile_img"><img src="img/man.png" width="120" style=" margin:3px 3px 2px 3px"/></div>'
    html += '<div class="profile_name">'+result.info.username+'</div>'
    html +='</div>'
    
    html += '<div class="row" style="margin-top:15px;">'
    html += '<div class="col s12">'
    html += '<div class="card horizontal z-depth-4">'
    html += '<div class="card-stacked">'
    html += '<div class="card-action">'
    html += '<div style=" font-size: 16px; color: #70EE35">Email Address</div>'
    html += '<div>'+result.info.email+'</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    
    var fname = "Not Set";
    
    if(result.info.name != null){
    var fname = result.info.name + ' ' + result.info.surname
    }
    html += '<div class="row">'
    html += '<div class="col s12">'
    html += '<div class="card horizontal z-depth-4">'
    html += '<div class="card-stacked">'
    html += '<div class="card-action">'
    html += '<div style=" font-size: 16px; color: #70EE35">Full Name</div>'
    html += '<div>'+fname+'</div>'
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
    html += '<div>'+result.info.contact+'</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    
    html += '<div class="fixed-action-btn" style="bottom: 45px; right: 24px;">'
    html += '<a class="btn btn-floating btn-large App_color waves-effect waves-light" onclick="displayeditprofile(\''+result.info.email+'\',\''+result.info.contact+'\',\''+result.info.username+'\')">'
    html += '<i class="material-icons "><img class="profile_edit_img" src="img/edit.png" /></i>'
    html += '</a>'
    html += '</div>'

    window.setTimeout(function() {
                      $('#myaccount').html(html)
                      }, 200);

}






function displayeditprofile(email,contact,username){
    $('#myaccount').hide();
    $('#editprofile').show();
    slide_page('front','editprofile')
    var Html= '';
    Html+= backHeader('Edit Profile','myaccount');
    
    //Login card
    Html += '<div class="row Header_Top">'
    Html += '<div class="col s12">'
    Html += '<div class="card horizontal z-depth-4">'
    Html += '<div class="card-stacked">'
    Html += '<div class="card-action">'
    
    
    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="register_username" type="text" placeholder="username" value="'+username+'">'
    Html += '</div>'
    Html += '</div>'
    
    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="register_email" type="text" placeholder="Email" value="'+email+'">'
    Html += '</div>'
    Html += '</div>'
    
//    Html += '<div class="row">'
//    Html += '<div class="input-field col s12">'
//    Html += '<input id="register_Password" type="password" placeholder="Password">'
//    Html += '</div>'
//    Html += '</div>'
    
    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="register_contact" type="text" placeholder="contact" value="'+contact+'">'
    Html += '</div>'
    Html += '</div>'
    
    Html += '<div class="row" onclick="UpdateAccount();">'
    Html += '<div class=" col s12 waves-effect waves-light login_button login_button_button_colour ">'
    Html += '<div class="row">Update</div>'
    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    
    
    window.setTimeout(function() {
                      $('#editprofile').html(Html)
                      }, 200);
}




function UpdateAccount(){
    
    var username = $('#register_username').val();
    var email = $('#register_email').val();
    var contact = $('#register_contact').val();

}







