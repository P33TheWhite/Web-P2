<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Student</title>
</head>
<body>
    <?php
        $name = $_POST['name'];
        $firstName = $_POST['firstName'];
        $birthday = $_POST['birthday'];
        $points = $_POST['points'];
        $pseudo = $_POST['pseudo'];
        $password = $_POST['password'];

        $studentData = array($name, $firstName, $birthday, $points, $pseudo, $password);

        $file = fopen('informationStudent.csv', 'a+');
        fputcsv($file, $studentData);

        fclose($file);
    ?>
    <p>You have been registered</p>
    <p><a href="studentRegistration.php">Add new guys</a></p>
</body>
</html>