export const JournalEntryHTML = (entryObj) => {
  return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            ${entryObj.concept}
            ${entryObj.entry}
            ${new Date(entryObj.date).toLocaleDateString("en-US")}
        </section>
    `;
};
