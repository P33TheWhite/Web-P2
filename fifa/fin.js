function truc(){
    const urlParams = new URLSearchParams(window.location.search);
    const content = decodeURIComponent(urlParams.get('content'));

    // Mettez à jour le contenu de l'élément avec la classe 'right' une fois que le DOM est entièrement chargé
    const rightElement = document.querySelector('.right');
    if (rightElement) {
        rightElement.innerHTML = content;
    } else {
        console.error("L'élément avec la classe 'right' n'a pas été trouvé.");
    }
}

window.onload=truc;