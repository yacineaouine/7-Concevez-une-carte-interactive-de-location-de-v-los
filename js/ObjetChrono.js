class Chrono
{
	constructor(limit, interTime)
	{
		this.limit = limit;
		this.interTime = interTime;
		this.interval();
		console.log('compte à rebours commence');
	}

	timeOut()
	{
		setTimeout(alert('compte a rebour terminé'), this.limit);
	}

	interval()
	{
		setInterval(this.display, this.interTime);
		this.timeOut;
		window['n'] = this.limit/60000;
		var chrono = document.getElementById('chrono');
		chrono.textContent += 'temps restant: '+parseInt(n)+' min';
	}

	display()
	{
	n--;
	console.log(n);
	var chrono = document.getElementById('chrono');
	chrono.textContent = "";
	chrono.textContent += 'temps restant: '+parseInt(n)+' min';
	if(n=0)
	{
		console.log("n=0");
		chrono.textContent = '';
		chrono.textContent += 'temps écoulé';
		objStorage.clearItem();
	}
	}
}