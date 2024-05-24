// Import the function references that generate the HTML lists
import { HeroList } from "./heros"
import { VillainList } from "./villains"

// Capture the return values of the HTML list generators
const heroListHTML = HeroList()
const villainListHTML = VillainList()

// Build up a single string containing both chunks of HTML
const theWholeEnchilada = `
    <h1>Heroes</h1>
    ${heroListHTML}

    <h1>Villains</h1>
    ${villainListHTML}
`
debugger

const theExistingMainElement = document.querySelector("#container")
