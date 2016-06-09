
var img = document.getElementById('white'); 
var w = img.clientWidth;
var h = img.clientHeight;

document.getElementById('myCanvas1-4-1').setAttribute('width',w/2);
document.getElementById('myCanvas1-4-1').setAttribute('height',h/2);

document.getElementById('myCanvas1-4-2').setAttribute('width',w/2);
document.getElementById('myCanvas1-4-2').setAttribute('height',h/2);

document.getElementById('myCanvas1-8-1').setAttribute('width',w/4);
document.getElementById('myCanvas1-8-1').setAttribute('height',h/2);

document.getElementById('myCanvas1-8-2').setAttribute('width',w/4);
document.getElementById('myCanvas1-8-2').setAttribute('height',h/2);

document.getElementById('myCanvas1-8-3').setAttribute('width',w/4);
document.getElementById('myCanvas1-8-3').setAttribute('height',h/2);
	
document.getElementById('myCanvas1-16-1').setAttribute('width',w/4);
document.getElementById('myCanvas1-16-1').setAttribute('height',h/4);

document.getElementById('myCanvas1-16-2').setAttribute('width',w/4);
document.getElementById('myCanvas1-16-2').setAttribute('height',h/4);

$("#div3").css('margin-left', w/2+4);
$("#div3").css('margin-top', -h-8);
$("#div4").css('margin-left', 3*w/4+9);
$("#div4").css('margin-top', -h/2-4);
$("#div5").css('margin-left', w/2+4);
$("#div5").css('margin-top', 0);
$("#div6").css('margin-left', 3*w/4+9);
$("#div6").css('margin-top',-h/2-4);
$("#div7").css('margin-left', 3*w/4+9);
$("#div7").css('margin-top', -3);



$(document).ready(function(){

	var a=1;

	$("#mainDiv").on('click', function(){
		if(a==1){
			
			$("#div5,#div3,#div4,#div6,#div7").velocity({translateX: -w/2-4}, {duration: 400});
			$("#div1,#div2").velocity({opacity: 0}, {duration: 100});
			$("#div5,#div7,#div6").velocity({translateY: -h/2-4}, { duration: 400});
			$("#div4,#div3").velocity({opacity: 0}, {duration: 100});
			$("#div7,#div6").velocity({translateX: -3*w/4-4}, { duration: 400});
			$("#div5").velocity({opacity: 0}, {duration: 100});
			$("#div7").velocity({translateY: -3*h/4-4}, { duration: 400});
			$("#div6").velocity({opacity: 0}, {duration: 100});
			
			a=2;
		}

		else if(a==2){
			
			$("#div6").velocity({opacity: 1}, {duration: 100});
			$("#div7").velocity({translateY: 0}, { duration: 400});
			$("#div5").velocity({opacity: 1}, {duration: 100});
			$("#div7,#div6").velocity({translateX: 0}, { duration: 400});
			$("#div4,#div3").velocity({opacity: 1}, {duration: 100});
			$("#div5,#div7,#div6").velocity({translateY: 0}, { duration: 400});
			$("#div1,#div2").velocity({opacity: 1}, {duration: 100});
			$("#div5,#div3,#div4,#div6,#div7").velocity({translateX: 0}, {duration: 400});
			
			a=1;
		}

	});
});

window.onload = function() {

    var c = document.getElementById("myCanvas1-4-1");
    var ctx = c.getContext("2d");
    var img = document.getElementById("white");
    ctx.drawImage(img, 0, 0, w/2, h/2, 0, 0, w/2, h/2);

    var c = document.getElementById("myCanvas1-4-2");
    var ctx = c.getContext("2d");
    var img = document.getElementById("white");
    ctx.drawImage(img, 0, h/2, w/2, h/2, 0, 0, w/2, h/2);

    var c = document.getElementById("myCanvas1-8-1");
    var ctx = c.getContext("2d");
    var img = document.getElementById("white");
    ctx.drawImage(img, w/2, 0, w/4, h/2, 0, 0, w/4, h/2);

    var c = document.getElementById("myCanvas1-8-2");
    var ctx = c.getContext("2d");
    var img = document.getElementById("white");
    ctx.drawImage(img, 3*w/4, 0, w/4, h/2, 0, 0, w/4, h/2);

    var c = document.getElementById("myCanvas1-8-3");
    var ctx = c.getContext("2d");
    var img = document.getElementById("white");
    ctx.drawImage(img, w/2, h/2, w/4, h/2, 0, 0, w/4, h/2);

    var c = document.getElementById("myCanvas1-16-1");
    var ctx = c.getContext("2d");
    var img = document.getElementById("white");
    ctx.drawImage(img, 3*w/4, h/2, w/4, h/4, 0, 0, w/4, h/4);

    var c = document.getElementById("myCanvas1-16-2");
    var ctx = c.getContext("2d");
    var img = document.getElementById("white");
    ctx.drawImage(img, 3*w/4, 3*h/4, w/4, h/4, 0, 0, w/4, h/4);


};
