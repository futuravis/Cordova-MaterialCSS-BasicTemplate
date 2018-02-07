
function displayLoginPage(Prev_page)
{
    if(Prev_page){
        $('#register').hide();
        $('#login').show();
        slide_page('front','login')
    }

    var Html = '';
    
    //Register card
    Html += '<div class="row ">'
    Html += '<div class="col s12">'
    Html += '<div class="card horizontal z-depth-4">'
    Html += '<div class="card-stacked">'
    Html += '<div class="card-action login_header_colour">'
    
    Html += '<div class="row ">'
    Html += '<div class="col s12 ">'
    Html += '<div class="row"></div>'
    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    
    //Login card
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    Html += '<div class="card horizontal z-depth-4">'
    Html += '<div class="card-stacked">'
    Html += '<div class="card-action">'
    
    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="email" type="text" placeholder="Email/Username">'
    Html += '</div>'
    Html += '</div>'
    
    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="password" type="text" placeholder="Password">'
    Html += '</div>'
    Html += '</div>'
    
    Html += '<div class="row">'
    Html += '<div class=" col s12 waves-effect waves-light login_button login_button_button_colour">'
    Html += '<div class="row" onclick="checkvalidation();">Login</div>'
    Html += '</div>'
    Html += '</div>'
    
    Html += '<div class="row">'
    Html += '<div class=" col s6 remember_me_text">'
    Html += '<input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />'
    Html += '<label for="filled-in-box">Remember Me</label>'
    Html += '</div>'
    Html += '<div class=" col s6 forgot_password_text">I forgot my password!'
    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    
    
    //Register card
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    Html += '<div class="card horizontal z-depth-4">'
    Html += '<div class="card-stacked">'
    Html += '<div class="card-action">'
    
    Html += '<div class="row">'
    Html += '<div class=" col s12">'
    Html += '<label>Not a member yet ?</label>'
    Html += '</div>'
    Html += '</div>'
    
    Html += '<div class="row " onclick="displayregisterpage();">'
    Html += '<div class=" col s12 waves-effect waves-light login_button memeber_now_button_colour ">'
    Html += '<div class="row">Member Now</div>'
    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    
    window.setTimeout(function() {
                      $('#login').empty();
                      $('#login').append(Html).trigger('create');
                      $('#login').css("display","block");
                      window.location.href = '#login';
                      }, 200);
    
    
}




function displayregisterpage(){
    $('#login').hide();
    $('#register').show();
    
    slide_page('front','register')
    
    var Html = '';
    
    //Register card
    Html += '<div class="row ">'
    Html += '<div class="col s12">'
    Html += '<div class="card horizontal z-depth-4">'
    Html += '<div class="card-stacked">'
    Html += '<div class="card-action login_header_colour">'
    
    Html += '<div class="row ">'
    Html += '<div class="col s12 ">'
    Html += '<div class="row"></div>'
    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    
    //Login card
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    Html += '<div class="card horizontal z-depth-4">'
    Html += '<div class="card-stacked">'
    Html += '<div class="card-action">'
    
    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="" type="text" placeholder="Email">'
    Html += '</div>'
    Html += '</div>'
    
    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="" type="text" placeholder="username">'
    Html += '</div>'
    Html += '</div>'
    
    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="" type="text" placeholder="Password">'
    Html += '</div>'
    Html += '</div>'

    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="" type="text" placeholder="phone number">'
    Html += '</div>'
    Html += '</div>'

    Html += '<div class="row">'
    Html += '<div class=" col s12 waves-effect waves-light login_button login_button_button_colour">'
    Html += '<div class="row">Register</div>'
    Html += '</div>'
    Html += '</div>'

    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'

    
    //Register card
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    Html += '<div class="card horizontal z-depth-4">'
    Html += '<div class="card-stacked">'
    Html += '<div class="card-action">'
    
    Html += '<div class="row">'
    Html += '<div class=" col s12">'
    Html += '<label>Already a memeber</label>'
    Html += '</div>'
    Html += '</div>'
    
    Html += '<div class="row " onclick="displayLoginPage();">'
    Html += '<div class=" col s12 waves-effect waves-light login_button memeber_now_button_colour ">'
    Html += '<div class="row">login Now</div>'
    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'

    window.setTimeout(function() {
                      $('#register').html(Html)
                      }, 200);
    
    
    
    
    
}



function checkvalidation(){
    
    var email = $('#email').val()
    var password= $('#password').val()
    
    CallloginAPI(email,password)
 
    
}




function CallloginAPI(email,password){
    $.ajax({
           type : "POST",
           crossDomain: true,
           url : "https://tlgrmapp.com/apps/dev/classified/index.php/api/users/login",
           beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '1741B791EB86DF69C5A4338444AF5');},
           data: { "username" : email, "password" : password},
           dataType: "json",
           success : function(result) {
           //alert(JSON.stringify(result))
           if(result.status == true){
             Materialize.toast('Login Success', 3000, 'rounded') 
           localStorage.setItem("userid", result.user_id);
           slide_page('front','home')
           displayHomePage();
           }
           //set your variable to the result
           //displayContent(result)
           },
           error : function(result) {
           console.log("call Failed");
           //handle the error
           }
           });
    
}




















