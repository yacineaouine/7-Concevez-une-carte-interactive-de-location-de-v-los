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
		canvas.addEventListener("mousemove", this.getCoordinates);
		canvas.addEventListener("mousemove", (e) => {
            this.drawn();
        });

		
		
	}

	getCoordinates(e)
	{
	window['x'] =  e.clientX - canvas.offsetLeft + window.scrollX;
	window['y'] = e.clientY - canvas.offsetTop + window.scrollY;
	}
  
  	drawn()
  	{
	ctx.fillStyle = this.color;
	ctx.fillRect(x,y,this.i,this.j);
  	}

	
}
var signatureJS = new Signature('signature', 'blue', 3, 3);


