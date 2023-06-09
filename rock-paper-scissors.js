const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "What's your pick?";
container.appendChild(content);

const humanScore = document.createElement("div");
humanScore.classList.add("score");
humanScore.textContent = "Player: " + 0;
container.appendChild(humanScore);

const machineScore = document.createElement("div");
machineScore.classList.add("score");
machineScore.textContent = "Computer: " + 0;
container.appendChild(machineScore);

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let selection = choices[(Math.floor(Math.random() * choices.length))];
    return selection;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRound));
buttons.forEach(button => button.addEventListener("click", showWinner));

let scoreCap = 5;
let playerScore = 0;
let computerScore = 0;
let winner;

function playRound() {
    const playerSelection = this.id;
    const computerSelection = getComputerChoice(choices);
    if (playerScore === scoreCap || computerScore === scoreCap) {
        return;
    } else if (computerSelection === playerSelection) {
        content.textContent = "It's a draw!";
        return;
    } else if ((computerSelection === "rock" && playerSelection != "paper") 
        || (computerSelection === "paper" && playerSelection != "scissors") 
        || (computerSelection === "scissors" && playerSelection != "rock")) {
        content.textContent = "The computer wins! " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ".";
        computerScore++;
        machineScore.textContent = "Computer: " + computerScore;
        return;
    } else {
        content.textContent = "You win! " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".";
        playerScore++;
        humanScore.textContent = "Player: " + playerScore;
        return;
    }
}

function showWinner() {
    if (winner === "You beat the machine!" || winner === "The computer wins!") {
        return;
    } else if (playerScore === scoreCap) {
        winner = "You beat the machine!";
    } else if (computerScore === scoreCap) {
        winner = "The computer wins!";
    } else {
        return;
    }

    const gameOver = document.querySelector("#game-over");
    const theWinner = document.createElement("div");
    theWinner.classList.add("winner-message");
    theWinner.textContent = winner;
    gameOver.appendChild(theWinner);
    newGame();
}

function newGame() {
    const restart = document.querySelector("#new-game");
    const newGame = document.createElement("button");
    newGame.setAttribute("id", "restart-button");
    newGame.textContent = "Play again?";
    newGame.addEventListener("click", clearGame);
    restart.appendChild(newGame);
}

function clearGame() {
    const theWinner = document.querySelector(".winner-message");
    theWinner.remove();
    const newGame = document.querySelector("#restart-button")
    newGame.remove();
    content.textContent = "What's your pick?";
    humanScore.textContent = "Player: " + 0;
    playerScore = 0;
    machineScore.textContent = "Computer: " + 0;
    computerScore = 0;
    winner = "";
}
