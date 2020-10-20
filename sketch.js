var car
var wall
var speed
var weight
function setup() {
  createCanvas(1600,400);
  car = createSprite(50,50, 50, 50);
  wall = createSprite(1500,50, 50, 50);
  wall = color(80,80,80)
  speed=math.round(random(45,60))
  weight=math.round(random(1522,3000  ))
}

function draw() {
  background(255,255,255);
  car.velocityX = speed;  
  drawSprites();
}