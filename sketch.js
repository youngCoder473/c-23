//namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxOne;
var boxTwo;
var boxThree;
var ground

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    //new there is an object to be created!
    //immediately after new you write class name;
    boxOne = new Box(330, 50);
    boxTwo = new Box(100, 10);
    boxThree = new Box(200,20);
    ground = new Ground(200,380,400,30);
}

function draw() {
    background(0);
    Engine.update(engine);
    boxOne.display();
    boxTwo.display();
    boxThree.display();
    ground.display();
}