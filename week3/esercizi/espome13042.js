// scrivere una funzione che data in ingresso una stringa rimuove tutti i caratteri duplicati

//1. creo una stringa 
//2. creo la funzione che prende la stringa 
//2.1 creo una stringa risultato 
//3. creo un ciclo che scorre da sx a dx
//4. con in index of capire se il carattere è contenuto dentro il risultato (index of ritorna -1 se il carattere non è presente)
//5. se non c'è concateno il risultato con il carattere 
//6. ritorno il risultato



let stringa = 'ramarro'
function count(newString) {
    return new Set(newString)
}
console.log(count(stringa))

//----------------------------------------------------------------------

let arr=["Hello 1 "," Hello 2 ","Hello 1 " , " Hello 2 ","Hello 1 again"]

const filteredArray = arr.filter(function(ele , pos){
    return arr.indexOf(ele) == pos;
}) 

console.log("L'array filtrato è: ",filteredArray);