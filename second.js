//ICE
//choose team name?
//api ?
//in the future, I probably could write an array to create div per word instead of having 3 html divs. so it can be scaled up.

//ICE for CSS
// guessing words are not centered in vertical
// ????????? borders are noot complete
//favicon

//pop up of welcome to Chrade when first come in.
//winner logic  (or end of game logic)
///SOOUND !
//read me
//I want to have instruction modal
// I want team's turn will be lit up.
// round = arr.length--

//set 3 main variable
let teamTurn = 1; //player 1
let winner;
let scoreA = 0;
let scoreB = 0;
let timerRunning = false;
let countdown;
var inst = document.getElementById("inst");
var modalInst = document.getElementById("modalInst");
var modalScore = document.querySelector(".modalScore")
var modalRestart= document.querySelector(".modalRestart")
var scoreMsg = document.getElementById("scoreMsg")

let scoreBoard = document.getElementById("scoreBoard");
let currentScore1 = document.getElementById("currentScore1")  
let currentScore2 = document.getElementById("currentScore2")
let answer = document.getElementById("answer");
let easyEl = document.getElementById("easy");
let mediumEl = document.getElementById("medium");
let hardEl = document.getElementById("hard");
let timeEl = document.getElementById("time");
let wordEl = document.querySelectorAll(".word");
let dia = String.fromCodePoint(0x1f48e);

const genHard = ["Compass", "Crystal", "Cup", "Diamond", "Fan", "Game"];
const genMedium = ["Fruit", "Fungus", "Film", "Ice", "Garden", "Gate"];
const genEasy = ["Mist", "Needle", "Onion", "Pants", "Rainbow", "Snail"];

// 1. default setting:
function init() {
  easyEl.innerText = "";
  mediumEl.innerText = "";
  hardEl.innerText = "";
  document.getElementById("init").style.display = "block";
  if (timerRunning) {
    clearInterval(countdown);
    timerRunning = false;
  }
  timeEl.innerText = `00:00`;
  wordEl.forEach((element) => (element.disabled = false));
}
// 2. user clicks on start button (team 1 goes)
//???????????????? need to take game end out so they don't need to click init to figure out that it enedd. 
document.getElementById("init").addEventListener("click", genWord);
function genWord() {
  
  easyEl.innerText = genRandom(genEasy) + ` ${dia}`;
  mediumEl.innerText = genRandom(genMedium) + ` ${dia}${dia}`;
  hardEl.innerText = genRandom(genHard) + ` ${dia}${dia}${dia}`;
  document.getElementById("init").style.display = "none";
}

//end logic -< broke
function gameEnd() {
//    ? alert("team A won") : alert("team B won");
  modalScore.classList.remove("hidden");
 if(scoreA === scoreB){
    scoreMsg.innerText = "It's a tie";
 } else if (scoreA > scoreB){
    scoreMsg.innerText = "Guest won!";
 } else {
    scoreMsg.innerText = "Home won!";
 }
 }
 
  
  
  //buttono to restart and hide the modal again when clicked
  // ternary instead of doing alert, it will change meesageEl .


//3. Genera random fn
function genRandom(arr) {
  return arr.splice(Math.floor(Math.random() * arr.length), 1);
}

//3. user clicks on a word => starting timer.
easyEl.addEventListener("click", function () {
  startTimer(30);
  mediumEl.innerText = "";
  hardEl.innerText = "";
  wordEl.forEach((element) => (element.disabled = true));
});


mediumEl.addEventListener("click", function () {
  startTimer(45);
  easyEl.innerText = "";
  hardEl.innerText = "";
  wordEl.forEach((element) => (element.disabled = true));
});

hardEl.addEventListener("click", function () {
  startTimer(60);
  mediumEl.innerText = "";
  easyEl.innerText = "";
  wordEl.forEach((element) => (element.disabled = true));
});

// mediumEl.addEventListener('click', function(){startTimer(45)})

function startTimer(s) {
  let count = s;
  timerRunning = true;
  countdown = setInterval(function () {
    timeEl.innerText = `00:${count}`;
    if (count === 0) {
      timeEl.innerText = `00:00`;
      timeUp();
    }
    count--;
  }, 1000);

  function timeUp() {
    timerRunning = false;
    console.log("timesup");
    clearInterval(countdown);
  }
}
// end of timer fn.

// I GIVE UP : passing turn
document.getElementById("giveup").addEventListener("click", giveup);
function giveup() {
  init();
  toggleTeam();
  if (genHard.length === 0) return gameEnd();
   console.log('A' + scoreA);
    console.log('B' + scoreB);
}

//I GOT the answer: pass turn + 1 to whomever turn it was.
document.getElementById("answer").addEventListener("click", won);
function won(team) {
    if (genHard.length === 0) return gameEnd();  
  teamTurn > 0 ? (scoreA += 1) : (scoreB += 1);
  teamTurn > 0 ? (currentScore1.innerText = scoreA) : (currentScore2.innerText = scoreB);
  toggleTeam();
  init();
  console.log('A' + scoreA);
  console.log('B' + scoreB);
}

//toggle team
function toggleTeam() {
  teamTurn *= -1;
}

//second type of click : reset
document.getElementById("restart").addEventListener("click", reset);
function reset() {
  init();
  teamTurn = 1;
  modalScore.style.display = "none"
}


inst.onclick = function () {
  modalInst.style.display = "block";
};

modalRestart.addEventListener('click',reset);
// modalRestart.addEventListener('click',function(){modalInst.style.display = "none"})
 
init();

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
