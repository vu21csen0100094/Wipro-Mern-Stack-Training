// Handle Login
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const storedUser = localStorage.getItem("username");
      const storedPass = localStorage.getItem("password");

      if (username === storedUser && password === storedPass) {
        alert("✅ Login Successful!");
        window.location.href = "index.html"; // redirect to your main portal
      } else {
        alert("❌ Invalid username or password!");
      }
    });
  }

  // Handle Register
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const newUsername = document.getElementById("newUsername").value;
      const newPassword = document.getElementById("newPassword").value;

      localStorage.setItem("username", newUsername);
      localStorage.setItem("password", newPassword);

      alert("🎉 Registration Successful! You can now login.");
      window.location.href = "login.html";
    });
  }
});
