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
createPlayer(){
 let ctx = myGameArea.context;
 let element = new Image();
 element.src = this.src
 console.log('Before setonload')

 var drawFunct = function(x,y,w,h){
     console.log('in draw')
     ctx.drawImage(element,x,y,w,h);
 }


     if (element.complete) {
         drawFunct(this.componentX,this.componentY,this.width,this.height);
     } 
     else {
     element.onload = drawFunct(this.componentX,this.componentY,this.width,this.height);
     }
 function handleDirectionChange(direction) {
     if (direction === null) {
         element.src = `assets/playerIdle.png`
     }
     if (direction === 'west') {
         element.src = `assets/playerRunLeft.png`
     }
     if (direction === 'north') {
         element.src = `assets/playerJump.png`
     }
         if (direction === 'east') {
         element.src = `assets/playerRun.png`
     }
     if (direction === 'south') {
         element.src = `assets/playerFall.png`
     }
 } 
     move(element).withArrowKeys(x, y, handleDirectionChange)
     return {
         element: element
     }
     function move(element) {
         element.style.position = 'fixed'
        
         function moveToCoordinates(left, bottom) {
             element.style.left = left + 'px'
             element.style.bottom = bottom + 'px'
         }
        
         function moveWithArrowKeys(left, bottom, callback){
             let direction = null;
             let x = left;
             let y = bottom;
        
             element.style.left = x + 'px'
             element.style.bottom = y + 'px'
             
             function moveCharacter(){ 
                 if(direction === 'west'){
                     x-=1
                 }
                 if(direction === 'north'){
                     y+=1 
                 }
                 if(direction === 'east'){
                     x+=1
                 }
                 if(direction === 'south'){
                     y-=1
                 }
                 element.style.left = x + 'px'
                 element.style.bottom = y + 'px'
             }
             
             setInterval(moveCharacter, 1)
             
             document.addEventListener('keydown', function(e){
                 if(e.repeat) return;
             
                 if(e.key === 'ArrowLeft'){
                     direction = 'west'
                 }
                 if(e.key === 'ArrowUp'){
                     direction = 'north'
                 }
                 if(e.key === 'ArrowRight'){
                     direction = 'east'
                 }
                 if(e.key === 'ArrowDown'){
                     direction = 'south'
                 }
                 callback(direction)
             })
             
             document.addEventListener('keyup', function(e){
                 direction = null
                 callback(direction)
             })
         }
        
         return {
             to: moveToCoordinates,
             withArrowKeys: moveWithArrowKeys
         }
     }
 }
}