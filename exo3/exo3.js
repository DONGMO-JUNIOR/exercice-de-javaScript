
        function multiplier() {
            let a = parseFloat(document.getElementById("num1").value);
            let b = parseFloat(document.getElementById("num2").value);
            document.getElementById("resultat").textContent = "Résultat: " + (a * b);
        }

        function diviser() {
            let a = parseFloat(document.getElementById("num1").value);
            let b = parseFloat(document.getElementById("num2").value);
            if (b === 0) {
                document.getElementById("resultat").textContent = "Impossible de diviser par zéro.";
            } else {
                document.getElementById("resultat").textContent = "Résultat: " + (a / b);
            }
        }