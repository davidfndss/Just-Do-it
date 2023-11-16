let darkmodeBtn = document.getElementById("darkmodeBtn");
let isDarkMode = false;
let body = document.querySelector("body")

    darkmodeBtn.addEventListener("click", () => {
        if (!isDarkMode) {
            body.classList.add("dark-mode")
            isDarkMode = true;
        } else {
            body.classList.remove("dark-mode")
            isDarkMode = false;
        }
    });
