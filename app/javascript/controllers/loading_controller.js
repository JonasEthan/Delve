import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loading"
export default class extends Controller {
  connect() {
  }

  blur() {
    this.element.classList.add("blur")
  }

  unblur() {
    this.element.classList.remove("blur")
  }
}
