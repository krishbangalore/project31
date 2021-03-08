const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rainDrop = [];


function preload(){
    
}

function setup(){
   var canvas = createCanvas(800,800);
  // console.log(canvas);
   
    ///var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    var maxDrop = 1000;
    for(var i = 0 ;i < maxDrop; i++)
    {
       rainDrop.push( new Drops(random(i,800),random(i + 10,800), random(2,5) ));
    }




   // rainDrop = Bodies.circle(random(0,100),random(0,200),3);
    //rainDrop1 = Bodies.circle(random(0,100),random(0,200),3);
   //rainDrop = Bodies.rectangle(200,200,80,80);

   
    //fill(255,255,0);
    
   // World.add(world,[rainDrop,rainDrop1]);
   
   // Engine.update(engine);
    
}

function draw(){
   // Engine.update(engine);
    //rainDrop.display();
    background(51);

   
    for(var i = 0 ;i < rainDrop.length; i++)
    {
        rainDrop[i].display();
       // console.log( rainDrop[i]);
       
        
    } 

    //alert(rainDrop.length);
   /// rect(rainDrop.position.x,rainDrop.position.y,80,90)
   //ellipse(rainDrop.position.x,rainDrop.position.y,rainDrop.radius,rainDrop.radius);
   //ellipse(rainDrop1.position.x,rainDrop1.position.y,rainDrop1.radius,rainDrop1.radius);
  //ellipse(0,0,rainDrop.radius,rainDrop.radius);
//  alert(rainDrop.position.y);
  
}   

