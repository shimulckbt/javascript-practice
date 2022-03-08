const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACk';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_STRONG_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

////   Player Can Choose Max Life //////

const enteredValue = parseInt(prompt('Maximum Life You And The Monster.', '100'));

let chosenMaxLife = enteredValue;
let battleLog = [];


if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
   chosenMaxLife = 100;
}

let currentMonsterLife = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

/////       WriteToLog STARt     ////////

function writeToLog(ev, val, monsterLife, playerLife) {
   let logEntry;
   if (ev === LOG_EVENT_PLAYER_ATTACK) {
      logEntry = {
         event: ev,
         value: val,
         target: 'MONSTER',
         finalMonsterLife: monsterLife,
         finalPlayerLife: playerLife,
      };
   } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
      logEntry = {
         event: ev,
         value: val,
         target: 'MONSTER',
         finalMonsterLife: monsterLife,
         finalPlayerLife: playerLife,
      };
   } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
      logEntry = {
         event: ev,
         value: val,
         target: 'PLAYER',
         finalMonsterLife: monsterLife,
         finalPlayerLife: playerLife,
      };
   } else if (ev === LOG_EVENT_MONSTER_STRONG_ATTACK) {
      logEntry = {
         event: ev,
         value: val,
         target: 'PLAYER',
         finalMonsterLife: monsterLife,
         finalPlayerLife: playerLife,
      };
   } else if (ev === LOG_EVENT_PLAYER_HEAL) {
      logEntry = {
         event: ev,
         value: val,
         target: 'PLAYER',
         finalMonsterLife: monsterLife,
         finalPlayerLife: playerLife,
      };
   } else if (ev === LOG_EVENT_GAME_OVER) {
      logEntry = {
         event: ev,
         value: val,
         finalMonsterLife: monsterLife,
         finalPlayerLife: playerLife,
      };
   }
   battleLog.push(logEntry);
}

/////       WriteToLog END     ////////

function reset() {
   currentMonsterLife = chosenMaxLife;
   currentPlayerLife = chosenMaxLife;

   resetGame(chosenMaxLife);
}

function endRound() {
   const initialPlayerLife = currentPlayerLife;
   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
   currentPlayerLife -= playerDamage;

   if (currentPlayerLife <= 0 && hasBonusLife) {
      hasBonusLife = false;
      removeBonusLife();
      currentPlayerLife = initialPlayerLife;
      setPlayerHealth(initialPlayerLife);
      alert('You are already dead but bonus life saved you!');
   }
   if (currentMonsterLife <= 0 && currentPlayerLife > 0) {
      alert('You Won');
      reset();
   } else if (currentPlayerLife <= 0 && currentMonsterLife > 0) {
      alert('You Lost');
      reset();
   } else if (currentPlayerLife <= 0 && currentMonsterLife <= 0) {
      alert(`It's a draw`);
      reset();
   }
}

function attackMonster(mode) {
   let maxDamage;
   if (mode === MODE_ATTACK) {
      maxDamage = ATTACK_VALUE;
   } else if (mode === MODE_STRONG_ATTACK) {
      maxDamage = STRONG_ATTACK_VALUE;
   }

   const damage = dealMonsterDamage(maxDamage);
   currentMonsterLife -= damage;
   endRound();
}

function attackHandler() {
   attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
   attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
   let healValue;
   if (currentPlayerLife >= chosenMaxLife - HEAL_VALUE) {
      alert("You can't heal to more than your max initial health.");
      healValue = chosenMaxLife - currentPlayerLife;
   } else {
      healValue = HEAL_VALUE;
   }
   increasePlayerHealth(HEAL_VALUE);
   currentPlayerLife += HEAL_VALUE;
   endRound();
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)