/*Object Signature: créé un canvas pour signer*/
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
		window['xd'] = evt.touches[0].clientX - canvas.offsetLeft + window.scrollX -43;	
		window['yd'] = evt.touches[0].clientY - canvas.offsetLeft + window.scrollY -461;
	}

	drawnDevice(){
		ctx.fillStyle = this.color;
		ctx.fillRect(xd, yd, this.i,this.j);
	}

/*desktop*/	

	getCoordinates(e){
	window['x'] =  e.clientX - canvas.offsetLeft + window.scrollX - 190;
	window['y'] = e.clientY - canvas.offsetTop + window.scrollY;
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



