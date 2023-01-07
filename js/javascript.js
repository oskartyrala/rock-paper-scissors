// Play a best-of-5 game of rock, paper, scissors;
// For each round of the game:

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

// Store player's choice in a variable;
// Compare the player's choice to the computer's choice;
// Log the result and the winner;
// Update the total score;
// Log the total score
// If one of the competitors reaches 3 points, end the game and declare the winner;