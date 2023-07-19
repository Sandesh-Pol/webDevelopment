<!-- 04Insert.php -->
<?php 
 include "00declare.php";    
 include "02conneection.php";   
    $sql = "INSERT INTO `datainfo`(`name`, `email`, `age`, `gender`, `message`) VALUES ('$name', '$email', $age, '$gender', '$message')";


    if (mysqli_query($conn,$sql)) {
        echo "New record inserted successfully";
    }
    else{
        echo "Error  : ".$sql  . "<br>" . mysqli_error($conn);
    }
?>