//original idea of array set up:
// function init(){
//     playerTurn = 1 //player 1
//     words = [null, null, null]
//      words = [easy, medium, hard];
// //    mainCard.innerText = ''
// }


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



// easy = words.[0]
// medium = words.[1]
// hard = words.[2]

// generate = [hard, med, easy];


// var genEasy = genEasy[Math.floor(Math.random() * 6)]
// var genMedium = genMedium[Math.floor(Math.random() * 6)]
// var genHard = genHard[Math.floor(Math.random() * 6)]


//Before
document.getElementById('init').addEventListener('click', genWord)
function genWord(e){ 
  easyEl.innerText = easy;
  mediumEl.innerText = words[1];
  hardEl.innerText = words[2]
}

//AFter:


function genRandom(arr){
    return arr.aplice(Math.floor(Math.random() * arr.length),1 )
}

//before
mediumEl.innerText = `${genMedium[Math.floor(Math.random() *genMedium.length)]} XX`
//after
mediumEl.innerText = genRandom(genMedium) + 'XX'

//alert in ternary
//    ? alert("team A won") : alert("team B won");


// TWO ways to write 
modalRestart.addEventListener('click',reset);
//OR 
modalRestart.addEventListener('click',function(){modalInst.style.display = "none"})