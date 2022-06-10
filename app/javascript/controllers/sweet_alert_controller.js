import { Controller } from "@hotwired/stimulus"
import Swal from "sweetalert2"
import AdventuringText from "../utils/adventuring_text"
// Allowing to use Rails code from html.erb files
import Rails from "@rails/ujs"
Rails.start()

// Connects to data-controller="sweet-alert"
export default class extends Controller {
  // Defining acceptable data-values for controller
  static values = {
    urlStart: String,
    urlLoad: String,
    urlCancel: String,
    fightStart: String,
    fightWin: String,
    fightLoss: String,
    fightExit: String,
    enemy: Object,
    roomWin: String,
  }
  static targets = ["enemyHealth"]

  connect() {
    this.narrator = new AdventuringText;
  }

  // Alert for "Start new game" button
  disclaimerStart(e) {
    // Preventing default action of create method, i.e. immediate redirection and creation of new instances until user clicks on submit button
    e.preventDefault()

    Swal.fire({
      title: '<strong>DISCLAIMER</strong>',
      icon: 'info',
      html:
      'This game evolves around the topic of mental disorders. It contains imagery that might be triggering or disturbing to some individuals. If you do not feel comfortable, please do not play this game. While playing you can exit the game at any point in time.<br><br><strong>Thank you and enjoy Delve!</strong>',
      confirmButtonColor: "#8E9AAB",
      background: "#F5F5F6",
      showCancelButton: true,
      confirmButtonText: 'I understand and wish to continue',
      confirmButtonClass: "btn-ocean",
    }).then((inputValue) => {
      if(inputValue.isConfirmed) {
      Rails.ajax({
        url: "/games",
        type: "post"
      })
      window.location = this.urlStartValue
      } else {
      window.location = this.urlCancelValue
      }
    })
  }

  // Alert for "Load game" button
  disclaimerLoad() {
    Swal.fire({
      title: '<strong>DISCLAIMER</strong>',
      icon: 'info',
      html: '<strong>Reminder</strong>: This game evolves around the topic of mental disorders. It contains imagery that might be triggering or disturbing to some individuals. If you do not feel comfortable, please do not play this game. While playing you can exit the game at any point in time.<br><br><strong>Thank you and enjoy Delve!</strong>',
      confirmButtonColor: "#8E9AAB",
      background: "#F5F5F6",
      showCancelButton: true,
      confirmButtonText: 'I understand and wish to continue',
    }).then((inputValue) => {
      if(inputValue.isConfirmed)
        window.location = this.urlLoadValue
    })
  }

  // Alert for "Fight page" - uses Adventuring text based on enemy instance
  fightStart(fightMessage) {
    Swal.fire({
      title: '<strong>Get ready</strong>',
      html: `${fightMessage}`,
      confirmButtonColor: "#8E9AAB",
      background: "#F5F5F6",
      showCancelButton: false,
      confirmButtonText: "Let's go!",
    })
  }

  // Alert for "winning the fight" - redirects to journeys/completed path

  fightWin(options = {}) {
    console.log(options.player);
    if(options.enemy.boss === true){
      Swal.fire({
        title: '<strong>You have overcome this great adversary!</strong>',
        icon: 'success',
        html: `You have overcome ${options.enemy.name}, gatekeeper of ${options.disorder.name}. `,
        confirmButtonColor: "#8E9AAB",
        background: "#F5F5F6",
        showCancelButton: false,
        confirmButtonText: 'Continue',
        allowOutsideClick: false,
      }).then((inputValue) => {
        if(inputValue.isConfirmed)
          window.location = `journeys/completed?${new URLSearchParams(options.player).toString()}&${new URLSearchParams(options.enemy).toString()}&${new URLSearchParams(options.disorder).toString()}`
      })
    }else{
      Swal.fire({
        title: '<strong>Congratulations!</strong>',
        icon: 'success',
        html: "You fought bravely",
        confirmButtonColor: "#8E9AAB",
        background: "#F5F5F6",
        showCancelButton: false,
        confirmButtonText: 'Continue',
        allowOutsideClick: false,
      }).then((inputValue) => {
        if(inputValue.isConfirmed)
          window.location = `${this.roomWinValue}&${new URLSearchParams(options.player).toString()}`
      })
    }
  }

  // Alert for "losing the fight" - redirects to journeys/repeat
  fightLoss() {
    Swal.fire({
      title: '<strong>You can carry on no more!</strong>',
      html: "You fought bravely and this time it wasn't enough. But don't give up!",
      confirmButtonColor: "#8E9AAB",
      background: "#F5F5F6",
      showCancelButton: false,
      confirmButtonText: 'Okay',
      allowOutsideClick: false,
    }).then((inputValue) => {
      if(inputValue.isConfirmed)
        window.location = this.fightLossValue // = journeys_repeat_path
    })
  }

  // Alert when "exit the game" is clicked during the game - redirects to homepage
  fightExit() {
    Swal.fire({
      title: "<strong>Are you sure?</strong>",
      html: "<strong>Stay strong:</strong> Do not give up, take a break in a save environment and try again.",
      confirmButtonColor: "#8E9AAB",
      background: "#F5F5F6",
      showCancelButton: true,
      confirmButtonText: 'Okay'
    }).then((inputValue) => {
      if(inputValue.isConfirmed)
        window.location = this.fightExitValue // = root_path
    })
  }

  // ! Alert when player energy level is too low - currently not in use
  // lowEnergy() {
  //   e.preventDefault()

  //   Swal.fire({
  //     title: "<strong>Attention</strong>",
  //     icon: "info",
  //     html: "Your energy level is too low! You cannot execute your special move right now.",
  //     confirmButtonColor: "#8E9AAB",
  //     background: "#F5F5F6",
  //     showCancelButton: false,
  //     confirmButtonText: 'Okay'
  //   })
  // }
}
