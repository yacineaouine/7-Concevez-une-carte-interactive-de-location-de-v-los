  
//ObjetClick
var	objHome = new Display('btnHome', 'divHome', 'divNone');//affichage section home
var objContact = new Display('btnContact', 'divContact', 'divNone');//affichage section contact
var objMap = new Display('btnMap', 'divMap', 'divNone'); //affichage section map
var objTuto = new Display('btnTuto', 'divTuto', 'divNone');//affichage section tuto
var objCompte = new Display('btnCompte', 'divCompte', 'divNone');//affichage section compte
var objReserver = new Display('btnReserver', 'reserver')





//ObjetSignature
var signatureJS = new Signature('signature', 'black', 7, 7);


//ObjectSlider
var sliderJS = new Slider('preview', 'next', 'vignette', 'slide');


//ObjetAjax
 var dataGet = new ajaxCall("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4c0dd7bc629dffa5ae869d96fce6b4eec7760d7c", "GET", function dataJSON(reponse) {
 // Transforme la réponse en tableau d'objets JavaScript
 var stations = JSON.parse(reponse);
 //récupération des données JSON API JCDecaux (stations) par la methode AJAX et intégration à la map
//ObjetMap 


let mapJS = new Map('map','lyon', 45.75, 4.85, 10, 'image/iconeVelo.png', true, true, stations,"stationDetails");

});

//var objStorage = new Storage(stations, data[i].name);
