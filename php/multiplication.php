<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" lang="fr">
        <title>Table de multiplication</title>
    </head>
<body>

<?php

    function revision($table){
        $win=0;
        while($win!=10){
            $rand=rand(0,10);
            echo ("$table x $rand = ?");
            $result = fgets(STDIN);
            $true=$table*$rand;
            if($result== $true){
                $win++;
            }
        }
    }

    function jeu(){
        echo "Voulez-vous reviser une table aléatoire ?";
        $rep = fgets(STDIN);
        if($rep == "oui"){
            $tablerandom=rand(1,10);
            revision($tablerandom);
        }
        else{
            echo "Quelle table voulez vous réviser ?";
            $table = fgets(STDIN);
            revision($table);
        }
    }



function revision1($table) {
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

function jeu1() {
    if (isset($_POST['table'])) {
        $table = intval($_POST['table']);
        revision1($table);
    } else {
        echo "<form method='post'>";
        echo "Quelle table voulez-vous réviser ?";
        echo "<input type='number' name='table'>";
        echo "<input type='submit' value='Commencer'>";
        echo "</form>";
    }
}

jeu1();
?>


</body>
</html>