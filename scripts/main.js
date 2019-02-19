$(() => {
  // VARIABLES TO MANIPULATE FOR CLICKEVENT
  const textBox = document.querySelector('.textbox')
  const startButton = document.querySelector('.start')
  const mainGame = document.querySelector('.maingame')
  const mapSize = new Array(100)
  const radarSize = new Array(100)
  const usedMap = []
  const usedRadar = []
  const occupiedMap = []
  const occupiedRadar = []

  //MAKE MY MAP AND RADAR
  const map = document.querySelector('.map')
  function makeMap() {
    for (let i = 0; i < mapSize.length ; i++) {
      const grid = document.createElement('div')
      grid.setAttribute('class','grid-item')
      map.appendChild(grid)
    }
  }
  makeMap()
  const radar = document.querySelector('.radar')
  function makeRadar() {
    for (let i = 0; i < radarSize.length ; i++) {
      const radarGrid = document.createElement('div')
      radarGrid.setAttribute('class','radar-item')
      radar.appendChild(radarGrid)
    }
  }
  makeRadar()






  // MAKE THE START BUTTON DISAPPEAR AND STUFF
  startButton.addEventListener('click', () => {
    startButton.style.display = 'none'
    mainGame.style.display = 'flex'
    textBox.innerHTML = 'Hello'

  })


  // SHIP CREATION

  class Ship {
    constructor(shipType,hitPoints, shipLength, shipSunk) {
      this.shipType = shipType,
      this.hitPoints = hitPoints,
      this.shipLength = shipLength,
      this.shipSunk = shipSunk
    }
    haShip() {
      return Math.floor((Math.random() * 100)) % 10
    }

    vaShip() {
      return Math.floor((Math.random() * (100 - (this.shipLength * 10) + 10)))
    }

    horizVert () {
      return Math.floor((Math.random() * 2))
    }
  }


  const carrier = new Ship('carrier',5,5,false)
  const battleship = new Ship('battleship',4,4,false)
  const cruiser = new Ship('cruiser',3,3,false)
  const submarine = new Ship('submarine',3,3,false)
  const destroyer = new Ship('destroyer',2,2,false)



  //
  //
  //
  //
  //

  // RANDOM NUMBER GENERATORS & LOGIC

  // function haCarrier() {
  // const haCarrier = Math.floor((Math.random() * 100)) % 10
  // const haBattleship = Math.floor((Math.random() * 100)) % 10
  // const haCruiser = Math.floor((Math.random() * 100)) % 10
  // const haSubmarine = Math.floor((Math.random() * 100)) % 10
  // const haDestroyer = Math.floor((Math.random() * 100)) % 10

  // const haBattleship
  // const haCruiser
  // const haSubmarine
  // const haDestroyer

  // const vaCarrier = Math.floor((Math.random() * 60))
  // const vaBattleShip = Math.floor((Math.random() * 70))
  // const vaCruiser = Math.floor((Math.random() * 80))
  // const vaSubmarine = Math.floor((Math.random() * 80))
  // const vaDestroyer = Math.floor((Math.random() * 90))

  // *********************************************************
  function placeShip(shipType) {
    if (shipType.horizVert() === 1) {
      let vaPoint = shipType.vaShip()
      radarSize[vaPoint] = shipType
      for (let i = 1; i < shipType.shipLength; i++) {
        vaPoint += 10
        radarSize[vaPoint] = shipType
      } occupiedRadar.push(shipType)
    } else if (shipType.haShip() > shipType.shipLength) {
      let haPoint = shipType.haShip()
      for (let i = 0; i < shipType.shipLength; i++) {
        haPoint ++
        radarSize[haPoint] = shipType
      } occupiedRadar.push(shipType)
    } else {
      placeShip(shipType)
      //stop occupied squares being used
    }

  }
  placeShip(carrier)
  placeShip(battleship)
  placeShip(cruiser)
  placeShip(submarine)
  placeShip(destroyer)

  console.log(radarSize)
  
  // *****************************************************************



  // PLACE CPU SHIPS
  // function placeCarrier() {
  //   if (horizVert() === 1) {
  //     radarSize[vaCarrier] = carrier
  //     for (let i = 0; i < carrier.shipLength; i++) {
  //       radarSize[vaCarrier + (i * 10)] = carrier
  //     } occupiedRadar.push(carrier)
  //   } else if (haCarrier > carrier.shipLength) {
  //     for (let i = 0; i < carrier.shipLength; i++) {
  //       radarSize[haCarrier + (i + 1)] = carrier
  //     } occupiedRadar.push(carrier)
  //   } else {
  //     placeCarrier()
  //     //stop occupied squares being used
  //   }
  // }
  // function placeBattleship() {
  //   if (horizVert() === 1) {
  //     radarSize[vaBattleShip] = battleship
  //     for (let i = 0; i < battleship.shipLength; i++) {
  //       radarSize[vaBattleShip + (i * 10)] = battleship
  //     } // stop occupied squares being used
  //   } else if (haBattleship > battleship.shipLength) {
  //     for (let i = 0; i < battleship.shipLength; i++) {
  //       radarSize[haBattleship + (i + 1)] = battleship
  //     }
  //   } else {
  //     placeBattleship()
  //     //stop occupied squares being used
  //   }
  // }
  // function placeCruiser() {
  //   if (horizVert() === 1) {
  //     radarSize[vaCruiser] = cruiser
  //     for (let i = 0; i < cruiser.shipLength; i++) {
  //       radarSize[vaCruiser + (i * 10)] = cruiser
  //     } // stop occupied squares being used
  //   } else if (haCruiser > cruiser.shipLength) {
  //     for (let i = 0; i < cruiser.shipLength; i++) {
  //       radarSize[haCruiser + (i + 1)] = cruiser
  //     }
  //   } else {
  //     placeCruiser()
  //     //stop occupied squares being used
  //   }
  // }
  // function placeSubmarine() {
  //   if (horizVert() === 1) {
  //     radarSize[vaSubmarine] = submarine
  //     for (let i = 0; i < submarine.shipLength; i++) {
  //       radarSize[vaSubmarine + (i * 10)] = submarine
  //     }
  //   } else if (haSubmarine > submarine.shipLength) {
  //     for (let i = 0; i < submarine.shipLength; i++) {
  //       radarSize[haSubmarine + (i + 1)] = submarine
  //     }
  //   } else {
  //     placeSubmarine()
  //     //stop occupied squares being used
  //   }
  // }
  // function placeDestroyer() {
  //   if (horizVert() === 1) {
  //     radarSize[vaDestroyer] = destroyer
  //     for (let i = 0; i < destroyer.shipLength; i++) {
  //       radarSize[vaDestroyer + (i * 10)] = destroyer
  //     }
  //   } else if (haDestroyer > destroyer.shipLength) {
  //     for (let i = 0; i < destroyer.shipLength; i++) {
  //       radarSize[haDestroyer + (i + 1)] = destroyer
  //     }
  //   } else {
  //     placeDestroyer()
  //     //stop occupied squares being used
  //   }
  // }
  //
  //
  //
  //
  //
  // // placeBattleship()
  // // placeCarrier()
  // // placeCruiser()
  // // placeSubmarine()
  // // placeDestroyer()
  //
  // console.log(radarSize)
  // console.log(occupiedRadar)
  //






  // **************************************DO NOT WRITE BELOW THIS LINE*********************************************************
})
