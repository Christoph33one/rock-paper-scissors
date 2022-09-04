const startButton = document.getElementById("startBnt");
const gameRules = document.getElementById("rules-bnt");
const gameContainer = document.getElementById("gameArea");
const gameScore = document.getElementById("gameScore")

const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");

const choiceButtons = document.querySelectorAll(".choiceBnt");

let player;
let computer;
let result;

startButton.addEventListener("click", enterGame)
gameRules.addEventListener("click", startgame)

function enterGame() {
    console.log("enterGame")
    startButton.classList.add("hide")
    gameRules.classList.remove("hide")

}

function startgame() {
    console.log("startgame")
    gameRules.classList.add("hide")
    gameContainer.classList.remove("hide")
   
}


choiceButtons.forEach(button => button.addEventListener("click",() => { 
    player = button.textContent;
    computerChoice();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

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
                    computer = "SCISSORS ";
                    break;

    }
    
}

function checkWinner() {
    if ( computer === player) {
        return  "Its a Draw!"
    }
    if (computer === "PAPER" && player === "SCISSORS") {
        return "You Won!"
        //incrementScore() 
    }
    if (computer === "PAPER" && player === "ROCK") {
        return "You Lost!"
        //incrementWrongAnswer()

    }
    if ( computer === "SCISSORS" && player === "PAPER") {
        return "You Lost"
        //incrementWrongAnswer()
    }
    if (computer === "SCISSORS" && player === "ROCK") {
        return "You Won!"
        //incrementScore()
    }
    if (computer === "ROCK" && player === "PAPER") {
        return"You Won!"
        //incrementScore()
    }
    if (computer === "ROCK" && player === "SCISSORS") {
        return "You Lost!"
        //incrementWrongAnswer()
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