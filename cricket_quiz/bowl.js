window.addEventListener('DOMContentLoaded', () => {




    const bowlers = [
        {
            rank: 1,
            firstName: 'muttiah',
            lastName: 'muralitharan',
            wickets: 800,
            country: 'sl'
        },
        {
            rank: 2,
            firstName: 'shane',
            lastName: 'warne',
            wickets: 708,
            country: 'aus'
        },
        {
            rank: 3,
            firstName: 'anil',
            lastName: 'kumble',
            wickets: 619,
            country: 'ind'
        },
        {
            rank: 4,
            firstName: 'jimmy',
            lastName: 'anderson',
            wickets: 575,
            country: 'eng'
        },
        {
            rank: 5,
            firstName: 'glenn',
            lastName: 'mcgrath',
            wickets: 563,
            country: 'aus'
        },
        {
            rank: 6,
            firstName: 'courtney',
            lastName: 'walsh',
            wickets: 519,
            country: 'wi'
        },
        {
            rank: 7,
            firstName: 'stuart',
            lastName: 'broad',
            wickets: 450,
            country: 'eng'
        },
        {
            rank: 8,
            firstName: 'dale',
            lastName: 'steyn',
            wickets: 439,
            country: 'rsa'
        },
        {
            rank: 9,
            firstName: 'kapil',
            lastName: 'dev',
            wickets: 434,
            country: 'ind'
        },
        {
            rank: 10,
            firstName: 'rangana',
            lastName: 'herath',
            wickets: 433,
            country: 'sl'
        },
        {
            rank: 11,
            firstName: 'richard',
            lastName: 'hadlee',
            wickets: 431,
            country: 'nz'
        },
        {
            rank: 12,
            firstName: 'shaun',
            lastName: 'pollock',
            wickets: 421,
            country: 'rsa'
        },
        {
            rank: 13,
            firstName: 'harbhajan',
            lastName: 'singh',
            wickets: 417,
            country: 'ind'
        },
        {
            rank: 14,
            firstName: 'wasim',
            lastName: 'akram',
            wickets: 414,
            country: 'pak'
        },
        {
            rank: 15,
            firstName: 'curtly',
            lastName: 'ambrose',
            wickets: 405,
            country: 'wi'
        },
    ]

    bowlers.forEach(bowler => {
        const bowlersGameContainer = document.querySelector('.game-container')

        const wrapper = document.createElement('div')
        const rank = document.createElement('div')
        const country = document.createElement('div')
        const input = document.createElement('input')
        const wickets = document.createElement('span')
        bowlersGameContainer.appendChild(wrapper)
    
        wrapper.appendChild(rank)
        rank.innerHTML = bowler.rank
    
        wrapper.appendChild(country)
        country.setAttribute('class', bowler.country)
        wrapper.appendChild(input)
        wrapper.appendChild(wickets)
        wickets.setAttribute('class', 'wickets')
    
        input.addEventListener('keyup', (e) => {
            if (e.target.value.toLowerCase() === bowler.lastName) {
                wickets.innerHTML = bowler.wickets
                const fullName = document.createElement('span')
                fullName.setAttribute('class', 'fullName')
                wrapper.appendChild(fullName)
                wrapper.replaceChild(fullName, wrapper.childNodes[2])
                first = bowler.firstName.charAt(0).toUpperCase() + bowler.firstName.slice(1)
                last = bowler.lastName.charAt(0).toUpperCase() + bowler.lastName.slice(1)
                fullName.innerHTML = `${first + ' ' + last}`
                wrapper.style.borderColor = 'green'
    
            } else {
            }
        })
        wrapper.setAttribute('class', 'wrapper')
    })
})

