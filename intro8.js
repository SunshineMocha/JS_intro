// 30 Marzo 

/*

linked list

liste linkate
[1] -> [2] -> [3] -> [4]
se voglio cambiare [3], con la linked list metto [5] al posto di [3] e dico a [2] di mandare a [5] e che [5] ha come next [4], [3] viene automaticamente isolato

[Tree]
|_> Child 1 -> Child a 
|_> Child 2
    |_> Child a
    |_> Child b

[Grafo] = più elementi nodes che si linkano uno all'altro senza gerarchie padre-figlio

*/

// Creazione linked list

const lastElement = {
    value: 10,
    next: null
}

const thirdElement = {
    value: 15,
    next: lastElement
}

const secondElement = {
    value: 5,
    next: thirdElement
}

const firstElement = {
    value: 12,
    next: secondElement
}

let element = firstElement;
while (element.next !== null) { // ciclo la lista
    console.log(element.value);
    if (element.next) {
        element = element.next;
    } else {
        break;
    }
}


function fromLinkedListToArray(first) {
    let tempArray = [];
    let element = first;
    while (true) {
        tempArray.push(element.value);
        if (element.next !== null) {
            element = element.next;
        } else {
            break;
        }
    }
    return tempArray;
}

console.log(fromLinkedListToArray(firstElement));

let myArray = ['pippo', 'pluto', 'paperino'];

function fromArrayToLinkedList(array){
    let previousElement = null; // setto default a null 
    for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i];
        const listElement = {
            value: element,
            next: previousElement // dico che il next è l'elemento passato
        }
        previousElement = listElement; // dico che la lista appena fatta è l'elemento passato
    }
    return previousElement;
}

console.log(fromArrayToLinkedList(myArray)); // ritorna pippo pluto paperino, ma viene costruito pippo pluto paperino che non ha bisogno di un next

function prependListElement(first, newElement){ // metto nuovo elemento al primo
    const listElement = {
        value : newElement,
        next: first,
    }
    return listElement;
}

console.log(prependListElement(firstElement, 10000));

function listElementAtIndex(first, index) { // recupero elemento alla posizione index (dove voglio), ciclo tutta la lista
    let element = first;
    let i = 0;
    while (true) {
        if (i === index) {
            return element.value;
        }
        if (element.next) {
            element = element.next;
            i++;
        } else {
            return undefined;
        }
    }
    return tempArray;
}

console.log(listElementAtIndex(firstElement,0));
console.log(listElementAtIndex(firstElement,3));
console.log(listElementAtIndex(firstElement,10));

