$(() => {

  const map = document.querySelector('.map')
  function makeMap() {
    const mapSize = new Array(100)
    for (let i = 0; i < mapSize.length ; i++) {
      const grid = document.createElement('div')
      grid.setAttribute('class','grid-item')
      map.appendChild(grid)
    }
  }
  makeMap()

  const radar = document.querySelector('.radar')
  function makeRadar() {
    const radarSize = new Array(100)
    for (let i = 0; i < radarSize.length ; i++) {
      const radarGrid = document.createElement('div')
      radarGrid.setAttribute('class','radar-item')
      radar.appendChild(radarGrid)
    }
  }
  makeRadar()


  // ALL MY VARIABLES
  const textBox = document.querySelector('.textbox')
  const startButton = document.querySelector('.start')
  const mainGame = document.querySelector('.maingame')



  //MAKE THE START BUTTON DISAPPEAR AND STUFF
  startButton.addEventListener('click', () => {
    startButton.style.display = 'none'
    mainGame.style.display = 'flex'
    textBox.innerHTML = 'Hello'

  })



















  // SHIP CREATION

  class UserShip {
    constructor(shipType,hitPoints, shipLength, shipSunk) {
      this.shipType = shipType,
      this.hitPoints = hitPoints,
      this.shipLength = shipLength,
      this.shipSunk = shipSunk
    }
  }

  const carrier = new UserShip('carrier',5,5,false)
  const battleship = new UserShip('battleship',4,4,false)
  const cruiser = new UserShip('cruiser',3,3,false)
  const submarine = new UserShip('submarine',3,3,false)
  const destroyer = new UserShip('destroyer',2,2,false)
  return UserShip
  //
  //
  //
  //
  //
  //
  // //SHIP PLACEMENT
  // function upOrDown() {
  //   ((Mathfloor(Mathrandom)) * 2)
  // }

// **************************************DO NOT WRITE BELOW THIS LINE*********************************************************
})
