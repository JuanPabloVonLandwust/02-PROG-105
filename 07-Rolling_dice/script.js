// UI elements
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const playersUi = [
    {
        current: document.getElementById("current--0"), 
        score: document.getElementById("score--0"), 
        player: document.querySelector(".player--0")
    },
    {
        current: document.getElementById("current--1"), 
        score: document.getElementById("score--1"), 
        player: document.querySelector(".player--1")
    } 
];

btnNew.addEventListener("click", restartGame);
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdCurrent);

const GOAL = 20;
let turn = 0;
const players = [{current: 0, hold: 0}, {current: 0, hold: 0}];

function restartGame() {
    console.log("Restarting...");
    turn = 0;
    playersUi[0].score.textContent = players[0].hold = 0;
    playersUi[1].score.textContent = players[1].hold = 0;
    playersUi[0].current.textContent = players[0].current = 0;
    playersUi[1].current.textContent = players[1].current = 0;
    disableButtons(false);
    switchBackground();
    switchBackgroundWinner(false);
} // restartGame()

function rollDice() {
    let diceRoll = Math.ceil(6 * Math.random());

    dice.src = "dice-" + diceRoll + ".png";

    if (diceRoll > 1) {
        players[turn].current += diceRoll;
        playersUi[turn].current.textContent = players[turn].current;
    }
    else
        switchPlayer();
    
    console.log("Current player rolled " + diceRoll);
} // rollDice()

function holdCurrent() {
    console.log("Holding current player score...")
    players[turn].hold += players[turn].current;
    playersUi[turn].score.textContent = players[turn].hold;

    if (!isGameOver())
        switchPlayer();
} // holdCurrent()

function switchPlayer() {
    console.log("Switching player...");
    players[turn].current = 0;
    playersUi[turn].current.textContent = players[turn].current;

    turn = (turn + 1) % 2;
    switchBackground();
} // switchPlayer()

function isGameOver() {
    if (players[turn].hold >= GOAL) {
        disableButtons(true);
        switchBackgroundWinner(true);
        console.log("The game has ended!");
        return true;
    }

    return false;
} // isGameOver()

function disableButtons(enabled) {
    btnRoll.disabled = enabled;
    btnHold.disabled = enabled;
} // disableButtons()

function switchBackground() {
    playersUi[turn].player.classList.add("player--active");
    playersUi[(turn + 1) % 2].player.classList.remove("player--active");            
} // switchBackground()

function switchBackgroundWinner(gameOver) {
    if (gameOver)
        playersUi[turn].player.classList.add("player--winner");
    else {
        playersUi[0].player.classList.remove("player--winner");
        playersUi[1].player.classList.remove("player--winner");
    }
} // switchBackgroundWinner()

restartGame();
