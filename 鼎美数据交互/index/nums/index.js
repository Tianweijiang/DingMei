$(function(){	
	$(".test11").click(function(){
		var text=$(this).children("a").children("span").html();
		$("#selectspan").html(text);
		$(".inSelectNav").hide();
		
	})
	//按钮的下拉二级导航
	var a=1;
	$('.inSelect').click(function(){
            $('.inSelectNav').stop(true).slideToggle('slow');
			if(a==1){
						$(this).addClass('selectCurrent')		
						a=2;	
					}
					else
					{
						$(this).removeClass('selectCurrent');		
						a=1;
						}
				});	
//导航的下拉二级导航
	$('.oneNav').hover(function(){
            $(this).children('.twoNav').stop(true).slideToggle('slow');
        });
	

	//模态窗口
	$('.down').css('opacity', 0.5);
      //单击登录按钮时，让模态对话框显示
      $('.sfz_btn1').click(function(event) {
        
        $('.up,.down').fadeIn();

      });
	  $('.sfz_btn').click(function(event) {
        $('.up,.down').fadeOut();
      });  
	  
	  
		 $('.sfz_btn2').click(function(event) {
        
        $('.up1,.down').fadeIn();

      });
	  $('.sfz_btn').click(function(event) {
        $('.up1,.down').fadeOut();
      });  
	  
	  
	   $('.sfz_btn3').click(function(event) {
        
        $('.up2,.down').fadeIn();

      });
	  $('.sfz_btn').click(function(event) {
        $('.up2,.down').fadeOut();
      });  
	  
	  
	   $('.sfz_btn4').click(function(event) {
        
        $('.up3,.down').fadeIn();

      });
	  $('.sfz_btn').click(function(event) {
        $('.up3,.down').fadeOut();
      });  
	  
	  
	   $('.sfz_btn5').click(function(event) {
        
        $('.up4,.down').fadeIn();

      });
	  $('.sfz_btn').click(function(event) {
        $('.up4,.down').fadeOut();
      }); 
	   
		 $('.sfz_btn6').click(function(event) {
        
        $('.up5,.down').fadeIn();

      });
	  $('.sfz_btn').click(function(event) {
        $('.up5,.down').fadeOut();
      });  
	  
	  
	   $('.sfz_btn7').click(function(event) {
        
        $('.up6,.down').fadeIn();

      });
	  $('.sfz_btn').click(function(event) {
        $('.up6,.down').fadeOut();
      });  	
      //单击登录按钮时，让模态对话框显示
      //单击登录按钮时，让模态对话框显示
      $('.log').click(function(event) {
        
        $('.tab1').css('display', 'block');
		$('.tab').css('display', 'none');
		$('.login2').css('display', 'none');
		$('.login1').css('display', 'block');
      });
		 $('.second').click(function(event) {
        
        $('.tab1').css('display', 'none');
		$('.tab').css('display', 'block');
		$('.login2').css('display', 'block');
		$('.login1').css('display', 'none');
      });
	  $('.inLia').click(function(event) {
       $('.login2').css('display', 'block');
		$('.login1').css('display', 'none'); 
        $('.tab1').css('display', 'none');
		$('.tab').css('display', 'block');
      });
//鼠标点击的时候文本输入框内文字为空
	 $('input').click(function(event) {
			
			if(element.value==elementvalue)

    {

        element.value="";


    }
	
		  });
		  
//鼠标点击出现计算器
$('.sfx_jsq').hover(function(){
	//$('.in_sfx').css('display', 'block');
	 $(this).children('.in_sfx').stop(true).slideToggle('slow');		
	});
//banner的轮播图
	var num=0;
	/*var timer;*/

	var nextFn=function(){

		
		$('.imgList li').eq(num).stop().fadeOut(2000);
		num++;
		if(num>3){
			num=0;
		}
		
		$('.imgList li').eq(num).stop().fadeIn(2000);
		$('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');

	}

	var prevFn=function(){

		
		$('.imgList li').eq(num).stop().fadeOut(2000);
		num--;
		if(num<0){
			num=3
		}
		
		$('.imgList li').eq(num).stop().fadeIn(2000);
		$('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');


	}

	//小点点击
	$('.btnList li').click(function(event) {
		
		var i=$(this).index();
		//现在这个全局变量num就代表上一张
		//没加之前代表上一张，上一张淡出
		$('.imgList li').eq(num).stop().fadeOut(2000);
		//再让序号和num进行同步
		num=i;
		//重新赋值以后，num就代表下一张
		//更改完以后代表下一张，下一张淡入
		$('.imgList li').eq(num).stop().fadeIn(2000);
		$('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
	});


	//自动走
	timer=setInterval(nextFn, 2000);

	//鼠标悬停时...
	$('.banner').hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(nextFn, 2000);
	});



	//火箭回到顶部部分
			var windowHeight=$(window).height();
			$(window).scroll(function(event) {
				var eatHeight=$(window).scrollTop();
				if(eatHeight>=windowHeight){

					$('.goInBack').show(500);

				}else{

					$('.goInBack').hide(500);
				}
				$('.goInBack').click(function(event) {
					
					$('html,body').stop().animate({'scrollTop':0}, 500)

				});
		});

		$('.sfx_jsq').click(function(){
 			 $(this).removeClass('.sfx_jsq');
			 $(this).addClass('.sfx_current');

		});
		
		
			$(function() {
		
	
		var imgKey=0;
		var dianKey=0;
		var timer;
		var firstLi=$('.imgList1 .first').clone(true);
		$('.imgList1').append(firstLi);
		var nextFn=function(){
	
			dianKey++;
			if(dianKey>3){
				dianKey=0;
			}
			$('.btnList1 li').eq(dianKey).addClass('current').siblings('li').removeClass('current');
	
	
			imgKey++;
			if(imgKey>4){
				//用户以为自己看到的是第一张（实际上是临时工）；
				//他希望看到的下一张是第1张
				imgKey=1;
				//为了实现无缝滚动，让大盒子一瞬间回到0点
				$('.imgList1').css('left', 0);
			}
	
	
			// 公式:imgKey*-100%
			var s=imgKey*-100;
			//JS会把%解析成取余符号，所以这里要拼接一个%的字符串
			s=s+'%';
			$('.imgList1').stop().animate({'left':s}, 1000);
	
	
		}
	
	
		var prevFn=function(){
	
			dianKey--;
			if(dianKey<0){
				dianKey=3;
			}
			$('.btnList1 li').eq(dianKey).addClass('current').siblings('li').removeClass('current');
	
			imgKey--;
			if(imgKey<0){
				imgKey=3;
				//这里为了实现无缝滚动，要在一瞬间让盒子回到-300%
				$('.imgList1').css('left', '-300%');
			}
			// 公式:imgKey*-100%
			var s=imgKey*-100;
			//JS会把%解析成取余符号，所以这里要拼接一个%的字符串
			s=s+'%';
			$('.imgList1').stop().animate({'left':s}, 2000);
	
		}
	
		//小点点击
		$('.btnList1 li').click(function(event) {
			
			var i=$(this).index();
			// 公式:imgKey*-100%
			var s=i*-100;
			//JS会把%解析成取余符号，所以这里要拼接一个%的字符串
			s=s+'%';
			$('.imgList1').stop().animate({'left':s}, 2000);
			$('.btnList1 li').eq(i).addClass('current').siblings('li').removeClass('current');
			//需要把全局变量imgKey和dianKey进行一次同步
			imgKey=i;
			dianKey=i;
	
		});
	
		//定时器自动走
		timer=setInterval(nextFn, 2000);
	
		//鼠标悬停时，停止定时器
		$('.bigIn').hover(function() {
			clearInterval(timer);
		}, function() {
			clearInterval(timer);
			timer=setInterval(nextFn, 2000);
		});
	
	
	});
	
		var a=1;
	$('.fdy_cla').click(function(){
			if(a==1){
						$(this).children('.fdy_span1').css('display', 'none');
						$(this).children('.fdy_span11').css('display', 'block');		
						a=2;	
					}
					else
					{
						$(this).children('.fdy_span1').css('display', 'block');
						$(this).children('.fdy_span11').css('display', 'none');		
						a=1;
						}
		});
		//阴影不见了
		$('.yaya').hover(function() {
					$(this).children('.bottomDiv').stop().fadeOut(800);
					
				}, function() {
					$(this).children('.bottomDiv').stop().fadeIn(800);
				});
		$('.yaya1').hover(function() {
					$(this).children('.bottomDiv1').stop().fadeOut(800);
				}, function() {
					$(this).children('.bottomDiv1').stop().fadeIn(800);
				});
});