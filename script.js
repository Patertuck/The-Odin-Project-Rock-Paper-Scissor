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
  const announce = document.querySelector(".announce");
  const standings = document.querySelector(".standings");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const playerSelection = e.target.id;
      const computerSelection = getComputerChoice();

      const result = playRound(playerSelection, computerSelection);
      announce.innerHTML = result;

      if (result.includes("Win")) {
        wins_player++;
      }
      if (result.includes("Loose")) {
        wins_computer++;
      }

      if (wins_player === 3 || wins_computer === 3) {
        buttons.forEach((button) => {
          button.disabled = true;
        });

        if (wins_player === 3) {
          announce.innerHTML += "<br>You won the game!";
        } else {
          announce.innerHTML += "<br>Computer won the game!";
        }
      }
      standings.innerHTML = `You: ${wins_player} Computer: ${wins_computer}`;
    });
  });
}

const buttons = document.querySelectorAll("button");
game();
