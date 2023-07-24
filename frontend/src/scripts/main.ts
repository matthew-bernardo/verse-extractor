import "./components"

const emailInput = document.querySelector("email-input")
const verseRenderer = document.querySelector("verse-renderer")

emailInput.addEventListener("englishVerses", (event: CustomEvent) => {
  verseRenderer.setAttribute("verses", JSON.stringify(event.detail))
})