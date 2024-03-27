//prend le contenu passé en tant que paramètre 'content' dans l'URL puis injecte dans la page .right
function formulaire(){
    //extraction des paramètres de la requête GET
    let extraction = new URLSearchParams(window.location.search);
    let contenu = decodeURIComponent(extraction.get('content'));

    //cherche element de .right et charge son contenu
    let rightElement = document.querySelector('.right');
    if (rightElement) {
        rightElement.innerHTML = contenu;
    }
}


//execute la fonction formulaire au début de la page
window.onload=formulaire;