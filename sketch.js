
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	myWorld = engine.world;

	paper=new Paper(100,100);
	side1=new Dustbin(900,600,15,100);
	side2=new Dustbin(1000,650,220,15);
	side3=new Dustbin(1100,600,15,100);
	ground=new Ground(600,680,1200,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  paper.display();
  side1.display();
  side2.display();
  side3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.paperBody,paper.paperBody.position,{x:10,y:-10});
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(paper.paperBody,paper.paperBody.position,{x:10,y:10});
	}
}

