/*******************************************************/
// P5.play: gamethatworks
// Move sprite towards the mouse' position
// Written by max
/*******************************************************/
  
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
	shape = new Sprite(400, 400, 200, 200, 'd');
	shape.color = 'white';
	world.gravity.y = 5;
	shape.bounciness = 1;
	alienGroup = new Group();
	for (i = 0; i < 5; i++) {
		alien = new Sprite(100, 100, 50, 50, 'd');
		alien.vel.x = 5;
		alien.vel.y = 5;
		alien.bounciness = 0.5;
		alien.friction = 1;
		alienGroup.add(alien);
	}
	alienGroup.collides(shape, func2Call);
	function func2Call(shape, alien) {

		// Delete the alien which was hit
		
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
text("WELCOME TO HORDE RUSH", 50, 50) 	
textSize(25);
fill('red');

alien.visible = false;
text("you won")
 
}

/*******************************************************/
//  END OF APP
/*******************************************************/