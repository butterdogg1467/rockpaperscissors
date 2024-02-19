let responses = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    
    const computerSelection = Math.floor(Math.random() * responses.length)

    return responses[computerSelection]
}

function game(playerSelection, computerSelection) {
    
    const rock = "rock"
    const paper = "paper"
    const scissors = "scissors"

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win!"
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose!"
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win!"
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You Lose!"
        }
    
    if (playerSelection === scissors && computerSelection === paper) {
        return "You Win!"
    } else if (playerSelection === paper && computerSelection === scissors){
        return "You Lose!"
    }

    if (playerSelection === computerSelection) {
        return "It's A Draw!"
    }

}






// when user inputs rock, paper, or scissors
// Randomly pick rock, paper, or scissors and repond


// when user inputs a value
//check if value is greater or less than computer selection
//if true, tell user they won
//if false, tell user they lost