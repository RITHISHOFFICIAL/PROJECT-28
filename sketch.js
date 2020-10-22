
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1=new ground(400,height,800,25);
   tree1=new tree(600,550,0,1);
   stone1=new stone(200,200,25,25,PI/2);
   boy1=new boy(200,650,10,0);
   sling1=new slingShot(stone1.body,boy1.body);
   mango1=new mango(550,450,30,20,PI/2);
   mango2=new mango(600,470,30,20,PI/2);
   mango3=new mango(505,490,30,20,PI/2);
   mango4=new mango(630,440,30,20,PI/2);
   mango5=new mango(530,430,30,20,PI/2);
   mango6=new mango(680,440,30,20,PI/2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  function detectcollision{
    mango.isStatic:false;
  }

  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);

  ground1.display();
  tree1.display();
  stone1.display();
  boy1.display();
  sling1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,boy1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling1.fly();
}

