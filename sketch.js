const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 600);
  engine=Engine.create();
  world=engine.world
  ground=new Ground(1500,580,3000,20);

 box1=new Box(700,500);
 box2=new Box(800,500);
 box3=new Box(900,500);
 box4=new Box(1000,500);
 box5=new Box(700,400);
 box6=new Box(800,400);
 box7=new Box(900,400);
 box8=new Box(1000,400);
 box9=new Box(700,300);
 box10=new Box(800,300);
 box11=new Box(900,300);
 box12=new Box(1000,300);
ball=new Ball(200,100,50,50);
slingshot=new Slingshot(ball.body,{x:200,y:100})

}

function draw() {
  background(0);
Engine.update(engine);
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
ball.display();
slingshot.display();
//box14.display();
//box15.display();
//box16.display();
//box17.display();
//box18.display();
//box19.display();
//box20.display();

}

