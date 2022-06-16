import { Controller } from "@hotwired/stimulus"
import PlayerStatus from "../utils/player_status"

// Connects to data-controller="respite"
export default class extends Controller {
  static values = { player: Object, leave: String}
  connect() {
    // asigning the values of the parsed value Object to the JS PlayerStatus object
    this.player = new PlayerStatus(this.playerValue.health, this.playerValue.energy, this.playerValue.attack_damage);
  }

  // Players stats get refilled to full
  playerRest(){
    this.player.health = this.player.maxHealth;
    this.player.energy = this.player.maxEnergy;
  }

  // player loads next fight
  embarkJourney(){
    window.location = `${this.leaveValue}&${new URLSearchParams(this.player).toString()}`
  }
}
