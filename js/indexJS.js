  
//ObjetDISPLAY
var	objHome = new Display('btnHome', 'divHome', 'divNone');//affichage section home
var objContact = new Display('btnContact', 'divContact', 'divNone');//affichage section contact depuis contact
var objContact2 = new Display('btnContact2', 'divContact', 'divNone');//affichage section contact depuis compte
var objMap = new Display('btnMap', 'divMap', 'divNone'); //affichage section map
var objTuto = new Display('btnTuto', 'divTuto', 'divNone');//affichage section tuto
var objCompte = new Display('btnCompte', 'divCompte', 'divNone');//affichage section compte



//ObjectSLIDER
const sliderJS = new Slider('preview', 'next', 'vignette', 'slide');



//btn clear du desktop
var btnClearItemDesktop = document.getElementById('btnClearItemDesktop');
btnClearItemDesktop.addEventListener('click', function(){
	sessionStorage.clear();
	document.location.reload();
});

//btn clear du device
var btnClearItemDevice = document.getElementById('btnClearItemDevice');
btnClearItemDevice.addEventListener('click', function(){
	sessionStorage.clear();
	document.location.reload();
});

//ObjetAJAX
 var dataGet = new AjaxCall("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4c0dd7bc629dffa5ae869d96fce6b4eec7760d7c", "GET", function dataJSON(reponse) {
 	
 //Transforme la réponse en tableau d'objets JavaScript
 var stations = JSON.parse(reponse);

 //récupération des données JSON API JCDecaux (stations) par la methode AJAX et intégration à la map
//ObjetMAP
var mapJS = new Map('map','lyon', 45.75, 4.85, 14, stations);

});


// on efface la session quand le chrono est terminé
while(sessionStorage.getItem("saveChrono") == "temps restant: -1 min 60 sec")
{
	sessionStorage.clear();
}


//ObjetCHRONO crée au load
if(sessionStorage.getItem("saveChrono"))
{//recuperation du chrono dans le sessionStorage en temps réel

let minStorage = sessionStorage.getItem('saveMinute');//minute stocké en tps réel
let secStorage = sessionStorage.getItem('saveSeconde');//secondes stocké en tps réel


//on crée le nvx chrono à partir de la minute enregistré
const objChrono2 = new Chrono(minStorage*60000, 1000,"load");//création au load

//on update le sessionStorage "saveChrono"
sessionStorage.setItem("saveChrono", chronoIdDesktop.textContent);
};

reserver();
function reserver(){
//PANIER
var btnReserver = document.getElementById('btnReserver');
btnReserver.addEventListener('click', function confirmStation(){

if(sessionStorage.getItem('stateReservation') == "Réservation accepté")
{
	var rep = confirm("voulez-vous changer de station?");
	if(rep == true)
	{
		sessionStorage.removeItem('saveMinute');
		sessionStorage.removeItem('saveSeconde');
		sessionStorage.setItem('saveMinute', 19);
		sessionStorage.setItem('saveSeconde', 60);
		localStorage.setItem('myLastReservation', sessionStorage.getItem('stations'));
		reserver();
		window.location.reload();
	}
	else
	{
		divReserver.style.display = 'none';
	}
	
}




//objetSTORAGE 
window['objStorage'] = new Storage("stations", sessionStorage.getItem('stations'));})

var btnSignature = document.getElementById('btnSignature');
btnSignature.addEventListener('click', (e) => {
//ObjetCHRONO créé au click du btn Signature
const objChrono = new Chrono(1140000, 1000);})
//recuperation "paiement accepté" dans sessionStorage" et affichage

//Desktop payment
var paymentDesktop = document.getElementById("paymentDesktop");
paymentDesktop.content += sessionStorage.getItem('stateReservation');
if(sessionStorage.getItem('stateReservation') != null)
{	
	var objDisplayChrono = new Display('btnSignature', 'payment');//affichage paiement
	document.getElementById("paymentDesktop").style.display = "block";
}

//Device payment
var paymentDevice = document.getElementById("paymentDevice");
paymentDevice.content += sessionStorage.getItem('stateReservation');


//Desktop content panier
if(!sessionStorage.getItem("stations") || sessionStorage.getItem("stations") == null)
{
	contentPanierDesktop.textContent = "Choisir une station";//Desktop 	
}

else
{
	contentPanierDesktop.textContent += sessionStorage.getItem('stations');//Desktop 
}

//Device content panier
contentPanierDevice.textContent = contentPanierDesktop.textContent;	
contentPanierDevice.style.display = 'flex';


var imgSignature = document.getElementById('imgSignature');
imgSignature.style.display = "none";
if(sessionStorage.getItem('imageSignature') != null)
{
	imgSignature.src = sessionStorage.getItem('imageSignature');
	imgSignature.style.display = "block";
}


var imageSignature = document.getElementById('signature').toDataURL();

var btnSignature = document.getElementById('btnSignature');
btnSignature.addEventListener('click', (e) => {setTimeout(function(){window.location.reload()}, 1000)});

//ajoute la dernière réservation dans mon compte
var myLastReservation = document.getElementById('myLastReservation');
let lastReservation = localStorage.getItem('myLastReservation');
if(lastReservation == null)
{myLastReservation.textContent += 'aucune réservation'}
else
{myLastReservation.textContent += lastReservation;}

//ajoute la dernière signature
var myLastSignature = document.getElementById('myLastSignature');
let lastSignature = localStorage.getItem('myLastSignature');
if(lastSignature == null)
{myLastSignature.textContent += 'aucune réservation'}
else
{myLastSignature.src = lastSignature;}
}

