let journalEntries = [];

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then((response) => response.json())  // Parse as JSON
        .then((entries) => {
            journalEntries = entries
            // What should happen when we finally have the array?
        })
}
export const useEntries = () => {
    return journalEntries.slice();
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
// export const useJournalEntries = () => {
//     const sortedByDate = entriesArr.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }