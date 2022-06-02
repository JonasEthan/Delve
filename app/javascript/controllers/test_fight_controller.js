import { Controller } from "@hotwired/stimulus"
import PlayerStatus  from "../utils/player_status"
import EnemyStatus from "../utils/enemy_status";

// Connects to data-controller="test-fight"
export default class extends Controller {
  static values = { enemy: Object, player: Object, disorder: Object}
  static targets = ["enemyHealth", "playerHealth", "playerEnergy"]
  connect() {
   this.player = new PlayerStatus(this.playerValue.health, this.playerValue.energy, this.playerValue.attack_damage);
   this.enemy = new EnemyStatus(this.enemyValue.name, this.enemyValue.health, this.enemyValue.energy, this.enemyValue.attack_damage, this.enemyValue.boss);
  }

  attackPlayer(){
    if(this.enemyValue.boss){
      this.player.enemyAttack((this.enemyValue.attack_damage + Math.floor(Math.random() * 6)));
      this.updateView();
      this.player.checkHealth(this.disorderValue.meltdown_text);
    }else{
      this.player.enemyAttack(this.enemyValue.attack_damage + Math.floor(Math.random() * 3));
      this.updateView();
      this.player.checkHealth(this.disorderValue.meltdown_text);
    }
  }

  attackEnemy(){
    if (this.enemy.health > 0 && this.player.health > 0){
      this.enemy.playerAttack(this.player.damage + Math.floor(Math.random() * 6));
      this.updateView();
      this.enemy.checkHealth();
      if (this.enemy.health > 0 ){
        this.attackPlayer();
      }
    }
  }

  updateView() {
    this.playerHealthTarget.innerText = this.player.health;
    this.enemyHealthTarget.innerText = this.enemy.health;
  }
}
