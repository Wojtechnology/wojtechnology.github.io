var widthBar = 30;
var idOver;
var idOut;
var working = 0;

function overSideBar(content){
	clearInterval(idOut);
	idOver = setInterval(function(){
		if(widthBar < 200){
			widthBar += 5;
		}
		document.getElementById('left_block').style.width = widthBar + "px";
		if(!content){
			document.getElementById('main_block').style.paddingLeft = (widthBar) + "px";
		}
		/*document.getElementById('main_block').style.width = "100% - " + (widthBar + 40) + "px";
		document.getElementById('top_block').style.width = "100% - " + (widthBar + 40) + "px";
		document.getElementById('bottom_block').style.width = "100% - " + (widthBar + 40) + "px";*/
		if(widthBar >= 200){
			clearInterval(idOver);
		}
	}, 1);
}

function outSideBar(content){
	clearInterval(idOver);
	idOut = setInterval(function(){
		if(widthBar > 30){
			widthBar -= 5;
		}
		document.getElementById('left_block').style.width = widthBar + "px";
		if(!content){
			document.getElementById('main_block').style.paddingLeft = (widthBar) + "px";
		}
		/*document.getElementById('main_block').style.width = "100% - " + (widthBar + 40) + "px";
		document.getElementById('top_block').style.width = "100% - " + (widthBar + 40) + "px";
		document.getElementById('bottom_block').style.width = "100% - " + (widthBar + 40) + "px";*/
		if(widthBar <= 30){
			clearInterval(idOut);
		}
	}, 1);
}

function openCircle(idCircle, x, y){
	/*var x = $("#" + idCircle).css("left");
	x = parseInt(x.substring(0, x.length - 2));
	var y = $("#" + idCircle).css("top");
	y = parseInt(y.substring(0, y.length - 2));*/
	var n = 0;
	if(working != 2){
		document.getElementById(idCircle).style.boxShadow = "0px 0px #000000";
		var id = setInterval(function(){
			if(n < 100){
				n += 5;
			}
			document.getElementById(idCircle).style.left = (x - n) + "px";
			document.getElementById(idCircle).style.top = (y - n) + "px";
			document.getElementById(idCircle).style.width = (200 + 2 * n) + "px";
			document.getElementById(idCircle).style.height = (200 + 2 * n) + "px";
			document.getElementById(idCircle).style.lineHeight = (200 + 2 * n) + "px";
			document.getElementById(idCircle).style.fontSize = parseInt(22 + n * 22 / 100) + "px";
			document.getElementById(idCircle).style.zIndex = "3";
			if(n >= 100){
				working = 1;
				clearInterval(id);
			}
		}, 1);
	}
}

function closeCircle(idCircle, x, y){
	x = x - 100;
	y = y - 100;
	var n = 0;
	if(working != 2){
		working = 0;
		var id = setInterval(function(){
			if(n < 100){
				n += 5;
			}
			document.getElementById(idCircle).style.left = (x + n) + "px";
			document.getElementById(idCircle).style.top = (y + n) + "px";
			document.getElementById(idCircle).style.width = (400 - 2 * n) + "px";
			document.getElementById(idCircle).style.height = (400 - 2 * n) + "px";
			document.getElementById(idCircle).style.lineHeight = (400 - 2 * n) + "px";
			document.getElementById(idCircle).style.fontSize = parseInt(44 - n * 22 / 100) + "px";
			if(n >= 100){
				clearInterval(id);
				document.getElementById(idCircle).style.zIndex = "0";
				document.getElementById(idCircle).style.boxShadow = "2px 2px #000000";
			}
		}, 1);
	}
}

function clickCircle(idCircle, x, y, filepath){
	x = x - 100;
	y = y - 100;
	var n = 0;
	var called = 0;
	if(working != 2){
		working = 2;
		var state = 0;
		var cycles = 0;
		var id = setInterval(function(){
			if(state == 0){
				n += 5;
				document.getElementById(idCircle).style.left = (x + n) + "px";
				document.getElementById(idCircle).style.top = (y + n) + "px";
				document.getElementById(idCircle).style.width = (400 - 2 * n) + "px";
				document.getElementById(idCircle).style.height = (400 - 2 * n) + "px";
				document.getElementById(idCircle).style.lineHeight = (400 - 2 * n) + "px";
				document.getElementById(idCircle).style.fontSize = parseInt(44 - n * 22 / 100) + "px";
				if(n >= 100){
					document.getElementById(idCircle).style.zIndex = "0";
					document.getElementById(idCircle).style.boxShadow = "2px 2px #000000";
					state++;
					n = 0;
				}
			}else if(state == 1){
				n += 1;
				if(n >= 80){
					n = 0;
					cycles++;
				}
				m = -0.05 * n * n + 4 * n
				document.getElementById(idCircle).style.top = (y - m + 100) + "px";
			}
			if(cycles == 2 && called == 0){
				window.location.href = filepath;
				called = 1;
			}
			if(cycles > 2){
				clearInterval(id);
				working = 0;
			}
		}, 1);
	}	
}