
function extractValues() {
    let valeur = document.getElementById("valeure").value.split(',');
    let index = document.getElementById("indexe").value.split(',');
    let array = valeur.map(item => item.trim());
    let indexes = index.map(item => parseInt(item.trim()));
    
    const pull = (arr, ...args) => {
        let pulled = args.map(index => arr[index]);
        return pulled;
    };
    
    let extractedValues = pull(array, ...indexes); 
    document.getElementById("result").textContent = `Valeurs extraites : ${extractedValues.join(', ')}`;
}
