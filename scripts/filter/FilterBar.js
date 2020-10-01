import { MoodFilter } from "./MoodFilter.js"

const contentTarget = document.querySelector(".filters")

const FilterBar = () => {
    render = () => {
        contentTarget.innerHTML = `
            ${MoodFilter()}
        `
    }

    render()
}