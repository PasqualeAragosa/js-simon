/* 
1 - Visualizzare in pagina 5 numeri casuali. 
2 - Da lì parte un timer di 30 secondi. 
3 - Dopo 30 secondi i numeri scompaiono 
4 - l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
5 - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* 
- Appaiono 5 numeri casuali
    - Funzione: genero 5 numeri
    - li salvo in un array
- Appare un timer di 30 secondi
    - setInterval
- Spariscono i 5 numeri
    - innerHTML = '';
- Appare un alert 5 volte per chiedere i numeri all'utente
    - num = prompt('Inserisci numero');
- Risultato: quali e quanti numeri l'utente ha indovinato
    - arrayNumeriCasuali.includes(num)
*/

//FUNZIONI
function getRandomNum(min, max) {
    return (Math.floor(Math.random() * max) + min);
}

function clearDisplay(divContainerEl) {
    divContainerEl.innerHTML = '';
}

function getNumUser() {
    return prompt('Digita numero');
}

function pushNumArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        //console.log('Random num: ', num);
        arr.push(getRandomNum(1, 100));
    }
    return arr;
}

function getCountdownNum(divContainerEl, divTimerEl, divNumbersEl, array, size) {
    for (let i = 0; i < size; i++) {
        divNumbersEl.insertAdjacentHTML('afterbegin', `<div class="slot">${array[i]}</div>`);
    }
    let seconds = 4;
    const timer = setInterval(function () {
        divTimerEl.innerHTML = seconds;
        if (seconds === -1) {
            divTimerEl.innerHTML = '';
            clearInterval(timer);
            clearDisplay(divContainerEl);
        }
        seconds--;
    }, 1000);
    return 0;
}

//VARIABILI
const containerEl = document.querySelector('.my_container');
const numbersEl = document.querySelector('.numbers');
const timerEl = document.querySelector('.timer');
const sizeArr = 5;
const numArr = pushNumArray(sizeArr);
let num;
//passa sizeArr e inserisci ciclo for per inserirli a mano a mano
//numbersEl.insertAdjacentHTML('afterbegin', `Numeri casuali: ${numArr}`);
const result = getCountdownNum(containerEl, timerEl, numbersEl, numArr, sizeArr);

if (result === 0) {
    num = getNumUser();
}

console.log('Num ', num);
//const result = getNumUser();
//clearDisplay(containerEl);
//console.log('Array: ', numArr);


