   function demoEmail(){
       var inputEmail=document.getElementById("phone");
        if(inputEmail.value=="请输入正确的手机号/邮箱"){
            inputEmail.value="";
        }
    }
    function checkEmail(){
        var inputEmail=document.getElementById("phone");
        var inputEmailv=inputEmail.value;
        var inputEmail= document.getElementById("SYY");
        var a=inputEmail.length;
        var syy = document.getElementById("SYY");
      if( inputEmailv==""){
            var syy = document.getElementById("SYY");
            syy.innerHTML="您输入的电话号码/邮箱为空";
            return false;
        }
        /*if( inputEmailv.length<11|| inputEmailv.length<11){
            var syy = document.getElementById("SYY");
            syy.innerHTML="您输入的号码有误";
            return false;
        }*/
       /* var
            re = /^1\d{10}$/
        if (re.test(str)==false) {
            var syy = document.getElementById("SYY");
            syy.innerHTML="您输入的号码有误";
            return false;
            }*/
        if( inputEmailv.indexOf("@")==-1){
            var syy = document.getElementById("SYY");
            syy.innerHTML="email的格式必须有@";
            return false;
        }
        if( inputEmailv.indexOf(".")==-1){
            var syy = document.getElementById("SYY");
            syy.innerHTML="email的格式必须有.";
            return false;
        }innerHTML=
        syy.innerHTML="";
        return true;
    }

       function checkPass(){
           var inputPass = document.getElementById("pas");
           var inputPassv = inputPass.value;
           var divPASY = document.getElementById("PASY");
           if(inputPassv.length<6||inputPassv.length>12){
               var divPASY = document.getElementById("PASY");
               divPASY.innerHTML="请输入6-12位的字母或数字";
               return false;
           }
           divPASY.innerHTML="";
           return true;
       }
       function demo(){
           if(demoEmail()==false){
               return false;
           }
           if(checkEmail()==false){
               return false;}

           if(checkPass()==false){
               return false;
           }
           return true;
           }
       function fun(){
    	   if(demo()){
    	        var inputEmailv=$("#phone").val();
    	        var inputPassv=$("#pas").val();
    	        var yanzheng=$("#yan").val();
    	        $.ajax({
    			   type:"post",
    			   url:"num.php",
    			   data:{"pho":inputEmailv,"pwd":inputPassv,"yan":yanzheng},
    			   success:function(data){
    				   if(data!="error"){
    				   alert("成功");
    				    location.href="login.html"; 
    			   }else{
    				   alert("失败");
    			   }
    			   }
    		   })
    	   }else{
    		   alert("234234");
    	   }
       }

