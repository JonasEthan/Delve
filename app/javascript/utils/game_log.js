// Text elements for Game Log box on fight page
export default class GameLog {
  gameLogText(method) {
    switch(method) {
      // Default text in game log upon opening the page
      case "connect":
        return "";
      // Player actions
      case "playerAttack":
        return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You gather your strength and strike!</span></em>";
      case "playerSpecial":
        return "<br><em><span style='color:#85A9AB'>–––<br>You gather your energy for a special move...</em></span>";
    // Player conditions
    case "Healing1":
      return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You collect yourself and manage to calm down... <br>Some of your health is restored.</span>";
    case "Heavy Attack":
      return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You collect your might to strike your foe with a powerful attack!</span>";
    case "Reckless Attack1":
      return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You throw caution to the wind and strike without remorse!<br> You came out of the scuffle unscathed <span class=special-font>this time</span>";
    case "Reckless Attack2":
      return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You throw caution to the wind and strike without remorse!<br>But in the scuffle you also <span class=special-font>harm yourself</span>";
    case "enemyAttack":
      //setTimeout(() => {
        return "<br>The opponent's dark forces drain your health!";
      //}, 500);
    case "enemySpecial":
      // setTimeout(() => {
        return "<br>The opponent attacks you with its special move...";
      // }, 500);
    // Specific conditions
    case "energyLow":
      return "<br><style='color:#42475B>–––<br><span style='color:#DE9B8C'><strong>Your energy level is too low!</strong></span>";
    case "energyLowEnemy":
      return "<br>Your foe tries to gather their strength, but <span class=special-font>fails</span>..."
    // Enemy communication
    case "The Witness":
      return "<br>The Witness casts a <span class=special-font>Horrible Gaze</span> at you!<br> You feel your energy depleting...";
    case "The Stalker1":
      return "<br>The Stalker casts a <span class=special-font>Horrible Gaze</span> at you!<br> You feel your energy depleting...";
    case "The Stalker2":
      return "<br>With a <span class=special-font>Tailing Gaze</span>, this creature follows your every move <br> You feel your energy and health depleting...";
    case "The Chain":
      return "<br>The Chain lunges itself at you and casts <span class=special-font>Dragging Constraints</span>!<br>You feel your energy and health depleting as it drages you back into the darkness...";
    case "The Abyss1":
      return "<br>The Abyss lunges its chains at you and casts <span class=special-font>Dragging Constraints</span>!<br>You feel your energy and health depleting as it drages you back into the darkness...";
    case "The Abyss2":
      return "<br>The Abyss shrouds you into an <span class=special-font>Hauting Darkness</span>! You fell it leeches of your health and energy...";
    case "The Prosecutor":
      return "<br>The Prosecuter cries out a <span class=special-font>Horrible Accusation</span> at you!<br> You feel you energy depleting...";
    case "The Mask1":
      return "<br>The Mask cries a <span class=special-font>Horrible Accusation</span> at you!<br> You feel you energy depleting...";
    case "The Mask2":
      return "<br>The Mask tells you with <span class=special-font>Heinous Laugther</span> that you need them, but not vise versa!<br> You feel your health being sucked from you...";
    case "Hysteria":
      return "<br>This algemation seems to grow more unstable as it erupts into an <span class=special-font>Hysteric Explosion</span>!<br> You feel you health draining trying to stand against this chaotic tide...";
    }
  }

  // this displays a more personalized victory message
  gameLogWin(name){
    switch (name) {
      case "The Chain":
        return "With one last strike you break <span class>The Chain</span> in two and you continue your journey as it dissipates into the surrounding darkness...";
        break;
      case "Hysteria":
        return "You strike the algamation one last time and with almost a sigh of relief this <span class=special-font>Hysteria</span> dissipates into nothing...";
        break;
      case "The Witness":
        return "After your struggle with <span class=special-font>The Witness</span> you look up to see its bulbous eye closed as it dissipates, it takes a moment for you to be able to shrugg of this encounter, but you continue on never the less...";
        break;
      case "The Prosecutor":
        return "As you look up from your last attack you see <span class=special-font>The Prosecutor</span> dissipating into nothing, you rest for a while to shake her accusations, but you carry on non the less...";
        break;
      default:
        return "As you strike your enemy one last time it dissipates into nothing. After a quick break you carry on with your Journey...";
        break;
    }
  }
}
