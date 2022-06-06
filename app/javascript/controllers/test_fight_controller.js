import { Controller } from "@hotwired/stimulus"
import PlayerStatus  from "../utils/player_status"
import EnemyStatus from "../utils/enemy_status";
import AdventuringText from "../utils/adventuring_text";

// importing the JS Classes From Utils Folder for our Player and Enemy

// Connects to data-controller="test-fight"
export default class extends Controller {
  static values = { enemy: Array, player: Object, disorder: Object}
  static targets = ["enemyName", "enemyHealth", "playerHealth", "playerEnergy"]
  connect() {
    // creates the instances of our Player and Enemy for JS with the given Object parameters
    this.n = 0;
    this.player = new PlayerStatus(this.playerValue.health, this.playerValue.energy, this.playerValue.attack_damage);
    this.enemy = new EnemyStatus(this.enemyValue[this.n].name, this.enemyValue[this.n].health, this.enemyValue[this.n].energy, this.enemyValue[this.n].attack_damage, this.enemyValue[this.n].boss);
    // this is used for the healthbar of the enemys
    this.maxhealth = this.enemy.health;
    this.updateView();
    this.narrator = new AdventuringText;
    this.narrator.checkDialog(this.enemy.name);
    console.log(this.enemy);
  }

  // when the current enemy is defeated this reasigns the new enemy
  do(){
    if(this.n > 0){
      this.enemy.name = this.enemyValue[this.n].name;
      this.enemy.health = this.enemyValue[this.n].health;
      this.enemy.energy = this.enemyValue[this.n].energy;
      this.enemy.damage = this.enemyValue[this.n].attack_damage;
      this.enemy.boss = this.enemyValue[this.n].boss;
      // reasigned to properly show the healthbar
      this.maxhealth = this.enemy.health;
      this.updateView();
      this.narrator.checkDialog(this.enemy.name);
    }
    console.log(this.enemy);
  }

  // Handels the attack on the player
  attackPlayer(){
    // checks if our current enemy is a boss or not and then gives it a different damage range
    if(this.enemy.boss){
      // Calls the PlayerStatus funtion for the player to take damage
      this.player.enemyAttack((this.enemy.damage + Math.floor(Math.random() * 6)));
      this.updateView();
      // check the players health for loose conditon
      this.player.checkHealth(this.disorderValue.meltdown_text);
    }else{
      // Calls the PlayerStatus funtion for the player to take damage
      this.player.enemyAttack((this.enemy.damage + Math.floor(Math.random() * 3)));
      this.updateView();
      // check the players health for loose conditon
      this.player.checkHealth(this.disorderValue.meltdown_text);
    }
  }


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
          this.attackPlayer()
        }, 500);
      }else{
        this.n += 1;
        this.do();
      }
    }else{
      this.n += 1;
      this.do();
    }
  }

  // gets triggered when the player clicks the button "Opt Out"
  playerOptOut(){
    alert(this.disorderValue.meltdown_text);
  }

  // Updates the entire HTML so that the View is dynamic
  updateView() {
    this.enemyNameTarget.innerText = this.enemy.name
    this.playerHealthTarget.value = this.player.health;
    this.playerEnergyTarget.value = this.player.energy;
    this.enemyHealthTarget.max = this.maxhealth;
    this.enemyHealthTarget.value = this.enemy.health;
  }
}
