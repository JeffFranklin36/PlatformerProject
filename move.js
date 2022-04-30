function isLava(){
    if(player.x >= lava.x && player.x <= lava.x+lava.width && player.y == 350){
        endGame()
    }
}

function onPlatform(currentLocation){
    let foundOnLow = false;
    let foundOnHigh = false;
    let newLocation = ''
    worldElements.forEach(element => {
        if(element.type === 'lowPlatform'){
            if(currentLocation === 'low'){
                if(player.x >= element.x-50 && player.x <= element.x+element.width){
                    newLocation = 'low';
                    foundOnLow = true
                    }
            }
        }else if(element.type === 'highPlatform'){
            if(currentLocation === 'high'){
                if(player.x >= element.x-50 && player.x <= element.x+element.width){
                    newLocation = 'high';
                    foundOnHigh = true

                    }
            }
        }
    });
    if(foundOnLow === false && foundOnHigh === false){
        newLocation = 'ground'
    }
    if(currentLocation === 'high' && newLocation != 'high'){
        newLocation = 'low'
    }
 return newLocation
}

function underPlatform(){
    worldElements.forEach(element => {
        if(element.type === 'lowPlatform'){
            if(player.location === 'ground'){
                if(player.x >= element.x-50 && player.x <= element.x+element.width){
                    player.location = 'low'
                }
            }
        }
        if(element.type === 'highPlatform'){
            if(player.location === 'low'){
                if(player.x >= element.x-50 && player.x <= element.x+element.width){
                    player.location = 'high'
                }
            }
        }
    });
}

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
        isCoin();
     }
     else if(e.keyCode == 39) {
        keys.right = true;
        isLava();
        isCoin();
     }
     else if(e.keyCode == 38) {
        keys.up = true
        setTimeout(() =>{keys.up = false;}, 50)
        setTimeout(() =>{keys.down = true;}, 50)
        isLava();
        isCoin();
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
    }
} 
    function loop() {
     if(keys.left) {
        player.x+= -5.5;
        let currentLocation = player.location
        if(currentLocation != 'ground'){
            let newLocation = onPlatform(currentLocation)
            console.log(newLocation)
            if(currentLocation === 'high'){
                newLocation === onPlatform('low')
                console.log('$' + newLocation)
            }
            if(newLocation === 'ground'){
                player.y = player.groundLevel
            }else if(newLocation === 'low'){
                player.y = player.lowPlatform
            }else if(newLocation === 'high'){
                player.y = player.highPlatform
            }
            player.location = newLocation
        }
    }
     else if(keys.right) {
        player.x  += 5.5;
        let currentLocation = player.location
        if(currentLocation != 'ground'){
            let newLocation = onPlatform(currentLocation)
            console.log(newLocation)
            if(currentLocation === 'high'){
                newLocation === onPlatform('low')
            }
            if(newLocation === 'ground'){
                player.y = player.groundLevel
            }else if(newLocation === 'low'){
                player.y = player.lowPlatform
            }else if(newLocation === 'high'){
                player.y = player.highPlatform
            }
            player.location = newLocation
        }
    }
     else if(keys.up) {
        player.y  -= 80;
    }
    else if(keys.down){
        underPlatform()
        if(player.location === 'low'){
            player.y = player.lowPlatform
        }else if(player.location === 'high'){
            player.y = player.highPlatform
        }else{
            player.y = player.groundLevel
        }
     
        }
        renderGame()
        if(gameOver === true){
          return
    } 
}

document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
   // Calling loop every 22 milliseconds to update the frame
setInterval(loop, 22);