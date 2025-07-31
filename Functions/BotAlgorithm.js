import { Buttons, position_occupied } from "../main.js";
import { Bot_Pattren_Genrator } from "./minimalFunctions.js";

function Bot_Algorithm() {
  let Bot_Position = Bot_Pattren_Genrator();
  while (
    position_occupied.length < 9 &&
    position_occupied.includes(String(Bot_Position))
  ) {
    Bot_Position = Bot_Pattren_Genrator();
  }
  Buttons[Bot_Position].click();
}

export {Bot_Algorithm}