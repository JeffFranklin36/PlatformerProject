console.log('attached')

function newPlayableCharacter(x, y) {
 const element = newImage('assets/playerIdle.png', 100, 100)
 element.style.zIndex = 1;

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
}