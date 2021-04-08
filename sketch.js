var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	var options={
		restitution:2.0,
		friction:0.125,
	    isStatic:true
	}
	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650/2/2,30/2/2);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 50 , options);
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  
  star.y=starBody.position.y;
  star.x=starBody.position.x;
  if(starBody.position.y>470&&(star.y>470)){
	  Matter.Body.setStatic(starBody,true)
  }

  //ellipseMode(RADIUS);
  //ellipse(starBody.position.x,starBody.position.y,50,50);
  
  
  drawSprites();

}

function keyPressed() {
// 	if(keyDown("right")||(keyDown("d"))){
// 		fairy.x=fairy.x+10
// 	} else if(keyDown("left")||(keyDown("a"))){
// 	  fairy.x=fairy.x-10
//   }
  if (keyCode === DOWN_ARROW) { Matter.Body.setStatic(starBody,false); }
  if(keyCode === RIGHT_ARROW){ fairy.x = fairy.x + 20; } 
  if(keyCode === LEFT_ARROW){ fairy.x = fairy.x - 20; }
	//write code here
}
