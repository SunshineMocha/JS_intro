/* 29 Marzo

    CONCETTI FONDAMENTALI:
    1) Le Higher Order Functions sono strane
    2) La reduce è la più strana in assoluto (la più potente che gli array ci mette a disposizione)
    3) Esistono molti linguaggi di programmazione che ne fanno traquillamente a meno
    4) Esistono  molti programmatori che ne fanno tranquillamente a meno (anche programmatori molto bravi)
    5) Ogni volta che qualcuno dei ragazzi che lavora con me deve scrivere una reduce non banale mi chiama per conforto ~ Andrea
    6) Purtroppo dovete imparare almeno a leggerle

    Le Higher Order Functions sono funzioni che possono avere sia in input, che in output (o entrambi) una funzione
    Esempio Map: linea 16

*/

/* console.log([3, 5, 12, 1].map((numero) => numero * 2)); */ // Prende in entrata un array, lo scorre e genera automaticamente un nuovo array con gli stessi elementi e lo moltiplica per due.

// Scrivere (non map, filter, reduce) una funzione che prenda in input una funzione che faccia qualcosa. 

function loopNumbersFrom1To15AndApplyAFunction(myFunction, mySecondFunction)
{
    for (let i = 1; i < 16; i++) {
        const resultOfMyFunction = myFunction(i); // Assegnamo una variabile che avrà come valore il risultato della funzione (dove passiamo il valore ciclato della i come parametro)
        mySecondFunction(resultOfMyFunction)
    }
}

function divideBy2IfEven(myNumber) {
    if (myNumber % 2 === 0) {
        return myNumber / 2;
    }
    else
    {
        return myNumber;
    }
}

function logIfGreaterThan4(myNumber){
    if (myNumber > 4) {
        console.log(myNumber);
    }
}

// loopNumbersFrom1To15AndApplyAFunction(divideBy2IfEven, logIfGreaterThan4); // Svolge la funzione normalmente
// loopNumbersFrom1To15AndApplyAFunction(logIfGreaterThan4, divideBy2IfEven); // Entra nella seconda funzione, logga da 5 a 15, ma non ritornando nulla non mi va avanti

function createMultiplicator(myNumber) {
     function multiply(selectedNumber) {
        return selectedNumber * myNumber;
     }
     return multiply;
}

/*

function createMultiplicator(myNumber) {
    return (selectedNumber) => selectedNumber * myNumber;
}

const createMultiplicator = (myNumber) => (selectedNumber) => selectedNumber * myNumber;

*/

/*

function multiply(selectedNumber) {
    return selectedNumber * 2 ---------------|
 }                                           |
                                             |
 function multiply(selectedNumber) {         |
    return selectedNumber * 3; --------------|
 }                                           |
                                             |
                                             |
                                             V */
const multiplicatorBy2 = createMultiplicator(2);
const multiplicatorBy3 = createMultiplicator(3);

/* 

console.log(multiplicatorBy2(5)); // 10
console.log(multiplicatorBy3(4)); // 12
console.log(createMultiplicator(5)(4)); // 20 myNumber = 5. Mi fa multiply di 5, createMultiplicator mi diventa multiply(4) con 5, a cui viene passato 4

*/

function applyTwice(myFunction){
    return (input) => myFunction(myFunction(input));
    // (input) = (ADD1(ADD1(input)) -> ADD1(ADD1(5)) -> ADD1(6)
}
function add1(selectedNumber){
    return selectedNumber + 1;
    // 5 + 1 - > 6 + 1
}

const add2 = applyTwice(add1);
const add4 = applyTwice(add2);

console.log(add2(5)) // 7
console.log(add4(10)); //14 -> 10 + (add2(10) -> 10 + 2 + 2) 

console.log(applyTwice(applyTwice(add1))(10)); // add 1 2 volte, ripetilo 2 volte, 4+10 = 14
                    // (numb) = add2(add2(10))                
                    // (numb) = add2(add1(add1(10)))
                    // (numb) = add1(add1(add1(add1(10))))


let arrayOfNumbers = [3, 5, 15, 8]

/*console.log(arrayOfNumbers.map(n=> {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    } else if(n % 3 === 0) {
        return 'Fizz';
    } else if(n % 5 === 0) {
        return 'Buzz';
    } else{
        return ''+n;
    }
}));*/

console.log(arrayOfNumbers.map( n => n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : ''+ n));


/*
stringa.includes('z');
stringa.indexOf('z'); !== -1 in condizione se voglio stampare solo i positivi (indexOf restituisce sempre -1 quando falsa)
*/

/*

const numbers3 = [-3, -4, -3];
function maxElement(array){
    let tempArray = array[0];
    for (let i = 0; i < array.length; i++){
        const element = array[i];
        if(tempArray < element){
            tempArray = element;
        }
    }
    return tempArray;
}
console.log(maxElement(numbers3));
*/

// TUTTI I MODI PER CICLARE UN ARRAY / TUTTI I CICLI IN JAVASCRIPT

// WHILE
const numbers = [9, 8, 7, 1, 2, 3];
let i = 0;
while (i < numbers.length) {
    const element = numbers[i];
    console.log(element);
    i++;
}

// FOR
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}

// DOWHILE
let j = 0;
do {
    const element = numbers[j];
    console.log(element);
    j++;
} while (j < numbers.length);

// FOROF
for (const element of numbers) {
    console.log(element);
}

// FOREACH
numbers.forEach((element) => console.log(element));

//MAP
numbers.map((element) => element *2); // moltiplica tutti per 2

//FILTER
numbers.filter((element) => element % 2 === 0); // restituisce tutti elementi pari

//REDUCE
numbers.reduce((previousElement, currentElement) => previousElement + currentElement, ''); // Somma tutti gli elementi

//FORIN - per ciclare gli oggetti

const mocha = {
    name: 'Chiara',
    surname: 'Badile',
    hasADog: true,
    yob: 1993,
    nickname: 'SunshineMocha',
}

for (const key in mocha) {
    if (Object.hasOwnProperty.call(mocha, key)) {
        const value = mocha[key];
        console.log(`Chiara ha la proprietà ${value} associata al valore ${key}`)
    }
}

