export default class EnemyStatus {
  constructor(name, health, energy, damage, boss) {
    this.name = name;
    this.health = health;
    this.energy = energy;
    this.damage = damage;
    this.boss = boss;
  }

  playerAttack(attackDamage) {
    return this.health -= attackDamage;
  }

  checkHealth(){
    if(this.health <= 0) {
      alert(`You have overcome ${this.name}`);
    }
  }
}
