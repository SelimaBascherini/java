// scrivere una funzione chiamata countNoSpaces che 
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi

//creo funzione countNoSpaces che prende una stringa
//creo un contatore n  = 0 
//creo un for che parte dalla prima lettera della stringa e finisce all'ultima lettera 
//creo un if che mi dice ogni volta che incontro qualcosa che è diverso da uno spazio
// incremento contatore di 1 
//ritornare il contatore

function countNoSpaces (string){
    let count = 0
    for(let i= 0; i < string.length; i++){
        if (string.charAt(i) != " "){
            count = count + 1
        }
    }
    return count
}
console.log(countNoSpaces('Ciao sono una stringa'))