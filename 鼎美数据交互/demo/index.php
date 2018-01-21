<?php
header("content-type:text/html;charset=utf-8");


        /* 1.创建画布 */
        $width=200;
        $height=100;
        $image=imagecreatetruecolor($width, $height);
        /* 2.设置背景填充色 */
        $color=imagecolorallocate($image, 255, 255, 255);
        /* 3.修改背景色颜色 */
        imagefilledrectangle($image, 0, 0, $width, $height, $color);
        /* 4.设置显示内容 */
        $content=join("",array_merge(range(0,9),range("a","z"),range("A","Z")));
        /* 5.使用for循环得到4位想要的内容 */
        
        function randColor($image){
            return imagecolorallocate($image,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
        }
        for($i=0;$i<4;$i++){
            /*  每次只要随机生成内容一位 */
            $text=substr(str_shuffle($content),0,1);
            imagettftext($image, rand(18,25),rand(-30,30),($width/4)*$i+10,($height/2), randColor($image), "MSYH.TTC", $text);
            /* 11.把显示的内容拼接存入变量 */
            $textall=$textall.$text;
        }
        /* 12.把生成的二维码转换成小写 */
        $lowtextall=strtolower($textall);
        /* 13.存入session */
        session_start();
       $_SESSION["code"]=$lowtextall;
        /* 9.设置干扰点 */
        for($i=0;$i<100;$i++){
            imagesetpixel($image,rand(0,$width),rand(0,$height), randColor($image));
        }
        /* 10.设置干扰线 */
        for($i=0;$i<5;$i++){
            imageline($image, rand(0,$width),rand(0,$height), rand(0,$width),rand(0,$height), randColor($image));
        }
        /* 6.高速浏览器输出类型 */
        header("content-type:image/jpeg");
        /*  7.输出 */
        imagejpeg($image);
        /* 8.销毁 */
        imagedestroy($image);
 

