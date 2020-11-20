var movingRect,fixedRect,game1;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="blue";
  fixedRect.velocityY=+2;
  movingRect=createSprite(400,300,80,50);
  movingRect.velocityY=-2;
  movingRect.shapeColor="blue";
  game1=createSprite(150,150,50,50);
  game1.shapeColor="blue";
}

function draw() {
  background(0);
  
 /* movingRect.x=mouseX;
  movingRect.y=mouseY; 
 if(isTouching(movingRect,game1)){
  game1.shapeColor="red";
  movingRect.shapeColor="red";

  
 }
 else{game1.shapeColor="blue";
 movingRect.shapeColor="blue";  }*/
 bounceOff(fixedRect,movingRect)
  drawSprites();
}