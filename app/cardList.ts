export let cards = []


export class Card{
  value: number
  suit: string
  letter: string //what's displayed on the card, placeholder until I add images. Same with suit
  color: string
  constructor(value: number,letter:string){
    this.value = value
    
    this.letter = letter
    cards.push(this)
  }
}

function makeCards(value:number, letter:string){
  for(let i = 0; i<4;i++){
    new Card(value,letter)
  }
}
let cardCount = 0

function applySuits(Card){
  if(cardCount == 0){
    Card.suit = 'Diamonds'
    Card.color = 'red'
    cardCount +=1
  }else if( cardCount == 1){
       Card.suit = 'Hearts'
    Card.color = 'red'
    cardCount +=1
  }else if(cardCount==2){
       Card.suit = 'Clubs'
    Card.color = 'black'
    cardCount +=1
  }else if(cardCount==3){
       Card.suit = 'Spades'
    Card.color = 'black'
    cardCount = 0
  }
  
}
export function setupPregame(){
makeCards(1,'A')
makeCards(2,'2')
makeCards(3,'3')
makeCards(4,'4')
makeCards(5,'5')
makeCards(6,'6')
makeCards(7,'7')
makeCards(8,'8')
makeCards(9,'9')
makeCards(10,'10')
makeCards(11,'J')
makeCards(12,'Q')
makeCards(13,'K')
cards.forEach(applySuits)
}
setupPregame()



export function shuffleCards(){
    for(let i = 0; i<100; i++){
  cards = cards.sort(()=>Math.random()-0.5) //gotten from https://javascript.info/task/shuffle
  }

}
