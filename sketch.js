const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var polygon;
var block1;
var backgroundColor;
var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(550,380,260,12);
    ground2 = new Ground(1050,280,200,12);

    polygon = new Polygon(100,200,50,50);

    slingshot = new SlingShot(polygon.body,{x:100, y:200});

    
//first
    //level 1
    block1 = new Block(460,353,30,40); 
    block2 = new Block(490,353,30,40);
    block3 = new Block(520,353,30,40);
    block4 = new Block(550,353,30,40);
    block5 = new Block(580,353,30,40);
    block6 = new Block(610,353,30,40);
    block7 = new Block(640,353,30,40);

    //level 2
    block8 = new Block(490,313,30,40);
    block9 = new Block(520,313,30,40);
    block10 = new Block(550,313,30,40);
    block11 = new Block(580,313,30,40);
    block12 = new Block(610,313,30,40);

    //level 3
    block13 = new Block(520,273,30,40);
    block14 = new Block(550,273,30,40);
    block15 = new Block(580,273,30,40);

    //top
    block16 = new Block(550,233,30,40);

//sencond
    //leval 1
    block17 = new Block(990,253,30,40);
    block18 = new Block(1020,253,30,40);
    block19 = new Block(1050,253,30,40);
    block20 = new Block(1080,253,30,40);
    block21 = new Block(1110,253,30,40);
    
    //level 2
    block22 = new Block(1020,213,30,40);
    block23 = new Block(1050,213,30,40);
    block24 = new Block(1080,213,30,40);
    
    //top
    block25 = new Block(1050,173,30,40);

    Engine.run(engine);
}

function draw(){
    if(backgroundColor){
    background(backgroundColor);
    }
    fill("blue");
    textSize(30);
    text("Score : "+score,750,40);

    ground1.display();
    ground2.display();

//first
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

//second
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();


    polygon.display();
    slingshot.display();

    detectCollision(polygon,block1);
    detectCollision(polygon,block2);
    detectCollision(polygon,block3);
    detectCollision(polygon,block4);
    detectCollision(polygon,block5);
    detectCollision(polygon,block6);
    detectCollision(polygon,block7);

    detectCollision(polygon,block8);
    detectCollision(polygon,block9);
    detectCollision(polygon,block10);
    detectCollision(polygon,block11);
    detectCollision(polygon,block12);

    detectCollision(polygon,block13);
    detectCollision(polygon,block14);
    detectCollision(polygon,block15);

    detectCollision(polygon,block16);


    detectCollision(polygon,block17);
    detectCollision(polygon,block18);
    detectCollision(polygon,block19);
    detectCollision(polygon,block20);
    detectCollision(polygon,block21);

    detectCollision(polygon,block22);
    detectCollision(polygon,block23);
    detectCollision(polygon,block24);

    detectCollision(polygon,block25);

    getbackgroundcolor();

}

function detectCollision(lpolygon,lblock){
	blockBodyPosition = lblock.body.position;
	polygonBodyPosition = lpolygon.body.position;

	var distance = dist(polygonBodyPosition.x, polygonBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y)
	if(distance<=lblock.width,lblock.height+lpolygon.width,lpolygon.height){
		Matter.Body.setStatic(lblock.body,false)
	}
}

function mouseDragged(){
    polygon.body.position.x=mouseX;
    polygon.body.position.y=mouseY;
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(polygon.body,{x:235, y:420})
		slingshot.attach(polygon.body);
	  }
  }

async function getbackgroundcolor(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var json = await response.json();
    var datetaken = json.datetime;
    var timetaken = datetaken.slice(11,13);
    console.log(timetaken);
    if(timetaken>6 && timetaken<6){
        background(100);
    }
    else
    {
        background(180);
    }
    backgroundColor = loadColor(background);
    console.log(backgroundColor);
}