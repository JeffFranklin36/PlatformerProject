let worldElements = [
 ground = {width: 1485, height: 75, color: 'brown', x: 0, y:425, z:0},
 grass =  {width: 1485, height: 25, color: 'green', x: 0, y:400, z:0},
 sky = {width: 1485, height: 400, color: 'skyblue', x: 0, y:0, z:0},
 sun = {width: 80, height: 80, color: 'lightyellow', x: 80, y:50, z:1},
 platform = {width: 160, height: 30, color: 'slategray', x: 500, y:290, z:1},
 // coin1 = {width: 20, height: 20, x: 550, y:285, z:1, src: 'assets/coin1.png'},
 // coin2 = {width: 20, height: 20, x: 600, y:285, z:1, src: 'assets/coin1.png'}
]

let objectives = [
 coin1 = {width: 20, height: 20, x: 550, y:265, z:1, src: 'assets/coin1.png'},
 coin2 = {width: 20, height: 20, x: 600, y:265, z:1, src: 'assets/coin1.png'}
]



let player = {
width: 40,
height: 60,
color: 'black',
x_v: 0,
y_v: 0,
x: 10,
y: 350,
z: 1,
jump: true,
};


function renderplayer(){
 let ctx = myGameArea.context;
 ctx.fillStyle = player.color;
 ctx.fillRect(player.x, player.y, player.width, player.height);
 }

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
 }
 function loop() {
  // If the left key is pressed, move the player to the left
  if(keys.left) {
   player.x+= -2.5;
  }
  // If the right key is pressed, move the player to the right
  if(keys.right) {
      player.x  += 2.5;
  }

  player.y += player.y_v;
  player.x += player.x_v;
  // Rendering the canvas, the player and the platforms
  renderplayer();
  renderplat();
}
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
// Calling loop every 22 milliseconds to update the frame
setInterval(loop,22);

class Component{
 constructor(width, height, color, x, y, z, src){
 this.width = width;
 this.height = height;
 this.src = src;
 this.componentX = x;
 this.componentY = y;    
 this.z = z;
 this.color = color;
 }

 create(){
  let ctx = myGameArea.context;
  ctx.fillStyle = this.color;
  ctx.fillRect(this.componentX, this.componentY, this.width, this.height);
 }
 createImg(){
  let ctx = myGameArea.context;
  let imageObj = new Image();
     imageObj.src = this.src
     console.log('Before setonload')

     var drawFunct = function(x,y,w,h){
         console.log('in draw')
         ctx.drawImage(imageObj,x,y,w,h);
     }


     if (imageObj.complete) {
         drawFunct(this.componentX,this.componentY,this.width,this.height);
     } 
     else {
      imageObj.onload = drawFunct(this.componentX,this.componentY,this.width,this.height);
     } 
    }
createPlayer(){
 //gets player on screen in position
 let ctx = myGameArea.context;
 let element = new Image();
  element.src = this.src
  jump: true

  let drawFunct = function(x,y,w,h){
   console.log('in draw')
   ctx.drawImage(element,x,y,w,h);
  }


      if (element.complete) {
       drawFunct(this.componentX,this.componentY,this.width,this.height);
      } 
      else {
       element.onload = drawFunct(this.componentX,this.componentY,this.width,this.height);
      }
     }
    }
    
    // let numPlat = 1;
    // let platforms = [];
    // function createPlatform(){
    //  for(i = 0; i < numPlat; i++) {
    //   platforms.push(
    //       {
    //       x: 500,
    //       y: 290,
    //       color: 'slategray',
    //       width: 160,
    //       height: 80
    //       }
    //   );
    //  }
    // }
    
    // function renderplat(){
    //  let ctx = myGameArea.context;
    //  ctx.fillStyle = this.color;
    //  ctx.fillRect(platforms.x, platforms.y, platforms.width, platforms.height);
     
    
    // }
//   let keys = {
//    right: false,
//    left: false,
//    up: false,
//   };

//   function keydown(e) {
//    if(e.keyCode == 37){
 //     keys.left = true;
 //    }
//    if(e.keyCode == 39){
//     keys.right = true;
//    }
//   }

//   function keyup(e){
//    if(e.keyCode == 37){
//     keys.left = false;
//    }
//    if(e.keyCode ==39){
//     keys.right = false;
//    }
//   }

//   function loop(){
 //    if(keys.left) {
  //     player.x+= -2.5
//    }

//    if(keys.right){
//     player.x += 2.5;
//    }
//   }
//   document.addEventListener('keydown', keydown);
//   document.addEventListener('keyup', keyup);
//   setInterval(loop,22);
//  }
// }
