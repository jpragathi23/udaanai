// script.js

// Navigation Logic function showSection(sectionId) { const sections = document.querySelectorAll(".section"); sections.forEach((section) => section.classList.add("hidden")); document.getElementById(sectionId).classList.remove("hidden"); }

// Click handlers for main categories document.addEventListener("DOMContentLoaded", function () { const categoryButtons = document.querySelectorAll(".category-btn"); categoryButtons.forEach((btn) => { btn.addEventListener("click", () => { const category = btn.dataset.category; showSection(category + "-gov-private"); }); });

// Click handlers for gov/private options const govPrivateButtons = document.querySelectorAll(".gov-private-btn"); govPrivateButtons.forEach((btn) => { btn.addEventListener("click", () => { const category = btn.dataset.category; const type = btn.dataset.type; showSection(category + "-" + type); }); });

// Click handlers for final 20 subcategory buttons const subCategoryButtons = document.querySelectorAll(".subcategory-btn"); subCategoryButtons.forEach((btn) => { btn.addEventListener("click", () => { const url = btn.dataset.url; window.open(url, "_blank"); }); });

// Optional: Animate Butterfly const butterfly = document.querySelector(".butterfly"); if (butterfly) { let angle = 0; setInterval(() => { angle += 1; butterfly.style.transform = translateY(${Math.sin(angle / 10) * 20}px); }, 30); } });

// Optional: Toggle Dark Mode function toggleDarkMode() { document.body.classList.toggle("dark-mode"); }

