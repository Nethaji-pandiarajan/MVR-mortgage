<?php

    $con = new mysqli('localhost','root','','mvr',3307);

    if($con){
    }else{
        die(mysqli_error($con));
    }
   
?>