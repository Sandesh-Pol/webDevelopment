<?php
     $data = array("name" => 'Sandesh',"middleName" => 'Gajendra',"lastName" => 'Pol' );
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head> 
<body>
    <?php
       foreach ($data as $key => $value) {
       
    ?>
    <h3><?php
        echo "Key : ".$key."<br>"."Value  :".$value;
    ?></h3>
    <?php
        }
    ?>
</body>
</html>