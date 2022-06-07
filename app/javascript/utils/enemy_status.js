export default class EnemyStatus {
  constructor(name, health, energy, damage, boss) {
    this.name = name;
    this.health = health;
    this.energy = energy;
    this.damage = damage;
    this.boss = boss;
  }

  // This function is the attack of the Player. The enemy health gets damaged
  playerAttack(attackDamage) {
    // This statement is to see if the Player crits
    if((Math.floor(Math.random() * 101)) % 10 === 0){
      // alert("Player CRIT!");
      return this.health -= Math.floor(attackDamage * 1.5);
    }else{
      return this.health -= attackDamage;
    }
  }

  specialAbility(enemyName, number) {
    switch (enemyName) {
      case "The Witness":
        alert("Horrible Gaze!");
        this.energy -= 5;
        break;
      case "The Stalker":
        alert("Horrible Gaze!");
        this.energy -= 5;
        break;
      default:
        alert("Something went wrong");
        break;
    }
  }

  // Checks for the health of the enemy and give the win reaction as soon it reaches 0 or less
  checkHealth(){
    if(this.health <= 0) {
      alert(`You have overcome ${this.name}`);
    }
  }

  // This checks the energy from the enemy, and if there is enough (Not functioning yet, not used yet)
  checkEnergy(energy){
    if(this.energy >= energy){
      return true;
    }else{
      return false;
    }
  }
}
