function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      return "win";
    } else if (computerSelection == "paper") {
      return "lose";
    } else {
      return "tie";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "win";
    } else if (computerSelection == "scissors") {
      return "lose";
    } else {
      return "tie";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return "win";
    } else if (computerSelection == "rock") {
      return "lose";
    } else {
      return "tie";
    }
  }
  return "invalid";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let topScore = 0;

  while (topScore < 3) {
    let playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    let computerChoice = getComputerChoice();

    let result = playRound(playerChoice, computerChoice);

    if (result == "win") {
      playerScore += 1;
      console.log(`You win! ${playerChoice} beats ${computerChoice}`);
      console.log(`Score: player ${playerScore} - Computer ${computerScore}`);
    } else if (result == "lose") {
      computerScore += 1;
      console.log(`You win! ${computerChoice} beats ${playerChoice}`);
      console.log(`Score: player ${playerScore} - Computer ${computerScore}`);
    } else if (result == "tie") {
      console.log("It's a tie.");
      console.log(`Score: player ${playerScore} - Computer ${computerScore}`);
    } else {
      console.log("Invalid input.");
      console.log(`Score: player ${playerScore} - Computer ${computerScore}`);
    }

    topScore = playerScore;
    if (computerScore > playerScore) {
      topScore = computerScore;
    }
  }

  if (playerScore == 3) {
    console.log(
      `You won the game! Player ${playerScore} - Computer ${computerScore}`
    );
  } else {
    console.log(
      `You lost the game. Player ${playerScore} - Computer ${computerScore}`
    );
  }
}
