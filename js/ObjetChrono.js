class Chrono
{
	constructor(limit, interTime)
	{
		this.limit = limit;
		this.interTime = interTime;
		window['min'] = this.limit/60000;
		window['sec'] = 60;

		window['chronoDevice'] = document.getElementById('chronoDevice');
		window['chronoIdDesktop'] = document.getElementById('chronoIdDesktop');
		window['btnSignature'] = document.getElementById("btnSignature");
		btnSignature.addEventListener("click", (e) => {this.interval();});
		
	}


	interval()
	{

		if(!sessionStorage.getItem("saveChrono"))
		
		{
			window['interval'] = setInterval(this.display, this.interTime);
			chronoIdDesktop.textContent = "";
			chronoDevice.textContent = "";
			chronoIdDesktop.textContent += 'temps restant: '+min+' min '+sec+' sec';
			chronoDevice.textContent += 'temps restant: '+min+' min '+sec+' sec';
		}

		else
		{
			chronoIdDesktop.textContent += 'temps restant: '+min+' min '+sec+' sec';
			console.log(chronoIdDesktop.textContent);
		}


	}

	display()
	{
			
				if(min>=0)
				{
				sec--;
		
				if(sec==0)
				{
					min--;
					sec = 60;
				}				
					chronoIdDesktop.textContent = "";
					chronoDevice.textContent = "";
					chronoIdDesktop.textContent += 'temps restant: '+min+' min '+sec+' sec';
					chronoDevice.textContent += 'temps restant: '+min+' min '+sec+' sec';
					sessionStorage.setItem("saveChrono",chronoIdDesktop.textContent);
				}
			

				if(min<0)
				{				
					chronoIdDesktop.textContent = '';
					chronoIdDesktop.textContent += 'temps écoulé';
					chronoDevice.textContent = '';
					chronoDevice.textContent += 'temps écoulé';		
				}
			

			
			
			
				
	}

	


	
}