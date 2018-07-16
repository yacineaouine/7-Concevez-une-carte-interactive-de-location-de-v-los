	

// Création de la fonction ajaxGet

/*function ajaxGet(url, callback) {

    var req = new XMLHttpRequest();

    req.open("GET", url);

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

    req.send(null);

}

//Récupération des données JCDecaux

ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4c0dd7bc629dffa5ae869d96fce6b4eec7760d7c", function (reponse) {

    // Transforme la réponse en tableau d'objets JavaScript

    var data = JSON.stringify(reponse);
   

    ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4c0dd7bc629dffa5ae869d96fce6b4eec7760d7c", function (reponse) {

    // Transforme la réponse en tableau d'objets JavaScript

    var stations = JSON.parse(reponse);

    // Affiche la position de chaque station

    stations.forEach(function (stations) {

        var position = stations.position;

    })
    	
});
     
   
});*/


/*// Création de la fonction ajaxGet

function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
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
    req.send(null);

}

// Récupération des data JCDecaux par ajaxGet
 ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4c0dd7bc629dffa5ae869d96fce6b4eec7760d7c", function (reponse) {

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


});*/