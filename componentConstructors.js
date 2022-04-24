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
}



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


function renderPlayer(){
 let ctx = myGameArea.context;
 ctx.fillStyle = player.color;
 ctx.fillRect(player.x, player.y, player.width, player.height);
 }
