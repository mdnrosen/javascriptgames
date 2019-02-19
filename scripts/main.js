$(() => {

  // VARIABLES TO MANIPULATE FOR CLICKEVENT
  const textBox = document.querySelector('.textbox')
  const startButton = document.querySelector('.start')
  const mainGame = document.querySelector('.maingame')

  // MAKE THE START BUTTON DISAPPEAR AND STUFF
  startButton.addEventListener('click', () => {
    startButton.style.display = 'none'
    mainGame.style.display = 'flex'
    textBox.innerHTML = 'Welcome to BATTLESHIPS'
  })

  const mapSize = new Array(100)
  const radarSize = new Array(100)
  const playerMap = []
  const cpuMap = []
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
      grid.setAttribute('data-id',i)
      map.appendChild(grid)
      playerMap.push(grid)
    }
  }
  makeMap()
  const radar = document.querySelector('.radar')
  function makeRadar() {
    for (let i = 0; i < radarSize.length ; i++) {
      const radarGrid = document.createElement('div')
      radarGrid.setAttribute('class','radar-item')
      radarGrid.setAttribute('data-id', i)
      radar.appendChild(radarGrid)
      cpuMap.push(radarGrid)
    }
  }
  makeRadar()

  // ------------------------------SHIP CREATION-------------------------------------------------
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

  const myCarrier = new Ship('carrier',5,5,false)
  const myBattleship = new Ship('battleship',4,4,false)
  const myCruiser = new Ship('cruiser',3,3,false)
  const mySubmarine = new Ship('submarine',3,3,false)
  const myDestroyer = new Ship('destroyer',2,2,false)


  //------------------------------------------------------------------------------------------------

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$ - CPU SHIP PLACEMENT - $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

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

  const cpuPlaceShips = document.querySelector('.cpuPlaceShips')
  cpuPlaceShips.addEventListener('click', () => {
    placeShip(carrier)
    placeShip(battleship)
    placeShip(cruiser)
    placeShip(submarine)
    placeShip(destroyer)
    cpuPlaceShips.style.visibility = 'hidden'
    //=========MAKING CPU SHIPS SHOW ON RADAR=========================
    const $radarItems = $('.radar-item')
    for (let i = 0; i < radarSize.length; i++) {
      if (radarSize[i] === carrier) {
        $radarItems.eq(i).addClass('carrier')
      } else if (radarSize[i] === battleship) {
        $radarItems.eq(i).addClass('battleship')
      } else if (radarSize[i] === cruiser) {
        $radarItems.eq(i).addClass('cruiser')
      } else if (radarSize[i] === submarine) {
        $radarItems.eq(i).addClass('submarine')
      } else if (radarSize[i] === destroyer) {
        $radarItems.eq(i).addClass('destroyer')
      }
      //====================================================================
      console.log(radarSize)
      console.log(occupiedRadar)
    }
  })
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //************************************PLAYER SHIPS PLACEMENT*****************************************
  const userCarrier = document.querySelector('.carrier')
  const userBattleship = document.querySelector('.battleship')
  const userCruiser = document.querySelector('.cruiser')
  const userSubmarine = document.querySelector('.submarine')
  const userDestroyer = document.querySelector('.destroyer')


  // function placeMyShip(shipType) {
  //   let myAnchor = point where clicked
  //   if (user choses vertical) {
  //     for (let i = 1; i < shipType.shipLength; i++) {
  //       myAnchor += 10
  //       mapSize[myAnchor] = shipType
  //       change background of each square to denote ship position
  //   } else if (user choses horizontal) {
  //     for (let i = 0; i < shipType.shipLength; i++) {
  //       myAnchor ++
  //       mapSize[myAnchor] = shipType
  //       change background of each square to denote ship position
  //   }
  // }
  //
  // placeMyShip(myCarrier)
  // placeMyShip(myBattleship)
  // placeMyShip(myCruiser)
  // placeMyShip(mySubmarine)
  // placeMyShip(myDestroyer)

  playerMap.forEach(square => square.addEventListener('click', (e) => {
    const myAnchor = e.target
    placeMyShip(myCarrier)
  }))

  // ************************************************************************************************

  //############################################ - SHOOTING - ############################################
  // const cpuFire = document.querySelector('.cpufire')
  // cpuFire.addEventListener('click', () => {
  //   const mapTarget = Math.floor((Math.random() * 100))
  //   mapSize[mapTarget].style.background = 'red'
  //
  //   console.log('fire captain!')
  // }






  //   cpuMap.forEach(square => square.addEventListener('click', (e) => {
  //   console.log(e.target.dataset.id)
  //   if (e.target === class('')) {
  //     e.target.style.background = 'red'
  //   } else {
  //     e.target.style.background = 'white'
  //   }
  // }))



  // const randomShot = function() {
  //   return Math.floor((Math.random() * 100))
  // }
  // const huntShot = function () {
  //   return (previousShot + 1 || -1 || + 10 || -10)
  // }





  //########################################################################################

  // **************************************DO NOT WRITE BELOW THIS LINE*********************************************************
})
