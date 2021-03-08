class Drops{
constructor(x, y, rad){
    //super(x,y,10,10);
    var options = {
    isStatic: false,
      restitution:0.8,
      friction:0.1,
      density:1.0
  }
    this.x = x;
    this.y = y;
    this.radius = rad;
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    //alert(this.radius)
    World.add(world,this.body);
}
update()
{
  this.body.position.x = math.random(0,400);
  this.body.position.y = math.random(0,400);
 
}


display() {
  var dropPos= this.body.position ;
  push();
  translate(dropPos.x,dropPos.y);
  
  //strokeWeight(3);
  fill(255,255,0);
//image(this.image,0,0,this.radius,this.radius); 
  ellipse(dropPos.x,dropPos.y,this.radius,this.radius); 
  if (dropPos.y > height)
  {
   Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,800)})

  }
 
  pop(); 
}
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   /* super.display();
  if(this.rain.position.y>height){

Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
  }
  var maxDrops=100;
   
  
  
  for(var i=0;i<maxDrops;i++){
    drops.push(new createDrop(random(0,400),random(0,400)))
   }
   }*/

}



