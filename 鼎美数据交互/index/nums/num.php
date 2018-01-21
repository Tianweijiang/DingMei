<?php
$pho=$_POST["pho"];
$pwd=md5($_POST["pwd"]);
$yan=strtolower($_POST["yan"]);
session_start();
$code=strtolower($_SESSION["code"]);
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect(localhost,root,root)or die("1");
mysqli_set_charset($link, "utf8");
mysqli_select_db($link,"test");
if($yan==$code&&$pho!==""&&strlen($pwd)>=6){
    $sql="INSERT INTO num(username,password) VALUES('$pho','$pwd');";
    $query=mysqli_query($link, $sql);
    if($query&&mysqli_affected_rows($link)>0){
        echo "ok";
    }else{
        echo "error";
    }   
}
?>