<!DOCTYPE html>
    <html lang="fr">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Site Vitrine Maurice</title>
                    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                        <style>
                            body.dark {background: #111; color: #eee; }
                        </style>
                        <script>
                            function toggleTheme() {
                                document.body.classList.toggle('dark');
    }
                            function toggleLang() {
      const fr = document.querySelectorAll('[data-fr]');
                            const en = document.querySelectorAll('[data-en]');
      fr.forEach(el => el.classList.toggle('hidden'));
      en.forEach(el => el.classList.toggle('hidden'));
    }
                            function demoStripe() {
                                alert('Simulation paiement Stripe — en vrai on connecte l’API Stripe.');
    }
                        </script>
                    </head>
                    <body class="bg-gray-50 text-gray-900">
                        <!-- Header -->
                        <header class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                            <a href="#home" class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg">M</div>
                                <div class="hidden sm:block">
                                    <h1 class="text-xl font-semibold">Maurice — Vitrine & Démo</h1>
                                    <p class="text-sm opacity-70">Un aperçu de ce que je peux construire</p>
                                </div>
                            </a>
                            <nav class="flex items-center gap-4">
                                <a href="#features" class="text-sm hover:underline">Fonctionnalités</a>
                                <a href="#portfolio" class="text-sm hover:underline">Projets</a>
                                <a href="#contact" class="text-sm hover:underline">Contact</a>
                                <button onclick="toggleLang()" class="px-2 py-1 rounded ring-1 ring-gray-200 text-sm">FR/EN</button>
                                <button onclick="toggleTheme()" class="ml-3 p-2 rounded-lg ring-1 ring-gray-200" title="Basculer thème clair/sombre">🌙/☀️</button>
                            </nav>
                        </header>

                        <!-- Hero -->
                        <main id="home" class="max-w-6xl mx-auto px-6">
                            <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
                                <div>
                                    <h2 class="text-4xl sm:text-5xl font-extrabold leading-tight" data-fr>Je crée des expériences web rapides, belles et utiles.</h2>
                                    <h2 class="text-4xl sm:text-5xl font-extrabold leading-tight hidden" data-en>I build fast, beautiful and useful web experiences.</h2>

                                    <p class="mt-4 text-lg opacity-80" data-fr>Portfolio interactif — animations, accessibilité, progressive enhancement, et plus.</p>
                                    <p class="mt-4 text-lg opacity-80 hidden" data-en>Interactive portfolio — animations, accessibility, progressive enhancement, and more.</p>

                                    <div class="mt-6 flex gap-3">
                                        <a class="px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow" href="#portfolio">Voir mes projets</a>
                                        <a class="px-5 py-3 rounded-xl ring-1 ring-gray-200" href="#contact">Me contacter</a>
                                    </div>

                                    <div class="mt-6">
                                        <button onclick="demoStripe()" class="px-5 py-3 rounded-xl bg-green-600 text-white font-medium shadow">Démo Paiement Stripe</button>
                                    </div>
                                </div>
                                <div>
                                    <div class="rounded-2xl overflow-hidden shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60" alt="Illustration" class="w-full h-80 object-cover" />
                                    </div>
                                </div>
                            </section>

                            <!-- Features -->
                            <section id="features" class="py-12">
                                <h3 class="text-2xl font-bold">Ce que je maîtrise</h3>
                                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <article class="p-5 rounded-xl bg-white shadow">
                                        <div class="text-3xl">🎨</div>
                                        <h4 class="font-semibold mt-3">Design moderne & accessible</h4>
                                        <p class="mt-2 text-sm opacity-75">Contrastes forts, navigation clavier, balises ARIA et contenu lisible.</p>
                                    </article>
                                    <article class="p-5 rounded-xl bg-white shadow">
                                        <div class="text-3xl">✨</div>
                                        <h4 class="font-semibold mt-3">Animations soignées</h4>
                                        <p class="mt-2 text-sm opacity-75">Micro-interactions pour une expérience fluide.</p>
                                    </article>
                                    <article class="p-5 rounded-xl bg-white shadow">
                                        <div class="text-3xl">⚡</div>
                                        <h4 class="font-semibold mt-3">Performance & SEO</h4>
                                        <p class="mt-2 text-sm opacity-75">HTML propre, images optimisées et structure sémantique.</p>
                                    </article>
                                    <article class="p-5 rounded-xl bg-white shadow">
                                        <div class="text-3xl">📱</div>
                                        <h4 class="font-semibold mt-3">Responsive & Mobile-first</h4>
                                        <p class="mt-2 text-sm opacity-75">Fonctionne sur mobile, tablette et bureau.</p>
                                    </article>
                                </div>
                            </section>

                            <!-- Portfolio -->
                            <section id="portfolio" class="py-12">
                                <h3 class="text-2xl font-bold">Projets</h3>
                                <p class="mt-2 opacity-75">Cliquez sur un projet pour en savoir plus.</p>
                                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <article class="p-4 rounded-xl bg-white shadow">
                                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60" class="w-full h-40 object-cover rounded" alt="Todo App" />
                                        <h4 class="font-semibold mt-3">Application ToDo intelligente</h4>
                                        <p class="mt-2 text-sm opacity-75">ToDo list hors-ligne avec rappels et catégories.</p>
                                    </article>
                                    <article class="p-4 rounded-xl bg-white shadow">
                                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60" class="w-full h-40 object-cover rounded" alt="Dashboard" />
                                        <h4 class="font-semibold mt-3">Dashboard analytique</h4>
                                        <p class="mt-2 text-sm opacity-75">Visualisations claires pour décisions rapides.</p>
                                    </article>
                                    <article class="p-4 rounded-xl bg-white shadow">
                                        <img src="https://images.unsplash.com/photo-1541807084-5c52b6b9d61d?auto=format&fit=crop&w=1200&q=60" class="w-full h-40 object-cover rounded" alt="E-commerce" />
                                        <h4 class="font-semibold mt-3">Site e‑commerce épuré</h4>
                                        <p class="mt-2 text-sm opacity-75">Parcours d'achat optimisé.</p>
                                    </article>
                                </div>
                            </section>

                            <!-- Contact -->
                            <section id="contact" class="py-12">
                                <h3 class="text-2xl font-bold">Contact</h3>
                                <form class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onsubmit="event.preventDefault(); alert('Merci — démo de formulaire.');">
                                    <label class="flex flex-col">
                                        <span class="text-sm">Nom</span>
                                        <input required class="mt-1 p-3 rounded-lg bg-white ring-1 ring-gray-200" placeholder="Ton nom" />
                                    </label>
                                    <label class="flex flex-col">
                                        <span class="text-sm">Email</span>
                                        <input required type="email" class="mt-1 p-3 rounded-lg bg-white ring-1 ring-gray-200" placeholder="email@exemple.com" />
                                    </label>
                                    <label class="flex flex-col md:col-span-2">
                                        <span class="text-sm">Message</span>
                                        <textarea required rows="5" class="mt-1 p-3 rounded-lg bg-white ring-1 ring-gray-200" placeholder="Décris ton besoin..."></textarea>
                                    </label>
                                    <div class="md:col-span-2 flex items-center gap-3">
                                        <button type="submit" class="px-5 py-3 rounded-xl bg-indigo-600 text-white">Envoyer</button>
                                        <a class="px-4 py-3 rounded-xl ring-1" href="mailto:contact@exemple.com">Ou envoie un mail</a>
                                    </div>
                                </form>
                            </section>

                            <!-- Footer -->
                            <footer class="py-10 text-sm opacity-80">
                                <div class="flex items-center justify-between">
                                    <div>© 2025 Maurice — Prototype</div>
                                    <div class="flex gap-4">
                                        <a href="#">Mentions légales</a>
                                        <a href="#">Politique de confidentialité</a>
                                    </div>
                                </div>
                            </footer>
                        </main>
                    </body>
                </html>
