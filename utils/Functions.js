import { combosArry } from "../Data/DataStrustures.js";
import { Buttons } from "../main.js";

function Buttons_Disable(isDisabled) {
  Buttons.forEach((Button) => {
    Button.disabled = isDisabled;
    Button.style.cursor = isDisabled ? "not-allowed" : "pointer";
  });
}

function Bot_Pattren_Genrator() {
  return Math.floor(Math.random() * 9);
}

function WinningAlgorithm(player) {
  for (const ComboArry_element of combosArry) {
    if (ComboArry_element.every((C) => player.Coordinates.includes(C)))
      return { winnigPlayerID: player.id };
  }
  return { winnigPlayerID: 0 };
}



export { Buttons_Disable, Bot_Pattren_Genrator, WinningAlgorithm };
