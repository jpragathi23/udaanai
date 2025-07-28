// ================== chatbot.js ==================

const chatIcon = document.getElementById("chat-icon");
const chatbot = document.getElementById("chatbot");
const chatHeader = document.getElementById("chat-header");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Toggle chatbot visibility
chatIcon.addEventListener("click", () => {
  chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
});

// Chatbot logic
sendBtn.addEventListener("click", () => {
  const userMsg = chatInput.value.trim();
  if (userMsg === "") return;

  appendMessage("You", userMsg, "user");
  generateResponse(userMsg);
  chatInput.value = "";
});

function appendMessage(sender, text, type) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${type}`;
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function generateResponse(input) {
  let response = "";

  input = input.toLowerCase();

  if (input.includes("5th")) {
    response = `Exams: Navodaya, Sainik<br>Scholarships: PMSS, NMMS<br>Schemes: Mid-day Meal, Free Textbook`;
  } else if (input.includes("10th")) {
    response = `Exams: NTSE, OMPLAI<br>Scholarships: Pre-Matric, Inspire<br>Schemes: Vidya Lakshmi, AICTE Saksham`;
  } else if (input.includes("12th") || input.includes("inter")) {
    response = `Exams: JEE, NEET, NDA<br>Scholarships: Inspire, Central Sector<br>Schemes: Digital India Internship`;
  } else if (input.includes("btech") || input.includes("engineering")) {
    response = `Exams: GATE, ESE<br>Scholarships: AICTE Pragati/Saksham<br>Internships: MyGov, AICTE, DRDO`;
  } else if (input.includes("phd")) {
    response = `Scholarships: UGC NET JRF, CSIR
Schemes: MANF, DST Inspire Fellowship`;
  } else if (input.includes("apply") || input.includes("help")) {
    response = `To apply, visit the official website linked on the category page. Make sure you have necessary documents like Aadhaar, Income certificate, Caste certificate, etc.`;
  } else {
    response = `Please type your class (e.g., "10th", "BTech", "PhD") or ask about scholarships, exams, or schemes.`;
  }

  appendMessage("UdaanAI", response, "bot");
}
