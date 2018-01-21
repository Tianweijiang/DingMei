<?php
$width=90;
$height=37;
/* 1.创建画布 */
$image=imagecreatetruecolor($width, $height);
/*2.创建颜色 */
$bgcolor=imagecolorallocate($image,2550,255,255);
imagefilledrectangle($image,0,0,$width,$height, $bgcolor);
/* 3.设置内容 */
function color($image){
    return imagecolorallocate($image,mt_rand(0,255),mt_rand(0,255), $blue);
}
/* for循环便利出前四位 */
$content=join("",array_merge(range(0,9),range(A,Z),range(a,z)));
for ($i=0;$i<4;$i++){
    $text=substr(str_shuffle($content),0,1);
    imagettftext($image,15,rand(-20,20),($width/4)*$i,$height/1.5, color($image),"STXINWEI.TTF", $text);
    $val=$val.$text;
}
session_start();
$_SESSION["code"]=$val;
for ($i=0;$i<100;$i++){
    imagesetpixel($image,rand(0,90),rand(0,37),color($image));
}
for ($i=0;$i<5;$i++){
    imageline($image,rand(0,90),rand(0,37), rand(0,90),rand(0,37),color($image));
}
header("content-type:image/jpeg");
imagejpeg($image);
imagedestroy($image);
?>
