const buttons = document.querySelectorAll("button");
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

    document.getElementById("rock").style.border = "";
    document.getElementById("scissors").style.border = "";
    document.getElementById("paper").style.border = "";

    document.getElementById("machine-rock").style.border = "";
    document.getElementById("machine-scissors").style.border = "";
    document.getElementById("machine-paper").style.border = "";

    if (manChoice === machineChoice) {
        return "draw";
    }

    if (manChoice === "rock" && machineChoice === "scissors" ||
        manChoice === "paper" && machineChoice === "rock" ||
        manChoice === "scissors" && machineChoice === "paper") {

            return "manWin";
        }
    
    if (manChoice === "rock" && machineChoice === "paper" ||
        manChoice === "paper" && machineChoice === "scissors" ||
        manChoice === "scissors" && machineChoice === "rock") {

            return "machineWin";
        };
    };

    // Announces the results and resets the score and round counter.
function gameOver() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    const cover = document.createElement("div");
    cover.classList.add("cover");
    document.body.appendChild(cover);

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
    reset.classList.add("reset");
    reset.textContent = "Play again";

    reset.addEventListener("click", () => {
        document.getElementById("rock").style.border = "";
        document.getElementById("scissors").style.border = "";
        document.getElementById("paper").style.border = "";
    
        document.getElementById("machine-rock").style.border = "";
        document.getElementById("machine-scissors").style.border = "";
        document.getElementById("machine-paper").style.border = "";
        popup.style.display = "none";
        for (life of lives) {
            life.src = "./img/heart-full-icon.svg";
        }
        cover.remove();
        popup.remove();
        reset.remove();
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;

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
        currentLife.src = `./img/heart-empty-icon.svg`;
        document.getElementById(e.currentTarget.id).style.border = "3px solid #41E2BA";
        switch (e.currentTarget.id) {
            case "rock":
                document.getElementById("machine-scissors").style.border = "3px solid #E86A92";
                break;

            case "paper":
                document.getElementById("machine-rock").style.border = "3px solid #E86A92";
                break;

            case "scissors":
                document.getElementById("machine-paper").style.border = "3px solid #E86A92";
                break;
        }
        --machineLife;
    } else if (roundResult === "machineWin") {
        const currentLife = document.getElementById(`man-${manLife}`);
        currentLife.src = `./img/heart-empty-icon.svg`;
        document.getElementById(e.currentTarget.id).style.border = "3px solid #E86A92";
        switch (e.currentTarget.id) {
            case "rock":
                document.getElementById("machine-paper").style.border = "3px solid #41E2BA";
                break;

            case "paper":
                document.getElementById("machine-scissors").style.border = "3px solid #41E2BA";
                break;

            case "scissors":
                document.getElementById("machine-rock").style.border = "3px solid #41E2BA";
                break;
        }
        --manLife;
    } else if (roundResult === "draw") {
        console.log("Doing this");
        document.getElementById(e.currentTarget.id).style.border = "3px solid #FFD700";
        document.getElementById(`machine-${e.currentTarget.id}`).style.border = "3px solid #FFD700";
    }

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

