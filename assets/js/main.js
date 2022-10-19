/* 
1 - Visualizzare in pagina 5 numeri casuali. 
2 - Da lì parte un timer di 30 secondi. 
3 - Dopo 30 secondi i numeri scompaiono 
4 - l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
5 - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/*
 - Funzione: genera numeri interi casuali da 1 a 100
 - Inserisco i numeri in un div generico per 5 volte
 - Funzione: Timer 30 secondi
    - Creo un pulsante tramite il quale i numeri vengono visualizzati
 - L'utente inserisce i numeri che ricorda tramite prompt
 - Faccio un controllo sui numeri che l'utente ha inserito e quelli che ha generato il pc.
 - Variabile per ricordare quanti numeri sono stati indovinati
 - Stampa a video i numeri indovinati
*/

/*

*/

//Genero un numero casuale da 1 a 100
function getRandomNum() {
    return Math.floor((Math.random() * 100) + 1);
};

//Pulisco l'elemento nella DOM
function clearDisplay() {
    const divEl = document.querySelector('.num_generator');
    divEl.innerHTML = '';
};

//Acquisisco un numero dall'user
function getNumUser() {
    console.log('Sono qui');
    const num = prompt('Digita numero');
    return num;
}

//Dichiarazione variabili
const generatorEl = document.querySelector('.num_generator');
const sizeArr = 5;
let numRandom = [];
let userNum = [];
let slot;

//Scorro l'elemento nella DOM per inserire i numeri random
for (let i = 0; i < sizeArr; i++) {
    slot = getRandomNum();
    numRandom.push(slot);
    generatorEl.insertAdjacentHTML('beforeend', `<div class="slot slot_${i}">${slot}</div>`);
}

console.log('Array: ', numRandom);

//Richiamo la funzione per pulire l'elemento della DOM
setTimeout(clearDisplay, 3000);

//
for (let i = 0; i < sizeArr; i++) {
    userNum.push(getNumUser());
}

console.log('UsernNum: ', userNum);