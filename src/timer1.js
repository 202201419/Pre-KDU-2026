import newpage from "./newpage";

export function timer1()
{
let min = 1;
let sec = 10;
let timerId = null;
let originalMin = 1;


let totalTime = originalMin * 60;

function updateDisplay() {
    document.getElementById("display1").innerText =
        String(sec).padStart(2, "0");
}


function completeSession() {
    
    min = originalMin;
    sec = 0;
    totalTime = originalMin * 60;
    updateDisplay();
    pauseTimer();


}


function timeralgo() {
    if (sec === 0) {
        completeSession();
        // {newpage};
    }

    else {
        sec--;
    }

    updateDisplay();
}


function startTimer() {
    if (!timerId) {
        timerId = setInterval(timeralgo, 1000);
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

    updateDisplay();
}

updateDisplay();
timerId = setInterval(timeralgo, 1000);
}