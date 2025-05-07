document.addEventListener("DOMContentLoaded", () => {
    // Password visibility toggle
    const passwordField = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    if (passwordField && togglePassword) {
        togglePassword.addEventListener("click", () => {
            passwordField.type = passwordField.type === "password" ? "text" : "password";
            togglePassword.innerHTML = passwordField.type === "password"
                ? "&#128065;" // Normal eye icon
                : '<i class="fa-solid fa-eye-slash"></i>'; // Eye with slash
        });
    }

    // Basic form validation
    const emailInput = document.getElementById("email");
    const loginButton = document.querySelector(".gin");

    if (loginButton) {
        loginButton.addEventListener("click", (event) => {
            let isValid = true;

            if (!emailInput.value.trim()) {
                isValid = false;
                emailInput.style.border = "2px solid red"; // Highlight empty email field
            } else {
                emailInput.style.border = "1px solid #ccc"; // Reset border if valid
            }

            if (!passwordField.value.trim()) {
                isValid = false;
                passwordField.style.border = "2px solid red"; // Highlight empty password field
            } else {
                passwordField.style.border = "1px solid #ccc"; // Reset border if valid
            }

            if (!isValid) {
                event.preventDefault(); // Prevent login if fields are empty
                alert("Please fill in all required fields!");
            }
        });
    }
});