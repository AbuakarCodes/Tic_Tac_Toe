import { reset } from "../Functions/reset.js"
let alertPopup = null

const popupOverlay = document.getElementById("popup-overlay")
const popupTitle = document.getElementById("popup-title")
const popupBtn = document.querySelector(".popup-btn")
const popupResetBtn = document.querySelector(".PopUP-reset-btn")
const popupCard = document.getElementById("popup-card")

export function showPopup(type, message, color) {
  popupOverlay.style.display = "flex"
  popupTitle.textContent = message

  if (type === "warning") {
    alertPopup = true
    popupCard.classList.add("warning")
    popupBtn.textContent = "Continue Game"
    popupTitle.style.color = "#F87171"
    popupCard.style.borderColor = "#F87171"
    popupBtn.style.backgroundColor = "#F87171"

    popupResetBtn.style.display = "block"
  } else {
    alertPopup = false
    popupCard.classList.remove("warning")
    popupBtn.textContent = "Play Again"
    popupTitle.style.color = color
    popupCard.style.borderColor = color
    popupBtn.style.backgroundColor = color
    popupResetBtn.style.display = "none"
  }
}

export function closePopup(params) {
  popupOverlay.style.display = "none"
}

popupBtn.addEventListener("click", () => {
  closePopup()
  if (!alertPopup) reset(0)
})

popupResetBtn.addEventListener("click", () => reset(0))
