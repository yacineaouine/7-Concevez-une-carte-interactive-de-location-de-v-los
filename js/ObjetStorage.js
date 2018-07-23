class Storage
{

	constructor(choice, contents)
	{
		this.choice = choice;
		this.contents = contents;

			if (typeof(Storage) !== "undefined") {

					if(contents !== "undefined")
		{//ajout ecoute bouton signature pour enregistrer la valeurapres signature canvas
		var btnSignature = document.getElementById("btnSignature");
		btnSignature.addEventListener("dblclick", (e) => {this.myItem();});

		var btnClear = document.getElementById("btnClear");
		btnClear.addEventListener("dblclick", (e) => {this.clearItem();});}

		else{
			alert("item déjà existant");
		//sessionStorage.removeItem(this.choice);
		}

			} 
		else {
    			alert("Sorry! No Web Storage support..")
			}
	}

	myItem()
	{	
		sessionStorage.setItem(this.choice, this.contents);
		var panier = document.getElementById("panier");
		panier.textContent += this.contents;
	}

	clearItem()
	{
		sessionStorage.removeItem(this.choice);
		var panier = document.getElementById("panier");
		//ajouter remove
		alert('item supprimé');
	}

}