"use strict";

var Game = {
    canvas: undefined,
    canvasContext: undefined
};

var fruits = [
    {name: "Apple", quantity: 20, color: "red"},
    {name: "Orange", quantity: 10, color: "orange"},
    {name: "Banana", quantity: 15, color: "yellow"},
    {name: "Kiwi", quantity: 3, color: "green"},
    {name: "Blueberry", quantity: 10, color: "blue"},
    {name: "Grape", quantity: 8, color: "purple"}
];

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
    Game.draw();
};


Game.draw = function () {

    for (var i = 0; i < fruits.length; i++) {
        var fruit = fruits[i];
        var size = fruits.length; /*allows each rectangle and text
         *  to take up only a 6th of the canvas*/

        var space = 166;/* This is to prevent the new rectangle
         * from being drawn over the old by increasing the x starting 
         * position. This is also used for the texts
         */
        var yPos = 40;/* Used to create the max possible starting
         * positon for each rectangle in this case it's 40 because the
         * heightest quantity is 20. 20*40= 800 which is the height of
         * the canvas */

//Rectangles
        Game.canvasContext.fillStyle = fruit.color;
        Game.canvasContext.fillRect(i * space,
        Game.canvas.height - (fruit.quantity * yPos), Game.canvas.width / size, Game.canvas.height);

// Text Style
        Game.canvasContext.fillStyle = 'black';
        Game.canvasContext.font = 'bold 20px Arial';
//Numbers text
        Game.canvasContext.fillText(fruit.quantity, (i * space) + 60, Game.canvas.height - 60, Game.canvas.width / size);
//Names text
        Game.canvasContext.fillText(fruit.name, (i * space) + 40, Game.canvas.height - 30, Game.canvas.width / size);
    }
};