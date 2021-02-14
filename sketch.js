let mySound;

var boss;
var barricade;
var cop,cop_img;; 
var jail ,jail_img;
var thief,thief_img;
var brick1,brick2,brick3;
var wright,lepht,upht,downee;
var goon1,goon2,goon3,goon_img;

function preload() {

  cop_img=loadImage("star.png");
  jail_img=loadImage("jail.png");
  thief_img=loadImage("target.png")
  goon_img=loadImage("goon.png")

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  barricade=createSprite(1190,50,10,10000);

  cop=createSprite(200,200,20,20);
  cop.addImage(cop_img);
  cop.scale=0.2;

  boss=createSprite(200,400,20,20);
  boss.addImage(goon_img);
  boss.scale=0.05;
  boss.velocityX=10;
  boss.velocityY=7;

  jail=createSprite(1090,110,400,400);
  jail.addImage(jail_img);

  thief=createSprite(300,300,20,20);
  thief.velocityY=10;
  thief.velocityX=15;
  thief.addImage(thief_img);
  thief.scale=0.15;

  goon1=createSprite(300,300,20,20)
  goon1.velocityY=4;
  goon1.velocityX=10;
  goon1.addImage(thief_img);
  goon1.scale=0.15;

  goon2=createSprite(300,300,20,20)
  goon2.velocityY=8;
  goon2.velocityX=10;
  goon2.addImage(thief_img);
  goon2.scale=0.15;

  goon3=createSprite(300,300,20,20)
  goon3.velocityY=12;
  goon3.velocityX=5;
  goon3.addImage(thief_img);
  goon3.scale=0.15; 

  brick1=createSprite(300,400,400,10);
  brick2=createSprite(600,700,300,10);
  brick3=createSprite(700,200,10,325)

  wright=createSprite(975,1,10,2000)
  //wright.velocityY=50;
  upht=createSprite(1,5,20000,10)
  lepht=createSprite(5,1,10,10000)
  downee=createSprite(5,789,10000,10)
 

}

function draw()
{
  
  background(128,0,128);

  console.log(wright.y);

 createEdgeSprites();

 
thief.bounceOff(brick1);
thief.bounceOff(brick2);
thief.bounceOff(brick3);
thief.bounceOff(wright);
thief.bounceOff(upht);
thief.bounceOff(lepht);
thief.bounceOff(downee);
thief.bounceOff(barricade);

boss.bounceOff(brick1);
boss.bounceOff(brick2);
boss.bounceOff(brick3);
boss.bounceOff(wright);
boss.bounceOff(upht);
boss.bounceOff(lepht);
boss.bounceOff(downee);
boss.bounceOff(barricade);
boss.bounceOff(goon1);
boss.bounceOff(goon2);
boss.bounceOff(goon3);
boss.bounceOff(thief);

cop.bounceOff(brick1);
cop.bounceOff(brick2);
cop.bounceOff(brick3);
cop.bounceOff(wright);
cop.bounceOff(upht);
cop.bounceOff(lepht);
cop.bounceOff(downee);
cop.bounceOff(barricade);

goon1.bounceOff(brick1);
goon1.bounceOff(brick2);
goon1.bounceOff(brick3);
goon1.bounceOff(wright);
goon1.bounceOff(upht);
goon1.bounceOff(lepht);
goon1.bounceOff(downee);
goon1.bounceOff(barricade);

goon2.bounceOff(brick1);
goon2.bounceOff(brick2);
goon2.bounceOff(brick3);
goon2.bounceOff(wright);
goon2.bounceOff(upht);
goon2.bounceOff(lepht);
goon2.bounceOff(downee);
goon2.bounceOff(barricade);

goon3.bounceOff(brick1);
goon3.bounceOff(brick2);
goon3.bounceOff(brick3);
goon3.bounceOff(wright);
goon3.bounceOff(upht);
goon3.bounceOff(lepht);
goon3.bounceOff(downee);
goon3.bounceOff(barricade);


  if(keyDown(UP_ARROW)) {
    cop.velocityX =0;
    cop.velocityY = -10;
  }
  
  if(keyDown(DOWN_ARROW)){
    cop.velocityX=0;
    cop.velocityY=10;
  }
  
  if(keyDown(RIGHT_ARROW))
  { 
  cop.velocityX=10;
  cop.velocityY=0;
  }
  
  if(keyDown(LEFT_ARROW))
  {
    cop.velocityX=-10;
    cop.velocityY=0;
  }

  if(cop.isTouching(thief))
  {
     thief.x=1000;
  }

  if(cop.isTouching(goon1))
  {
     goon1.x=1000;
  }

  if(cop.isTouching(goon2))
  {
     goon2.x=1000;
  }

  if(cop.isTouching(goon3))
  {
     goon3.x=1000;
  }

  if(wright.y=1000)
  {
    wright.y=100;
  }

  if(boss.isTouching(cop))
  {
    wright.destroy();
    }


  //textSize(20);
 // text('Hello Player!!', 20, 20);
  //text('Tap here to play music', 20, 40);


  drawSprites();
}

////function sherlockSound() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  
  //sherlock.play();
//}