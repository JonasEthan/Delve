import { Controller } from "@hotwired/stimulus"
import PlayerStatus  from "../utils/player_status"
import EnemyStatus from "../utils/enemy_status";
import AdventuringText from "../utils/adventuring_text";

// importing the JS Classes From Utils Folder for our Player and Enemy

// Connects to data-controller="test-fight"
export default class extends Controller {
  static values = { enemy: Object, player: Object, disorder: Object}
  static targets = ["enemyHealth", "playerHealth", "playerEnergy"]
  connect() {
    // creates the instances of our Player and Enemy for JS with the given Object parameters
   this.player = new PlayerStatus(this.playerValue.health, this.playerValue.energy, this.playerValue.attack_damage);
   this.enemy = new EnemyStatus(this.enemyValue.name, this.enemyValue.health, this.enemyValue.energy, this.enemyValue.attack_damage, this.enemyValue.boss);
   this.narrator = new AdventuringText;
   this.narrator.checkDialog(this.enemy.name);
  }

  // Handels the attack on the player
  attackPlayer(){
    // checks if our current enemy is a boss or not and then gives it a different damage range
    if(this.enemyValue.boss){
      // Calls the PlayerStatus funtion for the player to take damage
      this.player.enemyAttack((this.enemyValue.attack_damage + Math.floor(Math.random() * 6)));
      this.updateView();
      // check the players health for loose conditon
      this.player.checkHealth(this.disorderValue.meltdown_text);
    }else{
      // Calls the PlayerStatus funtion for the player to take damage
      this.player.enemyAttack(this.enemyValue.attack_damage + Math.floor(Math.random() * 3));
      this.updateView();
      // check the players health for loose conditon
      this.player.checkHealth(this.disorderValue.meltdown_text);
    }
  }

  //static attackTimeOut = setTimeout(this.attackPlayer(), 1000);

  // Is called when player clicks the "Attack" button on the view
  attackEnemy(){
    // Checks if the win or loose conditions are met or not
    if (this.enemy.health > 0 && this.player.health > 0){
      // enemy takes damage
      this.enemy.playerAttack(this.player.damage + Math.floor(Math.random() * 6));
      this.updateView();
      this.enemy.checkHealth();
      // checks if the enemy is still alive or not
      if (this.enemy.health > 0 ){
        // Attacks the player if the previous condition is true
        setTimeout(() => {
          this.attackPlayer();
        }, 500);
      }
    }
    console.log(Math.floor(Math.random() * 101) % 20)
  }

  // gets triggered when the player clicks the button "Opt Out"
  playerOptOut(){
    alert(this.disorderValue.meltdown_text);
  }

  // Updates the entire HTML so that the View is dynamic
  updateView() {
    this.playerHealthTarget.value = this.player.health;
    this.playerEnergyTarget.value = this.player.energy;
    this.enemyHealthTarget.value = this.enemy.health;
  }
}
