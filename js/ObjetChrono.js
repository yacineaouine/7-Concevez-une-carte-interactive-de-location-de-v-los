class Chrono
{
	constructor(limit, interTime, event, idBtn)
	{
		this.limit = limit;
		this.interTime = interTime;
		this.event = event;
		this.idBtn = idBtn;
		window['min'] = this.limit/60000;
		window['sec'] = 60;

		window['chronoDevice'] = document.getElementById('chronoDevice');
		window['chronoIdDesktop'] = document.getElementById('chronoIdDesktop');
		window['btnSignature'] = document.getElementById("btnSignature");

		//si il y a un evenement on lance le chrono
		if(event != "load")
		{
			console.log(event);
			idBtn.addEventListener(event, (e) => {this.interval();});
		}
		//si l'evenement est load on relance le chrono
		console.log(event);

		if(event == "load")
		{
			console.log(event);
			if(sessionStorage.getItem('saveMinute') == 0 && sessionStorage.getItem('saveSeconde') == 0 || sessionStorage.getItem('saveChrono') == null)
			{
				this.clearChrono();
			}

			else
			{this.interval();}

			

		}


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

		/*else 
		{	
			/*console.log('chrono else');
			var resultat = prompt('reservation en attente, Souhaitez-vous changer de station','Oui/Non');
			if(resultat == "oui")
			{
				sessionStorage.clear();
				chronoIdDesktop.textContent = "";
			}
		}*/


		else 
		{
			window['interval'] = setInterval(this.display, this.interTime);
			chronoIdDesktop.textContent = "";
			chronoDevice.textContent = "";
			sec = sessionStorage.getItem('saveSeconde');
			chronoIdDesktop.textContent += 'temps restant: '+min+' min '+sec+' sec';
			chronoDevice.textContent += 'temps restant: '+min+' min '+sec+' sec';
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

					//pour stocker les valeurs du chrono
					sessionStorage.setItem("saveChrono", chronoIdDesktop.textContent);
					sessionStorage.setItem("saveMinute", min);
					sessionStorage.setItem("saveSeconde", sec);
					
					
			}
		

			if(min<0)
			{				
				chronoIdDesktop.textContent = '';
				chronoIdDesktop.textContent += 'temps écoulé';
				chronoDevice.textContent = '';
				chronoDevice.textContent += 'temps écoulé';		
			}
				
				
	}


	clearChrono()
	{
	this.limit = null;
	this.interTime = null;
	this.event = null;
	this.idBtn = null;	
	}
	
}