const startButton = document.getElementById("startBnt");
const gameRules = document.getElementById("rules-bnt");
const gameContainer = document.getElementById("gameArea");
const gameScore = document.getElementById("gameScore")

const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");

const choiceButtons = document.querySelectorAll(".choiceBnt");

const resetGame = document.getElementById("resetGame");



let player;
let computer;
let result;



// event listenrs
startButton.addEventListener("click", enterGame);
gameRules.addEventListener("click", startgame);
resetGame.addEventListener("click", gameReset);



function enterGame() {
    startButton.classList.add("hide")
    gameRules.classList.remove("hide")
    gameScore.classList.add("hide")
    resetGame.classList.add("hide")


}

function startgame() {
    gameRules.classList.add("hide")
    gameContainer.classList.remove("hide")
    gameScore.classList.remove("hide")
    resetGame.classList.remove("hide")

   
}

// buttons
choiceButtons.forEach(button => button.addEventListener("click",() => { 
    player = button.textContent;
    computerChoice();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
    


}));
// computer choice of answers, Math.random to select a random answer
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
    break;
    }
}
// check answers and to notify player of a draw if the same value is picked by player and computer
function checkWinner() {
   
    if ( computer === player) {
        return  "Its a Draw!",
        gameDraws()
     
    }
    if (computer === "PAPER" && player === "PAPER") {
        return "Its a Draw!",
        playerScore()
        
    }
    if (computer === "SCISSORS" && player === "SCISSORS") {
        return "Its a Draw!",
        playerScore()
        
    }
    if (computer === "ROCK" && player === "ROCk") {
        return "Its a Draw!",
        playerScore()
        
    }
   
    if (computer === "PAPER" && player === "SCISSORS") {
        return "You Won!",
        playerScore()
      
        
    }
    if (computer === "PAPER" && player === "ROCK") {
        return "You Lost!",
        computerScore()
        
    }
    if ( computer === "SCISSORS" && player === "PAPER") {
        return "You Lost", 
        computerScore()
        
    }
    if (computer === "SCISSORS" && player === "ROCK") {
        return "You Won!",
        playerScore()

        
    }
    if (computer === "ROCK" && player === "PAPER") {
        return"You Won!",
        playerScore()
        
    }
    if (computer === "ROCK" && player === "SCISSORS") {
        return "You Lost!",
        computerScore()
        
    }
    
}

function playerScore() {
    let yourScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++yourScore;
}

function computerScore() {
   let yourScore = parseInt(document.getElementById("incorrect").innerText)
    document.getElementById("incorrect").innerText = ++yourScore;
}
function gameDraws() {
    let yourScore = parseInt(document.getElementById("draw").innerText)
   document.getElementById("draw").innerText = ++yourScore;

 }

function gameReset() { 
    gameContainer.classList.add("hide")
    gameScore.classList.add("hide")
    startButton.classList.remove("hide")
    resetGame.classList.add("hide")

}






