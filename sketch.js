var bullet , wall;
var thickness;
var speed,weight;
function setup() {
 createCanvas(1600,400);
bullet= createSprite(50,200,40,15);
wall= createSprite(1200,200,thickness,height/2);
speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)
}
function draw() {
  background(0);
  wall.shapeColor=(80,80,80)
  bullet.shapeColor=(255,255,255)
bullet.velocityX=speed
if (hasCollided(bullet,wall)){
  bullet.velocityX=0
    var damage=0.5 * weight * speed* speed/(thickness* thickness* thickness);
    if(damage>10){
      bullet.shapeColor=(250,0,0)
    }
    if (damage<10){
      bullet.shapeColor=(0,255,0)
    }
}
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
  return true 
  }
   return false;
  }