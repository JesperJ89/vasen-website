const intro = document.getElementById("intro");
const menu = document.getElementById("menu");
const title = document.getElementById("title");

const buttons = document.querySelectorAll("nav button");
const panels = document.querySelectorAll(".panel");


// ===== ENTER SITE =====

title.addEventListener("click", () => {

    intro.classList.add("fade-out");

    setTimeout(() => {

        intro.style.display = "none";

        menu.classList.add("show");

    }, 1000);

});


// ===== MENU =====

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const target = button.dataset.section;

        panels.forEach(panel => {

            panel.classList.remove("active");

        });

        document.getElementById(target).classList.add("active");

    });

});
