/*Object Slider: créé un diaporama*/

class Slider 
{
	
	constructor (idButtonLeft, idButtonRight, className, idName)

	{

	//nom de la classe du diaporama	
	this.className = document.getElementsByClassName(className);
	this.idName = idName;
	// variable contenant le nombre de clics sur next
	window['r'] = 0;
	// variable contenant le nombre de clics sur preview
	window['l'] = 4;

	//bouton gauche
	var boutonIdLeft = document.getElementById(idButtonLeft);
	boutonIdLeft.addEventListener("click", (e) => {
            this.slideLeft();
        });
	//bouton droit
	var boutonIdRight = document.getElementById(idButtonRight);
	boutonIdRight.addEventListener("click", (e) => {
            this.slideRight();
        });	
	//flèches clavier droite/gauche
        document.addEventListener("keypress", this.arrowButton);			
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

		var keyR = 39;
		var keyL =37;
		if (e.keyCode === 39)
		{
			Slider.prototype.getSlideRight();
		}
		else if(e.keyCode === 37)
		{
			getSlideLeft();
		}

	}
	slideLeft ()

	{

		var x = this.className;
		var y = this.idName;
		// fonction appelée à chaque clic sur le bouton
		this.compteurL();
		
		if(x[l+1].id === y && l>=0)
		{
			x[l+1].id = "";
			x[l].id = y;
		}
	}

	compteurL()
	{
	// on diminiue la valeur de la variable
		if(l>0)
		{
			l--;
			return l;
		}
		else
		{
			l=3;
			return l;
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

var sliderJS = new Slider('preview', 'next', 'vignette', 'slide');
