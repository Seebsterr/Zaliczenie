<?php
require "config.php";

$dataZbioru=date("Y-m-d H:i:s");

$sql="SELECT * FROM uprawy";
$result=$db->query($sql);
while($row=$result->fetchArray()){
    $dataZasiewu=$row['data_zasiewu'];
    $bogactwo=$row['bogactwo'];
    $kosztZasiewu=$row['koszt_zasiewu'];
    $max=$row['max_limit'];
}
if( strtotime($dataZbioru)-strtotime($dataZasiewu)<=100){
    $bogactwo=$max*0.25+$bogactwo;
}
if( strtotime($dataZbioru)-strtotime($dataZasiewu)>100 &
strtotime($dataZbioru)-strtotime($dataZasiewu)<200){
    $bogactwo=$max*0.50+$bogactwo;
}
if( strtotime($dataZbioru)-strtotime($dataZasiewu)>200 &
strtotime($dataZbioru)-strtotime($dataZasiewu)<300){
    $bogactwo=$max*0.75+$bogactwo;
}
if( strtotime($dataZbioru)-strtotime($dataZasiewu)>300 &
strtotime($dataZbioru)-strtotime($dataZasiewu)<400){
    $bogactwo=$max*1+$bogactwo;
}
if( strtotime($dataZbioru)-strtotime($dataZasiewu)>400 &
strtotime($dataZbioru)-strtotime($dataZasiewu)<500){
    $bogactwo=$bogactwo-$max*0.25;
}
if( strtotime($dataZbioru)-strtotime($dataZasiewu)>500 &
strtotime($dataZbioru)-strtotime($dataZasiewu)<600){
    $bogactwo=$bogactwo-$max*0.50;
}
if( strtotime($dataZbioru)-strtotime($dataZasiewu)>600 &
strtotime($dataZbioru)-strtotime($dataZasiewu)<700){
    $bogactwo=$bogactwo-$max*0.75;
}
if( strtotime($dataZbioru)-strtotime($dataZasiewu)>700 &
strtotime($dataZbioru)-strtotime($dataZasiewu)<800){
    $bogactwo=$bogactwo-$max*1;;
}
$bogactwo=number_format($bogactwo,2,",","");


$sql="UPDATE uprawy SET data_ostatniego_zbioru='".$dataZbioru."' ,bogactwo='".$bogactwo."',data_zbioru='0'";
$db->query($sql);


header('Location: index.php');