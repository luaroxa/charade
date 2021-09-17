
let teamTurn = 1; //player 1
let timerRunning = false;
let countdown;

//modal
var inst = document.getElementById("inst");
var modalInst = document.getElementById("modalInst");
var modalFinalScore = document.querySelector(".modalFinalScore");
var modalRestart = document.querySelector(".modalRestart");
var scoreMsg = document.getElementById("scoreMsg");
let close = document.getElementById("instClose");

//score
let roundEl = document.getElementById("round");
let round = 0;
let ScoreElH = document.getElementById("ScoreH");
let ScoreElG = document.getElementById("ScoreG");
let scoreH = 0;
let scoreG = 0;

//words
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

function init(){
    teamTurn = 1;
    scoreH = 0;
    scoreG = 0;
    ScoreElH.innerText = 0;
    ScoreElG.innerText = 0;
    roundEl.innerText = 0;
    if (timerRunning) {
        clearInterval(countdown);
        timerRunning = false;
      }
      timeEl.innerText = `00:00`;
      wordEl.forEach((element) => (element.disabled = false));
}

function shuffle() {
  easyEl.innerText = "";
  mediumEl.innerText = "";
  hardEl.innerText = "";
  document.getElementById("shuffle").style.display = "block";
}
// 2. user clicks on start button (team 1 goes)
document.getElementById("shuffle").addEventListener("click", genWord);
function genWord() {
  easyEl.innerText = genRandom(genEasy) + ` ${dia}`;
  mediumEl.innerText = genRandom(genMedium) + ` ${dia}${dia}`;
  hardEl.innerText = genRandom(genHard) + ` ${dia}${dia}${dia}`;
  document.getElementById("shuffle").style.display = "none";
  round += 1
  roundEl.innerText = round
}

//3. Genera random words fn
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

// I GIVE UP : passing turn
document.getElementById("giveup").addEventListener("click", giveup);
function giveup() {
if (genHard.length === 0) return gameEnd();
  shuffle();
  toggleTeam();
  
}

// answer fn
document.getElementById("answer").addEventListener("click", won);
function won(team) {
  if (genHard.length === 0) return gameEnd();
  teamTurn > 0 ? (scoreH += 1) : (scoreG += 1);
  teamTurn > 0 ? (ScoreElH.innerText = scoreH) : (ScoreElG.innerText = scoreG);
  toggleTeam();
  shuffle();
}

function gameEnd() {
  modalFinalScore.classList.remove("hidden");
  if (scoreH === scoreG) {
    scoreMsg.innerText = "It's a tie";
  } else if (scoreH < scoreG) {
    scoreMsg.innerText = "Guest won!";
  } else {
    scoreMsg.innerText = "Home won!";
  }
}

//toggle team
function toggleTeam() {
  teamTurn *= -1;
}

//Overall reset of the game.
document.getElementById("restart").addEventListener("click", reset);
function reset() {
  shuffle();
  init();
  modalFinalScore.style.display = "none";
  console.log("what")
}

document.getElementById("restart2").addEventListener("click", reset);
function reset() {
  shuffle();
  init();
  modalFinalScore.style.display = "none";
  console.log("what")
}

//insdie ScoreModal: closing modal + restarting the game.
modalRestart.addEventListener("click", reset);



//opening instruction modal window 
inst.addEventListener("click", function () {
  modalInst.style.display = "block";
});

//not working
// document.getElementById("instClose").addEventListener("click", function() {
//     modalInst.style.display = "none";
//     console.log("why")
//   });

 close.addEventListener("click", pleaseclose)
  function pleaseclose() {
    modalInst.classList.add("hidden");
    // modalInst.style.display = "none";
    console.log("why")
  };

//   close.onclick = function() {
//       modalInst.style.display = "none";
//   }

init();
