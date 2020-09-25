const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var li1, li2, li3, li4, li5;
var bob1, bob2, bob3, bob4, bob5;

function setup() {
	createCanvas(1200, 800);
	
	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(400,200,600,50);
	
	//group1
	bob1 = new Bob(200,600,100,100);
	li1 = new Rope(bob1.body,roof.body,200,0);
	
	//group2
	bob2 = new Bob(300,600,100,100);
	li2 = new Rope( bob2.body,roof.body,300,0);

	//group3
	bob3 = new Bob(400,600,100,100);
	li3 = new Rope( bob3.body,roof.body,0,0);

	//group4
	bob4 = new Bob(500,600,100,100);
	li4 = new Rope( bob4.body,roof.body),500,0;

	//group5
	bob5 = new Bob(600,600,100,100);
	li5 = new Rope( bob5.body,roof.body,600,0);
	
	gravity = 0;

	Engine.run(engine);
}


function draw() {
 
	rectMode(CENTER);
  	background(200);  
  
	li1.display();
	li2.display();
	li3.display();
	li4.display();
	li5.display(); 
	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();
	keyPressed();
	drawSprites();
}

function keyPressed() {
	
	if(keyDown("up")) {
		Body.setStatic(bob1.body, false);
		Body.applyForce(bob1.body,{x: bob1.body.position.x, y: bob1.body.position.y},{x: -200,y: 0});
		
	}
	
}