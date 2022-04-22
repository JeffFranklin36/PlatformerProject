let ground;
let grass;
let sky;
let sun;
let player;
let platform;
let coin1;
let coin2;


// let worldElements = [

// ]

function startGame() {
    myGameArea.start();
    ground = new StaticComponent(1485, 75, "brown", 0, 425, 0);
    ground.create();
    grass = new StaticComponent(1485, 25, "green", 0, 400, 0);
    grass.create();
    sky = new StaticComponent(1485, 400, "skyblue", 0, 0, 0);
    sky.create();
    sun = new StaticComponent(80, 80, "lightyellow", 80, 50, 1);
    sun.create();
    platform = new StaticComponent(160, 30, "slategray", 500 , 300, 1);
    platform.create();
    coin1 = newItem('assets/coin1.png', 75, 75)
    player = newPlayableCharacter(100, 100);
    
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
    constructor(width, height, color, x, y, z){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.z = z;
    this.color = color;
    }

 create(){
    let ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
