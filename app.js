// Тоглогчийн идэвхитэй байгаа утгыг хадгалах
var activePlayer = 1;

// тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа огоог хадгалах хувьсагч
var roundScore = 0;
// шооны хэд буусныг хадгалах хувьсагч
var diceNumber = Math.floor(Math.random() * 6) + 1;

// window.document.querySelector("#score-1").textContent = dice;

// window.document.querySelector("#score-2").innerHTML = "<em>yes<em>";

// Программ эхлэхэд бэлтгэе

document.getElementById("score-1").textContent = "0";
document.getElementById("score-2").textContent = "0";

document.getElementById("current-1").textContent = "0";
document.getElementById("current-2").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
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
    document.getElementById("current-" + activePlayer).textContent = roundScore;
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
});

// hold товчны eventlistener
document.querySelector(".btn-hold").addEventListener("click", function () {
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
  if (scores[0] >= 20) {
    document.getElementById("name-1").textContent = "WINNER!";
    document.querySelector(".player-1-panel").classList.add("winner");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".btn-hold").style.display = "none";
    document.querySelector(".btn-roll").style.display = "none";
  } else if (scores[1] >= 20) {
    document.getElementById("name-2").textContent = "WINNER";
    document.querySelector(".player-2-panel").classList.add("winner");
    ocument.querySelector(".player-1-panel").classList.remove("active");
  } else {
    switchToNextPlayer();
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
