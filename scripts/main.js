window.addEventListener('DOMContentLoaded', () => {


  //how the fuck to do javascript grids
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

























  // SHIP CREATION

  // const Ship = constructor(hitPoints, shipLength, shipSunk)
  // {
  //   this.hitPoints = hitPoints,
  //   this.shipLength = shipLength,
  //   this.shipSunk = shipSunk
  // }
  //
  // const carrier = new Ship(5,5,false)
  // const battleship = new Ship(4,4,false)
  // const cruiser = new Ship(3,3,false)
  // const submarine = new Ship(3,3,false)
  // const destroyer = new Ship(2,2,false)

  // return Ship
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

// DO NOT WRITE BELOW THIS LINE
})
