

// Generate computer's choice of rock, paper, scissors;
function getComputerChoice() { 
    let computerChoice = Math.floor(Math.random() * 3);

// Return computer's choice;
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
}

// Ask the player's choice of rock, paper, scissors;
function getPlayerChoice() {
    let playerChoice = prompt("Select your weapon!").toLowerCase();
// Return player's choice;
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        alert("Please select rock, paper, or scissors");
        return getPlayerChoice();
    }
}
    
// Compare the player's choice to the computer's choice;
// Log the result and the winner;
function playRound(playerChoice, computerChoice) {

if (playerChoice === "rock") {

    if (computerChoice === "rock") {
        console.log(`You chose ${playerChoice}. The computer chose ${computerChoice}. It's a draw!`);
        return "draw";
    } else if (computerChoice === "paper") {
        console.log(`You chose ${playerChoice}. The computer chose ${computerChoice}. You lose!`);
        return "computerWin";
    } else if (computerChoice === "scissors") {
        console.log(`You chose ${playerChoice}. The computer chose ${computerChoice}. You win!`);
        return "playerWin";
    }

} else if (playerChoice === "paper") {

    if (computerChoice === "rock") {
        console.log(`You chose ${playerChoice}. The computer chose ${computerChoice}. You win!`);
        return "playerWin";
    } else if (computerChoice === "paper") {
        console.log(`You chose ${playerChoice}. The computer chose ${computerChoice}. It's a draw!`);
        return "draw";
    } else if (computerChoice === "scissors") {
        console.log(`You chose ${playerChoice}. The computer chose ${computerChoice}. You lose!`);
        return "computerWin";
    }

} else if (playerChoice === "scissors") {

    if (computerChoice === "rock") {
        console.log(`You chose ${playerChoice}. The computer chose ${computerChoice}. You lose!`);
        return "computerWin";
    } else if (computerChoice === "paper") {
        console.log(`You chose ${playerChoice}. The computer chose ${computerChoice}. You win!`);
        return "playerWin";
    } else if (computerChoice === "scissors") {
        console.log(`You chose ${playerChoice}. You chose ${playerChoice}. The computer chose ${computerChoice}. It's a draw!`);
        return "draw";
    }

}

}


// Play a best-of-5 game of rock, paper, scissors;
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

// If one of the competitors reaches 3 points, end the game and declare the winner;

while (playerScore < 3 && computerScore < 3) {
// Update the total score;
let roundResult = playRound(getPlayerChoice(), getComputerChoice());
if (roundResult === "playerWin") {
    ++playerScore;
} else if (roundResult === "computerWin") {
    ++computerScore;
}

// Log the total score
console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`)
}
}





