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
        return "As you carry on through the darkening surroundings you hear the ratteling of chains drawing closer and closer. Until at last out of the fabric of reality it bursts trying to attack you";
      break;
      case "The Abyss":
        return "Despite the best efforts of this place to keep you inside it you seem to have reached the exit. But before you can leave a looming shadow grows in its light and casts you once more into darkness. This place won't let you leave so easily after all...";
      break;
      case "Hysteria":
        return "The surrounding Chaos seems to grow more restless and it starts to scream as faces seem to form out nowhere. Soon infront of you floats an orb off conjoined faces all seemingly in pain! It seems determined to not let you pass.";
      break;
      case "The Prosecutor":
        return "As you walk these dark winding corridors your journey is brought to an abrupt hold. The Prosecuter has stoped you in your tracks and seems like she seems to bring judgment upon you";
      break;
      case "The Mask":
        return "Still needs text";
      break;
      default:
        return "The surrounding Chaos reforms into an algamation. It is blocking your way forward.";
    }
  }
}
