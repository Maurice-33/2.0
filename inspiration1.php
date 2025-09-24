<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#0ea5e9" />
  <meta name="color-scheme" content="light dark" />
  <meta name="description"
    content="Un site vitrine moderne en un seul fichier : design premium, animations, dark mode, SEO, accessibilité et bonnes pratiques. Idéal pour démarrer votre propre site GitHub Pages." />
  <meta name="keywords"
    content="portfolio, site vitrine, dark mode, animation, responsive, accessibilité, SEO, GitHub Pages" />
  <meta property="og:title" content="Portfolio – Fichier unique" />
  <meta property="og:description" content="Un gabarit complet pour créer un site moderne en 1 fichier (HTML+CSS+JS)." />
  <meta property="og:type" content="website" />
  <meta property="og:image"
    content="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1'%3E%3Cstop offset='0' stop-color='%230ea5e9'/%3E%3Cstop offset='1' stop-color='%238b5cf6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' font-size='72' font-weight='700'%3EPortfolio%3C/text%3E%3C/svg%3E" />
  <link rel="icon"
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1'%3E%3Cstop offset='0' stop-color='%230ea5e9'/%3E%3Cstop offset='1' stop-color='%238b5cf6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='46' fill='url(%23g)'/%3E%3Cpath d='M30 55 L50 25 L70 55 Z' fill='white'/%3E%3C/svg%3E" />
  <title>Portfolio – Fichier unique</title>
  <style>
    /* --- Reset & tokens --- */
    *,
    *::before,
    *::after {
      box-sizing: border-box
    }

    :root {
      --bg: 255 255 255;
      --fg: 17 24 39;
      /* slate-900 */
      --muted: 100 116 139;
      /* slate-500 */
      --brand1: 14 165 233;
      /* sky-500 */
      --brand2: 139 92 246;
      /* violet-500 */
      --ring: 56 189 248;
      /* sky-400 */
      --card: 248 250 252;
      /* slate-50 */
      --elev: 0 5px 20px rgba(0, 0, 0, .08);
      --radius: 16px;
      --grid-max: 1200px;
      --space: clamp(16px, 2vw, 28px);
      --trans: 200ms cubic-bezier(.2, .7, .2, 1);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: 2 6 23;
        --fg: 241 245 249;
        --muted: 148 163 184;
        --card: 15 23 42
      }
    }

    [data-theme="dark"] {
      --bg: 2 6 23;
      --fg: 241 245 249;
      --muted: 148 163 184;
      --card: 15 23 42
    }

    html {
      scroll-behavior: smooth
    }

    body {
      margin: 0;
      font: 16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial;
      color: rgb(var(--fg));
      background: rgb(var(--bg));
    }

    img {
      max-width: 100%;
      height: auto;
      display: block
    }

    a {
      color: rgb(var(--brand1));
      text-decoration: none
    }

    a:hover {
      text-decoration: underline
    }

    .container {
      max-width: var(--grid-max);
      margin-inline: auto;
      padding: 0 var(--space)
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: .6rem;
      padding: .8rem 1.1rem;
      border-radius: 999px;
      background: linear-gradient(90deg, rgb(var(--brand1)), rgb(var(--brand2)));
      color: white;
      font-weight: 700;
      box-shadow: var(--elev);
      transition: transform var(--trans), filter var(--trans)
    }

    .btn:hover {
      transform: translateY(-2px);
      filter: saturate(1.1)
    }

    .btn.outline {
      background: transparent;
      border: 2px solid rgb(var(--fg));
      color: rgb(var(--fg))
    }

    .badge {
      padding: .25rem .6rem;
      border-radius: 999px;
      background: rgba(var(--fg), .06);
      border: 1px solid rgba(var(--fg), .1);
      backdrop-filter: saturate(140%) blur(6px)
    }

    .card {
      background: rgba(var(--card), 1);
      border: 1px solid rgba(var(--fg), .08);
      border-radius: var(--radius);
      box-shadow: var(--elev)
    }

    .grid {
      display: grid;
      gap: clamp(16px, 1.5vw, 24px)
    }

    /* --- Header / nav --- */
    header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: color-mix(in oklab, rgb(var(--bg)) 90%, transparent);
      backdrop-filter: saturate(130%) blur(8px);
      border-bottom: 1px solid rgba(var(--fg), .06)
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px
    }

    .logo {
      display: flex;
      align-items: center;
      gap: .6rem;
      font-weight: 800
    }

    .logo svg {
      width: 28px;
      height: 28px
    }

    .nav-links {
      display: flex;
      gap: 1rem;
      align-items: center
    }

    .nav-links a {
      padding: .5rem .75rem;
      border-radius: 10px
    }

    .nav-links a:hover {
      background: rgba(var(--fg), .06);
      text-decoration: none
    }

    /* --- Hero --- */
    .hero {
      position: relative;
      isolation: isolate;
      overflow: hidden
    }

    .hero .bg {
      position: absolute;
      inset: 0;
      z-index: -1;
      background: radial-gradient(1200px 500px at 20% -20%, rgba(14, 165, 233, .25), transparent 60%),
        radial-gradient(900px 400px at 80% 0%, rgba(139, 92, 246, .22), transparent 60%)
    }

    .hero .starfield {
      position: absolute;
      inset: -20%;
      z-index: -2;
      opacity: .35
    }

    .hero .inner {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: clamp(24px, 3vw, 48px);
      align-items: center;
      padding: clamp(48px, 8vw, 120px) 0
    }

    .kicker {
      display: inline-flex;
      align-items: center;
      gap: .5rem
    }

    h1 {
      font-size: clamp(32px, 6vw, 64px);
      line-height: 1.05;
      margin: 0 0 .6rem
    }

    .lead {
      font-size: clamp(16px, 2.1vw, 20px);
      color: rgb(var(--muted))
    }

    .tilt {
      perspective: 900px
    }

    .mock {
      transform-style: preserve-3d;
      transition: transform .6s cubic-bezier(.2, .8, .2, 1)
    }

    .mock img {
      border-radius: calc(var(--radius) + 8px);
      box-shadow: 0 15px 60px rgba(0, 0, 0, .25);
      transform: translateZ(40px)
    }

    /* --- Sections --- */
    section {
      padding: clamp(48px, 8vw, 96px) 0
    }

    .section-title {
      font-size: clamp(24px, 4vw, 40px);
      margin: 0 0 .75rem
    }

    .section-lead {
      color: rgb(var(--muted));
      max-width: 65ch;
      margin-bottom: 1.25rem
    }

    /* --- Features --- */
    .features {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))
    }

    .feature {
      padding: 1.25rem
    }

    .feature h3 {
      margin: .6rem 0 .25rem
    }

    .icon {
      width: 36px;
      height: 36px
    }

    /* --- Showcase / portfolio --- */
    .portfolio {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))
    }

    .work {
      position: relative;
      overflow: hidden
    }

    .work img {
      border-radius: 14px
    }

    .work .meta {
      position: absolute;
      inset: auto 10px 10px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: .6rem;
      padding: .5rem .6rem;
      border-radius: 12px;
      background: rgba(0, 0, 0, .5);
      color: white
    }

    .work:hover img {
      transform: scale(1.04);
      transition: transform .7s cubic-bezier(.2, .8, .2, 1)
    }

    /* --- Timeline --- */
    .timeline {
      position: relative;
      margin-left: 10px
    }

    .timeline::before {
      content: "";
      position: absolute;
      left: 8px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(rgb(var(--brand1)), rgb(var(--brand2)))
    }

    .tl-item {
      position: relative;
      padding-left: 28px;
      margin-bottom: 20px
    }

    .tl-item::before {
      content: "";
      position: absolute;
      left: 0;
      top: .35rem;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: linear-gradient(90deg, rgb(var(--brand1)), rgb(var(--brand2)));
      box-shadow: 0 0 0 3px rgba(0, 0, 0, .08)
    }

    /* --- Pricing --- */
    .pricing {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))
    }

    .price-card {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 12px
    }

    .price {
      font-size: 2rem;
      font-weight: 800
    }

    /* --- Testimonials --- */
    .testimonials {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem
    }

    .quote {
      padding: 1rem;
      position: relative
    }

    .quote::before {
      content: '\201C';
      position: absolute;
      left: 10px;
      top: -20px;
      font: 700 72px/1 serif;
      color: rgba(var(--fg), .08)
    }

    /* --- Footer --- */
    footer {
      padding: 48px 0;
      border-top: 1px solid rgba(var(--fg), .06);
      color: rgb(var(--muted))
    }

    /* --- Utilities --- */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0
    }

    .cols-2 {
      columns: 2;
      gap: 1.25rem
    }

    @media (max-width: 860px) {
      .hero .inner {
        grid-template-columns: 1fr
      }

      .cols-2 {
        columns: 1
      }
    }

    /* --- Animations (progressive) --- */
    .reveal {
      opacity: 0;
      transform: translateY(12px);
      transition: opacity .7s var(--trans), transform .7s var(--trans)
    }

    .reveal.is-visible {
      opacity: 1;
      transform: none
    }

    /* --- Print styles --- */
    @media print {

      header,
      .cta-group,
      .bg,
      .starfield,
      .nav-links,
      .newsletter,
      .mock {
        display: none !important
      }

      .card {
        box-shadow: none
      }
    }
  </style>
</head>

<body>
  <a href="#contenu" class="sr-only">Aller au contenu</a>

  <!-- Header / Nav -->
  <header>
    <div class="container">
      <nav aria-label="Navigation principale">
        <a class="logo" href="#" aria-label="Accueil">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 11.5 12 3l9 8.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8Z" stroke="url(#g)"
              stroke-width="1.5" />
            <defs>
              <linearGradient id="g">
                <stop stop-color="rgb(14,165,233)" />
                <stop offset="1" stop-color="rgb(139,92,246)" />
              </linearGradient>
            </defs>
            <path d="M12 7v13" stroke="currentColor" stroke-width="1.5" />
          </svg>
          <span>Momo Master</span>
        </a>
        <div class="nav-links">
          <a href="#apropos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="site.php">site</a>
          <a href="site2.html">site</a>
          <button id="themeToggle" class="badge" aria-pressed="false" aria-label="Basculer le thème">🌙/☀️</button>
        </div>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero" aria-labelledby="hero-title">
    <div class="bg" aria-hidden="true"></div>
    <canvas class="starfield" id="stars" aria-hidden="true"></canvas>
    <div class="container inner">
      <div>
        <div class="kicker"><span class="badge">Gabarit premium en 1 fichier</span><span
            class="badge">Accessibilité</span><span class="badge">SEO</span></div>
        <h1 id="hero-title">Créez un site moderne, rapide et accessible</h1>
        <p class="lead">Un point de départ élégant avec dark mode, animations douces, composants réutilisables, et
          bonnes pratiques. Déployez en quelques minutes sur GitHub Pages.</p>
        <div class="cta-group" style="display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1rem">
          <a class="btn" href="#projets">Voir les exemples</a>
          <a class="btn outline" href="#contact">Me contacter</a>
        </div>
      </div>
      <div class="tilt">
        <div class="mock card" id="tiltCard">
          <img alt="Aperçu design" loading="lazy"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1'%3E%3Cstop offset='0' stop-color='%230ea5e9'/%3E%3Cstop offset='1' stop-color='%238b5cf6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='%2315222b'/%3E%3Crect x='80' y='80' width='1040' height='640' rx='24' fill='url(%23g)' opacity='.2'/%3E%3Crect x='120' y='140' width='960' height='80' rx='16' fill='white' opacity='.95'/%3E%3Crect x='120' y='255' width='460' height='300' rx='16' fill='white' opacity='.85'/%3E%3Crect x='630' y='255' width='450' height='300' rx='16' fill='white' opacity='.85'/%3E%3C/svg%3E" />
        </div>
      </div>
    </div>
  </section>

  <main id="contenu">
    <!-- À propos -->
    <section id="apropos">
      <div class="container">
        <h2 class="section-title">À propos</h2>
        <p class="section-lead">Ce modèle démontre un maximum de bonnes pratiques modernes : variables CSS, responsive
          design, grilles, animations progressives, respect de <abbr title="Accessibilité">a11y</abbr>, dark mode, SEO,
          et un soupçon de WebGL-like via un canvas étoilé.</p>
        <div class="grid features">
          <article class="feature card reveal">
            <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12h16M4 6h16M4 18h16" stroke="currentColor" stroke-width="1.5" />
            </svg>
            <h3>Architecture claire</h3>
            <p>Un seul fichier, facile à déployer en GitHub Pages. Sections modulaires prêtes à dupliquer.</p>
          </article>
          <article class="feature card reveal">
            <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" />
              <path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" />
            </svg>
            <h3>Performances</h3>
            <p>Sans framework, images inline optimisées, lazy loading, animations respectant
              <code>prefers-reduced-motion</code>.
            </p>
          </article>
          <article class="feature card reveal">
            <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 20v-8l6-8 6 8v8" stroke="currentColor" stroke-width="1.5" />
            </svg>
            <h3>Design premium</h3>
            <p>Gradients subtils, ombres douces, coins arrondis XL, micro-interactions et effet tilt 3D.</p>
          </article>
          <article class="feature card reveal">
            <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="4" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.5" />
              <path d="M7 8h10M7 12h6" stroke="currentColor" stroke-width="1.5" />
            </svg>
            <h3>Accessibilité</h3>
            <p>Contrastes, structure sémantique, navigation clavier, skip link et ARIA.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Projets / Portfolio -->
    <section id="projets">
      <div class="container">
        <h2 class="section-title">Projets</h2>
        <p class="section-lead">Exemples de cartes projet avec métadonnées, parfaits pour lister des idées. Remplacez
          les images par vos captures.</p>
        <div class="grid portfolio">
          <figure class="work card reveal">
            <img src="https://picsum.photos/seed/ui/800/600" alt="Interface utilisateur moderne" loading="lazy"
              width="800" height="600" />
            <figcaption class="meta"><strong>UI Dashboard</strong><span class="badge">Design</span></figcaption>
          </figure>
          <figure class="work card reveal">
            <img src="https://picsum.photos/seed/app/800/600" alt="Application mobile" loading="lazy" width="800"
              height="600" />
            <figcaption class="meta"><strong>App Mobile</strong><span class="badge">Prototype</span></figcaption>
          </figure>
          <figure class="work card reveal">
            <img src="https://picsum.photos/seed/web/800/600" alt="Site e‑commerce" loading="lazy" width="800"
              height="600" />
            <figcaption class="meta"><strong>E‑commerce</strong><span class="badge">Web</span></figcaption>
          </figure>
          <figure class="work card reveal">
            <img src="https://picsum.photos/seed/brand/800/600" alt="Identité de marque" loading="lazy" width="800"
              height="600" />
            <figcaption class="meta"><strong>Branding</strong><span class="badge">Identité</span></figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Services / Pricing -->
    <section id="services">
      <div class="container">
        <h2 class="section-title">Offres & Services</h2>
        <p class="section-lead">Trois paliers clairs, CTA visibles, et points différenciants.</p>
        <div class="grid pricing">
          <article class="price-card card reveal" aria-label="Formule Essential">
            <h3>Essential</h3>
            <p class="price">€499</p>
            <ul>
              <li>1 page landing</li>
              <li>Déploiement GitHub Pages</li>
              <li>Optimisations SEO de base</li>
            </ul>
            <a class="btn" href="#contact">Démarrer</a>
          </article>
          <article class="price-card card reveal" aria-label="Formule Pro">
            <h3>Pro</h3>
            <p class="price">€1 490</p>
            <ul>
              <li>Jusqu'à 5 pages</li>
              <li>Formulaire + intégrations</li>
              <li>Audit performance/a11y</li>
            </ul>
            <a class="btn" href="#contact">Choisir</a>
          </article>
          <article class="price-card card reveal" aria-label="Formule Ultimate">
            <h3>Ultimate</h3>
            <p class="price">Sur mesure</p>
            <ul>
              <li>Design system</li>
              <li>Animations avancées</li>
              <li>Support & suivi</li>
            </ul>
            <a class="btn" href="#contact">Me contacter</a>
          </article>
        </div>
      </div>
    </section>

    <!-- Témoignages -->
    <section aria-labelledby="temoignages">
      <div class="container">
        <h2 id="temoignages" class="section-title">Ils en parlent</h2>
        <div class="testimonials">
          <blockquote class="quote card reveal">Design élégant, charge ultra‑rapide. Parfait pour lancer un produit.
            <footer>— Alex, PM</footer>
          </blockquote>
          <blockquote class="quote card reveal">Accessible au clavier et lecteur d'écran, bravo ! <footer>— Sam, a11y
              lead</footer>
          </blockquote>
          <blockquote class="quote card reveal">Le dark mode auto est un vrai plus pour les visiteurs nocturnes.
            <footer>— Jade, dev</footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Blog / idées -->
    <section aria-labelledby="blog">
      <div class="container">
        <h2 id="blog" class="section-title">Idées & Articles</h2>
        <p class="section-lead">Une colonne multi‑colonnes responsive pour noter vos idées.</p>
        <div class="cols-2">
          <article class="card reveal" style="padding:1rem">
            <h3>10 idées de sections pour un portfolio</h3>
            <p>Exemples : Hero, À propos, Projets, Compétences, Process, Témoignages, Blog, FAQ, Contact, Mentions
              légales.</p>
          </article>
          <article class="card reveal" style="padding:1rem">
            <h3>Checklist performance</h3>
            <ul>
              <li>Images optimisées et lazy</li>
              <li>CSS critique dans le head</li>
              <li>JS déféré, peu dépendances</li>
              <li>Cache + offline (service worker)</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" aria-labelledby="contact-title">
      <div class="container">
        <h2 id="contact-title" class="section-title">Contact</h2>
        <p class="section-lead">Formulaire sans backend (mailto) + fallback accessible. Remplacez par votre solution
          (Formspark, Netlify, etc.).</p>
        <form class="card reveal" style="padding:1rem" action="mailto:contact@example.com" method="post"
          enctype="text/plain">
          <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
            <label>Nom
              <input required name="nom" type="text" placeholder="Votre nom" />
            </label>
            <label>Email
              <input required name="email" type="email" placeholder="vous@exemple.com" />
            </label>
          </div>
          <label>Sujet
            <input name="sujet" type="text" placeholder="Objet du message" />
          </label>
          <label>Message
            <textarea required name="message" rows="5" placeholder="Bonjour…"></textarea>
          </label>
          <div style="display:flex;gap:.75rem;align-items:center;flex-wrap:wrap">
            <button class="btn" type="submit">Envoyer</button>
            <span class="badge">ou écrivez‑moi : contact@example.com</span>
          </div>
        </form>
      </div>
    </section>
  </main>

  <footer>
    <div class="container" style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap">
      <small>© <span id="year"></span> Votre Nom. Tous droits réservés.</small>
      <a href="#" class="badge">Mentions légales</a>
    </div>
  </footer>

  <script>
    // --- Utilitaires ---
    const $ = (sel, el = document) => el.querySelector(sel);
    const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

    // --- Année dynamique ---
    $('#year').textContent = new Date().getFullYear();

    // --- Dark mode toggle (respecte le système) ---
    const root = document.documentElement;
    const themeToggle = $('#themeToggle');
    const saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
    themeToggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
    });

    // --- Effet tilt 3D sur la maquette ---
    const tilt = $('#tiltCard');
    tilt.addEventListener('pointermove', (e) => {
      const r = tilt.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      tilt.style.transform = `rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
    });
    tilt.addEventListener('pointerleave', () => tilt.style.transform = '');

    // --- IntersectionObserver pour .reveal ---
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }
    }, { threshold: .12 });
    $$('.reveal').forEach(el => io.observe(el));

    // --- Canvas étoilé léger ---
    const canvas = $('#stars');
    const ctx = canvas.getContext('2d');
    let w, h, stars = [];
    const rand = (a, b) => Math.random() * (b - a) + a;
    function resize() { w = canvas.width = innerWidth * 1.2; h = canvas.height = innerHeight * 1.2; stars = Array.from({ length: 140 }, () => ({ x: rand(0, w), y: rand(0, h), r: rand(.4, 1.6), s: rand(.2, .8) })); draw(); }
    function draw() {
      ctx.clearRect(0, 0, w, h); for (const s of stars) { ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255,${s.s})`; ctx.fill(); s.x -= s.s * .2; if (s.x < 0) s.x = w; }
      requestAnimationFrame(draw);
    }
    addEventListener('resize', resize, { passive: true }); resize();

    // --- Service worker inline (offline pour cette page) ---
    if ('serviceWorker' in navigator) {
      const swCode = `self.addEventListener('install',e=>{e.waitUntil(caches.open('onefile-v1').then(c=>c.addAll(['./'])))});self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))})`;
      const blob = new Blob([swCode], { type: 'text/javascript' });
      const url = URL.createObjectURL(blob);
      navigator.serviceWorker.register(url).catch(() => { });
    }

    // --- Accessibilité : focus visible pour clavier ---
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') document.body.classList.add('kbd');
    }, { once: true });
    const style = document.createElement('style');
    style.textContent = '.kbd :focus{outline:3px solid rgb(var(--ring)); outline-offset:2px} input,textarea{width:100%;margin-top:.25rem;padding:.7rem;border-radius:10px;border:1px solid rgba(0,0,0,.15);background:transparent;color:inherit} input:focus,textarea:focus{border-color:rgb(var(--ring)); box-shadow:0 0 0 4px rgba(56,189,248,.25)} label{display:block;margin:.6rem 0}';
    document.head.appendChild(style);

    // --- Smooth scroll mieux géré sur anciens navigateurs ---
    $$('.nav-links a').forEach(a => a.addEventListener('click', e => { const id = a.getAttribute('href'); if (id.startsWith('#')) { e.preventDefault(); document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); } }));
  </script>
</body>

</html>