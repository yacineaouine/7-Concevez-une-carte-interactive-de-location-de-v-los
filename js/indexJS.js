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
	console.log('chrono terminé');
}




//1ere reservation
var btnSignature = document.getElementById('btnSignature');
btnSignature.addEventListener('click', (e) => {
if(!sessionStorage.getItem('saveChrono'))
{
//content panier vide
if(!sessionStorage.getItem("stations") || sessionStorage.getItem("stations") == null)
{
	contentPanierDesktop.textContent = "Choisir une station";//Desktop 
	contentPanierDevice.textContent = "Choisir une station";//Device	
};
//ObjetCHRONO créé au click du btn Signature
const objChrono = new Chrono(0,10, 1000);
}
});
console.log('pasSavechrono');

		
			//reservations suivantes
			var btnReserver = document.getElementById('btnReserver');
			btnReserver.addEventListener('click', function(){

						if(sessionStorage.getItem("saveChrono"))
						{
							console.log('slt');
							var rep = confirm('voulez-vous changer?');
				
							if(rep)
							{
							sessionStorage.clear();
							console.log('session clear');
							var objChrono2 = new Chrono(null,null, null);
							objChrono2 = new Chrono(19, 60, 1000);
							
							
							}
							else
							{
								console.log('non');
								sessionStorage.removeItem('stationsReserver');


							}
						}
			});

			
		//ObjetCHRONO crée au load
		if(sessionStorage.getItem("saveChrono"))
		{//recuperation du chrono dans le sessionStorage en temps réel
		console.log('savechrono');
		let minStorage = sessionStorage.getItem('saveMinute');//minute stocké en tps réel
		let secStorage = sessionStorage.getItem('saveSeconde');//secondes stocké en tps réel

		document.getElementById("paymentDesktop").style.display = "flex";

		contentPanierDesktop.textContent = sessionStorage.getItem('stationsReserver');//Desktop 
		contentPanierDevice.textContent = sessionStorage.getItem('stationsReserver');//Device

		//Desktop payment
				var paymentDesktop = document.getElementById("paymentDesktop");
				paymentDesktop.content += sessionStorage.getItem('stateReservation');
				if(sessionStorage.getItem('stateReservation') != null)
				{	
					var objDisplayChrono = new Display('btnSignature', 'payment');//affichage paiement
					document.getElementById("paymentDesktop").style.display = "flex";
				}

				//Device payment
				var paymentDevice = document.getElementById("paymentDevice");
				paymentDevice.content += sessionStorage.getItem('stateReservation');

		//on crée le nvx chrono à partir de la minute enregistré
		const objChrono2 = new Chrono(minStorage,secStorage, 1000,"load");//création au load
		console.log(objChrono2);
		//on update le sessionStorage "saveChrono"
		sessionStorage.setItem("saveChrono", chronoIdDesktop.textContent);
		};





if(sessionStorage.getItem("stationsReserver"))
{
contentPanierDesktop.textContent = sessionStorage.getItem("stationsReserver");
contentPanierDevice.textContent = sessionStorage.getItem("stationsReserver");
}



console.log('hola ligne 154');



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
