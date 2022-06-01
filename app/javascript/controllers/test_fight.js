var playerHealth = document.getElementById('playerHealth');
var enemyHealth = document.getElementById('enemyHealth');

const attack = document.getElementById('attack');

attack.addEventListener("click", () =>{
  enemyHealth.innerText = enemyHealth.innerText - 5;
  console.log(enemyHealth);
  playerHealth.innerText = playerHealth.innerText - 5;
  console.log(playerHealth);
  if (enemyHealth.innerText <= 0){
    console.log("Enemy Defeated");
  }
});
