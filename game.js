function newImage(url, height){
 let image = document.createElement('img')
 image.src = src
 image.style.height = height
 document.body.append(image)
 return image
}

function newPlatform(url, positionLeft, positionBottom){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = positionLeft
    image.style.bottom = positionBottom
    document.body.append(image)
    return image
}
let jump = 8
const adventurer = newImage('assets/playerIdle.png', '75px')
const platform = newPlatform('assets/platform.png', '0px', '0px')

function move(element) {
 element.style.position = 'fixed'

 function moveToCoordinates(left, bottom) {
     element.style.left = left + 'px'
     element.style.bottom = bottom + 'px'
 }

 function moveWithArrowKeys(left, bottom, onDirectionChange){
     let direction = null;
     let x = left;
     let y = bottom;
 
     element.style.left = x + 'px'
     element.style.bottom = y + 'px'
     
     function moveCharacter(){ 
         if(direction === 'west'){
             x-=1
         }
         if(direction === 'north' && ){
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
         onDirectionChange(direction)
     })
     
     document.addEventListener('keyup', function(e){
         direction = null
         onDirectionChange(direction)
     })
 }

 return {
     to: moveToCoordinates,
     withArrowKeys: moveWithArrowKeys
 }        
}



function handleDirectionChange(direction){
    if(direction === null){
        adventurer.src = 'assets/playerIdle.png'
    }
    if(direction === 'west'){
        adventurer.src = 'assets/playerRunLeft.png'
    }
    if(direction === 'north'){
        adventurer.src = 'assets/playerJump.png'
    }
    if(direction === 'east'){
        adventurer.src = 'assets/playerRun.png'
    }
    if(direction === 'south'){
        adventurer.src = 'assets/playerRun.png'
    }
}

move(adventurer).withArrowKeys(100, 250, handleDirectionChange)






// document.addEventListener('keydown', function(e){
//     if(e.repeat) return;

//     if(e.key === 'ArrowLeft'){
//         adventurer.move(-2)
//     }
//     if(e.key === 'ArrowUp'){
//         if (key == 'UP' && adventurer.touching(platform)) {
//             jump = -5
//             after(0.2, "seconds", () => {
//               jump = 5
//             })
//           }
//     }
//     if(e.key === 'ArrowRight'){
//         adventurer.move(2)
//     }
//     if(e.key === 'ArrowDown'){
//         direction = 'south'
//     }
//     onDirectionChange(direction)
// })


// onKeyDown(key => {
//     if (key == 'UP' && adventurer.touching(platform)) {
//       jump = -5
//       after(0.2, "seconds", () => {
//         jump = 5
//       })
//     }
//   })
//   forever(() => {
//     // Player movement
//     if (keysDown.includes('RIGHT')) {
//       adventurer.move(2)
//     }
//     if (keysDown.includes('LEFT')) {
//       adventurer.move(-2)
//     }
    
//     // Bring player back to ground
//     if ((jump < 0) || (!(adventurer.touching(platform)))) {
//       adventurer.y -= jump;
//     }
//   })







// const newItem = (imgSrc, height, positionLeft, positionBottom) =>  {
//  let item = newImage(imgSrc, height, positionLeft, positionBottom)
//  item.addEventListener('dblclick', function(){
//   item.remove()
//   })
//   return item
//  }

 



// let coin = newItem('assets/coin1.png', '25px', '200px', '200px')


