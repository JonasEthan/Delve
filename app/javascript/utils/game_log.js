// Text elements for Game Log box on fight page
export default class GameLog {
  logAttack(method) {
    switch(method) {
      case "attack":
        "You attack and it hurts your conterpart";
      break;
      case "special":
        "As you walk you feel a gaze upon you, seemingly from every direction. Out of the shadow steps something with its eyes fixed on you. This seems to be the last hurdle of this journey!";
      break;
    }
  }
}
