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
      return "<br>Your foe tries to gather their strength, but fails..."
    // Enemy communication
    case "The Witness":
      return "<br>The Witness casts a <span class=special-font>Horrible Gaze</span> at you!<br> You feel your energy depleting...";
    case "The Stalker1":
      return "<br>The Stalker casts a <span class=special-font>Horrible Gaze</span> at you!<br> You feel your energy depleting...";
    case "The Stalker2":
      return "<br>With a <span class=special-font>Tailing Gaze</span>, this creature follows your every move <br> You feel your energy and health depleting...";
    case "The Chain":
      return "<br><span class=special-font>Dragging Constraints</span>!";
    case "The Abyss1":
      return "<br><span class=special-font>Dragging Constraints</span>!";
    case "The Abyss2":
      return "<br><span class=special-font>Hauting Darkness</span>!";
    case "The Prosecutor":
      return "<br>Horrible Accusation!";
    case "The Mask1":
      return "<br>Horrible Accusation!";
    case "The Mask2":
      return "<br>Heinous Laugther!"
    case "Hysteria":
      return "<br><span class=special-font>Hysteric Explosion</span>!";
    }
  }
}
