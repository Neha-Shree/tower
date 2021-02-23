const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine , world;

var blockStand1 , blockStand2 ; 

var block1 , block2 , block3 , block4 , block5 , block6 , block7 , block8 , block9 , block10 , block11 , block12 , block13 , block14 , block15 , block16 ,  block17 , block18 ,
 block19 , block20 , block21 , block22 , block23 , block24 , block25 ;

var ground ;  

var polygon;

function setup() {
	createCanvas(1920, 965);

	engine = Engine.create();
	world = engine.world

    polygon = new Polygon(10,10,1,1);
    blockStand1 = new BlockStand(700,700);
    ground = new Ground(950,955,2000,15);

    Engine.run(engine);

}

function draw() {
    background("black");
    Engine.update(engine);
    rectMode(CENTER);

    polygon.display();
    blockStand1.display();
    ground.display();

    drawSprites();
}