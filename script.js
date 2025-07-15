// Button Links: Update with your URLs
const links = {
  governmentSchemes: "https://www.mygov.in/schemes/",
  privateSchemes: "https://www.india.gov.in/spotlight/schemes-programmes",
  governmentScholarships: "https://scholarships.gov.in/",
  privateScholarships: "https://buddy4study.com/",
  governmentExams: "https://www.ncs.gov.in/",
  privateExams: "https://www.shiksha.com/exams/",
  governmentInternships: "https://internship.aicte-india.org/",
  privateInternships: "https://internshala.com/",
  digitalLocker: "https://www.digilocker.gov.in/",
  aadhar: "https://uidai.gov.in/",
  nptel: "https://onlinecourses.nptel.ac.in/",
  mygov: "https://www.mygov.in/",
  educationNews: "https://timesofindia.indiatimes.com/education"
};

// Link buttons by IDs
document.getElementById("govSchemes").onclick = () => window.open(links.governmentSchemes, "_blank");
document.getElementById("privateSchemes").onclick = () => window.open(links.privateSchemes, "_blank");
document.getElementById("govScholarships").onclick = () => window.open(links.governmentScholarships, "_blank");
document.getElementById("privateScholarships").onclick = () => window.open(links.privateScholarships, "_blank");
document.getElementById("govExams").onclick = () => window.open(links.governmentExams, "_blank");
document.getElementById("privateExams").onclick = () => window.open(links.privateExams, "_blank");
document.getElementById("govInternships").onclick = () => window.open(links.governmentInternships, "_blank");
document.getElementById("privateInternships").onclick = () => window.open(links.privateInternships, "_blank");
document.getElementById("digilocker").onclick = () => window.open(links.digitalLocker, "_blank");
document.getElementById("aadhar").onclick = () => window.open(links.aadhar, "_blank");
document.getElementById("nptel").onclick = () => window.open(links.nptel, "_blank");
document.getElementById("mygov").onclick = () => window.open(links.mygov, "_blank");
document.getElementById("educationNews").onclick = () => window.open(links.educationNews, "_blank");

// Chatbot Logic
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");
  const message = input.value.trim();

  if (message === "") return;

  // Append user message
  chatlog.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  // Basic chatbot response
  let response = "Sorry, I didn’t understand. Please try again!";
  const msg = message.toLowerCase();

  if (msg.includes("scheme")) response = "You can explore schemes from both Government and Private sources using the buttons above.";
  else if (msg.includes("scholarship")) response = "Check out scholarship opportunities under both Government and Private sections.";
  else if (msg.includes("exam")) response = "Visit Government & Private Exams for info on upcoming exams.";
  else if (msg.includes("internship")) response = "Internships are available on AICTE portal and Internshala.";
  else if (msg.includes("documents") || msg.includes("digilocker")) response = "You can store and access your important documents securely on DigiLocker.";
  else if (msg.includes("aadhar")) response = "Visit UIDAI official website for Aadhaar-related services.";
  else if (msg.includes("news")) response = "Stay informed with the latest education news linked above.";
  else if (msg.includes("hello") || msg.includes("hi")) response = "Hello! I'm your UdaanAI Assistant. Ask me anything about education, schemes, or internships.";

  // Append bot response
  chatlog.innerHTML += `<div><strong>UdaanAI:</strong> ${response}</div>`;

  input.value = "";
  chatlog.scrollTop = chatlog.scrollHeight;
  }
