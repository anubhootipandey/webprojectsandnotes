document.addEventListener("DOMContentLoaded", function () {
    const chatBody = document.getElementById("chat-body");
    const userInput = document.getElementById("user-input");

    function sendMessage() {
        const message = userInput.value.trim();
        
        if (message === "") {
            return;
        }

        appendMessage("You", message);
        userInput.value = "";

        // Simulate a reply from the chatbot after a short delay
        setTimeout(() => {
            const reply = "I'm just a simple chatbot. How can I help you?";
            appendMessage("Chatbot", reply);
        }, 500);
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBody.appendChild(messageElement);

        // Scroll to the bottom of the chat window
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Expose sendMessage function globally for button click
    window.sendMessage = sendMessage;
});
