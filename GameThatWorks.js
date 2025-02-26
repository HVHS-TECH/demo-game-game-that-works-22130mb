/*******************************************************/
// P5.play: gamethatworks
// Move sprite towards the mouse' position
// Written by max
/*******************************************************/
let timer = 10;
let shape;
let alienGroup;
let wallLH, wallRH, wallTop, wallBot;
let gameOver = false; 
let gameState = 'PLAY'; 
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
    createCanvas(1000, 1000);

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
    	for (let i = 0; i < 5; i++) {
        let alien = new Sprite(random(100, 900), random(100, 900), 50, 50, 'd');
        alien.vel.x = random(2, 5);
        alien.vel.y = random(2, 5);
        alien.bounciness = 3;
        alien.friction = 1;
        alienGroup.add(alien);
    }

    
    alienGroup.collides(shape, func2Call);
}

function func2Call(shape, alien) {
    
    shape.remove();
    gameState = 'LOSE'; 
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('black');

    if (gameState === 'PLAY') {
        
        shape.moveTowards(mouseX, mouseY, 1);

       displayTimer();

       if (mouse.presses()) {
            shape.moveTo(width / 2, height / 2, 100);
        }

      
        if (timer == 0) {
            gameState = 'WIN'; 
        }
    }

    
    if (gameState === 'WIN') {
        textSize(50);
        fill('green');
        textAlign(CENTER, CENTER);
        text("YOU WIN!", width / 2, height / 2);
        displayRestartMessage();
    }

    if (gameState === 'LOSE') {
        textSize(50);
        fill('red');
        textAlign(CENTER, CENTER);
        text("YOU LOSE", width / 2, height / 2);
        displayRestartMessage();
    }
}

function displayTimer() {
    textSize(25);
    fill('red');
    textAlign(CENTER, CENTER);
    textSize(100);
    text(timer, width / 2, height / 2);

    if (frameCount % 60 == 0 && timer > 0) {
        timer--;
    }
}

function displayRestartMessage() {
    textSize(30);
    fill('white');
    textAlign(CENTER, CENTER);
    text("Press 'R' to Restart", width / 2, height * 0.7);
}

function keyPressed() {
    if (key === 'r' || key === 'R') {
        restartGame();
    }
}

function restartGame() {
    gameState = 'PLAY';
    timer = 10; 
    alienGroup = new Group(); 
    for (let i = 0; i < 5; i++) {
        let alien = new Sprite(random(100, 900), random(100, 900), 50, 50, 'd');
        alien.vel.x = random(2, 5);
        alien.vel.y = random(2, 5);
        alien.bounciness = 3;
        alien.friction = 1;
        alienGroup.add(alien);
    }
}

/*******************************************************/
//  END OF APP
/*******************************************************/