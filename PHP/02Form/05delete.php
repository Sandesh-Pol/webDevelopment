 
 <!-- 05delete.php -->
<?php 
 include "00declare.php";    
 include "02conneection.php";   
    $sql = "DELETE FROM `datainfo` WHERE id = 1";


    if (mysqli_query($conn,$sql)) {
        echo "New record deleted successfully";
    }
    else{
        echo "Error  : ".$sql  . "<br>" . mysqli_error($conn);
    }
?>