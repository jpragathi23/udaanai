// Open page from button
function openPage(page) {
  window.location.href = page;
}

// Basic chatbot behavior
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");
  const userText = input.value.trim();

  if (!userText) return;

  const userMessage = `<p><strong>You:</strong> ${userText}</p>`;
  chatlog.innerHTML += userMessage;

  let botReply = getBotReply(userText);
  const botMessage = `<p><strong>Bot:</strong> ${botReply}</p>`;
  chatlog.innerHTML += botMessage;

  input.value = "";
  chatlog.scrollTop = chatlog.scrollHeight;
}

// Simple bot responses
function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (msg.includes("affirmation")) {
    return "You are strong, capable, and enough. Keep shining!";
  } else if (msg.includes("chapter")) {
    return "We have amazing chapters on confidence, safety, health, and more!";
  } else {
    return "Sorry, I’m still learning! Try asking something else.";
  }
}

// Toggle chatbot visibility (optional if needed)
document.querySelectorAll(".button-grid button").forEach(btn => {
  btn.addEventListener("click", () => {
    const chatbox = document.getElementById("chatbotSection");
    chatbox.classList.remove("hidden");
  });
});