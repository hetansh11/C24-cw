const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var balls=[]
var canvas, angle, tower, ground, cannon;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
angleMode(DEGREES)
angle=15

  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
cannon=new Cannon(180,110,130,100,angle)

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  cannon.display()
  
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
for  (var i=0;i<balls.length;i++){
showCannonballs(balls[i])

}

}
function keyReleased(){
if(keyCode===RIGHT_ARROW){
balls[balls.length-1].shoot()

}

}
function keyPressed(){
if(keyCode===LEFT_ARROW){
 var cannonball=new Cannonball(cannon.x,cannon.y)
cannonball.tejectory=[]
  Matter.Body.setAngle(cannonball.body,cannon.angle)


balls.push(cannonball)
console.log("wdi")
}
}
function showCannonballs(ball){
if (ball){
  ball.display()
}

}