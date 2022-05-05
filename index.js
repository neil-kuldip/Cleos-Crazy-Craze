// Main index file for Cleo's Crazy Craze
// Last updated: 5/5/2022

let homepage_button = document.getElementById("homepage_to_level1");
homepage_button.onclick = () => {
    window.location.href="level1.html";
    console.log("clicked");
};