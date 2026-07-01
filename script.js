const intro = document.getElementById("intro");
const menu = document.getElementById("menu");
const title = document.getElementById("title");

const buttons = document.querySelectorAll("nav button");
const panels = document.querySelectorAll(".panel");


// Dölj menyn från början
menu.style.display = "none";


// Klick på VÄSEN
title.addEventListener("click", () => {

    intro.classList.add("fade-out");

    setTimeout(() => {

        intro.style.display = "none";
        menu.style.display = "flex";

    }, 1000);

});


// Dölj alla paneler
function hidePanels() {

    panels.forEach(panel => {

        panel.style.display = "none";

    });

}


// Visa rätt panel
buttons.forEach(button => {

    button.addEventListener("click", () => {

        hidePanels();

        const target = document.getElementById(button.dataset.target);

        target.style.display = "block";

    });

});


// Ingen panel visas när sidan öppnas
hidePanels();
