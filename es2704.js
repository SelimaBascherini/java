/*Dato un array ordinato di interi tutti diversi, e un numero target, ritornare l'indice al 
quale il target e' trovato. 
Se non viene trovato ritornare l'indice al quale andrebbe inserito per mantenere l'ordine
es: nums = [1,3,5,6], target = 5
2
nums = [1,3,5,6], target = 2
1 */

// creo un array di numeri interi e un numero target 
//creo una funzione e ci passo l'array e il target 
//faccio un for in cui ciclo l'array
//faccio un if in cui gli dico se nell'array trovi il numero target 
//allora mi stampi il suo indice 
//se invece il numero target è maggiore di array[i] e minore di array[i+1]
//stampa l'indice in cui andrebbe inserito 

let array = [2,4,7,8], target = 4

function foundNumber(arr, n){
    for(let i= 0; i < array.length; i++ ){
        if (array[i] == target){
            return i
        } else if(target > array[i] && target < array[i+1]){
            return i + 1
        }
    } 
} console.log(foundNumber(array, target))

//-----------------------------------------------------------------

