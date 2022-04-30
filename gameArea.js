// renders game and repaints when character moves
function renderGame(){
 myGameArea.start();
 worldElements.forEach(element => {
     createdElement = new Component(element.type, element.width, element.height, element.color, element.x, element.y, element.z, element.src)
     createdElement.create();
 });
 objectives.forEach(element => {
    if(element.type === 'coin'){
        createdElement = new Component(element.type, element.width, element.height, element.color, element.x, element.y, element.z, element.src)
        createdElement.createImg();
    }
 })
 renderPlayer()
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
// when 6 coins are collected alerts player that they won and allows them to play again
function winGame(){
    if(coinCount === 6){
        window.alert('You Won!')
        location.reload();
    }
}