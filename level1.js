let background = document.getElementsByClassName("background")[0];
let level = document.getElementById("level");
let cleo = document.getElementsByClassName("cleo")[0];
let response = document.getElementById("response");
let responseHead = document.getElementById("response-head");
let responseButton = document.getElementById("response-button");

let clickCounter = 0;
const TOP_MIN = background.getBoundingClientRect().top + 5;
const TOP_MAX = background.getBoundingClientRect().bottom - 5;
const LEFT_MIN = background.getBoundingClientRect().left + 5;
const LEFT_MAX = background.getBoundingClientRect().right - 5;
const MAX_NUMBER_OF_CLICKS = 3;

// Taken from GeeksforGeeks.org
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

let randomTop = randomNumber(TOP_MIN, TOP_MAX);
let randomLeft = randomNumber(LEFT_MIN, LEFT_MAX);

response.style.visibility = "hidden";

cleo.style.top = `${randomTop}px`;
cleo.style.left = `${randomLeft}px`;

//Testing
console.log(level.clientWidth);
console.log(level.clientHeight);
console.log(background.getBoundingClientRect().bottom - background.getBoundingClientRect().top);
console.log(background.getBoundingClientRect().right - background.getBoundingClientRect().left);

function failedClicks() {
    if (clickCounter >= MAX_NUMBER_OF_CLICKS) {
        responseHead.innerHTML = "Tough luck mate, Cleo got the best of you";
        responseButton.innerHTML = "Try Again?";
        responseButton.onclick = () => {
            window.location.href="index.html";
            console.log("Sent to homepage");
        };
        response.style.visibility = "visible";
        cleo.src = "assets/images/dude.png";
        background.removeEventListener("click", failedClicks);
    }
    clickCounter += 1;
}

background.addEventListener("click", failedClicks);

cleo.onclick = () => {
    if (clickCounter < MAX_NUMBER_OF_CLICKS) {
        background.removeEventListener("click", failedClicks);
        cleo.src = "assets/images/dude.png";
        responseHead.innerHTML = "Great job! Cleo was captured!";
            responseButton.innerHTML = "Move to next round";
            responseButton.onclick = () => {
                window.location.href="end.html";
                console.log("Sent to the end");
            };
            response.style.visibility = "visible";
    }
};

// let createGameOver = () => {
//     response = document.createElement("div");
//     response.id = "game-over";
//     responseHead = document.createElement("h3");
//     responseHead.innerHTML = "Tough luck mate, Cleo got the best of you";
//     response.appendChild(responseHead);
//     responseButton = document.createElement("button");
//     responseButton.id = "game-over-button";
//     response.appendChild(responseButton);
//     console.log("create game over");
// };

// passButton.onclick = () => {
//     window.location.href="end.html";
// };

// gameOverButton.onclick = () => {
//     window.location.href="index.html";
//     console.log("Sent to homepage");
// };