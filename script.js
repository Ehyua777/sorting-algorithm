function arrayCreater() {
    // Demander à l'utilisateur de saisir des données jusqu'à ce qu'il entre "fin"
    let array = [];
    let values = 0;
    do {
        values = prompt("Entrez plusieurs nombres au hazard et taper fin quand vous aurez fini :");
        if (values !== "fin" && values !== null) {
            array.push(values);
        }
    } while (values !== "fin" && values !== null);
    return array
}

function triParSelection(tableau) {
    for (let i = 0; i < tableau.length - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < tableau.length; j++) {
            if (tableau[j] < tableau[indexMin]) {
                indexMin = j;
            }
        }
        [tableau[i], tableau[indexMin]] = [tableau[indexMin], tableau[i]];
    }
    return tableau;
}

function arrayDisplay(arr, id) {
    let tableBody = document.querySelector(`${id} tbody`);

    // Parcourir le tableau JavaScript et ajouter les lignes au tableau HTML
    for (let i = 0; i < arr.length; i++) {
        let row = document.createElement('tr');

        let indexCell = document.createElement('td');
        indexCell.textContent = i;
        row.appendChild(indexCell);

        let valueCell = document.createElement('td');
        valueCell.textContent = arr[i];
        row.appendChild(valueCell);

        tableBody.appendChild(row);
    }
}

// Exemple d'utilisation
//let exemple = [5, 2, 9, 1, 7];
var array1 = arrayCreater()

arrayDisplay(array1, '#myTable1')
//apel de la fonction tri par selection
//afffichage duy résulta du tri dans la console
//console.log(triParSelection(arr));
var sortedArray = triParSelection(array1.slice())
arrayDisplay(sortedArray, '#myTable2')



