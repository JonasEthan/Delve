import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="game-framework"
export default class extends Controller {
  connect() {
    // console.log("Hello");
  }

  // This one gives a pop up to give an idea how the game tells the presence of an enemy still needs flavouring (proof of concept)
  journeyPartText() {
    alert("Out of the surounding Chaos a figure emerges blocking your way");
  }

}
