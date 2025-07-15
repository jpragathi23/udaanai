function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const chatlogs = document.getElementById("chatlogs");

  if (!userInput) return;

  // Show user message
  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + userInput;
  chatlogs.appendChild(userMsg);

  // Simple bot reply logic
  const botReply = document.createElement("div");
  let reply = "";

  if (userInput.toLowerCase().includes("exam")) {
    reply = "You can check exam dates on UdaanAI's exam info page.";
  } else if (userInput.toLowerCase().includes("scholarship")) {
    reply = "There are many scholarships for girls and science students. Try Inspire, Vidyasiri, and Pragati.";
  } else {
    reply = "Thank you for your question! I'm learning more every day to help you better.";
  }

  botReply.textContent = "UdaanAI: " + reply;
  chatlogs.appendChild(botReply);

  document.getElementById("userInput").value = "";
  chatlogs.scrollTop = chatlogs.scrollHeight;
}
