let dejaVuHomme = false;
let dejaVuFemme = false;

function afficherJoueursHommes(){

    document.getElementById('joueursDisponibles').innerHTML = '';


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

    if(!dejaVuHomme){

        document.getElementById('joueursDisponibles').style.display = 'block';
        document.getElementById('joueusesDisponibles').style.display = 'none';
    
        var conteneur = document.getElementById('joueursDisponibles');
    
        imagesHommes.forEach(function(url) {
            var img = document.createElement('img');
            img.src = url;
            img.alt = 'Joueur de football';
            conteneur.appendChild(img);
        });

        conteneur.style.marginTop='1vh';
        conteneur.style.paddingTop='1vh';
        conteneur.style.paddingBottom='1vh';
        conteneur.style.width = '25vw';
        conteneur.style.height = '72vh';
        conteneur.style.backgroundColor = 'goldenrod';
        conteneur.style.border = '0.5vh solid black';

        dejaVuHomme=true;
        dejaVuFemme=false;
    }

}



function afficherJoueusesFemmes(){

    document.getElementById('joueusesDisponibles').innerHTML = '';

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


    if(!dejaVuFemme){
        document.getElementById('joueusesDisponibles').style.display = 'block';
        document.getElementById('joueursDisponibles').style.display = 'none';
    
        var conteneur1 = document.getElementById('joueusesDisponibles');
    
        imagesFemmes.forEach(function(url) {
            var img = document.createElement('img');
            img.src = url;
            img.alt = 'Joueuse de football';
            conteneur1.appendChild(img);
        });
    
        conteneur1.style.marginTop='1vh';
        conteneur1.style.paddingTop='1vh';
        conteneur1.style.paddingBottom='1vh';
        conteneur1.style.width = '25vw';
        conteneur1.style.height = '54vh';
        conteneur1.style.backgroundColor = 'goldenrod';
        conteneur1.style.border = '0.5vh solid black';

        dejaVuFemme=true;
        dejaVuHomme=false;
    }

}
