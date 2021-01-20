
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var playerAni, player;
var ground , groundImg;

function preload()
{
	playerAni = loadAnimation("mario.gif");
	groundImg = loadImage("ground.png");
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player = createSprite(windowWidth/2-300,windowHeight/2+150);
	player.addAnimation("player",playerAni);

	ground = createSprite(windowWidth/2,windowHeight/2+300);
	ground.addImage(groundImg);
	ground.scale = 0.2;
	ground.velocityX = -5

	if(ground.x < windowWidth/2){
		ground.x = windowWidth/2;
	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120,120,255);
  
  drawSprites();
 
}



