<!-- 06ubdate.php -->
 
<?php 
 include "00declare.php";    
 include "02conneection.php";   
    $sql = "UPDATE `datainfo` SET `name`='[value-1]',`email`='[value-2]',`age`='[value-3]',`gender`='[value-4]',`message`='[value-5]' WHERE 1";


    if (mysqli_query($conn,$sql)) {
        echo "New record undated successfully";
    }
    else{
        echo "Error  : ".$sql  . "<br>" . mysqli_error($conn);
    }
?>