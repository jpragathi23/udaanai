function sendMessage() {
  const userInput = document.getElementById("userInput").value.trim();
  const chatlogs = document.getElementById("chatlogs");

  if (!userInput) return;

  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + userInput;
  chatlogs.appendChild(userMsg);

  const botReply = document.createElement("div");
  let reply = "";

  const input = userInput.toLowerCase();

  if (input.includes("exam") || input.includes("test")) {
    reply = "You can check the latest exam schedules in the Exams tab of UdaanAI.";
  } else if (input.includes("scholarship")) {
    reply = "There are many scholarships like INSPIRE, Vidyasiri, Pragati. UdaanAI helps you find them!";
  } else if (input.includes("career")) {
    reply = "Explore careers in science, engineering, law, and design. UdaanAI shows you the path!";
  } else if (input.includes("engineering")) {
    reply = "Engineering is a great field for problem-solvers. You can pursue EEE, CSE, Civil, or more!";
  } else if (input.includes("motivation") || input.includes("inspire") || input.includes("confidence")) {
    reply = "Believe in yourself! You are smart, strong, and capable of achieving anything. 💪🦋";
  } else if (input.includes("science")) {
    reply = "Science opens doors to discovery! Fields like space, biotech, and energy are waiting for you.";
  } else if (input.includes("goal") || input.includes("dream")) {
    reply = "Set your goal, make a plan, and never give up. UdaanAI is your guide to success.";
  } else if (input.includes("voice") || input.includes("rights")) {
    reply = "Every girl deserves to speak up and shine. Know your rights, use your voice — with UdaanAI!";
  } else {
    reply = "That's a great question! UdaanAI is always learning. Try asking about careers or scholarships.";
  }

  botReply.textContent = "UdaanAI: " + reply;
  chatlogs.appendChild(botReply);

  document.getElementById("userInput").value = "";
  chatlogs.scrollTop = chatlogs.scrollHeight;
}
