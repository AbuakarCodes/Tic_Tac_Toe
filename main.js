import {
  Bot_Pattren_Genrator,
  Buttons_Disable,
  WinningAlgorithm,
} from "./utils/Functions.js";
import { reset } from "./utils/reset.js";
import { PlayerI, PlayerII } from "./Data/DataStrustures.js";

export let Buttons = Array.from(document.querySelectorAll(".btn"));
export let playerI_Turn = true;
export let position_occupied = [];
let Reset = document.querySelector(".reset");
let Bot = document.querySelector(".Bot");
let isBot_Playing = false;

Reset.addEventListener("click", () => {
  reset(0);
});

Buttons.forEach((Indivisual_Btn) => {
  Indivisual_Btn.addEventListener("click", (e) => {
    Btns_EvntLinstner_logic(e, Indivisual_Btn);
  });
});

function Btns_EvntLinstner_logic(e, Indivisual_Btn) {
  if (playerI_Turn) {
    if (!position_occupied.includes(String(e.target.id)))
      Palyer_activity(false, Indivisual_Btn, PlayerI, e, "	#4ade80", "O");
  } else {
    if (!position_occupied.includes(String(e.target.id)))
      Palyer_activity(true, Indivisual_Btn, PlayerII, e, "#f87171", "X");
  }
  isBot_Playing = false;
}

function Palyer_activity(turn, button, player, e, Bgcolor, representation) {
  if (position_occupied.length == 8) reset(1000);
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
  if (isBot_Playing) {
    isBot_Playing = false;
    Bot_Algorithm();
  }

  if (PlayerI.TotalTurned >= 3 || PlayerII.TotalTurned >= 3) {
    let WinningPlayer_object = WinningAlgorithm(player);
    if (WinningPlayer_object.winnigPlayerID) {
      Buttons_Disable(1);
      setTimeout(() => {
        Buttons_Disable(0);
        alert(`Player no ${WinningPlayer_object.winnigPlayerID}`);
      }, 500);
      reset(500);
    }
  }
}

function Bot_Algorithm(params) {
  let Bot_Position = Bot_Pattren_Genrator();
  while (
    position_occupied.length < 9 &&
    position_occupied.includes(String(Bot_Position))
  ) {
    Bot_Position = Bot_Pattren_Genrator();
  }
  Buttons[Bot_Position].click();
}
