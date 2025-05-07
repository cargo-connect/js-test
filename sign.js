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
    const termsCheckbox = document.getElementById("terms"); // Ensuring checkbox selection

    if (signUpButton) {
        signUpButton.addEventListener("click", async (event) => {
            event.preventDefault(); // Prevent default form submission

            let isValid = true;

            formInputs.forEach(input => {
                input.style.border = input.value.trim() === "" 
                    ? "2px solid red" // Highlight empty fields
                    : "1px solid transparent"; // Reset border if valid
                
                if (input.value.trim() === "") isValid = false;
            });

            if (!termsCheckbox) {
                alert("Checkbox element not found!");
                return;
            }

            if (!termsCheckbox.checked) {
                alert("You must accept the terms and conditions!");
                return;
            }

            if (!isValid) {
                alert("Please fill all required fields!");
                return;
            }

            formContainer.style.display = "none"; // Hide form
            successContainer.style.display = "block"; // Show welcome screen

            // Send verification code via email
            let emailInput = document.getElementById("email");
            if (emailInput && emailInput.value.trim() !== "") {
                let verificationCode = Math.floor(100000 + Math.random() * 900000);

                try {
                    let response = await fetch("/send-email", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: emailInput.value, code: verificationCode })
                    });

                    if (response.ok) {
                        alert("Verification code sent! Check your email.");
                    } else {
                        alert("Failed to send email. Please try again.");
                    }
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        });
    }

    // Auto move to next input box & backspace moves focus to the previous box
    const inputBoxes = document.querySelectorAll(".input-box");

    inputBoxes.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value.length === input.maxLength) {
                let nextInput = inputBoxes[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && input.value === "") {
                let previousInput = inputBoxes[index - 1];
                if (previousInput) {
                    previousInput.focus();
                }
            }
        });
    });
});