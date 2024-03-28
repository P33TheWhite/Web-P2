//prend le contenu passé en tant que paramètre 'content' dans l'URL puis injecte dans la page .right
function formulaire(){
    //extraction des paramètres de la requête GET
    var extraction = new URLSearchParams(window.location.search);
    var contenu = decodeURIComponent(extraction.get('content'));

    //cherche element de .right et charge son contenu
    var rightElement = document.querySelector('.right');
    if (rightElement) {
        rightElement.innerHTML = contenu;
    }
    //desactiver le allowdrop des images
    var images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('draggable', 'false');
    });
}


//execute la fonction formulaire au début de la page
window.onload=formulaire;