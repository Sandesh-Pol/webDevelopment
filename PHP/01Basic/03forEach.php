<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            display: flex;
            flex-direction: row;
        }
        .box{
            height:100px;
            width:100px;
            margin: 10px;
        }
       
    </style>
</head>

<body>
    <?php
        $colors = array('<div class="box" style="background-color:red;"></div>',
        '<div class="box" style="background-color:green;"></div>',
        '<div class="box" style="background-color:yellow;"></div>',
        '<div class="box" style="background-color:pink;"></div>',
        '<div class="box" style="background-color:violet;"></div>',
        '<div class="box" style="background-color:gray;"></div>',
        '<div class="box" style="background-color:gold;"></div>',
        '<div class="box" style="background-color:blue;"></div>');

        foreach($colors as $bx){
            echo $bx;
        }
    ?>

</body>

</html>
