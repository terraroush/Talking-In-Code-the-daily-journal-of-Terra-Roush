export const JournalEntryHTML = (entryObj) => {
  return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            ${entryObj.concept}
            ${entryObj.entry}
            ${entryObj.date}
        </section>
    `;
};
