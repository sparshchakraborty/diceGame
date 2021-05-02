var player1 = "Player 1";
var player2 = "Player 2";

function editNames() {
  player1 = prompt("Enter Player 1 Name.");
  player2 = prompt("Enter Player 2 Name.");
  document.querySelector("p.player1").innerHTML = player1;
  document.querySelector("p.player2").innerHTML = player2;
}





function rollTheDice() {


  var randomDice1 = Math.floor(Math.random() * 6) + 1;
  var randomDice2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomDice1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomDice2 + ".png");

  if (randomDice1 == randomDice2) {

    document.querySelector("h1").innerText = "Draw";

  }
  else if(randomDice1>randomDice2){
    document.querySelector("h1").innerText = "The winner is " + player1 +". ";
  }
  else if(randomDice1<randomDice2){
    document.querySelector("h1").innerText = "The winner is " + player2 +". ";
  }
}
