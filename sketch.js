var wall,bullet,speed,weight,deformation, thickness;

function setup() {
  createCanvas(1400,400);
  
  wall = createSprite(1000,200,thickness,200);
  wall.shapeColor=80
  ;
  bullet = createSprite(50,200,60,30);
  bullet.shapeColor="white";
  
  speed=random(223,331);
  weight=random(30,52);
  thickness=random(22,83);
}
Text("Press space to fire",700,25);
function draw() {
  background("blue");  
  bullet.velocityX=speed;

  if(wall.x-bullet.x<wall.width/2+bullet.width/2 && 
    bullet.x-wall.x<wall.width/2+bullet.width/2 &&
    wall.y-bullet.y<wall.height/2+bullet.height/2 &&
    bullet.y-wall.y<wall.height/2+bullet.height/2){
      deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
      bullet.velocityX=0;
    }
    
    if(deformation<=10){
      bullet.shapeColor="green";
      
    }
    if(deformation>10){
      bullet.shapeColor="red";
      
    }
  drawSprites();
}
