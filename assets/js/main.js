// Dark mode toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
localStorage.setItem("dark", document.body.classList.contains("dark-mode"));
});


// Persist dark mode
if (localStorage.getItem("dark") === "true") {
document.body.classList.add("dark-mode");
}
