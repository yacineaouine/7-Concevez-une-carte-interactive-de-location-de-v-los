/*
Objet CHRONO: crée un chrono

limit: temps du compte à rebour en ms,
interTime: intervalle de temps en ms,
event: evenement pour déclencher le chrono,
idBtn: element déclencheur
*/
class Chrono
{
	constructor(minLimit, secLimit, interTime, event, idBtn)
	{
		this.minLimit = minLimit;
		this.secLimit = secLimit;
		this.interTime = interTime;
		this.event = event;
		this.idBtn = idBtn;
		window['min'] = minLimit;
		window['sec'] = secLimit;

		window['chronoDevice'] = document.getElementById('chronoDevice');
		
		window['btnChrono'] = document.getElementById(idBtn);

		//si il y a un evenement on lance le chrono
		if(event != "load")
		{
			if(event)
			{
			btnChrono.addEventListener(event, this.interval());
			}
			else
			{this.interval();}
		}

		//si l'evenement est load on relance le chrono
		if(event == 'load')
		{

			if(sessionStorage.getItem('saveMinute') == 0 && sessionStorage.getItem('saveSeconde') == 0 || sessionStorage.getItem('saveChrono') == null)
			{this.interval();}

			else
			{
				this.interval();
			}
		}
	}


	interval()
	{	


			if(!sessionStorage.getItem("saveChrono"))
			
			{	if(this.interTime != null)
				{
				window['interval'] = setInterval(this.display, this.interTime);
				chronoIdDesktop.textContent = "";
				chronoDevice.textContent = "";
				chronoIdDesktop.textContent += 'temps restant: '+min+' min '+sec+' sec';
				chronoDevice.textContent += 'temps restant: '+min+' min '+sec+' sec';
				}
				else
				{
					console.log('interval clear');
					clearInterval(interval);
					
				}
			}

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
				window['chronoIdDesktop'] = document.getElementById('chronoIdDesktop');

				chronoIdDesktop.textContent = '';
				chronoIdDesktop.textContent += 'temps écoulé';
				chronoIdDesktop.style.display = 'none'
				chronoDevice.textContent = '';
				chronoDevice.textContent += 'temps écoulé';	
				chronoDevice.style.display = 'none';
				console.log('min<0');
				this.clearChrono;	
				document.location.reload();

				
			}
				
			
	}

	
}



