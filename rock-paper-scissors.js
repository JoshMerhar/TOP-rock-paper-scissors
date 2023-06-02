const choices = ["rock", "paper", "scissors"];

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
        console.log("It's a draw!");
        return result = "It's a draw!";
    } else if ((computerSelection === "rock" && playerSelection != "paper") 
        || (computerSelection === "paper" && playerSelection != "scissors") 
        || (computerSelection === "scissors" && playerSelection != "rock")) {
        console.log("The computer wins! " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ".");
        return result = "The computer wins!";
    } else {
        console.log("You win! " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".");
        return result = "You win!";
    }
}

function game() {
    let scoreCap = 5;
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < scoreCap && computerScore < scoreCap) {
        result = playRound(computerSelection, playerSelection);
        if (result === "The computer wins!") {
            computerScore++;
        } else if (result === "You win!") {
            playerScore++;
        } else {
            continue;
        }
    }
    if (playerScore > computerScore) {
        console.log("You beat the machine!");
    } else if (playerScore < computerScore) {
        console.log("The computer wins!");
    }
    console.log("Your score: " + playerScore);
    console.log("Computer's score: " + computerScore);
}

console.log(game());