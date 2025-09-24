// Animation de défilement
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');

            // Animer les barres de progression
            const progressBars = entry.target.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// Navigation fluide
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Formulaire interactif
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Animation de soumission
    gsap.to('.form-container', {
        duration: 0.5,
        scale: 0.98,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
    });

    setTimeout(() => {
        alert('Message envoyé avec succès ! 🚀');
        document.getElementById('contactForm').reset();
    }, 1000);
});

// Parallaxe au scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-content');
    const speed = scrolled * 0.5;

    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }

});

// Effets de boutons interactifs
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            duration: 0.3,
            scale: 1.05,
            y: -3,
            ease: 'power2.out'
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            duration: 0.3,
            scale: 1,
            y: 0,
            ease: 'power2.out'
        });
    });

    btn.addEventListener('click', () => {
        gsap.to(btn, {
            duration: 0.1,
            scale: 0.95,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        });
    });
});

// Animation du texte du héro avec effet de machine à écrire
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Effet de particules au clic
document.addEventListener('click', (e) => {
    createClickEffect(e.clientX, e.clientY);
});

function createClickEffect(x, y) {
    const particles = [];
    const colors = ['#ef4444', '#72B38F', '#3f67a4ff'];

    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '10000';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';

        document.body.appendChild(particle);

        const angle = (i * 50) * Math.PI / 180;
        const velocity = 50 + Math.random() * 50;

        gsap.to(particle, {
            duration: 3,
            x: Math.cos(angle) * velocity,
            y: Math.sin(angle) * velocity,
            opacity: 0,
            scale: 0,
            ease: 'power2.out',
            onComplete: () => {
                document.body.removeChild(particle);
            }
        });
    }
}

// Système de thèmes dynamiques
const themes = {
    default: {
        primary: '#3f67a4ff',
        secondary: '#3F9AA4',
        accent: '#493FA4'
    },
    sunset: {
        primary: '#f59e0b',
        secondary: '#ef4444',
        accent: '#ec4899'
    },
    ocean: {
        primary: '#72B38F',
        secondary: '#72B3B0',
        accent: '#75B372'
    }
};

function changeTheme(themeName) {
    const theme = themes[themeName];
    if (theme) {
        document.documentElement.style.setProperty('--primary', theme.primary);
        document.documentElement.style.setProperty('--secondary', theme.secondary);
        document.documentElement.style.setProperty('--accent', theme.accent);
        document.documentElement.style.setProperty('--gradient',
            `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.accent})`);
    }
}

// Fonction pour changer le thème aléatoirement
function changeRandomTheme() {
    const themeNames = Object.keys(themes);
    const randomTheme = themeNames[Math.floor(Math.random() * themeNames.length)];
    changeTheme(randomTheme);
}

// Appeler la fonction immédiatement au chargement de la page
changeRandomTheme();

// Répéter le changement de thème toutes les 6 secondes (10min = 600 000 millisecondes)
setInterval(changeRandomTheme, 6000);

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
            console.log(`⚡ Page chargée en ${entry.loadEventEnd - entry.loadEventStart}ms`);
        }
    });
});

if ('PerformanceObserver' in window) {
    perfObserver.observe({ entryTypes: ['navigation'] });
}

// Message de console stylé
console.log('%c🚀 QUANTUM DESIGN', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cSite web ultra-sophistiqué chargé avec succès!', 'color: #8b5cf6; font-size: 14px;');
console.log('%cTechnologies: HTML5, CSS3, JavaScript ES6+, Three.js, GSAP, Particles.js', 'color: #06b6d4; font-size: 12px;');

// Raccourcis clavier
document.addEventListener('keydown', (e) => {
    // Ctrl + Shift + T pour changer de thème
    if (e.ctrlKey && e.shiftKey && e.key === 'V') {
        const themeNames = Object.keys(themes);
        const randomTheme = themeNames[Math.floor(Math.random() * themeNames.length)];
        changeTheme(randomTheme);
    }
});

// Données de projets (ajoutez vos projets ici)
const projectsData = {
    project1: {
        title: "Site E-commerce Moderne",
        description: "Développement d'une plateforme de vente en ligne intuitive et performante, optimisée pour le mobile. Intégration de paiements sécurisés et gestion de catalogue produit.",
        images: ["images/web-1-1.jpg", "images/web-1-2.jpg", "images/web-1-3.jpg"], // Remplacez par vos images
        link: "https://example.com/project1" // Lien vers le projet réel
    },
    project2: {
        title: "Application Mobile Intuitive",
        description: "Conception UI/UX pour une application de suivi d'activités, axée sur la simplicité et l'engagement utilisateur. Prototype interactif et design final.",
        images: ["images/design-1-1.jpg", "images/design-1-2.jpg"],
        link: "https://example.com/project2"
    },
    project3: {
        title: "Identité Visuelle Complète",
        description: "Création d'une identité de marque forte et mémorable pour une startup. Inclut le logo, la charte graphique, et les applications sur différents supports.",
        images: ["images/branding-1-1.jpg", "images/branding-1-2.jpg", "images/branding-1-3.jpg"],
        link: "https://example.com/project3"
    },
    project4: {
        title: "Plateforme de Réservation",
        description: "Développement full-stack d'un système de réservation en ligne, offrant une expérience fluide pour les utilisateurs et un tableau de bord complet pour les administrateurs.",
        images: ["images/web-2-1.jpg", "images/web-2-2.jpg"],
        link: "https://example.com/project4"
    },
    project5: {
        title: "Refonte de Site Corporate",
        description: "Modernisation complète d'un site web d'entreprise avec une attention particulière à l'expérience utilisateur, l'optimisation SEO et l'intégration de nouvelles fonctionnalités.",
        images: ["images/design-2-1.jpg", "images/design-2-2.jpg", "images/design-2-3.jpg"],
        link: "https://example.com/project5"
    }
};

// Gestionnaire de filtres de portfolio
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block'; // Ou 'grid' si vous voulez animer le grid
                setTimeout(() => item.classList.add('revealed'), 10); // Révèle avec animation
            } else {
                item.classList.remove('revealed');
                setTimeout(() => item.style.display = 'none', 800); // Cache après animation
            }
        });
    });
});


// Gestionnaire de modal de projet
const projectModal = document.getElementById('project-modal');
const closeButton = projectModal.querySelector('.close-button');
const modalTitle = document.getElementById('modal-title');
const modalGallery = document.getElementById('modal-gallery');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');

document.querySelectorAll('.view-project-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        const project = projectsData[projectId];

        if (project) {
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalLink.href = project.link;

            modalGallery.innerHTML = ''; // Nettoyer la galerie précédente
            project.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = project.title;
                modalGallery.appendChild(img);
            });

            projectModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Empêche le scroll du body
        }
    });
});

closeButton.addEventListener('click', () => {
    projectModal.style.display = 'none';
    document.body.style.overflow = ''; // Rétablit le scroll du body
});

window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Initialisation des animations au scroll pour les items du portfolio
document.querySelectorAll('.portfolio-item').forEach(el => {
    observer.observe(el); // Utilise votre IntersectionObserver existant
});

// Pour la galerie tactile dans le modal (optionnel, plus avancé)
// Si vous voulez un vrai carrousel avec swipes, vous devriez intégrer une bibliothèque comme Swiper.js
// ou écrire un script de défilement tactile customisé.
// Ici, on a juste le défilement CSS natif qui est déjà tactile.
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const body = document.body;

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            body.classList.toggle("menu-open");

            // Change icône (burger ↔ croix)
            const icon = hamburger.querySelector("i");
            if (body.classList.contains("menu-open")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }

    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            body.classList.remove("menu-open");
            const icon = hamburger.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
    });
});

// Bannière cookies moderne
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    if (!localStorage.getItem('cookieConsent')) {
        banner.style.display = 'flex';
    }
    document.getElementById('cookie-accept').onclick = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.style.display = 'none';
    };
    document.getElementById('cookie-decline').onclick = () => {
        localStorage.setItem('cookieConsent', 'declined');
        banner.style.display = 'none';
    };
});