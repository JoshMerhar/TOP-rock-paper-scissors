let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let selection = choices[(Math.floor(Math.random() * choices.length))];
    return selection;
}

let playerSelection;
let computerSelection;
let result;

function playRound(computerSelection, playerSelection) {
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt("Choose your fighter: ").toLowerCase();
    }
    computerSelection = getComputerChoice(choices);
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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        result = playRound(computerSelection, playerSelection);
        if (result === "The computer wins!") {
            computerScore++;
        } else if (result === "You win!") {
            playerScore++;
        }
        console.log(result);
    }
    if (playerScore > computerScore) {
        console.log("You beat the machine!");
    } else if (playerScore < computerScore) {
        console.log("The computer wins!");
    } else {
        console.log("It's a draw!");
    }
}

console.log(game());