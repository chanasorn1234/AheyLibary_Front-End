<?php
    $connect = mysqli_connect('localhost','root','','addmember');
    if($connect){
        echo 'success';
    }
    else{
        echo 'Failed';
    }
    // echo 'ทดสอบเชื่อมต่อฐานข้อมูล';
?>