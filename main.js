//ICE
//round 1, 2,3
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
// let words = ["null, null, null"]
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


// 1. default setting: 
function init(){
    teamTurn = 1 //player 1
//    mainCard.innerText = ''
}

// 2. user clicks on start button (team 1 goes)
document.getElementById('init').addEventListener('click', genWord)
function genWord(){
  easyEl.innerText = genRandom(genEasy) + 'X'
  mediumEl.innerText = genRandom(genMedium) + 'XX'
  hardEl.innerText = genRandom(genHard) + 'XXX'

}
//splice it by random number. 
function genRandom(arr){
    return arr.splice(Math.floor(Math.random() * arr.length),1 )
}
//3. user clicks on a word => starting timer. 
easyEl.addEventListener('click', easyWord)
//I'm going to have general startTimer fn and another fn for execution. so it can be used else where

// function easyWord() {
//     getRandom(genEasy);
//     startTimer(30);
//     toggleTeam();
// }

//generating random number to splice the array by it as index and take the return. 
//this also removes that specific word from the original array. 
//so I should put a stopper on when array becomes empty. 


function startTimer(m){
let count = m
let countdown = setInterval(function(){
    timeEl.innerText = `00:${count}`
    if(count === 0){
        // i need this to be 00:00 not 00:0 ??????????????????
        timeEl.innerText = `00:00`
        timeUp()   
    }
    count--
},1000)

function timeUp() {
    console.log('timesup')
    clearInterval(countdown)
  }
}
// end of timer fn.

//toggle team 
function toggleTeam() {
    teamTurn *= -1
  }

//second type of click : reset
document.getElementById('restart').addEventListener('click', init);  

init()


/////////NOTES:
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





// below kept getting eeror why/.
// let countdown = setInterval(funtion(){
//     timeEl.innerText = count
//     if(count ===0){
//      timeUp()
//     }
//     count--
// }, 100)
