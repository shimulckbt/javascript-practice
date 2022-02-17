const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxLife = 100;
let currentMonsterLife = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
   const damage = dealMonsterDamage(ATTACK_VALUE);
   currentMonsterLife -= damage;
   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
   currentPlayerLife -= playerDamage;
   if (currentMonsterLife <= 0) {
      alert('You Won');
   } else if (currentPlayerLife <= 0) {
      alert('You Lost');
   }


}

attackBtn.addEventListener('click', attackHandler);