//all non player world objects
let worldElements = [
    groundLeft = {type:'environment', width: 495, height: 75, color: 'brown', x: 0, y:425, z:0, src: ''},
    grassLeft =  {type:'environment', width: 495, height: 25, color: 'green', x: 0, y:400, z:0,  src: ''},
    groundRight = {type:'environment', width: 495, height: 75, color: 'brown', x: 1010, y:425, z:0, src: ''},
    grassRight =  {type:'environment', width: 495, height: 25, color: 'green', x: 1010, y:400, z:0, src: ''},
    lava = {type:'obstacle', width: 515, height: 110, color: 'orange', x:495, y:395, z:1, src: ''},
    sky = {type:'environment', width: 1485, height: 400, color: 'skyblue', x: 0, y:0, z:0, src: ''}, 
    sun = {type:'environment', width: 80, height: 80, color: 'lightyellow', x: 80, y:50, z:1, src: 'assets/sun.png'},
    platform1 = {type:'lowPlatform', width: 160, height: 30, color: 'slategray', x: 480, y:290, z:1, src: 'assets/platform.png'},
    platform2 = {type:'highPlatform', width: 160, height: 30, color: 'slategray', x: 640, y:240, z:1, src: 'assets/platform.png'},
    platform3 = {type:'lowPlatform', width: 160, height: 30, color: 'slategray', x: 800, y:290, z:1, src: 'assets/platform.png'},  
    coin1 = {type:'coin', width: 20, height: 20, x: 525, y:230, z:1, src: 'assets/coin1.png'},
    coin2 = {type:'coin', width: 20, height: 20, x: 575, y:230, z:1, src: 'assets/coin1.png'},
    coin3 = {type:'coin', width: 20, height: 20, x: 680, y:180, z:1, src: 'assets/coin1.png'},
    coin4 = {type:'coin', width: 20, height: 20, x: 740, y:180, z:1, src: 'assets/coin1.png'},
    coin5 = {type:'coin', width: 20, height: 20, x: 850, y:230, z:1, src: 'assets/coin1.png'},
    coin6 = {type:'coin', width: 20, height: 20, x: 900, y:230, z:1, src: 'assets/coin1.png'},
]
// coin count will have +1 added to it whenever a coin is picked up when it reaches 6 winGame() will run
let coinCount = 0
// detects if player character touches coin and picks it up if character picks coin
function isCoin(){
    worldElements.forEach(element => {
        if(element.type === 'coin'){
            if(player.x >= element.x-30 && player.y == element.y){
                element.type ='collectedCoin'
                coinCount ++
                console.log(coinCount)
                setTimeout(() => {
                winGame()
                }, 200)
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
src: 'assets/playerIdle.png' ,
};

//puts player on screen
 function renderPlayerImg(){
    let ctx = myGameArea.context;
    let imageObj = new Image();
       imageObj.src = player.src
  
       var drawFunct = function(x,y,w,h){
           ctx.drawImage(imageObj,x,y,w,h);
       }
  
  
       if (imageObj.complete) {
           drawFunct(player.x, player.y, player.width, player.height);
       } 
       else {
        imageObj.onload = drawFunct(player.x, player.y, player.width, player.height);
       } 
 }
