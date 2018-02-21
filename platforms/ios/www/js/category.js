function displayCatpage(){
    
    $('.page_roll').hide();
    $('#category').show();
    slide_page('front','help')
    callcatAPI();
    var Html= '';
    Html+= backHeader('category','home');
    
    Html+= '<div id="allcat"></div>'
    
    window.setTimeout(function(){
                      $('#category').html(Html)
                      }, 200);

    
}

function callcatAPI(){
    
        var selLangulage = localStorage.getItem('selLangulage');
    
    $.ajax({
           type : "GET",
           crossDomain: true,
           url : 'https://tlgrmapp.com/apps/dev/classified/index.php/api/cats/list/lang/'+selLangulage+'/parent',
           beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '1741B791EB86DF69C5A4338444AF5');},
          // data: { "cat_id" : "0", "area_id" : "1"},
           dataType: "json",
           success : function(result) {
           //alert(JSON.stringify(result))
           displaycatListview(result)
           //set your variable to the result
           //displayContent(result)
           },
           error : function(result) {
           console.log("call Failed");
           //handle the error
           }
           });

    
}

function displaycatListview(Content_json){
    
    var html = "";
    
    html+= '<ul class="collection with-header" style=" margin-top: 55px">'
    
    for(var j=0;j<Content_json.result.length;j++){
    html+= '<li class="collection-item"><div id="'+Content_json.result[j].id+'" onclick="renderHomepage(this.id)" style=" font-size: 16px" q>'+Content_json.result[j].title+'<span style=" float: right"><i class="material-icons">chevron_right</i></span></div></li>'
        
        
    }
    html+= '</ul>'
//alert(Html)
    
    window.setTimeout(function(){
                      $('#allcat').html(html);
                      }, 300);
    
    
    
}


function renderHomepage(id){
    goBack('home',id);
   // alert(id)
    //displayHomePage(id)
    
}
