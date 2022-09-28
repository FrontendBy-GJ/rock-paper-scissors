const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playerChoice() {
  let valid = false;
  while (valid == false) {
    const choice = prompt('Rock Paper or Scissors');
    if (choice == null || '') {
      continue;
    }
    const choiceLwrCase = choice.toLowerCase();
    if (choices.includes(choiceLwrCase)) {
      valid = true;
      return choiceLwrCase;
    }
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You Win!';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You Win!';
  } else if (playerSelection == 'scissors' && computerSelection == `paper`) {
    return 'You Win!';
  } else if (playerSelection == computerSelection) {
    return 'Tie!';
  } else {
    return 'You Lose!';
  }
}

function playRound(playerSelection, computerSelection) {
  const win_or_lose = checkWinner(playerSelection, computerSelection);

  if (win_or_lose == 'You Win!') {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (win_or_lose == 'You Lose!') {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return "It's a Tie!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    console.log(`Round ${i + 1}`);
    console.log(playRound(playerSelection, computerSelection));

    if (checkWinner(playerSelection, computerSelection) == 'You Win!') {
      playerScore++;
    } else if (checkWinner(playerSelection, computerSelection) == 'You Lose!') {
      computerScore++;
    }
  }
  console.log('Game Over!');
  if (playerScore > computerScore) {
    console.log('Player Wins!');
  } else if (playerScore < computerScore) {
    console.log('Computer Wins!');
  } else {
    console.log(`It's a tie!`);
  }
  console.log(
    `Final Results\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`
  );
}
game();
