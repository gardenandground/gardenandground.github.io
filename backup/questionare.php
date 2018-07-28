<?php
// $classPercentText = "per-txt-hide per-txt-100 per-txt-300";
// $BarSpeedJS = "fts stf linear";
// $BarSize = "progress-small progress-large";
// $BarStyle = "progress-bar-striped active";
$DefualtClassPercentText = "per-txt-hide";
$DefaultBarSpeedJS = '<script type="text/javascript" src="js/linear.js"></script>';
$DefaultBarSize = "progress-large";
$DefaultBarStyle = "";

$ConfigID = 1;

if($ConfigID==1){
    $DefualtClassPercentText = "per-txt-300";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <title></title>
</head>

<body>
        <div class="container">
                <div class="progress <?php echo $DefaultBarSize; ?>">
                        <div class="<?php echo $DefualtClassPercentText; ?>"> Loading <span id="per">0 %</span></div>
                        <div id="myBar" class="progress-bar progress-bar-success <?php echo $DefaultBarStyle; ?>" role="progressbar" >
                        </div>
                </div>     
                <div id="content">
                    <span>FORM</span>        
                </div>                   
        </div>
              
</body>
<?php 
    echo $DefaultBarSpeedJS;
?>
</html>