window.addEventListener('DOMContentLoaded', () => {



const rock = document.querySelector('.rock')  
const paper = document.querySelector('.paper')  
const scissors = document.querySelector('.scissors')  
const reset = document.querySelector('#go')

const iconCover = document.querySelector('.icons-wrapper')
const messageBoard = document.querySelector('.messages')

const playerBox = document.querySelector('.playerBox')
const cpuBox = document.querySelector('.cpuBox')
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.cpuScore')







  rock.addEventListener('click', (e) => {
    icon = e.target.cloneNode(true)
    playerBox.append(icon)
    userChoice = 'rock'
    iconCover.style.pointerEvents = 'none'
    setTimeout(gameLogic,1000)
  })
  paper.addEventListener('click', (e) => {
    icon = e.target.cloneNode(true)
    playerBox.append(icon)
    userChoice = 'paper'
    iconCover.style.pointerEvents = 'none'
    setTimeout(gameLogic,1000)

  })
  scissors.addEventListener('click', (e) => {
    icon = e.target.cloneNode(true)
    playerBox.append(icon)
    userChoice = 'scissors'
    iconCover.style.pointerEvents = 'none'
    setTimeout(gameLogic,1000)
  })



function resetGame(){
  playerBox.removeChild(playerBox.childNodes[0])
  cpuBox.removeChild(cpuBox.childNodes[0])
  iconCover.style.pointerEvents = 'auto'
  messageBoard.innerHTML = ''
}



reset.addEventListener('click', resetGame)


let userScore = 0
let cpuScore = 0
let userChoice = ''
let cpuChoice = ''
const choices = ['paper', 'scissors', 'rock']


playerScore.innerHTML = userScore
computerScore.innerHTML = cpuScore

function getCpuChoice() {
  const random =  Math.floor(Math.random() * Math.floor(3))
  cpuChoice = choices[random]
  if (cpuChoice === 'scissors') {
    icon = scissors.cloneNode(true)
    cpuBox.append(icon)
  } else if (cpuChoice === 'rock') {
    icon = rock.cloneNode(true)
    cpuBox.append(icon)
  } else {
    icon = paper.cloneNode(true)
    cpuBox.append(icon)
  }
  
}

function gameLogic(){
  getCpuChoice()
  if (userChoice === cpuChoice) {
    messageBoard.innerHTML = 'It\'s a tie'
  } else {
    if (userChoice === 'scissors' && cpuChoice === 'paper') {
      messageBoard.innerHTML = 'You win!'
      userScore++
    } else if (userChoice === 'paper' && cpuChoice === 'rock') {
      messageBoard.innerHTML = 'You win!'
      userScore++
    } else if (userChoice === 'rock' && cpuChoice === 'scissors') {
      messageBoard.innerHTML = 'You win!'

      userScore++
  } else {
    messageBoard.innerHTML = 'You lose!'
    cpuScore++
    }
  }
  playerScore.innerHTML = userScore
  computerScore.innerHTML = cpuScore
  console.log(playerScore, 'player score' )
  console.log(computerScore, 'cpu score' )
}






//_________________________________________________________________________________________________
})

