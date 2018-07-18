class Click
{

	constructor(idButton, classCible, classNone)
	{
		window['classCible'] = classCible;
		window['classNone'] = classNone;
		var idB = document.getElementById(idButton);
		window['classC'] = document.getElementsByClassName(classCible);
		idB.addEventListener("click", (e) => {this.display();});
	}

	display()
	{
		if(classC.style.display === "none")
		{classC.style.display = "flex";
			var classNone = document.getElementById(classNone);
			for(var i=0; i<=classNone.length;i++)
			{classNone[i].style.display = "none"}		
		}
		else
			for(var i=0; i<=classC.length;i++)
		{classC[i].style.display = "none";}
	}

}