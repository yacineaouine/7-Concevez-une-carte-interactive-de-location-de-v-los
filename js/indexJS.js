  
//ObjetClick
var btnMap = new Click('btnMap', 'divMap', 'divTuto');


//ObjetSignature
var signatureJS = new Signature('signature', 'red', 10, 10);


//ObjectSlider
var sliderJS = new Slider('preview', 'next', 'vignette', 'slide');


//ObjetAjax
 var dataGet = new ajaxCall("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4c0dd7bc629dffa5ae869d96fce6b4eec7760d7c", "GET", function (reponse) {
 // Transforme la réponse en tableau d'objets JavaScript
 let stations = JSON.parse(reponse);
 window['stations'] = stations;

//récupération des données JSON API JCDecaux (stations) et intégration à la map
//ObjetMap 
 var mapJS = new Map('map',stations ,'lyon', 45.75, 4.85, 15, 'image/iconeVelo.png');
 
});


