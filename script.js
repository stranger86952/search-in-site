console.log($.fn.jquery);
setInterval(function(){
    $('td:not(:contains('+$("#search").val()+'))').parent().hide();
    $('td:contains('+$("#search").val()+')').parent().show();
    $("#searchnum").text("ヒット数:"+$("tr:visible").length);
},500);
