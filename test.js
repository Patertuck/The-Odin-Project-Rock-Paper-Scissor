function getComputerChoice() {
  var choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return "Draw";
  }
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Loose! Paper beats Rock";
  }
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Loose! Rock beats Scissors";
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissor beats Paper";
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Loose! Scissors beats Paper";
  }
}

function game() {
  var wins_player = 0;
  var wins_computer = 0;

  while (wins_player < 3 && 3 > wins_computer) {
    var playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    var computer_selection = getComputerChoice();
    var result = playRound(playerSelection, computer_selection);

    if (result.includes("Win")) {
      wins_player++;
    }
    if (result.includes("Loose")) {
      wins_computer++;
    }

    console.log(`Computer pick : ${computer_selection}\n${result}\nStanding: ${wins_player} to ${wins_computer}`);
  }
}

game();
