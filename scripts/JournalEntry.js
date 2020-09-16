export const JournalEntryHTML = (entryObj) => {
  return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            ${new Date(entryObj.date).toLocaleDateString("en-US")}
            <h4>${entryObj.concept}:</h3>
            <p>${entryObj.entry}</p>
        </section>
    `;
};
