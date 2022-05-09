let redirectButton = document.getElementById("go-home");

redirectButton.onclick = () => {
    window.location.href = "index.html";
    console.log("User went to homepage");
};