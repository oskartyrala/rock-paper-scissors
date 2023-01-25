const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#round-result");
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
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    const popup = document.createElement("div");
    popup.classList.add("popup");

    if (playerLife > computerLife) {
        const result = document.createElement("p");
        result.textContent = `Congratulations, you win!`;
        popup.appendChild(result);
    } else if (playerLife < computerLife) {
        const result = document.createElement("p");
        result.textContent = `The machine won. Better luck next time!`;
        popup.appendChild(result);
    }

    const reset = document.createElement("button");
    reset.textContent = "Reset";

    reset.addEventListener("click", () => {
        roundResult.textContent = "";
        popup.style.display = "none";
        for (life of lives) {
            life.classList.add("full");
        popup.remove();
        reset.remove();
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
        }

    })

    popup.appendChild(reset);

    document.body.appendChild(popup);

    playerLife = 3;
    computerLife = 3;
    roundNumber = 0;
}

// Play a game of rock, paper, scissors. Keep playing rounds until one of the 
// players reaches 3 points, at which point exit the loop and declare the winner.
function playTo3(e) {

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

