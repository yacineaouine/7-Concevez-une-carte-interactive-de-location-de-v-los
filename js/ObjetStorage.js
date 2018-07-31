class Storage
{

	constructor(keyChoice, contents, contents2)
	{

	if (typeof(Storage) !== "undefined")
	{
		this.keyChoice = keyChoice;
		this.contents = contents;
		this.contents2 = contents2;

		//div utilisé pour l'objet
		window['contentPanierDevice'] = document.getElementById('contentPanierDevice');
		window['contentPanierDesktop'] = document.getElementById('contentPanierDesktop');
		window['nbVelo'] = document.getElementById('veloDetails');
		window['paymentDesktop'] = document.getElementById('paymentDesktop');
		window['payment'] = document.getElementsByClassName('payment[1]');
		window['btnSignature'] = document.getElementById('btnSignature');
		window['btnReserver'] = document.getElementById('btnReserver');
		btnReserver.addEventListener('click', (e) => {this.myItem();});
		 //affichage blocksignature
		//objetDISPLAY
		var objReserver = new Display('btnReserver', 'reserver');

	}
	

	else {alert("Sorry! No Web Storage support..")};

	}


	myItem()
	{
	 if(!sessionStorage.getItem('saveName'))
	 {	if(this.contents)
		{this.clearItem()};
		sessionStorage.setItem(this.keyChoice,this.contents);
	
		contentPanierDevice.style.display = "flex";
		contentPanierDesktop.style.display = "flex";	
		contentPanierDevice.textContent += this.contents;
		contentPanierDesktop.textContent += this.contents;
		btnSignature.addEventListener("click", (e) => {this.signItem();});
	  }
	}



	signItem()
	{
		this.saveItem();
		let objDisplayChrono = new Display('btnSignature', 'chronoDesktop');//creation de l'affichage div du chrono
		let objDisplayPayment = new Display('btnSignature', 'payment');//creation de l'affichage div du paiement
		if(this.contents2 > 0 )
		{
		sessionStorage.setItem(this.keyChoice,this.contents);
		this.contents2 -= 1;
		}
		
	}

	saveItem()
	{
		  sessionStorage.setItem("saveName", this.contents);
		  sessionStorage.setItem("stateReservation", "Réservation accepté");
		  if(!sessionStorage.getItem("saveChrono"))
		  {window['objChrono'] = new Chrono(1140000, 1000);}
		  else
		  {console.log("saveChrono present")}	

	}

	

	clearItem()
	{
		sessionStorage.removeItem(this.keyChoice);
		contentPanierDevice.textContent = "";
		contentPanierDesktop.textContent = "";
	}
		

}