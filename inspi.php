<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beyond.</title>
    <link rel="icon" href="./images-vidéos/logo.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="styles.css">
</head>

<body class="index">
    <header class="main-header" id="main-header">
        <div class="header-left">
            <a href="index.php" class="logo">
                <img src="./images-vidéos/logo.png" alt="Logo Beyond" class="logo-icon">
                Beyond.
            </a>
            <div class="header-socials-mobile">
                <a href="https://www.youtube.com/@slow_alchimiste/" target="_blank" class="social-icon"
                    aria-label="YouTube">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/slow_alchimiste?igsh=dWVhb3ozYm55MnJn/" target="_blank"
                    class="social-icon" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://fr.linkedin.com/in/morganeberge/" target="_blank" class="social-icon"
                    aria-label="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>

        <nav class="main-nav">
            <a href="index.php" class="btn-secondary">Accueil</a>
            <a href="./pages/a propos.php" class="btn-secondary">À Propos</a>
            <a href="./pages/tarif.php" class="btn-secondary">Mes Accompagnements</a>
            <a href="./pages/portfolio.php" class="btn-secondary">Projets</a>
            <a href="./pages/contact.php" class="button-56" role="button">Me Contacter</a>
        </nav>

        <div class="header-right">
            <div class="header-socials-desktop">
                <a href="https://www.youtube.com/@slow_alchimiste/" target="_blank" class="social-icon" aria-label="YouTube">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/slow_alchimiste?igsh=dWVhb3ozYm55MnJn/" target="_blank"
                    class="social-icon" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://fr.linkedin.com/in/morganeberge/" target="_blank" class="social-icon"
                    aria-label="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
            <button class="hamburger-menu" aria-label="Ouvrir le menu">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <div class="mobile-nav" id="mobile-menu">
        <a href="index.php">Accueil</a>
        <a href="./pages/a propos.php">À Propos</a>
        <a href="./pages/tarif.php">Mes Accompagnements</a>
        <a href="./pages/portfolio.php">Projets</a>
        <a href="./pages/contact.php">Contact</a>
    </div>

  <main>
    <section class="hero">
      <div class="hero-video">
        <video autoplay muted loop playsinline>
          <source src="./images-vidéos/video.mp4" type="video/mp4">
        </video>
      </div>

      <div class="hero-content">
        <h5>Beyond.</h5>
        <h6>Révélez votre marque au-delà des apparences</h6>
        <p>Logo • Identité visuelle • Supports de communication</p>
      </div>
    </section>

    <section id="mes-services">
      <h1>Mes Services</h1>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-image">
            <img src="./images-vidéos/bouquet1.jpg" alt="Custom Bouquets">
          </div>
          <h5 class="h5-index">Un branding puissant</h5>
          <p>Clarifier l’essence de votre marque : son ADN, ses valeurs et son positionnement.</p>
        </div>

        <div class="service-card">
          <div class="service-image">
            <img src="./images-vidéos/bouquet2.jpg" alt="Occasion Flowers">
          </div>
          <h5 class="h5-index">Charte Graphique</h5>
          <p>Définition de couleurs, typographies et éléments graphiques.</p>
        </div>

        <div class="service-card">
          <div class="service-image">
            <img src="./images-vidéos/bouquet3.jpg" alt="Premade Bouquets">
          </div>
          <h5 class="h5-index">Community Management</h5>
          <p>Création/optimisation des comptes sociaux.</p>
        </div>
      </div>
</section>
</main>

  <a href="#top" class="back-to-top" id="backToTop" aria-label="Retour en haut de la page">&#8679;</a>

  <?php include './footer/footer.php'; ?>
  <?php include './footer/bandeaucoockie.php'; ?>

  <script src="script.js"></script>
</body>

</html>