//ICE
//round 1, 2,3

// difficulty indicator
//my team 1 vs 2 is floating around. 
//api ? 
//choose team name? 
//pop up of welcome to Chrade when first come in. 
//winner logic  (or end of game logic)

// Q:
// stopping clicking fn doens't work.  -> to prevent people from clicking multiple words, multiple time. 
//I need to force quit timer
// team switch -> how to recogznie better


//in the future, I probably could write an array to create div per word instead of having 3 html divs. so it can be scaled up. 
//set 3 main variable
let teamTurn =1;//player 1
let winner;
let scoreA = 0;
let scoreB = 0;
// let words = ["null, null, null"]
// let cardContent;

let scoreBoard = document.getElementById('scoreBoard')
let current_score1 = document.getElementById('current_score1')
let current_score2 = document.getElementById('current_score2')
// let mainCard = document.getElementById('card2')
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
   easyEl.innerText = "";
   mediumEl.innerText = "";
   hardEl.innerText = "";
   document.getElementById('init').style.display='block';
   clearInterval(countdown) 
   timeEl.innerText = `00:${count}`
}

// 2. user clicks on start button (team 1 goes)
document.getElementById('init').addEventListener('click', genWord)
function genWord(){
  easyEl.innerText = genRandom(genEasy) + 'X'
  mediumEl.innerText = genRandom(genMedium) + 'XX'
  hardEl.innerText = genRandom(genHard) + 'XXX'
  document.getElementById('init').style.display='none'; 
}

//3. Genera random fn
//generating random number to splice the array by it as index and take the return. 
//this also removes that specific word from the original array. 
//so I should put a stopper on when array becomes empty. 
function genRandom(arr){
    return arr.splice(Math.floor(Math.random() * arr.length),1 )
}

//3. user clicks on a word => starting timer. 
easyEl.addEventListener('click', function(){
startTimer(30)
mediumEl.innerText = "";
hardEl.innerText = "";
document.querySelectorAll('.word').disabled=true; 
})

mediumEl.addEventListener('click', function(){
  startTimer(45)
  easyEl.innerText = "";
  hardEl.innerText = "";
  document.getElementById('word').disabled=true; 
  })
hardEl.addEventListener('click', function(){
startTimer(60)
mediumEl.innerText = "";
easyEl.innerText = "";
document.getElementById('word').disabled=true; 
})

// mediumEl.addEventListener('click', function(){startTimer(45)})


function startTimer(s){
let count = s
let countdown = setInterval(function(){
    timeEl.innerText = `00:${count}`
    if(count === 0){
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

// I GIVE UP : passing turn
document.getElementById('giveup').addEventListener('click', giveup)
function giveup(){
   init();
   toggleTeam();
    console.log(teamTurn);
}

//I GOT the answer: pass turn + 1 to whomever turn it was. 
document.getElementById('answer').addEventListener('click', won)
function won(){
    scoreA += 1;
    current_score1.innerText = scoreA;
    toggleTeam();
    init ();
    console.log(scoreA);
}
//need for score B, but there must be a better way to do both in one fn. å


//toggle team 
function toggleTeam() {
    teamTurn *= -1;
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
