var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

const form = document.querySelector("form")
const chatMessages = document.querySelector(".chat-messages")
const input = document.querySelector(".sendMessage")

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

form.addEventListener("submit", sendMessage)
function sendMessage(e) {
    e.preventDefault()
    if(input.value !== "") {
        var messageDiv = document.createElement("div")
        messageDiv.className = "message"

        var avatar= document.createElement("img")
        avatar.src = "images/ash.png"

        var messageInfo = document.createElement("div")
        messageInfo.className = "message-info"

        var userInfo = document.createElement("h4")
        userInfo.innerHTML = "Ashley"

        var messageTimestamp = document.createElement("span")
        messageTimestamp.className = "message-timestamp"

        const date = new Date()
        const year = date.getFullYear()
        const month = String(date.getMonth()).padStart(2, "0")
        const day = String(date.getDay()).padStart(2, "0")

        messageTimestamp.innerHTML = month + "/" + day + "/" + year
        const message = document.createElement("p")
        message.innerHTML= input.value
        input.value = ""

        userInfo.appendChild(messageTimestamp)
        messageInfo.appendChild(userInfo)
        messageInfo.appendChild(message)
        messageDiv.appendChild(avatar)
        messageDiv.appendChild(messageInfo)

        chatMessages.appendChild(message)
        chatMessages.scrollBy(0, 10000)
    }
}   