/*Object Slider: créé un diaporama*/

class Slider 
{
	
	constructor (idButtonLeft, idButtonRight, className, idName)

	{

	//nom de la classe du diaporama	
	this.idButtonLeft = idButtonLeft;
	this.idButtonRight = idButtonRight;
	this.className = document.getElementsByClassName(className);
	this.idName = idName;
	// variable contenant le nombre de clics sur next
	window['r'] = 0;
	// variable contenant le nombre de clics sur preview

	//bouton gauche
	var idButtonLeft = document.getElementById(idButtonLeft);
	idButtonLeft.addEventListener("click", (e) => {
            this.slideLeft();
        });
	//bouton droit
	var idButtonRight = document.getElementById(idButtonRight);
	idButtonRight.addEventListener("click", (e) => {
            this.slideRight();
        });	
	//flèches clavier droite/gauche
		//var divTuto = document.getElementById('tuto');
        document.addEventListener("keydown", (e) => {this.arrowButton(e);});	

			
	}

	get getSlideLeft()
	{
		this.slideLeft();
	}

	get getSlideRight()
	{
		this.slideRight();
	}

	arrowButton(e){
		
		if (e.key === "ArrowRight")
		{
			this.getSlideRight;
		}
		else if(e.key === "ArrowLeft")
		{
			this.getSlideLeft;
		}

	}
	slideLeft ()

	{

		var x = this.className;
		var y = this.idName;
		// fonction appelée à chaque clic sur le bouton
		this.compteurL();
		
		if(x[r+1].id === y && r>=0)
		{
			x[r+1].id = "";
			x[r].id = y;
		}
	}

	compteurL()
	{
	// on diminiue la valeur de la variable
		if(r>0)
		{
			r--;
			return r;
		}
		else
		{
			r=3;
			return r;
		}
	}

	

	slideRight ()

	{

		var x = this.className;
		var y = this.idName;
		// fonction appelée à chaque clic sur le bouton
		this.compteurR();
		if(x[r-1].id === y && r<=4)
		{
			x[r-1].id = "";
			x[r].id = y;
		}

	}

	compteurR()
	{
	// on augmente la valeur de la variable
		if(r<4)
		{
			r++;
			return r;
		}

		else 
		{
			r=1;
			return r;
		}

	}

}


