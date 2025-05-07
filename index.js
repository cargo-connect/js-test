const images = [
    { url: "images/hero-motorcycle.jpg", text: "Fast, reliable logistics at your fingertips" },
    { url: "images/hero-trucks.jpg", text: "Streamlined shipping solutions for your business" },
    { url: "images/hero-woman.jpg", text: "Connecting you with reliable carriers" },
    { url: "images/hero-phone.jpg", text: "Track your deliveries in real-time" }
];

let index = 0;
const background = document.querySelector(".one"); // Target `.one` div for background updates
const textElement = document.querySelector(".tent p"); // Target text inside `.tent`
const dots = document.querySelectorAll(".dot"); // Select all pagination dots

function changeBackground() {
    // Update background and text
    background.style.background = `url(${images[index].url}) no-repeat center/cover`;
    textElement.textContent = images[index].text;

    // Update pagination indicators
    dots.forEach(dot => dot.classList.remove("active")); // Remove `active` class from all dots
    dots[index].classList.add("active"); // Add `active` class to current dot

    index = (index + 1) % images.length;
}

// Set initial background immediately
changeBackground();

// Rotate image every 4 seconds
setInterval(changeBackground, 4000);

// Allow manual selection through pagination dots
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i; // Update index
        changeBackground(); // Apply background change instantly
    });
});