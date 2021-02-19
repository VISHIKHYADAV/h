var bullet,wall,thickness;
var speed,weight;

function setup(){
createCanvas(1600,400);

thickness=random(22,83);

bullet= createSprite(50,200,50,10);
wall = createSprite(1200,200,thickness,100);

speed=random(223,321);
weight=random(30,52);

bullet.velocityX=speed;





}

function draw(){
background("aqua");

if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180){
bullet.shapeColor="white";;

}
if(deformation<180 && deformation>100){
  bullet.shapeColor="white";
}
if(deformation<100){

  bullet.shapeColor="white";
}



}





drawSprites();

}