// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('main-nav');
    const form = document.getElementById('contact-form');
    const submitBtn = document.querySelector('.submit-button');
    const formMessage = document.getElementById('form-message');
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Gestion du menu hamburger
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermeture du menu lors du clic sur un lien (mobile)
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Validation du formulaire de contact
    const validateForm = () => {
        let isValid = true;
        
        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Validation du nom
        if (nom === '') {
            document.getElementById('nom-error').textContent = 'Veuillez entrer votre nom.';
            document.getElementById('nom-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('nom-error').style.display = 'none';
        }
        
        // Validation de l'email
        if (!emailRegex.test(email)) {
            document.getElementById('email-error').textContent = 'Veuillez entrer une adresse email valide.';
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('email-error').style.display = 'none';
        }
        
        // Validation du message
        if (message === '') {
            document.getElementById('message-error').textContent = 'Veuillez entrer votre message.';
            document.getElementById('message-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('message-error').style.display = 'none';
        }
        
        return isValid;
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Afficher le loader et cacher le texte du bouton
            submitBtn.querySelector('.button-text').style.display = 'none';
            submitBtn.querySelector('.button-loader').style.display = 'block';

            // Simuler un envoi de formulaire (pour la démo)
            setTimeout(() => {
                formMessage.textContent = 'Votre message a été envoyé avec succès ! Merci de nous avoir contactés.';
                formMessage.style.color = '#38a169'; // vert
                form.reset();
                
                // Cacher le loader et afficher le texte du bouton
                submitBtn.querySelector('.button-text').style.display = 'block';
                submitBtn.querySelector('.button-loader').style.display = 'none';

                // Effacer le message après 5 secondes
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000);
                
            }, 2000); // Délai de 2 secondes
            
        } else {
            formMessage.textContent = 'Veuillez corriger les erreurs dans le formulaire avant d\'envoyer.';
            formMessage.style.color = '#ff6b6b'; // rouge
        }
    });

    // Gestion du bouton "Retour en Haut"
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
