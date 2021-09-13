//set 3 main variable
let score;
let playerTurn;
let winner;
let cardContent;
let scoreA;
let scoreB;
let intro = ['']



const hard = ['Compass', 'Crystal', 'cup', 'Diamond','Fan','Game']
const medium = ['Fruit', 'Fungus', 'Film', 'Ice','Garden', 'Gate']
const easy = ['Mist', 'Needle', 'Onion', 'Pants', 'Rainbow', 'Snail']

let scoreBoard = document.getElementById('score-board')
let mainCard = document.getElementById('card#2')


function init(){
    playerTurn = 1 //player 1 
    intro = [
        ['choose']
        ['your']
        ['words!']
    ]
}

intro = [hard, med, easy];


function genHard() {
    return hard[Math.floor(Math.random() * 6)]
  }

function genMedium() {
    return hard[Math.floor(Math.random() * 6)]
  }

function genEasy() {
    return hard[Math.floor(Math.random() * 6)]
  }

  init()