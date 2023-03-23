// Scope

/* const pippo = 'ciao';


if (true) {
    console.log(pippo);
    const pluto = 'javascript';
    if (true) {
        console.log(pluto);
        const paperino = 'pizza'
    }
    // console.log(paperino); non è possibile leggere la variabile di uno scope interno
    // const pippo = 'pippo';
}

    // const pippo = 'pippo'; non è possibile dichiarare due variabili con lo stesso nome nello stesso scope

    for (let i = 0; i < 3; i++) {
        console.log('ciao'); 
    }
    for (let i = 0; i < 3; i++) {
        console.log('mondo'); 
    }

    for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 5; i++) {
            console.log(i); // shadowed variable. Legge la i del figlio. Anche se non è un errore di codice (ma errore logico) sempre meglio chiamare due variabili diverse
        }
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            console.log(i); 
            console.log(j);
        }
    }

*/
/* 
    APPUNTI
    {} = scope. Scope interni possono vedere esterni ma non viceversa.
    Non posso dichiarare una variabile nello stesso scope, ma in due scope diverse si.
    Nei primi due cicli FOR vediamo la stessa variabile i usata per due scope diversi.

*/

// FUNZIONI

// function elevaAlQuadrato(numero){ // dichiarazione della funzione, metodo 1
//     const risultato = numero * numero;
//     return risultato; // ritorna al di fuori della funzione il valore della variabile risultato. Senza return lo standard è: "return undefined"
// }

// const dueAlQuadrato = elevaAlQuadrato(2); // Chiamata alla funzione con assegnazione a variabile. Il parametro passato alla funzione (numero) è due

// console.log(dueAlQuadrato); // Stampa della costante risolta

// const cinqueAlQuadrato = elevaAlQuadrato(5);

// console.log(cinqueAlQuadrato);

// // FUNZIONI ANONIME

// const elevaAlQuadrato2 = function(numero){ // Dichiarazione della funzione, metodo 2
//     // const risultato = numero * numero;
//     // return risultato
//     return numero * numero;
// }

// console.log(elevaAlQuadrato2(3)); // Chiamata della funzione con parametro assegnato nel log della variabile

// // LAMBDA FUNCTION

// const elevaAlQuadrato3 = (numero) => numero * numero;

// console.log(elevaAlQuadrato3(12));

// // molto simile alla funzione anonima, senza la keyword function. Mette solo le tonde e dentro le tonde c'è argomento in input. Poi => (sembra una freccia) e poi il codice
// // se il codice è di una sola riga, il return può essere tolto

// /*
// const elevaAlQuadrato4 = (numero) => {          Nel momento in cui ho bisogno di più righe di codice
//     const risultato = numero * numero;          anche la lambda function va scritta come una funzione anonima
//     return risultato;
// }
// */

// function elevazioneAPotenza (base, esponente){
//     return risultato = base ** esponente;
// }

// console.log(elevazioneAPotenza(3,4));
// const Elevato = elevazioneAPotenza(2,4);
// console.log(Elevato);

// funzioni pure e funzioni impure

// function scriviNellaConsole(messaggio) { // funzione impura
//     console.log(messaggio);
// }


// scriviNellaConsole('scemo chi legge'); 

// function sommaUno(numero) { // funzione pura
//     return numero + 1;
    
// }

// function sommaDueELogga(numero) { // funzione mista, meglio evitare
//     const risultato = numero + 2;
//     console.log(risultato);
//     return risultato;
// }

// function log(messaggio) { // funzione impura
//     console.log(messaggio);
// }
// function sommaDue(numero){ // funzione pura
//     const risultato = numero + 2;
//     return risultato;
// }

// log(sommaDue(5)); //chiamata funzione in funzione, evita la funzione mista

// FUNZIONE IMPURA MA PERICOLOSA

/*
    let pluto = 7;

    function duplicaPluto(){
        pluto = pluto * 2;
    }
    console.log(pluto); torna 7

    duplicaPluto(); torna 14
    duplicaPluto(); torna 28

    console.log(pluto); stampa 28

    Il programma si pesca da solo pluto e modifica da solo il programma, perchè senza return ma si suppone sia "pura"

    function duplica(numero){
        return numero * 2;
    }

    pluto = duplica(pluto);

    console.log(pluto);

*/

/* function minimum(a,b)
{
    if(b - a >= 0) {
        return a;
    }
    else{
        return b;
    }
}

console.log(minimum(-10, -20));

let minRes = (num1, num2) => {
    if(num2 - num1 >= 0) {
        return num1;
    }
    else{
        return num2;
    }
}

console.log(minRes(5, 0)); */

// Esercizio 1: Scrivere una funzione che dato un numero se è positivo lo moltiplica per due
// Esercizio 2: Scrivere una funzione che data una stringa restituisca la sua versione maiuscola
// Esercizio 3: Scrivere una funzione che data una stringa mi restituisca vero se è più lunga di 10 caratteri, altrimenti falso
// Esercizio 4: Scrivere una funzione pura che restituisca la scacchiera
// Esercizio 5: Scrivere una funzione che dato un numero restituisca una stringa con la logica FizzBuzz
// Esercizio 6: scrivere una funzione che data una stringa restituisca una stringa composta solo dai caratteri dispari dell'originale

/* ESERCIZIO 1
function moltiplicaPositivo(positivo) { // FUNZIONE
    if (positivo >= 0) {
        return positivo * 2;
    }
}

console.log(moltiplicaPositivo(0)); 

let molPos = (pos) =>{ // FUNZIONE LAMBDA
    if (pos >= 0) {
        return pos* 2;
    }
}

console.log(molPos(0));

*/

/*  ESERCIZIO 2

function rendiMAIUSCOLO(stringa) {
    return stringa.toUpperCase();
}

console.log(rendiMAIUSCOLO("GATTO"));

let MAIUSC = (parola) => parola.toUpperCase();
console.log(MAIUSC("cane"));

*/

/* ESERCIZIO 3 
 function lunghezza(stringa){
    if (stringa.length >= 10) {
        return true;        
    }
    else{
        return false;
    }
}

console.log(lunghezza('1132456789'));

let lungh = (strin) =>{ 
    if (strin.length >= 10) {
        return true;        
    }
    else{
        return false;
    }
}

console.log(lungh('01234561654869'));

*/

/* ESERCIZIO 4
function costruisciScacchiera(size) {
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (y % 2 === 0) {
                if (x % 2 === 0) {
                    scacchiera+='#';
                }
                else{
                    scacchiera+=' ';
                }
            }
            else{
                if (x % 2 === 0) {
                    scacchiera+=' ';
                }
                else{
                    scacchiera+='#';
                }
            }
        }
        scacchiera+='\n';
    }
    return scacchiera;
}

let scacchiera ='';

console.log(costruisciScacchiera(5)); 

let costruisciScacchiera2 = (size) => {
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (y % 2 === 0) {
                if (x % 2 === 0) {
                    scacchiera2+='#';
                }
                else{
                    scacchiera2+=' ';
                }
            }
            else{
                if (x % 2 === 0) {
                    scacchiera2+=' ';
                }
                else{
                    scacchiera2+='#';
                }
            }
        }
        scacchiera2+='\n';
    }
    return scacchiera2;
}

let scacchiera2='';
console.log(costruisciScacchiera2(5));

*/


/* ESERCIZIO 5
function fitzBuzz(numb) {
    if (numb % 3 === 0 && numb % 5 === 0) {
        return result='FizzBuzz';
    }
    else if (numb % 3 === 0) {
        return result='Fizz';
    }
    else if (numb % 5 === 0) {
        return result='Buzz';
    }
    else{
        return numb;
    }
}

let result='';
console.log(fitzBuzz(5)); 

let fiBu = (numb) =>{
    if (numb % 3 === 0 && numb % 5 === 0) {
        return result='FizzBuzz';
    }
    else if (numb % 3 === 0) {
        return result='Fizz';
    }
    else if (numb % 5 === 0) {
        return result='Buzz';
    }
    else{
        return numb;
    }
}


let result='';
console.log(fiBu(15)); 

*/

/* ESERCIZIO 6 
function prendiDispari(nuovo) {
    for (let i = 0; i < nuovo.length; i+=2) {
      dispari+=nuovo[i];
  }
  return dispari;
}

let dispari = []
let nuovo;
  
  console.log(prendiDispari('1234567890')); 

let dispari2 = (nuovo2) => {
    for (let i = 0; i < nuovo2.length; i+=2) {
        dispariD+=nuovo2[i];
    }
    return dispariD
}

let dispariD = [];
console.log(dispari2('1234567890'));

*/