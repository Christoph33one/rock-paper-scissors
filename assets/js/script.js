
const startButton = document.getElementById("startBnt");
const gameRules = document.getElementById("rules-bnt");
const gameContainer = document.getElementById("gameArea");
const gameScore = document.getElementById("gameScore");
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const choiceButtons = document.querySelectorAll(".choiceBnt");
const resetGame = document.getElementById("resetGame");
let player;
let computer;

// Event listenrs for buttons
document.addEventListener("DOMContentLoaded",function() {
startButton.addEventListener("click", enterGame);
gameRules.addEventListener("click", startgame);
resetGame.addEventListener("click", gameReset);
});

// start game
function enterGame() {
    startButton.classList.add("hide");
    gameRules.classList.remove("hide");
    gameScore.classList.add("hide");
    resetGame.classList.add("hide");
}
// Begin game after game rules are displayed 
function startgame() {
    gameRules.classList.add("hide");
    gameContainer.classList.remove("hide");
    gameScore.classList.remove("hide");
    resetGame.classList.remove("hide");
}
// Choice buttons
choiceButtons.forEach(button => button.addEventListener("click",() => { 
    player = button.dataset.choice;
    computerChoice();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

/*
* A random case number (1,2,3) and it's value (ROCK,PAPER,SCIRSSORS) will be selected.
* Once selected, the value will be executed and shown to the user. 
*/
function computerChoice() {
    const randomNumber = Math.floor(Math.random () * 3) +1;
    switch(randomNumber) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
    }
}

/**
 * The checkWinner function gets the selected value from the user or comuter 
 * and returns if the player has lost of won. 
 * The score is then incremented and added to the checkWinner function.
*/
function checkWinner() {
    if ( computer === player) {
        gameDraws();
        return  "Its a Draw!";
    }
    if (computer === "PAPER" && player === "SCISSORS") {
        playerScore();
        return "You Won!";
    }
    if (computer === "PAPER" && player === "ROCK") {
        computerScore();
        return "You Lost!";
    }
    if ( computer === "SCISSORS" && player === "PAPER") {
        computerScore();  
        return "You Lost"; 
    }
    if (computer === "SCISSORS" && player === "ROCK") {
        playerScore();
        return "You Won!";
    }
    if (computer === "ROCK" && player === "PAPER") {
        playerScore();
        return"You Won!";
    }
    if (computer === "ROCK" && player === "SCISSORS") {
        computerScore();
        return "You Lost!";
    }  
}

/**
 * Increments playerScore, computerScore or gameDraw functions.
 * If a fucntion is called it increments the score to the checkWinner function.
 */
function playerScore() {
    let yourScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++yourScore;
}
function computerScore() {
    let yourScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++yourScore;
}
function gameDraws() {
    let yourScore = parseInt(document.getElementById("draw").innerText);
document.getElementById("draw").innerText = ++yourScore;

}
/**
 * Resets the game back to the start button
 * Resets all scores
 */
function gameReset() { 
    gameContainer.classList.add("hide");
    gameScore.classList.add("hide");
    startButton.classList.remove("hide");
    resetGame.classList.add("hide"); 
    resetScore();
}

/**
 * Resest game scores to zero
 * when resetScore is called in gameReset function
 */
function resetScore() {
    document.getElementById("score").innerText = 0;
    document.getElementById("incorrect").innerText = 0;
    document.getElementById("draw").innerText = 0;
}
