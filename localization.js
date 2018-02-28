class Localization {
  constructor(callback) {
    if (navigator.geolocation){
      //Obtenemos Ubicación
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude = position.coords.latitude;
        //this.latitude = 40.712784;
        this.longitude = position.coords.longitude;
        //this.longitude = -74.005941;

        callback();
      });
    }else{
      alert('Your browser dont suport geolocation');
    }
  }
}
