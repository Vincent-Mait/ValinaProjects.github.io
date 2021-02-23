"use strict";

var Game = {
    canvas: undefined,
    canvasContext: undefined,
    birdPosition: 0
};



Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    Game.mainLoop();
};

document.addEventListener('DOMContentLoaded', Game.start);

Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.mainLoop = function () {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 10);
};

Game.update = function () {
    var d = new Date();
    Game.birdPosition = d.getTime() % Game.canvas.width;
};

Game.draw = function () {

    Game.drawSand();
    Game.drawWater();
    Game.drawSky();
    Game.drawText();
    Game.drawSun();
    Game.drawBoat();


    Game.drawBird(Game.birdPosition, 20);
    Game.drawBird(Game.birdPosition + 50, 80);
    Game.drawBird(100, 40);
    Game.drawBird(120, 90);
    Game.drawBird(200, 40);
    Game.drawBird(250, 20);
    Game.drawBird(400, 20);
    Game.drawBird(500, 40);
    Game.drawBird(650, 20);
    Game.drawBird(700, 40);
    Game.drawShadow(Game.birdPosition,200);
    Game.drawWave(Game.birdPosition + 200, 300);
    Game.drawWave(Game.birdPosition + 300, 300);
    Game.drawWave(Game.birdPosition + 400, 300);

};

Game.drawWave = function (x,y){
    Game.canvasContext.beginPath();
    Game.canvasContext.moveTo(x, y);
    Game.canvasContext.lineTo(x + 10 , y - 10);
    Game.canvasContext.lineTo(x + 20 , y);
    Game.canvasContext.closePath();


// the wave fill color
    Game.canvasContext.fillStyle = "blue";
    Game.canvasContext.fill();
};

Game.drawShadow = function (x,y){
    //bird shadow
    Game.canvasContext.beginPath();
    Game.canvasContext.moveTo(300, 350);
    Game.canvasContext.lineTo(x+50, 400);
    Game.canvasContext.lineTo(x+60, 400);
    Game.canvasContext.closePath();


// the shadow fill color
    Game.canvasContext.fillStyle = "dimGrey";
    Game.canvasContext.fill();
    
};

Game.drawSand = function () {
    Game.canvasContext.fillStyle = "blanchedAlmond";
    Game.canvasContext.fillRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.drawSky = function () {
    
    Game.canvasContext.fillStyle = "deepSkyBlue";
    Game.canvasContext.fillRect(0, 0, Game.canvas.width, 300);
};

Game.drawWater = function(){
    Game.canvasContext.fillStyle = "blue";
    Game.canvasContext.fillRect(0, 0, Game.canvas.width, 350);
};

Game.drawText = function () {
    //beach day text    
    Game.canvasContext.font = "30px Arial";
    Game.canvasContext.fillStyle = "black";
    Game.canvasContext.fillText("Beach Day", 300, 450);
};

Game.drawBird = function (x, y) {
    Game.canvasContext.fillStyle = "black";
    Game.canvasContext.lineWidth = 2;
    Game.canvasContext.beginPath();
    Game.canvasContext.moveTo(x, y);
    Game.canvasContext.lineTo(x + 10, y + 10);
    Game.canvasContext.lineTo(x + 20, y);
    Game.canvasContext.stroke();

};

Game.drawSun = function () {
    Game.canvasContext.fillStyle = 'yellow';
    Game.canvasContext.shadowBlur = 100;
    Game.canvasContext.shadowColor = 'gold';
    Game.canvasContext.beginPath();
    Game.canvasContext.arc(700, 100, 75, 0, Math.PI * 2);
    Game.canvasContext.fill();
    Game.canvasContext.shadowColor = 'transparent';
};

Game.drawBoat = function () {
    //boat's sail
    Game.canvasContext.beginPath();
    Game.canvasContext.moveTo(75, 75);
    Game.canvasContext.lineTo(75, 175);
    Game.canvasContext.lineTo(175, 175);
    Game.canvasContext.closePath();

// the sail outline
    Game.canvasContext.lineWidth = 10;
    Game.canvasContext.strokeStyle = "black";
    Game.canvasContext.stroke();

// the sail fill color
    Game.canvasContext.fillStyle = "oldLace";
    Game.canvasContext.fill();

//Boat's body
    Game.canvasContext.beginPath();
    Game.canvasContext.arc(120, 225, 100, 0, Math.PI, false);

// the body outline
    Game.canvasContext.lineWidth = 10;
    Game.canvasContext.strokeStyle = "black";
    Game.canvasContext.stroke();

// the fill color
    Game.canvasContext.fillStyle = "saddleBrown";
    Game.canvasContext.fill();

//top of boat body outline
    Game.canvasContext.strokeStyle = "black";
    Game.canvasContext.lineWidth = 5;
    Game.canvasContext.beginPath();
    Game.canvasContext.moveTo(15, 225);
    Game.canvasContext.lineTo(225, 225);
    Game.canvasContext.stroke();

//first detail line on body
    Game.canvasContext.strokeStyle = "maroon";
    Game.canvasContext.lineWidth = 5;
    Game.canvasContext.beginPath();
    Game.canvasContext.moveTo(23, 250);
    Game.canvasContext.lineTo(216, 250);
    Game.canvasContext.stroke();

    //second detail line on body   
    Game.canvasContext.strokeStyle = "maroon";
    Game.canvasContext.lineWidth = 5;
    Game.canvasContext.beginPath();
    Game.canvasContext.moveTo(33, 275);
    Game.canvasContext.lineTo(208, 275);
    Game.canvasContext.stroke();

    //third detail line on body
    Game.canvasContext.strokeStyle = "maroon";
    Game.canvasContext.lineWidth = 5;
    Game.canvasContext.beginPath();
    Game.canvasContext.moveTo(53, 300);
    Game.canvasContext.lineTo(188, 300);
    Game.canvasContext.stroke();

//connecting sail to body
    Game.canvasContext.strokeStyle = "black";
    Game.canvasContext.lineWidth = 10;
    Game.canvasContext.beginPath();
    Game.canvasContext.moveTo(75, 175);
    Game.canvasContext.lineTo(75, 225);
    Game.canvasContext.stroke();


};