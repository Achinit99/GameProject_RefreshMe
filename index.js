var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice-6.png

var randomImageSource = "img/" + randomDiceImage; // img/dice1.png - img/dice6.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "img/dice" + randomNumber2 + ".png";

var img1 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSource2);

// If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Play 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
