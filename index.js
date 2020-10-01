
// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const britneyImage = document.getElementById("surprise")
const gagaImage = document.getElementById("surprise2")
function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function endGame() {
    player1.style.display = "none"
    player2.style.display = "none"
}

function startGame () {
    player1.style.display = "block"
    player2.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.style.fontFamily = "cursive"
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
        britneyImage.style.display = "block"
        endGame();
    }  else if (player2Score >= 20) {
        message.style.fontFamily = "cursive"
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
        gagaImage.style.display = "block"
        endGame();
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    britneyImage.style.display = "none"
    gagaImage.style.display = "none"
    message.style.fontFamily = "arial black"
    startGame ();
}
