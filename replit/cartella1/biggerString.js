// scrivere una funzione chiamata biggerString che 
// date due stringhe in ingresso
// ritorni la piu' lunga

//pseudocodice 
//assegnare string1 e string2 in un array
//passare le due stringhe all'interno di una funzione biggerString
//fare un ciclo for che mi cicli le due stringhe
//fare un if
//ritornare la stringa più lunga 

let arr= ["Marco è al mare", "Ciao Luca!"]; 


function biggerString (arr1){
    let bigger = ''

    for(let i = 0; i <= arr1.length; i++){

    if(arr1[0].length > arr1[1].length){
        bigger = arr1[0] 
    } else {
        bigger = arr1[1]
    } 

} 
return bigger
}
console.log('La stringa più lunga è:' + biggerString(arr) )
 
//--------------------------------------------

function grandeStringa(stringa1, stringa2){
    if(stringa1.length > stringa2.length){
        return stringa1
    } return stringa2
}
console.log(grandeStringa('djhfjasjdksakd', 'marco'))
