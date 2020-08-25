/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entryObj) => {
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            ${entryObj.concept}
            ${entryObj.entry}
            ${entryObj.date}
        </section>
    `
}