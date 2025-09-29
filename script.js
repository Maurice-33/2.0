// =====================================================================
// === CORE CONFIGURATION ET TRADUCTION ===
// =====================================================================

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
    infoForm: 'Les informations recueillies via ce formulaire sont uniquement destinées à répondre à votre demande. Pour en savoir plus, consultez politique de confidentialité',
    mentionsLegales: `<h1 class="h2-form">Mentions légales</h1>
            <p><strong>Éditeur du site :</strong><br>
            Morgane<br>
            Adresse : [Ton adresse]<br>
            Email : [Ton email]<br>
            SIRET : [Ton numéro de SIRET si pro/freelance]</p>

            <p><strong>Directeur de la publication :</strong><br>
            Morgane</p>

            <p><strong>Hébergement :</strong><br>
            [Nom de l’hébergeur]<br>
            [Adresse de l’hébergeur]<br>
            [Téléphone de l’hébergeur]</p>

            <p><strong>Propriété intellectuelle :</strong><br>
            Tous les contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) sont la propriété exclusive de Morgane, sauf mention contraire.</p>

            <p><strong>Contact :</strong><br>
            Pour toute question, contactez-moi à l’adresse suivante : [Ton email]</p>`,
    confidentialite: `<h1 class="h2-form">Politique de confidentialité</h1>
            <p>
                Ce site collecte uniquement les données nécessaires au fonctionnement du formulaire de contact (nom, email, message). Ces données ne sont utilisées que pour répondre à votre demande et ne sont jamais transmises à des tiers.
            </p>
            <p>
                Vous pouvez demander la suppression ou la modification de vos données à tout moment en écrivant à <a href="mailto:ton@email.fr">ton@email.fr</a>.
            </p>
            <p>
                Aucune donnée n’est utilisée à des fins commerciales ou publicitaires. Ce site n’utilise pas de cookies de suivi ou d’analyse.
            </p>
            <p>
                Pour toute question concernant vos données personnelles, contactez-moi à l’adresse suivante : <a href="mailto:ton@email.fr">ton@email.fr</a>
            </p>`
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
    infoForm: 'The information collected via this form is solely intended to respond to your request. For more information, see the privacy policy.',
    mentionsLegales: `
      <h1 class="h2-form">Legal Notice</h1>
      <p><strong>Site editor:</strong><br>
      Morgane<br>
      Address: [Your address]<br>
      Email: [Your email]<br>
      SIRET: [Your company/freelance number]</p>

      <p><strong>Publication Director:</strong><br>
      Morgane</p>

      <p><strong>Hosting:</strong><br>
      [Hosting provider name]<br>
      [Hosting provider address]<br>
      [Hosting provider phone]</p>

      <p><strong>Intellectual property:</strong><br>
      All content on this site (texts, images, graphics, logo, icons, etc.) 
      is the exclusive property of Morgane, unless otherwise stated.</p>

      <p><strong>Contact:</strong><br>
      For any questions, contact me at: [Your email]</p>
    `,
     confidentialite:`<h1 class="h2-form">Privacy Policy</h1>
<p>This site only collects the data necessary for the contact form (name, email, message). This data is only used to respond to your request and is never shared with third parties.</p>
<p>You can request deletion or modification of your data at any time by writing to <a href="mailto:your@email.com">your@email.com</a>.</p>
<p>No data is used for commercial or advertising purposes. This site does not use tracking or analytics cookies.</p>
<p>For any questions regarding your personal data, please contact me at: <a href="mailto:your@email.com">your@email.com</a></p>`
    }
};

// Données de projets (simples pour la concision)
const projectsData = { 
    project1: { title: "Site E-commerce Moderne", description: "...", images: ["images/web-1-1.jpg"], link: "#" },
    project2: { title: "Application Mobile Intuitive", description: "...", images: ["images/design-1-1.jpg"], link: "#" },
    project3: { title: "Identité Visuelle Complète", description: "...", images: ["images/branding-1-1.jpg"], link: "#" },
    project4: { title: "Plateforme de Réservation", description: "...", images: ["images/web-2-1.jpg"], link: "#" },
    project5: { title: "Refonte de Site Corporate", description: "...", images: ["images/design-2-1.jpg"], link: "#" }
};

const themes = {
    default: { primary: '#3f67a4ff', secondary: '#3F9AA4', accent: '#493FA4' },
    sunset: { primary: '#f59e0b', secondary: '#ef4444', accent: '#ec4899' },
    ocean: { primary: '#72B38F', secondary: '#72B3B0', accent: '#75B372' }
};


// --- HELPER FUNCTIONS ---
function safeQuery(selector, callback) {
    const el = document.querySelector(selector);
    if (el) callback(el);
    return el;
}

function detectDefaultLang() {
    return (navigator.language || navigator.userLanguage).startsWith('fr') ? 'fr' : 'en';
}

// =====================================================================
// === GESTION DE LA LANGUE ET TRADUCTION ===
// =====================================================================

function updateLangButtonDisplay(currentLang) {
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        btn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        btn.setAttribute('aria-label', currentLang === 'fr' ? 'Change to English' : 'Changer en Français');
    });
}

function setLang(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    const navLinks = document.querySelectorAll('.nav a');
    if (navLinks.length >= 4) {
        if (navLinks[0].childNodes.length > 1) navLinks[0].childNodes[1].nodeValue = translations[lang].accueil;
        navLinks[1].textContent = translations[lang].services;
        navLinks[2].textContent = translations[lang].portfolio;
        navLinks[3].textContent = translations[lang].contact;
    }

    safeQuery('label[for="name"]', el => el.textContent = translations[lang].formName);
    safeQuery('label[for="email"]', el => el.textContent = translations[lang].formEmail);
    safeQuery('label[for="message"]', el => el.textContent = translations[lang].formMessage);
    safeQuery('#contactForm button[type="submit"]', el => el.textContent = translations[lang].formBtn);
    safeQuery('.lead', el => el.textContent = translations[lang].heroSubtitle);
    
    document.title = translations[lang].heroTitle;

    localStorage.setItem('lang', lang);
    updateLangButtonDisplay(lang);
}

function setupLangSwitch() {
    const savedLang = localStorage.getItem('lang') || detectDefaultLang();
    setLang(savedLang);

    document.querySelectorAll('.lang-switch-btn').forEach(btn => btn.addEventListener('click', () => {
        const currentLang = localStorage.getItem('lang') || detectDefaultLang();
        setLang(currentLang === 'fr' ? 'en' : 'fr');
    }));
}

// =====================================================================
// === GESTION DE LA NAVIGATION ET DU MENU MOBILE ===
// =====================================================================

function scrollToAnchor() {
    // Gère le défilement si l'URL contient une ancre (#services, #contact, etc.)
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement) {
            // Défilement doux après un petit délai pour s'assurer que la page est rendue
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const body = document.body;

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            body.classList.toggle('menu-open');
        });
    }

    // Fermer le menu en cliquant sur un lien
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) { 
                body.classList.remove('menu-open');
            }
        });
    });
}

function setupSmoothNavigation() {
    // Gère la navigation fluide sur index.html ET le clic sur les autres pages
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Si le lien pointe vers une section de la page index.html
            if (href.startsWith('#') || href.startsWith('index.html#')) {
                // Si nous sommes sur index.html ou à la racine, on fait le défilement fluide
                if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index.html') {
                    const sectionId = href.replace('index.html', ''); 
                    const target = document.querySelector(sectionId);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                // Si nous sommes sur une AUTRE page, la redirection se fait normalement
            }
        });
    });
}

// =====================================================================
// === THÈME ET ANIMATIONS ===
// =====================================================================

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

function changeRandomTheme() {
    const themeNames = Object.keys(themes);
    const randomTheme = themeNames[Math.floor(Math.random() * themeNames.length)];
    changeTheme(randomTheme);
}

// IntersectionObserver pour animations au scroll (GSAP)
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            gsap.fromTo(entry.target, { opacity: 0, y: 50, filter: 'blur(5px)' }, {
                opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power2.out'
            });
            const progressBars = entry.target.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => { bar.style.width = width; }, 500);
            });
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

function setupScrollAnimations() {
    document.querySelectorAll('.scroll-reveal, .portfolio-item').forEach(el => observer.observe(el));
    
    // Animations de section spécifiques (avis, contact)
    ['#avis', '#contact'].forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
            gsap.set(section, { opacity: 0, y: 80 });
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(section, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' });
                        sectionObserver.unobserve(section);
                        // Animation supplémentaire pour les champs du formulaire de contact
                        if (selector === '#contact') {
                             gsap.fromTo(section.querySelectorAll('.form-group'), { opacity: 0, y: 40 }, 
                             { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'back.out(1.7)' });
                        }
                    }
                });
            }, { threshold: 0.2 });
            sectionObserver.observe(section);
        }
    });
}

function setupInteractions() {
    // Parallaxe au scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-content');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Effets de boutons interactifs (GSAP)
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => gsap.to(btn, { duration: 0.3, scale: 1.05, y: -3, ease: 'power2.out' }));
        btn.addEventListener('mouseleave', () => gsap.to(btn, { duration: 0.3, scale: 1, y: 0, ease: 'power2.out' }));
        btn.addEventListener('click', () => gsap.to(btn, { duration: 0.1, scale: 0.95, yoyo: true, repeat: 1, ease: 'power2.inOut' }));
    });
    
    // Bouton remonter en haut
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            scrollToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
        });
        scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Raccourcis clavier (Ctrl + Shift + V pour changer de thème)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'V') {
            changeRandomTheme();
        }
    });

    // Effet de particules au clic (fonction createClickEffect non incluse pour la concision, mais suppose son existence)
    // document.addEventListener('click', (e) => { createClickEffect(e.clientX, e.clientY); });
}

// Fonctions de formulaire (checkForm, showError, showValid, validateEmail)
function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

function showError(input, message) { /* ... (Logique d'affichage d'erreur) ... */ }
function showValid(input) { /* ... (Logique d'affichage valide) ... */ }

function checkForm() {
    const formInputs = document.querySelectorAll('#contactForm .form-input, #contactForm textarea');
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    let valid = true;
    formInputs.forEach(input => {
        // ... (Logique de validation complète) ...
        if (input.type === 'email' && !validateEmail(input.value)) valid = false;
        else if (input.value.trim().length < 2) valid = false;
    });
    if(submitBtn) submitBtn.disabled = !valid;
    return valid;
}

function setupFormValidation() {
    const contactForm = document.getElementById('contactForm');
    const formInputs = contactForm.querySelectorAll('.form-input, textarea');
    
    formInputs.forEach(input => input.addEventListener('input', checkForm));

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (checkForm()) {
            gsap.to('.form-container', { duration: 0.5, scale: 0.98, yoyo: true, repeat: 1, ease: 'power2.inOut' });
            setTimeout(() => {
                alert('Message envoyé avec succès ! 🚀');
                contactForm.reset();
                formInputs.forEach(input => input.classList.remove('valid'));
                // ... (Logique pour le message de succès et désactiver le bouton) ...
            }, 1000);
        }
    });
    // Premier appel pour désactiver le bouton si le formulaire est vide au début
    checkForm();
}


// =====================================================================
// === INITIALISATION GLOBALE (Le point de départ sécurisé) ===
// =====================================================================

function initApp() {
    // 1. Initialisation des fonctions de base
    setupLangSwitch();
    setupMobileMenu();
    setupSmoothNavigation();
    setupInteractions();
    
    // 2. Gestion des ancres après chargement de page (pour les clics inter-pages)
    scrollToAnchor(); 

    // 3. Gestion des fonctionnalités conditionnelles (si les éléments existent)
    if (document.querySelector('.scroll-reveal')) setupScrollAnimations();
    
    // DÉPLACÉ ET AJUSTÉ : Initialisation du thème et de l'intervalle
    if (typeof changeRandomTheme === 'function') {
        changeRandomTheme(); // Appelle-le une fois au début
        // Répète le changement de thème toutes les 6 secondes (6000ms)
        setInterval(changeRandomTheme, 6000); 
    }

    // Autres initialisations conditionnelles
    if (document.getElementById('contactForm')) setupFormValidation(); 
    if (document.getElementById('cookie-banner')) { /* ... (Logique cookies) ... */ }
    if (document.getElementById('loader-overlay')) {
        // Loader animé : masque l’overlay après chargement
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader-overlay');
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 600);
        });
    }

    // Console logs stylés
    console.log('%c🚀 QUANTUM DESIGN', 'color: #6366f1; font-size: 24px; font-weight: bold;');
    
    // Reste de la logique du portfolio (modal, filtres)
    // ... (Pour simplifier, cette logique complexe a été laissée de côté ici mais doit être présente dans votre fichier si nécessaire)
}


// --- Point d'entrée unique de l'application ---
// S'assure que tout est lancé SEULEMENT après le chargement du DOM
document.addEventListener("DOMContentLoaded", initApp);