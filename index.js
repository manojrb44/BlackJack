let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")
let player = {
     Name: "Manoj",
     Chips: 440
}

let playerName = "Manoj"
let PlayerChips = 440

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips

function startGame(){
    isAlive = true
    hasBlackJack = false
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    cards = [card1, card2]
    sum = card1 + card2
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for(i=0; i<cards.length; i++){
        cardEl.textContent += cards[i]+ " "
    }

    sumEl.textContent = "Sum : " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        hasBlackJack = true
        message = "you got the black jack"
    }else {
        message = "your are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let newcard = getRandomCard()
    sum += newcard
    cards.push(newcard)
    renderGame()
    }
}

function getRandomCard() {
    let rand = Math.floor( Math.random()*13 ) + 1
    if( rand === 1){
        return 11
    }else if(rand >10 ){
        return 10
    }else{
        return rand
    }
}