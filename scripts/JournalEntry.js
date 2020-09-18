export const JournalEntryHTML = (entryObj) => {
  return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            ${new Date(entryObj.date).toLocaleDateString("en-US")}
            <h4>${entryObj.concept}:</h4>
            <p>${entryObj.entry}</p>
            <p>${entryObj.mood.label}</p>

        </section>
    `;
};
