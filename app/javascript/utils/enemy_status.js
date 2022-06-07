import PlayerStatus from "./player_status";

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

  specialAbility(enemyName, player, number) {
    switch (enemyName) {
      case "The Witness":
        if(this.checkEnergy(5)){
        alert("Horrible Gaze!");
        this.energy -= 5;
        player.loseEnergy(10);
        }else{
          alert("Not enough energy")
        }
        break;
      case "The Stalker":
        switch (number) {
          case 0:
            if(this.checkEnergy(5)){
              alert("Horrible Gaze!");
              this.energy -= 5;
              player.loseEnergy(10);
              }else{
                alert("Not enough energy")
              }
            break;
          case 1:
            if(this.checkEnergy(10)){
              alert("Trailing Gaze!");
              this.energy -= 10;
              }else{
                alert("Not enough energy")
              }
            break;
          default:
            alert("Something went wrong");
            break;
        }
        break;
      case "The Chain":
        if(this.checkEnergy(10)){
          alert("Dragging Constraints!");
          this.energy -= 10;
          player.enemyAttack((this.damage + (Math.floor(Math.random() * 11))));
          player.loseEnergy(5);
          }else{
            alert("Not enough energy")
          }
        break;
      case "The Abyss":
        switch (number) {
          case 0:
            if(this.checkEnergy(10)){
              alert("Dragging Constraints!");
              this.energy -= 10;
              player.enemyAttack((this.damage + (Math.floor(Math.random() * 11))));
              player.loseEnergy(5);
              }else{
                alert("Not enough energy")
              }
            break;
          case 1:
            if(this.checkEnergy(15)){
              alert("Haunting Darkness!");
              this.energy -= 15;
              const hautingDamage = (this.damage + (Math.floor(Math.random() * 11)));
              player.enemyAttack(hautingDamage);
              this.health += hautingDamage;
              }else{
                alert("Not enough energy")
              }
            break;
          default:
            alert("Something went wrong");
            break;
        }
        break;
      case "The Prosecutor":
        if(this.checkEnergy(5)){
          alert("Horrible Acusation!");
          this.energy -= 5;
          const energyLost = (Math.floor(Math.random() * 11))
          player.loseEnergy(energyLost);
          this.energy += energyLost;
          }else{
            alert("Not enough energy")
          }
        break;
      case "The Mask":
        switch (number) {
          case 0:
            if(this.checkEnergy(5)){
              alert("Horrible Acusation!");
              this.energy -= 5;
              const energyLost = (Math.floor(Math.random() * 11))
              player.loseEnergy(energyLost);
              this.energy += energyLost;
              }else{
                alert("Not enough energy")
              }
            break;
          case 1:
            if(this.checkEnergy(20)){
              alert("Hainous Laughter!");
              this.energy -= 20;
              const leechDamage = this.damage + (Math.floor(Math.random() * 16));
              player.enemyAttack(leechDamage);
              this.health += leechDamage;
              }else{
                alert("Not enough energy")
              }
            break;
          default:
            alert("Something went wrong");
            break;
        }
        break;
      case "Hysteria":
        if(this.checkEnergy(10)){
          alert("Hysteric Explosion!");
          this.energy -= 10;
          player.enemyAttack((this.damage + (Math.floor(Math.random() * 6))));
          console.log(player);
          player.enemyAttack((this.damage + (Math.floor(Math.random() * 6))));
          player.enemyAttack((this.damage + (Math.floor(Math.random() * 6))));
          console.log(player);
          }else{
            alert("Not enough energy")
          }
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
