// script.js

function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
}

function sendMessage() {
  const inputField = document.getElementById("user-input");
  const message = inputField.value.trim();
  if (!message) return;

  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += `<div class="user-message">You: ${message}</div>`;

  const response = getChatbotResponse(message);
  chatLog.innerHTML += `<div class="bot-message">UdaanAI: ${response}</div>`;
  inputField.value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getChatbotResponse(message) {
  message = message.toLowerCase();

  if (message.includes("5")) {
    return "For 5th class, explore Navodaya, Sainik School, and Pratibha Scholarships. Docs: Aadhar, school ID, caste & income certs.";
  }
  if (message.includes("6")) {
    return "6th class students can apply for Navodaya, Sainik School, and state-level schemes.";
  }
  if (message.includes("7")) {
    return "For 7th, explore scholarships like Sainik School entrance prep and Navodaya updates.";
  }
  if (message.includes("8")) {
    return "8th class: look into pre-matric scholarships and Sainik/Navodaya options.";
  }
  if (message.includes("9")) {
    return "For 9th, explore NTSE (Level 1), Olympiads, and pre-matric scholarships.";
  }
  if (message.includes("10")) {
    return "10th class: NTSE, OMPLAI, pre-matric, and state-level merit scholarships. Documents: Aadhar, school ID, marksheet.";
  }
  if (message.includes("11")) {
    return "11th: Apply for post-matric scholarships, Inspire, and OMPLAI.";
  }
  if (message.includes("12")) {
    return "12th: Explore Inspire, JEE-based scholarships, and post-matric aid.";
  }
  if (message.includes("engineering") || message.includes("btech")) {
    return "Engineering students: Apply for AICTE, GATE, internships, and national-level private scholarships.";
  }
  if (message.includes("degree") || message.includes("b.sc") || message.includes("ba")) {
    return "Degree students can explore UGC scholarships, DigiLocker documents, and internships.";
  }
  if (message.includes("msc") || message.includes("m.sc")) {
    return "M.Sc students: Look into DST Inspire, CSIR-JRF, and PG scholarships.";
  }
  if (message.includes("mtech") || message.includes("m.tech")) {
    return "M.Tech: GATE scholarships, internships at DRDO/ISRO, and research fellowships available.";
  }
  if (message.includes("phd")) {
    return "PhD: UGC NET, CSIR-JRF, DST fellowships. Research-based funding is key.";
  }

  if (message.includes("documents")) {
    return "Common docs: Aadhar, school/college ID, caste & income cert, marksheet, bank passbook, photo.";
  }

  if (message.includes("how to apply")) {
    return "Visit official portals, fill forms, upload docs, submit. Track via application number.";
  }

  return "Sorry, I couldn’t understand. Try typing your class (e.g., '10th') or ask about 'documents' or 'how to apply'.";
}
