import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Embark on a journey to discover the human mind ..."],
      typeSpeed: 30,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 200, // milliseconds
      showCursor: true,
      loop:true
    })
  }
}
