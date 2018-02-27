$(document).ready(function() {

  $( ".save" ).click(function() {
    var titulo = document.getElementById("title").value;
    var descripcion = document.getElementById("description").value;
    var latitud = document.getElementById("lat").value;
    var longitud = document.getElementById("long").value;

    // Convirtiendo a Numero
    parseInt(latitud);
    parseInt(longitud);
    String(titulo);
    String(descripcion);
    console.log(titulo);
    console.log(description);
    console.log(latitud);
    console.log(longitud);

    initialize(title, descripcion, latitud, longitud);
    // alert( "Handler for .click() called." );
  });

});

function initialize(title, descripcion, latitud, longitud) {

  var texto = '<h1>Nombre del Lugar:'+ title +'</h1>'+
              '<p>Descripción:'+ descripcion +'</p>'+
              '<p>Latitud:'+ latitud +'</p>'+
              '<p>Longitud:'+ longitud +'</p>';

  var myLatLng = {lat: latitud, lng: longitud};
  var mapOptions = {
    zoom:11,
    center:myLatLng
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: title
  });


  var informacion = new google.maps.InfoWindow({
    content: texto
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
