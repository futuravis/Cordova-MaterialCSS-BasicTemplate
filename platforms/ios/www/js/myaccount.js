function displayMyaccount(){
    $('#home').hide();
    $('#myaccount').show();
    
    slide_page('front','myaccount')
    
    callProfileApi()
    
   
    
    
    
    
    
}

function callProfileApi(){
 
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
    
   // alert(JSON.stringify(result))
    
    var html= '';
    html+= backHeader('My Account','home');
    
    html += '<div class="profile_div">'
    html += '<div class="profile_img"><img src="img/man.png" width="140" style=" margin:3px 3px 2px 3px"/></div>'
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
    
    window.setTimeout(function() {
                      $('#myaccount').html(html)
                      }, 200);

}






