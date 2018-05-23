var game = new Phaser.Game(320, 530, Phaser.CANVAS, 'example', { preload: preload, create: create, update: update, render: render });

function preload() {
game.load.atlas('button', 'button_texture_atlas.png', 'button_texture_atlas.json');

}

var board = [
			  [1,2,3], // 0
			  [4,0,3], // 1
			  [5,0,1], // 2
			  [2,4,1], // 3
			  [5,7,6], // 4
			  [2,0,1], // 5
			  [8,5,2], // 6
			  [5,6,3], // 7
			  [0,0,0], // 8
			];

var button1;
var button2;
var button3;
var TextRoom;

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.input.mouse.capture = true;
	game.stage.backgroundColor = '#182d3b';
	
	button1 = game.add.button(game.world.centerX - 95, 200, 'button', actionOnClick, this, 2, 1, 0)
	button1.name = "1";
	button2 = game.add.button(game.world.centerX - 95, 300, 'button', actionOnClick, this, 2, 1, 0)
	button2.name = "2";
	button3 = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0)
	button3.name = "3";
	
	
	TextRoom = game.add.text(160,100,' ', { font: '30px Arial', fill: '#fff' });
	TextRoom.anchor.setTo(0.5, 0.5);
	TextRoom.text = "Room 0";
}

function update() {
	
}

function actionOnClick (button) {
	var buf = button.name;
	if(parseInt(button.name) == 8){
		TextRoom.text = "You win!";
	}
	else{
		TextRoom.text = "Room " + button.name;
		button1.name = (board[parseInt(buf)][0]).toString();
		button2.name = (board[parseInt(buf)][1]).toString();
		button3.name = (board[parseInt(buf)][2]).toString();
	}
}

function render () {

}

//https://phaser.io/examples/v2/buttons/button-in-a-group
//https://phaser.io/examples/v2/buttons/action-on-click
//https://phaser.io/examples/v2/buttons/button-scale
