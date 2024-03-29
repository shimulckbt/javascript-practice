const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WINS';
const RESULT_COMPUTER_WIN = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
   const selection = prompt(`${ROCK
      }, ${PAPER}, or ${SCISSORS}`, '').toUpperCase();

   if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      alert(`Invalid Choice! We choose ${DEFAULT_USER_CHOICE
         } for you..!`);
      return DEFAULT_USER_CHOICE;
   }
   return selection;
};

const getComputerChoice = () => {
   const randomValue = Math.random();
   if (randomValue > 0.34) {
      return ROCK;
   } else if (randomValue > 0.67) {
      return PAPER;
   } else {
      return SCISSORS;
   }
};

const getWinner = (cChoice, pChoice) =>
   cChoice === pChoice
      ? RESULT_DRAW
      : (cChoice === ROCK && pChoice === PAPER) ||
         (cChoice === PAPER && pChoice === SCISSORS) ||
         (cChoice === SCISSORS && pChoice === ROCK)
         ? RESULT_PLAYER_WIN
         : RESULT_COMPUTER_WIN;

// const getWinner = (cChoice, pChoice) => {
//    if (cChoice === pChoice) {
//       return RESULT_DRAW;
//    } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
//       return RESULT_PLAYER_WIN;
//    } else {
//       return RESULT_COMPUTER_WIN;
//    }
// };

startGameBtn.addEventListener('click', () => {
   if (gameIsRunning) {
      return;
   }
   gameIsRunning = true;
   const playerSelection = getPlayerChoice();
   const computerSelection = getComputerChoice();
   const winner = getWinner(computerSelection, playerSelection);
   // console.log(winner);

   let message = `You picked ${playerSelection
      }, computer picked ${computerSelection}, therefore you `;
   if (winner === RESULT_DRAW) {
      message = message + 'had a draw.';
   } else if (winner === RESULT_PLAYER_WIN) {
      message = message + 'won.';
   } else {
      message = message + 'lost.';
   }
   alert(message);
   gameIsRunning = false;
});