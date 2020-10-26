const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

// Bobs of the Cradle
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
// ropes to which bobs are attached
var rope1,rope2,rope3, rope4,rope5;
// world physics engine part
var world;


function setup() {
	createCanvas(windowWidth, 600);
	rectMode(CENTER);

	// Physics Engine used 
	engine = Engine.create();
	world = engine.world;

	// Created roof
	roofObject = new roof(width/2,height/11,450,60);

	// Diameter assigned to the BobObject, i.e, circular
	bobDiameter = 70;

	// Starting of the Bob's X position
	startBobPositionX = width/2;

	// Starting of the Bob's Y position
	startBobPositionY = height/11+500;

	// BobObjects with properties x, y, r
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	// ropes with properties object.body(1), object/body(2), Yoffset of line, xOffset of line
	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	// Physics engine charged
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

  // displaying all the Bodies on the screen (line(60-72))
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  textSize(20);
  fill(0);
  text("PRESS SPACE TO PULL THE BOB", 100, 50);
}

// if keyDown SPACE key? Force applied to the bob for moverment of others!
function keyPressed() {
  	if (keyCode === 32) {
    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-250,y:-305});
  	}
}
