
//création d'un objet appel AJAX;
class ajaxCall
{
	constructor(url, type, callback, data,  isJson)
	{
    


			//paramètre
			this.url=url;
			this.type=type;
      this.callback=callback;
      this.data=data;
      this.isJson=isJson;

			//création de la requête
			var req = new XMLHttpRequest();
		    req.open(type, url);

        if(type === "GET")
        {
          req.addEventListener("load", function () {

        if (req.status >= 200 && req.status < 400) {

            // Appelle la fonction callback en lui passant la réponse de la requête

            callback(req.responseText);

        } else {

            console.error(req.status + " " + req.statusText + " " + url);

        }

    });

    req.addEventListener("error", function () {

        console.error("Erreur réseau avec l'URL " + url);

    });
        }
		    else if (type === "POST")
        {
          callback = alert('envoyé');
        }
		    //envoi de la requete
		    if (type==="POST")
		    {
          if (isJson) {
                        console.log(data);
                        // Définit le contenu de la requête comme étant du JSON
                        req.setRequestHeader("Content-Type", "application/json");
                        // Transforme la donnée du format JSON vers le format texte avant l'envoi
                        data = JSON.stringify(data);
                      }

		    	req.send(data);
          
		    }
		      else if(type==="GET") {
		                              req.send(null);
			                           };
	}

}

var ajaxGet = new ajaxCall("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4c0dd7bc629dffa5ae869d96fce6b4eec7760d7c", "GET", function (reponse) {

    // Transforme la réponse en tableau d'objets JavaScript

    var stations = JSON.parse(reponse);

    //création des marqueurs avec array JCDecaux
    for (var i = 0; i < stations.length; i++) {
          var lat = stations[i].position.lat;
          var lng = stations[i].position.lng;
          var latLng = new google.maps.LatLng(lat,lng);
          var iconBase = 'image/iconeVelo.png';
          var marker = new google.maps.Marker({
            position: latLng,
            icon: iconBase,
            map: map
          });
      }


});



  // Création d'un objet JSon

var film = {
    titre: "Scarface",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};
var ajaxPOST = new ajaxCall("http://localhost/javascript-web-srv/post_json.php", "POST", film, true, true);









