class Display
{

	constructor(idButton, classCible, classNone)
	{
		this.idButton = idButton;
		this.classCible = classCible;
		this.classNone = classNone;

		var idB = document.getElementById(this.idButton);
		idB.addEventListener("click", (e) => {this.display();});
		
		
	}

	display()
	{
		
		var classCible = document.getElementsByClassName(this.classCible);
		var classNone = document.getElementsByClassName(this.classNone);
		
		for(var i = 0; i < classNone.length; i++)
		{
			classNone[i].style.display = "none";
		}
				
		for(var i = 0; i < classCible.length; i++)
		{
			classCible[i].style.display = "flex";
		}
						
		
	}
	

}