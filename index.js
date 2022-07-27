let player = {
    name: "john",
    chips: 150
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name+ ": $" +player.chips

function getRandomCard(){
    let random = (Math.floor(Math.random()*13) + 1)
    if(random === 1){
        random = 11
    }else if(random > 10 ){
        random = 10
    }
    return random
}

function startGame(){
    let firstCard= getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
   isAlive = true
    renderGame()
}

function renderGame(){
 
    cardEl.textContent = "Card : "
    for (let i in cards){
    cardEl.textContent += cards[i] + " "
   }
    sumEl.textContent = "Sum : " + sum
    if ( sum<= 20 ){
        message = "Do you want to draw a new card?"
    } else if(sum === 21 ) {
        message =  "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
}

function newGame(){
if(isAlive === true && hasBlackJack === false){
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

}


