export default class AdventuringText {
  checkDialog(name) {
    switch(name){
      case "The Witness":
        return "You hear the flapping of wings in the distance, drawing closer to you by the second. A haunting gaze seems to be always fixed on you...";
      break;
      case "The Stalker":
        return "As you proceed, you get a creeping feeling of being watched from every direction. Out of the shadow emerges something with its eyes fixed on you. This seems to be the last hurdle of this journey!";
      break;
      case "The Chain":
        return "As you move through the darkening surroundings, you hear the rattling of chains drawing closer and closer. Until at last, out of the fabric of reality, it bursts trying to attack you...!";
      break;
      case "The Abyss":
        return "Despite the best efforts of this place to keep you inside it, you seem to have reached the exit. But before you can leave, a looming shadow grows in its light and casts you once more into darkness. This place won't let you leave so easily after all...";
      break;
      case "Hysteria":
        return "The surrounding Chaos seems to grow more restless and it starts to scream as faces seem to form out nowhere. Soon in front of you floats an orb of conjoined faces all seemingly in pain! It seems determined to not let you pass.";
      break;
      case "The Prosecutor":
        return "As you walk these dark winding corridors, your journey is brought to an abrupt hold. The Prosecuter has stopped you in your tracks and she seems to bring judgment upon you!";
      break;
      case "The Mask":
        return "As your journey draws to a close, you hear a heinous laughter that sends shivers down your spine. Your final opponent fixates you with a piercing glare from hollow eyes.";
      break;
      default:
        return "The surrounding Chaos reforms into an algamation. It is blocking your way forward.";
    }
  }

  // this displays a more personalized victory message
  winDialog(name){
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
