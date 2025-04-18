function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");
  if (input === "7F9-XR2") {
    window.location.href = "archive.html";
  } else {
    error.textContent = "Falscher Zugangscode.";
  }
}

function unlockFile() {
  document.getElementById("unlockPrompt").style.display = "block";
}

function validateCode() {
  const code = document.getElementById("unlockCode").value.trim().toLowerCase();
  const error = document.getElementById("unlockError");
  if (code === "zeitnetz 3.4" || code === "zeitraster 3.4") {
    document.getElementById("unlockPrompt").style.display = "none";
    document.getElementById("secretLink").style.display = "block";
  } else {
    error.textContent = "Ungültiger Code.";
  }
}