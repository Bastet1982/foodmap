$(document).ready(function(){
	  
	$(function(){           // función para activar el timer del efecto splash
   setTimeout(function() {     
      $('#splash').fadeOut(500);     // id splash del html, donde la funcion fadeOut desaparecerá a los 5 seg la pantalla de inicio
   }, 2000);
});
   
     $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });*/
});





