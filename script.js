let currentCategory = "";

const openCategory = (category) => {
  currentCategory = category;
  document.querySelector('.category-grid').classList.add('hidden');
  document.getElementById('selected-category-name').innerText = `Select Type - ${capitalize(category)}`;
  document.getElementById('subcategories').classList.remove('hidden');
};

const openGovt = () => loadLinks(`${currentCategory}-govt`);
const openPrivate = () => loadLinks(`${currentCategory}-private`);

const goBack = () => {
  document.getElementById('details-page').classList.add('hidden');
  document.getElementById('subcategories').classList.add('hidden');
  document.querySelector('.category-grid').classList.remove('hidden');
};

const openChatbot = () => {
  alert("Chatbot Assistant Coming Soon!");
};

function loadLinks(key) {
  const links = data[key] || [];
  document.getElementById('links-container').innerHTML = links.map(link =>
    `<button onclick="window.open('${link.url}', '_blank')">${link.label}</button>`
  ).join('');
  document.getElementById('details-heading').innerText = capitalize(currentCategory) + " - " + (key.includes("govt") ? "Government" : "Private");
  document.getElementById('subcategories').classList.add('hidden');
  document.getElementById('details-page').classList.remove('hidden');
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Dummy data - Add your 20 links per category here
const data = {
  "internships-govt": Array.from({ length: 20 }, (_, i) => ({
    label: `Gov Internship ${i + 1}`,
    url: `https://example.com/internship-gov-${i + 1}`
  })),
  "internships-private": Array.from({ length: 20 }, (_, i) => ({
    label: `Private Internship ${i + 1}`,
    url: `https://example.com/internship-private-${i + 1}`
  })),
  "jobs-govt": Array.from({ length: 20 }, (_, i) => ({
    label: `Gov Job ${i + 1}`,
    url: `https://example.com/job-gov-${i + 1}`
  })),
  "jobs-private": Array.from({ length: 20 }, (_, i) => ({
    label: `Private Job ${i + 1}`,
    url: `https://example.com/job-private-${i + 1}`
  }))
  // Add rest like exams-govt, exams-private, etc.
};

