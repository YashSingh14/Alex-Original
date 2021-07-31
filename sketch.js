var alex, alexStone;
var ground, groundImage;
var alien, alien_running
var stone, stonesGroup;
var stone1, stone2;

function preload(){
  alex_walking =   loadAnimation("walking1.png","walking2.png","walking3.png","walking4.png");
  alex_collided = loadAnimation("alex_standing.png");
  alien_running = loadAnimation("r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","r16")
  groundImage = loadImage("ground.jpg");
  
  stone1 = loadImage("stone1.png");
  stone2 = loadImage("stone2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  alex = createSprite(50,180,20,20);
  alex.debug = true;
  alex.setCollider("rectangle", 0, 0, 50, 80)
  
  alex.addAnimation("running", alex_walking);
  alex.addAnimation("collided", alex_collided);
  alex.scale = 1;

 alien = createSprite(500, 500, 20, 20);
 alien.addAnimation("alienRunning", alien_running);

  stonesGroup = new Group();
}

function draw() {
  background(groundImage);
  if(keyDown("RIGHT_ARROW")){
    alex.x = alex.x+3
  }

  if(keyDown("LEFT_ARROW")){
    alex.x = alex.x-3
  }

  if(keyDown("UP_ARROW")){
    alex.y = alex.y-3
  }

  if(keyDown("DOWN_ARROW")){
    alex.y = alex.y+3
  }
  spawnStones();

  if(stonesGroup.isTouching(alex)){
    alex.changeAnimation("collided", alex_collided)
  }
  drawSprites();
}

function spawnStones() {
  if(frameCount % 60 === 0) {
    var stone = createSprite(Math.round(random(0, 1400)),Math.round(random(0, 1400)),20,20);
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: stone.addImage(stone1);
              break;
      case 2: stone.addImage(stone2);
              break;
      default: break;
    }
    stone.debug = true;
    stone.setCollider("rectangle", 0, 0, 200, 200)
    stone.scale = 0.08;
    stone.lifetime = 150;
    stonesGroup.add(stone);
  }
}
