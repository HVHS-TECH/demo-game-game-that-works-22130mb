/*******************************************************/
// P5.play: gamethatworks
// Move sprite towards the mouse' position
// Written by max
/*******************************************************/
let timer = 10
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1000, 1000);
	wallLH = new Sprite(0, 1000, 15, 2000, 'k');
	wallRH = new Sprite(1000, 0, 15, 2000, 'k');
	wallTop = new Sprite(0, 1000, 2000, 15, 'k');
	wallBot = new Sprite(0, 0, 2000, 15, 'k');
	wallLH.color = 'white';
	wallRH.color = 'white';
	wallTop.color = 'white';
	wallBot.color = 'white';
	shape = new Sprite(400, 400, 10, 10, 'd');
	shape.color = 'white';
	world.gravity.y = 5;
	shape.bounciness = 1;
	alienGroup = new Group();
	for (i = 0; i < 5; i++) {
		alien = new Sprite(100, 100, 50, 50, 'd');
		alien.vel.x = 2;
		alien.vel.y = 2;
		alien.bounciness = 3;
		alien.friction = 1;
		alienGroup.add(alien);
	}
	alienGroup.collides(shape, func2Call);
	function func2Call(shape, alien) {
		
		shape.remove();
		
	}  

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('black');
	
	shape.moveTowards(mouseX, mouseY, 1);

	if (mouse.presses()) {

		shape.moveTo(xPos, yPos, 100);

	}
	background('black');
	text("TIMER", 200, 100) 	
	textSize(25);
	fill('red');
	textAlign(CENTER, CENTER);
	textSize(100);
	text(timer, 0, 0, 100,100);
	if (frameCount % 60 == 0 && timer > 0) {
		timer --;
	}
	if (timer == 0) {
		text("YOU WIN", width/2, height*0.7);
	}

}
  


/*******************************************************/
//  END OF APP
/*******************************************************/