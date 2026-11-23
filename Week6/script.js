function setChinchillaGreeting() {
  const banner = document.getElementById("greeting-banner");
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    banner.textContent = "Good morning! Chinchillas are winding down from their dawn playtime.";
  } else if (currentHour < 18) {
    banner.textContent = "Good afternoon! Shhh... most chinchillas are fast asleep right now.";
  } else {
    banner.textContent = "Good evening! It's dusk—time for chinchilla zoomies and dust baths!";
  }
}

window.addEventListener("DOMContentLoaded", setChinchillaGreeting);

const themeToggleBtn = document.getElementById("theme-toggle-btn");

function toggleNocturnalMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "Switch to Daytime Mode";
  } else {
    themeToggleBtn.textContent = "Switch to Nocturnal Mode";
  }
}

themeToggleBtn.addEventListener("click", toggleNocturnalMode);

const careCards = document.querySelectorAll(".care-card");

function highlightCard(event) {
  event.currentTarget.classList.add("highlighted");
}

function unhighlightCard(event) {
  event.currentTarget.classList.remove("highlighted");
}

careCards.forEach(function (card) {
  card.addEventListener("mouseenter", highlightCard);
  card.addEventListener("mouseleave", unhighlightCard);
});

const toggleGuideBtn = document.getElementById("toggle-guide-btn");
const dustGuide = document.getElementById("dust-guide");

function toggleDustGuide() {
  dustGuide.classList.toggle("visible");

  if (dustGuide.classList.contains("visible")) {
    toggleGuideBtn.textContent = "Hide Dust Bath Guide";
  } else {
    toggleGuideBtn.textContent = "Show Dust Bath Guide";
  }
}

toggleGuideBtn.addEventListener("click", toggleDustGuide);

const taskInput = document.getElementById("task-input");
const inputHint = document.getElementById("input-hint");
const todoForm = document.getElementById("todo-form");
const taskList = document.getElementById("task-list");

function handleInputFocus() {
  taskInput.classList.add("focused-input");
  inputHint.textContent = "Type your chinchilla chore and press Enter or click Add Task!";
}

function handleInputBlur() {
  taskInput.classList.remove("focused-input");
  inputHint.textContent = "Click the text box to add a new reminder.";
}

function addNewTask(event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const newListItem = document.createElement("li");
    newListItem.textContent = taskText;
    taskList.appendChild(newListItem);
    taskInput.value = "";
  }
}

taskInput.addEventListener("focus", handleInputFocus);
taskInput.addEventListener("blur", handleInputBlur);
todoForm.addEventListener("submit", addNewTask);