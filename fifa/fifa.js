// Variables pour contrôler l'affichage des joueurs
var dejaVuHomme = false;
var dejaVuFemme = false;
var firstParent = null;

// Tableaux contenant les URLs des images des joueurs puis joueuses
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
    'images/joueur/femmes/tarrieu.png'
];
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
    'images/joueur/hommes/weissbeck.png'
];

// Fonction pour réinitialiser l'équipe
function reinitialiserEquipe() {
    // Supprimer toutes les images avec l'attribut data-alt="deplacer"
    var imagesDeplacer = document.querySelectorAll('img[data-alt="deplacer"]');
    imagesDeplacer.forEach(function(image) {
        image.parentNode.removeChild(image);
    });
    // Réinitialiser les variables de contrôle
    dejaVuHomme = false;
    dejaVuFemme = false;
    // Réactiver les attributs ondragover et ondrop pour les zones
    reactiverAttributs();
    // Réafficher les joueurs disponibles
    afficherJoueursHommes();
    afficherJoueusesFemmes();
}

// Fonction pour afficher les joueurs disponibles pour les hommes
function afficherJoueursHommes() {
    if (!dejaVuHomme) {
        var conteneur = document.getElementById('joueursDisponibles');
        conteneur.innerHTML = '';
        conteneur.style.display = 'block';
        document.getElementById('joueusesDisponibles').style.display = 'none';
        imagesHommes.forEach(function(url) {
            if (!document.querySelector('img[src="' + url + '"]')) {
                var img = DraggableImg(url);
                conteneur.appendChild(img);
            }
        });
        //petit box
        box(conteneur, '25vw', '72vh');
        dejaVuHomme = true;
        dejaVuFemme = false;
    }
}

// Fonction pour afficher les joueuses disponibles pour les femmes
function afficherJoueusesFemmes() {
    if (!dejaVuFemme) {
        var conteneur = document.getElementById('joueusesDisponibles');
        conteneur.innerHTML = '';
        conteneur.style.display = 'block';
        document.getElementById('joueursDisponibles').style.display = 'none';
        imagesFemmes.forEach(function(url) {
            if (!document.querySelector('img[src="' + url + '"]')) {
                var img = DraggableImg(url);
                conteneur.appendChild(img);
            }
        });
        //petite box
        box(conteneur, '25vw', '54vh');
        dejaVuFemme = true;
        dejaVuHomme = false;
    }
}

// Créer une image draggable
function DraggableImg(url) {
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
    var zones = document.querySelectorAll('[class^="zone"]');
    // Parcourir chaque élément zone et ajouter les attrib
    zones.forEach(function(zone) {
        // Ajouter les attributs ondragover et ondrop
        zone.setAttribute('ondragover', 'activerDrop(event)');
        zone.setAttribute('ondrop', 'drop(event)');
    });
}

//ajout des attributs ondragover et ondrop
function ajoutDropetDragover(elt) {
    elt.addEventListener('dragover', function(event) {
        event.preventDefault();
    });
    elt.addEventListener('drop', function(event) {
        event.preventDefault();
        drop(event);
    });
}

// Styliser un conteneur
function box(container, width, height) {
    container.style.marginTop = '1vh';
    container.style.paddingTop = '1vh';
    container.style.paddingBottom = '1vh';
    container.style.width = width;
    container.style.height = height;
    container.style.backgroundColor = 'goldenrod';
    container.style.border = '0.5vh solid black';
}

// Permettre le drop
function activerDrop(elt) {
    elt.preventDefault();
}

//fonction utiliser pour les déplacement
function drag(elt) {
    // Sauvegarde de l'élément parent initial
    firstParent = elt.target.parentNode;
    elt.dataTransfer.setData("text", elt.target.alt);
}


// Drop
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");

    // Trouver l'image déplacée
    var img = document.querySelector('img[src="' + data + '"]');

    //rajout des elements drop et dragover
    if(img.parentNode !== null && 
        img.parentNode.id !== 'joueursDisponibles' && 
        img.parentNode.id !== 'joueusesDisponibles'){
        ajoutDropetDragover(img.parentNode);
    }

    // Si l'image est déposée sur l'élément représentant la poubelle
    if (event.target.classList.contains('poubelle')) {
        // Supprimer l'image du terrain si elle est trouvée
        if (img && img.parentNode){
            img.parentNode.removeChild(img);
            
            // Ajouter l'URL de l'image à la liste appropriée
            if (data.includes('femmes')) {
                imagesFemmes.push(data);
                // Créer une nouvelle image pour le joueur et l'ajouter à la liste des joueurs disponibles
                var newImg = DraggableImg(data);
                document.getElementById('joueusesDisponibles').appendChild(newImg);
                
            } else {
                imagesHommes.push(data);
                // Créer une nouvelle image pour le joueur et l'ajouter à la liste des joueurs disponibles
                var newImg = DraggableImg(data);
                document.getElementById('joueursDisponibles').appendChild(newImg);
            }
        }
    } else { // Si l'image est déplacée à l'intérieur du terrain
        // Autres logiques de gestion du dépôt sur le terrain, si nécessaire
        // Ajouter l'attribut data-alt uniquement si l'image est déplacée
        if (img && event.target.parentNode.className !== 'attaque' &&
            event.target.parentNode.className !== 'milieu' &&
            event.target.parentNode.className !== 'defense' &&
            event.target.parentNode.className !== 'gardien') {
            img.dataset.alt = 'deplacer';
        }

        // Ajouter l'image à l'emplacement actuel
        event.target.parentNode.appendChild(img);

        // Vérifier si l'image d'origine existe encore dans firstParent avant de la supprimer
        if (firstParent.contains(document.querySelector('img[alt="' + data + '"]'))) {
            firstParent.removeChild(document.querySelector('img[alt="' + data + '"]'));
        }

        // Réactiver les événements ondragover et ondrop pour l'emplacement initial
        if (firstParent.className.startsWith('zone')) {
            firstParent.setAttribute('ondragover', 'activerDrop(event)');
            firstParent.setAttribute('ondrop', 'drop(event)');
        }
    }

    if (event.target.parentNode.className.startsWith('zone') && event.target.parentNode.className !== firstParent.className) {
        event.target.parentNode.removeAttribute('ondrop');
        event.target.parentNode.removeAttribute('ondragover');
    }

    // Réactiver les attributs ondragover et ondrop pour la zone12
    document.querySelector('.zone12').setAttribute('ondrop', 'drop(event)');
    document.querySelector('.zone12').setAttribute('ondragover', 'activerDrop(event)');
}

// Compteur de joueurs restants
function compteur() {
    var joueurs = document.querySelectorAll('img[data-alt="deplacer"]');
    var restant = 11 - joueurs.length;
    return restant;
}

//fonction de fin qui dirige vers la page de fin avec le contenue de .right
function valider() {
    var joueurRestant = compteur();
    if (joueurRestant == 0) {
        var result = document.querySelector('.right').innerHTML;
        var encoded = encodeURIComponent(result);
        var destinationUrl = 'fin.html?content=' + encoded;
        // Rediriger vers l'URL construite
        window.location.href = destinationUrl;
    } else {
        alert("Il faut placer 11 joueurs");
    }
}

//execute la fonction reactiverAttributs au début de la page
window.onload = reactiverAttributs;
