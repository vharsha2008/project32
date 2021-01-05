const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;



var block1,block2,block3,block4,block5,block6,block7;

var score=0;







function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball (99,320,20,20);
    ground = new Ground (200,390,2000,20);
    ground2 = new Ground (400,250,210,20);
    ground3 = new Ground (899,200,200,20);
    slingShot = new Slingshot(ball.body,{x:120,y:250});
    block1 = new Block(350,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);
    block6 = new Block(360,235,30,40);

    block7 = new Block(360,195,30,40);
    block8 = new Block(390,195,30,40);
    block9 = new Block(420,195,30,40);

    block10 = new Block(390,155,30,40);
    block11 = new Block(920,100,30,40);
    block12 = new Block(940,100,30,40);
    block13 = new Block(960,100,30,40);
    block14 = new Block(980,100,30,40);
    block15 = new Block(910,100,30,40);
    block15 = new Block(910,100,30,40);
    block16 = new Block(900,100,30,40);
    block17 = new Block(910,100,30,40);
    block18 = new Block(910,100,30,40);

   
  

}
function draw(){
    background("blue");
    Engine.update(engine);
    
    ball.display();
    slingShot.display();
    ground.display();
    ground2.display();
    ground3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
   
        
    

text("SCORE:"+score,750,40);

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}   


function score(){
    if(this.visibiliy<0 && this.visibiliy >-150){
        score++;
    }
}





function keyPressed(){
    if (keyCode==32){
        slingShot.attach(ball.body)
    }
} 