export default class PlayerStatus {
  constructor(health, energy, damage) {
    this.health = health;
    this.energy = energy;
    this.damage = damage;
  }

  enemyAttack(attackDamage) {
    return this.health -= attackDamage;
  }

  checkHealth(message){
    if(this.health <= 0) {
      alert(message);
    }
  }
}
