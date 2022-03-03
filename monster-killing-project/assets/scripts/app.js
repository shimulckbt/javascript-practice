const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
let chosenMaxLife = 5;
let currentMonsterLife = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
   let maxDamage;
   if (mode === 'ATTACK') {
      maxDamage = ATTACK_VALUE;
   } else if (mode === 'STRONG_ATTACK') {
      maxDamage = STRONG_ATTACK_VALUE;
   }

   const damage = dealMonsterDamage(maxDamage);
   currentMonsterLife -= damage;
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

function attackHandler() {
   attackMonster('ATTACK');
}

function strongAttackHandler() {
   attackMonster('STRONG_ATTACK');
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)