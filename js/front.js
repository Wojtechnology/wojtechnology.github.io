$(document).ready(function(){

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});


	$('#navBar').affix({
		offset: {
			top: 60,
		}
	});

	$('.pBlock').hover(function(){
			$(this).css({'border-color':'#FF8800'});
			$(this).css({'box-shadow':'5px 5px 10px #555555'});
		},function(){
			$(this).css({'border-color':'#33B5E5'});
			$(this).css({'box-shadow':'0px 0px 0px #000000'});
	});

	if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
		var topPage = $("#topPage");
		var winHeight = $(window).height();
		var scrolled = $(document).scrollTop();
		$(".stuff").fadeTo(0, 1 - scrolled/winHeight * 4);
		//topPage.css("top", (winHeight * (1 - scrolled/winHeight)).toString() + "px");
		$(window).resize(function(){
			winHeight = $(window).height();
			scrolled = $(window).scrollTop();
			if(winHeight * (1 - scrolled/winHeight) > scrolled){
				$(".stuff").fadeTo(0, 1 - scrolled/winHeight * 4);
				//topPage.css("top", (winHeight * (1 - scrolled/winHeight)).toString() + "px");
			}
		});
		$(window).scroll(function(){
			winHeight = $(window).height();
			scrolled = $(window).scrollTop();
			if(winHeight * (1 - scrolled/winHeight) > scrolled){
				$(".stuff").fadeTo(0, 1 - scrolled/winHeight * 4);
				//topPage.css("top", (winHeight * (1 - scrolled/winHeight)).toString() + "px");
			}
		});
	}
});

function clearButtons(){
	
}

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
