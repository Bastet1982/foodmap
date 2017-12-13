$(document).ready(function(){
	  
	$(function(){           // función para activar el timer del efecto splash
   setTimeout(function() {     
      $('#splash').fadeOut(500);     // id splash del html, donde la funcion fadeOut desaparecerá a los 5 seg la pantalla de inicio
   }, 2000);
});

	$(document).ready(function(){    // enlace con index html  REVISAR!!!
    $("#nav a").each(function(){
      var href = $(this).attr("href");
    $(this).attr({ href: "#"});
    $(this).click(function(){
        $("#show").load(href);
      });
   });
});

	var busqueda = $('#busqueda'),
		titulo = $('ul li h3');

	$(titulo).each(function(){
		var li = $(this);

	//si presionamos la tecla
	$(busqueda).keyup(function(){

	//cambiamos a minusculas
	this.value = this.value.toLowerCase();
	//
	var clase = $('.search i');
	if($(busqueda).val() != ''){
	$(clase).attr('class', 'fa fa-times');
	}else{
	$(clase).attr('class', 'fa fa-search');
	}
	if($(clase).hasClass('fa fa-times')){
	$(clase).click(function(){
	//borramos el contenido del input
	$(busqueda).val('');
	//mostramos todas las listas
	$(li).parent().show();
	//volvemos a añadir la clase para mostrar la lupa
	$(clase).attr('class', 'fa fa-search');
	});
	}
	//ocultamos toda la lista
	$(li).parent().hide();
	//valor del h3
	var txt = $(this).val();
	//si hay coincidencias en la búsqueda cambiando a minusculas
	if($(li).text().toLowerCase().indexOf(txt) > -1){
	//mostramos las listas que coincidan
	$(li).parent().show();
	}

   });
});
});



