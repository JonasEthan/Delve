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
      case "Healing2":
        return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You collect yourself and manage to calm down... <br>You feel your health completly restores.</span>";
      case "Healing3":
        return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You collect yourself and manage to calm down... <br>But your health is already full.</span>";
      case "Heavy Attack":
        return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You collect your might to strike your foe with a powerful attack!</span>";
      case "Reckless Attack1":
        return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You throw caution to the wind and strike without remorse!<br> You came out of the scuffle unscathed <span class=special-font>this time</span>";
      case "Reckless Attack2":
        return "<br><style='color:#85A9AB'>–––<br><em><span style='color:#85A9AB'>You throw caution to the wind and strike without remorse!<br>But in the scuffle you also <span class=special-font>harm yourself</span>";
      case "enemyAttack":
        return "<br>Your opponent's dark forces drain your health!";
      case "enemySpecial":
        return "<br>The opponent attacks you with its special move...";
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

  // This returns the response from the respite entity, will be expanded upon
  respiteLog(action) {
    switch (action) {
      case "Healing":
        return "<br>---<br>Well you seem to be a bit worse for wear, so how about <span class=special-font>you</span> take a short rest<br>Do not worry nothing can get you as long as I am here....";
        break;
      case "Who?":
        return "<br>---<br>Well I am a part of <span class=special-font>you</span> or atleast from your mind.<br>But enough about me for now my <span class=special-font>friend</span>...."
        break;
      default:
        break;
    }
  }
}
