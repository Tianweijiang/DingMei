<?php
session_start();
$act=$_REQUEST["act"];
$yz=strtolower($_POST["yz"]);
$code=$_SESSION["code"];

$usernmae=$_POST["username"];
$password=md5($_POST["password"]);

$check=$_POST["check"];

header('content-type:text/html;charset=utf-8');
$link=mysqli_connect("localhost","root","root") or die("1");
mysqli_set_charset($link, "utf8");
mysqli_select_db($link,"test");
switch($act){
    case "yanzhengma":
        /* 判断输入框的值和session是否相等 */
        if($yz==$code){
           echo "ok";
        }else{
            echo "err";
        }
      break; 
    case "zhuce":
        $sql="INSERT INTO user(username,password) VALUES('{$usernmae}','{$password}');";
        $query=mysqli_query($link, $sql);
        if($query&&mysqli_affected_rows($link)>0){
            echo "ok";
        }else{
            echo "err";
        }
        break;
        
    case "login":
     
            $sql="SELECT username,password FROM user WHERE username=? AND password=?";
            $stmt=mysqli_prepare($link, $sql);
            mysqli_stmt_bind_param($stmt, "ss",$name,$pwd);
            $name=$usernmae;
            $pwd=$password;
            $ex=mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            if($ex&&mysqli_stmt_num_rows($stmt)>0){
              
                if($check=="1"){
                setcookie("cookcode",$usernmae,time()+7*24*60*60);
                }else{
                    setcookie("cookcode",$usernmae,time());
                }
                echo "ok";
            }else{
                echo "err";
            }
    
        break;
    case "okcook":
        $ok=$_COOKIE["cookcode"];
        if($ok!=""){
            echo $ok;
        }else{
            echo "err";
        }
        break;
}




