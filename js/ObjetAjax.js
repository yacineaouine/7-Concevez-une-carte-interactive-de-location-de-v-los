
//création d'un objet appel AJAX;
class ajaxCall
{
	constructor(url, type, callback, data,  isJson)
	{
    


			//paramètre
			this.url=url;
			this.type=type;
      this.callback=callback;
      this.data=data;
      this.isJson=isJson;

			//création de la requête
			var req = new XMLHttpRequest();
		    req.open(type, url);

        if(type === "GET")
        {
          req.addEventListener("load", function () {

        if (req.status >= 200 && req.status < 400) {

            // Appelle la fonction callback en lui passant la réponse de la requête

            callback(req.responseText);

        } else {

            console.error(req.status + " " + req.statusText + " " + url);

        }

    });

    req.addEventListener("error", function () {

        console.error("Erreur réseau avec l'URL " + url);

    });
        }
		    else if (type === "POST")
        {
          callback = alert('envoyé');
        }
		    //envoi de la requete
		    if (type==="POST")
		    {
          if (isJson) {
                        console.log(data);
                        // Définit le contenu de la requête comme étant du JSON
                        req.setRequestHeader("Content-Type", "application/json");
                        // Transforme la donnée du format JSON vers le format texte avant l'envoi
                        data = JSON.stringify(data);
                      }

		    	req.send(data);
          
		    }
		      else if(type==="GET") {
		                              req.send(null);
			                           };
	}

}











