let ballElement = document.getElementById('ball');
let playerElement = document.getElementById('player')
let computerElement = document.getElementById('computer')

let ballPosition = {x:400, y:400, dx:3,dy:5}
let playerPosition = {x:0, y:0}


//// eventlistener for player paddle

document.addEventListener('keydown', (e)=>{
  console.log('keydown', e.key)
  if(e.key =='ArrowUp'){
    playerPosition.y-=10;
  }
  if(e.key == 'ArrowDown'){
    playerPosition.y+=10;
  }
  playerElement.style.top = playerPosition.y + 'px'

})

let intervalID;
let count = 0;



const frame = () => {
  count++
  if(count === 9999){
    clearInterval(intervalID)
  }

ballPosition.x += ballPosition.dx
ballPosition.y += ballPosition.dy
if ( ballPosition.x > 770 || ballPosition.x <= 0){
  ballPosition.dx = ballPosition.dx * -1
}
if ( ballPosition.y > 775 || ballPosition.y <= 0 ){
  ballPosition.dy = ballPosition.dy * -1
}
ballElement.style.top = ballPosition.y + 'px'

ballElement.style.right = ballPosition.x + 'px'
}

intervalID= setInterval(frame, 10)
