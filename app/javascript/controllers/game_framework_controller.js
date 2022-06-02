import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="game-framework"
export default class extends Controller {
  static values = { player: Object }
  static targets = ["playerHealth"]
  connect() {
    // console.log("Hello");
  }

  initialize() {
    this.startHealth = this.playerHealthTarget.innerText
    this.isPlayerAlive()
  }

  journeyPartText() {
    alert("Out of the surounding Chaos a figure emerges blocking your way");
  }

  isPlayerAlive() {
    if(Number(this.playerHealthTarget.innerText) > 0){

    }
  }
}
