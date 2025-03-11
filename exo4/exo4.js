function plusLonguechaine() {
    let chaine = document.getElementById("mots").value.split(",");
    if (chaine.length === 0 || (chaine.length === 1 && chaine[0] === "")) {
        document.getElementById("resultat").textContent = "Veuillez entrer des mots séparés par une virgule.";
        return;
    }
    chaine = chaine.map(mot => mot.trim()).filter(mot => mot.length > 0);
    
    let max_str = chaine[0];
    for (let i = 1; i < chaine.length; i++) {
        if (chaine[i].length > max_str.length) {
            max_str = chaine[i];
        }
    }
    document.getElementById("resultat").textContent = "La plus longue chaîne est : " + max_str;
}
