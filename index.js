// Main index file for Cleo's Crazy Craze
// Last updated: 5/8/2022

let homepage_button = document.getElementById("homepage_to_level1");
homepage_button.onclick = () => {
    window.location.href="level1.html";
    console.log("Sent to level 1");
};

let instructionsButton = document.getElementById("info");
let infoTitle = document.getElementsByClassName("info-text-title")[0];
let infoText = document.getElementsByClassName("info-text-description")[0];

instructionsButton.onclick = () => {
    if (infoTitle.innerHTML === "AGENDA") {
        infoTitle.innerHTML = "INSTRUCTIONS";
        infoText.innerHTML = "To catch Cleo, you will point and click on wherever you think Cleo is on the image"
        + "<br/> <br/>" +
        "Remember, Cleo is smart, so you have 3 tries and an increasing amount of time per level to find Cleo before it's game over"
        + "<br/> <br/>" +
        "The Professor is counting on you dear Seeker, begin when ready";
        instructionsButton.innerHTML = "Hide Instructions";
    }
    else {
        infoTitle.innerHTML = "AGENDA";
        infoText.innerHTML = "Over the ages, the rare and mysterious Cleo has managed to quickly camoflague itself to any background it chooses"
        + "<br/> <br/>" +
        "You, the seeker, must find Cleo in each background for further study";
        instructionsButton.innerHTML = "How to Play";
    }
};


