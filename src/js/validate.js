document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("mailError");
    const form = document.querySelector(".footer__newsletter");

    emailInput.addEventListener("input", function() {
        if (emailInput.validity.typeMismatch) {
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }
    });

    form.addEventListener("submit", function(event) {
        emailError.style.display = "block";
        event.preventDefault();
    });
});