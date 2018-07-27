
class Map
{

	constructor(idMap,ville,lat,lng,zoom,data)
	{
		
		this.idMap = idMap;
		this.ville = ville;
		this.lat = lat;
		this.lng = lng;
		this.zoom = zoom;
		window['data'] = data;
		
	


		//this.dataStore = window['dataStore'];
  		window['map'] = map;

  		//creation de la map
	    ville = {lat: this.lat, lng: this.lng};// location
  		map = new google.maps.Map(
	    document.getElementById(this.idMap), {zoom: this.zoom, center: ville});// centré au niveau du choix de la ville

  		window['infoWindowGeo'] = new google.maps.InfoWindow;

  		this.initMapMarker();
  		this.geolocation();
  		

  		
	}


//INITMAP METHODE----------------------------------------------------------------------------------------------
		initMapMarker()	{
	
	  // location
	  this.ville = {lat: this.lat, lng: this.lng};

	  // centré au niveau du choix de la ville (latitude,longitude)
	  	map = new google.maps.Map(
	     document.getElementById(this.idMap), {zoom: this.zoom, center: this.ville});

	  	 this.infoWindowGeo = new google.maps.InfoWindow;

	  	var markers = [];
	  //création des marqueurs avec array JCDecaux
	    var iconBase = 'image/iconeVelo.png';
	     	  for (let i = 0; i < data.length; i++) {
        var markerOptions = {
            position: new google.maps.LatLng(data[i].position.lat, data[i].position.lng),
            info: data[i],
            icon: iconBase
        };
        let marker = new google.maps.Marker(markerOptions);
        markers.push(marker);
        
      

         marker.addListener('click',  toggleBounce);

function toggleBounce()
	                {
	                			
	                	 //enleve l'animation à tous les markers
	                	 for(var j = 0; j < markers.length; j++)
			                   {markers[j].setAnimation(null);}   
	                    		
	                    if (marker.getAnimation() !== null)
	                    {
	                    		                 		
			                   marker.setAnimation(null);

			                    //textContent evite attaque XSS
			                    //efface les details si existe
			                    //document.getElementById("statusDetails").textContent = ""; 
			                    //document.getElementById("nomDetails").textContent = ""; 
			                    //document.getElementById("addressDetails").textContent = ""; 
			                    //document.getElementById("opeDetails").textContent = ""; 
			                    //document.getElementById("dispoDetails").textContent = ""; 
			                    //document.getElementById("veloDetails").textContent = ""; 
			                    //document.getElementById("paiementDetails").textContent = ""; 


	                    	} 
	                   
	                    		
	                    		else{
			               		//place l'animation au marker cliqué
			                    marker.setAnimation(google.maps.Animation.BOUNCE);

			                    //efface les details
			                    document.getElementById("statusDetails").textContent = ""; 
			                    document.getElementById("nomDetails").textContent = ""; 
			                    document.getElementById("addressDetails").textContent = ""; 
			                    document.getElementById("opeDetails").textContent = ""; 
			                    document.getElementById("dispoDetails").textContent = ""; 
			                    document.getElementById("veloDetails").textContent = ""; 
			                    document.getElementById("paiementDetails").textContent = "";

			                    //ajoute les details
			                    document.getElementById("statusDetails").textContent = data[i].status; 
			                    document.getElementById("nomDetails").textContent = data[i].name; 
			                    document.getElementById("addressDetails").textContent = data[i].address; 
			                    document.getElementById("opeDetails").textContent = data[i].bike_stands; 
			                    document.getElementById("dispoDetails").textContent = data[i].available_bike_stands; 
			                    document.getElementById("veloDetails").textContent = data[i].available_bikes; 
			                    document.getElementById("paiementDetails").textContent = data[i].banking;  
			                    
			                    //recuperation du choix du client au toggle		                    
			                    //ObjetStorage
			                    var objStorage = new Storage('stations', data[i].name, data[i].available_bikes);
			                    }

			                	
		
								 if(data[i].status === "OPEN")
		                    	{document.getElementById("stationDetails").style.backgroundColor = "green";}

			                    else{document.getElementById("stationDetails").style.backgroundColor = "red";}
								    	              
	                        

	                          
	                            
	                 }


	              let contentStringGreen = "<div style='background-color: green; color: white; text-align: center' >"+data[i].status+"<br>"+data[i].name+"<br>"+data[i].available_bikes+"</div>";
	              let contentStringRed = "<div style='background-color: red; color: white; text-align: center' >"+data[i].status+"<br>"+data[i].name+"<br>"+data[i].available_bikes+"</div>";
	           	  let contentString;

	              if(data[i].status === 'OPEN')
	              	{contentString = contentStringGreen}//infobulle verte

	              else
	              	{contentString = contentStringRed;};//infobulle rouge
	         
	             //creation de l'infobulle        
	            let infoWindowOptions = {
	            content: contentString
	        	};
	           
	            // creation de l'info sur la map
	            let infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	       		
	            //ajout ecouteur sur marker
	            google.maps.event.addListener(marker, 'click',  function() {
	                infoWindow.open(map, marker);
	      
	            });
	     	 
	          }


	        
	          var markerCluster = new MarkerClusterer(map, markers,
            {maxZoom: 23, imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m'});          

	}



//GEOLOCATION METHODE -------------------------------------------------------------------------------------------
	geolocation(){
		// Try HTML5 geolocation.
		var infoWindowGeo = this.infoWindowGeo;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindowGeo.setPosition(pos);
            infoWindowGeo.setContent('Location found.');
            infoWindowGeo.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindowGeo, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindowGeo, map.getCenter());
        }
         function handleLocationError(browserHasGeolocation, infoWindowGeo, pos) {
        infoWindowGeo.setPosition(pos);
        infoWindowGeo.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');

																					
      }
  }
//-------------------------------------------------------------------------------------------------------------------------
 

}


