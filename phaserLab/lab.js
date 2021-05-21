var config = {
    
    type: Phaser.AUTO,

    width: 800,

    height: 640,

    _parent: 'phaser-example',

    backgroundColor: '#efefef',

	scene: {
     
		preload: preload,

		create: create

		}

};



var game = new Phaser.Game(config);



function preload ()
{
    
this.load.image('pepperoni', 'assets/pepperoni.png');

  this.load.image('pizza', 'assets/pizza.png');
this.load.image('background', 'assets/background.jpg');
this.load.image('mushroom', 'assets/mushroom.png');
this.load.image('pepper', 'assets/pepper.png');
this.load.image('olive', 'assets/olive.png');
}



function create ()
{

this.add.image(625, 500, 'background');
this.add.image(400, 300, 'pizza');

var pepperoni= this.add.sprite(150, 100, 'pepperoni');

pepperoni.setInteractive();


this.input.setDraggable(pepperoni);

var pepperoni1 = this.add.sprite(100, 100, 'pepperoni');
pepperoni1.setInteractive();


this.input.setDraggable(pepperoni1);


var pepperoni2 = this.add.sprite(100, 150, 'pepperoni');
pepperoni2.setInteractive();


this.input.setDraggable(pepperoni2);


var pepperoni3 = this.add.sprite(150, 150, 'pepperoni');
pepperoni3.setInteractive();


this.input.setDraggable(pepperoni3);


var pepperoni4 = this.add.sprite(250, 150, 'pepperoni');
pepperoni4.setInteractive();


this.input.setDraggable(pepperoni4);


var pepperoni5 = this.add.sprite(300, 150, 'pepperoni');
pepperoni5.setInteractive();


this.input.setDraggable(pepperoni5);


var mushroom= this.add.sprite(200, 100, 'mushroom');

mushroom.setInteractive();


this.input.setDraggable(mushroom);

var mushroom1= this.add.sprite(250, 100, 'mushroom');

mushroom1.setInteractive();


this.input.setDraggable(mushroom1);

var pepper= this.add.sprite(150, 200, 'pepper');

pepper.setInteractive();


this.input.setDraggable(pepper);


var pepper1= this.add.sprite(100, 200, 'pepper');

pepper1.setInteractive();


this.input.setDraggable(pepper1);

var olive= this.add.sprite(200, 200, 'olive');

olive.setInteractive();


this.input.setDraggable(olive);

var olive1= this.add.sprite(250, 200, 'olive');

olive1.setInteractive();


this.input.setDraggable(olive1);


    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

  
      gameObject.x = dragX;
  
      gameObject.y = dragY;

  
});

}  