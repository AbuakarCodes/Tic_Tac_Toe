import {
  Buttons_Disable,
  Change_BotImg,
  WinningAlgorithm,
} from "./Functions/minimalFunctions.js";
import { reset } from "./Functions/reset.js";
import { PlayerI, PlayerII } from "./Data/DataStrustures.js";
import { Bot_Algorithm } from "./Functions/BotAlgorithm.js";

let Reset = document.querySelector(".reset");
let Bot = document.querySelector(".Bot");
export let botImg = Bot.querySelector("img");

export let Buttons = Array.from(document.querySelectorAll(".btn"));
export let playerI_Turn = true;
export let position_occupied = [];
export let isBot_Playing = true;
export let letBot_play = true;
let gameIsContinue = false;
let notBeginingOfGame = false;

export let VariablesObject = {
  gameIsContinue,
  notBeginingOfGame,
};

Bot.addEventListener("click", () => {
  if (VariablesObject.notBeginingOfGame && VariablesObject.gameIsContinue)
    alert("Game is in progress!\nPlease reset the game first.");
  else {
    isBot_Playing = !isBot_Playing;
    letBot_play = !letBot_play;
  }
  Change_BotImg();

  console.log(isBot_Playing, "isBot_Playing");
});

Reset.addEventListener("click", () => {
  reset(0);
});

Buttons.forEach((Button) => {
  Button.addEventListener("click", (e) => {
    VariablesObject.gameIsContinue = true;
    VariablesObject.notBeginingOfGame = true;
    if (playerI_Turn) {
      if (!position_occupied.includes(String(e.target.id)))
        Palyer_activity(false, Button, PlayerI, e, "	#4ade80", "O");
    } else {
      if (!position_occupied.includes(String(e.target.id)))
        Palyer_activity(true, Button, PlayerII, e, "#f87171", "X");
    }
    isBot_Playing = true;
  });
});

function Palyer_activity(turn, button, player, e, Bgcolor, representation) {
  if (position_occupied.length == 8) reset(500);
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

  if (letBot_play) {
    if (isBot_Playing) {
      isBot_Playing = false;
      Bot_Algorithm();
    }
  }

  if (PlayerI.TotalTurned >= 3 || PlayerII.TotalTurned >= 3) {
    let WinningPlayer_object = WinningAlgorithm(player);
    if (WinningPlayer_object.winnigPlayerID) {
      Buttons_Disable(1);
      setTimeout(() => {
        Buttons_Disable(0);
        if (WinningPlayer_object.winnigPlayerID == 1) alert("O Won");
        else alert("X Won");
      }, 500);
      reset(500);
    }
  }
}
