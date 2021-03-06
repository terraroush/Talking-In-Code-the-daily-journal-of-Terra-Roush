import { saveEntry } from "./JournalDataProvider.js";
import { getMoods, useMoods } from "./MoodProvider.js";

const eventHub = document.querySelector(".container");

// listen for the submit button: if it's clicked, make a "new entry" from the field values, and store them in a variable. Clear the form/re-render the form, and save the entry to the database
eventHub.addEventListener("click", (e) => {
  if (e.target.id === "submit") {
    let entryConcept = document.querySelector("#concepts");
    let entryText = document.querySelector("#journalText");
    let entryMood = document.querySelector("#mood");
    let date = Date.now()

    const newEntry = {
      concept: entryConcept.value,
      entry: entryText.value,
      date: date,
      moodId: parseInt(entryMood.value)
    };
   EntryForm()

   saveEntry(newEntry);
  }
});

const render = (moodCollection) => {
  const contentTarget = document.querySelector(".form-container");

  contentTarget.innerHTML = `
     <form class="form-container" action="">
            <fieldset>
                <label for="journalDate">Date of Entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
            <fieldset>
                <label for="concepts">Concepts Covered</label>
                <input type="text" name="concepts" id="concepts">
            </fieldset>
            <fieldset>
                <label for="journalText">Journal Entry</label>
                <textarea name="journalText" id="journalText" rows="4" cols="40"></textarea>
            </fieldset>
            <fieldset>
                <label for="mood">Mood of the Day</label>
                <select name="mood" id="mood">
                ${moodCollection
                  .map((mood) => {
                    return `<option value="${mood.id}">${mood.label}</option>`;
                  })
                  .join("")}
                </select>
            </fieldset>
            <div class="submitContainer">
                <button id="submit" name="submit" value="record journal entry">record journal entry</button>   
            </div>
        </form>
     `;
};

export const EntryForm = () => {
  getMoods().then(() => {
    render(useMoods());
  });
};
