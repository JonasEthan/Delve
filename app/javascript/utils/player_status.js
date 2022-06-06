export default class PlayerStatus {
  constructor(health, energy, damage) {
    this.health = health;
    this.energy = energy;
    this.damage = damage;
  }

  // This is the attack of the Enemy so This here reduces the Health of the player
  enemyAttack(attackDamage) {
    // This statement is to see if the Enemy crits
    if((Math.floor(Math.random() * 101)) % 20 === 0){
      // alert("Enemy CRIT!");
      return this.health -= Math.floor(attackDamage * 1.5);
    }else{
      return this.health -= attackDamage;
    }
  }

  // This is run to check if the health of the player is above 0 the massage given to it is the disorder meltdown_text
  checkHealth(message){
    if(this.health <= 0) {
      alert(message);
    }
  }

  abilityAction(abilityName){
    switch (abilityName) {
      case "Healing":
        if(this.checkEnergy(this.energy)){
          this.energy -= 5;
          this.health += (10 + Math.floor(Math.random() * 11));
        }else{
          alert("Not enough energy");
        }
        break;

      default:
        alert("Something seems to have gone wrong");
        break;
    }
  }

  // This will check if the Energy of the Player is enough for a ability. (Just structure for now, not used yet)
  checkEnergy(energy){
    if(this.energy <= energy){
      return true;
    }else{
      return false;
    }
  }
}
