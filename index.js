const startEl = document.getElementById("start");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString()}:${seconds.toString()}`;

    timerEl.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeleft == 0) {
            clearInterval(interval);
            alert("Time is Up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

startEl.addEventListener("click", startTimer);