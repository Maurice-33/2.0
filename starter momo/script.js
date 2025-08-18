<!-- Fichier index.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple avec Script JS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            text-align: center;
        }
        .container {
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #0056b3;
        }
        #message {
            margin-top: 20px;
            font-size: 1.2rem;
            color: #555;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Cliquez sur le bouton !</h1>
        <button id="myButton">Générer un message</button>
        <p id="message"></p>
    </div>

    <!-- Le fichier script.js est lié ici à la fin du body pour s'assurer que le DOM est entièrement chargé -->
    <script src="script.js"></script>

</body>
</html>
```javascript
// Fichier script.js
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne le bouton et l'élément de message par leur ID
    const button = document.getElementById('myButton');
    const messageDisplay = document.getElementById('message');

    // Ajoute un écouteur d'événement 'click' au bouton
    button.addEventListener('click', () => {
        // Définit le message à afficher
        const newMessage = "Bonjour ! Vous avez cliqué sur le bouton avec succès.";

        // Met à jour le contenu de l'élément de message
        messageDisplay.textContent = newMessage;

        // Optionnel : change la couleur du texte pour le rendre plus visible
        messageDisplay.style.color = 'green';
    });
});
