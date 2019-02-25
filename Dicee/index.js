var randomNumbers = [6, 6];
var playerImages = ["", ""];

for (var i = 0; i < 2; i++) {
  randomNumbers[i] = Math.floor(Math.random() * 6 + 1);
  playerImages[i] = "images/dice" + randomNumbers[i] + ".png";
}

document.querySelector(".img1").setAttribute("src", playerImages[0]);
document.querySelector(".img2").setAttribute("src", playerImages[1]);

if (randomNumbers[0] > randomNumbers[1]) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins!";
} else if (randomNumbers[0] < randomNumbers[1]) {
  document.querySelector("h1").innerText = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerText = "Draw!";
}
