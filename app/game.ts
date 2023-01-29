import {cards, shuffleCards} from './cardList'
let pNumber = document.querySelector('#pDeckAmount')
let cNumber = document.querySelector('#cDeckAmount')
let pDeck = document.querySelector('#pDeck')
let pCard = document.querySelector('#pCard')
let cCard = document.querySelector('#cCard')

let firstTimeSetup = true

let playerCards = []
let cpuCards = []

export function splitDeck(){
  for(let i = 0; i<=25;i++){
    playerCards.push(cards[i])
  }
for(let i = 26; i<=51;i++){
    cpuCards.push(cards[i])
  }

  console.log(playerCards)
  console.log(cpuCards)
}

function updateCounts(){
  pNumber.innerHTML = `${playerCards.length} Cards Remaining`
  cNumber.innerHTML = `${cpuCards.length} Cards Remaining`
  requestAnimationFrame(updateCounts)
}
export function setupGame(){
  shuffleCards()
  splitDeck()
  if(firstTimeSetup == true)
  {updateCounts()
  pDeck.addEventListener('click', function(event){
    doNextStep()
  })
  firstTimeSetup = false
  }
}
setupGame()

let activeCards = []
let warBounties = []

function startRound(){
    activeCards.push(playerCards[0])
  activeCards.push(cpuCards[0])
  playerCards.splice(0,1)
  cpuCards.splice(0,1)
  pCard.innerHTML = ` <span>${activeCards[0].suit}</span>
  <span class = number>${activeCards[0].letter}</span>
  <span>${activeCards[0].suit}</span>`
  pCard.style.color = activeCards[0].color

  cCard.innerHTML = ` <span>${activeCards[1].suit}</span>
  <span class = number>${activeCards[1].letter}</span>
  <span>${activeCards[1].suit}</span>`
  cCard.style.color = activeCards[1].color
  gameState = 2
}

function playRound(){

  if(activeCards[0].value > activeCards[1].value){
    playerCards.push(activeCards[0])
    playerCards.push(activeCards[1])
    activeCards.splice(0,2)
    gameState = 1
    cCard.innerHTML = ''
    pCard.innerHTML = ''
  }else if(activeCards[1].value > activeCards[0].value){
    cpuCards.push(activeCards[0])
    cpuCards.push(activeCards[1])
    activeCards.splice(0,2)
    gameState = 1
    cCard.innerHTML = ''
    pCard.innerHTML = ''
  }
  else if(activeCards[1].value == activeCards[0].value){
      gameState = 4
    cCard.innerHTML = ''
    pCard.innerHTML = ''
  }
}


console.log(playerCards)
console.log(cpuCards)

function startWar(){
  warBounties.push(activeCards[0])
  warBounties.push(activeCards[1])
  activeCards.splice(0,2)
  warBounties.push(playerCards[0])
  warBounties.push(playerCards[1])
  warBounties.push(playerCards[2])
  activeCards.push(playerCards[3])
  playerCards.splice(0,4)
  warBounties.push(cpuCards[0])
  warBounties.push(cpuCards[1])
  warBounties.push(cpuCards[2])
  activeCards.push(cpuCards[3])
  cpuCards.splice(0,4)
  pCard.innerHTML = ` <span>${activeCards[0].suit}</span>
  <span class = number>${activeCards[0].letter}</span>
  <span>${activeCards[0].suit}</span>`
  pCard.style.color = activeCards[0].color

  cCard.innerHTML = ` <span>${activeCards[1].suit}</span>
  <span class = number>${activeCards[1].letter}</span>
  <span>${activeCards[1].suit}</span>`
  cCard.style.color = activeCards[1].color
  gameState = 5
}

function doWar(){

    if(activeCards[0].value > activeCards[1].value){
    playerCards.push(activeCards[0])
    playerCards.push(activeCards[1])
    warBounties.forEach(addToPlayer)
    warBounties.splice(0,warBounties.length)
    activeCards.splice(0,2)
    gameState = 1
    cCard.innerHTML = ''
    pCard.innerHTML = ''
  }else if(activeCards[1].value > activeCards[0].value){
    cpuCards.push(activeCards[0])
    cpuCards.push(activeCards[1])
    warBounties.forEach(addToCpu)
    warBounties.splice(0,warBounties.length)
    activeCards.splice(0,2)
    gameState = 1
    cCard.innerHTML = ''
    pCard.innerHTML = ''
  } else if(activeCards[1].value == activeCards[0].value){
    gameState = 4
    cCard.innerHTML = ''
    pCard.innerHTML = ''
  }
}

let gameState = 1 //1 = before draw, 2 = draw, 3 = after draw, 4 = war 5 = post war;


function addToPlayer(Card){
  playerCards.push(Card)
}
function addToCpu(Card){
  playerCards.push(Card)
}

function doNextStep(){
  if(gameState == 1){
    startRound()
  }else if(gameState == 2){
    playRound()
  }else if(gameState == 3){
    //add card clearing function
    gameState = 1
  }else if(gameState == 4){
    startWar()
  }else if(gameState == 5){
    doWar()
  }
  console.log(playerCards)
  console.log(activeCards)
  console.log(cpuCards)
}
