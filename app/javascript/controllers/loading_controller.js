import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loading"
export default class extends Controller {
  connect() {
  }

  blur() {
    this.element.classList.add("d-none")
  }

  unblur() {
    this.element.classList.remove("d-none")
  }
}
