function toggleBounce()
	                {

	                    if (marker.getAnimation() !== null)
	                    {
			                    marker.setAnimation(null);
			                    //textContent evite attaque XSS
			                    //efface les details si existe
			                    document.getElementById("statusDetails").textContent = ""; 
			                    document.getElementById("nomDetails").textContent = ""; 
			                    document.getElementById("addressDetails").textContent = ""; 
			                    document.getElementById("opeDetails").textContent = ""; 
			                    document.getElementById("dispoDetails").textContent = ""; 
			                    document.getElementById("veloDetails").textContent = ""; 
			                    document.getElementById("paiementDetails").textContent = ""; 

	                    	} 
	                    else
	                    {
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
			                    
			                    //recuperation du choix du client
			                    //ObjetStorage
			                    let name = data[i].name;
								var objStorage = new Storage('stations', name);
								
			                   	
								
						                    if(data[i].status === "OPEN")
						                    	{document.getElementById(idText).style.backgroundColor = "green";}

						                    else{document.getElementById(idText).style.backgroundColor = "red";}
	                    }               
	                            
	                 }
