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


//default setting: 
function init(){
    playerTurn = 1 //player 1
//    mainCard.innerText = ''
}

// user clicks on start button
document.getElementById('init').addEventListener('click', genWord)
function genWord(e){
  easyEl.innerText = `${genEasy[Math.floor(Math.random() * 6)]} X`
  mediumEl.innerText = `${genMedium[Math.floor(Math.random() * 6)]} XX`
  hardEl.innerText = `${genHard[Math.floor(Math.random() * 6)]} XXX`
}

// user clicks on a word => starting timer. 
// document.querySelector('word').addEventListener('click', startTimer)
// function startTimer(e){
// if (e.target.id)
// }

let count = 60
let countdown = setInterval(function(){
    timeEl.innerText = `00:${count}`
    if(count ===0){
        // i need this to be 00:00 not 00:0 ??????????????????
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
