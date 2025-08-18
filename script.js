document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".sub-nav a");

  // Scroll spy : active link
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      if (scrollY >= secTop) current = sec.getAttribute("id");
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
