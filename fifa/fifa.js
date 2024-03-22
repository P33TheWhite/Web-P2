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

    // Réafficher les joueurs disponibles
    afficherJoueursHommes();
    afficherJoueusesFemmes();
}

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
        'images/joueur/hommes/weissbeck.png'
    ];

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
        'images/joueur/femmes/tarrieu.png'
    ];

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

function styleContainer(container, width, height) {
    container.style.marginTop = '1vh';
    container.style.paddingTop = '1vh';
    container.style.paddingBottom = '1vh';
    container.style.width = width;
    container.style.height = height;
    container.style.backgroundColor = 'goldenrod';
    container.style.border = '0.5vh solid black';
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    // Sauvegarde de l'élément parent initial
    firstParent = event.target.parentNode;
    event.dataTransfer.setData("text", event.target.alt);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var img = document.createElement("img");
    img.src = data; // Utilisez l'information transmise pour déterminer l'URL de l'image
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

}

function compteur() {
    let joueurs = document.querySelectorAll('img[data-alt="deplacer"]');
    console.log(joueurs.length)
    let restant = 11 - joueurs.length;
    return restant;
}

function valider() {
    joueurRestant = compteur();
    if (joueurRestant == 0) {
        alert("Bravo");
    } else {
        if (joueurRestant == 1) {
            alert("Il vous reste joueur " + joueurRestant + " à placer");
        } else {
            alert("Il vous reste joueurs " + joueurRestant + " à placer");
        }
    }
}
