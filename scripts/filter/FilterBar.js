import { MoodFilter } from "./MoodFilter.js";
import { getMoods, useMoods } from "../MoodProvider.js";

const contentTarget = document.querySelector(".filters");

export const FilterBar = () => {
  getMoods().then(() => {
    contentTarget.innerHTML = `
            ${MoodFilter(useMoods())}
        `;
  });
};
