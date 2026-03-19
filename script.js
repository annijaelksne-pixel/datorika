function w3_open() {
  const sidebar = document.getElementById("mySidebar");
  const overlay = document.getElementById("myOverlay");
  if (sidebar) sidebar.style.display = "block";
  if (overlay) overlay.style.display = "block";
}

function w3_close() {
  const sidebar = document.getElementById("mySidebar");
  const overlay = document.getElementById("myOverlay");
  if (sidebar) sidebar.style.display = "none";
  if (overlay) overlay.style.display = "none";
}

function toggleSubmenu(id) {
  const menu = document.getElementById(id);
  if (!menu) return;
  menu.classList.toggle("open");
}

// Demo button (unused on current pages but kept safe)
const button = document.getElementById("btn");
const statusText = document.getElementById("status");
if (button && statusText) {
  button.addEventListener("click", () => {
    statusText.textContent = "Clicked. JavaScript is running.";
  });
}
