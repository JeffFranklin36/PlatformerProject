function newImage(url, width, height){
 let image = document.createElement('img')
 image.src = url
 image.style.position = 'absolute' //? no position prevents scroll stuff
 image.style.width = width
 image.style.height = height
 document.body.append(image)
 return image
}

function newItem(url, width, height){
 let item = newImage(url, width, height)
 item.addEventListener('click', () => {
     item.remove()
     let inventoryItem = document.createElement('img')
     inventoryItem.src = url;
     inventory.append(inventoryItem)
 })
 return item
}