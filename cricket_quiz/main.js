
window.addEventListener('DOMContentLoaded', () => {

const gameContainer = document.querySelector('.game-container')

const players = [

    {
        rank: 1,
        firstName: 'sachin',
        lastName: 'tendulkar',
        runs: 15921,
        country: 'ind'
    },
    {
        rank: 2,
        firstName: 'ricky',
        lastName: 'ponting',
        runs: 13378,
        country: 'aus'
    },
    {
        rank: 3,
        firstName: 'jacques',
        lastName: 'kallis',
        runs: 13289,
        country: 'rsa'
    },
    {
        rank: 4,
        firstName: 'rahul',
        lastName: 'dravid',
        runs: 13288,
        country: 'ind'
    },
    {
        rank: 5,
        firstName: 'alastair',
        lastName: 'cook',
        runs: 12472,
        country: 'eng'
    },
    {
        rank: 6,
        firstName: 'kumar',
        lastName: 'sangakkara',
        runs: 12400,
        country: 'sl'
    },
    {
        rank: 7,
        firstName: 'brian',
        lastName: 'lara',
        runs: 11953,
        country: 'wi'
    },
    {
        rank: 8,
        firstName: 'shivnarine',
        lastName: 'chanderpaul',
        runs: 11867,
        country: 'wi'
    },
    {
        rank: 9,
        firstName: 'mahela',
        lastName: 'jayawardene',
        runs: 11814,
        country: 'sl'
    },
    {
        rank: 10,
        firstName: 'allan',
        lastName: 'border',
        runs: 11174,
        country: 'aus'
    },
    {
        rank: 11,
        firstName: 'steve',
        lastName: 'waugh',
        runs: 10927,
        country: 'aus'
    },
    {
        rank: 12,
        firstName: 'sunil',
        lastName: 'gavaskar',
        runs: 10122,
        country: 'ind'
    },
    {
        rank: 13,
        firstName: 'younis',
        lastName: 'khan',
        runs: 10099,
        country: 'pak'
    },
    
]



let correctAnswers = 0
players.forEach(player => {
    const wrapper = document.createElement('div')
    const rank = document.createElement('div')
    const country = document.createElement('div')
    const input = document.createElement('input')
    const runs = document.createElement('span')
    gameContainer.appendChild(wrapper)

    wrapper.appendChild(rank)
    rank.innerHTML = player.rank

    wrapper.appendChild(country)
    country.setAttribute('class', player.country)
    wrapper.appendChild(input)
    wrapper.appendChild(runs)
    runs.setAttribute('class', 'runs')





    input.addEventListener('keyup', (e) => {
        if (e.target.value.toLowerCase() === player.lastName) {
            runs.innerHTML = player.runs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            const fullName = document.createElement('span')
            fullName.setAttribute('class', 'fullName')
            wrapper.appendChild(fullName)
            wrapper.replaceChild(fullName, wrapper.childNodes[2])
            first = player.firstName.charAt(0).toUpperCase() + player.firstName.slice(1)
            last = player.lastName.charAt(0).toUpperCase() + player.lastName.slice(1)
            fullName.innerHTML = `${first + ' ' + last}`
            wrapper.style.borderColor = 'green'
            correctAnswers++

        } else {
        }
    })





    wrapper.setAttribute('class', 'wrapper')




})







// DO NOT WRITE BELOW THIS LINE
})
