/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const render = (entryCollection) => {
    const entryLog = document.querySelector("#entryLog");
    let HTMLArray = entryCollection.map((entryObj) => {
        return JournalEntryComponent(entryObj);
      });
      entryLog.innerHTML += HTMLArray.join("");
}

export const EntryListComponent = () => {
    getEntries().then(() => {
        const appStateEntries = useEntries();
        render(appStateEntries);
      });

}