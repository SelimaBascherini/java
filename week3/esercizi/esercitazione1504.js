//PSEUDOCODICE-------------------
//scrivere una stringa
//scrivere una funzione di nome inverti
//scrivo un for che parte dall'ultimo carattere e si avvicina al primo
//ad ogni ciclo inserisce la corrente letterra del ciclo in una nuova stringa


function inverti(a) {
    let b = ''
    for (let i=a.length-1; i>=0; i--) {
    b += a[i] 
    }
    return b
}

function palindroma(a) {
    return a == inverti(a)
}


console.log(palindroma('esse'))

//scrivere una funzione che dato in ingresso un array di interi 
//e un numero ritorni gli indici dei due numeri
// la cui somma fa quel numero 

//1. scrivere una funzione che ha in ingresso due parametri (x, y)
//2. creo un ciclo che mi guarda all'interno dell'array
//3. creo una variabile che mi tenga la somma dei due numeri 
//4. quelli che mi danno come risultato il parametro y
//5. ritorna 

function numbers (x, y){
    for(let i = 0; i< array.length; i++){
        a += x[i]
    }
}
x[10, 20, 30, 40, 50]
y = 80