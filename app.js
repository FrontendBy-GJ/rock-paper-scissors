const choices = ['rock', 'paper', 'scissors'];
let results = document.querySelector('.results');
const buttons = document.querySelectorAll('button');
let playerScoreResult = document.querySelector('.player-score');
let computerScoreResult = document.querySelector('.computer-score');
let winner = document.querySelector('.winner');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
  ) {
    results.innerText = `Win! ${playerSelection} beats ${computerSelection}`;
    playerScoreResult.innerText = `Player Score: ${(playerScore += 1)}`;
  } else if (playerSelection == computerSelection) {
    results.innerText = `Tie! ${playerSelection} - ${computerSelection}`;
  } else {
    results.innerText = `Lose! ${computerSelection} beats ${playerSelection}`;
    computerScoreResult.innerText = `Computer Score: ${(computerScore += 1)}`;
  }

  if (playerScore >= 5 || computerScore >= 5) {
    results.innerText = 'Game Over!';
    buttons.forEach((btn) => {
      btn.disabled = true;
    });
  }

  if (playerScore >= 5) {
    winner.innerText = 'You Win!';
  } else if (computerScore >= 5) {
    winner.innerText = 'You Lose!';
  }
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    playRound(e.target.id);
  });
});
