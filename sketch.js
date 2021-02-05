var bg, boy,girl,coins,diamond, valuables;
var Dscore = 0,dpos=20;

function preload() {
    bg1 = loadImage("images/bg2.gif");
    DragonImg = loadAnimation("images/Animal4.gif");
    valuableImg = loadImage("images/Valuable1.gif");
    feedback1Img = loadAnimation("images/Feedback1.gif");
}

function setup(){
    //canvas for the game
   createCanvas(1250,690);
   //background creating, assigning image, scaling and giving velocity to make it move
    bg = createSprite(620,350,1250,690);
    bg.addImage(bg1);
    bg.scale = 2.2;
    bg.velocityX = -1;
   
   //creation of boy(player sprite)
   boy = createSprite(100,height-40,30,60);
   boy.shapeColor = "red";
   girl = createSprite(150,height-40,30,60);
   girl.shapeColor = "red";

   ground = createSprite(width/2,height,width,20);
   ground.shapeColor = "#163858";
   diamondGroup = new Group();
}

function draw(){
    background(bg1);
    
   if(bg.x<400){
       bg.x = 620;
   }
   if(keyDown("space")){
       boy.velocityY = -10;
   }
   boy.velocityY = boy.velocityY +0.5;
   spawnDiamonds();
   drawSprites();
   
   fill("white");
   textSize(30)
   text("Diamonds collected : "+Dscore, 20,50);
   
   for(var i=0;i<diamondGroup.length;i++)
   {
        if(boy.isTouching(diamondGroup[i])){
            diamondGroup[i].destroy();
            Dscore++;
            
        }
        //var abc = createSprite(dpos,50,20,20);
       // abc.addImage(valuableImg);
      //image(valuableImg,dpos,30,50,50)
     // dpos = dpos+50;
}


   if (Dscore === 2){
      fill("white")
      text("Yeah You Did It!!", 400, 300);
      textSize(30);
      var feed1 = createSprite(600,300,40,40);
      feed1.addAnimation("level1",feedback1Img);
      bg.velocityX = 0;
      diamondGroup.setVelocityXEach(0);
  }
   boy.collide(ground);
}

function spawnDiamonds() {
    //write code here to spawn the diamonds
if (frameCount % 60 === 0) {
      var diamond = createSprite(390,height-200,20,20);
      diamond.y = Math.round(random(250, 520));
      diamond.x = Math.round(random(100, 1020));
      diamond.addImage(valuableImg);
      diamond.scale = 0.3;
      diamond.velocityX = -3;
      diamondGroup.add(diamond);
       //assign lifetime to the variable
       diamond.lifetime = 400;
    }
    
  }