
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pc, pcImg, npc, npcImg

function preload()
{
	bg = loadImage('images/bg.png');

	pcImg = loadImage('images/pc0.png');

	npcImg = loadAnimation('images/npc1.png', 'images/npc animation 2.png');

	doorImg = loadImage('images/doors.png');

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	pc = createSprite(400, 800, 10, 10);
	pc.addImage('scientist', pcImg);

	npc = createSprite(200, 200, 10, 10);
	npc.addAnimation('scientist npc', npcImg);
	npc.scale = 1.5


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  image(bg, width/2, height/2, width*3, height);

  if(keyDown(RIGHT_ARROW)){

	pc.x = pc.x+10
  }
  if(keyDown(LEFT_ARROW)){

	pc.x = pc.x-10
  }
  camera.position.x = pc.x


  drawSprites();
 spawnDoors();

 input = createInput('Answer')
 input.position(850, 600)

}


function spawnDoors(){



  if(frameCount % 50 === 0){
	  
	doors = createSprite(3000, 800, 10, 10);
	doors.addImage('open', doorImg);
	doors.scale = 4.5

  }


  swal({
	title: `Question 1`,
	text: "2 + 18",
	confirmButtonText: "hint: what is 2 times 10 "
  });

}
