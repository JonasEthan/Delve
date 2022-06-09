// Text elements for Game Log box on fight page
export default class GameLog {
  gameLogText(method) {
    switch(method) {
      // Default text in game log upon opening the page
      case "connect":
        return "";
      // Player actions
      case "playerAttack":
        return "<br><style='color:#42475B'>–––<br><em><span style='color:#85A9AB'>You attack your enemy...</em></span>";
      case "playerSpecial":
        return "<br><em><style='color:#42475B'>–––<br><span style='color:#85A9AB'>You throw your special attack...</em></span>";
    // Enemy conditions
    case "Healing1":
      return "<br>You collect yourself and manage to calm down <br>You restore your health a bit";
    case "Heavy Attack":
      return "<br>You collect your might to strike your foe with a powerful attack!";
    case "Reckless Attack1":
      return "<br>You throw caution to the wind and strike without remorse!<br> You came out of the scuffle unscaved <span class=special-font>this time</span>";
    case "Reckless Attack2":
      return "<br>You throw caution to the wind and strike without remorse!<br>But in the scuffle you also <span class=special-font>harm yourself</span>";
    case "enemyAttack":
      // setTimeout(() => {
        return "<br>The enemy attack is taking a <span class=special-font>toll</span> on your health...";
      // }, 500);
    case "enemySpecial":
      // setTimeout(() => {
        return "<br>The enemy attacks you with its special move...";
      // }, 500);
    // Specific conditions
    case "energyLow":
      return "<br><style='color:#42475B>–––<br><span style='color:#DE9B8C'><strong>Your energy level is too low!</strong></span>";
    case "energyLowEnemy":
      return "<br>Your foe tries to gather their strength, but fail"
    // Enemy communication
    case "The Witness":
      return "<br>The Witness casts a <span class=special-font>Horrible Gaze</span> at you!<br> You feel your energy depleeting";
    case "The Stalker1":
      return "<br>The Stalker casts a <span class=special-font>Horrible Gaze</span> at you!<br> You feel your energy depleeting";
    case "The Stalker2":
      return "<br>With a <span class=special-font>Tailing Gaze</span>, follows this creature your every move <br> You feel your energy and health depleeting";
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
