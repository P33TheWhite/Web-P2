function afficherContenuRight() {
    // Récupérer toutes les div avec la classe "right"
    var divsRight = document.querySelectorAll('.right');
    
    // Créer un fragment de document pour y ajouter les contenus
    var fragment = document.createDocumentFragment();

    // Parcourir toutes les divs avec la classe "right"
    divsRight.forEach(function(divRight) {
        // Cloner la div
        var clone = divRight.cloneNode(true);
        // Ajouter le clone au fragment de document
        fragment.appendChild(clone);
    });

    // Sélectionner le conteneur où afficher les divs sur la page finale (fin.html)
    var conteneurFinale = document.body; // Ou sélectionnez un autre conteneur selon votre structure HTML

    // Ajouter le fragment contenant les divs au conteneur sur la page finale
    conteneurFinale.appendChild(fragment);
}

// Appeler la fonction pour afficher les divs sur la page finale
afficherContenuRight();
