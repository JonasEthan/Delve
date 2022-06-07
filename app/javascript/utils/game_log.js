// Text elements for Game Log box on fight page
export default class GameLog {
  gameLogText(method) {
    switch(method) {
      case "connect":
        return "Connection test";
      case "attack":
        return "You attack and it hurts your conterpart";
      case "special":
        return "Special text!";
    }
  }
}
