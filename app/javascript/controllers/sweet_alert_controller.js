import { Controller } from "@hotwired/stimulus"
import Swal from "sweetalert2"

// Connects to data-controller="sweet-alert"
export default class extends Controller {
  static values = {
    urlStart: String,
    urlLoad: String
  }
  connect() {
  }

  disclaimerStart(e) {
    e.preventDefault()
    
    Swal.fire({
      title: '<strong>DISCLAIMER</strong>',
      icon: 'info',
      confirmButtonColor: "#A3CFD1",
      html:
      'This game evolves around the topic of mental disorders. It contains imagery that might be triggering or disturbing to some individuals. If you do not feel comfortable please do not play this game. While playing you can exit the game at any point in time.<br><br><strong>Thank you and enjoy Delve!</strong>',
      showCancelButton: true,
      confirmButtonText: 'I understand and wish to continue',
      confirmButtonClass: "btn-ocean",
    }).then((inputValue) => {
      if(inputValue.isConfirmed)
        window.location = this.urlStartValue
    })
}
  disclaimerLoad() {
    Swal.fire({
      title: '<strong>DISCLAIMER</strong>',
      icon: 'info',
      confirmButtonColor: "#A3CFD1",
      html:
      '<strong>Reminder</strong>: This game evolves around the topic of mental disorders. It contains imagery that might be triggering or disturbing to some individuals. If you do not feel comfortable please do not play this game. While playing you can exit the game at any point in time.<br><br><strong>Thank you and enjoy Delve!</strong>',
      showCancelButton: true,
      confirmButtonText: 'I understand and wish to continue',
    }).then((inputValue) => {
      if(inputValue.isConfirmed)
        window.location = this.urlLoadValue
    })
  }
}
