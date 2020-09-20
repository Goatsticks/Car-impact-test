var car1,wall
var speed, weight
var PLAY=1;
var END=0;
var gameState=PLAY;

function setup() {
    createCanvas(800,800);
   car1 = createSprite(100, 200, 50, 50);
   car1.shapeColor = ("white");
   wall = createSprite(700, 200, 10, 300);
}

function draw() {
  background("black"); 
  def();
   drawSprites();
}
function def(){
   
 if(gameState===PLAY){
  speed=random(45,60)
  weight=random(1522,3000)
   var  d1=0.5*weight*speed*speed/22509;
  car1.velocityX=speed;
  if(car1.isTouching(wall)){
    car1.velocityX=0;
    gameState=END;
  }
   
  
 if(d1>180 && car1.isTouching(wall)){
  car1.shapeColor = ("red");
 }
 if(d1<180 && d1>100 && car1.isTouching(wall)){
  car1.shapeColor = ("orange");
 }
 if(d1<100 && car1.isTouching(wall)){
  car1.shapeColor = ("green");
 }
}
  }