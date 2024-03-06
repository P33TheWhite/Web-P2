nom = new Array();
valeur = new Array();
/* On enlève le ? */
url = window.location.search.slice(1,window.location.search.length);
/* récupérer les différents paramètres séparés par un & */
listParam = url.split("&");
for(i=0;i<listParam.length;i++){
    laListe = listParam[i].split("=");
    nom[i] = laListe[0];
    valeur[i] = laListe[1];
}
document.getElementById("pate").innerHTML = valeur[0];
document.getElementById("base").innerHTML = valeur[1];
document.getElementById("ingredient1").innerHTML = valeur[2];
document.getElementById("ingredient2").innerHTML = valeur[3];
document.getElementById("ingredient3").innerHTML = valeur[4];
document.getElementById("fidelité").innerHTML = valeur[5];

