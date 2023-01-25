const buttons = document.querySelectorAll("button");

// Play a game of rock, paper, scissors. Keep playing rounds until one of the 
// players reaches 3 points, at which point exit the loop and declare the winner.
function playTo3() {
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 0;

// Keep playing rounds until one of the competitors reaches 3 points.
while (playerScore < 3 && computerScore < 3) {
    roundNumber++;
    console.group(`Round ${roundNumber}`);
    const roundResult = playRound(getPlayerChoice(), getComputerChoice());
    if (roundResult === "playerWin") {
        ++playerScore;
    } else if (roundResult === "computerWin") {
        ++computerScore;
    };
    console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`);
    console.groupEnd(`Round ${roundNumber}`);
};

// Declare the winner
console.group("Game over");
if (playerScore > computerScore) {
    console.log(`The final score is ${playerScore}:${computerScore}.`);
    console.log(`Congratulations, you win!`);
} else if (playerScore < computerScore) {
    console.log(`The final score is ${playerScore}:${computerScore}.`);
    console.log(`The machine won. Better luck next time!`);
} else {
    console.log(`The final score is ${playerScore}:${computerScore}.`);
    console.log(`It's a draw!`);
}
console.groupEnd("Game over");
};

// Play a game of rock, paper, scissors. Play 5 rounds, at which point exit the 
// loop and declare the winner.
function play5Rounds() {
    let playerScore = 0;
    let computerScore = 0;

// Play exactly 5 rounds.
for(i = 1; i < 6; i++) {
console.group(`Round ${i}`);
const roundResult = playRound(getPlayerChoice(), getComputerChoice());
if (roundResult === "playerWin") {
    ++playerScore;
} else if (roundResult === "computerWin") {
    ++computerScore;
};
console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`);
console.groupEnd(`Round ${i}`);

};

// Declare the winner.
console.group("Game over");
if (playerScore > computerScore) {
    console.log(`The final score is ${playerScore}:${computerScore}.`);
    console.log(`Congratulations, you win!`);
} else if (playerScore < computerScore) {
    console.log(`The final score is ${playerScore}:${computerScore}.`);
    console.log(`The machine won. Better luck next time!`);
} else {
    console.log(`The final score is ${playerScore}:${computerScore}.`);
    console.log(`It's a draw!`);
}
console.groupEnd("Game over");
};

// Play one round of rock, paper, scissors
function playRound(playerChoice, computerChoice) {

    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            console.log(`You chose ${playerChoice}. 
                The computer chose ${computerChoice}. It's a draw!`);
            return "draw";
        } else if (computerChoice === "paper") {
            console.log(`You chose ${playerChoice}. 
                The computer chose ${computerChoice}. You lose!`);
            return "computerWin";
        } else if (computerChoice === "scissors") {
            console.log(`You chose ${playerChoice}. 
                The computer chose ${computerChoice}. You win!`);
            return "playerWin";
        }
    
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            console.log(`You chose ${playerChoice}. 
                The computer chose ${computerChoice}. You win!`);
            return "playerWin";
        } else if (computerChoice === "paper") {
            console.log(`You chose ${playerChoice}. 
                The computer chose ${computerChoice}. It's a draw!`);
            return "draw";
        } else if (computerChoice === "scissors") {
            console.log(`You chose ${playerChoice}. 
                The computer chose ${computerChoice}. You lose!`);
            return "computerWin";
        }
    
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log(`You chose ${playerChoice}. 
                The computer chose ${computerChoice}. You lose!`);
            return "computerWin";
        } else if (computerChoice === "paper") {
            console.log(`You chose ${playerChoice}. 
                The computer chose ${computerChoice}. You win!`);
            return "playerWin";
        } else if (computerChoice === "scissors") {
            console.log(`You chose ${playerChoice}. 
                The computer chose ${computerChoice}. It's a draw!`);
            return "draw";
        }
    };
    };

// Ask the player's choice of rock, paper, scissors
function getPlayerChoice() {
    const playerChoice = prompt("Select your weapon!").toLowerCase();

    if (playerChoice === "rock" || 
        playerChoice === "paper" || 
        playerChoice === "scissors") {
        return playerChoice;
    } else {
        alert("Please select rock, paper, or scissors");
        return getPlayerChoice();
    }
}

// Generate computer's choice of rock, paper, scissors
function getComputerChoice() { 
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    };
};