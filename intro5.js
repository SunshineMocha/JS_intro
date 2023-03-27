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

const andrea = {        // per dichiarare un oggetto si usano le graffe
       name: 'Andrea',
    surname: 'Asioli',
        // YOB: new Date(1978, 2, 2) // I MESI SI CONTANO DA ZERO */
        YOB: 1978,
  isMarried: false,
     pupils: ['valentina','chiara','stefano','jing','davide','davide','vlad','louis','pietro','daniele'],
        dog: {
            name: 'ariel',
            breed: 'border-collie',
        },
  "cool car": "bmw", // per dare il nome con spazi ad un attributo in lista uso virgolette
}

console.log(andrea);

console.log(andrea.surname); // STAMPA IL DATO ATTRIBUTO CORRISPONDENTE

console.log(andrea['YOB']); // RICHIAMA L'ATTRIBUTO COME SOPRA MA PER ATTRIBUTI CON SPAZI

console.log(andrea['cool car']); //anche se spesso si usa quello con il punto

// Creare un oggetto per ognuno dei partecipanti al corso, che contenga nome, cognome, data di nascita, nickname e e-mail
// stampare una microscheda ciclando l'array

const chiara = {
    name: Chiara,
    surname: Badile,
    yob: 1993,
    nickname: SunshineMocha,
    email: "sunshinemocha@gmail.com",
};
const valentina = {};
const vlad = {};
const jing = {};
const cresta = {};
const consigliere = {};
const louis = {};
const simone = {};
const pietro = {};
const daniele = {};

const myClass = [chiara, valentina, vlad, jing, cresta, consigliere, louis, simone, pietro];

for (let i = 0; i < myClass.length; i++) {
    const element = myClass[i];
    
}

/*
 NOME ANDREA ASIOLI (labstract)
ETA: 45 anni,
email: mail@gmail.com
 */