function calcul()
{   
    let hauteur =parseInt(document.getElementById("haut").value);
    let rayon= parseInt(document.getElementById("ray").value);
    let message = document.getElementById("resultat");
        if((isNaN(hauteur))|| isNaN(rayon) ||(hauteur<=0) ||(rayon<=0))
        {
           message.textContent="veuillez entrer un rayon ou une hauteur valide";
           return;
        }
        if(hauteur< rayon)
        {
            message.textContent=" veuillez entre une hauteur valide et superieure a celle du rayon"
        }
         else
         {
            let volume = volume + Math.PI*Math.pow(rayon,2)*hauteur;
            message.textContent= `votre volume est : ${volume}` ;

         }
}