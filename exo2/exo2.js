
        function calculer() {
            let jour = parseInt(document.getElementById("jour").value);
            let mois = parseInt(document.getElementById("mois").value) - 1; // Les mois en JS commencent à 0
            let annee = parseInt(document.getElementById("annee").value);

            if (isNaN(jour) || isNaN(mois) || isNaN(annee) || jour < 1 || jour > 31 || mois < 0 || mois > 11 || annee < 2000) {
                document.getElementById("resultat").textContent = "Veuillez entrer une date valide.";
                return;
            }

            let dateEntree = new Date(annee, mois, jour);
            let noel = new Date(annee, 11, 25); //ici on retourne le 25 décembre de l'année entrée

            if (dateEntree > noel) {
                noel.setFullYear(annee + 1); // Passer à Noël de l'année suivante si la date entrée est après Noël
            }

            let diff = noel - dateEntree;
            let joursRestants = Math.ceil(diff / (1000 * 60 * 60 * 24));

            document.getElementById("resultat").textContent = "Il reste " + joursRestants + " jours jusqu'à Noël.";
        }
