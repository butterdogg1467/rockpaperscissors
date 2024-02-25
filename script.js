document.addEventListener('DOMContentLoaded', function() {


let responses = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;
let draws = 0;


const rockbtn = document.querySelector('#rock')
const paperbtn = document.querySelector('#paper')
const scissorsbtn = document.querySelector('#scissors')


function getComputerChoice() {
    
    const computerChoice= Math.floor(Math.random() * responses.length)
    const computerLog = responses[computerChoice]
    console.log(computerLog)
    return computerLog

}

function game(playerSelection, computerSelection = getComputerChoice()) {
    
    let gameResult;

    let playerSelect = document.querySelector('#playerselect')
    
    rockbtn.addEventListener('click', function() {
        game()
        playerSelect.textContent = "rock"
    })
    
    paperbtn.addEventListener('click', function() {
        game()
        playerSelect.textContent = "paper"
    })
    
    scissorsbtn.addEventListener('click', function() {
        game()
        playerSelect.textContent = "scissors"
    })

    if (playerSelect.textContent === "rock" && computerSelection === "scissors") {
        playerWins++;
        
    } else if (playerSelect.textContent === "scissors" && computerSelection === "rock"){
        computerWins++;
    }

    if (playerSelect.textContent === "paper" && computerSelection === "rock") {
        playerWins++;
        } else if (playerSelect.textContent === "rock" && computerSelection === "paper") {
            computerWins++;
        }
    if (playerSelect.textContent === "scissors" && computerSelection === "paper") {
        playerWins++;
    } else if (playerSelect.textContentn === "paper" && computerSelection === "scissors"){
        computerWins++;
    }

    if (playerSelect.textContent === computerSelection) {
        draws++;
    }

    if (playerSelection === null || playerSelection === undefined || playerSelection === 0) {
        console.log("Invalid input!")
    }

    return gameResult


}

function playGame(){
    let result;
    // for(let i = 0; i < 5; i++) {
        result = game();
    // }
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

})

