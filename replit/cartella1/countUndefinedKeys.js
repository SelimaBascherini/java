// scrivere una funzione chiamata countUndefinedKeys che 
// dato un oggetto come parametro
// ritorni un intero che rappresenti il numero di chiavi, presenti
// nell'oggetto, che hanno valore undefined o null

//creo un oggetto obj 
//creo una funzione countUndefinedKeys e gli passo un obj come parametro 
//trasformo l'oggetto in un array con ObjectKeys 
// creo un contatore
// creo un if e gli dico Se key ha valore undefined o nulla
//incremento contatore di 1

const falsey= [
    {
        1 : null,
        2 : 2,
        3 : 0, 
        4 : undefined
    }
]
function countUndefinedKeys (obj){
    let count = 0
    Object.keys(obj).forEach(function(k){
        if (obj[k] == null || obj[k] == undefined){
            count = count + 1 
        }
    }); return count
} console.log (countUndefinedKeys(falsey)) 