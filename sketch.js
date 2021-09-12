var garden,rabbit;
var gardenImg,rabbitImg;
var APPLE;
var LEAF;
var NUM;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
 APPLEImg = loadImage("apple.png");
 LEAFImg = loadImage("redImage.png")}
function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);

APPLE = createSprite(0,50);
APPLE.velocityY = 2;
APPLE.addImage(APPLEImg);
APPLE.scale = 0.09;

LEAF = createSprite(0,50);
LEAF.velocityY = 2;
LEAF.addImage(LEAFImg);
LEAF.scale = 0.09;
}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);
  console.log(APPLE.y,APPLE.x);
  
  if(APPLE.y == 50){
    APPLE.x = Math.round(random(50,350));
  }
  if(LEAF.y == 50){
    LEAF.x = Math.round(random(50,350));
  }
  

   
  
  

  drawSprites();
}