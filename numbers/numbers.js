window.onload = function () {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    const button = document.getElementById("start");
    var numbers = new Image(); 
    numbers.src = "image/num.png";

	var count = 0;
	var time = 500; 
	var max = 200;
	var finalNum = 10;
	var width = 200;
	var height = 300;
  
 clearCanvas = function () {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
}

drawTen = function(){
ctx.drawImage(numbers, max, 0,width, height, 0, 0, 100, 150);
ctx.drawImage(numbers, 0, 0,width, height, 100, 0, 100, 150);
}

drawNumbers = function(){
ctx.drawImage(numbers, max * count, 0, width, height,50, 0, 100, 150);
}

button.onclick=function () { 
	setInterval(function() { 
		if (count >= finalNum) { clearCanvas();drawTen();}
 		else { clearCanvas();drawNumbers(); }
	 count++ }, time)//end of setInterval;
   }//end of function

};// end of onload