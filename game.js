const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");
const restartGameBtn = document.getElementById("restart-game-btn");

rockBtn.addEventListener("click", ()=> playGame("Rock"));
paperBtn.addEventListener("click", ()=> playGame("Paper"));
scissorsBtn.addEventListener("click", ()=> playGame("Scissors"));
restartGameBtn.addEventListener("click", restartGame);

const screen = document.getElementById("screen");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const finalScore = document.getElementById("final-score");
const level = document.getElementById("level");
const levelScreen = document.getElementById("level-screen");

let playerCount = 1;
let computerCount = 1;
let maxScoreCount = 6;
let levelCount = 2;


const optionsArray = ["Rock", "Paper", "Scissors"];
function playGame(playerChoice){
  const computerChoice = optionsArray[Math.floor(Math.random() * optionsArray.length)];
  
  if(playerChoice === computerChoice){
    screen.innerHTML = `
    <p>You chose ${playerChoice} and the computer chose ${computerChoice}</p>
    <p>It's a tie!🫰</p>
    `
  }else if(
    playerChoice === "Rock" && computerChoice === "Scissors" ||
    playerChoice === "Paper" && computerChoice === "Rock" ||
    playerChoice === "Scissors" && computerChoice === "Paper"
    ){
    playerScore.textContent = `${playerCount++}`;
    screen.innerHTML = `
    <p>You chose ${playerChoice} and the computer chose ${computerChoice}</p>
    <p>You've got a point!👏</p>
    `
    
        if(playerCount === maxScoreCount){
          screen.innerHTML = `
          <p>The games has ended!</p>
          <p>Congratilation! you've won the game!</p>
          <p class="win-icon">🕺</p>
          `
          restartGameBtn.style.display = "block";
          rockBtn.style.display = "none";
          paperBtn.style.display = "none";
          scissorsBtn.style.display = "none";
          
          level.textContent = `${levelCount++}`
          levelScreen.innerHTML = `
          <h4>You've moved to the next level!</h4>
          `
          
        }
  }else{
       computerScore.textContent = `${computerCount++}`;
    screen.innerHTML = `
    <p>You chose ${playerChoice} and the computer chose ${computerChoice}</p>
    <p>The computer got a point! 🥵</p>
    ` 
          if(computerCount === maxScoreCount){
          screen.innerHTML = `
          <p>The games has ended!</p>
          <p>The computer has won the game!</p>
          <p class="win-icon">😭</p>
          `
          restartGameBtn.style.display = "block";
          rockBtn.style.display = "none";
          paperBtn.style.display = "none";
          scissorsBtn.style.display = "none";
        }
  }
  
}

function restartGame(){
  playerCount = 1;
  computerCount = 1; 
  
  playerScore.textContent = "";
  computerScore.textContent = "";
  screen.innerHTML = "";
  levelScreen.innerHTML = "";
  
  restartGameBtn.style.display = "none";
  rockBtn.style.display = "block";
  paperBtn.style.display = "block";
  scissorsBtn.style.display = "block";
}

const introSection = document.getElementById("intro-section");
const gameSection = document.getElementById("game-section");

function startGame(){
  introSection.classList.add("hidden");
  gameSection.classList.remove("hidden");
}
