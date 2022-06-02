export default class PlayerStatus {
  constructor(health, energy, damage) {
    this.health = health;
    this.energy = energy;
    this.damage = damage;
  }

  enemyAttack(attackDamage) {
    if((Math.floor(Math.random() * 101)) % 20 === 0){
      // alert("Enemy CRIT!");
      return this.health -= Math.floor(attackDamage * 1.5);
    }else{
      return this.health -= attackDamage;
    }
  }

  checkHealth(message){
    if(this.health <= 0) {
      alert(message);
    }
  }

  checkEnergy(energy){
    if(this.energy <= energy){
      return true;
    }else{
      return false;
    }
  }
}
