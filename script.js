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

     <script>
    const canvas = document.getElementById('leaves');
    const ctx = canvas.getContext('2d');
    let w, h, leaves = [];
    const colors = [
      "#d77a61", // terracotta
      "#e6c7b4", // beige rosé
      "#b08968", // brun doux
      "#f8f4f0"  // couleur fond
    ];

    function rand(a,b){ return Math.random()*(b-a)+a }

    function resize() {
      w = canvas.width = innerWidth;
      h = canvas.height = innerHeight;
      leaves = Array.from({length:35}, () => newLeaf());
    }

    function newLeaf() {
      return {
        x: rand(0, w),
        y: rand(-h, 0),
        size: rand(12, 28),
        speed: rand(0.3, 1),
        drift: rand(0.5, 1.5),
        angle: rand(0, Math.PI*2),
        color: colors[Math.floor(Math.random()*colors.length)],
      };
    }

    function drawLeaf(leaf) {
      ctx.save();
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate(Math.sin(leaf.angle) * 0.5);
      ctx.beginPath();
      ctx.ellipse(0, 0, leaf.size * 0.6, leaf.size, 0, 0, Math.PI*2);
      ctx.fillStyle = leaf.color;
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0,0,w,h);
      for (let leaf of leaves) {
        drawLeaf(leaf);
        leaf.y += leaf.speed;
        leaf.x += Math.sin(leaf.angle) * leaf.drift;
        leaf.angle += 0.01;
        if (leaf.y > h + leaf.size) {
          Object.assign(leaf, newLeaf(), {y: -leaf.size});
        }
      }
      requestAnimationFrame(animate);
    }

    addEventListener('resize', resize);
    resize();
    animate();
  </script>
</body>
</html>
