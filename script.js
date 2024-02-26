document.addEventListener('DOMContentLoaded', function() {


let responses = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;
let draws = 0;
let playerSelection;

let playerScore = document.querySelector('#playerscore')
let computerScore = document.querySelector('#computerscore')
let drawScore = document.querySelector('#draws')
let finalResult = document.querySelector('#finalresult')

const gameButtons = document.querySelector('.button')
const rockbtn = document.querySelector('#rock')
const paperbtn = document.querySelector('#paper')
const scissorsbtn = document.querySelector('#scissors')
const clearBtn = document.querySelector('#cleargame')
const roundUpdate = document.querySelector('#roundupdate')

const startGamebtn = document.querySelector('#startgame')


startGamebtn.textContent = "Start Game"

startGamebtn.addEventListener('click', function() {
    playGame()
    
})

const endGamebtn = document.querySelector('#endgame')
let resultBox = document.querySelector('#resultbox')

endGamebtn.textContent = "End Game"

endGamebtn.addEventListener('click', function() {
        playGame()
})

clearBtn.textContent = "Reset Game"

clearBtn.addEventListener('click', function() {
    playerSelectionBox.textContent = ''
    computerSelectionBox.textContent = ''
    resultBox.textContent = ''
    playerWins = 0
    computerWins = 0
    draws = 0
    playerScore.textContent = ''
    computerScore.textContent = ''
    drawScore.textContent = ''
    roundUpdate.textContent = ''
    finalResult.textContent = ''
})


let computerSelectionBox = document.querySelector('#computerselect')

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * responses.length)
    const computerLog = responses[computerChoice]
    let computerLogCapital = computerLog.charAt(0).toUpperCase() + computerLog.slice(1)
    computerSelectionBox.textContent = "Computer Selected: " + computerLogCapital
    return computerLog
}


let playerSelectionBox = document.querySelector('#playerselect')
    
    rockbtn.addEventListener('click', function() {
        game('rock')
        playerSelectionBox.textContent = "Player Selected: Rock"
        playerSelection = "rock"
        updateScore()   
    })
    
    paperbtn.addEventListener('click', function() {
        game('paper')
        playerSelectionBox.textContent = "Player Selected: Paper"
        playerSelection = "paper"
        updateScore()
    })
    
    scissorsbtn.addEventListener('click', function() {
        game('scissors')
        playerSelectionBox.textContent = "Player Selected: Scissors"
        playerSelection = "scissors"
        updateScore()
    })
    
    function updateScore() {
        playerScore.textContent = "Player Score: " + playerWins
        computerScore.textContent = "Computer Score: " + computerWins
        drawScore.textContent = "Draws: " + draws
    }
    

function game(playerSelection, computerSelection = getComputerChoice()) {
    
    let gameResult;

    if (playerSelection === "rock" && computerSelection === "scissors"
      ||playerSelection === "paper" && computerSelection === "rock"
      ||playerSelection === "scissors" && computerSelection === "paper") {
        roundUpdate.textContent = "You won this round!"
        gameResult = 'win'
        } 
        
    if (playerSelection === "scissors" && computerSelection === "rock"
        ||playerSelection === "rock" && computerSelection === "paper"
        ||playerSelection === "paper" && computerSelection === "scissors"){
        roundUpdate.textContent = "You lost this round!"
        gameResult = 'lose'
        } 

    if (playerSelection === "rock" && computerSelection === "rock" 
      ||playerSelection === "paper" && computerSelection === "paper"
      ||playerSelection === "scissors" && computerSelection === "scissors") {
        roundUpdate.textContent = "Its a draw!"
        gameResult = 'draw'
    }

    if (playerSelection === null || playerSelection === undefined || playerSelection === 0) {
        console.log("Invalid input!")
    }

    if (gameResult === 'win') {
        ++playerWins;
    } else if (gameResult === 'lose') {
        ++computerWins;
    } else if (gameResult === 'draw') {
        ++  draws;
    } 

    return gameResult

}

function playGame(){
    
    updateScore()
    if (playerWins > computerWins) {
        finalResult.textContent = "Player Wins the Game!"
    } else if (playerWins < computerWins) {
        finalResult.textContent = "Computer Wins the Game!" 
    } else if (draws > computerWins || draws > playerWins) {
        finalResult.textContent = "The Game ends in a Draw!" 

    }

    
}



})

