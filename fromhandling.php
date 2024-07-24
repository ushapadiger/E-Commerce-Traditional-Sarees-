<?php
session_start();
$_SESSION["name"]=$_POST['name'];
$_SESSION["thank"]="Thank You!";
echo $_SESSION["name"]."Your order is placed successfully"."<br>";
echo $_SESSION["thank"];


$con=mysqli_connect("localhost","root","","Shopping");
if($con){
    echo "Connection Successful";
}
else{
    echo "connection failed";
}
$query="INSERT INTO `Customer_details` VALUES (?,?,?,?,?)";
$stmt=mysqli_prepare($con,$query);
if($stmt)
{
    mysqli_stmt_bind_param($stmt,"sssss",$name,$email,$phone,$address,$pincode);
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $pincode=$_POST['pincode'];
    $address=$_POST['address'];
    mysqli_stmt_execute($stmt); 
}
?>
