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
		//btn utilisé pourl'objet
		window['btnSignature'] = document.getElementById('btnSignature');
		window['btnReserver'] = document.getElementById('btnReserver');

		btnReserver.addEventListener('click', (e) => {this.myItem();});

		if(!sessionStorage.getItem('saveChrono'))
		{
			var objReserver = new Display('btnReserver', 'reserver');
		}
	}
	

	else {alert("Sorry! No Web Storage support..")};

	}

	//à la création on crée une sessionStorage pr modifier le panier
	myItem()
	{
		//si une station est déjà réservé,on demande si la personne souhaite en changer
		if(sessionStorage.getItem('saveChrono'))
		{
			
			var reponse = prompt("Voulez-vous changez de station?","o/n");
			if(reponse == "o")
			{
				//affichage block signature
				//objetDISPLAY
				var objReserver = new Display('btnReserver', 'reserver');

				this.clearItemAll();
			}


		}

	 	if(this.contents)//à partir du second click des marker 
		{this.clearItem()};//on efface le marker
		sessionStorage.setItem(this.keyChoice,this.contents);
		sessionStorage.setItem("contents2",this.contents2)
	
		contentPanierDevice.style.display = "flex";
		contentPanierDesktop.style.display = "flex";	
		contentPanierDevice.textContent += this.contents;
		contentPanierDesktop.textContent += this.contents;
		btnSignature.addEventListener("click", (e) => {this.signItem();});
	  
	}


	//à la signature on stock le sessionStorage pr valider le panier
	signItem()
	{
		this.saveItem();

		if(this.contents2 > 0 )
		{
				sessionStorage.setItem(this.keyChoice,this.contents);
				sessionStorage.setItem("contents2",this.contents2);

				if(!sessionStorage.getItem('saveChrono'))
				{
				//ObjetChrono crée au click du btn Signature
				var objChronoItem = new Chrono(60000,1000,"click",btnSignature);
				this.contents2 -= 1;
				document.getElementById("veloDetails").textContent -= sessionStorage.getItem('contents2')
				}
				else
				{
					console.log("ObjetStorage: chrono present");
				}

		}
		
	}

	//à la signature on sauvegarde la donnée définitive
	saveItem()
	{
		  sessionStorage.setItem(this.keyChoice, this.contents);
		  sessionStorage.setItem("stateReservation", "Réservation accepté");
	}

	

	clearItem()
	{
		sessionStorage.removeItem(this.keyChoice);
		contentPanierDevice.textContent = "";
		contentPanierDesktop.textContent = "";
	}

	clearItemAll()
	{
		sessionStorage.clear();
		contentPanierDevice.textContent = "";
		contentPanierDesktop.textContent = "";
		chronoIdDesktop.textContent = "";
		chronoDevice.textContent = "";
		chronoIdDesktop.style.display = "none";
		chronoDevice.style.display = "none";


	}
		

}