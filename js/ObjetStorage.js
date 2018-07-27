class Storage
{

	constructor(choice, contents, contents2)
	{
		this.choice = choice;
		this.contents = contents;
		this.contents2 = contents2;
	


			if (typeof(Storage) !== "undefined") {

		//ajout ecoute bouton signature pour enregistrer la valeur apres signature canvas
		var btnReserver = document.getElementById("btnReserver");

		btnReserver.addEventListener("click", (e) => {this.myItem();});
		btnReserver.addEventListener("click", (e) => {this.reservation();});
		sessionStorage.setItem(choice, contents, contents2);



		var btnClear = document.getElementById("btnClear");
		//btnClear.addEventListener("click", (e) => {this.clearItem();});

	}

			
		else {alert("Sorry! No Web Storage support..")};

	}


	myItem()
	{
		sessionStorage.setItem(this.choice, this.contents, this.contents2);
		var contentPanier = document.getElementById("contentPanier");
		window['nbVelo'] = document.getElementById("veloDetails");

		contentPanier.style.display = "flex";
		this.contents2 -= 1;
		nbVelo.textContent = this.contents2;//on deduit un vélo
			
			if(this.contents === null)//si le panier est vide	
			{contentPanier.textContent += this.contents;}//ajout de la data

			else{
			//this.clearItem();
			contentPanier.textContent += this.contents;} //sinon appel de la fonction clearItem puis ajout de la data
	}


	reservation()
	{
		//ObjetChrono
		var chrono = new Chrono(300000, 60000);
		var contentPanier = document.getElementById("contentPanier");
		document.getElementById('chrono').style.display = 'block';
		
	}


	/*clearItem()
	{
		console.log(this.contents);
		
		var contentPanier = document.getElementById("contentPanier");
		sessionStorage.clear(this.choice);
		contentPanier.textContent = "";
		document.getElementById('chrono').style.display = 'none';
		//nbVelo = document.getElementById("veloDetails");
		//this.contents2 += 1;
		//nbVelo.textContent = this.contents2;
		
	}*/

}