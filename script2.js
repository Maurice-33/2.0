document.addEventListener('DOMContentLoaded', function () {
    // Écouteur d'événement pour le bouton du menu hamburger
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // navMenu.classList.toggle('active');
            // Logique pour afficher/masquer le menu mobile
        });
    }

    // Effet d'animation à l'entrée (intersection observer)
    const sections = document.querySelectorAll('.section, .hero-content');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Déclenche l'animation lorsque 20% de l'élément est visible
    });

    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });

    // Effet de défilement pour le bouton "Découvrir"
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajustement pour le header fixe
                    behavior: 'smooth'
                });
            }
        });
    }

    // Mettre à jour le nombre d'abonnés (simulation)
    const subscriberCount = document.getElementById('subscriber-count');
    if (subscriberCount) {
        // En conditions réelles, vous récupéreriez cette donnée via une API
        setTimeout(() => {
            subscriberCount.textContent = '10K abonnés';
        }, 2000);
    }
});