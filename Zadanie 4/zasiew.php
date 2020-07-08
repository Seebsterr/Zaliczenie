<?php
require "config.php";

$sql="SELECT * FROM uprawy";
$result=$db->query($sql);
while($row=$result->fetchArray()){
    $k=$row['koszt_zasiewu'];
    $l=$row['max_limit'];
    $dZ=$row['data_zasiewu'];
    $b=$row['bogactwo'];
}

$r=rand(10,700);

$koszt=number_format(($k+$r),2,",","");
$limit=number_format(($l+$r),2,",","");

$dataOstatniegoZasiewu=$dZ;
$dataZasiewu=date("Y-m-d H:i:s");
$dataZbioru=date("Y-m-d H:i:s",time()+(6.5*60));
$bogactwo=number_format($b-$koszt,2,",","");


$sql="UPDATE uprawy SET 
            koszt_zasiewu='".$koszt."',
            max_limit='".$limit."',
            data_ostatniego_zasiewu='".$dataOstatniegoZasiewu."',
            data_zasiewu='".$dataZasiewu."',
            data_zbioru='".$dataZbioru."',
            bogactwo='".$bogactwo."'";

$db->query($sql);

header('Location: index.php');
