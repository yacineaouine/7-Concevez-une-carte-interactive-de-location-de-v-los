  
//ObjetClick
var btnMap = new Click('btnMap', 'divMap', 'divTuto');


//ObjetSignature
var signatureJS = new Signature('signature', 'blue', 3, 3);


//ObjectSlider
var sliderJS = new Slider('preview', 'next', 'vignette', 'slide');


//ObjetAjax
 var dataGet = new ajaxCall("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4c0dd7bc629dffa5ae869d96fce6b4eec7760d7c", "GET", function (reponse) {
 // Transforme la réponse en tableau d'objets JavaScript
 var stations = JSON.parse(reponse);

 // Recupération des données avec la mouse
 var ifra = document.getElementById('map');
 ifra.addEventListener("click", (e) => function(e){console.log(e);});

 // Affichage des données JCDecaux
 for(var i=0; i<stations.length; i++)
 {
 if (stations[i].status === "OPEN") 
 {document.getElementById("underIframe").style.backgroundColor = "green";}
 else {document.getElementById("underIframe").style.backgroundColor = "red";}
  }
  document.getElementById("underIframe").innerHTML += stations[0].status+'<br>'+stations[0].name+'<br>'+stations[0].address;
 console.log(stations);
});
