/*
Ex 1

creare una funzione getStr che prende in ingresso un array di stringhe e restituisce il valore della stringa alla posizione 2

chiamare la funzione getStr con un array di 5 stringhe a piacere e stampare il valore prodotto.
Per chi riesce: stampare il valore prodotto in upper case
*/
let arr = ['ciao', 'pane', 'casa', 'Sara', 'divano'];

function getStr (a){
   return a[2]
    
} 
console.log(getStr(arr))

/*
Ex 2

Creare una funzione makeObj che prende in ingresso due parametri:
una stringa e un numero.
La funzione crea e RESTITUISCE un oggetto con due proprietà: label, che avrà come
 valore il valore passato come primo parametro, e rate, che avrà come valore il valore passato come secondo parametro.
Chiamare la funzione makeObj due volte con valori a piacere per creare e stampare in output due oggetti con i valori indicati.
*/

function makeObj(labelVal, rateVal){
    let obj = {
        label:{labelVal},
        rate:{rateVal}
    }

 return obj
}
console.log(makeObj('pizza', 'margherita'))
console.log(makeObj('spaghetti', 'pomodoro'))

// ex 3
/*
  1 - creo la funzione che prende un array
  2 - trovo il numero piu piccolo
  3 - trovo il numero più grande
  4 - metto questi due numeri in un array e lo restituisco
  5 - chiamo la funzione con un array di 6 numeri e ottengo l'array di 2 numeri
  6 - stampo il messaggio
*/

function getMinMaxAsArray( a ) {
    // se non è un array e la sua lunghezza è diversa da 6, restituisco undefined
    if( !Array.isArray( a ) && a.length != 6 ) {
      return
    }
  
    // trova il minimo e il massimo
    let min = a[0], max = a[0]
    for(let i = 1; i < a.length; i++) {
       if( a[i] < min )
         min = a[i]
  
       if( a[i] > max )
         max = a[i]
    }
  
    // step 4
    return [min, max]
  }
  
  // step 5
  const numbers = [17, 5, 87, 100, 14,-10]
  const minMax = getMinMaxAsArray( numbers )
  // step 6
  console.log( il numero piu piccolo è: ${minMax[0]} e il numero piu grande è: ${minMax[1]} )