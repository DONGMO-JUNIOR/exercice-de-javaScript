        function filterArray() {
            let listenum = document.getElementById("arrayInput").value.split(",");
            let listfilter = document.getElementById("filterInput").value.split(",");
            
            let arr = listenum.map(Number);
            let args = listfilter.map(Number);
            
            let argState = Array.isArray(args[0]) ? args[0] : args;
            let pulled = arr.filter(v => !argState.includes(v));
            
            arr.length = 0;
            pulled.forEach(v => arr.push(v));
            
            document.getElementById("result").textContent = "Tableau filtré : " + arr.join(", ");
        }
