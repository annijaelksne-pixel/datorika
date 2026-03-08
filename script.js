const button = document.getElementById("btn");
const statusText = document.getElementById("status");

button.addEventListener("click", () => {
  statusText.textContent = "Clicked. JavaScript is running.";
});
