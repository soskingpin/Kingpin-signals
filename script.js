document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "SOS" && password === "Kingpin") {
    alert("Login successful! Redirecting...");
    window.location.href = "signals.html"; // Replace with your signals page
  } else {
    alert("Wrong username or password!");
  }
});
