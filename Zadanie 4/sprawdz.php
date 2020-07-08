<?php
require "config.php";


$data=date("Y-m-d H:i:s");
$sql="UPDATE uprawy SET data_sprawdzenia='".$data."'";
$db->query($sql);


header('Location: index.php');