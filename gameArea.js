// renders game and repaints when character moves
function renderGame(){
 myGameArea.start();
 worldElements.forEach(element => {
     if(element.type != 'collectedCoin'){
        createdElement = new Component(element.type,element.width, element.height, element.color, element.x, element.y, element.z, element.src)
        if (element.src === '') {
            createdElement.create();
        }
        else {
            createdElement.createImg();
        }
     }
});
 renderPlayerImg()
}

//On load alerts user to game objectives and obstacles
function instructionsAlert (){
    alert("Collect all coins to win, avoid the lava pit at all costs! Press OK to begin");
    }
window.onload= instructionsAlert (); 



// properties of the game area canvas
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

// when a failed game result is met this function runs
let gameOver = false;
function endGame(){
    gameOver = true
    player.width = 60
    player.height = 40 
    player.color = 'red'
    player.y = 410
    setTimeout(() => {
        window.alert("You have died, press OK to begin a new attempt");
        location.reload();
      }, "200")
}
// when a game success result is met this function runs
function winGame(){
    if(coinCount === 6){
        window.alert('You Won! Press OK to play again')
        location.reload();
    }
}