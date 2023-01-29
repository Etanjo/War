import {setupPregame} from './cardList'

let game = document.querySelector('#game')
let startButton = document.querySelector('#start')
let menu = document.querySelector('#menu')

startButton.addEventListener('click', function(event){
  menu.classList.toggle('hidden')
  game.classList.toggle('hidden')
  setupPregame()
})