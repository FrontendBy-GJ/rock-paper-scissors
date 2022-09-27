const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  const win = `You Win! ${playerSelection} beats ${computerSelection}`;

  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return win;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return win;
  } else if (playerSelection == 'scissors' && computerSelction == `paper`) {
    return win;
  } else if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerChoice = 'rock';
console.log(playRound(playerChoice, getComputerChoice()));
