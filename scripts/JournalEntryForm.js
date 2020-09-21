import { saveEntry } from "./JournalDataProvider.js";
import { getMoods, useMoods } from "./MoodProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "submit") {
        const entryConcept = document.querySelector("#concepts")
        const entryText = document.querySelector("#journalText")
        const entryMood = document.querySelector("#mood")
        
        const newEntry = {
            concept: entryConcept.value,
            entry: entryText.value,
            date: Date.now(),
            mood: entryMood.label,
        };
        saveEntry(newEntry);
    }
})

const render = moodCollection => {
    const contentTarget = document.querySelector(".form-container")
    
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
                ${moodCollection.map(mood => {
                    
                        return `<option value="${ mood.id }">${ mood.label }</option>`
                        }
                    ).join("")
                }
                </select>
            </fieldset>
            <div class="submitContainer">
                <input type="submit" id="submit" name="submit" value="Record Journal Entry">   
            </div>
        </form>
     `
 }

 export const EntryForm = () => {
     getMoods()
     .then(() => {
         render(useMoods())
     })
 }