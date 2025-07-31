import { Buttons, position_occupied } from "../main.js";
import { PlayerI, PlayerII } from "../Data/DataStrustures.js";
import { VariablesObject } from "../main.js";
export function reset(time) {
  setTimeout(() => {
    Buttons.forEach((Button) => {
      Button.innerHTML = "";
      Button.style.border = "1px solid black";
      Button.style.backgroundColor = "#EFEFEF";
      position_occupied.length = 0;

      PlayerI.id = 1;
      PlayerI.TotalTurned = 0;
      PlayerI.Coordinates.length = 0;

      PlayerII.id = 2;
      PlayerII.TotalTurned = 0;
      PlayerII.Coordinates.length = 0;

      VariablesObject.gameIsContinue = false;
      VariablesObject.notBeginingOfGame = false;
    });
  }, time);
}
