class Slider 
{
	

	constructor (idButtonLeft, idButtonRight, className, idName)

	{

	//nom de la classe du diaporama	
	this.className = document.getElementsByClassName(className);
	this.idName = idName;
	var self = this;
	

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
	}

	
	slideLeft ()

	{
		var x = this.className;
		var y = this.idName;
		// fonction appelée à chaque clic sur le bouton
		compteurL();
		
		if(x[l+1].id === y && l>=0)
		{
			x[l+1].id = "";
			x[l].id = y;
		}
	}

	slideRight ()

	{
		
		var x = this.className;
		var y = this.idName;
		// fonction appelée à chaque clic sur le bouton
		compteurR();
		
		if(x[r-1].id === y && r<=4)
		{
			x[r-1].id = "";
			x[r].id = y;
		}


	}



}


var sliderJS = new Slider('preview', 'next', 'vignette', 'slide');

// variable contenant le nombre de clicssur next
var r = 0;

function compteurR()
{
	// on augmente la valeur de la variable
	if(r<4)
	{r++;
	return r;}
	else {r=1}
};

// variable contenant le nombre de clics sur preview
var l = 4;

function compteurL()
{
	// on diminiue la valeur de la variable
	if(l>0)
	{l--;
	return l;}
	else{l=3}
}





//console.log(SliderJS);

/*var x = document.getElementsByClassName('vignette');
console.log(x[0]);
var y = document.getElementById('slide');
console.log(y);*/

/*if (x[1] === y)
{console.log(true);}
else{
	console.log(false);
}
*/



	


