//set 3 main variable
let score;
let playerTurn;
let winner;
let cardContent;
let scoreA;
let scoreB;
let words = ["null, null, null"]


let scoreBoard = document.getElementById('score-board')
let mainCard = document.getElementById('card2')

const hard = ['Compass', 'Crystal', 'cup', 'Diamond','Fan','Game']
const medium = ['Fruit', 'Fungus', 'Film', 'Ice','Garden', 'Gate']
const easy = ['Mist', 'Needle', 'Onion', 'Pants', 'Rainbow', 'Snail']

var genEasy = easy[Math.floor(Math.random() * 6)]
var genMedium = medium[Math.floor(Math.random() * 6)]
var genHard = hard[Math.floor(Math.random() * 6)]



// Originally had the following as functions but decided to directly variable it.
// function genEasy() {
//     return medium[Math.floor(Math.random() * 6)]
//   }

// function genMedium() {
//     return medium[Math.floor(Math.random() * 6)]
//   }

//   function genHard() {
//     return hard[Math.floor(Math.random() * 6)]
//   }
//  console.log(genMedium())


function init(){
    playerTurn = 1 //player 1
    // words = [genEasy, genMedium, genHard]; 
//    mainCard.innerText = words
}
// shuffled
mainCard.addEventListener('click', handleClick)
function handleClick(e){
  let words = [genEasy, genMedium, genHard]; 
  mainCard.innerText = words
//   mainCard = [words[0], words[1], words[2]]
}
console.log(mainCard)



// easy = words.[0]
// medium = words.[1]
// hard = words.[2]

// generate = [hard, med, easy];

  init()


//   console.log(genEasy)
// console.log(words)
// console.log(mainCard)

//   intro = [
//     ['choose']
//     ['your']
//     ['words!']
// ]