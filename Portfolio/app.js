console.log("JS Connected");

/* SHOW / HIDE ABOUT */
function toggleAbout() {
  const about = document.getElementById("about");
  about.style.display =
    about.style.display === "none" ? "flex" : "none";
}

/* IMAGE SLIDER */
const images = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg"];
let index = 0;

function updateImage() {
  document.getElementById("sliderImage").src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  updateImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  updateImage();
}

/* TODO LIST */
function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()">❌</button>`;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

/* FORM VALIDATION */
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;
  clearErrors();

  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  if (name.length < 3) {
    showError("nameError", "Name must be at least 3 characters");
    valid = false;
  }

  if (!email.includes("@")) {
    showError("emailError", "Invalid email");
    valid = false;
  }

  if (message.length < 10) {
    showError("messageError", "Message too short");
    valid = false;
  }

  if (valid) {
    alert("Message sent successfully!");
    this.reset();
  }
});

function showError(id, msg) {
  document.getElementById(id).innerText = msg;
}

function clearErrors() {
  ["nameError", "emailError", "messageError"].forEach(
    (id) => (document.getElementById(id).innerText = "")
  );
};

/* DARK MODE */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};
