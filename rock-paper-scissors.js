let choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    let selection = choices[(Math.floor(Math.random() * choices.length))];
    return selection;
}

let playerSelection;
const computerSelection = getComputerChoice(choices);
let result;

function playRound(computerSelection, playerSelection) {
    playerSelection = prompt("Choose your fighter: ").toLowerCase();
    if (computerSelection === playerSelection) {
        return result = "It's a draw!";
    } else if ((computerSelection === "rock" && playerSelection != "paper") 
        || (computerSelection === "paper" && playerSelection != "scissors") 
        || (computerSelection === "scissors" && playerSelection != "rock")) {
        return result = "The computer wins!";
    } else {
        return result = "You win!";
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(computerSelection, playerSelection);
        if (result === "The computer wins!") {
            computerScore++;
            i++;
        } else if (result === "You win!") {
            playerScore++;
            i++;
        } else if (result === "It's a draw!") {
            i++;
        }
        console.log(result);
    }
}

console.log(game(computerSelection, playerSelection));