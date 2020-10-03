export const MoodFilter = (allMoods) => {
  return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${allMoods
              .map((mood) => {
                return `<div><input type="radio" name="moodFilter" value="${mood.id}"/>
                        <label for="moodFilter--${mood.label}">${mood.label}</label></div>
                        `;
              })
              .join("")}
        </fieldset>
        `;
};
