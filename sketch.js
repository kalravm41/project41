const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var track_img,car1,car,img;
//var cars = [car1,car2];
var arr = [];
var gameState = 1;

function preload(){
  track_img = loadImage("track.jpg");
  img = loadImage("car1.png");
  }
function setup() {
  engine = Engine.create();
  world = engine.world;                   

  createCanvas(displayWidth-20,displayHeight-30);
  car1 = createSprite(350,650,100,100);
  car1.addImage(img);
  car = createSprite(random(276,1110),car1.y-200);

}

function draw() {
  Engine.update(engine);
  background(0);
  camera.position.y = car1.y;
  image(track_img, 0,-displayHeight*4,displayWidth, displayHeight*5);
  console.log(gameState);

  if(gameState === 1){
    if(frameCount % 20 === 0 || -0 ){
      console.log("k");
  car = createSprite(random(276,1110),random(250,-2500));
  car.addImage(img);
  car.lifetime = 1000;
  }
}

  if( gameState === 1){
   // console.log(car1.body.position);
    
  if(keyIsDown(UP_ARROW)){
    //console.log("l");
   // gameState = 1;
   car1.y -=  10;
  }
  
  if(keyIsDown(LEFT_ARROW) && car1.x > 266){
    //console.log("l");
    gameState = 1;
    //console.log(car1.body.position.y);
   car1.x -= 10;
  }
  if(keyIsDown(RIGHT_ARROW) && car1.x < 1100){
    //console.log("l");
    gameState = 1;
   // console.log(car1.body.position.y);
   car1.x += 10;
  }
drawSprites();
  
}

  if( car1.y < -3000 || isTouching(car1,car)){
    console.log(gameState);
    gameState = 2;
    textSize(50);
    text("Game Over",200,200);
  }
}
function isTouching(obj1,obj){
  if(obj1.x - obj.x < obj1.width/2 + obj.width/2
  && obj.x - obj1.x < obj1.width/2 + obj.width/2
  && obj.y - obj1.y < obj1.height/2 + obj.height/2
  && obj1.y - obj.y < obj1.height/2 + obj.height/2){
    return true;
  }
  else{
    return false;
  }
}



