$(document).ready(function(){
	
//	轮播图
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false
	});
	
//折叠
	$(".module_up_down").toggle(function() {
		var $self = $(this);
		$self.next().stop().slideToggle(600, function() {
			$("img", $self).attr("src", "images/down.jpg");
		});
	}, function() {
		var $self = $(this);
		$self.next().stop().slideToggle(600, function() {
			$("img", $self).attr("src", "images/up.jpg");
		});
	})
	
// 新闻滚动 

	var $this = $(".scrollNews");
	var scrollTimer;
	$this.hover(function() {
		clearInterval(scrollTimer);
	}, function() {
		scrollTimer = setInterval(function() {
			scrollNews($this);
		}, 3000);
	}).trigger("mouseleave");

	function scrollNews(obj) {
		var $self = obj.find("ul:first");
		var lineHeight = $self.find("li:first").height(); //获取行高
		$self.animate({
			"marginTop": -lineHeight + "px"
		}, 600, function() {
			$self.css({
				marginTop: 0
			}).find("li:first").appendTo($self); //appendTo能直接移动元素
		})
	}
	
	
//裤子的轮播图
		var i=1;
		var a;
		a=function(){
			
			var $ul=$(".pants .container").find("ul");
			var $li_width=$(".pants .container").find("li").width();
			$li_width+=30;
			if(!$ul.is(":animated")){
				if(i>3){
					$ul.animate({ left :'-='+$li_width}, "slow",function(){
						$ul.animate({ left :"-300"},0)
					})
					i=1;
					
				}else{
					$ul.animate({ left : '-='+$li_width}, "slow"); 
					i++;
				}
			}
		}
		t=setInterval(a,2000)
		$(".pants .container ul").hover(function(){
			clearInterval(t)
		},function(){
			t=setInterval(a,2000)
		})
});



