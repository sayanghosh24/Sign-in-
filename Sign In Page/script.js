document.addEventListener("DOMContentLoaded", () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    const sign_in_btn2 = document.querySelector("#sign-in-btn2");

    // Function to switch to sign-up mode
    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });

    // Function to switch to sign-in mode
    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });

    // Function for the "Already have an account? Sign in" link
    sign_in_btn2.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        container.classList.remove("sign-up-mode");
    });
});
