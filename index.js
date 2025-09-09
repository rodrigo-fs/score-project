let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let homeCount = 0
let guestCount = 0


//Function to Home side
function add1Point() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function add2Point() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function add3Point() {
    homeCount += 3
    homeScore.textContent = homeCount
}


//Function to Guest side
function add1PointGuest() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function add2PointGuest() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function add3PointGuest() {
    guestCount += 3
    guestScore.textContent = guestCount
}

