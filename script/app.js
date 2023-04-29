const timer = document.querySelector('#timer');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const start = document.querySelector('#start');
const startHolder = document.querySelector('.start');
const resetHolder = document.querySelector('.reset');
const stopHolder = document.querySelector('.stop');

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;

    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timer.textContent = formatTime(elapsedTime);
    }, 10);
    startHolder.style.display = "none";
    stopHolder.style.order = "3";
    stopHolder.style.display = "flex";
}

function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60) / 1000));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60 ));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60 ));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
        "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
        );
}

function resetTimer() {
    clearInterval(timeInterval);
    elapsedTime = 0;
    timer.textContent = "00:00.00";
    startHolder.style.display = "flex";
    stopHolder.style.display = "flex";
    startHolder.style.order = "3";
    stopHolder.style.order = "0";
}
function stopTimer() {
    clearInterval(timeInterval);
    startHolder.style.display = "flex";
    startHolder.style.order = "3";
    stopHolder.style.order = "0";
    resetHolder.style.order = "2"
}

start.addEventListener('click', startTimer);
reset.addEventListener('click', resetTimer);
stop.addEventListener('click', stopTimer);