
var chatRowTemplate = document.querySelector("#chat-row");
var chatContainer = document.querySelector("#chat-container");

function logMessage(user, message) {
    const clone = chatRowTemplate.content.cloneNode(true);
    clone.querySelector(".chat-timestamp").innerText = new Date().toLocaleTimeString();
    clone.querySelector(".chatters-username").innerText = user;
    clone.querySelector(".chatters-message").innerText = message;

    chatContainer.appendChild(clone);
}

ComfyJS.onChat = (user, message, flags, self, extra) => {
    logMessage(user, message);
}
ComfyJS.Init("codeacula");
