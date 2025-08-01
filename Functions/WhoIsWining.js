import { PlayerI, PlayerII } from "../Data/DataStrustures.js"
import { Buttons_Disable, WinningAlgorithm } from "./minimalFunctions.js"
import { reset } from "./reset.js"
import { VariablesObject } from "../main.js"


function WhoIsWining(player) {
  if (PlayerI.TotalTurned >= 3 || PlayerII.TotalTurned >= 3) {
    let WinningPlayer_object = WinningAlgorithm(player)
    if (WinningPlayer_object.winnigPlayerID) {
      Buttons_Disable(1)
      setTimeout(() => {
        Buttons_Disable(0)
        if (WinningPlayer_object.winnigPlayerID == 1) {
          alert("O Won")
          playerI_Turn = true
        } else alert("X Won")
      }, 500)
      reset(500)
    }
  }
}

export { WhoIsWining }
