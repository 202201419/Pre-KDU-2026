let min = 25;
let sec = 0;
let timerId = null;
let originalMin = 25;
let sessions = 0;


const baseRing = document.querySelector(".base-ring");
const progressRing = document.getElementById("progress-ring");

const radius = 240;
const circumference = 2 * Math.PI * radius;

const GAP = 300;
const VISIBLE = circumference - GAP;

baseRing.style.strokeDasharray = `${VISIBLE} ${GAP}`;

progressRing.style.strokeDasharray = `0 ${VISIBLE}`;

let totalTime = originalMin * 60;

function updateDisplay() {
    document.getElementById("display").innerText =
        String(min).padStart(2, "0") + ":" +
        String(sec).padStart(2, "0");
}


function updateArc() {
    const timeLeft = min * 60 + sec;
    const progress = (totalTime - timeLeft) / totalTime;

    const drawn = VISIBLE * progress;
    const remaining = VISIBLE - drawn;

    progressRing.style.strokeDasharray =
        `${drawn} ${remaining + GAP}`;
}


function completeSession() {
    sessions++;
    document.getElementById("sessions").innerText = sessions;

    showAlert("Session Complete!");

    min = originalMin;
    sec = 0;
    totalTime = originalMin * 60;

    progressRing.style.strokeDasharray =
        `0 ${VISIBLE + GAP}`;

    updateDisplay();
    pauseTimer();
}


function timer() {
    if (min === 0 && sec === 0) {
        completeSession();
        return;
    }

    if (sec === 0) {
        sec = 59;
        min--;
    } else {
        sec--;
    }

    updateDisplay();
    updateArc();
}


function startTimer() {
    if (!timerId) {
        timerId = setInterval(timer, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    pauseTimer();
    min = originalMin;
    sec = 0;
    totalTime = originalMin * 60;

    progressRing.style.strokeDasharray =
        `0 ${VISIBLE + GAP}`;

    updateDisplay();
}


function setTimer() {
    const value = Number(document.getElementById("customMin").value);

    if (value < 1 || value > 60 || isNaN(value)) {
        showAlert("Please enter a number between 1 and 60");
        return;
    }

    pauseTimer();
    originalMin = value;
    min = value;
    sec = 0;
    totalTime = value * 60;

    progressRing.style.strokeDasharray =
        `0 ${VISIBLE + GAP}`;

    updateDisplay();
}

function showAlert(message, title = "Notice") {
  document.getElementById("alert-title").innerText = title;
  document.getElementById("alert-message").innerText = message;
  document.getElementById("alert-overlay").classList.remove("hidden");
}

function closeAlert() {
  document.getElementById("alert-overlay").classList.add("hidden");
}


updateDisplay();
document.getElementById("sessions").innerText = sessions;
