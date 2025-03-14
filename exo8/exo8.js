
function comparer() {
    let obj1Texte = document.getElementById("obj1").value.trim();
    let obj2Texte = document.getElementById("obj2").value.trim();
    
    if (obj1Texte === "" || obj2Texte === "") {
        document.getElementById("resultat").textContent = " Veuillez entrer les deux objets.";
        return;
    }
    document.getElementById("resultat").textContent = " l'objet 1 est inclure dans l'objet 2 ";

}
