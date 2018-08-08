class Signature
{

	constructor (idCanvas, color, i, j)
	{
		this.idCanvas =idCanvas;
		this.color = color;
		this.i = i;
		this.j = j;

		// Variables :
	window['canvas'] = document.getElementById(idCanvas);
	window['ctx'] = canvas.getContext("2d");
	ctx.fillStyle = color;
	window['painting'] = false;
	window['started'] = false;
	window['width_brush'] = 5;
	// Trait arrondi :
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	//clearCanvas
	var btnClearSignature = document.getElementById('btnClearSignature');
	btnClearSignature.addEventListener("click", (e) => {this.clearCanvas();});
	this.event();

	//tactile
	//au focus on annule le scroll
		canvas.focus({preventScroll:true});

  		//device
  		canvas.addEventListener("touchstart", this);
  		canvas.addEventListener("touchmove", this.getCoordinatesDevice);
  		canvas.addEventListener("touchmove", (evt) => {this.drawnDevice();});

	}
	
	event()
	{
			var x;
			var y;
			//var canvas = document.getElementById('signature');
			// Click souris enfoncé sur le canvas, je dessine :
			canvas.addEventListener("mousedown",(e) => {
				painting = true;
				// Coordonnées de la souris :
				var w = document.getElementById('navigationMain');
				x = e.clientX - canvas.offsetLeft - w.offsetWidth;
				y = (scrollY + e.clientY) - canvas.offsetTop;
				console.log(x);
			});
			
			// Relachement du Click sur tout le document, j'arrête de dessiner :
			document.addEventListener("mouseup",(e) => {
				painting = false;
				started = false;
			});
			
			// Mouvement de la souris sur le canvas :
			document.addEventListener("mousemove",(e) =>{
				// Si je suis en train de dessiner (click souris enfoncé) :
				if (painting) {
					// Set Coordonnées de la souris :
					var w = document.getElementById('navigationMain');
					x = e.clientX - canvas.offsetLeft - w.offsetWidth; 
					y = (scrollY + e.clientY) - canvas.offsetTop;
					
					// Dessine une ligne :
					this.drawLine(x,y);
				}
			});
	}
			
			// Fonction qui dessine une ligne :
	drawLine(x,y)
	 {
				// Si c'est le début, j'initialise
				if (!started) {
					// Je place mon curseur pour la première fois :
					ctx.beginPath();
					ctx.moveTo(x, y);
					started = true;
				} 
				// Sinon je dessine
				else {
					ctx.lineTo(x, y);
			ctx.strokeStyle = this.color;
			ctx.lineWidth = width_brush;
			ctx.stroke();
				}
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
		ctx.fillRect(xd, yd, this.i, this.j);
	}


	clearCanvas(){
		console.log("clearCanvas");
		ctx.clearRect(0,0, canvas.width, canvas.height);
	}
			
			
			
}