import { Controller } from "@hotwired/stimulus"
import PlayerStatus from "../utils/player_status"
import GameLog from "../utils/game_log";

// Connects to data-controller="respite"
export default class extends Controller {
  static values = { player: Object, leave: String}
  static targets = ["gameLog"]
  connect() {
    // asigning the values of the parsed value Object to the JS PlayerStatus object
    this.player = new PlayerStatus(this.playerValue.health, this.playerValue.energy, this.playerValue.attack_damage);
    this.diaLog = new GameLog;
  }
  // this currently does not work I know a work around but I will do it at a later point not pressing enough
  typedCall(){
   // return this.application.getControllerForElementAndIdentifier(this.element, 'typed-js')
  }

  // Players stats get refilled to full
  playerRest(){
    this.player.health = this.player.maxHealth;
    this.player.energy = this.player.maxEnergy;
    this.gameLogAction = this.diaLog.respiteLog("Healing");
    this.awnser();
  }

  // Ask the entity for who he is
  whoQ(){
    this.interaction("Who?");
  }

  // generates the answer regarding what button was prest
  interaction(message){
    this.gameLogAction = this.diaLog.respiteLog(message);
    this.awnser();
  }

  // player loads next fight
  embarkJourney(){
    window.location = `${this.leaveValue}&${new URLSearchParams(this.player).toString()}`
  }

  // Updates the gameLog in the respite room
  awnser() {
    this.gameLogTarget.insertAdjacentHTML("beforeend", this.gameLogAction)

    // Automatically scrolls game log to bottom after injecting content
    const objDiv = document.querySelector(".respite-log");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
}
