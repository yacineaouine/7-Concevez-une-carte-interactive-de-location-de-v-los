
class Map
{

	constructor(idMap,data,ville,lat,lng,zoom, icone)
	{
		this.idMap = idMap;
		window['data'] = data;
		this.ville = ville;
		this.lat = lat;
		this.lng = lng;
		this.zoom = zoom;
		this.icone = icone;
  		window['map'] = map;
  		this.initMap();
  		
	}

		initMap()
	{
	  // location
	  this.ville = {lat: this.lat, lng: this.lng};
	  // centré au niveau du choix de la ville (latitude,longitude)
	  	map = new google.maps.Map(
	     document.getElementById(this.idMap), {zoom: this.zoom, center: this.ville});

	  	var markers = [];
	  //création des marqueurs avec array JCDecaux
	   			
	    var iconBase = this.icone;
	     	  for (let i = 0; i < data.length; i++) {
        var markerOptions = {
            position: new google.maps.LatLng(data[i].position.lat, data[i].position.lng),
            title: data[i].status,
            name: data[i].name,
            icon: iconBase
        };
        let marker = new google.maps.Marker(markerOptions);
        markers.push(marker);

         marker.addListener('click', toggleBounce);
	 

	          function toggleBounce()
	                {
	            
	                    if (marker.getAnimation() !== null)
	                    {
	                    marker.setAnimation(null);
	                    } 
	                    else
	                    {
	                    marker.setAnimation(google.maps.Animation.BOUNCE);
	                    }               
	                            
	                 }

	             //creation du la vignette info            
	            let infoWindowOptions = {
	            content:
	            data[i].status+'  '
	        	+data[i].name};
	           
	            // creation de l'info sur la map
	            let infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	       		console.log(infoWindow);
	            //ajout ecouteur sur marker
	            google.maps.event.addListener(marker, 'click',  function() {
	                infoWindow.open(map, marker);
	            });
	     	 
	          }
	        
	          var markerCluster = new MarkerClusterer(map, markers,
            {maxZoom: 23, imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m'});
	          //animation au click
	         



	    
          	



	}


}




		
/*
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 45.75, lng: 4.85},
          zoom: 15
        });
         infoWindow = new google.maps.InfoWindow;


        // HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);

      }*/