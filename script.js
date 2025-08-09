document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "SOS" && password === "Kingpin") {
    alert("Login successful! Redirecting...");
    window.location.href = "signals.html"; // Change this later
  } else {
    alert("Invalid username or password!");
  }
});
