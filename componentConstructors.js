//array of game elements that will never move
let worldElements = [
 groundLeft = {width: 495, height: 75, color: 'brown', x: 0, y:425, z:0},
 grassLeft =  {width: 495, height: 25, color: 'green', x: 0, y:400, z:0},
 groundRight = {width: 495, height: 75, color: 'brown', x: 1010, y:425, z:0},
 grassRight =  {width: 495, height: 25, color: 'green', x: 1010, y:400, z:0},
 lava = {width: 515, height: 110, color: 'orange', x:495, y:395, z:1},
 sky = {width: 1485, height: 400, color: 'skyblue', x: 0, y:0, z:0},
 sun = {width: 80, height: 80, color: 'lightyellow', x: 80, y:50, z:1},
 platform1 = {width: 160, height: 30, color: 'slategray', x: 480, y:290, z:1},
 platform2 = {width: 160, height: 30, color: 'slategray', x: 640, y:240, z:1},
 platform3 = {width: 160, height: 30, color: 'slategray', x: 800, y:290, z:1},
]
//array of game elements that will be pickable by the player
let objectives = [
 coin1 = {width: 20, height: 20, x: 525, y:265, z:1, src: 'assets/coin1.png'},
 coin2 = {width: 20, height: 20, x: 575, y:265, z:1, src: 'assets/coin1.png'},
 coin3 = {width: 20, height: 20, x: 680, y:215, z:1, src: 'assets/coin1.png'},
 coin4 = {width: 20, height: 20, x: 740, y:215, z:1, src: 'assets/coin1.png'},
 coin5 = {width: 20, height: 20, x: 850, y:265, z:1, src: 'assets/coin1.png'},
 coin6 = {width: 20, height: 20, x: 900, y:265, z:1, src: 'assets/coin1.png'},
]
// coin count will have +1 added to it whenever a coin is picked up when it reaches 6 winGame() will run
let coinCount = 0

//Component creates game elements
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

     var drawFunct = function(x,y,w,h){
         ctx.drawImage(imageObj,x,y,w,h);
     }


     if (imageObj.complete) {
         drawFunct(this.componentX,this.componentY,this.width,this.height);
     } 
     else {
      imageObj.onload = drawFunct(this.componentX,this.componentY,this.width,this.height);
     } 
    }
}


// player properties
let player = {
width: 40,
height: 60,
color: 'black',
x: 10,
y: 350,
z: 1,
};

//puts player on screen
function renderPlayer(){
 let ctx = myGameArea.context;
 ctx.fillStyle = player.color;
 ctx.fillRect(player.x, player.y, player.width, player.height);
 }
