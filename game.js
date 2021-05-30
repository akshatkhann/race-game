class Game{

constructor(){

}
gameState(){
var gameStateRef=database.ref("gameState")
gameStateRef.on("value",function(data){

gameState=data.val()


})

}
updateState(state){
database.ref("/").update({

gameState:state

})


}
async start(){
if(gameState===0){
player=new Player()
    var playerCountRef=await database.ref("playerCount").once("value")
if(playerCountRef.exists()){
playerCount=playerCountRef.val()

player.playerCount()
}
foarm=new Foarm()
foarm.display()
}


   
line1=createSprite(displayWidth/2-200,displayHeight/2+140,10,50)   
line1.shapeColor="red"
line1=createSprite(displayWidth/2+200,displayHeight/2+100,10,70)         
line1.shapeColor="red"
line1=createSprite(displayWidth/2+600,displayHeight/2+150,10,25)  
line1.shapeColor="red"
line1=createSprite(displayWidth/2+600,displayHeight/2+80,10,50)  
line1.shapeColor="red"
line1=createSprite(displayWidth+95,displayHeight-285,10,10)  
line1.shapeColor="red"
line1=createSprite(displayWidth+85,displayHeight-400,10,10)  
line1.shapeColor="red"
line1=createSprite(displayWidth+103,displayHeight-515,10,10)  
line1.shapeColor="red"
line1=createSprite(displayWidth+77,displayHeight-515,10,10)  
line1.shapeColor="red"


line1=createSprite(displayWidth/2-550,displayHeight/2-225,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-495,displayHeight/2-225,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-430,displayHeight/2-225,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-400,displayHeight/2-225,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-350,displayHeight/2-225,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-280,displayHeight/2-225,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-260,displayHeight/2-200,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-200,displayHeight/2-225,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-170,displayHeight/2-250,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-100,displayHeight/2-250,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-50,displayHeight/2-200,10,10)
line1.shapeColor="blue"
line1=createSprite(displayWidth/2-10,displayHeight/2-250,10,10)
line1.shapeColor="blue"

ladder1=createSprite(displayWidth+90,displayHeight-100)
ladder1.addImage(laddersimg)
ladder1.scale=0.26


ladder2=createSprite(displayWidth/10-27.5,displayHeight-185)
ladder2.addImage(laddersimg)
ladder2.scale=0.26


ladder3=createSprite(displayWidth/10-27.5,displayHeight-285)
ladder3.addImage(laddersimg)
ladder3.scale=0.26



ladder4=createSprite(displayWidth/10-27.5,displayHeight-385)
ladder4.addImage(laddersimg)
ladder4.scale=0.26


ladder5=createSprite(displayWidth/10-27.5,displayHeight-485)
ladder5.addImage(laddersimg)
ladder5.scale=0.26


ladder6=createSprite(displayWidth/10-27.5,displayHeight-585)
ladder6.addImage(laddersimg)
ladder6.scale=0.26


ladder7=createSprite(displayWidth+90,displayHeight-270)
ladder7.addImage(laddersimg)
ladder7.scale=0.26



ladder8=createSprite(displayWidth+90,displayHeight-370)
ladder8.addImage(laddersimg)
ladder8.scale=0.26


ladder9=createSprite(displayWidth+90,displayHeight-470)
ladder9.addImage(laddersimg)
ladder9.scale=0.26


ladder10=createSprite(displayWidth+90,displayHeight-570)
ladder10.addImage(laddersimg)
ladder10.scale=0.26


player1=createSprite(displayWidth/2,displayHeight/2,10,10)
player2=createSprite(displayWidth/2,displayHeight/2,10,10)
player3=createSprite(displayWidth/2,displayHeight/2,10,10)



players=[player1,player2,player3]

for(var i=109;i<displayWidth+109;i=109+i){

log=createSprite(i,displayHeight/2+250,50,5)    
log.shapeColor="blue"
}


    
}
play(){
   


foarm.hide()
background("pink")
Player.playersinfo()
var x=100
var y=200
var index=0

drawSprites()
for(var plr in allPlayers){
    
index = index+1
x = displayWidth-allPlayers[plr].distance;
y = displayHeight-allPlayers[plr].dist;


players[index-1].x = x
players[index-1].y = y 
fill("black")
    textSize(25)  

text(allPlayers[plr].name,x-25,y-20)


if(player===player.index){
    
}
}


if(keyIsDown(LEFT_ARROW)&&player.index!==null&&player.distance<1350){
player.distance+=5
player.players()


}
if(keyIsDown(RIGHT_ARROW)&&player.index!==null&&player.distance>-137){
    player.distance-=5
    player.players()
    
    
    }



if(keyWentUp("space")&&player.index!==null && player.dist===52){                                                                                                                               
     
player.dist+=80
player.players()

}

if(keyWentUp("space")&&player.index!==null && player.dist===142){                                                                                                                               
     
    player.dist+=70
    player.players()
    
    }

if(keyWentUp("space")&&player.index!==null && player.dist===227){                                                                                                                               
 
    player.dist+=90
    player.players()
    
    }

    if(keyWentUp("space")&&player.index!==null && player.dist===617){                                                                                                                               
 
        player.dist+=90
        player.players()
        
        }

        if(keyWentUp("space")&&player.index!==null && player.dist===592){                                                                                                                               
 
            player.dist+=90
            player.players()
            
            }
    
            if(keyWentUp("space")&&player.index!==null && player.dist===642){                                                                                                                               
 
                player.dist+=90
                player.players()
                
                }

    if(player.dist>52){
        player.dist-=5
        player.players()
    
    
}


if(player.distance<-72&&player.distance>-107&& player.dist<135){


    if(keyIsDown(UP_ARROW)&&player.index!==null){                                                                                                                               
         
        player.dist+=10
        player.players()
    
    }
    


}



if(player.dist<625&&player.dist>125&&player.distance<1267 &&player.distance>1247){

    if(keyIsDown(UP_ARROW)&&player.index!==null){                                                                                                                               
         
        player.dist+=10
        player.players()
    
    }

}

if(player.dist<=620&&player.dist>=220&&player.distance<-77 &&player.distance>-102){


    if(keyIsDown(UP_ARROW)&&player.index!==null){                                                                                                                               
         
        player.dist+=10
        player.players()
    
    }
}

if(player.dist>136&&player.dist<140&&player.distance<-22&&player.distance>-83){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<88&&player.distance>26){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<197&&player.distance>135){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<304&&player.distance>244){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<417&&player.distance>354){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<527&&player.distance>459){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<637&&player.distance>574){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<741&&player.distance>679){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<852&&player.distance>789){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<962&&player.distance>899){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<1072&&player.distance>1009){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<1182&&player.distance>1119){
    player.dist+=5
    player.players()



}

if(player.dist>136&&player.dist<140&&player.distance<1292&&player.distance>1219){
    player.dist+=5
    player.players()



}
if(player.dist===222&&player.distance<1250){
    player.dist+=5
    player.players()



}






    if(player.distance<=890&&player.distance>=872&&player.dist>=227&&player.dist<=273){

    player.distance=1218
    player.dist=227
}


    if(player.distance<=490&&player.distance>=472&&player.dist>=257&&player.dist<=303){

        player.distance=1218
        player.dist=227    
    }

    if(player.distance<=90&&player.distance>=72&&player.dist>=227&&player.dist<=238){

        player.distance=1218
        player.dist=227    
    }

    if(player.distance<=90&&player.distance>=72&&player.dist>=275&&player.dist<=335){

        player.distance=1218
        player.dist=227    
    }
 
        

     if(player.distance<=-87&&player.distance>-107&&player.dist>=277&&player.dist<=292){

         player.distance=1218
         player.dist=227
         }

    if(player.distance<=-77&&player.distance>-92&&player.dist>=390&&player.dist<=407){


        player.distance=1218
        player.dist=227

}

if(player.distance<=-97&&player.distance>-112&&player.dist>=507&&player.dist<=522){


    player.distance=1218
    player.dist=227

}

if(player.distance<=-65&&player.distance>-87&&player.dist>=507&&player.dist<=522){


    player.distance=1218
    player.dist=227

}

if(player.dist===617&&player.distance<=633&&player.distance>=-77){

player.dist+=5
player.players()

}

















if(player.dist>602&&player.dist<617&&player.distance<=1242&&player.distance>1224){
    player.dist+=5
    player.players()

}

if(player.dist>602&&player.dist<617&&player.distance<=1187&&player.distance>1169){
    player.dist+=5
    player.players()

}

if(player.dist>602&&player.dist<617&&player.distance<=1122&&player.distance>1104){
    player.dist+=5
    player.players()

}

if(player.dist>602&&player.dist<617&&player.distance<=1092&&player.distance>1074){
    player.dist+=5
    player.players()

}


if(player.dist>602&&player.dist<617&&player.distance<=1042&&player.distance>1024){
    player.dist+=5
    player.players()

}

if(player.dist>602&&player.dist<617&&player.distance<=972&&player.distance>954){
    player.dist+=5
    player.players()

}




if(player.dist<592&&player.dist>577&&player.distance<=952&&player.distance>934){
    player.dist+=5
    player.players()

}

if(player.dist>602&&player.dist<617&&player.distance<=892&&player.distance>874){
    player.dist+=5
    player.players()

}

if(player.dist<642&&player.dist>627&&player.distance<=862&&player.distance>844){
    player.dist+=5
    player.players()

}

if(player.dist<642&&player.dist>627&&player.distance<=792&&player.distance>774){
    player.dist+=5
    player.players()

}


if(player.dist<592&&player.dist>577&&player.distance<=742&&player.distance>724){
    player.dist+=5
    player.players()

}


if(player.dist<642&&player.dist>627&&player.distance<=702&&player.distance>684){
    player.dist+=5
    player.players()

}

if(player.distance<588&player.distance>483&&player.dist===622){


player.dist=99999999999
player.distance=99999999999

this.win=createElement("h2")
this.win.html("YOU WIN")
this.win.position(displayHeight/2+200,displayHeight/2)

}





}

}

