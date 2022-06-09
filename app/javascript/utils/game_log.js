// Text elements for Game Log box on fight page
export default class GameLog {
  gameLogText(method) {
    switch(method) {
      // Default text in game log upon opening the page
      case "connect":
        return "";
      // Player actions
      case "playerAttack":

        return "<br><em><span style='color:#85A9AB'><strong>You: </strong>You attack and the enemy is suffering...</em></span>";
      case "playerSpecial":
        return "<br><em><span style='color:#85A9AB'><strong>You: </strong>You throw your special attack...</em></span>";
    // Enemy conditions
    case "enemyAttack":
      setTimeout(() => {
        return "<br>The enemy attacks and is draining your health...";
      }, 500);
    case "enemySpecial":
      setTimeout(() => {
        return "<br>Special enemy text!";
      }, 500);
    // Specific conditions
    case "energyLow":
      return "<br><span style='color:#DE9B8C'><strong>Your energy level is too low</strong></span>";
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
