// Prompt the user for their choice
var userChoice = prompt("Choose Rock, Paper, or Scissors");

// Generate a random choice for the computer
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "Rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "Paper";
} else {
  computerChoice = "Scissors";
}

// Compare the choices and determine the winner
if (userChoice === computerChoice) {
  alert("It's a tie!");
} else if (userChoice === "Rock") {
  if (computerChoice === "Paper") {
    alert("Computer wins!");
  } else {
    alert("You win!");
  }
} else if (userChoice === "Paper") {
  if (computerChoice === "Scissors") {
    alert("Computer wins!");
  } else {
    alert("You win!");
  }
} else if (userChoice === "Scissors") {
  if (computerChoice === "Rock") {
    alert("Computer wins!");
  } else {
    alert("You win!");
  }
} else {
  alert("Invalid input!");
}