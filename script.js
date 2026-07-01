const title = document.getElementById("title");
const intro = document.getElementById("intro");
const menu = document.getElementById("menu");

title.addEventListener("click", () => {

    // Tona ut titeln
    title.style.opacity = "0";

    // Vänta tills animationen är klar
    setTimeout(() => {

        // Dölj första sidan
        intro.style.display = "none";

        // Visa menyn
        menu.classList.remove("hidden");

    }, 800);

});
