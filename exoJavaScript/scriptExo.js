/*Exercice 1 : Compter de 1 en 1

for (var j = 0; j <= 100; j++) {
	console.log(j);
}


Exercice 2 : Compter de 5 en 5

for (var k = 0; k < 100;){
	k += 5;
	console.log(k);
}

Exercice 3 : Calcul mathématique

    do 
    {var reponse = prompt("combien font 3+2: ");
     var x = Number(reponse);
	 console.log(x);}
	while (x != 5);

	if (x = 5)
		{alert("bravo");}
	

Exercice 4 : Calcul mathématique (bis)

     var reponse2 = prompt("combien font 3+2: ");
     var y = Number(reponse2);
     if (y != 5)
     	{
     	var rep = prompt("voulez-vous continuer?(o/n): ");
     	var o = "o";
     	if (rep === o) 
     		{
     			 do 
    				{
    					var reponse2 = prompt("combien font 3+2: ");
     					var y = Number(reponse2);
	 					console.log(y);
	 				}
				while (y != 5);

				if (y = 5)
					{
						alert("bravo");
					}
     		}
     	else 
     		{
     			alert("fermer la fenêtre");
     		}

     	}
     else if(y = 5)
     {
     	alert("bravo");
     }

Exercice 5 : Utilisation de tableaux

var desserts = ["Gâteau au chocolat","Salade de fruits","Sorbet coco","Tarte tatin"] ;
	console.log(desserts);

	for (var i = 0; i <= desserts.length - 1; i++)
	{console.log(desserts[i]);}

Exercice 6: Choix du client

var desserts = ["Gâteau au chocolat","Salade de fruits","Sorbet coco","Tarte tatin"] ;

for(var i=0 ; i <desserts.length ; i++)
{
	console.log(i+" "+desserts[i]);

}

var choix = prompt("choisir dessert");
console.log(i);
console.log(choix);

do
	{
	var choix = prompt("choisir dessert");
	console.log(i);
	console.log(choix);
	}
	while(choix<0 || choix>=desserts.length)

	if(choix>=0 && choix<desserts.length)
{
	console.log("vous avez choisi:" + desserts[choix]);
}


class Robot 
{

  constructor (nom, vie, vmax, positionX=0, positionY=0)
{
this.nom = nom;
this.vie = 100;
this.vmax = 3;
this.positionX;
this.positionY;
}

 sePresenter (nom, vie, vmax, positionX,positionY)
{
console.log("Bonjour, je m’appelle "+nom+". J’ai "+this.vie+" points de vie. Je me déplace à "+this.vmax+" cases par seconde. Je suis à la case de coordonnées ("+this.positionX+";"+this.positionY+")");
}

seDeplacer (nom, vmaxD, vmaxG, vmaxH, vmaxB)
{	
	if(vmaxD<=this.vmax && vmaxG<=this.vmax && vmaxH<=this.vmax && vmaxB<=this.vmax)
{
this.positionX += vmaxD;
this.positionX -= vmaxG;
this.positionY += vmaxH;
this.positionY -= vmaxB;
console.log("Nouvelle position: ("+this.positionX+";"+this.positionY+")");
}
else {console.log("vmax atteint");}
}

seDeplacerAletoirement (nom, d, g, h, b)
{
	function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
		
		var d = this.vmaxD;
		var g = this.vmaxG;
		var h = this.vmaxH; 
		var b = this.vmaxB;
		d = getRandomInt(3);
		g = getRandomInt(3);
		h = getRandomInt(3);
		b = getRandomInt(3);
		this.positionX += d;
		this.positionX -= g;
		this.positionY += h;
		this.positionY -= b;
		
		console.log("je me suis déplacé alétoirement");

	}
constructorSuper(nom, vie, vmax, positionX, positionY)
{
var Name = new Robot(nom);
this.nom = nom;
this.vie = vie;
this.vmax = vmax;
this.positionX = positionX;
this.positionY = positionX;
console.log("le robot " +nom+ " a été créé aux coordonnées ("+positionX+";"+positionY+")")
}

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function main(Name, nom, vmaxD, vmaxG, vmaxH, vmaxB)
{
Name = new Robot(nom);
Name.constructorSuper("t800", 500, 10, 2, 3);
Name.sePresenter(nom);
Name.seDeplacerAletoirement(nom, vmaxD, vmaxG, vmaxH, vmaxB);
Name.sePresenter(nom);

}

nomRobots = ['terminator','robocop','r2d2','goldorak'];
for(var i=0; i <= nomRobots.length -1; i++){

main(nomRobots[i], nomRobots[i]);}


main("robocop");

*/