/*
Objet Map: crée une map avec marker et markersClusterer

idMap: id de la div utilisé pour afficher la map,
ville: choix de la ville centré,
lat,lng: respectivement la latitude et la longitude de la ville,
zoom: zoom souhaité au chargement de la carte valeur: de 1 (World) à 20 (Buildings),
data: donnée attendu pour marker, sous format JSON
*/

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

		
  		window['map'] = map;

  		//creation de la map
	    ville = {lat: this.lat, lng: this.lng};//location
  		map = new google.maps.Map(
	    document.getElementById(this.idMap), {zoom: this.zoom, center: ville});// centré au niveau du choix de la ville

  		window['infoWindowGeo'] = new google.maps.InfoWindow;

  		this.initMapMarker();
  		this.geolocation();
  		
  		
  		

  		
}


//INITMAP METHODE----------------------------------------------------------------------------------------------
initMapMarker()
{
	
	  	//location
	  	this.ville = {lat: this.lat, lng: this.lng};

	  	// création de la map centré au niveau du choix de la ville (latitude,longitude)
	  	map = new google.maps.Map(
	    document.getElementById(this.idMap), {zoom: this.zoom, center: this.ville});

	  	//création objet geolocalisation
	  	this.infoWindowGeo = new google.maps.InfoWindow;

	  	var markers = [];

	  	//création des marqueurs avec array JCDecaux
	    var iconBase = 'image/iconeVelo.png';
	    for (let i = 0; i < data.length; i++)
	    {
        	var markerOptions = {
            position: new google.maps.LatLng(data[i].position.lat, data[i].position.lng),
            info: data[i],
            icon: iconBase
        	};
        	let marker = new google.maps.Marker(markerOptions);
        	

        	//création des markerCluster
        	markers.push(marker);
			//création écouteur pour l'animation
        	marker.addListener('click', (e) => {toggleBounce(e);});

        	//création écouteur pour storage
        	//marker.addListener('click', (e) => {storageData(e);});





        	
			function toggleBounce(e)
			{

						
	                	//enleve l'animation à tous les markers
			            for(var j = 0; j < markers.length; j++)
					    {
					        markers[j].setAnimation(null); 
					           
						}
	                    	
	                    if (marker.getAnimation() !== null)
	                    {	                    		                 		
			            	marker.setAnimation(null);
	                    } 
	                   
	                    		
                		else if(marker.getAnimation() === null)
                		{

                				
				               		//place l'animation au marker cliqué
				                    marker.setAnimation(google.maps.Animation.BOUNCE);
				                    
				                    //on ouvre le btn reserver
				                    var btnReserver = document.getElementById('btnReserver');
				                    btnReserver.style.display = 'block';

				                    //ajoute les details
				                    document.getElementById("statusDetails").textContent = data[i].status; 
				                    document.getElementById("nomDetails").textContent = data[i].name; 
				                    document.getElementById("addressDetails").textContent = data[i].address; 
				                    document.getElementById("opeDetails").textContent = data[i].bike_stands; 
				                    document.getElementById("dispoDetails").textContent = data[i].available_bike_stands; 
				                    document.getElementById("veloDetails").textContent = data[i].available_bikes; 
				                    document.getElementById("paiementDetails").textContent = data[i].banking; 

				                 

        							//affiche la div reservation
				                    document.getElementById("stationDetails").style.display = "flex";
				                   
				                   	//change couleur du back-ground selon status green/red
									if(data[i].status === "OPEN")
			            			{document.getElementById("stationDetails").style.backgroundColor = "green";}

				        			else{document.getElementById("stationDetails").style.backgroundColor = "red";} 

				                    //si il n'y a plus de vélo dans la station	                    
									if(data[i].available_bikes===0)
									{
										marker.setAnimation(null);	
										document.getElementById("veloDetails").style.color ="red";	
										document.getElementById("nomDetails").style.color ="red";	
										alert('aucun vélo disponible');	
										btnReserver.style.display = 'none';			 	
									}
									
									//si la station est ouverte et au moins un vélo est diponible, on peut éffectuer la réservation
									else if(data[i].available_bikes>0 && data[i].status === "OPEN")
									{
										sessionStorage.removeItem('stations');
										sessionStorage.setItem('stations', data[i].name);
										btnReserver.addEventListener('click', function(){
											sessionStorage.removeItem('stationsReserver');
											sessionStorage.setItem('stationsReserver', data[i].name);
											if(!sessionStorage.getItem('saveChrono'))
											{var objStorage = new Storage('stationsReserver', sessionStorage.getItem('stationsReserver'));}
											});

										document.getElementById("veloDetails").style.color = "white";
										document.getElementById("nomDetails").style.color ="white";	
										var contentPanierDesktop = document.getElementById("contentPanierDesktop");
      									contentPanierDesktop.textContent += "";

								    }

								    else
								    	{
								    		alert('la station est fermé pour le moment');
								    		btnReserver.style.display = 'none';
								    	}

								   
									                  
						} 

	        				           
	    	}



	    	//INFOBULLE
	        let contentStringGreen = "<div style='background-color: green; color: white; text-align: center' >"+data[i].status+"<br>"+data[i].name+"<br>"+data[i].available_bikes+"</div>";
	        let contentStringRed = "<div style='background-color: red; color: white; text-align: center' >"+data[i].status+"<br>"+data[i].name+"<br>"+data[i].available_bikes+"</div>";
	        let contentString;
	       
	        {document.getElementById("veloDetails").style.color ="red";}
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
geolocation()
{
		// Try HTML5 geolocation.
		var infoWindowGeo = this.infoWindowGeo;
        if (navigator.geolocation)
        {
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
        } 
        else
        {
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
 

}


