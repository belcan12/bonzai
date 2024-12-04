// Get the elements
const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav");
const navClose = document.getElementById("nav-close");

// Toggle navigation menu visibility
navBtn.addEventListener("click", () => {
    nav.classList.add("showNav");
});

// Close navigation menu when clicking the close button
navClose.addEventListener("click", () => {
    nav.classList.remove("showNav");
});
