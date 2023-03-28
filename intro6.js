// // 28 Marzo

// // Funzioni di ordine superiore

// let a = 5;
// let b = 'ciao';

// function square(num) {
//     return num*num;
// }
// console.log(square(a));

// console.log(' ');

// // anche le funzioni sono valori. Anche una variabile può cxontenere una funzione, vedi lambda

// let f = function(n){ // funzione anonima in intro4
//     return n*n;
// }

// console.log("F: " + f(5));

// // quando si parla di funzioni di ordine superiore si parla di funzioni che ricevono come parametro di ingresso altre funzioni o possono fare un'altra cosa: 
// // creare altre funzioni. 

// // Ripetere un'operazione un certo numeri di volte

// console.log(' ');

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(' ');
// // Applicare l'astrazione (nascondere) con funzioni

// function logNumbersFrom0To9() {     // modo astratto di funzione
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }

// logNumbersFrom0To9(); // astraggo i dettagli dell'algoritmo all'interno di una funzione. Astrazione serve per rendere un codice più leggibile e facile da debuggare (nonchè riutilizzabile)

// console.log(' ');

// function logNumbersFrom0To(maxNum) {      // Adatto il codice per prendere un valore in entrata e renderlo adattabile
//     for (let i = 0; i < maxNum; i++) {
//         console.log(i);
//     }
// }

// logNumbersFrom0To(5);

// console.log(' ');

// function doubleNumbersFrom0To(maxNum) {      // Ho adattato la funzione per farmi il doppio, ma ho copiato nuovamente una funzione già esistente
//     for (let i = 0; i < maxNum; i++) {
//         console.log(i*2);
//     }
// }

// doubleNumbersFrom0To(5);

// console.log(' ');

// function logNumber(n){
//     console.log(n);
// }

// function logDouble(n){
//     console.log(n*2);
// }

// function logHello(n){
//     console.log("hello");
// }

// function repeatFrom0To(maxNum, func){ //Uso una funzione come parametro
//     for (let i = 0; i < maxNum; i++) {
//         func(i); // che operazione è func? Dipende
//         // func <- logNumber
//         // func <- logDouble
//     }
// }

// repeatFrom0To(10, logNumber);

// repeatFrom0To(10, logDouble);

// repeatFrom0To(10, logHello); 


// ESERCIZIO
// basandoci sulla funzione repeatFrom0To, richiamarla in modo che stampi per ogni numero (i) se i è divisibile per 3 e restituire true (o false)

// function isMultipleOf3(test){
//     if (test % 3 === 0){
//         console.log(test + ": " + true);
//     }
//     else{
//         console.log(test + ": " + false);
//     }
// }

// function repeatFrom0To(maxNum, func){ //Uso una funzione come parametro
//     for (let i = 0; i < maxNum; i++) {
//         func(i);
//     }
// }

// repeatFrom0To(15, isMultipleOf3);

// // Chiamo la funzione. La funzione ha parametri 15 E FUNZIONE ISMULTIPLEOF3
// // ENTRO IN REPEATFROM0TO con 15, ciclo tutti i numeri e chiamo la funzione, in questo caso ISMULTIPLEOF3
// // ISMULTIPLEOF3 passa in test il valore al momento del ciclo, ne verifica se è divisibile e stampa true o false. 
// // Torna nella prima funzione e passa al numero successivo sino a fine ciclo

// repeatFrom0To(15, function(n){ // funzione anonima dentro parametri.
//     console.log(n%3 === 0);
// })

// setInterval(function(){console.log('Test')} ,1000) // esegue una istruzione ogni x millisecondi

/* let x = 10;

function printX(){
    console.log(x)
}
printX(); */

// CLOSURE E FUNZIONI CHE RESTITUISCONO ALTRE FUNZIONI

let counter = 0;

function printAndIncrementCounter() {      // Closure, racchiude al suo interno qualcosa trovato da fuori
    console.log(counter);
    counter++
}

printAndIncrementCounter();
printAndIncrementCounter();
printAndIncrementCounter();

// FUNZIONJI CHE RITORNANO ALTRE FUNZIONI

function getRangeCheckFunction(min, max) {
    return function(n){
        return n >= min && n <= max;
    }
}

let isInRange = getRangeCheckFunction(0,5)
console.log(isInRange(7));
console.log(isInRange(1));
console.log(isInRange(-8));

let isInAnotherRange = getRangeCheckFunction(10,20) // posso chiamare un'altra funzione che usa la stessa funzione già usata
console.log(isInAnotherRange(7));
console.log(isInAnotherRange(1));
console.log(isInAnotherRange(-8));

function getAnotherRangeCheckFunction(n, min, max) {
        return n >= min && n <= max;
}

console.log(getAnotherRangeCheckFunction(7, 0, 5));
console.log(getAnotherRangeCheckFunction(1, 0, 5));
console.log(getAnotherRangeCheckFunction(-8, 0, 5));


// entra nella funzione con 0 e 5, i valori che abbiamo passato

// ritorna la funzione che restituisce un'altra funzione

// Si prende il numero dalla globale e lo confronta nella funzione interna alla funzione