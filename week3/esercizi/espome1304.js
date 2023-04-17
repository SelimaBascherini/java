//scrivere una funzione che prende in ingresso una stringa e ritorna il numero
// di occorrenza di ogni singolo carattere della stringa.

//1. creo una stringa qualsiasi
//2. creo una funzione che prende una stringa
//3. creo una mappa
//4. creo un ciclo della lunghezza della stringa
//5. nel ciclo creo un if (verifico se la string[i]== se la mappa ha quella key)
//6. se sì incremento il valore della chiave che viene trovata
//7. altrimenti metto come chiave il carattere attuale come valore 1 
//8. la funzione deve restituire la mappa

console.log(count('abaco'));

function count(stringa){
    const mappa  = new Map ();
    for (let i = 0; i < stringa.length; i++){
        if (mappa.has(stringa[i])){
        mappa.set(stringa[i], mappa.get(stringa[i]) + 1)
    } else {
        mappa.set(stringa[i], 1)
    }
    return mappa
}
}