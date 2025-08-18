document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById('main-header');
  const backToTopButton = document.getElementById("backToTop");
  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("site-nav");

  // Scroll nav + bouton
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      backToTopButton.style.display = "block";
    } else {
      header.classList.remove('scrolled');
      backToTopButton.style.display = "none";
    }
  });

  // Menu mobile
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navMenu.classList.toggle("is-open");
  });

  // Fermeture au clic
  navMenu.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    navMenu.classList.remove("is-open");
  });

  // Animations scroll
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.1});

  document.querySelectorAll(".fade-in-up, .slide-up, .slide-up-slow, .scale-in").forEach(el => {
    observer.observe(el);
  });
});
