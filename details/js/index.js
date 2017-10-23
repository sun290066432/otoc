$(document).ready(function(){
	$(".tab .container .tab-writing .content .show").show().siblings().hide();
	$(".tab .container .tab-writing ul li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".tab .container .tab-writing .content div").hide().eq($(this).index()).show().addClass("show");
	})
	
	
	$("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	})
	
	
//	衬衫的轮播图
	var i=1;
		var a;
		a=function(){
			
			var $ul=$(".tuijian .container .box").find("ul");
			var $li_width=$(".tuijian .container").find("li").width();
			$li_width+=30;
			if(!$ul.is(":animated")){
				if(i>3){
					$ul.animate({ left :'-='+$li_width}, "slow",function(){
						$ul.animate({ left :"-260"},0)
					})
					i=1;
					
				}else{
					$ul.animate({ left : '-='+$li_width}, "slow"); 
					i++;
				}
			}
		}
		t=setInterval(a,2000)
		$(".tuijian .container .box ul").hover(function(){
			clearInterval(t)
		},function(){
			t=setInterval(a,2000)
		});
		
//		小图换大图
		$(".pro_detail_left ul li img").livequery("click",function(){ 
		  var imgSrc = $(this).attr("src");  //图片路径
		  var i = imgSrc.lastIndexOf(".");   //返回.最后出现的位置
		  var unit = imgSrc.substring(i);    //文件扩展名
		  imgSrc = imgSrc.substring(0,i);    //文件主名
		  var imgSrc_small = imgSrc + "_small"+ unit;
		  var imgSrc_big = imgSrc + "_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
	});
////	图片放大
	
	$(".jqzoom").jqueryzoom({
		xzoom:300, //放大图的宽度(默认是 200)
		yzoom:300, //放大图的高度(默认是 200)
		offset:10, //离原图的距离(默认是 10)
		position:"right", //放大图的定位(默认是 "right")
		preload:1   
	});
		


/*衣服颜色切换*/

	$(".color_change ul li img").click(function(){           
		  var imgSrc = $(this).attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_small = imgSrc + "_one_small"+ unit;
		  var imgSrc_big = imgSrc + "_one_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
		  var alt = $(this).attr("alt");
		  $(".color_change strong").text(alt);
		  var url = imgSrc+".html";
		  $(".pro_detail_left ul.imgList")
				.empty()
				.load(url);
	});
})


/*衣服尺寸选择*/
$(function(){
	$(".pro_size li span").click(function(){
		$(this).parents("ul").siblings("strong").text(  $(this).text() );
	})
})
/*数量和价格联动*/
$(function(){
    var $span = $("div.pro_price span");
	var price = $span.text();	
	$("#num_sort").change(function(){
	    var num = $(this).val();
		var amount = num * price;
		$span.text( amount );
	}).change();
})

/*最终购买输出*/
$(function(){
    var $product = $("#content");
	$("#cart a").click(function(){
        var pro_name = $product.find(".writing h4:first").text();
		var pro_size = $product.find(".pro_size strong").text();
		var pro_color =  $(".color_change strong").text();
		var pro_num = $product.find("#num_sort").val();
	    var pro_price = $product.find(".pro_price span").text();
		var dialog = " 感谢您的购买。\n您购买的\n"+
		        "产品是："+pro_name+"；\n"+
				"尺寸是："+pro_size+"；\n"+
				"颜色是："+pro_color+"；\n"+
				"数量是："+pro_num+"；\n"+
				"总价是："+pro_price +"元。";
		if( confirm(dialog) ){
			alert("您已经下单!");
		}
		return false;//避免页面跳转
	})
})