document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitBtn = document.querySelector(".submit-btn");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Your message has been sent!");
        form.reset();
    });
});
