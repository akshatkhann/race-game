class Player{

constructor(){

this.index=null
this.name=null
this.distance=1332
this.dist=52
this.state=null
this.position=null
}
playerCount(){
var playerCountRef=database.ref("playerCount")
playerCountRef.on("value",function(data){

    playerCount=data.val()
})

}
updateCount(count){
database.ref("/").update({

playerCount:count

})



}

players(){
var playerinfo=database.ref("players/player"+this.index)

database.ref(playerinfo).set({
name:this.name,
distance:this.distance,                                                         
dist:this.dist,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
position:this.position
})

}



static playersinfo(){
var playerInfoRef = database.ref("players");
playerInfoRef.on("value", (data) => {
    
    allPlayers = data.val();
})                                              
}

wave(){
var wave=database.ref("wave")
wave.on("value",function(data){
    
    wave=data.val()
    
})

}
    
updatewave(){
database.ref("/").update({

wave:this.state

})

}





    
}