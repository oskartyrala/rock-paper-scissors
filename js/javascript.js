const hearts = document.querySelectorAll(".heart");
const skills = document.querySelectorAll(".skill");
const skillButtons = document.querySelectorAll("button.skill");
let roundNumber = 0;
let manLife = 3;
let machineLife = 3;

for (skillButton of skillButtons) {
    skillButton.addEventListener("click", (e) => {
        playTo3(e);
    });
};

// Play a game of rock, paper, scissors. Keep playing rounds until one of the 
// players reaches 3 points, at which point launch the end-game procedure.
function playTo3(e) {

    roundNumber++;

    const roundResult = playRound(e.currentTarget.id, getmachineChoice());

    // Stop playing and announce the results one of the competitors reaches 3 points.
    if (manLife === 0 || machineLife === 0) {
        gameOver();
    };
};

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

// Play one round of rock, paper, scissors and display the result
function playRound(manChoice, machineChoice) {

    // Clear selection highlights
    for (skill of skills) {
        skill.classList.remove("win-border");
        skill.classList.remove("lose-border");
        skill.classList.remove("draw-border");
    }

    const manSkill = document.getElementById(manChoice);
    const machineSkill = document.getElementById(`machine-${machineChoice}`);

    // Draw scenario
    if (manChoice === machineChoice) {

        // Highlight chosen skills
        manSkill.classList.add("draw-border");
        machineSkill.classList.add("draw-border");

        return "draw";
    }

    // Player win scenario
    if (manChoice === "rock" && machineChoice === "scissors" ||
        manChoice === "paper" && machineChoice === "rock" ||
        manChoice === "scissors" && machineChoice === "paper") {

        // Reduce machine's life
        const currentLife = document.getElementById(`machine-${machineLife}`);
        currentLife.src = `./img/heart-empty-icon.svg`;
        --machineLife;

        // Highlight chosen skills
        manSkill.classList.add("win-border");
        machineSkill.classList.add("lose-border");
        
        return "manWin";
        }
    
    // Computer win scenario
    if (manChoice === "rock" && machineChoice === "paper" ||
        manChoice === "paper" && machineChoice === "scissors" ||
        manChoice === "scissors" && machineChoice === "rock") {

        // Reduce player's life
        const currentLife = document.getElementById(`man-${manLife}`);
        currentLife.src = `./img/heart-empty-icon.svg`;
        --manLife;

        //Highlight chosen skills
        manSkill.classList.add("lose-border");
        machineSkill.classList.add("win-border");

            return "machineWin";
        };
    };

    // Announce the results and resets the score and round counter.
function gameOver() {

    for (skillButton of skillButtons) {
        skillButton.disabled = true;
    }

    // Darken the background
    const cover = document.createElement("div");
    cover.classList.add("cover");
    document.body.appendChild(cover);

    // Create popup
    const popup = document.createElement("div");
    popup.classList.add("popup");

    // Display final result
    const result = document.createElement("p");

    if (manLife > machineLife) {
        result.textContent = `Congratulations, you win!`;
    } else if (manLife < machineLife) {
        result.textContent = `The machine won. Better luck next time!`;
    }

    popup.appendChild(result);

    // Create button to reset the game
    const reset = document.createElement("button");
    reset.classList.add("reset");
    reset.textContent = "Play again";

    reset.addEventListener("click", () => {
        for (skill of skills) {
            skill.classList.remove("win-border");
            skill.classList.remove("lose-border");
            skill.classList.remove("draw-border");
        }
    
        for (skillButton of skillButtons) {
            skillButton.disabled = false;
        }
    
        for (heart of hearts) {
            heart.src = "./img/heart-full-icon.svg";
        }
    
        cover.remove();
        popup.remove();
        reset.remove();
    })

    popup.appendChild(reset);
    document.body.appendChild(popup);

    // Reset game state
    manLife = 3;
    machineLife = 3;
    roundNumber = 0;
}
