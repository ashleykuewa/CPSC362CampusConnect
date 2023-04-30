var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height")
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-mode");

    if(localStorage.getItem("mode") == "light") {
        localStorage.setItem("mode", "dark");
    } 
    else {
        localStorage.setItem("mode", "light");
    }
}

if(localStorage.getItem("mode") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-mode");
}
else if(localStorage.getItem("mode") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-mode");
}
else {
    localStorage.setItem("mode", "light");
}
