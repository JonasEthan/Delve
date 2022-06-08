import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="rooms"
export default class extends Controller {

  static targets = ["room", "button"]

  connect() {
    if (!this.roomTarget.checked) {
      this.buttonTarget.disabled = true;
    } else {
      this.buttonTarget.disabled = false;
    }
  }

  activate() {
    this.buttonTarget.disabled = false;
  }
}
