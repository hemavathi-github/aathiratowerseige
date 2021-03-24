const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,slingshot;
var polygon,polygonImg;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

    block7 = new Block(440,230,30,40);
  

    ground1 = new Ground(600,700,1200,20);
stand= new Ground(390,500,300,10);

   polygon= new Polygon(900,300,20,20);

   

    slingshot = new SlingShot(polygon.body,{x:900, y:300});
}

function draw(){
    background(12);
    Engine.update(engine);
    
    

    text("Drag the Hexagonal Stone and Release it ,to launch it towards the box", 600, 100);

    ground1.display();
   

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    stand.display();
   polygon.display();
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
    slingshot.attach(polygon.body);

    }
}


