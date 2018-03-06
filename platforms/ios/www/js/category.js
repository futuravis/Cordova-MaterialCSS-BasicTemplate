function displayCatpage(){
    var id = 1
   // $('.page_roll').hide();
   // $('#category').show();
    //slide_page('front','help')
    callcatAPI();
     CallhomeAPI(id);
    //var Html= '';
    //Html+= backHeader('category','home');
    
    //Html+= '<div id="allcat"></div>'
    
//    window.setTimeout(function(){
//                      $('#category').html(Html)
//                      }, 200);
}

function callcatAPI(){
    showloader()
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
           hideloader();
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
    
    for(var j=0;j<Content_json.result.length;j++){
        html += '<div id="'+Content_json.result[j].id+'" onclick="displaysubCatpage(this.id)" style=" height: 40px; width: 45%; background: #FFFFFF; float: left; margin-left: 10px; margin-top: 20px;"><span style=" display: block; margin-top: 10px; margin-left: 10px; height: 17px; width: 130px; white-space: nowrap; overflow: hidden; text-overflow:ellipsis;">'+Content_json.result[j].title+'</span></div>'
    }
    
    window.setTimeout(function(){
                      $('.cat_div').html(html);
                      $('.cat_div').show();
                      $('.bannerImg').hide();
                      }, 300);

    return;
    
    html+= '<ul class="collection with-header" style=" margin-top: 55px">'
    
    for(var j=0;j<Content_json.result.length;j++){
    html+= '<li class="collection-item"><div id="'+Content_json.result[j].id+'" onclick="displaysubCatpage(this.id)" style=" font-size: 16px" ><span style=" float: left; margin-left: -15px"><img style=" padding-right: 10px" src="img/category.png" width="35"/></span>'+Content_json.result[j].title+'<span style=" float: right; margin-right: -15px"><i class="material-icons">chevron_right</i></span></div></li>'
    }
    html+= '</ul>'
//alert(Html)
    
    window.setTimeout(function(){
                      $('#allcat').html(html);
                      }, 300);
}





