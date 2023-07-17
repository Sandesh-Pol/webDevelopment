<?php
    $data = array('red','green','blue','orange','black');
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        for ($i=0; $i < count($data); $i++) {
    ?>
    <h3><?php
        echo $data[$i];
    ?></h3>
    <?php
        }
    ?>
</body>
</html>