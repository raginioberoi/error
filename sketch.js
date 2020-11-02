var move,fix;
var ab,ba,aba

function setup() {
  createCanvas(1200,800);
  fix=createSprite(100,200,100,20);
  fix.shapeColor="blue";
  //fix.velocityX=4;
  move=createSprite(600,200,20,100);
  move.shapeColor="red";
//move.velocityX=-4;
ab=createSprite(300,100,30,30);
ab.shapeColor="grey";
//ab.velocityY=4;

ba=createSprite(300,600,30,30);
ba.shapeColor="grey";
//ba.velocityY=-4;

aba=createSprite(300,100,30,30);
aba.shapeColor="grey";

}

function draw() {
  background(255,255,255);  
  move.y=mouseY;
  move.x=mouseX;

//ounceOff(ab,ba);
if(isTouching(move,ab)){
  text("veivdwreygief",200,300);
}

  drawSprites();
}


