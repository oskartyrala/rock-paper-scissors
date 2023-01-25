const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#round-result");
const currentTally = document.querySelector("#current-tally");
const finalScore = document.querySelector("#final-score");
const lives = document.querySelectorAll(".life");
let roundNumber = 0;
let playerLife = 3;
let computerLife = 3;

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

// Play one round of rock, paper, scissors
function playRound(playerChoice, computerChoice) {
    roundResult.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.`;

    if (playerChoice === computerChoice) {
        roundResult.textContent += " It's a draw!";
        return "draw";
    }

    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            roundResult.textContent += " You lose!";
            return "computerWin";
        } else if (computerChoice === "scissors") {
            roundResult.textContent += " You win!";
            return "playerWin";
        };
    
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            roundResult.textContent += " You win!";
            return "playerWin";
        } else if (computerChoice === "scissors") {
            roundResult.textContent += " You lose!";
            return "computerWin";
        };
    
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            roundResult.textContent += " You lose!";
            return "computerWin";
        } else if (computerChoice === "paper") {
            roundResult.textContent += " You win!";
            return "playerWin";
        };
    };
    };

    // Announces the results and resets the score and round counter.
function gameOver() {
    finalScore.textContent = `The final score is ${playerLife}:${computerLife}.`;

    if (playerLife > computerLife) {
        finalScore.textContent += ` Congratulations, you win!`;
    } else if (playerLife < computerLife) {
        finalScore.textContent += ` The machine won. Better luck next time!`;
    }

    playerLife = 3;
    computerLife = 3;
    roundNumber = 0;
}

// Play a game of rock, paper, scissors. Keep playing rounds until one of the 
// players reaches 3 points, at which point exit the loop and declare the winner.
function playTo3(e) {

    finalScore.textContent = "";
    if (roundNumber === 0) {
        for (life of lives) {
            life.classList.add("full");
        }
    }

    console.log(e);
    roundNumber++;
    const roundResult = playRound(e.currentTarget.id, getComputerChoice());
    if (roundResult === "playerWin") {
        const currentLife = document.getElementById(`machine-${computerLife}`);
        currentLife.classList.remove("full");
        --computerLife;
    } else if (roundResult === "computerWin") {
        const currentLife = document.getElementById(`player-${playerLife}`);
        currentLife.classList.remove("full");
        --playerLife;
    };

    currentTally.textContent = `Player life: ${playerLife}. Computer life: ${computerLife}`;

    // Stop playing and announce the results one of the competitors reaches 3 points.
    if (playerLife === 0 || computerLife === 0) {
        gameOver();
    };
};


for (button of buttons) {
    button.addEventListener("click", (e) => {
        playTo3(e);
    });
};