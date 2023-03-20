/* valori string, number e boolean*/
console.log('this is a string', 'hello world'); // questa variabile crea sulla console un log, visibile con Analizza -> Console. Indica il codice eseguito
console.log('this is a number', 13.5);
console.log('this is a boolean', 'I\'m tired? True \\ False', true );
console.log('descrizione', 'valore');
console.warn("hey I'm a warning!"); /*le virgolette sono anche valide*/
console.error('lol I\'m an error'); /* Slash è un carattere di escape, serve per differenziare dal codice. Doppio backslash se ho bisogno di un backslash*/

/*operatori*/
console.log('somma', 10 + 5); // somma, logga il risultato dell'operazione
console.log('sottrazione',10 - 5); // sottrazione
console.log('moltiplicazione',10 * 5); // moltiplicazione
console.log('divisione',10 / 5); // divisione
console.log('modulo',10 % 3); // modulo (resto della divisione). Serve per porgerci una domanda rispetto ai numeri, tipo se è pari (resto divisione per due 0? Pari!)
console.log('il numero 11 è pari?',10 % 2 === 0); // operatore di confronto (vedi prossimi paragrafi)
console.log('potenza', 10 ** 2); // elevazione a potenza
console.log('senza parentesi', 10 + 5 * 2); // espressione senza parentesi
console.log('con parentesi tonde', (10 + 5) * 2); //con parentesi

// per tutte le operazioni non elencate, libreria Math. Con . vedo tutte le funzioni
console.log('radice quadrata (usando Math)', Math.sqrt(16)); // radice quadrata

// tutti gli operatori funzionano solo con i numeri, tranne il +, che fa concatenazione tra stringhe
console.log('la casa di mia nonna'+'è molto bella'); // concatenazione, due stringhe unite (a riprova il fatto che manca lo spazio)
console.log("alt+096 = backtick","\`")// alt+96 = backtick
console.log(`la somma di 5 e 10 è ${10+5}`) //stringa interpolata con backtick, mi permette di mettere codice dentro la stringa. $ = da qui in poi codice che deve essere eseguito prima

// operatori di confronto
console.log('ugualianza', 10 == 10); // logga true se 10 è uguale a 10
console.log('ugualianza con converzsione', '10' == 10); //
console.log('ugualianza senza conversione', '10' === 10); //serve per evitare gli errori: senza il triplo uguale la stringa viene automaticamente convertita in numero e restituisce "true" (vedi sopra)
console.log('ugualianza tra numeri', 10 === 10);
console.log('ugualianza tra stringhe', 'CIAO'==='CIAO'); // === case sensitive
console.log('ugualianza tra stringhe', 'PIPPO'==='pippo')
console.log('ugualianza tra booleani', false===true);
console.log('disugualianza tra numeri', 10 != 10); // disugualianza con conversione
console.log('disugualianza tra stringhe e numeri', '10' !== 10); // disugualianza senza conversione
console.log('disugualianza tra stringhe', 'pippo' !== "pluto");
console.log('disugualianza tra booleani', true !== false);
console.log('maggiore', 10 > 5); // maggiore
console.log('maggiore uguale', 10 >= 10); // maggiore uguale
console.log('minore', 10 < 5); // minore
console.log('minore uguale', 10 <= 5); // minore uguale

// operatori logici NOT (su 1 boolean, "!"), AND (&&) e OR (||) (tra 2 booleani)
/*
                 NOT
          Valore  | !Valore
          True    | False
          False   | True

                 AND
    Valore 1 | Valore 2 | 1 && 2
     True    |  True    | True
     True    |  False   | False
     False   |  True    | False
     False   |  False   | False

                 OR
    Valore 1 | Valore 2 | 1 && 2
     True    |  True    | True
     True    |  False   | True
     False   |  True    | True
     False   |  False   | False

*/

console.log('operatore NOT (true)', !true); // NOT
console.log('operatore NOT (false)', !false);
console.log('operatore AND (TRUE TRUE)', true && true); // AND
console.log('operatore AND (TRUE FALSE)', true && false); 
console.log('operatore AND (FALSE TRUE)', false && true); 
console.log('operatore AND (FALSE FALSE)', false && false); 
console.log('operatore OR (TRUE TRUE)', true || true); // OR
console.log('operatore OR (TRUE FALSE)', true || false); 
console.log('operatore OR (FALSE TRUE)', false || true); 
console.log('operatore OR (FALSE FALSE)', false || false); 

// operatore typeof

console.log('typeof 12:', typeof 12); //ritorna il tipo della variabile
console.log('typeof "hello world":', typeof 'hello world');
console.log('typeof true:', typeof true);

// operatori particolari

console.log('infinito positivo', Infinity); // Infinity, generico per numeri che JS non puo gestire perchè troppo grossi o troppo piccoli
console.log('infinito negativo', -Infinity);
console.log('Not a Number', NaN); // Not A Number
console.log('0 / 0 Not a Number', 0/0); // Risultato di 0/0 (impossibile)

// operatori particolari generici

console.log('undefined', undefined); // indefinito (senza valore)
console.log('null', null); // nullo (senza valore)