//array of game elements that will never move
let worldElements = [
 groundLeft = {type:'environment', width: 495, height: 75, color: 'brown', x: 0, y:425, z:0},
 grassLeft =  {type:'environment', width: 495, height: 25, color: 'green', x: 0, y:400, z:0},
 groundRight = {type:'environment', width: 495, height: 75, color: 'brown', x: 1010, y:425, z:0},
 grassRight =  {type:'environment', width: 495, height: 25, color: 'green', x: 1010, y:400, z:0},
 lava = {type:'obstacle', width: 515, height: 110, color: 'orange', x:495, y:395, z:1},
 sky = {type:'environment', width: 1485, height: 400, color: 'skyblue', x: 0, y:0, z:0},
 sun = {type:'environment', width: 80, height: 80, color: 'lightyellow', x: 80, y:50, z:1},
 platform1 = {type:'lowPlatform', width: 160, height: 30, color: 'slategray', x: 480, y:290, z:1},
 platform2 = {type:'highPlatform', width: 160, height: 30, color: 'slategray', x: 640, y:240, z:1},
 platform3 = {type:'lowPlatform', width: 160, height: 30, color: 'slategray', x: 800, y:290, z:1},
//  platformTest = {type:'lowPlatform', width: 160, height: 30, color: 'slategray', x: 100, y:290, z:1},
//  platformHighTest = {type:'highPlatform', width: 80, height: 30, color: 'slategray', x: 275, y:240, z:1}
]
//array of game elements that will be pickable by the player
let objectives = [
 coin1 = {type:'coin', width: 20, height: 20, x: 525, y:230, z:1, src: 'assets/coin1.png'},
 coin2 = {type:'coin', width: 20, height: 20, x: 575, y:230, z:1, src: 'assets/coin1.png'},
 coin3 = {type:'coin', width: 20, height: 20, x: 680, y:230, z:1, src: 'assets/coin1.png'},
 coin4 = {type:'coin', width: 20, height: 20, x: 740, y:230, z:1, src: 'assets/coin1.png'},
 coin5 = {type:'coin', width: 20, height: 20, x: 850, y:230, z:1, src: 'assets/coin1.png'},
 coin6 = {type:'coin', width: 20, height: 20, x: 900, y:230, z:1, src: 'assets/coin1.png'},
 coin7 = {type:'coin', width: 20, height: 20, x: 100, y:350, z:1, src: 'assets/coin1.png'},
 wall1 = {type:'wall', width: 20, height: 20, x: 100, y:350, z:1, src: 'assets/coin1.png'},
]
// coin count will have +1 added to it whenever a coin is picked up when it reaches 6 winGame() will run
let coinCount = 0
function isCoin(){
    objectives.forEach(element => {
        if(element.type === 'coin'){
            if(player.x >= element.x && player.y == element.y){
                element.type ='collectedCoin'
                coinCount ++
                console.log(coinCount)
                winGame()
            }
        }
     })
}

//Component creates game elements
class Component{
 constructor(type, width, height, color, x, y, z, src){
 this.width = width;
 this.height = height;
 this.src = src;
 this.componentX = x;
 this.componentY = y;    
 this.z = z;
 this.color = color;
 this.type = type
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
location: 'ground',
width: 40,
height: 60,
color: 'black',
x: 10,
y: 350,
z: 1,
groundLevel: 350,
lowPlatform: 230,
highPlatform: 180,
};

//puts player on screen
function renderPlayer(){
 let ctx = myGameArea.context;
 ctx.fillStyle = player.color;
 ctx.fillRect(player.x, player.y, player.width, player.height);
 }
