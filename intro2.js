console.log('intro 2');

let pippo = 5;  // dichiarazione variabile tipo let, permette il cambio valore
pippo = 10; // sovrascrizione variabile pippo
console.log('il valore di pippo è', pippo);

// var pluto = 10; // dichiarazione variabile tipo var, vecchio let/const, porta underfined se non dichiarata prima
// pluto = 23;
// console.log('il valore di pluto è', pluto); < sconsigliato, perchè:

// console.log(clarabella); <- questo ritorna undefined perchè la variabile non è dichiarata prima. Con un let mi ritorna un errore
// var clarabella = 10;

const paperino = 20; // dichiarazione variabile tipo const (costante, non può cambiare, il programma si blocca se trova un'altra assegnazione).
// paperino = 17; NON LO ACCETTA PIU
console.log('il valore di paperino è', paperino);

const topolino = 12 + 80; // codice viene eseguito prima (12+80), il valore risultante viene messo nella scatola (92)
console.log('il valore di topolino è', topolino);

const basettoni = 56
const gambaDiLegno = basettoni // camel case, inizio con la minuscola e tutte le altre parole vanno con iniziale maiuscola. No spazi no trattini
console.log('il valore di gambaDiLegno è ',gambaDiLegno);

const trudy = gambaDiLegno + basettoni;
console.log('il valore di trudy è',trudy);

let qui = 12, quo = 12, qua = 12; // assegna tre valori a tre variabili, non si può fare let qui, quo, qua = 12 -> qui = undefined quo = undefined qua = 12

let paperoga; //inizializzazione variabile
console.log(paperoga); // undefined perchè non definita ancora, ma utilizzabile

// una costante non può essere inizializzata vuota

// let 12pippo non è possibile un nome di variabile che inizi con un numero

/* Nomi variabili non accettati
        break case catch class const continue debugger default
        delete do else enum export extends false finally for
        function if implements import interface in instanceof let
        new package private protected public return static super
        switch this throw true try typeof var void while with yield
*/

let macchiaNera = 12;
console.log(macchiaNera);
macchiaNera = 27;
console.log(macchiaNera);