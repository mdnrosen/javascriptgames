window.addEventListener('DOMContentLoaded', () => {


const cards = [
    {
        character: 'bart',
        image: 'assets/bart.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'homer',
        image: 'assets/homer.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'homer',
        image: 'assets/homer.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'barney',
        image: 'assets/barney.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'barney',
        image: 'assets/barney.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'bart',
        image: 'assets/bart.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'quimby',
        image: 'assets/quimby.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'quimby',
        image: 'assets/quimby.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'skinner',
        image: 'assets/skinner.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'skinner',
        image: 'assets/skinner.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'moe',
        image: 'assets/moe.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'moe',
        image: 'assets/moe.jpg',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'willie',
        image: 'assets/willie.png',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'willie',
        image: 'assets/willie.png',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'ned',
        image: 'assets/ned.png',
        back: 'assets/cardback.jpg'
    },
    {
        character: 'ned',
        image: 'assets/ned.png',
        back: 'assets/cardback.jpg'
    }
]
let flippedCards = []

let correctCards = []
const gameContainer = document.querySelector('.game-container')
const playAgain = document.querySelector('.win-message')

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

function createBoard(){
    shuffle(cards)
    for (let i = 0; i < cards.length; i++) {
        const cardBack = document.createElement('img')
        cardBack.setAttribute('src','assets/cardback.jpg')
        cardBack.setAttribute('class', 'game-card')
        cardBack.setAttribute('data-id', i)
        cardBack.addEventListener('click', flipCard)
        gameContainer.appendChild(cardBack)
    }
}

function flipCard(){
    let cardId = parseInt(this.getAttribute('data-id'),10);
    this.src = cards[cardId].image
    this.name = cards[cardId].character
    flippedCards.push(this)
    checkMatch()
}

function flipBack(){
    flippedCards[0].src = 'assets/cardback.jpg'
    flippedCards[1].src = 'assets/cardback.jpg'
    flippedCards = []
}



function checkMatch() {
    if (flippedCards.length === 2) {
        if (flippedCards[0].name == flippedCards[1].name) {
            flippedCards[0].style.opacity = "0"
            flippedCards[0].style.zIndex = "-1"
            correctCards.push(flippedCards[0])
            flippedCards[1].style.opacity = "0"
            flippedCards[1].style.zIndex = "-1"
            correctCards.push(flippedCards[0])
            flippedCards = []
            checkForWin()
        } else {
            setTimeout(flipBack, 750)
        }
    }
} 

function checkForWin() {
    if (correctCards.length === 16 ) {
        gameContainer.innerHTML = "You win!!!"
        gameContainer.append(button)
    } else {
        return
    }
}

const start = document.querySelector('.startButton')

start.addEventListener('click', startGame)

function startGame(){
    gameContainer.style.display = "flex"
    start.style.display = "none"
    createBoard()
}





//DO NOT WRITE BELOW THIS LINE DO NOT WRITE BELOW THIS LINE DO NOT WRITE BELOW THIS LINE DO NOT WRITE BELOW THIS LINE 
})