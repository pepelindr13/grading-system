var inputScore = document.getElementById("inp")
var song = new Audio("audios/fucx.mp3")
var songE = new Audio("audios/mumu.mp3")
var songD = new Audio("audios/songD.mp3")
var songC = new Audio("audios/songC.mp3")
var songB = new Audio("audios/SongB.mp3")
var songA = new Audio("audios/songA.mp3")
function check() {
 if (inputScore.value >= 0 && inputScore.value < 40 ){
  empty.style.color = "red"
  empty.innerHTML = "'F'  You Failed😥🤢!"
  song.play()
 }
else if (inputScore.value >= 40 && inputScore.value < 45){
  empty.style.color = "orange"
  empty.innerHTML = "'E' Failure😥!"
  songE.play()
}
else if (inputScore.value >= 45 && inputScore.value < 50 ){
  empty.style.color = "brown"
  empty.innerHTML = "'D'  You Passed🙄!"
  songD.play()
}
else if (inputScore.value >= 50 && inputScore.value < 60 ){
  empty.style.color = "yellow"
  empty.innerHTML = "'C'  Good Job🙂!"
  songC.play()
}
else if (inputScore.value >= 60 && inputScore.value < 70 ){
  empty.style.color = "teal"
  empty.innerHTML = "'B'   Great Job😊🎇!"
  songB.play()
}
else if (inputScore.value >= 70 && inputScore.value <= 100){
  empty.style.color = "green"
  empty.innerHTML = "'A'   Excellent Job👍🙌🤗!"
  songA.play()
}
else if(inputScore.value > 100){
  empty.style.color = "red"
  empty.innerHTML = "Invalid!"
}
else if(inputScore.value < 0){
  empty.style.color = "red"
  empty.innerHTML = "Invalid!"
}
}