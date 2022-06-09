// Text elements for Game Log box on fight page
export default class GameLog {
  gameLogText(method) {
    switch(method) {
      // Default text in game log upon opening the page
      case "connect":
        return "";
      // Player actions
      case "playerAttack":
        return "<br><style='color:#42475B'>–––<br><em><span style='color:#85A9AB'>You attack and the enemy is suffering...</em></span>";
      case "playerSpecial":
        return "<br><em><style='color:#42475B'>–––<br><span style='color:#85A9AB'>You throw your special attack...</em></span>";
    // Enemy conditions
    case "enemyAttack":
      // setTimeout(() => {
        return "<br>The enemy attacks and is draining your health...";
      // }, 500);
    case "enemySpecial":
      // setTimeout(() => {
        return "<br>The enemy attacks you with its special move...";
      // }, 500);
    // Specific conditions
    case "energyLow":
      return "<br><style='color:#42475B>–––<br><span style='color:#DE9B8C'><strong>Your energy level is too low!</strong></span>";
    // Enemy communication
    case "The Witness":
      return "<br>The Witness casts a <span class=special-font>Horrible Gaze</span> at you!<br> You feel your energy depleting...";
    case "The Stalker1":
      return "<br>The Stalker casts a <span class=special-font>Horrible Gaze</span> at you!<br> You feel your energy depleting...";
    case "The Stalker2":
      return "<br>With a <span class=special-font>Tailing Gaze</span>, follows this creature your every move <br> You feel your energy and health depleting...";
    case "The Chain":
      return "<br><span class=special-font>Dragging Constraints</span>!";
    case "The Abyss1":
      return "<br><span class=special-font>Dragging Constraints</span>";
    case "The Abyss2":
      return "<br><span class=special-font>Hauting Darkness</span>";
    case "The Prosecutor":
      return "<br>Horrible Acusation!";
    case "The Mask1":
      return "<br>Horrible Acusation!";
    case "The Mask2":
      return "<br>Hainous Laugther!"
    case "Hysteria":
      return "<br><span class=special-font>Hysteric Explosion</span>!";
    }
  }
}
