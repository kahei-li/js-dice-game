// js for dicee.html
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png"
var randomImage2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

var result = randomNumber1 - randomNumber2;
var outputMessage = ""

if(result > 0){
  outputMessage = "Player 1 Wins!";
} else if (result < 0) {
  outputMessage = "Player 2 Wins!";
} else {
  outputMessage = "Its a draw! Booo!";
}

document.querySelector("h1").innerHTML = outputMessage;
