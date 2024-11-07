// Тоглогчийн идэвхитэй байгаа утгыг хадгалах
var activePlayer = 0;

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

console.log("шоо : " + diceNumber);

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
