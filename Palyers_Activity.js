import { comboObject } from "./Data/ComboObject";
import { PlayerI, PlayerII } from "./Data/Palyers";

export function Palyer_activity(turn, button, player, e, Bgcolor, representation) {
  if (position_occupied.length == 9) reset(1000);

  playerI_Turn = turn;
  player["Coordinates"] = [
    ...player["Coordinates"],
    Number(e.target.id),
  ].sort();
  player.TotalTurned = player.TotalTurned + 1;
  button.style.backgroundColor = Bgcolor;
  button.innerHTML = representation;
  button.style.border = "none";
  position_occupied.push(e.target.id);

  if (PlayerI.TotalTurned >= 3 || PlayerII.TotalTurned >= 3)
    for (const element of Object.values(comboObject)) {
      if (player.Coordinates.join("") == String(element.join(""))) reset(1000);
    }
}