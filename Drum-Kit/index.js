var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "black";

    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var audio = new Audio("sounds/w.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/a.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/s.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/d.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/j.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/k.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/l.mp3");
        audio.play();
        break;
      default:
        console.log(buttonInnerHTML);
    }
  });
}

/* for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "black";

    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var audio = new Audio("sounds/w.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/a.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/s.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/d.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/j.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/k.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/l.mp3");
        audio.play();
        break;
      default:
        console.log(buttonInnerHTML);
    }
  });
} */
