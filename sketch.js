var a;
var circles=[];
var ground,stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingShot;

function setup() {
  createCanvas(800,800);
  stroke(255)
  
  ground = new Ground(600,height,1200,20);
  stand1 = new stand1(100,height,500,15);
  stand2 = new stand1(50,height,400,15);

  //level one
  block1 = new block1(309,275,30,40);
  block2 = new block1(312,275,30,40);
  block3 = new block1(315,275,30,40);
  block4 = new block1(318,275,30,40);
  block5 = new block1(321,275,30,40);
  block6 = new block1(324,275,30,40);
  block7 = new block1(327,275,30,40);

  //level two
  block8 = new block1(330,235,30,40);
  block9 = new block1(360,235,30,40);
  block10 = new block1(390,235,30,40);
  block11 = new block1(420,235,30,40);
  block12 = new block1(450,235,30,40);

  //level three
  block13 = new block1(360,195,30,40);
  block14 = new block1(390,195,30,40);
  block15 = new block1(420,195,30,40);

  //top
  block16 = new block1(390,155,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new  Slingshot(this.polygon,{x:100,y:200});




 
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);
  
  ground.disply();

  stand1.disply();
  stand2.disply();
  
  block1.display();
  block2.display();
  block3.disply();
  block4.disply();
  block5.disply();
  block6.disply();
  block7.disply();
  block8.disply();
  block9.disply();
  block10.disply();
  block11.disply();
  block12.disply();
  block13.d3isply();
  block14.disply();
  block15.disply();
  block16.disply();

  slingShot.display();



  

  
  
  a=a-1;
  
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 
