var car, wall;
var speed,weight;
function setup(){
createCanvas(1200,400);
speed=random(55,90);
weight=random(400,1500);


car=createSprite(50,200,50,50);
car.velocityX= speed;
wall=createSprite(1100,200,60,height/2);


}

function draw(){
  background(0);
  drawSprites(); 
  if(car.isTouching(wall)){
    car.velocityX=speed=0;
  } 
}
if(wall.x-car.x<(car.width+wall.widht)/2){
  car.velocityX=speed=0;
  var deformation=0.5* wieght * speed * speed/22509;
  if(deformation>180){
      car.shapeColor=color(250,0,0);
  }
}
if(deformation<180 && deformation<100){
    car.shapeColor=color(230,230,0);
}
if(deformation<100){
  car.shapeColor=color(0,225,0);
}




