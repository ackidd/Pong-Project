let ballElement = document.getElementById('ball');
let playerElement = document.getElementById('player')
let computerElement = document.getElementById('computer')

let ballPosition = {x:400, y:400}
let playerPosition = {x:0, y:0}


//// eventlistener for player paddle

document.addEventListener('keydown', (e)=>{
  console.log('keydown', e.key)
  if(e.key =='ArrowUp'){
    playerPosition.y -= 1;
  }
  if(e.key == 'ArrowDown'){
    playerPosition.y += 1;
  }
  playerElement.style.top = playerPosition.y + 'px'

})
// let intervalID;
// let count = 0;



// const frame = () => {
//   count++

// }
