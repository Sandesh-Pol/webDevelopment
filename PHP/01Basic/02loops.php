<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100%;    
        }

        .data {
            background-color: green;
            width: 100px;
            height: 100px;
            text-align: center;
            margin: 10px;
        }
    </style>
</head>

<body>
    <?php
    $count = 10;
    for ($i = 0; $i < $count; $i++) {
    ?>
        <div class="data">
            <h1><?php echo $i; ?></h1>
        </div>
    <?php
    }
    ?>
</body>

</html>
