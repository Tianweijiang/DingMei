x <?php
$input1=$_POST["input1"];
$input2=md5($_POST["input2"]);
$input3=$_POST["input3"];
$check=$_POST["check"];
session_start();
$code=$_SESSION["code"];
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect(localhost,root,root)or die("1");
mysqli_set_charset($link,"utf8");
mysqli_select_db($link,"test");
switch ($check){
    case "1":
        if($input3==$code&&$input1==""&&strlen($input2)){
            $sql="SELECT * FROM num WHERE username=? AND password=?;";
            $stmt=mysqli_prepare($link, $sql);
            mysqli_stmt_bind_param($stmt,"ss",$name,$pwd);
            $name=$input1;
            $pwd=$input2;
            $ex=mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            if($ex&&mysqli_stmt_num_rows($stmt)>0){
                setcookie("pass",$input2,time()+7*24*60*60);
                echo "ok";
            }else{
                echo "error";
            }
        }
        break;
    case "":
        if($input3==$code&&$input1==""&&strlen($input2)){
            $sql="SELECT * FROM num WHERE username=? AND password=?;";
            $stmt=mysqli_prepare($link, $sql);
            mysqli_stmt_bind_param($stmt,"ss",$name,$pwd);
            $name=$input1;
            $pwd=$input2;
            $ex=mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            if($ex&&mysqli_stmt_num_rows($stmt)>0){
                setcookie("pass",$input2);
                echo "ok";
            }else{
                echo "error";
            }
        }
        break; 
    case "3":
        /* 判断是否登录 */
        $pass=$_COOKIE["pass"];
        if($pass!=""){
            echo "ok";
        }else{
            echo "error";
        }
        break;
}
 
 
?>