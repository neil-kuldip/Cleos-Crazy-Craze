// JavaScript file for Level 1
// Last Modified: 5/10/22

let background = document.getElementsByClassName("background")[0];
let level = document.getElementById("level");
let cleo = document.getElementsByClassName("cleo")[0];
let response = document.getElementById("response");
let responseHead = document.getElementById("response-head");
let responseButton = document.getElementById("response-button");

const MAX_NUMBER_OF_CLICKS = 2;
let clickCounter = MAX_NUMBER_OF_CLICKS;
const TOP_MIN = background.getBoundingClientRect().top ;
const TOP_MAX = background.getBoundingClientRect().bottom;
const LEFT_MIN = background.getBoundingClientRect().left;
const LEFT_MAX = background.getBoundingClientRect().right;

// Cleo's positioning & rotation

// Taken from GeeksforGeeks.org
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

let randomTop = randomNumber(TOP_MIN, TOP_MAX);
let randomLeft = randomNumber(LEFT_MIN, LEFT_MAX);
let randomRotate = randomNumber(0, 360);

response.style.visibility = "hidden";

cleo.style.top = `${randomTop}px`;
cleo.style.left = `${randomLeft}px`;
cleo.style.transform = `rotate(${randomRotate}deg)`;

// Countdown Timer & Click Counter

let timer = document.getElementById("timer");
let levelTwoSeconds = 55;
let levelTwoMinutes = 0;

timer.innerHTML = `Timer: ${String(levelTwoMinutes).padStart(2, "0")}:${String(levelTwoSeconds).padStart(2, "0")}`;    

const countDown = setInterval(() => {
    levelTwoSeconds--;
    timer.innerHTML = `Timer: ${String(levelTwoMinutes).padStart(2, "0")}:${String(levelTwoSeconds).padStart(2, "0")}`;
    if (levelTwoSeconds <= 0) {
        timer.innerHTML = "TIME'S UP"
        failedClicks();
    }
}, 1000);

let counter = document.getElementById("counter");
counter.innerHTML = `Clicks left: ${clickCounter + 1}`

// Game mechanics -- Manipulation of timer and clickCounter variables, user's walkthrough on pass or fail

function failedClicks() {
    if (clickCounter === 0 || levelTwoSeconds <= 0) {
        responseHead.innerHTML = "Tough luck mate, Cleo got the best of you";
        responseButton.innerHTML = "Try Again?";
        responseButton.onclick = () => {
            window.location.href="../index.html";
            console.log("Sent to homepage");
        };
        response.style.visibility = "visible";
        cleo.src = "../assets/images/dude.png";
        background.removeEventListener("click", failedClicks);
        clearInterval(countDown);
        counter.innerHTML = `Clicks left: 0`;
    } 
    else {
        clickCounter -= 1;
        counter.innerHTML = `Clicks left: ${clickCounter + 1}`;
    }
}

background.addEventListener("click", failedClicks);

cleo.onclick = () => {
    if (clickCounter >= 0) {
        background.removeEventListener("click", failedClicks);
        cleo.src = "../assets/images/dude.png";
        responseHead.innerHTML = "Cleo's had enough and is willing to cooperate. Thank you!";
            responseButton.innerHTML = "Finish";
            responseButton.onclick = () => {
                window.location.href="../end/end.html";
                console.log("Sent to the end");
            };
            response.style.visibility = "visible";
            clearInterval(countDown);
    }
};


