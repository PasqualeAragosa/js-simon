//FUNZIONI
// function clearDisplay(divContainerEl) {
//     divContainerEl.innerHTML = '';
// }

function getRandomNum() {
    return (Math.floor(Math.random() * 100) + 1);
}

function getNumUser() {
    return prompt('Digita numero');
}

function getCountdown(divNumbersEl, divTimerEl) {
    let seconds = 5;
    const timer = setInterval(function () {
        divTimerEl.innerHTML = seconds;
        if (seconds === -1) {
            divNumbersEl.innerHTML = '';
            divTimerEl.innerHTML = '';
            clearInterval(timer);
        } else {
            seconds--;
        }
    }, 1000);
}

//VARIABILI
const containerEl = document.querySelector('.my_container');
const numbersEl = document.querySelector('.numbers');
const timerEl = document.querySelector('.timer');
const sizeArr = 5;
let randomNum = [];

//Inserisco 5 numeri random tramite un markup all'interno del DOM
for (let i = 0; i < sizeArr; i++) {
    randomNum.push(getRandomNum());
    const numMarkup = `<div class="slot slot_${i + 1}">${randomNum[i]}</div>`;
    //console.log(numMarkup);
    numbersEl.insertAdjacentHTML('beforeend', numMarkup);
}
//console.log(randomNum);

getCountdown(numbersEl, timerEl);



