var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "img/" + randomDiceImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "img/dice" + randomNumber2 + ".png";

var img1 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSource2);
