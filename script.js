document.addEventListener("DOMContentLoaded", () => {

    const title = document.getElementById("title");

    title.addEventListener("click", () => {

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = "menu.html";

        }, 1000);

    });

});
