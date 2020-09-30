
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(450,600,30);
	bobObject2 = new Bob(390,600,30);
	bobObject3 = new Bob(510,600,30);
	bobObject4 = new Bob(330,600,30);
	bobObject5 = new Bob(570,600,30);
	
	roof = new Roof(330);
	rope1 = new Rope(bobObject1.body,roof.body,-bobObject1.diameter*2 , 0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	
  bobObject1.display();	
  bobObject2.display();	
  bobObject3.display();	
  bobObject4.display();	
  bobObject5.display();	
  roof.display();
  rope1.display();
  
  drawSprites();
 
}



