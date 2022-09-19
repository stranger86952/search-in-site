console.log($.fn.jquery);
setInterval(function(){
    $(".text").find('span:contains('+$("#search").val()+')').parent().show();
    $(".text").find('span:not(:contains('+$("#search").val()+'))').parent().hide();
    $("#searchnum").text($(".text:visible").length);
},250);
