import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="game-framework"
export default class extends Controller {
  connect() {
    // console.log("Hello");
  }
  journeyPartText() {
    alert("Out of the surounding Chaos a figure emerges blocking your way");
  }

}
