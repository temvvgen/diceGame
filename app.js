// global huwisagchid

// togloom duusgah tolowiin huwisagch
var newGame;
// Тоглогчийн идэвхитэй байгаа утгыг хадгалах
var activePlayer;

// тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores;

// тоглогчийн ээлжиндээ цуглуулж байгаа огоог хадгалах хувьсагч
var roundScore;
// шооны хэд буусныг хадгалах хувьсагч
var diceNumber;
// Программ эхлэхэд бэлтгэе
var diceDom;

// togloomiig ehlvvlne
initGame();

// togloomiig ehlvvleh func

function initGame() {
  newGame = true;
  // Тоглогчийн идэвхитэй байгаа утгыг хадгалах
  activePlayer = 1;

  // тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // тоглогчийн ээлжиндээ цуглуулж байгаа огоог хадгалах хувьсагч
  roundScore = 0;
  // шооны хэд буусныг хадгалах хувьсагч
  diceNumber = Math.floor(Math.random() * 6) + 1;

  // Программ эхлэхэд бэлтгэе

  document.getElementById("score-1").textContent = "0";
  document.getElementById("score-2").textContent = "0";

  document.getElementById("current-1").textContent = "0";
  document.getElementById("current-2").textContent = "0";
  diceDom = document.querySelector(".dice");
  diceDom.style.display = "none";

  document.getElementById("name-1").textContent = "Player 1";
  document.getElementById("name-2").textContent = "Player 2";

  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-2-panel").classList.remove("winner");

  document.querySelector(".player-1-panel").classList.add("active");
}

// шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (newGame === true) {
    // 1-6 хүртэл санамсаргүй нэр тоо гаргаж ирэх.
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // шооны зургыг веб дээр гаргаж ирнэ.
    diceDom.style.display = "block";

    // буусан шооны тоог дэлгэцэнд гаргана.
    diceDom.src = "dice-" + diceNumber + ".png";

    // буусан тоо нэгээс ялгаатай бол идэвхтэй тоглогчид оноо нэмнэ.
    if (diceNumber !== 1) {
      // 1ээс ялгаатай тоо буулаа. буусан тоог тоглогчид нэмж өгнө.
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // тоглогчийн ээлжинд цуглуулсан оноог тэглэх
      roundScore = 0;
      document.getElementById("current-" + activePlayer).textContent = 0;

      // идэвхтэй тоглогчийг солих
      switchToNextPlayer();

      //шоог түр алга болгоно.
      if (diceNumber === 1) {
        diceDom.style.display = "none";
        diceDom.style.transition =
          "opacity .3s ease, display 0.6s ease allow-discrete";
      }
    }
  }
});

// hold товчны eventlistener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (newGame === true) {
    // тоглогчийн ээлжиндээ цуглуулсан оноог нэмж хадгалах.
    if (activePlayer === 1) {
      scores[0] = scores[0] + roundScore;
    } else {
      scores[1] = scores[1] + roundScore;
    }
    document.getElementById("score-1").textContent = scores[0];
    document.getElementById("score-2").textContent = scores[1];

    diceDom.style.display = "none";

    // yalagchiig todruulah
    if (scores[0] >= 50) {
      yalagch();
    } else if (scores[1] >= 50) {
      yalagch();
    } else {
      switchToNextPlayer();
    }
  }
});

// toglogchiig solih function
function switchToNextPlayer() {
  // оноо хадгалсаны дараа ээлжийн оноог 0 болгоно
  document.getElementById("current-1").textContent = "0";
  document.getElementById("current-2").textContent = "0";
  roundScore = 0;

  // ээлж солино.
  if (activePlayer === 1) {
    activePlayer = 2;
  } else {
    activePlayer = 1;
  }

  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".player-2-panel").classList.toggle("active");
}

// yalagchiid todruulah func
function yalagch() {
  // togloomiig duussan tolowt oruulna
  newGame = false;

  document.getElementById("name-" + activePlayer).textContent = "WINNER!";
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("winner");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");
}

// new game eventlistener

document.querySelector(".btn-new").addEventListener("click", function () {
  initGame();
});
