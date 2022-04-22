let worldElements = [
    ground = {width: 1485, height: 75, color: 'brown', x: 0, y:425, z:0},
    grass =  {width: 1485, height: 25, color: 'green', x: 0, y:400, z:0},
    sky = {width: 1485, height: 400, color: 'skyblue', x: 0, y:0, z:0},
    sun = {width: 80, height: 80, color: 'lightyellow', x: 80, y:50, z:1},
    platform = {width: 160, height: 30, color: 'slategray', x: 500, y:300, z:1},
    coin1 = {width: 20, height: 20, x: 550, y:285, z:1, src: 'assets/coin1.png'},
    coin2 = {width: 20, height: 20, x: 600, y:285, z:1, src: 'assets/coin1.png'}
]

function startGame2(){
 myGameArea.start();
 let player = newPlayableCharacter(100, 100);
 worldElements.forEach(element => {
     createdElement = new StaticComponent(element.width, element.height, element.color, element.x, element.y, element.z, element.src)
     createdElement.create();
     createdElement.createImg();
 });
}



let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1485;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}


class StaticComponent{
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


// function startGame() {
//     myGameArea.start();
//     ground = new StaticComponent(1485, 75, "brown", 0, 425, 0);
//     ground.create();
//     grass = new StaticComponent(1485, 25, "green", 0, 400, 0);
//     grass.create();
//     // sky = new StaticComponent(1485, 400, "skyblue", 0, 0, 0);
//     // sky.create();
//     sun = new StaticComponent(80, 80, "lightyellow", 80, 50, 1);
//     sun.create();
//     platform = new StaticComponent(160, 30, "slategray", 500 , 300, 1);
//     platform.create();
//     // coin1 = newItem('assets/coin1.png', 75, 75)
//     coin1 = new StaticComponent(20, 20, '', 550, 285, 1, 'assets/coin1.png')
//     coin1.createImg();
//     coin2 = new StaticComponent(20, 20, '', 600, 285, 1, 'assets/coin1.png')
//     coin2.createImg();
//     player = newPlayableCharacter(100, 100);  
// }
