const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#round-result");
const lives = document.querySelectorAll(".life");
let roundNumber = 0;
let manLife = 3;
let machineLife = 3;

// Generate machine's choice of rock, paper, scissors
function getmachineChoice() { 
    const machineChoice = Math.floor(Math.random() * 3);

    if (machineChoice === 0) {
        return "rock";
    } else if (machineChoice === 1) {
        return "paper";
    } else if (machineChoice === 2) {
        return "scissors";
    };
};

// Play one round of rock, paper, scissors
function playRound(manChoice, machineChoice) {
    roundResult.textContent = `You chose ${manChoice}. The machine chose ${machineChoice}.`;

    if (manChoice === machineChoice) {
        roundResult.textContent += " It's a draw!";
        return "draw";
    }

    if (manChoice === "rock" && machineChoice === "scissors" ||
        manChoice === "paper" && machineChoice === "rock" ||
        manChoice === "scissors" && machineChoice === "paper") {

            roundResult.textContent += " You win!";
            return "manWin";
        }
    
    if (manChoice === "rock" && machineChoice === "paper" ||
        manChoice === "paper" && machineChoice === "scissors" ||
        manChoice === "scissors" && machineChoice === "rock") {

            roundResult.textContent += " You lose!";
            return "machineWin";
        };
    };

    // Announces the results and resets the score and round counter.
function gameOver() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    const popup = document.createElement("div");
    popup.classList.add("popup");

    if (manLife > machineLife) {
        const result = document.createElement("p");
        result.textContent = `Congratulations, you win!`;
        popup.appendChild(result);
    } else if (manLife < machineLife) {
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

    manLife = 3;
    machineLife = 3;
    roundNumber = 0;
}

// Play a game of rock, paper, scissors. Keep playing rounds until one of the 
// mans reaches 3 points, at which point exit the loop and declare the winner.
function playTo3(e) {

    roundNumber++;
    const roundResult = playRound(e.currentTarget.id, getmachineChoice());
    if (roundResult === "manWin") {
        const currentLife = document.getElementById(`machine-${machineLife}`);
        currentLife.classList.remove("full");
        --machineLife;
    } else if (roundResult === "machineWin") {
        const currentLife = document.getElementById(`man-${manLife}`);
        currentLife.classList.remove("full");
        --manLife;
    };

    // Stop playing and announce the results one of the competitors reaches 3 points.
    if (manLife === 0 || machineLife === 0) {
        gameOver();
    };
};


for (button of buttons) {
    button.addEventListener("click", (e) => {
        playTo3(e);
    });
};

