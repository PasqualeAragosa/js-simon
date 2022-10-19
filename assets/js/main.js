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

function randomNumGenerator() {
    return Math.floor((Math.random() * 100) + 1);
};

function clearDisplay() {
    for (let i = 0; i < 5; i++) {
        const slotEl = document.querySelectorAll('.slot').values;
        console.log('slotEl:', slotEl);
        slotEl.innerHTML = 'niente';
    }
};

const generetorEl = document.querySelector('.num_generator');
const sizeNum = 5;
let numRandom = [];
let slot;

for (let i = 0; i < sizeNum; i++) {
    slot = randomNumGenerator();
    numRandom.push(slot);
    generetorEl.insertAdjacentHTML('beforeend', `<div class="slot slot_${i}">${slot}</div>`);
}

setTimeout(clearDisplay, 3000);

;
