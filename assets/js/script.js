const startButton = document.getElementById("startBnt");
const gameRules = document.getElementById("rules-bnt");
const gameContainer = document.getElementById("gameArea");
const gameScore = document.getElementById("gameScore")

const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");

const choiceButtons = document.querySelectorAll(".choiceBnt");

const gameEnd = document.getElementById("hide");
const gameReset = document.getElementById("resetGame");

let player;
let computer;
let result;

// event listenrs
startButton.addEventListener("click", enterGame)
gameRules.addEventListener("click", startgame)
gameReset.addEventListener("click", endGame)

function enterGame() {
    console.log("enterGame")
    startButton.classList.add("hide")
    gameRules.classList.remove("hide")
    gameScore.classList.add("hide")


}

function startgame() {
    console.log("startgame")
    gameRules.classList.add("hide")
    gameContainer.classList.remove("hide")
    gameScore.classList.remove("hide")

   
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
        return  "Its a Draw!"
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
// increment score
function playerScore() {
    
    let yourScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++yourScore;

}
function computerScore() {
    let yourScore = parseInt(document.getElementById("incorrect").innerText)
    document.getElementById("incorrect").innerText = ++yourScore;

}
function endGame() {
    console.log("endGame")
    //gameReset.classList.remove('hide')
    
}

