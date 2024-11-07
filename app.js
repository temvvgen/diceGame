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

    // 1буусан бол тоглогчийн ээлжийг солих
    // идэвхтэй тоглогчийг солих
    if (activePlayer === 1) {
      activePlayer = 2;
    } else {
      activePlayer = 1;
    }

    // улаан цэгийг шилжүүлэх
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".player-2-panel").classList.toggle("active");

    //шоог түр алга болгоно.
    if (diceNumber === 1) {
      diceDom.style.display = "none";
      diceDom.style.transition =
        "opacity .3s ease, display 0.6s ease allow-discrete";
    }
  }
});
