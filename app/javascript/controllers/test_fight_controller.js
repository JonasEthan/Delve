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
  static values = { enemy: Object, player: Object, disorder: Object, special: Object, fightWin: String}
  static targets = ["enemyName", "enemyHealthPercent", "enemyHealth", "playerHealthPercent", "playerHealth", "playerEnergyPercent", "playerEnergy", "firstPicture", "gameLog"]

  sweetAlertController(){
    return this.application.getControllerForElementAndIdentifier(this.element, 'sweet-alert')
  }

  connect() {
    // creates the instances of our Player and Enemy for JS with the given Object parameters
    this.player = new PlayerStatus(this.playerValue.health, this.playerValue.energy, this.playerValue.attack_damage);
    this.enemy = new EnemyStatus(this.enemyValue.name, this.enemyValue.health, this.enemyValue.energy, this.enemyValue.attack_damage, this.enemyValue.boss);
    this.narrator = new AdventuringText;
    this.gameLog = new GameLog;
    // this is used for the healthbar of the enemys
    this.enemyMaxhealth = this.enemy.health;
    this.gameLogAction = this.gameLog.gameLogText('connect')
    this.sweetAlertController().fightStart(this.narrator.checkDialog(this.enemy.name));
    this.updateView();
  }

  // when the current enemy is defeated this reassigns the new enemy

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
          this.gameLogAction = this.gameLog.gameLogText('enemyAttack')
          this.updateView();
          // check the players health for loose conditon
          // !this.fightLoss()
          this.player.checkHealth(this.disorderValue.meltdown_text);
        } else {
          // Calls the PlayerStatus funtion for the player to take damage
          this.player.enemyAttack((this.enemy.damage + Math.floor(Math.random() * 3)));
          this.gameLogAction = this.gameLog.gameLogText('enemyAttack')
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
           this.gameLogAction = this.gameLog.gameLogText('enemySpecial') // might need to change for better flavor text
           this.updateView();
          }else{
            this.enemy.specialAbility(this.enemy.name, this.player, Math.floor(Math.random() * 2));
            this.gameLogAction = this.gameLog.gameLogText('enemySpecial') // might need to change for better flavor text
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
      this.gameLogAction = this.gameLog.gameLogText('playerAttack');
      this.updateView();
      // checks if the enemy is still alive or not
      if (this.enemy.health > 0 ){
        // Attacks the player if the previous condition is true
        setTimeout(() => {
          this.attackPlayer()
        }, 500);
      } else {
        // !this.fightWin()
        if(this.enemy.boss){
          window.location = this.fightWinValue
        }else{
          this.sweetAlertController().fightWin({player: this.player});
        }
      }
    } else {
      this.sweetAlertController().fightWin({player: this.player});
    }
  }

  playerSpecial() {
    // this.player.abilityAction(this.specialValue.name, this.specialValue.ability_cost);
    this.gameLogAction = this.player.abilityAction(this.specialValue.name, this.specialValue.ability_cost);
    this.updateView();
    if (this.enemy.health > 0 ){
      // Attacks the player if the previous condition is true
      setTimeout(() => {
        this.attackPlayer()
      }, 500);
    } else {
      this.sweetAlertController().fightWin({player: this.player});
    }
  }

  // gets triggered when the player clicks the button "Opt Out" - replaced by sweetalert button
  // playerOptOut(){
  //   alert(this.disorderValue.meltdown_text);
  // }

  // Updates the entire HTML so that the View is dynamic
  updateView() {
    // Player view update
    this.playerHealthPercentTarget.innerText = `${((this.player.health * 100) / this.player.maxHealth)}%`;
    this.playerHealthTarget.value = this.player.health;
    this.playerHealthTarget.max = this.player.maxHealth;
    this.playerEnergyPercentTarget.innerText = `${Math.floor((this.player.energy * 100) /this.player.maxEnergy)}%`;
    this.playerEnergyTarget.max = this.player.maxEnergy;
    this.playerEnergyTarget.value = this.player.energy;
    // Enemy view update
    this.enemyNameTarget.innerText = this.enemy.name
    this.enemyHealthPercentTarget.innerText = `${Math.floor((this.enemy.health * 100) /this.enemyMaxhealth)}%`;
    this.enemyHealthTarget.max = this.enemyMaxhealth;
    this.enemyHealthTarget.value = this.enemy.health;
    this.gameLogTarget.insertAdjacentHTML("beforeend", this.gameLogAction)
    // this.pictureTarget.innerText.remove();
    const objDiv = document.querySelector(".game-log");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
}
