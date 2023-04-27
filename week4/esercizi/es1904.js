/*
Ex 1

Creare un array che è composto da 3 oggetti, che rappresentano dei rettangoli, e avranno le proprietà base e altezza (numeri).
Crea quindi 3 oggetti che rappresentano 3 rettangoli con le caratteristiche indicate, mettili in un array.
Cicla questo array SIA con un foreach PRIMA che con un for DOPO, per stampare l'area di ogni rettangolo (ad ogni iterazione)
*/

const rettangles = [
    {
        id: 1,
        altezza: 10, 
        base: 20
    },
    {
        id: 2,
        altezza: 15,
        base: 25
    },
    {
        id: 3,
        altezza: 20,
        base: 35
    }
] 

rettangles.forEach(function(rettangle){
    const area = rettangle.base * rettangle.altezza
    
    console.log(area)
})