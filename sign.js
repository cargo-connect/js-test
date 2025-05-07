document.addEventListener("DOMContentLoaded", () => {
    // Password visibility toggle
    const passwordField = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    if (passwordField && togglePassword) {
        togglePassword.addEventListener("click", () => {
            passwordField.type = passwordField.type === "password" ? "text" : "password";
            togglePassword.innerHTML = passwordField.type === "password"
                ? '<i class="fa-solid fa-eye"></i>' // Open eye
                : '<i class="fa-solid fa-eye-slash"></i>'; // Closed eye
        });
    }

    // Form validation & switching divs
    const formContainer = document.querySelector(".main");
    const successContainer = document.querySelector(".welcome");
    const formInputs = document.querySelectorAll("input[required]");
    const signUpButton = document.querySelector(".up");

    if (signUpButton) {
        signUpButton.addEventListener("click", (event) => {
            let isValid = true;

            formInputs.forEach(input => {
                input.style.border = input.value.trim() === "" 
                    ? "2px solid red" // Highlight empty fields
                    : "1px solid transparent"; // Reset border if valid
                
                if (input.value.trim() === "") isValid = false;
            });

            if (isValid) {
                formContainer.style.display = "none"; // Hide form
                successContainer.style.display = "block"; // Show welcome screen
            } else {
                event.preventDefault(); // Prevent switching if fields are empty
                alert("Please fill all required fields!");
            }
        });
    }
});