
<?php  
        include "01formMeathods.php";
        $name = $_POST['name'];
        $email = $_POST['email'];
        $age   = $_POST['age'];
        $gender =  $_POST['gender'];
        $message = $_POST['message'];

    include '03conneection.php';

    $sql = "INSERT INTO `datainfo`(`name`, `email`, `age`, `gender`, `message`) VALUES ('$name', '$email', $age, '$gender', '$message')";


    if (mysqli_query($conn,$sql)) {
        echo "New record inserted successfully";
    }
    else{
        echo "Error  : ".$sql  . "<br>" . mysqli_error($conn);
    }
?>