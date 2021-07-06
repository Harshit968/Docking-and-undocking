var iss,spacecraft1,spacecraft1Img,spacecraft2,spacecraft2Img,spacecraft3,spacecraft3Img;
var spacecraft4,spacecraft4Img,bg,bgImg;
var invisibleBlock;

function preload(){
  issImg = loadImage("Docking-undocking/iss.png");
  spacecraft1Img = loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2Img = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3Img = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4Img = loadImage("Docking-undocking/spacecraft4.png");
  bgImg = loadImage("Docking-undocking/spacebg.jpg");
}

function setup() {
  createCanvas(800,800);

  
  bg = createSprite(400,400);
  bg.addImage(bgImg);
  bg.scale = 2

  iss = createSprite(470, 400, 50, 50);
  iss.addImage(issImg);

  spacecraft1 = createSprite(450, 600, 50, 50);
  spacecraft1.addImage(spacecraft1Img);
  spacecraft1.scale = 0.3;
  spacecraft1.depth = iss.depth
  iss.depth = iss.depth+1;

  invisibleBlock = createSprite(400,425,1,1)
  invisibleBlock.visible = false;
  invisibleBlock.debug  = false;

  
}

function draw() {
  
  
  if (keyIsDown(UP_ARROW)){
   spacecraft1.y =spacecraft1.y-1;
   spacecraft1.addImage("spacecraft up",spacecraft2Img);
   spacecraft1.changeAnimation("spacecraft up");
  }

  if (keyIsDown(LEFT_ARROW)){
    spacecraft1.x =spacecraft1.x-1;
    spacecraft1.addImage("spacecraft left",spacecraft3Img);
    spacecraft1.changeAnimation("spacecraft left");
   }

   if (keyIsDown(RIGHT_ARROW)){
    spacecraft1.x =spacecraft1.x+1;
    spacecraft1.addImage("spacecraft right",spacecraft4Img);
    spacecraft1.changeAnimation("spacecraft right");
   }

   

  drawSprites();
  if(spacecraft1.isTouching(invisibleBlock)){
  stroke("white");
textSize(50); 
fill("white");
text("Docking Sucessful",150,550)
  }
}
