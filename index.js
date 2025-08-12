const startEl = document.getElementById("start");
const timerEl = document.getElementById("timer");
const resetEl = document.getElementById("reset");
const stopEl = document.getElementById("stop");

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart("2", 0)}:${seconds.toString().padStart("2", 0)}`;

    timerEl.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft == 0) {
            clearInterval(interval);
            alert("Time is Up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

function stopTimer() {
    clearInterval(interval);
}

startEl.addEventListener("click", startTimer);
resetEl.addEventListener("click", resetTimer);
stopEl.addEventListener("click", stopTimer);