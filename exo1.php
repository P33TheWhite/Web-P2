<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" lang="fr">
        <title>Test PHP</title>
    </head>
<body>

<?php
    $informationJoueur=array(array("Nom", "Prénom", "Date de Naissance", "Poste"),
    array("Giroud","Olivier","30/09/1986", "Attaquant"),
    array("Griezman", "Antoine", "21/03/1991", "Attaquant"),
    array("MBappe", "Kylian", "20/11/1998", "Attaquant"),
    array("Nobbs", "Jordan", "08/12/1992", "Attaquant"),
    array("Williamson", "Leah", "29/03/1997", "Defense"),
    array("Earps", "Mary", "07/03/1993", "Gardien"));

    function age($age){
        $x = 2024-substr($age,-4);;
        echo (" => $x ans");
    }
    echo "<table>";
    $cpt=0;
    foreach($informationJoueur as $ligne){
        echo "<tr>";

        foreach($ligne as $key => $val){
            echo ("<td>$val <td>");
        }
        if ($cpt!=0){
            age($ligne[2]);
        }
        $cpt++;
        echo ("</tr>");
    }
    echo "</table>";

?>

</body>
</html>