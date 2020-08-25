/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered

export const EntryListComponent = () => {
    const entryLog = document.querySelector("#entryLog")

    const entriesArr = useJournalEntries()

    let entryHTMLRep = "";
    for (const entryObj of entriesArr) {
        entryHTMLRep += JournalEntryComponent(entryObj);
    }
    entryLog.innerHTML += `${entryHTMLRep}`;
}