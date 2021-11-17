
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=50;

var ground, ground1, ground2;
var b1,b2,b3,b4;
var top_wall;
var ball,rock;

var btn1;
var btn2;

var angle = 60;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  var ball_options = {
    restitution:1,
    frictionAir:0.01
  
  }

  var rock_options = {
    restitution: 0.3,
    frictionAir:0.01
  }
   
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);

  ground= Bodies.rectangle(200,390,400,20,ground_options);

  World.add(world, ground);
 
  ground1 = Bodies.rectangle(50,100,10,1,ground_options);
  World.add(world,ground1); 

  ground2 = Bodies.rectangle(300,100,10,10,ground_options);
  World.add(world,ground2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
rect(ground.position.x,ground.position.y,400,20);
ellipse(ball.position.x,ball.position.y,20);
push();
fill("brown");
ellipse(rock.position.x,rock.position.y,20);
pop();

Matter.Body.rotate(ground1, angle)
  push ();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop ();
  angle+=0.1;
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);

Matter.Body.rotate(ground2, angle)
  push ();
  translate(ground2.position.x,ground2.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop ();
  angle+=0.1;
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);

}

function vForce(){
 //write a code to move ball up when the button is clicked.
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}


  


