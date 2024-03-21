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

    jeu();
?>

</body>
</html>