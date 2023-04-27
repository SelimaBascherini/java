/*- Find and replace
Scrivere una funzione che riceva in ingresso tre stringhe:
● la prima sara’ un testo
● la seconda sara’ una parola che andra’ cercata nel testo
● la terza sara’ la parola da sostituire al posto della seconda
La funzione deve quindi produrrei lo stesso effetto che si ottiene quando si fa find and
replace di una parola in un testo.
Si assuma che:
● la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi
non ci saranno spazi
● sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi
l’algoritmo
● la seconda e la terza parola non necessariamente devono avere lo stesso numero di
caratteri
Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array.
La funzione deve ritornare la nuova stringa aggiornata.*/


//pseudocodice 
//1. scrivere una funzione findReplace che prende in ingresso 3 stringhe
//creare quindi un array di 3 stringhe da passare nella funzione
//2. la prima stringa sarà " Marco è dal dottore"
//3. la seconda sarà "dottore"
//4. la terza sarà "calzolaio" da sostituire a "dottore"
//5. per sostituire la terza parola alla seconda fare un ciclo for che cicli l'array 
//cancellare l'ultima parola della frase
//console.log del nuovo array senza l'ultima parola + la parola calzolaio
//creare una variabile vuota chiamata newWord e affidare la parola "calzolaio"
//6. creare l'if che mi dice SE la parola ciclata è "dottore" console.log della stringa + newWord senza spazi 

let arr = ['Marco è dal dottore', 'dottore', "calzolaio"];

function findReplace (arr){
    let newString = []
    for (i = 0; i <= arr.length; i++){
       if (arr[0]){
        newString = arr[0]
        
       } 
    } 
} 

/*2. Scrivere una funzione che, dato in ingresso un array di oggetti così strutturato:
sia in grado di attribuire un valore di default dove sia presente un null, seguendo queste
regole:
● se il type e’ “boolean” deve aggiornare usando false
● se il type e’ “string” deve aggiornare usando stringa vuota
● se il type e’ “number” deve aggiornare usando 0
● se il type e’ “array” deve aggiornare usando array vuoto
● se il type e’ “object” deve aggiornare usando oggetto vuoto
Come vedete ogni singolo oggetto ha sempre due attributi, uno la cui chiave non e’ dato a
sapere a priori, un altro la cui chiave e’ sempre “type” e il valore e’ nella lista qui sopra.
La funzione deve ritornare lo stesso oggetto ricevuto in input, con i valori aggiornati*/

let obj = [
    {
       maggiorenne: null,
       type: Boolean
    }, 
    {
        nome: null, 
        type: string
    },
    {
        cognome: Rossi, 
        type: string
    }

] 

function value (obj){
    if (Object.keys(obj{1}) == Boolean){
        return false 
    } else if (Object.keys) == string){
            return ['']
    } else if (Object.keys(obj{1}) == number){
        return 0
    } else if 

}