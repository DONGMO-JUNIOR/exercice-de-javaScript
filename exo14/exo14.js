function verif_chaine()
{
    let chaine = document.getElementById("chaine").value ;
    let message = document.getElementById("resultat") ;
    if((chaine === "") || (!isNaN(chaine)))
    {
        message.textContent="Veuillez entrer une chaine valide" ;
        return;
    }
     
    if( chaine === chaine.toLowerCase())
    {
        message.textContent= "votre chaine est en miniscule";
        return ;
    }
    else
    {
        message.textContent = "votre chaine n'est pas en minuscule"
    }
    //if( chaine === chaine.toUpperCase())
    //{
       // message.textContent = " votre chaine est en majuscule" ;
       // return ;
    //}
    
}