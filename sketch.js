
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper;
var wall1,wall2,wall3;
var ground;
var Launch;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 20, 50);

	ground = new Ground(500,695,1000,10);
	
	wall2 = new Dustbin(720,690,170,170);
  wall3 = new Dustbin(857,580,30,100);

  Launch = new Launcher(paper.body,{x:100, y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#D7D7D7");
  Engine.update(engine);
  
  paper.display();

  wall2.display();

  wall3.display();

  ground.display();

  Launch.display();


  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  Launch.fly();
}
