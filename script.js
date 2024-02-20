let responses = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;
let draws = 0;


function getComputerChoice() {
    
    const computerChoice= Math.floor(Math.random() * responses.length)
    const computerLog = responses[computerChoice]
    console.log(computerLog)
    return computerLog

}

function game(playerSelection, computerSelection = getComputerChoice()) {
    
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let gameResult;

    let playerSelect = prompt("Rock, Paper, or Scissors?")
    playerSelection = playerSelect.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerWins++;
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerWins++;
        }
    if (playerSelection === scissors && computerSelection === paper) {
        playerWins++;
    } else if (playerSelection === paper && computerSelection === scissors){
        computerWins++;
    }

    if (playerSelection === computerSelection) {
        draws++;
    }

    if (playerSelection === null || playerSelection === undefined || playerSelection === 0) {
        console.log("Invalid input!")
    }

    return gameResult


}

function playGame(){
    let result;
    for(let i = 0; i < 5; i++) {
        result = game();
    }
    if (playerWins >= 5) {
        console.log("Player Wins!")
    } else if (result === "You Lose!") {
        console.log("Computer Wins!")
    } else {
        console.log("Draw")
    }

    console.log(playerWins);
    console.log(computerWins);
    console.log(draws);

    if (playerWins > computerWins) {
        console.log("Player Wins!")
    } else if (computerWins > playerWins) {
        console.log("Computer Wins!")
    } else if (draws === 5){
        console.log("Draw")
    }

}

playGame()

