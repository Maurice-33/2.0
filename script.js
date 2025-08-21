// Fichier script.js
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger-menu");
    const nav = document.getElementById("main-nav");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        nav.classList.toggle("is-open");
    });

    // Fermer menu après clic sur un lien
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("is-active");
            nav.classList.remove("is-open");
        });
    });
});
