/* 22 Marzo 2023 - Ripassone */

// Incrementi (come aumentare una variabile)

// index = index + 1; // incrementa index di 1
// index++; // equivalente
// index = index + 5; // index sarà 10
// index+= n; // equivalente


// console.log(pluto++); // MOSTRA PLUTO E POI INCREMENTA
// console.log(++pluto); // INCREMENTA PLUTO E POI LO MOSTRA 

/*
for (let index = 10; index >= 0; index--) {
    console.log(index);
}
for (let index = 1; index <= 10; index++) {
    console.log(index);
}
*/

/*
    step 01 10
    step 02 09
    step 03 08 
    ...
    step 10 00
    step 11 01
    step 12 02
    ...
    step 20 10
*/

/*
let count = 0;
let index = 11;
while (count <= 20){
    if(count <= 10){
        index--;
    }
    else{
        index++;
    }
    count++;
    console.log('step ' + count + ', valore ' + index);
}
*/

/*let userWidth = prompt('Inserisci larghezza tabella', 0); 
userWidth = Number(userWidth);
alert(typeof userWidth);
console.log(userWidth);
let userHeight = prompt('Inserisci altezza tabella', 0);*/

/*for (let x = 0; x < 10; x++) {
    for (let y= 0; y < 10; y++) {
        console.log('x: ', x, 'y: ', y);
    }   
}
*/

let scacchiera="";
let size = 18;
for (let riga = 0; riga < size; riga++) {
    if (riga % 2 !== 0) {
        scacchiera += " #".repeat(size/2);
    } else if (riga % 2 === 0) {
        scacchiera += "# ".repeat(size/2);
    }
    scacchiera +=  '\n';
}
console.log(scacchiera);



/* NOTE

 ctrl+u = uncomment
 continue = fermati qua e riprendi dall'inizio del ciclo
 if su stringa: stringa vuota = false, stringa piena = true

 */