//ICE
//need to coordinate where html goes better
//then need the 3 words to place in a column with difficulty indicator
//my team 1 vs 2 is floating around. 

//why is my score board overlapping with mainboard?
//in the future, I probably could write an array to create div per word instead of having 3 html divs. so it can be scaled up. 
//set 3 main variable
let score;
let playerTurn;
let winner;
let cardContent;
let scoreA;
let scoreB;
let words = ["null, null, null"]
let a = ''

let scoreBoard = document.getElementById('score-board')
let mainCard = document.getElementById('card2')
let answer = document.getElementById('answer')
let easyEl = document.getElementById('easy')
let mediumEl = document.getElementById('medium')
let hardEl = document.getElementById('hard')
let timeEl = document.getElementById('time')

const genHard = ['Compass', 'Crystal', 'cup', 'Diamond','Fan','Game']
const genMedium = ['Fruit', 'Fungus', 'Film', 'Ice','Garden', 'Gate']
const genEasy = ['Mist', 'Needle', 'Onion', 'Pants', 'Rainbow', 'Snail']

let easy = `${genEasy[Math.floor(Math.random() * 6)]} X`
let medium = `${genMedium[Math.floor(Math.random() * 6)]} XX`
let hard = `${genHard[Math.floor(Math.random() * 6)]} XXX`


// var genEasy = genEasy[Math.floor(Math.random() * 6)]
// var genMedium = genMedium[Math.floor(Math.random() * 6)]
// var genHard = genHard[Math.floor(Math.random() * 6)]



function init(){
    playerTurn = 1 //player 1
    words = [null, null, null]
    // words = [genEasy, genMedium, genHard]; 
//    mainCard.innerText = ''
}
// shuffled 
mainCard.addEventListener('click', handleClick)
function handleClick(e){
  words = [easy, medium, hard]; 
  easyEl.innerText = easy;
  mediumEl.innerText = words[1];
  hardEl.innerText = words[2];
  console.log(easy)

//   mainCard.innerText = words
//   mainCard = [words[0], words[1], words[2]]
}
console.log(mainCard)

// starting timer. 
let count = 60
let countdown = setInterval(function(){
    timeEl.innerText = count
    if(count ===0){
        timeUp()
    }
    count--
},100)

function timeUp() {
    console.log('timesup')
    clearInterval(countdown)
  }
// end of timer fn.

//second type of click : reset
document.getElementById('restart').addEventListener('click', init);  

init()


/////////NOTES:


// easy = words.[0]
// medium = words.[1]
// hard = words.[2]

// generate = [hard, med, easy];

//working clicker ex.
// answer.addEventListener('click', startTimer)
// function startTimer(){
// a = words;
// console.log(a)
// }
 


//   intro = [
//     ['choose']
//     ['your']
//     ['words!']
// ]

// Originally had the following as functions but decided to directly variable it.
// function genEasy() {
//     return medium[Math.floor(Math.random() * 6)]
//   }

// function genMedium() {
//     a = medium[Math.floor(Math.random() * 6)]
//   }

//   function genHard() {
//     return hard[Math.floor(Math.random() * 6)]
//   }
//  console.log(genMedium())


// below kept getting eeror why/.
// let countdown = setInterval(funtion(){
//     timeEl.innerText = count
//     if(count ===0){
//      timeUp()
//     }
//     count--
// }, 100)