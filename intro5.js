/* 27 Mar 2023*/

// Altri comandi per array
// const arrayOfStrings = ['a', 'b', 'c', 'd'];
// const indexOfC = arrayOfStrings.indexOf('c'); // cerca l'indice dell'elemento
// console.log(indexOfC); // stampa indice elemento rilevato
// const indexOfZ = arrayOfStrings.indexOf('z');
// console.log(indexOfZ); // se elemento non trovato, risultato = -1
// arrayOfStrings[0]="pietro"; // Mi sostituisce l'elemento nel posto
// console.log(arrayOfStrings);

// OGGETTI

/*
const andrea = {        // per dichiarare un oggetto si usano le graffe
       name: 'Andrea',  // key: value, 
    surname: 'Asioli',
        // YOB: new Date(1978, 2, 2) // I MESI SI CONTANO DA ZERO 
        YOB: 1978,
  isMarried: false,
     pupils: ['valentina','chiara','stefano','jing','davide','davide','vlad','louis','pietro','daniele'],
        dog: {
            name: 'ariel',
            breed: 'border-collie',
        },
  "cool car": "bmw", // per dare il nome con spazi ad un attributo in lista uso virgolette
}; 

console.log(andrea);

console.log(andrea.surname); // STAMPA IL DATO ATTRIBUTO CORRISPONDENTE

console.log(andrea['YOB']); // RICHIAMA L'ATTRIBUTO COME SOPRA MA PER ATTRIBUTI CON SPAZI

console.log(andrea['cool car']); //anche se spesso si usa quello con il punto

// Creare un oggetto per ognuno dei partecipanti al corso, che contenga nome, cognome, data di nascita, nickname e e-mail
// stampare una microscheda ciclando l'array

// GUARDA OBJECTSEXCERCISE.JS

*/ 

/* CONVERSIONE DA OGGETTI AD ARRAY E VICEVERSA*/

/*
const arielloArray = ['ariel', 'border-collie', 'maschio', 'bianco e nero']; // DICHIARAZIONE ARRAY

const arielloObj = {                     // CONVERSIONE DA ARRAY A STRINGA
    name: arielloArray[0],              
    breed: arielloArray[1],
    gender: arielloArray[2],
    colour: arielloArray[3],
};

console.log(arielloArray); // STAMPA ARRAY
console.log(arielloObj); // STAMPA STRINGA

const newArielloArray = Object.values(arielloObj); // CONVERTE DA OGGETTO AD ARRAY PRENDENDO LE VALUES IN OBJECT
console.log(newArielloArray);

const newKeysArray = Object.keys(arielloObj); // CONVERTE DA OGGETTO AD ARRAY PRENDENDO LE KEYS IN OBJECT
console.log(newKeysArray);

*/

/* VALUE TYPES AND REFERENCE TYPES */

// let pippo = 5;  // pippo è 5
// let pluto = pippo; // pluto ha 5 di pippo
// pippo = 7;  // pippo cambia, ma non pluto
// //stampo: 
// console.log(pippo); // 7 
// console.log(pluto); // 5  // QUESTI SONO VALUE TYPE

// let topolino = {yob: 1930, name: 'Micky Mouse'};
// let newTopolino = topolino; // CREA UNA SCATOLA CON LO STESSO CODICE/INDIRIZZO DI TOPOLINO, TUTTI E DUE PUNTANO ALLA STESSA ZONA DI MEMORIA NELL'HEAP
// topolino.yob = 1950;

// console.log(topolino.yob);  //1950
// console.log(newTopolino.yob);  // 1950

// // TUTTI E DUE SONO STESSO VALORE PERCHÈ VIENE PRESO DALL'HEAP IN UNA "SCATOLA VIRTUALE" CON UN INDIRIZZO IN MEMORIA. SE LA MEMORIA CAMBIA PER UNO, CAMBIA ANCHE PER L'ALTRO
// // QUESTI SONO REFERENCE TYPE.

// function sum2(selectedNumber){
//     selectedNumber = selectedNumber + 2;
//     return selectedNumber;
// }

// let paperino = 5;
// let basettoni = sum2(paperino);

// console.log(paperino);
// console.log(basettoni); // VALUE TYPE, NON CAMBIA NEANCHE IN FUNZIONE

// function make2YearsOlder(person) {
//     person.yob = person.yob + 2; 
//     return person;
// }

// let andrea = {name: 'Andrea', yob: 1978};

// let olderAndrea = make2YearsOlder(andrea);

// console.log(andrea);
// console.log(olderAndrea); // TUTTI E DUE RITORNANO 1980 PERCHÈ IN OLDERANDREA C'È L'INDIRIZZO DI ANDREA, PASSATO IN FUNZIONE

// function make2YearsOlderWithClone(person) {  // CREIAMO UN CLONE PER NON TOCCARE L'OGGETTO DA MODIFICARE E USARE QUELLO
//     // let clone = {name: person.name, yob: person.yob};
//     // ESISTE UNA VERSIONE PER FARE UN CLONE PIU VELOCE: 
//     let clone = {...person}; // PRENDE TUTTO CIO CHE C'È DENTRO PERSON E LO METTE IN CLONE
//     clone.yob = clone.yob + 2;
//     return clone;
// }

// let simone = {name: 'simone', yob: 2003};
// let olderSimone = make2YearsOlderWithClone(simone);

// console.log(simone);
// console.log(olderSimone);

// DESTRUTTURARE

// const libro = {
//     titolo: 'La Divina Commedia',
//     autore: 'Dante Alighieri',
//     anno: '2019',
//     paese: 'Italia',
//     casaEditrice: 'Einaudi',
// }

// // const titolo = libro.titolo;
// // const autore = libro.autore; 

// // ALTERNATIVAMENTE, CON DESTRUTTURAZIONE: 

// const {titolo, autore} = libro // UTILIZZA LE KEY PER DARE IL NOME ALLA COSTANTE, RIPETE CIO CHE FANNO LINEE 133/134

// console.log(titolo, autore);



/* JSON Javascript Serialization Object Notation */
/*

const libro = {
    titolo: 'La Divina Commedia',
    autore: 'Dante Alighieri',
    anno: '2019',
    paese: 'Italia',
    casaEditrice: 'Einaudi',
}

const libroInStringa = JSON.stringify(libro); // PRENDE L'OGGETTO LIBRO E LO TRASFORMA IN UNA STRINGA JSON

console.log(libro);
console.log(libroInStringa);

const libroInStringa2 = '{"titolo":"Illiade","autore":"Omero","anno":"2010","paese":"Italia","casaEditrice":"Giunti"}';

const libro2 = JSON.parse(libroInStringa2) // PARSE PRENDE LA STRINGA JSON E LO TRASFORMA IN OGGETTO

console.log(libroInStringa2);
console.log(libro2);

*/


//QUESTI ESERCIZI SONO USATI PER MODIFICARE UN ARRAY CREANDONE UNA COPIA E SENZA TOCCARLI

// FILTER (MODELLO)
// Esempio: Ho un array di partenza, voglio in un array finale tutte le parole che contengono la lettera 'p'
// 1) Scrivere una funzione che dato un array di numeri restituisce un array con i numeri maggiori di 0;

// const groupNumbers = [-2, 4, -10, -5, 1, 5, -200, 2500];

// function onlyPositive(array) {
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if(element >= 0){
//           tempArray.push(element);
//         }
//     }
//     return tempArray;
// }

// console.log(onlyPositive(groupNumbers));

// MAP (MODELLO)
// 2) Scrivere una funzione che dato un array di numeri li moltiplica tutti per 2

// const groupNumbers = [-2, 4, -10, -5, 1, 5, -200, 2500];

// function multiplyAllBy2(array) {
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const risultato = element * 2;
//         tempArray.push(risultato);
//     }
//     return tempArray;
// }

// console.log(multiplyAllBy2(groupNumbers));

// REDUCE 
// 3) Creare una funzione che somma tutti gli elementi di un array di numeri

// const groupNumbers = [-2, 4, -10, -5, 1, 5, -200, 2500];

// function sumAll(array) {
//     let tempNumber = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         tempNumber = tempNumber + element;
//     }
//     return tempNumber;
// }
// console.log(sumAll(groupNumbers));

// ESERCIZI COMPITO

/*

1) Scrivere una funzione che prenda in input un array di numeri e restituisca un array di stringhe in logica FizzBuzz (stringa vuota con elemento non fizz non buzz)

(MAP)

 const numbers = [3, 5, 15, 8, 12, 2];

 function convertArrayInFizzBuzz(array){
const tempArray = [];
     for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(&&){

        }
        else if{

        }
        else if{

        }
        else{

        }
     }
     return tempArray;
 }
 console.log(convertArrayInFizzBuzz(numbers)); // ['Fizz','Buzz','FizzBuzz','8','Fizz','2']

2) scrivere una funzione che prende in input un array di numeri e restituisce un array di numeri in cui i positivi sono trasformati in negativi e viceversa

(MAP)

let numbers1 = [-2,-4, 8, -3, -5];

function invertNumbers(array) {
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const risultato = element * -1;
        tempArray.push(risultato);
    }
    return tempArray;
}

console.log(invertNumbers(numbers1));

3) Scrivere una funzione che prende in input un array di stringhe e restituisce un array di numeri con la lunghezza delle stringhe

const strings = ['pippo', 'pluto', 'qui']

function lengthOfElements(array){

}

console.log(lengthOfElements(strings)); //[4, 5, 3]

4) Scrivere una funzione che prende in input un array di stringhe e restituisce solo quelle che contengono la lettera z

const strings = ['pippo', 'pluto', 'qui', 'zapotec']

function onlyElementswithZ(array){

}

console.log(onlyElementsWithZ(strings2)); // ['zapotec']

5) Scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari

const numbers2 = [-3, 5, 15, -8, 12, 2, 0];

function onlyEven(array){

}

console.log(onlyEven(numers2));

6) Scrivere una funzione che dato un array di stringhe restituisce una stringa composta dalle iniziali
const strings3 = ['pippo', 'osvaldo', 'paperino']

function sumFirstChar(array){

}

console.log(sumFirstChar(strings3)); // pop

7) Scrivere una funzione che prende in input un array di numeri e restituisce il maggiore 

const numbers3 = [-3, 5, 15, -8, 12, 2, 0];

function maxElement(array){

}

console.log(maxElement(numers3)); //15

*/