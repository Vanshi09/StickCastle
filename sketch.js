const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    rect1 = new Rectangle(200,200,100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(rect1.body.position.x);
    rect1.display();
  }  