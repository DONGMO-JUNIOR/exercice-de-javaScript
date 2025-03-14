    function delate_the_same()
    {
     let chaine = document.getElementById("delate").value;
     if(chaine.length==="")
     {
     document.getElementById("envoyer").textContent="Entrer votre mot";
     return;
     }
     if(chaine.length===1)
     {
        document.getElementById("envoyer").textContent ="votre mot est:"+ chaine ;
        return;
     }
     let result = "";
     for (let i = 0; i < chaine.length; i++) {
        if (result.indexOf(chaine[i]) === -1) {
            result = result + chaine[i];
        }
    }

    document.getElementById("envoyer").textContent= "votre mot est:" + result ;

    }