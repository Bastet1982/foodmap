$(document).ready(function(){
	  
	$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});

	$(document).ready(function(){
    $("#nav a").each(function(){
      var href = $(this).attr("href");
    $(this).attr({ href: "#"});
    $(this).click(function(){
        $("#show").load(href);
      });
   });
});


})



