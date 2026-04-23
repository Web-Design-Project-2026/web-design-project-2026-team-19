document.addEventListener("DOMContentLoaded", () => {

  /* REGISTER */
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];

      const exists = users.find(u => u.email === email);

      if (exists) {
        alert("Account already exists ❌");
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      alert("Account created ✅");

      window.location.href = "login.html";
    });
  }

  /* LOGIN */
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        alert("Invalid login ❌");
        return;
      }

      localStorage.setItem("loggedInUser", JSON.stringify(user));

      alert("Login successful ✅");

      window.location.href = "index.html";
    });
  }

});