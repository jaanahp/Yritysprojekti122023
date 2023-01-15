// Variables for show gallery content -buttons
let realistateBtn = document.getElementById("realistateBtn");
let solarBtn = document.getElementById("solarBtn");
let powerBtn = document.getElementById("powerBtn");
let mechaBtn = document.getElementById("mechaBtn");

//Variables for gallery content
let realistateInfo = document.getElementById("realistateInfo");
let solarInfo = document.getElementById("solarInfo");
let powerInfo = document.getElementById("powerInfo");
let mechaInfo = document.getElementById("mechaInfo");

//Variable for show/hide gallery content
let showRealistateInfo = false;
let showSolarInfo = false;
let showPowerInfo = false;
let showMechaInfo = false;

//Variables for navbar functions
let hideNavbar = document.getElementById("hide")
let showNav = false;

//Eventlisteners
realistateBtn.addEventListener("click", function() {
    showRealistateInfo = !showRealistateInfo;
    button = "realistate";
    showInfo(button, showRealistateInfo);
});

solarBtn.addEventListener("click", function() {
    showSolarInfo = !showSolarInfo;
    button = "solar";
    showInfo(button, showSolarInfo);
});

powerBtn.addEventListener("click", function() {
    showPowerInfo = !showPowerInfo;
    button = "power";
    showInfo(button, showPowerInfo);
});

mechaBtn.addEventListener("click", function() {
    showMechaInfo = !showMechaInfo;
    button = "mecha";
    showInfo(button, showMechaInfo);
});

//Functions

function showInfo(button, show) {
    clickedbutton = button;
    show = show;
    if (button === "realistate" && show === true) {
        realistateInfo.style.display = "initial";
        realistateBtn.innerHTML = "Piilota";
    }
    else if (button === "realistate" && show === false) {
        realistateInfo.style.display ="none";
        realistateBtn.innerHTML = "Lue lisää"
    }
    else if(button === "solar" && show === true) {
        solarInfo.style.display = "initial";
        solarBtn.innerHTML = "Piilota";
    }
    else if (button === "solar" && show === false) {
        solarInfo.style.display = "none";
        solarBtn.innerHTML = "Lue lisää"
    }
    else if(button === "power" && show === true) {
        powerInfo.style.display = "initial";
        powerBtn.innerHTML = "Piilota";
    }
    else if (button === "power" && show === false) {
        powerInfo.style.display = "none";
        powerBtn.innerHTML = "Lue lisää"
    }
    else if(button === "mecha" && show === true) {
        mechaInfo.style.display = "initial";
        mechaBtn.innerHTML = "Piilota";
    }
    else if (button === "mecha" && show === false) {
        mechaInfo.style.display = "none";
        mechaBtn.innerHTML = "Lue lisää"
    }

};


function showNavbar() {
    showNav = !showNav;
    console.log("ennen" + showNav)
    if (showNav === true) {
        hideNavbar.style.display = "initial";
        console.log("if" + showNav)
    }
    else {
        hideNavbar.style.display = "none";
        console.log("else" + showNav)
    }
};

