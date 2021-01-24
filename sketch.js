const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;

var engine, world;
var obj;
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  options={
    restitution:0.5
  }

  obj=Bodies.circle(200,100,20,options);
  World.add(world, obj);
  console.log(obj);

 goptions={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,400,10,goptions);
  World.add(world, ground);
}

function draw() {
  background(0); 

Engine.update(engine);
  rect(ground.position.x,ground.position.y,400,10); 
  rectMode(CENTER);
  ellipse(obj.position.x,obj.position.y,20,20)
  ellipseMode(RADIUS)
  drawSprites();
}