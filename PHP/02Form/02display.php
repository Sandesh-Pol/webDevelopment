<?php  
        $name = $_POST['name'];
        $email = $_POST['email'];
        $age   = $_POST['age'];
        $gender =  $_POST['gender'];
        $message = $_POST['message'];
?>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
   table, th,td{
        border: 1px solid black;
        padding: 5px;
    } 
    table{
        border-collapse: collapse;
    }
</style>
<body>
<table>
    <tr>
        <td>Full Name</td>
        <td><?php echo $name; ?></td>
    </tr>
    <tr>
        <td>Email</td>
        <td><?php echo $email; ?></td>
    </tr>
    <tr>
        <td>Age</td>
        <td><?php echo $age; ?></td>
    </tr>
    <tr>
        <td>Gender</td>
        <td><?php echo $gender; ?></td>
    </tr>
    <tr>
        <td>Message</td>
        <td><?php echo $message; ?></td>
    </tr>
</table>

</body>
</html>