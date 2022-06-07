// Text elements for Game Log box on fight page
export default class GameLog {
  gameLogText(method) {
    switch(method) {
      // Default text in game log upon opening the page
      case "connect":
        return "Connection test";
      // Player actions
      case "playerAttack":
        return "<br>Player attack!";
      case "playerSpecial":
        return "<br>Player Special...";
    // Enemy conditions
    case "enemyAttack":
      return "<br>You attack and it hurts your conterpart...";
    case "enemySpecial":
      return "<br>Special enemy text!";
    // Specific conditions
    case "energyLow":
      return "<br>Your energy is too low";
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
