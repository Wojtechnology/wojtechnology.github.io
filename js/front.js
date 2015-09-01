$(document).ready(function(){

	var winHeight;
	var scrolled;
	var about;
	var projects;

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 400, 'swing');
	});
	
	$('.clickMore').css('cursor', 'pointer');

	$('#navBar').affix({
		offset: {
			top: 60,
		}
	});
	
	$('.pBlock').hover(function(){
			$(this).css({'border-color':'#FF8800'});
			//$(this).css({'box-shadow':'5px 5px 10px #555555'});
		},function(){
			$(this).css({'border-color':'#33B5E5'});
			//$(this).css({'box-shadow':'0px 0px 0px #000000'});
	});
	
	//Check if this is a mobile device
	if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
		
		$("#homeBut").addClass("active");

		scrollingEffect();
		getPlacement();
		headerEffect();
	
		$(window).resize(function(){
			scrollingEffect();
			getPlacement();
			headerEffect();
		});

		$(window).scroll(function(){
			scrollingEffect();
			headerEffect();
		});
	}else{
		//Collapse navbar
		$(function(){ 
		    var navMain = $("#collapsingBlock");
		    navMain.on("click", "a", null, function () {
		        navMain.collapse('hide');
		    });
		});
	}
	
	//fade out for front picture when scrolling
	function scrollingEffect(){
		winHeight = $(window).height();
		scrolled = $(window).scrollTop();
		//if(winHeight * (1 - scrolled/winHeight) > scrolled){
			$(".stuff").fadeTo(0, 1 - scrolled/winHeight * 4);
			//topPage.css("top", (winHeight * (1 - scrolled/winHeight)).toString() + "px");
		//}
	}

	//change the active block in the header depending on scroll location
	function headerEffect(){
		if(scrolled >= projects - 40 || $(window).scrollTop() + $(window).height() >= $(document).height()){
			clearHeader();
			$("#projBut").addClass("active");
		}else if(scrolled >= about - 40){
			clearHeader();
			$("#aboutBut").addClass("active");
		}else{
			clearHeader();
			$("#homeBut").addClass("active");
		}
	}

	//get values for the position of boxes
	function getPlacement(){	
		about = $('#about').offset().top;
		projects = $('#projects').offset().top;
	}

	//clear all active classes
	function clearHeader(){
		$("#homeBut").removeClass("active");
		$("#aboutBut").removeClass("active");
		$("#projBut").removeClass("active");
	}
});