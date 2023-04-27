// scrivere una funzione chiamata between che 
// dati due numeri a e b in ingresso
// ritorni un array che contiene tutti i numeri compresi tra a e b, estremi esclusi

//pseudocodice
//scrivo una funzione between in cui passo  due numeri a, b 
//creare arr = []i 
// creo un for che parte da i = a + 1 e finisce a i < b e continua i++
// se il for viene rispettato entro nel for e, ogni numero che lo rispetta, lo metto nell'array
// ritorno l'array

function between(a, b){
    arr = []
    for (let i = a +1; i < b; i++){
        arr.push(i)
    }
    return arr
}
console.log(between(3,9))