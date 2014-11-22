$('#navBar').affix({
  offset: {
    top: 60,
  }
})

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