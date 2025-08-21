document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#main-header");
  const nav = document.querySelector("#main-nav");
  const hamburger = document.querySelector("#hamburger-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollToTopBtn = document.querySelector("#scroll-to-top");
  const form = document.querySelector("form");

  // Scroll header effect
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
    scrollToTopBtn.classList.toggle("show", window.scrollY > 300);
  });

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth"
        });
      }
      nav.classList.remove("is-open");
      hamburger.classList.remove("is-active");
    });
  });

  // Scroll to top
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hamburger menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-open");
  });

  // Form validation
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nomError = document.getElementById("nom-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const formMessage = form.querySelector(".form-message");

    nomError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formMessage.textContent = "";

    if (nom.value.trim() === "") {
      nomError.textContent = "Veuillez entrer votre nom.";
      isValid = false;
    }
    if (!email.value.includes("@")) {
      emailError.textContent = "Veuillez entrer un email valide.";
      isValid = false;
    }
    if (message.value.trim().length < 10) {
      messageError.textContent = "Le message doit contenir au moins 10 caractères.";
      isValid = false;
    }

    if (isValid) {
      formMessage.textContent = "Merci pour votre message !";
      formMessage.style.color = "green";
      form.reset();
    }
  });
});
