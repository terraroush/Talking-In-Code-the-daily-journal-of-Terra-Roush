const eventHub = document.querySelector(".container");

eventHub.addEventListener("change", (e) => {
  if (e.target.name === "moodFilter") {
    const moodEvent = new CustomEvent("moodChosen", {
      detail: {
        theChosenMoodId: e.target.value,
      },
    });
    eventHub.dispatchEvent(moodEvent);
    
  }
});

export const MoodFilter = (allMoods) => {
  return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${allMoods
              .map((mood) => {
                return `
                    <div><input type="radio" name="moodFilter" id="moodFilter--${mood.id}" value="${mood.id}"/>
                    <label for="moodFilter--${mood.id}">${mood.label}</label></div>
                    `;
              })
              .join("")}
        </fieldset>
        `;
};
