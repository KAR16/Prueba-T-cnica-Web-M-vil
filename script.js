// $(document).ready(function() {
//   console.log('Script.js');
// });


function initMap(){

  // Variable que muestra nuestra ubicacion en el mapa
  /*
  const ubicacion = new Localization(()=>{

    const options = {
        center: {
          lat: ubicacion.latitude,
          lng: ubicacion.longitude
        },
        zoom: 16
    }

    var map = document.getElementById('map');
    const mapa = new google.maps.Map(map, options);

  });
  */

  const ubicacion = new Localization(()=>{

    // Coordenadas
    const myLatLng = {lat: ubicacion.latitude, lng: ubicacion.longitude};

    // var texto = '<h1>Nombre del Lugar:'+ title +'</h1>'+
    //             '<p>Descripción:'+ descripcion +'</p>'+
    //             '<p>Latitud:'+ latitud +'</p>'+
    //             '<p>Longitud:'+ longitud +'</p>'+
    //             '<input type="button" class="btn btn-primary edit" value="Editar">';

    var textoPrueba = '<h2>Nombre del Lugar:</h2>'+
                '<p>Descripción:</p>'+
                '<p>Latitud:</p>'+
                '<p>Longitud:</p>'+
                '<input type="button" class="btn btn-primary edit" value="Editar">';

    // Opciones
    const options = {
        center: myLatLng,
        zoom: 16
    }

    // Mapa
    var map = document.getElementById('map');
    const mapa = new google.maps.Map(map, options);

    // Marcador
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: mapa,
      title: 'Marcador 1'
    });

    // Ventana de Información
    var informacion = new google.maps.InfoWindow({
      content: textoPrueba
    });

    // Funcion Click al Marcador
    marker.addListener('click', function(){
      informacion.open(mapa, marker);
    });

  });

  console.log(ubicacion);

}



//Funcion para obtener nuestra localizacion
/*
var ubicacion = new Localization();
console.log(ubicacion);
*/

function makeMarker(title, descripcion, latitud, longitud) {

  const ubicacion = new Localization(() => {
    // Coordenadas
    const myLatLng = {lat: ubicacion.latitude, lng: ubicacion.longitude};

    // var texto = '<h1>Nombre del Lugar:'+ title +'</h1>'+
    //             '<p>Descripción:'+ descripcion +'</p>'+
    //             '<p>Latitud:'+ latitud +'</p>'+
    //             '<p>Longitud:'+ longitud +'</p>'+
    //             '<input type="button" class="btn btn-primary edit" value="Editar">';

    var textoPrueba = '<h1>Nombre del Lugar:</h1>'+
                '<p>Descripción:</p>'+
                '<p>Latitud:</p>'+
                '<p>Longitud:</p>'+
                '<input type="button" class="btn btn-primary edit" value="Editar">';

    // Opciones
    const options = {
        center: myLatLng,
        zoom: 16
    }

    // Mapa
    var map = document.getElementById('map');
    const mapa = new google.maps.Map(map, options);

    // Marcador
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: mapa,
      title: 'Marcador 1'
    });

    // Ventana de Información
    var informacion = new google.maps.InfoWindow({
      content: textoPrueba
    });

    // Funcion Click al Marcador
    marker.addListener('click', function(){
      informacion.open(mapa, marker);
    });
  });

}

//google.maps.event.addDomListener(window, 'load', makeMarker);




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
  console.log(descripcion);
  console.log(latitud);
  console.log(longitud);

  initialize(title, descripcion, latitud, longitud);
  // alert( "Handler for .click() called." );
});
