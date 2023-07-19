<!-- 03display.php -->
<?php
 include '02conneection.php';

$sqlSelect = "SELECT * FROM datainfo";

if (mysqli_query($conn,$sqlSelect)) {
    $result = $conn->query($sqlSelect);
    echo "New record display successfully";
}
else{
    echo "Error  : ".$sql  . "<br>" . mysqli_error($conn);
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Display Data from MySQL using PHP</title>
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
    <h1>User Data:</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
        </tr>
        <?php
        // Loop through the result set and display the data
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row["name"] . "</td>";
            echo "<td>" . $row["email"] . "</td>";
            echo "<td>" . $row["age"] . "</td>";
            echo "<td>" . $row["gender"] . "</td>";
            echo "<td>" . $row["message"] . "</td>";
            echo "</tr>";
        }
        ?>
    </table>
</body>
</html>



































<!-- <html lang="en">
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
</html> -->