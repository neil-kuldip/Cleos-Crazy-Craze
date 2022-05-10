let clickCounter = 0;
const TOP_MIN = 20;
const TOP_MAX = 80;
const LEFT_MIN = 15;
const LEFT_MAX = 75;

// Taken from GeeksforGeeks.org
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

let randomTop = randomNumber(TOP_MIN, TOP_MAX);
let randomLeft = randomNumber(LEFT_MIN, LEFT_MAX);

let background = document.getElementsByClassName("background")[0];
let cleo = document.getElementsByClassName("cleo")[0];
let response = document.getElementById("response");
let responseHead = document.getElementById("response-head");
let responseButton = document.getElementById("response-button");
// let pass = document.getElementById("pass");
// let passButton = document.getElementById("pass-button");

response.style.visibility = "hidden";

cleo.style.top = `${randomTop}%`;
cleo.style.left = `${randomLeft}%`;

background.onclick = () => {
    if (clickCounter >= 9) {
        responseHead.innerHTML = "Tough luck mate, Cleo got the best of you";
        responseButton.innerHTML = "Try Again?";
        responseButton.onclick = () => {
            window.location.href="index.html";
            console.log("Sent to homepage");
        };
        response.style.visibility = "visible";
        cleo.src = "assets/images/dude.png";
    }
    clickCounter += 1;
}

cleo.onclick = () => {
    if (clickCounter < 9) {
        clickCounter = -1000;
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