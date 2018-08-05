/*
Object Signature: créé un canvas pour signer

idCanvas: id div utilisé pour le canvas,
color: choix de la couleur du pixel,
i,j: respectivement abscisse et ordonnée du "grain pixel"
*/

class Signature
{

	constructor (idCanvas, color, i , j)
	{
		this.color = color;
		this.i = i;
		this.j = j;

		window['canvas'] = document.getElementById(idCanvas);
		window['ctx'] = canvas.getContext("2d");
		ctx.fillStyle = color;
		
  		//au focus on annule le scroll
		canvas.focus({preventScroll:true});

  		//device
  		canvas.addEventListener("touchstart", this);
  		canvas.addEventListener("touchmove", this.getCoordinatesDevice);
  		canvas.addEventListener("touchmove", (evt) => {this.drawnDevice();});

  		//desktop
		canvas.addEventListener("mousemove", this.getCoordinates);
		document.addEventListener("keypress", (e) => {this.keypressButton(e);});

		//clearCanvas
		var btnClearSignature = document.getElementById('btnClearSignature');
		btnClearSignature.addEventListener("click", (e) => {this.clearCanvas();});
	
	}


/*smartphone*/
	getCoordinatesDevice(evt){
		var w = document.getElementById('navigationMain');
		var z1 = screen.width;

		//si le breakpoint est smartphone portrait
		if(z1 < 768)
		{
			//on additionne la hauteur de tous les blocs au-dessus du canvas
			var btnReserver = document.getElementById('btnReserver');
			var station = document.getElementById('station');
			var titreStationDetails = document.getElementById('titre-stationDetails');
			var panierDevice = document.getElementById('panierDevice');
			var totalHeight = w.offsetHeight + btnReserver.offsetHeight
			 + station.offsetHeight + titreStationDetails.offsetHeight + panierDevice.offsetHeight;
			 console.log(totalHeight);
			 console.log(panierDevice.offsetTop);
			 
			window['xd'] = evt.touches[0].clientX - canvas.offsetLeft;
			window['yd'] = (scrollY + evt.touches[0].clientY) - totalHeight - 5;
			console.log(yd);
		}
		else
		{

			window['xd'] = evt.touches[0].clientX - canvas.offsetLeft - w.offsetWidth;
			window['yd'] = (scrollY + evt.touches[0].clientY) - canvas.offsetTop ;
			console.log(xd,yd);
		}	
		
	}

	drawnDevice(){
		
		ctx.fillStyle = this.color;
		ctx.fillRect(xd,yd,this.i,this.j);
	}

/*desktop*/	

	getCoordinates(e){
		var w = document.getElementById('navigationMain');

		window['x'] =  e.clientX - canvas.offsetLeft - w.offsetWidth;
		window['y'] = (scrollY + e.clientY) - canvas.offsetTop ;	
	}
  
  	drawn(){
		ctx.fillStyle = this.color;
		ctx.fillRect(x,y,this.i,this.j);	
  	}

  	 keypressButton(e)
	{

		if(e.key === 'w')
		{		
			canvas.addEventListener("mousemove", this.drawn());
		}

	}

	clearCanvas(){
		console.log("clearCanvas");
		ctx.clearRect(0,0,canvas.width, canvas.height);
	}


	
}



