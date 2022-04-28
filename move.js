let keys = {
    right: false,
    left: false,
    up: false,
    down: false,
   };  
function keydown(e) {
     if(e.keyCode == 37) {
         keys.left = true;
        }
     else if(e.keyCode == 39) {
      keys.right = true;
     }
     else if(e.keyCode == 38) {
         keys.up = true
         setTimeout(() =>{keys.up = false;}, 50)
         setTimeout(() =>{keys.down = true;}, 50)
        //  setTimeout(() =>{keys.up = true;}, 1000)
        // timeout make a function that makes it go down until it collides with something
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
     }
     else if(keys.right) {
         player.x  += 5.5;
     }
     else if(keys.up) {
        player.y  -= 80;
    }
    else if(keys.down && player.x <= 480){
        player.y = 350; 
    } 
    else if(keys.down && player.x >= 960){
        player.y = 350; 
    }
    else if(keys.down && player.x >= 480){
        player.y = 230;
    }else if(keys.down && player.x >= 640){
        player.y = 180;
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