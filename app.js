const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
  console.log(choice);
}
console.log(getComputerChoice(choices));
