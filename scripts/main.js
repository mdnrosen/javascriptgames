$(() => {

  // VARIABLES TO MANIPULATE FOR CLICKEVENT
  const $textBox = $('.textbox')
  const startButton = document.querySelector('.start')
  const mainGame = document.querySelector('.maingame')
  const $bang = $('.bang')
  const $splash = $('.splash')
  // MAKE THE START BUTTON DISAPPEAR AND STUFF
  startButton.addEventListener('click', () => {
    startButton.style.display = 'none'
    mainGame.style.display = ('bounce', 'flex')
    $textBox.text('Pick your ship, choose the direction and place it. Then Place CPU Fleet, and away we go!')
  })

  const mapSize = new Array(100)
  const radarSize = new Array(100)
  // const playerMap = []
  // const cpuMap = []
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
      // playerMap.push(grid)
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
      // cpuMap.push(radarGrid)
    }
  }
  makeRadar()

  // ------------------------------SHIP CREATION-------------------------------------------------
  class Ship {
    constructor(shipType,hitPoints, shipLength, shipSunk, crew) {
      this.shipType = shipType,
      this.hitPoints = hitPoints,
      this.shipLength = shipLength,
      this.shipSunk = shipSunk
      this.crew = crew
    }
    haShip() {
      return Math.floor((Math.random() * 100)) % (10 - this.shipLength)
    }
    vaShip() {
      return Math.floor((Math.random() * (100 - (this.shipLength * 10))))
    }
    horizVert () {
      return Math.floor((Math.random() * 2))
    }
  }
  const carrier = new Ship('carrier',5,5,false, 6324)
  const battleship = new Ship('battleship',4,4,false, 862)
  const cruiser = new Ship('cruiser',3,3,false, 377)
  const submarine = new Ship('submarine',3,3,false, 134)
  const destroyer = new Ship('destroyer',2,2,false, 61)

  const myCarrier = new Ship('carrier',5,5,false, 5823)
  const myBattleship = new Ship('battleship',4,4,false, 921)
  const myCruiser = new Ship('cruiser',3,3,false, 354)
  const mySubmarine = new Ship('submarine',3,3,false, 122)
  const myDestroyer = new Ship('destroyer',2,2,false, 68)

  function checkForWinner() {
    if (carrier.shipSunk === true && battleship.shipSunk === true && cruiser.shipSunk === true && submarine.shipSunk === true && destroyer.shipSunk === true) {
      mainGame.style.display = 'none'
      startButton.style.display = 'block'
      startButton.style.background = 'rgba(0, 0, 0, 0.5)'
      startButton.innerHTML = 'The sea is full of the bodies of your foes, what a win!'
    } else if (myCarrier.shipSunk === true && myBattleship.shipSunk === true && myCruiser.shipSunk === true && mySubmarine.shipSunk === true && myDestroyer.shipSunk === true) {
      mainGame.style.display = 'none'
      startButton.style.display = 'block'
      startButton.style.background = 'rgba(0, 0, 0, 0.5)'
      startButton.style.textDecoration = 'none'
      startButton.innerHTML = 'Mission failed. You can choose to go down with your ship, or take the easy way out.'
    }
  }




  //------------------------------------------------------------------------------------------------

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$ - CPU SHIP PLACEMENT - $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


  // function placeShip(shipType) {
  //   if (shipType.horizVert() === 1) {
  //     let vaPoint = shipType.vaShip()
  //     radarSize[vaPoint] = shipType
  //     $radarItems.eq(vaPoint).addClass('enemyShip')
  //     for (let i = 1; i < shipType.shipLength; i++) {
  //       vaPoint += 10
  //       radarSize[vaPoint] = shipType
  //       $radarItems.eq(vaPoint).addClass('enemyShip')
  //     }
  //   } else if (shipType.haShip() < shipType.shipLength) {
  //     let haPoint = shipType.haShip()
  //     radarSize[haPoint] = shipType
  //     $radarItems.eq(haPoint).addClass('enemyShip')
  //     for (let i = 0; i < shipType.shipLength; i++) {
  //       haPoint ++
  //       radarSize[haPoint] = shipType
  //       $radarItems.eq(haPoint).addClass('enemyShip')
  //     }
  //     // if ((radarSize[haPoint]).classList.contains('enemyShip')) placeShip(shipType)
  //     // radarSize[haPoint] = shipType
  //   } else {
  //     // return placeShip(shipType)
  //     //stop occupied squares being used
  //   }
  // }

  function checkSpaceVert(point, shipLength) {
    let check
    for(let i = 0; i < shipLength; i++) {
      if (!occupiedRadar.includes(point + (i +10))) {
        check = true
      } else {
        return false
      }
    } if(check) return true
  }

  function checkSpaceHoriz(point, shipLength) {
    let check
    for(let i = 0; i < shipLength; i++) {
      if (!occupiedRadar.includes(point + i)) {
        check = true
      } else {
        return false
      }
    } if(check) return true
  }

  function placeShip(shipType) {
    if (shipType.horizVert() === 1) {
      let vaPoint = shipType.vaShip()
      radarSize[vaPoint] = shipType
      if (checkSpaceVert(vaPoint,shipType.shipLength)) {
        for (let i = 1; i < shipType.shipLength; i++) {
          vaPoint += 10
          radarSize[vaPoint] = shipType
          occupiedRadar.push(vaPoint)
        }
      } else {
        placeShip(shipType)
      }
    } else if (shipType.haShip() < shipType.shipLength) {
      let haPoint = shipType.haShip()
      radarSize[haPoint] = shipType
      if (checkSpaceHoriz(haPoint, shipType.shipLength)) {
        for (let i = 1; i < shipType.shipLength; i++) {
          haPoint ++
          radarSize[haPoint] = shipType
          occupiedRadar.push(haPoint)
        }
      } else {
        placeShip(shipType)
      }

      console.log(occupiedRadar)
      console.log(radarSize)
    } else {
      placeShip(shipType)
    }
  }


  const cpuPlaceShips = document.querySelector('.cpuPlaceShips')
  cpuPlaceShips.addEventListener('click', () => {
    placeShip(carrier)
    placeShip(battleship)
    placeShip(cruiser)
    placeShip(submarine)
    placeShip(destroyer)
    showShips()
    cpuPlaceShips.style.visibility = 'hidden'
  })
  //=========MAKING CPU SHIPS SHOW ON RADAR=========================
  function showShips(){
    const $radarItems = $('.radar-item')
    for (let i = 0; i < radarSize.length; i++) {
      if (radarSize[i] === carrier) {
        $radarItems.eq(i).addClass('carrier enemyShip')
      } else if (radarSize[i] === battleship) {
        $radarItems.eq(i).addClass('battleship enemyShip')
      } else if (radarSize[i] === cruiser) {
        $radarItems.eq(i).addClass('cruiser enemyShip')
      } else if (radarSize[i] === submarine) {
        $radarItems.eq(i).addClass('submarine enemyShip')
      } else if (radarSize[i] === destroyer) {
        $radarItems.eq(i).addClass('destroyer enemyShip')
      }
    }
  }
  //====================================================================

  //************************************PLAYER SHIPS PLACEMENT*****************************************

  const $playerCarrier = $('.carrier')
  const $playerBattleShip = $('.battleship')
  const $playerCruiser = $('.cruiser')
  const $playerSubmarine = $('.submarine')
  const $playerDestroyer = $('.destroyer')

  const vert = document.querySelector('.vertical')
  const horiz = document.querySelector('.horizontal')
  let horizclick = false
  let vertclick = false

  vert.addEventListener('click', () => {
    vert.style.border = '3px solid white'
    horiz.style.border = '1px solid white'
    horizclick = false
    vertclick = true
  })
  horiz.addEventListener('click', () => {
    horiz.style.border = '3px solid white'
    vert.style.border = '1px solid white'
    horizclick = true
    vertclick = false
  })

  let currentShip

  $playerCarrier.one('click', () => {
    currentShip = myCarrier
    console.log(currentShip)
  })
  $playerBattleShip.on('click', () => {
    currentShip = myBattleship
    console.log(currentShip)
  })
  $playerCruiser.on('click', () => {
    currentShip = myCruiser
    console.log(currentShip)
  })
  $playerSubmarine.on('click', () => {
    currentShip = mySubmarine
    console.log(currentShip)
  })
  $playerDestroyer.on('click', () => {
    currentShip = myDestroyer
    console.log(currentShip)
  })

  const $mapItems = $('.grid-item')
  $mapItems.on('click',(e) => {
    if(currentShip.isPlaced) return
    const myAnchor = parseInt(e.target.dataset.id)
    if (horizclick === true && vertclick === false) {
      for (let i = 0; i < currentShip.shipLength; i++) {
        console.log(currentShip)
        mapSize[myAnchor + i] = currentShip
        currentShip.isPlaced = true
        console.log(mapSize)
      }
    } else if (vertclick === true && horizclick === false) {
      for (let i = 0; i < currentShip.shipLength; i++) {
        mapSize[myAnchor + (i * 10)] = currentShip
        currentShip.isPlaced = true
        console.log(mapSize)
      }
    } else {
      console.log('something broken')
    }
    for (let i = 0; i < mapSize.length; i++) {
      if (mapSize[i] === myCarrier) {
        $mapItems.eq(i).addClass('carrier')
        $playerCarrier.css('visibility', 'hidden')
      } else if (mapSize[i] === myBattleship) {
        $mapItems.eq(i).addClass('battleship')
        $playerBattleShip.css('visibility', 'hidden')
      } else if (mapSize[i] === myCruiser) {
        $mapItems.eq(i).addClass('cruiser')
        $playerCruiser.css('visibility', 'hidden')
      } else if (mapSize[i] === mySubmarine) {
        $mapItems.eq(i).addClass('submarine')
        $playerSubmarine.css('visibility', 'hidden')
      } else if (mapSize[i] === myDestroyer) {
        $mapItems.eq(i).addClass('destroyer')
        $playerDestroyer.css('visibility', 'hidden')
      } else {
        // $mapItems.off('click')
      }
    }
  })



  //###################################### - CPU SHOOTING - ########################################
  const cpuFire = document.querySelector('.cpufire')


  cpuFire.addEventListener('click', () => {
    enemyShoots()
    checkForWinner()
  })
  function enemyShoots() {
    const $mapItems = $('.grid-item')
    const targetMap = Math.floor((Math.random() * 100))
    console.log(targetMap)
    if (mapSize[targetMap]) {
      mapSize[targetMap].hitPoints--
      $bang[0].play()
      $mapItems.eq(targetMap).addClass('hit')
      if (mapSize[targetMap].hitPoints === 0) {
        mapSize[targetMap].shipSunk = true
        $textBox.text(`The enemy destroyed your ${radarSize[targetMap].shipType}, ending the lives of ${radarSize[targetMap].crew} of your sailors.`)
        checkForWinner()
      }
    } else {
      $mapItems.eq(targetMap).addClass('miss')
      $splash[0].play()
      $textBox.text('Your turn to fire Captain!')
    }
    console.log(mapSize)
  }

  const $radarItems = $('.radar-item')

  $radarItems.on('click',(e) => {
    playerShoots()
    checkForWinner()
    function playerShoots() {
      const targetedSq = parseInt(e.target.dataset.id)
      if (radarSize[targetedSq]) {
        radarSize[targetedSq].hitPoints--
        $bang[0].play()
        $radarItems.eq(targetedSq).addClass('hit')
        if (radarSize[targetedSq].hitPoints === 0) {
          radarSize[targetedSq].shipSunk = true
          checkForWinner()
          $textBox.text(`You sunk the enemy ${radarSize[targetedSq].shipType}. A crew of  ${radarSize[targetedSq].crew} was on board. There were no survivors.`)
        }
      } else {
        $radarItems.eq(targetedSq).addClass('miss')
        console.log('MISSED!')
        $splash[0].play()
        $textBox.text('The enemy is attacking.')
      }
      console.log(radarSize)
    }
  })

  // const huntShot = function () {
  //   return (previousShot + 1 || -1 || + 10 || -10)
  // }





  //########################################################################################

  // *************************DO NOT WRITE BELOW THIS LINE****************************************
})
