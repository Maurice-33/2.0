// Animation de défilement
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');

            // Animation GSAP slide + fade
            gsap.fromTo(entry.target, {
                opacity: 0,
                y: 50,
                filter: 'blur(5px)'
            }, {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 1,
                ease: 'power2.out'
            });

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
        });
    }
    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 1024 && body.classList.contains("menu-open")) {
                body.classList.remove("menu-open");
            }
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

// Animation GSAP pour la section Témoignages (#avis)
window.addEventListener('DOMContentLoaded', () => {
    const avisSection = document.querySelector('#avis');
    if (avisSection) {
        gsap.set(avisSection, { opacity: 0, y: 80 });
        const avisObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(avisSection, {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: 'power3.out'
                    });
                    avisObserver.unobserve(avisSection);
                }
            });
        }, { threshold: 0.2 });
        avisObserver.observe(avisSection);
    }
});

// Animation GSAP pour la section Formulaire de contact (#contact)
window.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        gsap.set(contactSection, { opacity: 0, y: 100 });
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(contactSection, {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: 'power3.out',
                        onComplete: () => {
                            // Animation rebond sur les champs du formulaire
                            gsap.fromTo(
                                contactSection.querySelectorAll('.form-group'),
                                { opacity: 0, y: 40 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.7,
                                    stagger: 0.15,
                                    ease: 'back.out(1.7)'
                                }
                            );
                        }
                    });
                    contactObserver.unobserve(contactSection);
                }
            });
        }, { threshold: 0.2 });
        contactObserver.observe(contactSection);
    }
});

// Bouton remonter en haut
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validation dynamique du formulaire de contact
const contactForm = document.getElementById('contactForm');
const formInputs = contactForm.querySelectorAll('.form-input');
const formGroups = contactForm.querySelectorAll('.form-group');
const submitBtn = contactForm.querySelector('button[type="submit"]');

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
    input.classList.remove('valid');
    input.classList.add('invalid');
    let error = input.parentElement.querySelector('.form-error');
    if (!error) {
        error = document.createElement('div');
        error.className = 'form-error';
        input.parentElement.appendChild(error);
    }
    error.textContent = message;
}

function showValid(input) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    let error = input.parentElement.querySelector('.form-error');
    if (error) error.textContent = '';
}

function checkForm() {
    let valid = true;
    formInputs.forEach(input => {
        if (input.type === 'text') {
            if (input.value.trim().length < 2) {
                showError(input, 'Veuillez entrer votre nom complet.');
                valid = false;
            } else {
                showValid(input);
            }
        } else if (input.type === 'email') {
            if (!validateEmail(input.value)) {
                showError(input, 'Adresse email invalide.');
                valid = false;
            } else {
                showValid(input);
            }
        } else if (input.tagName === 'TEXTAREA') {
            if (input.value.trim().length < 5) {
                showError(input, 'Veuillez entrer un message.');
                valid = false;
            } else {
                showValid(input);
            }
        }
    });
    submitBtn.disabled = !valid;
    return valid;
}

formInputs.forEach(input => {
    input.addEventListener('input', checkForm);
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checkForm()) {
        // Animation de soumission
        gsap.to('.form-container', {
            duration: 0.5,
            scale: 0.98,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        });
        setTimeout(() => {
            // Affiche un message de succès
            let success = contactForm.querySelector('.form-success');
            if (!success) {
                success = document.createElement('div');
                success.className = 'form-success';
                contactForm.appendChild(success);
            }
            success.textContent = 'Message envoyé avec succès ! 🚀';
            contactForm.reset();
            formInputs.forEach(input => input.classList.remove('valid'));
            submitBtn.disabled = true;
            setTimeout(() => { success.textContent = ''; }, 3000);
        }, 1000);
    }
});

// Loader animé : masque l’overlay après chargement
window.addEventListener('load', () => {
  const loader = document.getElementById('loader-overlay');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 600);
  }
});

// --- Switch de langue FR/EN et traduction complète ---
// --- Switch de langue FR/EN et traduction complète ---
const translations = {
  fr: {
    accueil: 'Accueil',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    heroTitle: 'Créez un site moderne, rapide et accessible',
    heroSubtitle: 'Un point de départ élégant avec dark mode, animations douces, composants réutilisables, et bonnes pratiques. Déployez en quelques minutes sur GitHub Pages.',
    voirExemples: 'Voir les exemples',
    meContacter: 'Me contacter',
    mesServices: 'Mes Services',
    mescréations: 'Mes Créations Numériques',
    servicesSubtitle: 'Créons Ensemble Votre Avenir Numérique',
    webDev: 'Web développement',
    monTravail: 'Découvrez mon travail, une fusion d innovation et de design.',
    all: 'Tous',
    website: 'Sites web',
    avis: 'Mes Avis',
    avis1: 'Design élégant, chargement ultra-rapide. Parfait pour lancer un produit. <footer class="avis-footer">— Morgane, Marketeuse</footer>',
    avis2: 'Accessible au clavier et aux lecteurs d’écran, bravo ! <footer class="avis-footer">— Taïko, CM</footer>',
    avis3: 'Le mode sombre automatique est un vrai plus pour les visiteurs nocturnes. <footer class="avis-footer">— Andy, dev</footer>',
    contactez: 'contactez-moi',
    formName: 'Nom complet',
    formEmail: 'Adresse email',
    formMessage: 'Votre message',
    formBtn: 'Envoyer',
    infoForm: 'Les informations recueillies via ce formulaire sont uniquement destinées à répondre à votre demande. Pour en savoir plus, consultez politique de confidentialité'
  },

  en: {
    accueil: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    heroTitle: 'Create a modern, fast and accessible website',
    heroSubtitle: 'A stylish starting point with dark mode, smooth animations, reusable components, and best practices. Deploy in minutes on GitHub Pages.',
    voirExemples: 'See examples',
    meContacter: 'Contact me',
    mesServices: 'My Services',
    mescréations: 'My Digital Creations',
    servicesSubtitle: 'Let’s Build Your Digital Future Together',
    webDev: 'Web development',
    monTravail: 'See my work, a blend of innovation and design.',
    all: 'All',
    website: 'Websites',
    avis: 'My Testimonials',
    avis1: 'Elegant design, ultra-fast loading. Perfect for launching a product. <footer class="avis-footer">— Morgane, Marketer</footer>',
    avis2: 'Keyboard and screen reader accessible, well done! <footer class="avis-footer">— Taïko, CM</footer>',
    avis3: 'Auto dark mode is a real plus for night visitors. <footer class="avis-footer">— Andy, dev</footer>',
    contactez: 'contact me',
    formName: 'Full name',
    formEmail: 'Email address',
    formMessage: 'Your message',
    formBtn: 'Send',
    infoForm: 'The information collected via this form is solely intended to respond to your request. For more information, see the privacy policy.'
  }
};

function updateLangButtonDisplay(currentLang) {
    // Sélectionne TOUS les boutons qui ont la classe lang-switch-btn (Desktop et Mobile)
    const switchBtns = document.querySelectorAll('.lang-switch-btn');
    
    // Met à jour le texte pour chaque bouton
    switchBtns.forEach(btn => {
        if (currentLang === 'fr') {
            // Si la langue actuelle est FR, le bouton doit proposer EN
            btn.textContent = 'EN';
            btn.setAttribute('aria-label', 'Change to English');
        } else {
            // Si la langue actuelle est EN, le bouton doit proposer FR
            btn.textContent = 'FR';
            btn.setAttribute('aria-label', 'Changer en Français');
        }
    });
}

function setLang(lang) {
    // 1. Traduction dynamique des éléments [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 2. Traduction des liens de navigation spécifiques
    const navLinks = document.querySelectorAll('.nav a');
    if (navLinks.length >= 4) {
        // Mise à jour du texte du lien 'Accueil' (nœud de texte après l'image)
        if (navLinks[0].childNodes.length > 1) { 
            navLinks[0].childNodes[1].nodeValue = translations[lang].accueil;
        }
        navLinks[1].textContent = translations[lang].services;
        navLinks[2].textContent = translations[lang].portfolio;
        navLinks[3].textContent = translations[lang].contact;
    }

    // 3. Traduction des autres éléments spécifiques
    document.title = translations[lang].heroTitle;
    
    const heroSubtitle = document.querySelector('.lead');
    if (heroSubtitle) heroSubtitle.textContent = translations[lang].heroSubtitle;

    // Traduction des labels de formulaire (logique gardée de ton code)
    const nameLabel = document.querySelector('label[for="name"]');
    if (nameLabel) nameLabel.textContent = translations[lang].formName;
    const emailLabel = document.querySelector('label[for="email"]');
    if (emailLabel) emailLabel.textContent = translations[lang].formEmail;
    const messageLabel = document.querySelector('label[for="message"]');
    if (messageLabel) messageLabel.textContent = translations[lang].formMessage;
    const formBtn = document.querySelector('#contactForm button[type="submit"]');
    if (formBtn) formBtn.textContent = translations[lang].formBtn;


    // 4. Sauvegarde et mise à jour de l'affichage du bouton
    localStorage.setItem('lang', lang);
    updateLangButtonDisplay(lang);
}


function detectDefaultLang() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('fr') ? 'fr' : 'en';
}


// --- Point d'entrée : Le code commence ici après le chargement du DOM ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialisation de la langue au chargement
    const savedLang = localStorage.getItem('lang') || detectDefaultLang();
    setLang(savedLang);

    // 2. Écouteur d'événement sur TOUS les boutons de bascule (Desktop et Mobile)
    const switchBtns = document.querySelectorAll('.lang-switch-btn');

    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Récupère la langue actuelle (sauvegardée par setLang)
            const currentLang = localStorage.getItem('lang') || detectDefaultLang();
            
            // Détermine la nouvelle langue
            const newLang = (currentLang === 'fr') ? 'en' : 'fr';
            
            // Applique la nouvelle langue
            setLang(newLang);
        });
    });
});