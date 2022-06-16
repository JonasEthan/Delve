import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {
  static values = { message: String }

  connect() {
    const message = this.messageValue;
    new Typed(this.element, {
      strings: [message],
      typeSpeed: 30,
      loop: false,
      showCursor: false
    })
  }

  // gameLog() {
  //   new Typed(this.element, {
  //     strings: ["You are encountering an enemy ..."],
  //     typeSpeed: 50,
  //     loop: false,
  //     showCursor: false
  //   })
  // }
}
