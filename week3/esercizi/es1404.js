//Realizzare l'apposita strategia per stampare la stringa 'Riccardo' invertita in output.

let string = 'Riccardo'
let result = ''
for(let i = string.length -1; i>= 0; i--){
    result = result + string.charAt(i)
} console.log (result)  

//data la stringa 'Riccardo' realizzare l'apposita strategia per stampare in output
// l'ultimo carattere maiuscolo concatenato a un underscore e al primo carattere minuscolo: O_r

//1. creo la stringa
//2. andare a stampare solo l'ultima lettera uppercase + _ + prima lettera

let nome = 'Riccardo'
let firstLast = nome.charAt((nome.length)-1).toUpperCase()+ '_'+ nome.charAt(0).toLowerCase()
console.log(firstLast)

//creare l'apposita strategia per rappresentare, tramite oggetto, uno studente. Lo studente avrà:
//idMatricola: 14
//nomeCompleto: Luigi Verdi
//voti: 6, 7, 7
//Stampare in output la stringa tramite apposito algoritmo:
//il terzo voto dello studente con id 14 (Luigi Verdi) è 7

let x = {
    idMatricola: 14,
    nomeCompleto: 'Luigi Verdi',
    voti: [6, 7, 7]
} 
console.log('il terzo voto dello studente con id'+ x.idMatricola + x.nomeCompleto + 'è'+ x.voti[2])