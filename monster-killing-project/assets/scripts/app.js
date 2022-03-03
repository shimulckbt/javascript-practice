const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;

let currentMonsterLife = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
   currentPlayerLife -= playerDamage;
   if (currentMonsterLife <= 0 && currentPlayerLife > 0) {
      alert('You Won');
   } else if (currentPlayerLife <= 0 && currentMonsterLife > 0) {
      alert('You Lost');
   } else if (currentPlayerLife <= 0 && currentMonsterLife <= 0) {
      alert(`It's a draw`);
   }
}

function attackMonster(mode) {
   let maxDamage;
   if (mode === 'ATTACK') {
      maxDamage = ATTACK_VALUE;
   } else if (mode === 'STRONG_ATTACK') {
      maxDamage = STRONG_ATTACK_VALUE;
   }

   const damage = dealMonsterDamage(maxDamage);
   currentMonsterLife -= damage;
   endRound();
}

function attackHandler() {
   attackMonster('ATTACK');
}

function strongAttackHandler() {
   attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
   increasePlayerHealth(HEAL_VALUE);
   endRound();
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)