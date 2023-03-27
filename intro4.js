// ARRAY

// let pippo = [15, 3, 23, 34, 21]; // indice = posizione dell'elemento nell'array 0: 15, 1: 3, 2: 23, 3: 34, 4: 21

// // let pluto = [1, 'ciao', false]; // MALISSIMO

// pippo.push(100); // Inserisce l'elemento in coda all'array
// pippo.pop() // Rimuove l'ultimo elemento all'array

// const pluto = pippo.pop(); // Assegna alla variabile il valore tolto in coda
// const paperino = pippo.pop();

// console.log(pippo); // logga l'array
// console.log(pluto); // Logga l'elemento rimosso dall'array // 21
// console.log(paperino); // Logga l'elemento rimosso dall'array // 34
// console.log(pippo);

// pippo.unshift(200); // Inserisce l'elemento all'inizio dell'array

// console.log(pippo);

// const paperone = pippo.shift(); // // Assegna alla variabile il valore tolto in testa
// const paperina = pippo.shift(); // // Assegna alla variabile il valore tolto in testa
// console.log(pippo);
// console.log(paperone); // logga l'elemento rimosso dall'array // 200
// console.log(paperina); // logga l'elemento rimosso dall'array // 15

// console.log(pippo);        A VOLTE IL LOG NON È AFFIDABILE
// pippo.pop();
// console.log(pippo);

/*
const arrayOfStrings = ['andrea', 'jing', 'valentina', 'vlad'];

for (let i = 0; i < arrayOfStrings.length; i++) {
    const element = arrayOfStrings[i];
    console.log('Sto ciclando dentro l\' array...')
    console.log('posizione index', i, ': ' , element);
}
*/

/* ESERCIZI */
// 1) scrivere una funzione che prende come parametro un array di numeri e fa console.log dei numeri con la logica FizzBuzz

/**/
/*
function newFizzBuzz(listedNumbers) {
    for (let i = 0; i  < listedNumbers.length; i++) {
        const element = listedNumbers[i];
        if (element % 3 === 0 && element % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (element % 3 === 0) {
            console.log('Fizz');
        }
        else if (element % 5 === 0) {
            console.log('Buzz');
        }
        else{
            console.log(element);
        }
    }
}

const listedNumbers = [5,3,7,8,15,1,2];
newFizzBuzz(listedNumbers); 
*/
/**/

// 2) scrivere una funzione che prende come parametro un array di stringhe e logga quelle più piccole di 5 caratteri 
/*const words = ['pippo', 'pluto', 'paperino', 'topolino', 'paperone']
function shorterThan5(arrayOfStrings) {
    for (let i = 0; i < arrayOfStrings.length; i++) {
        const element = arrayOfStrings[i];
        if (element.length <= 5) {
            console.log(element);
        }
    }
}

shorterThan5(words);*/
// 3) scrivere una funzione che prende come parametro una stringa e restituisce una stringa composta dai primi 5 caratteri convertiti in maiuscolo
// 4) scrivere una funzione che prende come parametro una stringa e restituisce la lunghezza della stringa senza spazi
// 5) scrivere una funzione che prende come parametro una stringa e restituisce il numero degli spazi