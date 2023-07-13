
<?php

    include("connect.php");
    
    $query = "select * from rates where type = 'investment'";
    $exec=mysqli_query($con,$query);
    if(mysqli_num_rows($exec)>0){
        
        $row= mysqli_fetch_assoc($exec);
        // echo $row['thirtyYrRate'];   
        echo json_encode($row);
        
    }

?>