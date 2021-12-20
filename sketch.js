var caixa;
function setup() {
  createCanvas(400,400);
  caixa = createSprite (200,200,50,50);
}

function draw() 
{
  background(30);
if(keyDown(UP_ARROW)){
caixa.velocityY = -3;
}
if(keyDown(DOWN_ARROW)){
  caixa.velocityY = 3;
}
if(keyDown(LEFT_ARROW)){
  caixa.velocityX = -3;
}
if(keyDown(RIGHT_ARROW)){
  caixa.velocityX = 3;
}
drawSprites();
}




