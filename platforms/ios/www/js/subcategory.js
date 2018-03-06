
function displaysubCatpage(id){
//    $('.page_roll').hide();
//    $('#subcategory').show();
//    slide_page('front','subcategory')
//    //displaysubcatListview();
    
    //alert(id);
    CallhomeAPI(id);
    callsubcatApi(id)

    return;
    
    
    
    
//    var Html= '';
//    Html+= backHeader('Sub category','category');
//    Html+= '<div id="allsubcat"></div>'
//
//    window.setTimeout(function(){
//                      $('#subcategory').html(Html);
//
//                      }, 200);
}




function callsubcatApi(id){
showloader()
    var selLangulage = localStorage.getItem('selLangulage');

    $.ajax({
           type : "GET",
           crossDomain: true,
           url : 'https://tlgrmapp.com/apps/dev/classified/index.php/api/cats/list/lang/'+selLangulage+'/parent/'+id+'',
           beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '1741B791EB86DF69C5A4338444AF5');},
           // data: { "cat_id" : "0", "area_id" : "1"},
           dataType: "json",
           success : function(result) {
           //alert(JSON.stringify(result))
           hideloader();
           displaysubcatListview(result)
           //set your variable to the result
           //displayContent(result)
           },
           error : function(result) {
           console.log("call Failed");
           //handle the error
           }
           });


}



function displaysubcatListview(Content_json){
    
    var html = "";

    
    for(var j=0;j<Content_json.result.length;j++){
        html += '<div id="'+Content_json.result[j].id+'" onclick="CallhomeAPI(this.id)" style=" height: 40px; width: 45%; background: #FFFFFF; float: left; margin-left: 10px; margin-top: 20px;"><span style=" display: block; margin-top: 10px; margin-left: 10px; height: 17px; overflow: hidden;">'+Content_json.result[j].title+'</span></div>'
    }
    
    window.setTimeout(function(){
                      $('.cat_div').html(html);
                      $('.cat_div').show();
                      //$('.bannerImg').hide();
                      }, 300);
    
    return;

    
    
    
    
    var html = "";
    html+= '<ul class="collection with-header" style=" margin-top: 55px">'
    for(var j=0;j<Content_json.result.length;j++){
        html+= '<li class="collection-item"><div id="'+Content_json.result[j].id+'" onclick="renderHomepage(this.id)" style=" font-size: 16px" q>'+Content_json.result[j].title+'<span style=" float: right"><i class="material-icons">chevron_right</i></span></div></li>'
    }
    html+= '</ul>'
//this.id
    window.setTimeout(function(){
                      $('#allsubcat').html(html);
                      }, 300);
}



function renderHomepage(id){
    goBack('home',id);
    // alert(id)
    //displayHomePage(id)

}


