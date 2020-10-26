//initiate Game STATEs
var instructions,instru;
var next, nimg;
var ground,ground2;
var player1,imo;
var invisibleGround;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
instru = loadImage("Instruct.JPG");
nimg=loadImage("play.JPG");
imo=loadAnimation("pla1.png","pla2.png","pla3.png","pla4.png");
//ground2=loadImage("groundies.jpg")
}
function setup(){
  createCanvas(1000, 800);
   instructions=createSprite(350,200);
  instructions.addImage(instru);
instructions.visible=true;
  next=createSprite(550,380);
next.addImage(nimg);
  //next.position(550,380);
  
}
function draw(){
  background(255,255,2550);
  if(mousePressedOver(next)){
    gameState=PLAY;
    if(gameState===PLAY){
    instructions.visible=false;
    player1=createSprite(200,200,20,20);
    player1.addAnimation("players",imo);
    player1.scale=0.6;
    player1.velocityX=2;
    player1.velocityY = player1.velocityY + 0.8;
    invisibleGround=createSprite(200,380,400,20);
    invisibleGround.visible=false;
  
     ground = createSprite(200,380,400,20);
    //ground.addImage(ground2);
    ground.x = ground.width /2;
    ground.velocityX = -3;
    if (ground.x < 20){
      ground.x = ground.width/2;
    }
  }
    next.visible=false;
  }
  
 
  drawSprites();
}
function keyPressed(){
  if(keyCode === 32){
     player1.velocityY=-12;
    
  }}
