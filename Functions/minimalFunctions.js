import { combosArry } from "../Data/DataStrustures.js";
import variables  from "../main.js";
let {botImg, Buttons, isBot_Playing} = variables

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

function Change_BotImg() {
  if (isBot_Playing) botImg.src = "Images/Botpalying.svg";
  else botImg.src = "Images/BotNotPlaying.svg";
}

export {
  Buttons_Disable,
  Bot_Pattren_Genrator,
  WinningAlgorithm,
  Change_BotImg,
};
