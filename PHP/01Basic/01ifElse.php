<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $age = 13;
    // if ($age > 18) {
    //     echo '<div style="height:100px; width:500px ;background-color:green;margin:50px"><h1>You Can Drive . . . </h1></div>';
    // } else {
    //     echo '<div style="height:100px; width:500px ;background-color:red;margin:50px"><h1>You Can\'t drive Drive . . . </h1></div>';
    // }
    ?>
    <?php
        if ($age > 18) 
        {
    ?>
        <div style="height:100px; width:500px ;background-color:green;margin:50px"><h1>You Can Drive . . . </h1></div>
    <?php
        }
        else{
    ?>
    <div style="height:100px; width:500px ;background-color:red;margin:50px"><h1>You Can't drive Drive . . . </h1></div>
    <?php
       }
    ?>




</body>

</html>