
class Map
{

	constructor(idMap,ville,lat,lng,zoom,icone,isMarker,geo,data,idText)
	{
		
		this.idMap = idMap;
		this.ville = ville;
		this.lat = lat;
		this.lng = lng;
		this.zoom = zoom;
		this.icone = icone;
		this.isMarker = isMarker;
		this.geo = geo;
		window['data'] = data;
		window['idText'] = idText;
	


		//this.dataStore = window['dataStore'];
  		window['map'] = map;

  		//creation de la map
	    ville = {lat: this.lat, lng: this.lng};// location
  		map = new google.maps.Map(
	    document.getElementById(this.idMap), {zoom: this.zoom, center: ville});// centré au niveau du choix de la ville

  		window['infoWindowGeo'] = new google.maps.InfoWindow;


  		  		
  		if(isMarker)
  		{
  		this.initMapMarker();
  		}

  		if(geo)
  		{
  		this.geolocation();
  		}

  		
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
	    var iconBase = this.icone;
	     	  for (let i = 0; i < data.length; i++) {
        var markerOptions = {
            position: new google.maps.LatLng(data[i].position.lat, data[i].position.lng),
            //title: data[i].status,
            info: data[i],
            icon: iconBase
        };
        let marker = new google.maps.Marker(markerOptions);
        markers.push(marker);

         marker.addListener('click', toggleBounce);

let contentStation = data[i].status+' Nom: '+data[i].name+' Adresse: '+data[i].address+' points d\'attache opérationnels: '+data[i].bike_stands+' points d\'attache disponibles: '+data[i].available_bike_stands+' vélos disponibles: '+data[i].available_bikes+' Terminal de paiement: '+data[i].banking;
          function toggleBounce()
	                {

	                    if (marker.getAnimation() !== null)
	                    {
			                    marker.setAnimation(null);
			                    //textContent evite attaque XSS
			                    document.getElementById(idText).textContent = ""; 		                 
	                    	} 
	                    else
	                    {
			                    marker.setAnimation(google.maps.Animation.BOUNCE)
			                    document.getElementById(idText).textContent = "";
			                    document.getElementById(idText).textContent += contentStation;

			                    //recuperation du choix du client
			                    //ObjetStorage
			                    let name = data[i].name;
								var objStorage = new Storage('stations', name);
								
			                   	
								
						                    if(data[i].status === "OPEN")
						                    	{document.getElementById(idText).style.backgroundColor = "green";}

						                    else{document.getElementById(idText).style.backgroundColor = "red";}
	                    }               
	                            
	                 }


	              let contentStringGreen = "<div style='background-color: green' >"+data[i].status+"</div>";
	              let contentStringRed = "<div style='background-color: red' >"+data[i].status+"</div>";
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


