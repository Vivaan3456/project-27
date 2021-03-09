
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof,rope

function preload()
{
	
}

function setup() {

	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 roof = new Roof(300,250,400,25);
 //rope1 =new Suspender(bobObject1.body,roof.body,-100,0)
 //rope2 =new Suspender(bobObject2.body,roof.body,-100,0)
 //rope3 =new Suspender(bobObject3.body,roof.body,-100,0)
 //rope4 =new Suspender(bobObject4.body,roof.body,-100,0)
 //rope5 =new Suspender(bobObject5.body,roof.body,-100,0)

 bobObject1=new Bob(200,400,20)
 bobObject2=new Bob(240,400,20)
 bobObject3=new Bob(280,400,20)

 bobObject4=new Bob(320,400,20)

 bobObject5=new Bob(360,400,20)
 


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	background("white")

  rectMode(CENTER);
  //background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  //drawSprites();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 rope1.display();
 ////rope2.display();
 //rope3.display();
 //rope4.display();


 //rope5.display();


 
}



