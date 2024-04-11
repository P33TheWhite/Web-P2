<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student registration form</title>
</head>
<body>
    <h3>Student registration form</h3>
    <form action="registerStudent.php" method="post">
        <p>Name : <input type="text" id="name" name="name"></p>
        <p>First Name : <input type="text" id="firstName" name="firstName"></p>
        <p>Birthday : <input type="date" id="birthday" name="birthday"></p>
        <p>Points : <input type="number" id="points" name="points"></p>
        <p>Pseudo : <input type="text" id="pseudo" name="pseudo"></p>
        <p>Password : <input type="password" id="password" name="password"></p>
        <p><input type="submit" value="submit"></p>
</body>
</html>
