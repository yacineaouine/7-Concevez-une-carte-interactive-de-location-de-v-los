/*
Objet STORAGE: stock des données dans le storage pour la reservation d'un produit (session/local)
à l'aide de l'API STORAGE

keyChoice: nom de la clé,
contents: valeur contents2
*/
class Storage
{

	constructor(keyChoice, contents)
	{

		if (typeof(Storage) !== "undefined")
		{
			this.keyChoice = keyChoice;
			this.contents = contents;

			//div utilisé pour l'objet
			window['contentPanierDevice'] = document.getElementById('contentPanierDevice');
			window['contentPanierDesktop'] = document.getElementById('contentPanierDesktop');
			window['nbVelo'] = document.getElementById('veloDetails');
			window['paymentDesktop'] = document.getElementById('paymentDesktop');
			window['payment'] = document.getElementsByClassName('payment[1]');

			//btn utilisé pourl'objet
			window['btnReserver'] = document.getElementById('btnReserver');
			window['btnSignature'] = document.getElementById('btnSignature');
			
			
			this.myItem();
			
	
			
		}
		

		else
		{alert("Sorry! No Web Storage support..")};

	}

	myItem()
	{
		//ObjetRESERVER affiche la div reserver
		var objReserver = new Display('btnReserver', 'reserver');
		this.clearItem();//on efface le marker
		sessionStorage.setItem(this.keyChoice,this.contents);

		//ObjetSIGNATURE crée le canvas pour signer
		var objSignature = new Signature("signature", "black", 5, 5);


		//on update le panier
		contentPanierDevice.style.display = "flex";
		contentPanierDesktop.style.display = "flex";	
		contentPanierDevice.textContent += this.contents;
		contentPanierDesktop.textContent += this.contents;	

		//en cliquant sur le bouton signature on appelle la methode signItem
		btnSignature.addEventListener('click', (e) => {this.signItem();});  

	}


	//à la signature on stock le sessionStorage pr valider le panier
	signItem()
	{	
		//on referme la div
		document.getElementById('divReserver').style.display = 'none';
		btnReserver.style.display = 'none';	
		this.saveItem();
	}

	//à la signature on sauvegarde la donnée définitive
	saveItem()
	{
		var imageSignature = document.getElementById('signature').toDataURL();
		sessionStorage.setItem('imageSignature', imageSignature);
		sessionStorage.setItem(this.keyChoice, this.contents);
		sessionStorage.setItem('stateReservation', 'Réservation accepté');

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

		if(!sessionStorage.getItem('stationsRerserver'))
		{localStorage.setItem('myLastReservation', this.contents);
		localStorage.setItem('myLastSignature', imageSignature);}
		else
		{
			localStorage.setItem('myLastReservation', sessionStorage.getItem('stationsRerserver'))
		}
	}

	clearItem()
	{
		console.log('clear item');
		sessionStorage.removeItem(this.keyChoice);
		contentPanierDevice.textContent = "";
		contentPanierDesktop.textContent = "";
	}

}

