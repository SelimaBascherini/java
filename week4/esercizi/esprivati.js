/*Scrivere una funzione che prende in ingresso un array di numeri 
ed un numero n, la funzione ritorna un nuovo array con tutti i numeri i quali sommato o sottratto 1 danno n*/

let arr = [6, 8, 4, 9, 20]
let n = 5

function calcoli(arr, n){
    let newArr = []
    for (i = 0; i < arr.length; i++){
        if (arr[i] + 1 === n || arr[i] - 1 === n ){
            newArr.push(i)
           
        }
        
    } 
    return newArr
} 

/*Scrivere una funzione che dato in ingresso un numero, ritorni il fattoriale di quel numero.*/
// Il fattoriale di un numero si trova moltiplicando tutti i numeri naturali che lo precedono (escluso lo zero), con esso incluso.
// Ad esempio, il "4!" darà come risultato "4 x 3 x 2 x 1 = 24" ed il "9!" è uguale a "9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 362.880".

n = 5


  function factorial (x){
    let result = 1
    for (let i = 1; i <= x; i++){

    }

  }
 
let n = 42
function print(n) {
  console.log(n)
}
print(10)


// create two pointers, LEFT and RIGHT
// given LEN as length of the string
// given MIDDLE as LEN / 2
// if the string is even
//   LEFT starts at MIDDLE - 1, RIGHT starts at MIDDLE
// else 
//   LEFT and RIGHT start at Math.floor(MIDDLE)
// while LEFT >= 0 and RIGHT < LEN
//   given LINE as the accumulation of 2 * LEFT spaces
//   accumulate in LINE the characters in the string between LEFT and RIGHT
//   LEFT--
//   RIGHT++
//   print LINE
//   LINE = ''


function x(string) {
let left 
let right 
let LEN = string.length
let MIDDLE = LEN/2

}

let arr = []
for (let i = arr.length -1 ; i >= 0; i= i-2 )
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}