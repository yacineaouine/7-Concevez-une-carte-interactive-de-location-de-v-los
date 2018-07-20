
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
            //title: data[i].status,
            name: data[i].name,
            icon: iconBase
        };
        let marker = new google.maps.Marker(markerOptions);
        markers.push(marker);

         marker.addListener('click', toggleBounce);
	 
let contentStation = 'Status: '+stations[i].status+' '+
					 'Nom: '+stations[i].name+' '+
					 'Adresse: '+stations[i].address+' '+
				  	 'Attache opérationnels: '+stations[i].bike_stands+' '+
					 'Attache disponibles: '+stations[i].available_bike_stands+' '+
					 'Nb vélos: '+stations[i].available_bikes;

	          function toggleBounce()
	                {
	            
	                    if (marker.getAnimation() !== null)
	                    {
	                    marker.setAnimation(null);
	                    document.getElementById("stationDetails").textContent -= contentStation;
	                    } 
	                    else
	                    {
	                    marker.setAnimation(google.maps.Animation.BOUNCE);
	                    document.getElementById("stationDetails").textContent += "";
	                    document.getElementById("stationDetails").textContent += contentStation;
	                    
	                    if(stations[i].status === "OPEN")
	                    	{document.getElementById("stationAside").style.backgroundColor = "green";}

	                    else{document.getElementById("stationAside").style.backgroundColor = "red";}
	                    }               
	                            
	                 }


	              let contentStringGreen = "<div style='background-color: green' >"+data[i].status+"</div>";
	              let contentStringRed = "<div style='background-color: red' >"+data[i].status+"</div>";
	           	  let contentString;

	              if(data[i].status === 'OPEN')
	              	{contentString = contentStringGreen}//infobulle verte

	              else
	              	{contentString = contentStringRed};//infobulle rouge
	         
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
	          //animation au click

	}


}

