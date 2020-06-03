
var Drop, Drop1, Drop2, Drop3, Drop4, Drop5;
var DropImg, DropImg1, DropImg2, DropImg3, DropImg4, DropImg5;

function preload(){
  DropImg = loadImage("Images/1.jpg");
  DropImg1 = loadImage("Images/2.jpg");
  DropImg2 = loadImage("Images/3.jpeg");
  DropImg3 = loadImage("Images/4.jpg");
  DropImg4 = loadImage("Images/5.jpeg");
  DropImg5 = loadImage("Images/6.jpeg");
}

function setup(){
  createCanvas(displayWidth, displayHeight);

  grp4 = createGroup();
  grp5 = createGroup();
  grp6 = createGroup();
  grp7 = createGroup();
  grp8 = createGroup();
  grp9 = createGroup();
}

function draw() {
  background(0);
  spawn4();
  spawn5();
  spawn6();
  spawn7();
  spawn8();
  spawn9();
  drawSprites();
}

function spawn4(){
  if(World.frameCount % 35 === 0){
  Drop = createSprite(random(0, displayWidth), 0, 20, 20);
  Drop.addImage(DropImg);
  Drop.velocityY = 7;
  Drop.lifetime = 200;
  console.log("Shyam")
  }
}

function spawn5(){
  if(World.frameCount % 25 === 0){
  Drop1 = createSprite(random(0, displayWidth), 0, 20, 20);
  Drop1.addImage(DropImg1);
  Drop1.velocityY = 7;
  Drop1.lifetime = 200;
  }
}

function spawn6(){
  if(World.frameCount % 40 === 0){
  Drop2 = createSprite(random(0, displayWidth), 0, 20, 20);
  Drop2.addImage(DropImg2);
  Drop2.velocityY = 7;
  Drop2.lifetime = 200;
  }
}

function spawn7(){
   if(World.frameCount % 45 === 0){
  Drop3 = createSprite(random(0, displayWidth), 0, 20, 20);
  Drop3.addImage(DropImg3);
  Drop3.velocityY = 7;
  Drop3.lifetime = 200;
  }
}
function spawn8(){
   if(World.frameCount % 55 === 0){
  Drop4 = createSprite(random(0, displayWidth), 0, 20, 20);
  Drop4.addImage(DropImg4);
  Drop4.velocityY = 7;
  Drop4.lifetime = 200;
  }
}
function spawn9(){
   if(World.frameCount % 10 === 0){
  Drop5 = createSprite(random(0, displayWidth), 0, 20, 20);
  Drop5.addImage(DropImg5);
  Drop5.velocityY = 7;
  Drop5.lifetime = 200;
  }
}