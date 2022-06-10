// Text elements for Game Log box on fight page
export default class GameLog {
  gameLogText(method) {
    switch(method) {
      // Default text in game log upon opening the page
      case "connect":
        return "";
      // Player actions
      case "playerAttack":
        return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You gather your strength and strike!</em>";
      case "playerSpecial":
        return "<br><em><span style='color:#85A9AB'>–––<br>You gather your energy for a special move...</em></span>";
    // Enemy conditions
    case "enemyAttack":
      setTimeout(() => {
        return "<br>The opponent's dark forces drain your health!";
      }, 500);
    case "enemySpecial":
      setTimeout(() => {
        return "<br>Special enemy text!";
      }, 500);
    // Specific conditions
    case "energyLow":
      return "<br><span style='color:#DE9B8C'><strong>Your energy level is too low!</strong></span>";
    // Enemy communication
    case "The Witness":
      return "<br>Horrible Gaze!"
    case "The Stalker":
      return "<br>Horrible Gaze!"
    case "The Chain":
      return "<br>Dragging Constraints!"
    case "The Abyss":
      return "<br>Dragging Constraints!"
    case "The Prosecutor":
      return "<br>Horrible Acusation!";
    case "The Mask":
      return "<br>Hainous Laugther!";
    case "Hysteria":
    return "<br>Hysteric Explosion!";
    }
  }
}
