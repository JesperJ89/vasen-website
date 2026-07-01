const intro = document.getElementById("intro");
const menu = document.getElementById("menu");
const title = document.getElementById("title");

const buttons = document.querySelectorAll("nav button");
const sections = document.querySelectorAll(".section");

// Dölj menyn från början
menu.style.opacity = "0";
menu.style.pointerEvents = "none";

// Dölj alla informationsrutor
sections.forEach(section => {
    section.style.display = "none";
});

// Klick på VÄSEN
title.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.pointerEvents = "none";

        menu.style.opacity = "1";
        menu.style.pointerEvents = "auto";

    }, 900);

});

// Klick på menyval
buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Dölj alla sektioner
        sections.forEach(section => {
            section.style.display = "none";
        });

        // Visa vald sektion
        const panel = document.getElementById(button.dataset.panel);

        if(panel){
            panel.style.display = "block";
        }

    });

});
