//ICE
//need to coordinate where html goes better
//then need the 3 words to place in a column with difficulty indicator
//my team 1 vs 2 is floating around. 

//why is my score board overlapping with mainboard?

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

function genMedium() {
    a = medium[Math.floor(Math.random() * 6)]
  }

  function genHard() {
    return hard[Math.floor(Math.random() * 6)]
  }
//  console.log(genMedium())


function init(){
    playerTurn = 1 //player 1
    words = [null, null, null]
    // words = [genEasy, genMedium, genHard]; 
   mainCard.innerText = ''
}
// shuffled 
mainCard.addEventListener('click', handleClick)
function handleClick(e){
  words = [genEasy, genMedium, genHard]; 
  mainCard.innerText = words
//   mainCard = [words[0], words[1], words[2]]
}
// console.log(mainCard)

// choosing a word
answer.addEventListener('click', startTimer)
function startTimer(){
a = words;
console.log(a)
}


//second type of click : reset
document.getElementById('restart').addEventListener('click', init);  


    // function startTimer(duration, display) {
    //     var timer = duration, minutes, seconds;
    //     setInterval(function () {
    //         minutes = parseInt(timer / 60, 10);
    //         seconds = parseInt(timer % 60, 10);
    
    //         minutes = minutes < 10 ? "0" + minutes : minutes;
    //         seconds = seconds < 10 ? "0" + seconds : seconds;
    
    //         display.textContent = minutes + ":" + seconds;
    
    //         if (--timer < 0) {
    //             timer = duration;
    //         }
    //     }, 1000);
    // }
    
    // window.onload = function () {
    //     var fiveMinutes = 60 * 5,
    //         display = document.querySelector('#time');
    //     startTimer(fiveMinutes, display);
    // };




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