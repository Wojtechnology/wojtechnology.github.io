$(document).ready(function(){
	$('#navBar').affix({
		offset: {
			top: 60,
		}
	});
	var topPage = $("#topPage");
	var winHeight = $(window).height();
	var scrolled = $(document).scrollTop();
	$(".stuff").fadeTo(0, 1 - scrolled/winHeight * 4);
	topPage.css("top", (winHeight * (1 - scrolled/winHeight)).toString() + "px");
	$(window).resize(function(){
		winHeight = $(window).height();
		scrolled = $(window).scrollTop();
		if(winHeight * (1 - scrolled/winHeight) > scrolled)
			$(".stuff").fadeTo(0, 1 - scrolled/winHeight * 4);
			topPage.css("top", (winHeight * (1 - scrolled/winHeight)).toString() + "px");
	});
	$(window).scroll(function(){
		winHeight = $(window).height();
		scrolled = $(window).scrollTop();
		if(winHeight * (1 - scrolled/winHeight) > scrolled)
			$(".stuff").fadeTo(0, 1 - scrolled/winHeight * 4);
			topPage.css("top", (winHeight * (1 - scrolled/winHeight)).toString() + "px");
	});
});

//Old Function
/*$(document).ready(function(){
	$(window).on('resize', function(){
      	var winWidth = $(this).width() - 15;
      	if (winWidth <= 1000 && winWidth >= 880){
			$('.navbar-default').css('margin-top', ((winWidth % 880) / 2) + 'px');
		}else if(winWidth <= 767){
			$('.navbar-default').css('margin-top', '0px');
		}else if(winWidth > 1000){
			$('.navbar-default').css('margin-top', '60px');
		}
	});
});*/
