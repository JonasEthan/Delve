import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Let us take you on a journey to discover the human mind"],
      typeSpeed: 50,
      loop: true
    })
  }
}
