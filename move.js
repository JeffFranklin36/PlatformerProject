function isLava(){
    if(player.x >= lava.x && player.x <= lava.x+lava.width && player.y == 350){
        endGame()
    }
}

//isPlatform checks if player.y is = to platform.ys if not drop to bottom
// function isPlatform(){
//     if(player.y = 290){
//         player.y = worldElements.platform1.y
//     }
// }

//isCoin(x, y) -> bool (true or false)
//addCoinToPurse
    // coinCount + 1
    // remove coin from game

// isGround(){
    // checks if player.y is = to ground if not drops to ground
//}


let keys = {
    right: false,
    left: false,
    up: false,
    down: false,
}; 

function keydown(e) {
     if(e.keyCode == 37) {
        keys.left = true;
        isLava();
     }
     else if(e.keyCode == 39) {
        keys.right = true;
        isLava();
     }
     else if(e.keyCode == 38) {
        keys.up = true
        setTimeout(() =>{keys.up = false;}, 50)
        setTimeout(() =>{keys.down = true;}, 50)
        isLava();
     }
}

function keyup(e) {
     if(e.keyCode == 37) {
        keys.left = false;   
         
        }
     else if(e.keyCode == 39) {
        keys.right = false;
     }
     else if(e.keyCode == 38) {
        keys.up = false;
        setTimeout(() =>{keys.down = false;}, 50)
        isPlatform();
    }
} 
    function loop() {
     if(keys.left) {
        player.x+= -5.5;
     }
     else if(keys.right) {
        player.x  += 5.5;
     }
     else if(keys.up) {
        player.y  -= 80;
    }
    else if(keys.down){
        player.y = 350; 
    } 
  renderGame()
}
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
   // Calling loop every 22 milliseconds to update the frame
setInterval(loop, 22);