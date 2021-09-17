let teamTurn = 1; 
let timerRunning = false;
let countdown;
let dia = String.fromCodePoint(0x1f48e);

let inst = document.getElementById("inst");
let modalInst = document.getElementById("modalInst");
let modalFinalScore = document.querySelector(".modalFinalScore");
let modalRestart = document.querySelector(".modalRestart");
let scoreMsg = document.getElementById("scoreMsg");
let close = document.getElementById("instClose");

let roundEl = document.getElementById("round");
let round = 0;
let ScoreElH = document.getElementById("ScoreH");
let ScoreElG = document.getElementById("ScoreG");
let scoreH = 0;
let scoreG = 0;

let easyEl = document.getElementById("easy");
let mediumEl = document.getElementById("medium");
let hardEl = document.getElementById("hard");
let timeEl = document.getElementById("time");
let wordEl = document.querySelectorAll(".word");

const genHard = ["Compass", "Crystal", "Cup", "Diamond", "Fan", "Game"];
const genMedium = ["Fruit", "Fungus", "Film", "Ice", "Garden", "Gate"];
const genEasy = ["Mist", "Needle", "Onion", "Pants", "Rainbow", "Snail"];

// Initial state of the game
function init(){
    teamTurn = 1;
    scoreH = 0;
    scoreG = 0;
    ScoreElH.innerText = 0;
    ScoreElG.innerText = 0;
    roundEl.innerText = 0;
    clearTime();
}

function clearTime(){
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
  clearTime();
}

//user clicks on play the game
document.getElementById("shuffle").addEventListener("click", genWord);
function genWord() {
  easyEl.innerText = genRandom(genEasy) + ` ${dia}`;
  mediumEl.innerText = genRandom(genMedium) + ` ${dia}${dia}`;
  hardEl.innerText = genRandom(genHard) + ` ${dia}${dia}${dia}`;
  document.getElementById("shuffle").style.display = "none";
  round += 1
  roundEl.innerText = round
}

// choosing random words
function genRandom(arr) {
    return arr.splice(Math.floor(Math.random() * arr.length), 1);
}

// countdown per difficulty
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

// countown function
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
    clearInterval(countdown);
  }
}

// passing turn
document.getElementById("giveup").addEventListener("click", giveup);
function giveup() {
if (genHard.length === 0) return gameEnd();
  shuffle();
  toggleTeam();
}

// correct answer
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

function toggleTeam() {
  teamTurn *= -1;
}

//Overall reset of the game.
document.getElementById("restart1").addEventListener("click", reset);
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
