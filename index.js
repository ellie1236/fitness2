$( document ).ready(function() {
    
     async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBI4QKfMRyXKRlBA4sCUAWhy6fLWZ9_8Ls&callback=Map" type="text/javascript"
    
     $('#myPanel').enhanceWithin().panel();
    console.log( "ready!" );
});


function Map() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID
}
var Map = new google.maps.Map(document.getElementById("Map"), mapOptions);
    
}

