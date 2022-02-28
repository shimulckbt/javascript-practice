const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxLife = 5;
let currentMonsterLife = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
   const damage = dealMonsterDamage(ATTACK_VALUE);
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
attackBtn.addEventListener('click', attackHandler);