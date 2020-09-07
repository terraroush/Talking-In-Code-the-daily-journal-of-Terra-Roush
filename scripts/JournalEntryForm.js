import { getEntries, useEntries } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".form-container")

 export const render = () => {
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
                    <option value="happy">happy</option>
                    <option value="sad">sad</option>
                    <option value="confused">confused</option>
                    <option value="determined">determined</option>
                    <option value="tired">tired</option>
                    <option value="encouraged">encouraged</option>
                    <option value="excited">excited</option>
                    <option value="nervous">nervous</option>
                </select>
            </fieldset>
            <div class="submitContainer">
                <input type="submit" id="submit" name="submit" value="Record Journal Entry">   
            </div>
        </form>
     `
 }

 export const EntryForm = () => {
     getEntries().then(() => {
         render(useEntries())
     })
 }