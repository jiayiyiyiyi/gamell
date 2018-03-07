$(function(){
	$(".close").click(function(){
		$(".swiper-container").slideToggle("slow");
		if($("#img").attr("src") == "img/Icons-close.png"){
			$("#img").attr("src","img/Icons-start.png");
		}else{
			$("#img").attr("src","img/Icons-close.png");
		}
	})
})
