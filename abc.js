// import { Palyer_activity } from "./Palyers_Activity";

let Buttons = Array.from(document.querySelectorAll(".btn"));

let comboObject = {
  combo_I: [0, 1, 2],
  combo_II: [3, 4, 5],
  combo_III: [6, 7, 8],
  combo_IV: [0, 3, 6],
  combo_V: [1, 4, 7],
  combo_VI: [2, 5, 8],
  combo_VII: [2, 4, 6],
  combo_VIII: [0, 4, 8],
};

let playerI_Turn = true;

let PlayerI = {
  id: "P_1",
  TotalTurned: 0,
  Coordinates: [],
};

let PlayerII = {
  id: "P_2",
  TotalTurned: 0,
  Coordinates: [],
};

let position_occupied = [];

function reset(time) {
  setTimeout(() => {
    for (let index = 0; index < Buttons.length; index++) {
      let Indivisual_Btn = Buttons[index];
      Indivisual_Btn.innerHTML = "";
      Indivisual_Btn.style.border = "1px solid black";
      Indivisual_Btn.style.backgroundColor = "#EFEFEF";
      position_occupied = [];
      PlayerI = {
        TotalTurned: 0,
        Coordinates: [],
      };

      PlayerII = {
        TotalTurned: 0,
        Coordinates: [],
      };
    }
  }, time);
}

function Palyer_activity(turn, button, player, e, Bgcolor, representation) {
  if (position_occupied.length == 8) reset(1000);
    console.log(position_occupied.length)
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




for (let index = 0; index < Buttons.length; index++) {
  let Indivisual_Btn = Buttons[index];
  Indivisual_Btn.addEventListener("click", (e) => {
    if (playerI_Turn) {
      if (!position_occupied.includes(String(e.target.id)))
        Palyer_activity(false, Indivisual_Btn, PlayerI, e, "green", "O");
    } else {
      if (!position_occupied.includes(String(e.target.id)))
        Palyer_activity(true, Indivisual_Btn, PlayerII, e, "red", "X");
    }
  });
}


