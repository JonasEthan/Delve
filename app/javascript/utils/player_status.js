import GameLog from "./game_log";

export default class PlayerStatus {
  constructor(health, energy, damage) {
    this.maxHealth = 100;
    this.health = health;
    this.maxEnergy =  50;
    this.energy = energy;
    this.damage = damage;
    this.gameLog = new GameLog;
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
  checkHealth() {
    if(this.health <= 0) {
      // alert(message);
      return this.gameLogAction = this.gameLog.gameLogText('energyLow');
    }
  }

  // This will be the collection of our Special Abilities for the player
  abilityAction(abilityName, enemy, abilityCost){
    // Checks the name and then does certain cases
    switch (abilityName) {
      case "Healing":
        // checks if the energy is enough to use it
        if(this.checkEnergy(abilityCost)){
          this.loseEnergy(abilityCost);
          this.health += (10 + Math.floor(Math.random() * 11));
          // if the healing would result in more than 100 health it sets the health to 100. Currently hardcoded needs to be changed later

          if(this.health > this.maxHealth){
            this.health = 100;
          }
          return this.gameLog.gameLogText("playerSpecial");
        } else {
          // For testing purposes for now
          return this.gameLogAction = this.gameLog.gameLogText('energyLow');
        }
        break;
      case "Heavy Strike":
        if(this.checkEnergy(abilityCost)){
          this.loseEnergy(abilityCost);
          enemy.palyerAttack((this.damage + (Math.floor(Math.random() * 11))));
          // if the healing would result in more than 100 health it sets the health to 100. Currently hardcoded needs to be changed later

          if(this.health > this.maxHealth){
            this.health = 100;
          }
          return this.gameLog.gameLogText("playerSpecial");
        } else {
          // For testing purposes for now
          return this.gameLogAction = this.gameLog.gameLogText('energyLow');
        }
        break;
        case "Reckless Attack":
          if(this.checkEnergy(abilityCost)){
            this.loseEnergy(abilityCost);
            const selfDamage = Math.floor(Math.random() * 101);
            enemy.palyerAttack((this.damage + (Math.floor(Math.random() * 11))));
            enemy.palyerAttack((this.damage + (Math.floor(Math.random() * 11))));
            // if the healing would result in more than 100 health it sets the health to 100. Currently hardcoded needs to be changed later
            if(this.health > this.maxHealth){
              this.health = 100;
            }else if(selfDamage % 10 === 0){
              this.health -= (this.damage + (Math.floor(Math.random() * 11)));
            }
            return this.gameLog.gameLogText("playerSpecial");
          } else {
            // For testing purposes for now
            return this.gameLogAction = this.gameLog.gameLogText('energyLow');
          }
          break;
      default:
        // if the action does not exists or is not being recognised. Check spelling!
        alert("Something seems to have gone wrong");
        break;
    }
  }

  // this makes the Player lose a certain amount of their Energy
  loseEnergy(lostEnergy) {
    this.energy -= lostEnergy;
  }

  // This will check if the Energy of the Player is enough for a ability. (Just structure for now, not used yet)
  checkEnergy(energy){
    if(this.energy >= energy) {
      return true;
    }else{
      return false;
    }
  }
}
