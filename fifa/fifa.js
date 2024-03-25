let dejaVuHomme = false;
let dejaVuFemme = false;
let firstParent = null;

function reinitialiserEquipe() {
    // Supprimer toutes les images avec data-alt="deplacer"
    var imagesDeplacer = document.querySelectorAll('img[data-alt="deplacer"]');
    imagesDeplacer.forEach(function(image) {
        image.parentNode.removeChild(image);
    });
    dejaVuHomme = false;
    dejaVuFemme = false;

    reactiverAttributs(); // Réactiver les attributs ondragover et ondrop pour les zones

    // Réafficher les joueurs disponibles
    afficherJoueursHommes();
    afficherJoueusesFemmes();
}

// Afficher les joueurs disponibles pour les hommes
function afficherJoueursHommes() {
    var imagesHommes = [
        'images/joueur/hommes/badji.png',
        'images/joueur/hommes/barbet.png',
        'images/joueur/hommes/bokele.png',
        'images/joueur/hommes/cassubie.png',
        'images/joueur/hommes/delima.png',
        'images/joueur/hommes/depussay.png',
        'images/joueur/hommes/diaz.png',
        'images/joueur/hommes/ekomié.png',
        'images/joueur/hommes/elis.png',
        'images/joueur/hommes/gregersen.png',
        'images/joueur/hommes/ignatenko.png',
        'images/joueur/hommes/livolant.png',
        'images/joueur/hommes/louis-jean.png',
        'images/joueur/hommes/marcelin.png',
        'images/joueur/hommes/michelin.png',
        'images/joueur/hommes/nsimba.png',
        'images/joueur/hommes/pitu.png',
        'images/joueur/hommes/sissokho.png',
        'images/joueur/hommes/straczek.png',
        'images/joueur/hommes/weissbeck.png'    ];

    if (!dejaVuHomme) {
        var conteneur = document.getElementById('joueursDisponibles');
        conteneur.innerHTML = '';

        conteneur.style.display = 'block';
        document.getElementById('joueusesDisponibles').style.display = 'none';

        imagesHommes.forEach(function(url) {
            if (!document.querySelector('img[src="' + url + '"]')) {
                var img = createDraggableImage(url);
                conteneur.appendChild(img);
            }
        });

        styleContainer(conteneur, '25vw', '72vh');
        dejaVuHomme = true;
        dejaVuFemme = false;
    }
}

// Afficher les joueuses disponibles pour les femmes
function afficherJoueusesFemmes() {
    var imagesFemmes = [
        'images/joueur/femmes/autin.png',
        'images/joueur/femmes/dehri.png',
        'images/joueur/femmes/diaz.png',
        'images/joueur/femmes/haelewyn.png',
        'images/joueur/femmes/herbert.png',
        'images/joueur/femmes/lardez.png',
        'images/joueur/femmes/lerond.png',
        'images/joueur/femmes/liaigre.png',
        'images/joueur/femmes/seguin.png',
        'images/joueur/femmes/tarrieu.png'    ];

    if (!dejaVuFemme) {
        var conteneur = document.getElementById('joueusesDisponibles');
        conteneur.innerHTML = '';

        conteneur.style.display = 'block';
        document.getElementById('joueursDisponibles').style.display = 'none';

        imagesFemmes.forEach(function(url) {
            if (!document.querySelector('img[src="' + url + '"]')) {
                var img = createDraggableImage(url);
                conteneur.appendChild(img);
            }
        });

        styleContainer(conteneur, '25vw', '54vh');
        dejaVuFemme = true;
        dejaVuHomme = false;
    }
}

// Créer une image draggable
function createDraggableImage(url) {
    var img = document.createElement('img');
    img.src = url;
    img.alt = url;
    img.draggable = true;
    img.ondragstart = function(event) {
        drag(event);
    };
    return img;
}

// Réactiver les attributs ondragover et ondrop pour les zones
function reactiverAttributs() {
    // Sélectionner toutes les div avec une classe commençant par 'zone'
    let zones = document.querySelectorAll('[class^="zone"]');
    
    // Parcourir chaque élément zone
    zones.forEach(function(zone) {
        // Ajouter les attributs ondragover et ondrop
        zone.setAttribute('ondragover', 'allowDrop(event)');
        zone.setAttribute('ondrop', 'drop(event)');
    });
}


// Styliser un conteneur
function styleContainer(container, width, height) {
    container.style.marginTop = '1vh';
    container.style.paddingTop = '1vh';
    container.style.paddingBottom = '1vh';
    container.style.width = width;
    container.style.height = height;
    container.style.backgroundColor = 'goldenrod';
    container.style.border = '0.5vh solid black';
}

// Permettre le drop
function allowDrop(event) {
    event.preventDefault();
}

// Drag
function drag(event) {
    // Sauvegarde de l'élément parent initial
    firstParent = event.target.parentNode;

    event.dataTransfer.setData("text", event.target.alt);
}

// Drop
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var img = document.createElement("img");
    img.src = data;
    img.alt = data;
    
    // Ajouter l'attribut data-alt uniquement si l'image est déplacée
    if (event.target.parentNode.className !== 'attaque' &&
        event.target.parentNode.className !== 'milieu' &&
        event.target.parentNode.className !== 'defense' &&
        event.target.parentNode.className !== 'gardien') {
        img.dataset.alt = 'deplacer';
    }
    
    event.target.parentNode.appendChild(img);
    
    // Vérifier si l'image d'origine existe encore dans firstParent avant de la supprimer
    if (firstParent.contains(document.querySelector('img[alt="' + data + '"]'))) {
        firstParent.removeChild(document.querySelector('img[alt="' + data + '"]'));
    }

    if (event.target.parentNode.className.startsWith('zone') && event.target.parentNode.className !== firstParent.className) {
        event.target.parentNode.removeAttribute('ondrop');
        event.target.parentNode.removeAttribute('ondragover');
    }
}

// Compteur de joueurs restants
function compteur() {
    let joueurs = document.querySelectorAll('img[data-alt="deplacer"]');
    let restant = 11 - joueurs.length;
    return restant;
}

// Valider l'équipe
function valider() {
    joueurRestant = compteur();
    if (joueurRestant == 0) {
        redirectToFinalTeamPage();
    } else {
        var form = document.getElementById('myForm');

        // Récupérer tous les joueurs avec la classe "deplacer"
        var joueurs = document.querySelectorAll('.deplacer');
    
        // Parcourir les joueurs et ajouter leurs données au formulaire
        joueurs.forEach(function(joueur, index) {
            var hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.name = 'joueur' + index; // Utilisez un nom unique pour chaque joueur
            hiddenInput.value = joueur.src; // Utilisez une valeur appropriée, par exemple, l'URL de l'image
            form.appendChild(hiddenInput); // Ajouter le champ de formulaire caché au formulaire
        });
    }
}

window.onload=reactiverAttributs;