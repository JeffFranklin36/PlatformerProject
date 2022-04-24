let keys = {
    right: false,
    left: false,
    up: false,
   };
   
   let gravity = 0.6;
   let friction = 0.7;
   
   
    function keydown(e) {
     // 37 is the code for thr left arrow key
     if(e.keyCode == 37) {
         keys.left = true;
        }
        //38 is the code for the up arrow key
     if(e.keyCode == 38) {
      if(player.jump == false) {
          player.y_v = -10;
      }
   }
     // 39 is the code for the right arrow key
     if(e.keyCode == 39) {
      keys.right = true;
     }
   }
   
       // This function is called when the key is released
       function keyup(e) {
        if(e.keyCode == 37) {
         keys.left = false;
     }
     if(e.keyCode == 38) {
      if(player.y_v < -2) {
      player.y_v = -3;
     }
    }
     if(e.keyCode == 39) {
         keys.right = false;
     }
    } 
    function loop() {
     if(player.jump == false) {
      player.x_v *= friction;
     }else {
      // If the player is in the air then apply the effect of gravity
      player.y_v += gravity;
     }
     player.jump = true;
     // If the left key is pressed, move the player to the left
     if(keys.left) {
      player.x+= -2.5;
     }
      // If the right key is pressed, move the player to the right
     if(keys.right) {
         player.x  += 2.5;
     }
   
     renderGame()
    }
   document.addEventListener("keydown",keydown);
   document.addEventListener("keyup",keyup);
   // Calling loop every 22 milliseconds to update the frame
   setInterval(loop, 22);
   



// function move(element) {
//  element.style.position = 'fixed'

//  function moveToCoordinates(left, bottom) {
//      element.style.left = left + 'px'
//      element.style.bottom = bottom + 'px'
//  }

//  function moveWithArrowKeys(left, bottom, callback){
//      let direction = null;
//      let x = left;
//      let y = bottom;

//      element.style.left = x + 'px'
//      element.style.bottom = y + 'px'
     
//      function moveCharacter(){ 
//          if(direction === 'west'){
//              x-=1
//          }
//          if(direction === 'north'){
//              y+=1 
//          }
//          if(direction === 'east'){
//              x+=1
//          }
//          if(direction === 'south'){
//              y-=1
//          }
//          element.style.left = x + 'px'
//          element.style.bottom = y + 'px'
//      }
     
//      setInterval(moveCharacter, 1)
     
//      document.addEventListener('keydown', function(e){
//          if(e.repeat) return;
     
//          if(e.key === 'ArrowLeft'){
//              direction = 'west'
//          }
//          if(e.key === 'ArrowUp'){
//              direction = 'north'
//          }
//          if(e.key === 'ArrowRight'){
//              direction = 'east'
//          }
//          if(e.key === 'ArrowDown'){
//              direction = 'south'
//          }
//          callback(direction)
//      })
     
//      document.addEventListener('keyup', function(e){
//          direction = null
//          callback(direction)
//      })
//  }

//  return {
//      to: moveToCoordinates,
//      withArrowKeys: moveWithArrowKeys
//  }
// }