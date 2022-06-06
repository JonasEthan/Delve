export default class AdventuringText {
  checkDialog(name) {
    switch(name){
      case "The Witness":
        alert("You hear the flapping of wings in the distance closing nearer to you by the second. Its gaze seems to be always fixed on you");
      break;
      case "The Stalker":
        alert("As you walk you feel a gaze upon you, seemingly from every direction. Out of the shadow steps something with its eyes fixed on you. This seems to be the last hurdle of this journey!");
      break;
      case "The Chain":
        alert("As you carry on through the darkening surroundings you hear the ratteling of chains drawing closer and closer. Until at last out of the fabric of reality it bursts trying to attack you");
      break;
      case "The Abyss":
        alert("Despite the best efforts of this place to keep you inside it you seem to have reached the exit. But before you can leave a looming shadow grows in its light and casts you once more into darkness. This place won't let you leave so easily after all...");
      break;
      case "Hysteria":
        alert("The surrounding Chaos seems to grow more restless and it starts to scream as faces seem to form out nowhere. Soon infront of you floats an orb off conjoined faces all seemingly in pain! It seems determined to not let you pass.");
      break;
      case "The Prosecuter":
        alert("Needs text still");
      break;
      case "The Mask":
        alert("Needs text still");
      break;
      default:
        alert("The surrounding Chaos reforms into an algamation. It is blocking your way forward.");
    }
  }
}
