
var trex ,trex_running;
var edges;
var ground;
var ground_im;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_im = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5

  edges = createEdgeSprites();

  ground = createSprite(200,180,400,20)
  ground.addImage("ground",ground_im)
  ground.x = ground.width/2;
  
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY = -10
  }

  //addding gravity
  trex.velocityY = trex.velocityY + 0.5;

  //creating infinte ground
  ground.velocityX = -10

  if(ground.x < 0){
    ground.x = ground.width/2
  }

  trex.collide(ground);


  drawSprites();
  
}
