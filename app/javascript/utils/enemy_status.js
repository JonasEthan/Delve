export default class EnemyStatus {
  constructor(name, health, energy, damage, boss) {
    this.name = name;
    this.health = health;
    this.energy = energy;
    this.damage = damage;
    this.boss = boss;
  }

  playerAttack(attackDamage) {
    if((Math.floor(Math.random() * 101)) % 10 === 0){
      // alert("Player CRIT!");
      return this.health -= Math.floor(attackDamage * 1.5);
    }else{
      return this.health -= attackDamage;
    }
  }

  checkHealth(){
    if(this.health <= 0) {
      alert(`You have overcome ${this.name}`);
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
