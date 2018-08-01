  
//ObjetDISPLAY
var	objHome = new Display('btnHome', 'divHome', 'divNone');//affichage section home
var objContact = new Display('btnContact', 'divContact', 'divNone');//affichage section contact depuis contact
var objContact2 = new Display('btnContact2', 'divContact', 'divNone');//affichage section contact depuis compte
var objMap = new Display('btnMap', 'divMap', 'divNone'); //affichage section map
var objTuto = new Display('btnTuto', 'divTuto', 'divNone');//affichage section tuto
var objCompte = new Display('btnCompte', 'divCompte', 'divNone');//affichage section compte



//ObjectSLIDER
var sliderJS = new Slider('preview', 'next', 'vignette', 'slide');


//ObjetAJAX
 var dataGet = new ajaxCall("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4c0dd7bc629dffa5ae869d96fce6b4eec7760d7c", "GET", function dataJSON(reponse) {
 	
 // Transforme la réponse en tableau d'objets JavaScript
 var stations = JSON.parse(reponse);

 //récupération des données JSON API JCDecaux (stations) par la methode AJAX et intégration à la map
//ObjetMAP
var mapJS = new Map('map','lyon', 45.75, 4.85, 14, stations);

});




contentPanierDesktop.textContent += sessionStorage.getItem('stations');

if(sessionStorage.getItem("saveChrono"))
{//recuperation du chrono dans le sessionStorage en temps réel
let minStorage = sessionStorage.getItem('saveMinute');
let secStorage = sessionStorage.getItem('saveSeconde');

//on efface contenu du chrono dans div
//chronoIdDesktop.textContent += "";

//on crée le nvx chrono à partir de la minute enregistré
var objChrono2 = new Chrono(minStorage*60000, 1000,"load");
objChrono2;

//on update le sessionStorage "saveChrono"
sessionStorage.setItem("saveChrono", chronoIdDesktop.textContent);

//on recupere le nvx chrono du storage
chronoIdDesktop.textContent += sessionStorage.getItem('saveChrono');

//on l'affiche dans sa div
chronoIdDesktop.textContent += sessionStorage.getItem('saveChrono');
let objDisplayChrono = new Display('btnSignature', 'chronoDesktop');//creation de l'affichage div du chrono

};


//recuperation "paiement accepté" dans sessionStorage" et affichage
var paymentDesktop = document.getElementById("paymentDesktop");
paymentDesktop.content += sessionStorage.getItem('stateReservation');



document.getElementById("btnClearItemDesktop").addEventListener("click", function(){
    sessionStorage.clear();
    chronoIdDesktop.textContent += "";
    contentPanierDesktop.textContent += "";

});





	



	




