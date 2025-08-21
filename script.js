/**
 * Fichier JavaScript pour gérer les interactions de la page d'accueil.
 * Il inclut :
 * 1. La gestion du défilement pour le menu principal et le bouton de retour en haut.
 * 2. La logique du menu "hamburger" pour les appareils mobiles.
 * 3. Les animations des éléments qui apparaissent au défilement.
 * 4. La mise en évidence du lien de navigation actif en fonction de la section visible.
 */

document.addEventListener("DOMContentLoaded", () => {
    // --- Éléments du DOM ---
    const mainHeader = document.querySelector(".main-header");
    const navLinks = document.querySelectorAll(".nav-link");
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");
    const sections = document.querySelectorAll(".section");
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    // --- Gestionnaire d'événement de défilement (scroll) ---
    window.addEventListener("scroll", () => {
        // Ajoute ou retire la classe 'scrolled' du header
        if (window.scrollY > 50) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }

        // Affiche ou masque le bouton "scroll to top"
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }

        // Gère la classe 'is-active' pour les liens de navigation
        updateActiveLink();
    });

    // --- Logique du menu "hamburger" ---
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        navBar.classList.toggle("is-open");
    });

    // Ferme le menu mobile lors du clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("is-active");
            navBar.classList.remove("is-open");
        });
    });

    // --- Bouton "Retour en haut" ---
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- Animations au défilement (IntersectionObserver) ---
    const observerOptions = {
        root: null, // L'élément racine est le viewport
        rootMargin: "0px",
        threshold: 0.1 // 10% de l'élément doit être visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // Arrête d'observer l'élément une fois qu'il est animé
            }
        });
    }, observerOptions);

    // Initialise l'observation des éléments animés
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- Mise en évidence du lien de navigation actif ---
    const updateActiveLink = () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - mainHeader.offsetHeight;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("is-active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("is-active");
            }
        });
    };
});
