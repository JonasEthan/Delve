import { Controller } from "@hotwired/stimulus"
import PlayerStatus  from "../utils/player_status"
import EnemyStatus from "../utils/enemy_status";
import AdventuringText from "../utils/adventuring_text";
import GameLog from "../utils/game_log";
import { SVG } from "@svgdotjs/svg.js";
// import sweet_alert_controller from "./sweet_alert_controller";

// importing the JS Classes From Utils Folder for our Player and Enemy

// Connects to data-controller="test-fight"
export default class extends Controller {
  static values = { enemy: Array, player: Object, disorder: Object, special: Object, pictures: Array}
  static targets = ["enemyName", "enemyHealthPercent", "enemyHealth", "playerHealthPercent", "playerHealth", "playerEnergyPercent", "playerEnergy", "firstPicture", "secondPicture", "gameLog"]

  connect() {
    // creates the instances of our Player and Enemy for JS with the given Object parameters
    this.n = 0;
    this.player = new PlayerStatus(this.playerValue.health, this.playerValue.energy, this.playerValue.attack_damage);
    this.enemy = new EnemyStatus(this.enemyValue[this.n].name, this.enemyValue[this.n].health, this.enemyValue[this.n].energy, this.enemyValue[this.n].attack_damage, this.enemyValue[this.n].boss);
    this.picture = this.picturesValue[this.n];
    // this.pictureDisplay(this.picture);
    this.narrator = new AdventuringText;
    this.gameLog = new GameLog;
    //this.narrator.checkDialog(this.enemy.name);
    // this is used for the healthbar of the enemys
    this.enemyMaxhealth = this.enemy.health;
    this.gameLogAction = this.gameLog.gameLogText('connect')
    this.updateView();
  }

  // when the current enemy is defeated this reassigns the new enemy
  do() {
    if(this.n > 0){
      this.enemy.name = this.enemyValue[this.n].name;
      this.enemy.health = this.enemyValue[this.n].health;
      this.enemy.energy = this.enemyValue[this.n].energy;
      this.enemy.damage = this.enemyValue[this.n].attack_damage;
      this.enemy.boss = this.enemyValue[this.n].boss;
      // reasigned to properly show the healthbar
      this.enemyMaxhealth = this.enemy.health;
      this.picture = this.picturesValue[this.n];
      // The updating of the picture does not work correctly as of yet For some reason JS does not want to delete the firstChild node correctly
      this.firstPictureTarget.classList.add("hidden");
      this.secondPictureTarget.classList.remove("hidden");

      this.updateView();
      this.narrator.checkDialog(this.enemy.name);
    }
  }

  // Loads the svg pictures of our enemies
  pictureDisplay(picture) {
    /*const target = this.pictureTarget;
    var draw = SVG();
    var ajax = new XMLHttpRequest();
    ajax.open('GET', picture, true);
    ajax.send();
    console.log(target);
    ajax.onload = function(_e) {
      target.appendChild(draw.svg(ajax.responseText).node.firstChild);
    }*/
  }

  // Handles the attack on the player
  attackPlayer() {
    // checks if our current enemy is a boss or not and then gives it a different damage range
    switch (Math.floor(Math.random() * 2)) {
      case 0:
        if(this.enemy.boss){
          // Calls the PlayerStatus funtion for the player to take damage
          this.player.enemyAttack((this.enemy.damage + Math.floor(Math.random() * 6)));
          this.gameLogAction = this.gameLog.gameLogText('attack')
          this.updateView();
          // check the players health for loose conditon
          // !this.fightLoss()
          this.player.checkHealth(this.disorderValue.meltdown_text);
        } else {
          // Calls the PlayerStatus funtion for the player to take damage
          this.player.enemyAttack((this.enemy.damage + Math.floor(Math.random() * 3)));
          this.gameLogAction = this.gameLog.gameLogText('attack')
          this.updateView();
          // check the players health for loose conditon
          // !this.fightLoss()
          this.player.checkHealth(this.disorderValue.meltdown_text);
        }
        break;
      // This will handle the event of an special attack being used by the enemy
      case 1:
        // checks if the enemy is a boss or not
          if(this.enemy.boss){
           this.enemy.specialAbility(this.enemy.name, this.player, Math.floor(Math.random() * 2));
           this.gameLogAction = this.gameLog.gameLogText('attack')
           this.updateView();
          }else{
            this.enemy.specialAbility(this.enemy.name, this.player, Math.floor(Math.random() * 2));
            this.gameLogAction = this.gameLog.gameLogText('special')
            this.updateView();
          }
        break;
      default:
        alert("Something went wrong");
        break;
    }
  }


  // Is called when player clicks the "Attack" button on the view
  attackEnemy(){
    // Checks if the win or loose conditions are met or not
    if (this.enemy.health > 0 && this.player.health > 0){
      // enemy takes damage
      this.enemy.playerAttack(this.player.damage + Math.floor(Math.random() * 6));
      this.gameLogAction = this.gameLog.gameLogText('attack')
      this.updateView();
      // checks if the enemy is still alive or not
      if (this.enemy.health > 0 ){
        // Attacks the player if the previous condition is true
        setTimeout(() => {
          this.attackPlayer()
        }, 500);
      } else {
        // !this.fightWin()
        // this loads the next enemy of the array
        this.n += 1;
        this.do();
      }
    } else {
      // this loads the next enemy of the array
      this.n += 1;
      this.do();
    }
  }

  playerSpecial() {
    this.player.abilityAction(this.specialValue.name, this.specialValue.ability_cost);
    this.gameLogAction = this.gameLog.gameLogText('special')
    this.updateView();
    if (this.enemy.health > 0 ){
      // Attacks the player if the previous condition is true
      setTimeout(() => {
        this.attackPlayer()
      }, 500);
    } else {
      this.n += 1;
      this.do();
    }
  }

  // gets triggered when the player clicks the button "Opt Out" - replaced by sweetalert button
  // playerOptOut(){
  //   alert(this.disorderValue.meltdown_text);
  // }

  // Updates the entire HTML so that the View is dynamic
  updateView() {
    this.enemyNameTarget.innerText = this.enemy.name
    this.playerHealthPercentTarget.innerText = `${((this.player.health * 100) / this.player.maxHealth)}%`;
    this.playerHealthTarget.value = this.player.health;
    this.playerEnergyPercentTarget.innerText = `${Math.floor((this.player.energy * 100) /this.player.maxEnergy)}%`;
    this.playerEnergyTarget.value = this.player.energy;
    this.enemyHealthPercentTarget.innerText = `${Math.floor((this.enemy.health * 100) /this.enemyMaxhealth)}%`;
    this.enemyHealthTarget.max = this.enemyMaxhealth;
    this.enemyHealthTarget.value = this.enemy.health;
      this.gameLogTarget.insertAdjacentHTML("beforeend", this.gameLogAction)

    // this.pictureTarget.innerText.remove();
  }
}
