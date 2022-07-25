var invisibleBlockGroup, invisibleBlock;
var spaceImg,  space;
var gameoverImg, gameover
var rocketImg,  rocket
var astroideImg,  astroide, astroideGroup;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
spaceImg = loadImage("space.jpg");
gameoverImg = loadImage("gameover.jpg");
rocketImg = loadImage("rocket.png");
astroideImg = loadImage("astroide.png")


}

function setup() {

    createCanvas(650,650);
space= createSprite(600,600);
space.addImage("space",spaceImg);
space.velocityY = 1;

astroide = new Group();

rocket = createSprite(290,250,100,500);
rocket.scale = 0.3;
rocket.addImage("rocket", rocketImg);
rocket.scale = 0.1
astroideGroup = new Group();
   rocket.debug= false



}

function draw() {
background(225);

if(rocket.y >height){
 
    rocket.y = 900
  } 

if (gameState === "play") 
 { 
  if(keyDown("left_arrow")){
      rocket.x = rocket.x - 9;

  }
  if(keyDown("right_arrow")){
  
    rocket.x = rocket.x + 10;
  }

  if(keyDown("space")){
  
    rocket.velocityY = -10 

  }

  rocket.velocityY = rocket.velocityY + 0.8;

  
  
    
  
  if(astroideGroup.isTouching(rocket) || rocket.y > 600){
    rocket.destroy()
    gameState = "end"
 }


spawnastroide() ;
 }
if (gameState === "end"){
  var gameover=createSprite(320,300)
  gameover.scale=1.2
gameover.addImage("gameover",gameoverImg)
astroideGroup.destroyEach()
//astroideGroup.setvelocityYEach(0)
console.log("end")


  }










drawSprites()
}

function spawnastroide (){

if(frameCount%50==0){

var astroide = createSprite(200,-50)
astroide.addImage("astroide",astroideImg)
astroide.velocityY = 5
astroide.scale =  0.1
astroide.debug=false
astroide.x=Math.round(random(100,500))
astroideGroup.add(astroide)


}


}

