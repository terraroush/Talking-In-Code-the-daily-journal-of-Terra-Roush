/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const entriesArr = [
    {
        id: 1,
        date: "08/18/2020",
        concept: "Object Representation of Things",
        entry: "We turned our fish in hard-coded html and turned them into object data types.",
        mood: "determined"
    },
    {
        id: 2,
        date: "08/19/2020",
        concept: "Fundamental Workshops",
        entry: "We learned how to set up components such as data provider, list and html rep.",
        mood: "happy"
    },
    {
        id: 3,
        date: "08/20/2020",
        concept: "Debugger",
        entry: "We fixed errors in code with the begugger.",
        mood: "nervous"
    },
    {
        id: 4,
        date: "08/21/2020",
        concept: "Filtering Source Data into Smaller Arrays",
        entry: "We rebuilt our dom content after iterating our array for more specific objects.",
        mood: "determined"
    },
    {
        id: 5,
        date: "09/01/2020",
        concept: "Decoupling",
        entry: "This was completely new information. It was/is a lot still to digest. The purpose makes sense; the execution I'm still iffy on.",
        mood: "tired"
    },
    {
        id: 6,
        date: "09/02/2020",
        concept: "JSON server/API",
        entry: "We learned how to create our own API with Postman.",
        mood: "happy"
    },
    {
        id: 7,
        date: "09/03/2020",
        concept: ".filter() method",
        entry: "We learned to filter arrays of objects.",
        mood: "nervous"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = entriesArr.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}