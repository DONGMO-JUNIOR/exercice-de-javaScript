let entierAleatoire = Math.floor(Math.random() * 10) + 1;

function verifier() {
    let nombre = parseInt(document.getElementById("nombre").value);
    let message = document.getElementById("message");
    if (isNaN(nombre) || nombre < 1 || nombre > 10)
         {
        message.textContent = " Veuillez entrer un nombre valide entre 1 et 10.";
       return; }
    if (nombre === entierAleatoire) {
        message.textContent = "Good work!";
    } else {
        message.textContent = "Not matched, try again !";
    }
}
