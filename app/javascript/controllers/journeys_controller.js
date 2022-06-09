import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="journeys"
export default class extends Controller {
  static targets = ["journey", "button", "bloop"]

  connect() {
    if (!this.journeyTarget.checked) {
      this.buttonTarget.disabled = true;
    } else {
      this.buttonTarget.disabled = false;
    }
  }

  activate() {
    this.buttonTarget.disabled = false;
  }
}
