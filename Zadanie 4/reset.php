<?php

require "config.php";
$dataZbioru=date("Y-m-d H:i:s",time()+(6.5*60));
$dataZasiania=date("Y-m-d H:i:s");

$sql="UPDATE uprawy SET data_zasiewu='".$dataZasiania."',
                        koszt_zasiewu='500',
                        max_limit='1000',
                        data_zbioru='".$dataZbioru."',
                        data_ostatniego_zasiewu='0',
                        data_ostatniego_zbioru='0',
                        data_sprawdzenia='".$dataZasiania."',
                        bogactwo='1000' 
                    WHERE id='1'";
$db->query($sql);

header('Location: index.php');