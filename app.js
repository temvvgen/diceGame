// Тоглогчийн идэвхитэй байгаа утгыг хадгалах
var activePlayer = 0;

// тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа огоог хадгалах хувьсагч
var roundScore = 0;
// шооны хэд буусныг хадгалах хувьсагч
var dice = Math.floor(Math.random() * 6) + 1;

// window.document.querySelector("#score-1").textContent = dice;

// window.document.querySelector("#score-2").innerHTML = "<em>yes<em>";

// Программ эхлэхэд бэлтгэе

document.querySelector("#score-1").textContent = "0";
document.querySelector("#score-2").textContent = "0";
document.querySelector("#current-1").textContent = "0";
document.querySelector("#current-2").textContent = "0";
document.querySelector(".dice").style.display = "none";
console.log("шоо : " + dice);
