/*
  Ex 1

  dato l'array chiamato 'a1' con valori 
  [10, 'ciao', true, 20, 'js', 4] usare un foreach 
  per calcolare la somma degli elementi numerici e stamparla in output
*/

const a1 = [10, 'ciao', 'true', 20, 'js', 4];
let somma = 0; 

a1.forEach(function(elementi){
    if (typeof elementi == 'number'){
        somma += elementi;
    }
});
console.log(`La somma è ${somma}`);

//OPPURE ----------------------

// itero con un ciclo for
      const ai = [10, "ciao", true, 20, "js", 4];
      function calc(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] == "number") {
            sum += arr[i];
          }
        }
        return sum;
      }
      console.log(calc(ai));
      console.log("-----------------");

      // ora con il for.each
      let sium = 0;
      ai.forEach(function (n) {
        if (typeof n == "number") {
          sium = sium + n;
        }
      });

      console.log(`la somma è ${sium}`);

/*Ex 2

creare una mappa chiamata m1, che rappresenta un'automobile, con la seguente struttura: 
model -> 'Panda', maxSpeed: 250, price: 1000

creare una mappa chiamata m2, che rappresenta un'automobile, con la seguente struttura: 
model -> 'Audi', maxSpeed: 200, price: 5000

tramite due foreach, stampare le singole caratteristiche delle due automobile.
DOPO, stampare in output il modello della macchina con la velocità massima più elevata

*/

//1. creo la mappa m1 con caratteristiche indicate 
//2. credo la mappa m2 con le caratteristiche indicate
//3. faccio il primo forEach
//4. faccio il secondo forEach
//5. confronto le velocità massime delle tue auto e stampo il modello di quella più veloce

const m1 = newMap([
    ['model', 'panda'],
    ['maxSpeed', 250],
    ['price', 100]

])
const m2 = newMap([
    ['model', 'Audi'],
    ['maxSpeed', 200],
    ['price', 5000]
])
m1.forEach(function(value, key){
    console.log(`${key}: ${value}`);
})
m2.forEach(function(value, key){
    console.log(`${key}: ${value}`);
})
const maxSpeedM1 = m1.get('maxSpeed')
const maxSpeedM2 = m2.get('maxSpeed')

if (maxSpeedM1 > maxSpeedM2){
    console.log('la macchina più veloce è' + m1.get('model'))
} else {
    console.log('la macchina più veloce è' + m2.get('model'))
}
