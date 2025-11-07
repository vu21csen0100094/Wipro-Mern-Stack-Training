// Store registered users and activities
let users = [];
let loggedInUser = null;

const activities = [
  { id: 1, activity: "Create project file with tables between 12 to 19", subject: "Maths" },
  { id: 2, activity: "Complete science diagram for ecosystems", subject: "Science" },
  { id: 3, activity: "Write English essay on 'My School'", subject: "English" },
  { id: 4, activity: "Practice algebra exercises 1-10", subject: "Maths" },
];

// SECTION DISPLAY FUNCTION
function showSection(id) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((s) => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// REGISTER FUNCTION
function handleRegister() {
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  const msg = document.getElementById("reg-msg");

  if (!username || !password) {
    msg.textContent = "All fields are required!";
    msg.style.color = "red";
    return;
  }

  users.push({ username, password });
  msg.textContent = "Registration successful! You can now login.";
  msg.style.color = "green";
  document.getElementById("reg-username").value = "";
  document.getElementById("reg-password").value = "";
}

// LOGIN FUNCTION
function handleLogin() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const msg = document.getElementById("login-msg");

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    loggedInUser = username;
    document.getElementById("welcome-user").textContent = username;
    showSection("home-page");
    document.getElementById("activity-btn").classList.remove("hidden");
    msg.textContent = "";
  } else {
    msg.textContent = "Invalid Credentials!";
    msg.style.color = "red";
  }
}

// FILTER ACTIVITIES
function filterActivities() {
  const subject = document.getElementById("subject-select").value;
  const list = document.getElementById("activity-list");
  list.innerHTML = "";

  if (!subject) return;

  const filtered = activities.filter(act => act.subject === subject);
  filtered.forEach(act => {
    const li = document.createElement("li");
    li.textContent = `${act.subject}: ${act.activity}`;
    list.appendChild(li);
  });
}
