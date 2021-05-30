var player,game,foarm;
var gameState=0,playerCount=0,bulletCount=0;
var player1,player2,player3,player4,player5,players,jetimg,skyimg,finish,finishimg,mar;
var allPlayers,ufoimg,wall1,wall2,wall3,wall4,log,laddersimg,ladder1,ladder2,ladder3,ladder4,ladder5,ladder6,ladder7,ladder8,ladder9,ladder10,wall5,line1,line2;
function preload(){
laddersimg=loadImage("ladders.png")
finishimg=loadImage("finish.jpg")

}

function setup() {
  database=firebase.database() 
  

  createCanvas(displayWidth+150,displayHeight-40);

  finish=createSprite(displayWidth/2+150,displayHeight/2-283)
  finish.addImage(finishimg)
  finish.scale=0.1
 
   line1=createSprite(displayWidth/2+405,displayHeight/2-232,displayWidth/2+20,3)
   line1.shapeColor="blue"

wall1=createSprite(7,displayHeight/2,5,10000)
wall1.shapeColor="blue"
wall2=createSprite(displayWidth+144,displayHeight/2,5,10000)
wall2.shapeColor="blue"
wall3=createSprite(displayWidth/2,displayHeight-44,10000,5)
wall3.shapeColor="blue"
wall4=createSprite(displayWidth/2,7,10000,5) 
wall4.shapeColor="blue"
wall5=createSprite(displayWidth/2+190,displayHeight/2+165,1500,5)
wall5.shapeColor="blue"

  game=new Game()
game.start()
game.gameState()
player.wave()
}

function draw() {


background(1000);  





if(playerCount===3){
game.updateState(1)

 }

 if(gameState===1){
   
game.play()


}
 


}                            
