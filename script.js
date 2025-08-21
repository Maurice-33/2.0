/**

- Apex Motorsports - Script Principal
- Gestion des interactions et animations du site
  */

// ==================== CONFIGURATION ====================
const CONFIG = {
// Seuils et durées
scrollThreshold: 100,
animationDelay: 150,
smoothScrollDuration: 800,

```
// Classes CSS
classes: {
    active: 'is-active',
    open: 'is-open',
    scrolled: 'scrolled',
    animate: 'animate',
    show: 'show',
    visible: 'visible'
},

// Sélecteurs
selectors: {
    hamburger: '#hamburger-menu',
    nav: '#main-nav',
    navLinks: '.nav-link',
    header: '#main-header',
    scrollToTop: '#scroll-to-top',
    animateElements: '.animate-on-scroll',
    form: 'form',
    formInputs: 'input, textarea',
    errorMessages: '.error-message'
}
```

};

// ==================== UTILITAIRES ====================
/**

- Utilitaires helper
  */
  const Utils = {
  /**
  - Debounce function pour optimiser les performances
    */
    debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(…args) {
    const later = () => {
    timeout = null;
    if (!immediate) func(…args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(…args);
    };
    },
  
  /**
  - Throttle function pour limiter la fréquence d’exécution
    */
    throttle(func, limit) {
    let inThrottle;
    return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
    func.apply(context, args);
    inThrottle = true;
    setTimeout(() => inThrottle = false, limit);
    }
    }
    },
  
  /**
  - Vérifie si un élément est visible dans le viewport
    */
    isInViewport(element, threshold = 0.1) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.left <= windowWidth * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold &&
    rect.right >= windowWidth * threshold
    );
    },
  
  /**
  - Smooth scroll vers un élément
    */
    smoothScrollTo(target, duration = CONFIG.smoothScrollDuration) {
    const targetElement = typeof target === ‘string’ ? document.querySelector(target) : target;
    if (!targetElement) return;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = Utils.easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    requestAnimationFrame(animation);
    },
  
  /**
  - Fonction d’easing pour smooth scroll
    */
    easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t–;
    return -c / 2 * (t * (t - 2) - 1) + b;
    },
  
  /**
  - Validation email
    */
    isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
    }
    };

// ==================== NAVIGATION ====================
/**

- Gestion du menu de navigation
  */
  class Navigation {
  constructor() {
  this.hamburger = document.querySelector(CONFIG.selectors.hamburger);
  this.nav = document.querySelector(CONFIG.selectors.nav);
  this.navLinks = document.querySelectorAll(CONFIG.selectors.navLinks);
  this.header = document.querySelector(CONFIG.selectors.header);
  this.isMenuOpen = false;
  
  ```
   this.init();
  ```
  
  }
  
  init() {
  if (!this.hamburger || !this.nav) return;
  
  ```
   this.bindEvents();
   this.updateActiveLink();
  ```
  
  }
  
  bindEvents() {
  // Toggle menu hamburger
  this.hamburger.addEventListener(‘click’, (e) => this.toggleMenu(e));
  
  ```
   // Gestion des touches clavier pour le hamburger
   this.hamburger.addEventListener('keydown', (e) => {
       if (e.key === 'Enter' || e.key === ' ') {
           e.preventDefault();
           this.toggleMenu(e);
       }
   });
  
   // Fermer menu après clic sur un lien
   this.navLinks.forEach(link => {
       link.addEventListener('click', (e) => {
           this.handleNavLinkClick(e);
       });
   });
  
   // Fermer menu en cliquant à l'extérieur
   document.addEventListener('click', (e) => {
       if (this.isMenuOpen && !this.nav.contains(e.target) && !this.hamburger.contains(e.target)) {
           this.closeMenu();
       }
   });
  
   // Fermer menu avec Escape
   document.addEventListener('keydown', (e) => {
       if (e.key === 'Escape' && this.isMenuOpen) {
           this.closeMenu();
           this.hamburger.focus();
       }
   });
  
   // Scroll spy pour active links
   window.addEventListener('scroll', Utils.throttle(() => {
       this.updateActiveLink();
   }, 100));
  ```
  
  }
  
  toggleMenu(e) {
  e.preventDefault();
  
  ```
   if (this.isMenuOpen) {
       this.closeMenu();
   } else {
       this.openMenu();
   }
  ```
  
  }
  
  openMenu() {
  this.hamburger.classList.add(CONFIG.classes.active);
  this.nav.classList.add(CONFIG.classes.open);
  this.hamburger.setAttribute(‘aria-expanded’, ‘true’);
  this.isMenuOpen = true;
  
  ```
   // Focus sur le premier lien
   const firstLink = this.nav.querySelector(CONFIG.selectors.navLinks);
   if (firstLink) {
       setTimeout(() => firstLink.focus(), 100);
   }
  ```
  
  }
  
  closeMenu() {
  this.hamburger.classList.remove(CONFIG.classes.active);
  this.nav.classList.remove(CONFIG.classes.open);
  this.hamburger.setAttribute(‘aria-expanded’, ‘false’);
  this.isMenuOpen = false;
  }
  
  handleNavLinkClick(e) {
  const href = e.target.getAttribute(‘href’);
  
  ```
   // Si c'est un lien ancre
   if (href && href.startsWith('#')) {
       e.preventDefault();
       this.closeMenu();
       
       // Smooth scroll vers la section
       setTimeout(() => {
           Utils.smoothScrollTo(href);
       }, 100);
   } else {
       this.closeMenu();
   }
  ```
  
  }
  
  updateActiveLink() {
  const sections = document.querySelectorAll(‘section[id]’);
  const scrollPos = window.scrollY + 100;
  
  ```
   sections.forEach(section => {
       const sectionTop = section.offsetTop;
       const sectionHeight = section.offsetHeight;
       const sectionId = section.getAttribute('id');
       const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);
  
       if (correspondingLink) {
           if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
               // Retirer active de tous les liens
               this.navLinks.forEach(link => link.classList.remove(CONFIG.classes.active));
               // Ajouter active au lien correspondant
               correspondingLink.classList.add(CONFIG.classes.active);
           }
       }
   });
  ```
  
  }
  }

// ==================== SCROLL EFFECTS ====================
/**

- Gestion des effets de scroll
  */
  class ScrollEffects {
  constructor() {
  this.header = document.querySelector(CONFIG.selectors.header);
  this.scrollToTopBtn = document.querySelector(CONFIG.selectors.scrollToTop);
  this.animateElements = document.querySelectorAll(CONFIG.selectors.animateElements);
  
  ```
   this.init();
  ```
  
  }
  
  init() {
  this.bindEvents();
  this.checkAnimations(); // Vérifier les animations au chargement
  }
  
  bindEvents() {
  // Scroll effects avec throttle pour les performances
  window.addEventListener(‘scroll’, Utils.throttle(() => {
  this.handleScroll();
  }, 16)); // ~60fps
  
  ```
   // Bouton retour en haut
   if (this.scrollToTopBtn) {
       this.scrollToTopBtn.addEventListener('click', (e) => {
           e.preventDefault();
           Utils.smoothScrollTo('body');
       });
   }
  
   // Observer pour les animations au scroll (plus performant que scroll listener)
   if ('IntersectionObserver' in window) {
       this.observeAnimations();
   } else {
       // Fallback pour les anciens navigateurs
       window.addEventListener('scroll', Utils.debounce(() => {
           this.checkAnimations();
       }, 100));
   }
  ```
  
  }
  
  handleScroll() {
  const scrollY = window.scrollY;
  
  ```
   // Header effect
   if (this.header) {
       if (scrollY > CONFIG.scrollThreshold) {
           this.header.classList.add(CONFIG.classes.scrolled);
       } else {
           this.header.classList.remove(CONFIG.classes.scrolled);
       }
   }
  
   // Scroll to top button
   if (this.scrollToTopBtn) {
       if (scrollY > CONFIG.scrollThreshold * 3) {
           this.scrollToTopBtn.classList.add(CONFIG.classes.show);
       } else {
           this.scrollToTopBtn.classList.remove(CONFIG.classes.show);
       }
   }
  ```
  
  }
  
  observeAnimations() {
  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
  setTimeout(() => {
  entry.target.classList.add(CONFIG.classes.animate);
  }, CONFIG.animationDelay);
  observer.unobserve(entry.target); // Observer une seule fois
  }
  });
  }, {
  threshold: 0.1,
  rootMargin: ‘50px’
  });
  
  ```
   this.animateElements.forEach(element => {
       observer.observe(element);
   });
  ```
  
  }
  
  checkAnimations() {
  this.animateElements.forEach(element => {
  if (Utils.isInViewport(element) && !element.classList.contains(CONFIG.classes.animate)) {
  setTimeout(() => {
  element.classList.add(CONFIG.classes.animate);
  }, CONFIG.animationDelay);
  }
  });
  }
  }

// ==================== VALIDATION FORMULAIRE ====================
/**

- Gestion et validation du formulaire
  */
  class FormHandler {
  constructor() {
  this.form = document.querySelector(CONFIG.selectors.form);
  this.inputs = document.querySelectorAll(CONFIG.selectors.formInputs);
  
  ```
   this.init();
  ```
  
  }
  
  init() {
  if (!this.form) return;
  
  ```
   this.bindEvents();
  ```
  
  }
  
  bindEvents() {
  // Validation en temps réel
  this.inputs.forEach(input => {
  input.addEventListener(‘blur’, (e) => this.validateField(e.target));
  input.addEventListener(‘input’, (e) => this.clearError(e.target));
  });
  
  ```
   // Soumission du formulaire
   this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  ```
  
  }
  
  validateField(field) {
  const value = field.value.trim();
  const fieldName = field.getAttribute(‘name’);
  const errorElement = document.querySelector(`#${fieldName}-error`);
  
  ```
   let isValid = true;
   let errorMessage = '';
  
   // Validation selon le type de champ
   switch (fieldName) {
       case 'nom':
           if (value.length < 2) {
               isValid = false;
               errorMessage = 'Le nom doit contenir au moins 2 caractères';
           }
           break;
  
       case 'email':
           if (!Utils.isValidEmail(value)) {
               isValid = false;
               errorMessage = 'Veuillez entrer une adresse email valide';
           }
           break;
  
       case 'message':
           if (value.length < 10) {
               isValid = false;
               errorMessage = 'Le message doit contenir au moins 10 caractères';
           }
           break;
   }
  
   this.displayError(field, errorElement, errorMessage, isValid);
   return isValid;
  ```
  
  }
  
  displayError(field, errorElement, message, isValid) {
  if (!errorElement) return;
  
  ```
   if (isValid) {
       field.classList.remove('error');
       errorElement.textContent = '';
       errorElement.classList.remove(CONFIG.classes.show);
   } else {
       field.classList.add('error');
       errorElement.textContent = message;
       errorElement.classList.add(CONFIG.classes.show);
   }
  ```
  
  }
  
  clearError(field) {
  const fieldName = field.getAttribute(‘name’);
  const errorElement = document.querySelector(`#${fieldName}-error`);
  
  ```
   field.classList.remove('error');
   if (errorElement) {
       errorElement.classList.remove(CONFIG.classes.show);
   }
  ```
  
  }
  
  handleSubmit(e) {
  e.preventDefault();
  
  ```
   let isFormValid = true;
   
   // Valider tous les champs requis
   this.inputs.forEach(input => {
       if (input.hasAttribute('required')) {
           if (!this.validateField(input)) {
               isFormValid = false;
           }
       }
   });
  
   if (isFormValid) {
       this.submitForm();
   } else {
       // Focus sur le premier champ invalide
       const firstError = this.form.querySelector('.error');
       if (firstError) {
           firstError.focus();
       }
   }
  ```
  
  }
  
  async submitForm() {
  const submitBtn = this.form.querySelector(‘button[type=“submit”]’);
  const originalText = submitBtn.innerHTML;
  
  ```
   // État de chargement
   submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
   submitBtn.disabled = true;
  
   try {
       // Simulation d'envoi (remplacer par vraie logique d'envoi)
       await new Promise(resolve => setTimeout(resolve, 2000));
       
       // Succès
       this.showMessage('Message envoyé avec succès !', 'success');
       this.form.reset();
       
   } catch (error) {
       // Erreur
       this.showMessage('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
   } finally {
       // Restaurer le bouton
       submitBtn.innerHTML = originalText;
       submitBtn.disabled = false;
   }
  ```
  
  }
  
  showMessage(message, type) {
  // Créer ou mettre à jour le message
  let messageElement = document.querySelector(’.form-message’);
  
  ```
   if (!messageElement) {
       messageElement = document.createElement('div');
       messageElement.className = 'form-message';
       this.form.appendChild(messageElement);
   }
   
   messageElement.textContent = message;
   messageElement.className = `form-message ${type} ${CONFIG.classes.show}`;
   
   // Masquer après 5 secondes
   setTimeout(() => {
       messageElement.classList.remove(CONFIG.classes.show);
   }, 5000);
  ```
  
  }
  }

// ==================== PERFORMANCE & OPTIMISATIONS ====================
/**

- Optimisations et gestion des performances
  */
  class PerformanceManager {
  constructor() {
  this.init();
  }
  
  init() {
  this.preloadImages();
  this.setupLazyLoading();
  this.optimizeAnimations();
  }
  
  preloadImages() {
  // Précharger les images importantes
  const criticalImages = [
  ‘https://images.unsplash.com/photo-1503376780353-7e6692767b70’
  ];
  
  ```
   criticalImages.forEach(src => {
       const img = new Image();
       img.src = src;
   });
  ```
  
  }
  
  setupLazyLoading() {
  // Lazy loading natif si supporté, sinon Intersection Observer
  const images = document.querySelectorAll(‘img[loading=“lazy”]’);
  
  ```
   if ('loading' in HTMLImageElement.prototype) {
       // Le navigateur supporte le lazy loading natif
       return;
   }
  
   // Fallback avec Intersection Observer
   const imageObserver = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               const img = entry.target;
               img.src = img.dataset.src || img.src;
               img.classList.remove('lazy');
               imageObserver.unobserve(img);
           }
       });
   });
  
   images.forEach(img => imageObserver.observe(img));
  ```
  
  }
  
  optimizeAnimations() {
  // Désactiver les animations si l’utilisateur préfère moins de mouvement
  if (window.matchMedia(’(prefers-reduced-motion: reduce)’).matches) {
  document.documentElement.style.setProperty(’–transition-fast’, ‘0ms’);
  document.documentElement.style.setProperty(’–transition-normal’, ‘0ms’);
  document.documentElement.style.setProperty(’–transition-slow’, ‘0ms’);
  }
  }
  }

// ==================== INITIALISATION ====================
/**

- Initialisation de l’application
  */
  class App {
  constructor() {
  this.navigation = null;
  this.scrollEffects = null;
  this.formHandler = null;
  this.performanceManager = null;
  }
  
  init() {
  // Initialiser les modules
  this.navigation = new Navigation();
  this.scrollEffects = new ScrollEffects();
  this.formHandler = new FormHandler();
  this.performanceManager = new PerformanceManager();
  
  ```
   // Ajouter la classe loaded au body
   document.body.classList.add('loaded');
  
   console.log('🏎️ Apex Motorsports - Site initialisé avec succès!');
  ```
  
  }
  }

// ==================== DÉMARRAGE ====================
/**

- Lancement de l’application
  */
  document.addEventListener(‘DOMContentLoaded’, () => {
  const app = new App();
  app.init();
  });

// Gestion des erreurs globales
window.addEventListener(‘error’, (e) => {
console.error(‘Erreur JavaScript:’, e.error);
});

// Export pour tests (si nécessaire)
if (typeof module !== ‘undefined’ && module.exports) {
module.exports = { App, Navigation, ScrollEffects, FormHandler, Utils };
}