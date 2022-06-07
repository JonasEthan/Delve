import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="loading-typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Loading ..."],
      typeSpeed: 50,
      loop: false,
      showCursor: false
    })
  }
}
