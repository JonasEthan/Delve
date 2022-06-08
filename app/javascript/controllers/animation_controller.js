import { Controller } from "@hotwired/stimulus"


// Connects to data-controller="animation"
export default class extends Controller {
  static targets = ["svg"]
  connect() {

    this.sandbox = new GlslCanvas(this)
    console.log(this.svgTarget)
  }
}
