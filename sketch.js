
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var w1,w2;
var g1,g2,g3,g4,g5;
var o1,o2,o3,o4,o5,o6,o7,o8;
var b1,b2,b3,b4,b5,b6,b7;
var l1,l2;
var e1,e2,e3,e4,e5;
var p1,p2,p3,p4,p5,p6,p7,p8;
var t1,t2,t3,t4,t5,t6,t7,t8;
var h1,h2,h3,h4,h5;

var pacmanImg;
var ghost1Img,ghost2Img,ghost3Img,ghost4Img;
var pacman;
var ghost1,ghost2,ghost3,ghost4;

function preload(){
pacmanImg=loadImage("images/pacman.png");
ghost1Img=loadImage("images/ghost1.png");
ghost2Img=loadImage("images/ghost2.png");
ghost3Img=loadImage("images/ghost3.png");
ghost4Img=loadImage("images/ghost4.png");
}


function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	w1=createSprite(510,60,850,3);
	w2=createSprite(510,340,850,3);
	g1=createSprite(200,120,100,3);
	g2=createSprite(150,200,3,150);
	g3=createSprite(200,270,100,3);
	g4=createSprite(250,230,3,75);
	g5=createSprite(220,190,50,3);
  
	o1=createSprite(320,190,70,3);
	o2=createSprite(280,230,3,80);
	o3=createSprite(320,270,70,3);
	o4=createSprite(355,230,3,80);
  
	o5=createSprite(420,190,70,3);
	o6=createSprite(380,230,3,80);
	o7=createSprite(420,270,70,3);
	o8=createSprite(455,230,3,80);
	
	b1=createSprite(540,160,100,3);
	b2=createSprite(495,200,3,80);
	b3=createSprite(590,200,3,80);
	b4=createSprite(540,240,100,3);
  
	b5=createSprite(540,270,100,3);
	b6=createSprite(540,290,3,30);
	b7=createSprite(540,130,100,3);
  
	l1=createSprite(620,230,3,80);
	l2=createSprite(650,270,70,3);
  
	e1=createSprite(740,200,80,3);
	e2=createSprite(700,230,3,70);
	e3=createSprite(780,210,3,20);
	e4=createSprite(740,220,80,3);
	e5=createSprite(740,270,80,3);
  
  p1=createSprite(80,100,3,80);
  p2=createSprite(80,300,3,80);
  p3=createSprite(100,140,40,3);
  p4=createSprite(100,260,40,3);
  p5=createSprite(120,160,3,40);
  p6=createSprite(120,240,3,40);
  p7=createSprite(100,180,40,3);
  p8=createSprite(100,220,40,3);

  t1=createSprite(935,300,3,80);
  t2=createSprite(935,100,3,80);
  t3=createSprite(915,140,40,3);
  t4=createSprite(915,260,40,3);
  t5=createSprite(895,160,3,40);
  t6=createSprite(895,240,3,40);
  t7=createSprite(915,180,40,3);
  t8=createSprite(915,220,40,3);

  h1=createSprite(130,90,3,50);
  h2=createSprite(340,150,120,5);
  h3=createSprite(820,130,5,100);
  h4=createSprite(460,300,50,5);
  h5=createSprite(160,310,5,50);



  pacman=createSprite(540,320,20,20);
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



