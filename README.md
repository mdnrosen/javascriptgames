# wdi39-project-1



Initial Thoughts - all written before the project.
My initial plan is to create the game 'BattleShips' as my first project. I think it will be a challenge for me, and some aspects of the game immediately have forced me to think how I will approach them. Setting up the grid and styling the page is not too much of a concern, so I will keep the styling basic to begin with while I solve the following problems that worry me the most:

  <h6> 1. <h6>Ship placement at the beginning of the game.</h6>
  What I'm writing here now I hope will make myself laugh in a few days time. Initial thoughts are that this is going to be a very difficult task, with numerous ways to approach it. Whether I automatically select a ship and have the user manipulate it before confirming it's final position, or I enable to user to click and drag the ship... I'm accepting that a lot of my time could be invested into solving this particular riddle.

  2. Logic of CPU shots
  This seems simple to begin with, as I can run code for the CPU to target any random available square. However, once there is a hit I need the computer to be smart about where it fires next. Immediate thought is that a square that contains ship is a separate class and that if that class is selected, then the next shot is +1 square up down east or west to it. But once the CPU has two hits in a row, they must then choose the next square in the line, as a human player would.

These two points are what has my brain ticking over the most at the moment, but I'm sure more puzzles will present themselves as we go along. When creating a very basic layout to work with I'm going to make sure I add extra buttons that I can later replace with images or other styling, just so that I can give them commands to test specific aspects of the game as I progress.

Stage one is to write out the timeline of the game in plain english, and then in suedo code. Following this I can put together the basic style of the page once I know how and which elements I will need to build and manipulate...!!


Post project summary:

This project was immensely challenging. I was correct in highlighting the two issues above early on as they gave me such headaches that I didn't not have time to make the CPU particularly intelligent. Even though I knew it would be a problem, placement of both human and CPU ships was especially difficult.



PLANNING:
The project started well as I had a very clear plan of attack for my planning phase. I played Battleships a fair bit as a child so I am very familiar with it, and this meant that I had a clear idea of how to translate it to a 2D page on a website. I also looked at other online examples of the game for a bit more inspiration, as I wanted to make sure that my layout was confirmed. The last thing I needed was to have to move things around too much toward the end of the project. Although a div going missing isn't the end of the world, I didn't want to to risk losing time near the end of the project on something that I could nail down early doors.

I've been comfortable using flexbox styling so that was my main weapon, and I stuck with basic CSS on the basis that I wouldn't be doing anything too flamboyant that wasn't in the Javascript so there was no need to refresh my SASS knowledge at the time as well. The Flex box technique worked well giving me a 'maingame' box which contained left and right sides: with the left side containing the players map and ships, and the right side contain the cpu 'radar' as well as a text box and buttons.

I only ended up using one of the 4 buttons in the end but I thought that having them there meant I could add click events to them easily to test any aspect of my game. This came in very useful when testing things like ship placement and firing.

Once the layout was confirmed, and drawn out in my notepad it was onto the logic. It was always obvious that there would be a lot of things to figure out. Rather than writing a line by line style suedo code, the four of us doing battleships attacked the walls with marker pens to give us a much more visual representation of the loops and decisions we'd be creating. The two main issues at the top of this document were obviously discussed the most and I'll detail the thoughts when I talk further at each element of the page. The other major decision was how to create grids (and not by creating 200 divs for each square!).

THE SHIPS:
Before I'd made an exact decision on how to create my grids on the page I decided to create the ships first. As no matter what layout or style you're going for, you need 5 ships on each size that have set stats that will need to be manipulated. So I created Class for my ships containing a constructor method. As detailed in the below snap from the code this enabled me to have different ships with different stats that made them easily manipulated.


`js class Ship {
  constructor(shipType,hitPoints, shipLength, shipSunk) {
    this.shipType = shipType,
    this.hitPoints = hitPoints,
    this.shipLength = shipLength,
    this.shipSunk = shipSunk
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
const carrier = new Ship('carrier',5,5,false)
const battleship = new Ship('battleship',4,4,false)
const cruiser = new Ship('cruiser',3,3,false)
const submarine = new Ship('submarine',3,3,false)
const destroyer = new Ship('destroyer',2,2,false)

const myCarrier = new Ship('carrier',5,5,false)
const myBattleship = new Ship('battleship',4,4,false)
const myCruiser = new Ship('cruiser',3,3,false,3)
const mySubmarine = new Ship('submarine',3,3,false)
const myDestroyer = new Ship('destroyer',2,2,false)
 `xw
