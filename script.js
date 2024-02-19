let responses = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;
let draws = 0;


function getComputerChoice() {
    
    const computerChoice = Math.floor(Math.random() * responses.length)

    return responses[computerChoice]
}

function game(playerSelection, computerSelection = getComputerChoice()) {
    
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let gameResult;

    let playerSelect = prompt("Rock, Paper, or Scissors?", "Rock")
    playerSelection = playerSelect.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        gameResult = "You Win!"
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        gameResult = "You Lose!"
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        gameResult = "You Win!"
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            gameResult = "You Lose!"
        }
    
    if (playerSelection === scissors && computerSelection === paper) {
        gameResult = "You Win!"
    } else if (playerSelection === paper && computerSelection === scissors){
        gameResult = "You Lose!"
    }

    if (playerSelection === computerSelection) {
        gameResult = "It's A Draw!"
    }

    if (playerSelection === null || undefined || 0) {
        gameResult = "No input Given"
    }

    return gameResult


}

function playGame(){
    let result;
    for(let i = 0; i < 5; i++) {
        result = game();
    }
    if (result === "You Win!") {
        playerWins++;
    } else if (result === "You Lose!") {
        computerWins++;
    } else if (result === "It's A Draw!") {
        draws++;
    }

    if (playerWins > computerWins) {
        return "Player Wins!"
    } else if (computerWins > playerWins) {
        return "Computer Wins!"
    } else if (computerWins === playerWins) {
        return "Draw"
    }

}



// when playGame is executed
// run game function
// keep score of wins 
// announce winner or loser at end



// when user inputs rock, paper, or scissors
// Randomly pick rock, paper, or scissors and repond


// when user inputs a value
//check if value is greater or less than computer selection
//if true, tell user they won
//if false, tell user they lost