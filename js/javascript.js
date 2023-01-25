const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#round-result");
const roundCompare = document.querySelector("#round-compare");
const currentTally = document.querySelector("#current-tally");
const finalScore = document.querySelector("#final-score");
let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;

// Play a game of rock, paper, scissors. Keep playing rounds until one of the 
// players reaches 3 points, at which point exit the loop and declare the winner.
function playTo3(e) {
    finalScore.textContent = "";
// Keep playing rounds until one of the competitors reaches 3 points.
    roundNumber++;
    const roundResult = playRound(e.target.id, getComputerChoice());
    if (roundResult === "playerWin") {
        ++playerScore;
    } else if (roundResult === "computerWin") {
        ++computerScore;
    };
    currentTally.textContent = `Player score: ${playerScore}. Computer score: ${computerScore}`;

    if (playerScore === 3 || computerScore === 3) {
        gameOver();
    }

};
function gameOver() {
    finalScore.textContent = `The final score is ${playerScore}:${computerScore}.`;
    if (playerScore > computerScore) {
        finalScore.textContent += ` Congratulations, you win!`;
    } else if (playerScore < computerScore) {
        finalScore.textContent += ` The machine won. Better luck next time!`;
    } else {
        finalScore.textContent += ` It's a draw!`;
    }
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
}

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
    roundCompare.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.`
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            roundResult.textContent =  "It's a draw!";
            return "draw";
        } else if (computerChoice === "paper") {
            roundResult.textContent =  "You lose!";
            return "computerWin";
        } else if (computerChoice === "scissors") {
            roundResult.textContent =  "You win!";
            return "playerWin";
        }
    
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            roundResult.textContent =  "You win!";
            return "playerWin";
        } else if (computerChoice === "paper") {
            roundResult.textContent =  "It's a draw!";
            return "draw";
        } else if (computerChoice === "scissors") {
            roundResult.textContent =  "You lose!";
            return "computerWin";
        }
    
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            roundResult.textContent =  "You lose!";
            return "computerWin";
        } else if (computerChoice === "paper") {
            roundResult.textContent =  "You win!";
            return "playerWin";
        } else if (computerChoice === "scissors") {
            roundResult.textContent =  "It's a draw!";
            return "draw";
        }
    };
    };

for (button of buttons) {
    button.addEventListener("click", (e) => {
        playTo3(e);
    })
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