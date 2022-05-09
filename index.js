// Main index file for Cleo's Crazy Craze
// Last updated: 5/8/2022

let homepage_button = document.getElementById("homepage_to_level1");
homepage_button.onclick = () => {
    window.location.href="level1.html";
    console.log("Sent to level 1");
};

let instructionsButton = document.getElementById("info");
let instructions = document.getElementById("info-text");
instructions.style.visibility = "hidden";
instructionsButton.onclick = () => {
    if (instructions.style.visibility === "hidden") {
        instructions.style.visibility = "visible";
        instructionsButton.innerHTML = "Hide Instructions";
    }
    else {
        instructions.style.visibility = "hidden";
        instructionsButton.innerHTML = "How to Play";
    }
};


