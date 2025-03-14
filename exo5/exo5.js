function Plusgrandentierpair() {
    let chaine = document.getElementById("nombres").value.split(";");
    if (chaine.length === 0) {
        document.getElementById("resultat").textContent = "Veuillez entrer des nombres séparés par une virgule.";
        return;
    }
    let nombres = chaine.map(num => parseInt(num.trim())).filter(num => !isNaN(num));
   
    let plusGrandPair = nombres.filter(num => num % 2 === 0).sort((a, b) => b - a)[0];
    if (plusGrandPair !== undefined) {
        document.getElementById("resultat").textContent = "Le plus grand nombre pair est : " + plusGrandPair;
    } else {
        document.getElementById("resultat").textContent = "Aucun nombre pair trouvé.";
    }
}
 //if (nombres.length === 0) {
    //   document.getElementById("resultat").textContent = "Aucun nombre valide saisi.";
    //  return;
    //}
