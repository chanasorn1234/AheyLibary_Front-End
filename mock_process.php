<?php include 'mock_connect.php';?>
<?php
    $username = $_POST['username'];
    $password = $_POST['password']; 
    $confirmpassword = $_POST['confirmpassword']; 
    $email = $_POST['email'];  
    echo $username;
    mysqli_query($connect,"INSERT INTO member (userid,password,confirmpassword,email)
    VALUES ('$username','$password','$confirmpassword','$email')");

?>