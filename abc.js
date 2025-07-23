let Buttons = Array.from(document.querySelectorAll(".btn"));
let Reset = document.querySelector(".reset");

Reset.addEventListener("click", () => {
  reset(0);
});

let playerI_Turn = true;
let position_occupied = [];

let combosArry = [
  [0, 1, 2], // combo_I
  [3, 4, 5], // combo_II
  [6, 7, 8], // combo_III
  [0, 3, 6], // combo_IV
  [1, 4, 7], // combo_V
  [2, 5, 8], // combo_VI
  [2, 4, 6], // combo_VII
  [0, 4, 8], // combo_VIII
];

let PlayerI = {
  id: 1,
  TotalTurned: 0,
  Coordinates: [],
};

let PlayerII = {
  id: 2,
  TotalTurned: 0,
  Coordinates: [],
};

function reset(time) {
  setTimeout(() => {
    for (let index = 0; index < Buttons.length; index++) {
      let Indivisual_Btn = Buttons[index];
      Indivisual_Btn.innerHTML = "";
      Indivisual_Btn.style.border = "1px solid black";
      Indivisual_Btn.style.backgroundColor = "#EFEFEF";
      position_occupied = [];
      PlayerI = {
        id: 1,
        TotalTurned: 0,
        Coordinates: [],
      };

      PlayerII = {
        id: 2,
        TotalTurned: 0,
        Coordinates: [],
      };
    }
  }, time);
}

function WinningAlgorithm(player) {
  for (const ComboArry_element of combosArry) {
    if (ComboArry_element.every((C) => player.Coordinates.includes(C)))
      return { winnigPlayerID: player.id };
  }
  return { winnigPlayerID: 0 };
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

  if (PlayerI.TotalTurned >= 3 || PlayerII.TotalTurned >= 3) {
    let WinningPlayer_object = WinningAlgorithm(player);
    if (WinningPlayer_object.winnigPlayerID) {
      setTimeout(() => {
        alert(`Player no ${WinningPlayer_object.winnigPlayerID}`);
      }, 500);
      reset(500);
    }
  }
}

for (let index = 0; index < Buttons.length; index++) {
  let Indivisual_Btn = Buttons[index];
  Indivisual_Btn.addEventListener("click", (e) =>
    ApplyFunctioon_on_Buttons(e, Indivisual_Btn)
  );
}

function ApplyFunctioon_on_Buttons(e, Indivisual_Btn) {
  if (playerI_Turn) {
    if (!position_occupied.includes(String(e.target.id)))
      Palyer_activity(false, Indivisual_Btn, PlayerI, e, "	#4ade80", "O");
  } else {
    if (!position_occupied.includes(String(e.target.id)))
      Palyer_activity(true, Indivisual_Btn, PlayerII, e, "#f87171", "X");
  }
}

// function Rmv_eventlistnier(params) {
//   for (let index = 0; index < Buttons.length; index++) {
//     let Indivisual_Btn = Buttons[index];
//     Indivisual_Btn.style.cursor = "not-allowed";
//     console.log("jdwhjierfhuoirhgforhgjohtrogihroigh")
//     Indivisual_Btn.removeEventListener("click", ApplyFunctioon_on_Buttons);
//   }
// }
