<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" lang="fr">
    <title>Table de multiplication</title>
</head>
<body>

<?php

function revision($table) {
    $win = 0;
    while ($win != 10) {
        $rand = rand(0, 10);
        echo ("$table x $rand = ?");
        // Affiche un formulaire pour obtenir la réponse de l'utilisateur
        echo "<form method='post'>";
        echo "<input type='number' name='reponse'>";
        echo "<input type='submit' value='Valider'>";
        echo "</form>";

        if(isset($_POST['reponse'])) {
            $result = intval($_POST['reponse']);
            $true = $table * $rand;
            if ($result == $true) {
                $win++;
            }
        }
    }
}

function jeu() {
    echo "<form method='post'>";
    echo "Voulez-vous réviser une table aléatoire ? (oui/non)";
    echo "<input type='text' name='tablealea'>";
    echo "<input type='submit' value='Commencer'>";
    echo "</form>";
    if(isset($_POST['tablealea'])){
        if ( $_POST['tablealea'] == "oui") {
            $tablerandom = rand(1, 10);
            revision($tablerandom);
        }
        else{
            echo "<form method='post'>";
            echo "Quelle table voulez-vous réviser ?";
            echo "<input type='number' name='table'>";
            echo "<input type='submit' value='Commencer'>";
            echo "</form>";
        }
    }
}

jeu();
?>

</body>
</html>
