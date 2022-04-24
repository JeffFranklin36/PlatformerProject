function renderGame(){
 myGameArea.start();
 worldElements.forEach(element => {
     createdElement = new Component(element.width, element.height, element.color, element.x, element.y, element.z, element.src)
     createdElement.create();
 });
 objectives.forEach(element => {
    createdElement = new Component(element.width, element.height, element.color, element.x, element.y, element.z, element.src)
    createdElement.createImg();
 })
 renderPlayer()

//  let playerCharacter = new Player(40, 60, 'black', 10, 350, 1)
//  playerCharacter.renderplayer()
//  let player = new Component(100, 100, '', -10, 310, 1, '/assets/playerIdle.png')
//  player.createPlayer();
}



let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1485;
        this.canvas.height = 500;
        // this.context.clearRect(0,0, 1485, 500)
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
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
