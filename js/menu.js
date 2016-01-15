	$(document).ready(function() {
	$(".burger, .menu").click(function(){
		$(this).parent().find(".hide").slideToggle();
	});
	$("#taobaoSlide").KinSlideshow({
            moveStyle:"down",
            intervalTime:8,
            mouseEvent:"mouseover",
            titleFont:{TitleFont_size:14,TitleFont_color:"#ffffff"}
    });

	
});